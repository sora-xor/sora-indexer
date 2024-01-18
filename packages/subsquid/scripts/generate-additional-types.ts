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
