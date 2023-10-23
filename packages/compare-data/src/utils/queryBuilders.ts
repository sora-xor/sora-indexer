import { gql } from 'graphql-request'
import { NodeScheme } from '../types'

function subqueryNodeSchemeToString(nodeScheme: NodeScheme): string {
	return nodeScheme.map(item => Array.isArray(item) ? item[0] : item).join('\n')
}

function subsquidNodeSchemeToString(nodeScheme: NodeScheme): string {
	return nodeScheme.map(item => Array.isArray(item) ? `${item[0]} { ${subsquidNodeSchemeToString(item[1])} }` : item).join('\n')
}

function variablesToString(variables: any) {
	return Object.entries(variables)
		.filter(item => item[1] !== null)
		.map(item => `${item[0]}: ${typeof item[1] === 'string' ? `"${item[1]}"` : item[1]}` ).join(', ')
}

export const subqueryQueryBuilder = (name: string, nodeScheme: NodeScheme, limit: number, offset: number) => {
	const variables = {
		first: limit,
		offset
	}
	const variablesString = variablesToString(variables)
	const nodeSchemeString = subqueryNodeSchemeToString(nodeScheme)
	return gql`
		query MyQuery {
			${name}(${variablesString}) {
				totalCount
				edges {
					node {
						${nodeSchemeString}
					}
				}
			}
		}
	`
}

export const subsquidQueryBuilder = (name: string, nodeScheme: NodeScheme, limit: number, offset: number) => {
	const variables = {
		first: limit,
		after: offset > 0 ? String(offset) : null
	}
	const variablesString = variablesToString(variables)
	const nodeSchemeString = subsquidNodeSchemeToString(nodeScheme)
	console.log()
	return gql`
		query MyQuery {
			${name}(orderBy: id_ASC, ${variablesString}) {
				totalCount
				edges {
					node {
						${nodeSchemeString}
					}
				}
			}
		}
	`
}