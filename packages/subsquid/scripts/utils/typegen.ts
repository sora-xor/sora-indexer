import { Environment, environments } from '../../src/environments'

export function getTypegenConfig(environment: Environment) {
	return {
		outDir: `src/types/generated/${environment}`,
		specVersions: environments[environment].archive,
		typesBundle: 'src/typesBundle.json',
		events: true,
		calls: true,
		storage: true,
	}
}
