import pLimit from 'p-limit'
import { request } from 'graphql-request'
import { SUBQUERY_ENDPOINT, SUBSQUID_ENDPOINT } from '../config'
import { subqueryQueryBuilder, subsquidQueryBuilder } from './queryBuilders'
import { NodeScheme } from '../types'
import { subqueryConcurrency, subqueryLimit, subsquidConcurrency, subsquidLimit } from '../const'
import { sleep } from '.'
import fs from 'fs'

export async function requestData(
    type: 'subquery' | 'subsquid',
    modelName: string,
    nodeScheme: NodeScheme
): Promise<any> {
    const endpoint = type === 'subquery' ? SUBQUERY_ENDPOINT : SUBSQUID_ENDPOINT
    const queryBuilder = type === 'subquery' ? subqueryQueryBuilder : subsquidQueryBuilder
    const limit = type === 'subquery' ? subqueryLimit : subsquidLimit
    const concurrency = type === 'subquery' ? subqueryConcurrency : subsquidConcurrency

    const data: any = []

	const now = performance.now()

    // Make an initial request to get the totalCount
    const initialQuery = queryBuilder(modelName, nodeScheme, limit, 0)
    let batch: any = null
    try {
        batch = await request(endpoint, initialQuery)
    } catch (error) {
        console.log(error)
        console.log(`[${type}] Error while fetching totalCount, retrying in 5 seconds...`)
        await sleep(5000)
        return requestData(type, modelName, nodeScheme)  // Retry the initial request
    }
    const totalCount = batch[modelName].totalCount

    const queriesList: string[] = []
    for (let offset = 0; offset < totalCount; offset += limit) {
        queriesList.push(queryBuilder(modelName, nodeScheme, limit, offset))
    }
    console.log(`\n[${type}] Builded ${Math.ceil(totalCount / limit)} queries\n`)

    // Fetch the data in parallel, with a maximum of 10 concurrent requests
    const limitConcurrency = pLimit(concurrency)
    const tasks = queriesList.map((query, index) => {
        return limitConcurrency(async () => {
            // console.log(`Starting fetch for query ${index + 1} / ${queriesList.length}...`)
            let batch: any = null
            let waitingTime = 20_000
            const requestAndHandleErrors = async (): Promise<any> => {
                try {
                    batch = await request(endpoint, query)
                    console.log(`[${type}] Query ${index + 1} / ${queriesList.length} fetched successfully`)
                    return batch[modelName].edges.map((edge: any) => edge.node)
                } catch (error) {
                    console.log(`[${type}] Error while fetching data, retrying in ${Math.ceil(waitingTime / 1000)} seconds...`)
                    await sleep(waitingTime)
                    waitingTime = Math.min(waitingTime + 20_000, 300_000)
                    return requestAndHandleErrors()
                }
            }
            return requestAndHandleErrors()
        })
    })
    const results = await Promise.all(tasks) as any[][]

    results.forEach((result, index) => {
        console.log(`[${type}] Processing result for query ${index + 1} / ${results.length}`)
        data.push(...result)
    })

	const processingTime = (performance.now() - now) / 1000
    console.log(`[${type}] Fetched ${data.length} / ${totalCount} in ${processingTime} seconds`)

    return data
}

export async function fetchAndSaveData(
	{
        subsquidNodeScheme,
        subqueryNodeScheme,
        dataDir,
        subqueryModelName,
        subsquidModelName,
        processSubsquidNode,
        processSubqueryNode
    }:
	{ 
        subsquidNodeScheme: NodeScheme,
        subqueryNodeScheme: NodeScheme,
        dataDir: string,
        subqueryModelName: string,
        subsquidModelName: string,
        processSubsquidNode?: (node: any) => any
        processSubqueryNode?: (node: any) => any
    }
) {
	let subsquid = await requestData('subsquid', subsquidModelName, subsquidNodeScheme)
    if (processSubsquidNode) {
        subsquid = subsquid.map(processSubsquidNode)
    }

	let subquery = await requestData('subquery', subqueryModelName, subqueryNodeScheme)
    if (processSubqueryNode) {
        subquery = subquery.map(processSubqueryNode)
    }
	
	await fs.promises.mkdir(dataDir, { recursive: true })

    await fs.promises.writeFile(dataDir + 'subsquid.json', JSON.stringify(subsquid, null, 2), 'utf-8')
	await fs.promises.writeFile(dataDir + 'subquery.json', JSON.stringify(subquery, null, 2), 'utf-8')
}