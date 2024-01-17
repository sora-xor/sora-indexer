import { writeFileSync } from 'fs'
import * as path from 'path'
import * as YAML from 'js-yaml'
import dotenv from 'dotenv'

import { Environment, environments } from '../src/environments'

dotenv.config()

// Obtain environment from npm parameters if provided
let environment: Environment = (process.argv[2] as Environment) || (process.env.INDEXER_ENVIRONMENT as Environment) || Environment.DEV

// if provided environment does not match with known environments, default to DEV
if (!Object.values(Environment).includes(environment)) {
	environment = Environment.DEV
}

// Obtain environment details
const details = environments[environment]

// Create yaml configuration
const configuration = {
	manifestVersion: 'subsquid.io/v0.1',
	name: details.name,
	version: details.version,
	description: details.description,
	deploy: {
		addons: {
			postgres: {},
		},
		processor: {
			env: {
				INDEXER_ENVIRONMENT: environment,
				INDEXER_START_BLOCK: 0,
				SQD_DEBUG: 'sqd:processor:mapping',
			},
			cmd: ['node', 'lib/processor'],
		},
		api: {
			cmd: [
				'npx',
				'squid-graphql-server',
				'--subscriptions',
				'--dumb-cache',
				'in-memory',
				'--dumb-cache-ttl',
				'1000',
				'--dumb-cache-size',
				'100',
				'--dumb-cache-max-age',
				'1000',
			],
		},
	},
	scale: {
		dedicated: true,
		addons: {
			postgres: {
				profile: details.scaleProfiles.postgres,
				storage: details.storage,
			},
		},
		processor: {
			profile: details.scaleProfiles.processor,
		},
		api: {
			profile: details.scaleProfiles.api,
		},
	},
}

// Translate JSON to YAML
const yamlConfig = YAML.dump(configuration)

// Define the file name
const fileName = 'squid.yaml'

// Write the configuration to a yaml file
writeFileSync(fileName, yamlConfig)

// Get the full path of the file
const fullPath = path.resolve(fileName)

console.log(`The squid.yaml file for the ${environment} environment has been created at: ${fullPath}`)
