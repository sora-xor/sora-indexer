import fs from 'fs'
import path from 'path'

type ClassName = string
type ClassInfo = {
	environment: Environment
	versions: { hash: string; version: number }[]
}
type ClassList = Record<ClassName, ClassInfo[]>

import { Environment } from '../src/environments'
;['calls', 'events', 'storage'].forEach((entityType) => {
	const entityTypeSingle = entityType.replace(/s$/, '')
	const entityTypeCapital = entityType.charAt(0).toUpperCase() + entityType.slice(1)
	const entityTypeSingleCapital = entityTypeSingle.charAt(0).toUpperCase() + entityTypeSingle.slice(1)

	const classes: ClassList = {}

	const environments = [
		Environment.PRODUCTION,
		...Object.values(Environment).filter((environment) => environment !== Environment.PRODUCTION),
	]
	environments.forEach((environment) => {
		const filePath = `src/types/generated/${environment}/${entityType}.ts`
		const content = fs.readFileSync(filePath, 'utf-8')
		const classCodeList = content.split(/(?=export class)/g)

		classCodeList.forEach((classCode) => {
			const versionCodeList = classCode.split(/(?=get isV)/g)
			const className = classCode.match(/(?<=export class )(\w+)/)?.[0]
			if (!className) return
			if (!classes[className]) {
				classes[className] = []
			}
			const classInfo: ClassInfo = { environment, versions: [] }
			versionCodeList.forEach((versionCode) => {
				const match = versionCode.match(/get isV(\d+)\(\): \w* {\n[ \w.()']*=== '(\w*)'/)
				const version = match?.[1]
				const hash = match?.[2]
				if (hash && version) {
					classInfo.versions.push({
						hash,
						version: parseInt(version),
					})
				}
			})
			classes[className].push(classInfo)
		})
	})

	const outputPath = path.resolve(__dirname, `../src/types/generated/${entityType}.ts`)
	const outputImports: string[] = []
	const outputData: string[] = []

	if (entityType === 'storage') {
		outputImports.push(
			`import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './${Environment.PRODUCTION}/support'`,
		)
	} else {
		outputImports.push(
			`import {Chain, ChainContext, ${entityTypeSingleCapital}Context, ${entityTypeSingleCapital}, Result, Option} from './${Environment.PRODUCTION}/support'`,
		)
	}

	Object.values(Environment).forEach((environment) => {
		const filePath = `./${environment}/${entityType}`
		outputImports.push(`import * as ${environment}${entityTypeCapital} from '${filePath}'`)
	})

	outputData.push('\n')

	Object.entries(classes).forEach(([className, classInfoArray]) => {
		const versions: {
			environment: Environment
			version: number
			hash: string
		}[] = []

		classInfoArray.forEach((classInfo) => {
			classInfo.versions.forEach((version) => {
				if (versions.some((v) => v.hash === version.hash)) return
				versions.push({
					environment: classInfo.environment,
					version: version.version,
					hash: version.hash,
				})
			})
		})

		if (entityType === 'storage') {
			outputData.push(`export class ${className} {`)
		} else {
			outputData.push(`export class ${className} {`)
		}

		const environments = new Set(
			Object.values(Environment).filter((environment) => {
				return classInfoArray.some((classInfo) => classInfo.environment === environment)
			}),
		)

		environments.forEach((environment) => {
			outputData.push(`\tprivate readonly ${environment}: ${environment}${entityTypeCapital}.${className}`)
		})
		outputData.push(``)

		if (entityType === 'storage') {
			outputData.push(`\tconstructor(ctx: ChainContext, ${entityTypeSingle}: Block) {`)
		} else {
			outputData.push(`\tconstructor(ctx: ChainContext, ${entityTypeSingle}: ${entityTypeSingleCapital}) {`)
		}
		environments.forEach((environment) => {
			outputData.push(`\t\tthis.${environment} = new ${environment}${entityTypeCapital}.${className}(ctx, ${entityTypeSingle})`)
		})
		outputData.push(`\t}`)
		outputData.push(``)
		if (entityType === 'storage') {
			outputData.push(`\tget isExists(): boolean {`)
			outputData.push(
				`\t\treturn ${Array.from(environments)
					.map((environment) => `this.${environment}.isExists`)
					.join(' || ')}`,
			)
			outputData.push('\t}')
			outputData.push(``)
		}

		versions.forEach((v) => {
			const { environment, version } = v
			const prefix = environment === Environment.PRODUCTION ? '' : environment.charAt(0).toUpperCase() + environment.slice(1)
			outputData.push(`\tget isV${version}${prefix}(): ${environment}${entityTypeCapital}.${className}['isV${version}'] {`)
			outputData.push(`\t\treturn this.${environment}.isV${version}`)
			outputData.push('\t}')
			outputData.push(`\tget asV${version}${prefix}(): ${environment}${entityTypeCapital}.${className}['asV${version}'] {`)
			outputData.push(`\t\treturn this.${environment}.asV${version}`)
			outputData.push('\t}')
		})

		outputData.push('}\n')
	})

	fs.writeFileSync(outputPath, [...outputImports, ...outputData].join('\n'))
})
