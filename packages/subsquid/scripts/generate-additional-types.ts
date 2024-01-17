import dotenv from 'dotenv'
import { readFile, writeFile } from 'fs/promises'

dotenv.config()

function getVersionsFromObject(obj: {}) {
	const keys = Object.getOwnPropertyNames(obj)
	const versions = keys.filter((key) => key.startsWith('v')).map((key) => key.slice(1))
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
	const filePath = 'src/types/generated/merged/calls.ts'

	const calls = await import('../src/types/generated/merged/calls')
	const versions = getVersionsFromObject(calls.utility.batchAll)
	const versionsArray = `[${versions.map((v) => `'${v}'`).join(', ')}] as const`
	let fileContent = await readFile(filePath, 'utf8')
	const variableName = 'utilityBatchAllCallVersions'
	const replacementLine = `\nexport const ${variableName} = ${versionsArray}\n`
	const pattern = new RegExp(`\\nexport const ${variableName} = \\[.*?\\] as const\\n?`, 'g')

	fileContent = await writeToFile(fileContent, pattern, replacementLine)

	await writeFile(filePath, fileContent)
}

generateAdditionalTypes().catch(console.error)
