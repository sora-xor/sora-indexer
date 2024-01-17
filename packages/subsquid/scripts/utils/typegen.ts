import { Environment } from '../../src/environments'

export function getTypegenConfig(environment: Environment) {
	return {
		outDir: `src/types/generated/${environment}`,
		specVersions: `spec/${environment}.jsonl`,
		typesBundle: 'src/typesBundle.json',
		events: true,
		calls: true,
		storage: true,
	}
}
