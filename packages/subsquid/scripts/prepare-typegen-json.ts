import { getTypegenConfig } from './utils/typegen'
import { Environment } from '../src/environments'

const args = process.argv.slice(2)

const fs = require('fs')

const typegenJsonPath = './typegen.json'

const environment = args[0] as Environment

async function buildTypegenJson() {
	fs.writeFileSync(typegenJsonPath, JSON.stringify(getTypegenConfig(environment), null, 4))

	console.log(`${typegenJsonPath} for ${environment} successfully builded`)
}

buildTypegenJson().catch(console.error)
