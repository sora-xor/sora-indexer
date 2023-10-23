import { Node } from '../types'

const fs = require('fs')

export async function processData<T extends Node>(
    {
		dataDir,
        processSubsquidNode,
        processSubqueryNode
    }:
	{
		dataDir: string,
        processSubsquidNode?: (node: any) => any
        processSubqueryNode?: (node: any) => any
    }
) {
	const subsquid: T[] = require(`../../${dataDir}subsquid.json`)
	const subquery: T[] = require(`../../${dataDir}subquery.json`)

	const subsquidProcessed = processSubsquidNode ? subsquid.map(processSubsquidNode) : subsquid
	const subqueryProcessed = processSubqueryNode ? subquery.map(processSubqueryNode) : subquery


	await fs.promises.writeFile(dataDir + 'subsquidProcessed.json', JSON.stringify(subsquidProcessed, null, 2), 'utf-8')
	await fs.promises.writeFile(dataDir + 'subqueryProcessed.json', JSON.stringify(subqueryProcessed, null, 2), 'utf-8')
}