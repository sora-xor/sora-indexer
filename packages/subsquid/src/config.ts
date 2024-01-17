import dotenv from 'dotenv'
import environments from './environments'

dotenv.config()

const environment = process.env.INDEXER_ENVIRONMENT || 'stage'
const environmentConfig = environments[environment as keyof typeof environments]

if (!environmentConfig) {
	throw new Error(`Environment ${environment} is not defined`)
}

export const { chain, archive } = environmentConfig
export const startBlock = process.env.INDEXER_START_BLOCK ? parseInt(process.env.INDEXER_START_BLOCK) : 0
export const testLogMode = process.env.INDEXER_TEST_LOG_MODE ? process.env.INDEXER_TEST_LOG_MODE === 'true' : false
export const performanceLogMode = process.env.INDEXER_PERFORMANCE_LOG_MODE ? process.env.INDEXER_PERFORMANCE_LOG_MODE === 'true' : false
export const performanceLogMinTime = process.env.INDEXER_PERFORMANCE_LOG_MIN_TIME
	? parseInt(process.env.INDEXER_PERFORMANCE_LOG_MIN_TIME)
	: 0
