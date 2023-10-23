import dotenv from 'dotenv'
import { readFile, writeFile } from 'fs/promises'

dotenv.config()

function getVersionsFromClass(cls: { new (...args: any[]): any }) {
	const keys = Object.getOwnPropertyNames(cls.prototype)
	const versions = keys.filter((key) => key.startsWith('isV')).map((key) => key.slice(3))
	return versions
}

async function writeToFile(fileContent: string, pattern: RegExp, replacement: string) {
	if (fileContent.match(pattern)) {
		// Replace the existing definition
		return fileContent.replace(pattern, replacement)
	} else {
		// Append the new definition
		return fileContent + replacement
	}
}

async function generateAdditionalTypes() {
	const filePath = 'src/types/generated/calls.ts'

	const calls = await import('../src/types/generated/calls')
	const versions = getVersionsFromClass(calls.UtilityBatchAllCall)
	const versionsArray = `[${versions.map((v) => `'${v}'`).join(', ')}] as const`
	let fileContent = await readFile(filePath, 'utf8')
	const variableName = 'utilityBatchAllCallVersions'
	const replacementLine = `\nexport const ${variableName} = ${versionsArray}\n`
	const pattern = new RegExp(`\\nexport const ${variableName} = \\[.*?\\] as const\\n?`, 'g')

	fileContent = await writeToFile(fileContent, pattern, replacementLine)

	await writeFile(filePath, fileContent)
}

generateAdditionalTypes().catch(console.error)
