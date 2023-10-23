import { HistoryElement, HistoryElementCall } from '../types/generated'
import { NodeScheme } from '../types'
import { fetchAndSaveData } from '../utils/data'
import { compare as compareNodes } from '../utils/compare'
import { processData } from '../utils/process'

const fs = require('fs')

const dataDir = 'data/historyElements/'

const subqueryNodeScheme: NodeScheme = [
	'id',
	'blockHeight',
	'blockHash',
	'address',
	'method',
	'module',
	'networkFee',
	'timestamp',
	'data',
]

type Node = HistoryElement

const subsquidNodeScheme: NodeScheme = [
	...subqueryNodeScheme,
	['calls', ['id', 'method', 'module', 'data']],
]

export async function fetchData() {
	console.log('Start fetching history elements data...')
	await fetchAndSaveData({
		subsquidNodeScheme,
		subqueryNodeScheme,
		dataDir,
		subsquidModelName: 'historyElementsConnection',
		subqueryModelName: 'historyElements'
	})
}

export async function process() {
	await processData<Node>({
		dataDir,
		processSubqueryNode: (node: any) => {
			let data: any = null
			let calls: HistoryElementCall[] = []
			if (Array.isArray(node.data)) {
				calls = node.data.map((call: any) => {
					if (call.data && call.data.args) {
						return {
							...call,
							data: transformArgs(call.data.args),
						}
					} else {
						return call
					}
				})
			} else {
				data = node.data
			}
			return {
				...node,
				data,
				calls,
			}
		}
	})
}

export async function compare() {
	const { subqueryOnly } = await compareNodes<Node>(dataDir)

	const subqueryOnlyNames = Array.from(new Set(subqueryOnly.map(item => item.module + '.' + item.method)))

    await fs.promises.writeFile(dataDir + 'subqueryOnlyNames.json', JSON.stringify(subqueryOnlyNames, null, 2), 'utf-8')
}

function toCamelCase(str: string): string {
	return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())
}

function transformValue(key: string, value: any): any {
	if (key === 'id' || key.endsWith('_id')) {
		return parseInt(value)
	}
	return value
}

function transformArgs(input: Record<string, any>): Record<string, any> {
	const output: Record<string, any> = {}
	for (const [key, value] of Object.entries(input)) {
		const newKey = toCamelCase(key)
		output[newKey] = transformValue(key, value)
	}
	console.log(output)
	return output
}