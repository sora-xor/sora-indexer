import { Node } from '../types'
import { sortByBlockHeightOrTimestamp, sortById } from './sort'
import _ from 'lodash'

const fs = require('fs')

export async function compare<T extends Node>(dataDir: string) {
	const subsquid: T[] = require(`../../${dataDir}subsquidProcessed.json`)
	const subquery: T[] = require(`../../${dataDir}subqueryProcessed.json`)

	const subsquidSorted = sortById(subsquid)
	const subquerySorted = sortById(subquery)

	const subsquidIds = new Set(subsquidSorted.map(item => item.id))
	const subqueryIds = new Set(subquerySorted.map(item => item.id))

	const subsquidOnly = sortByBlockHeightOrTimestamp(subsquidSorted.filter(item => !subqueryIds.has(item.id)))
	const subqueryOnly = sortByBlockHeightOrTimestamp(subquerySorted.filter(item => !subsquidIds.has(item.id)))

	const subqueryCommon = subquerySorted.filter(item => subsquidIds.has(item.id))

	const subsquidCommon = subsquidSorted.filter(item => subqueryIds.has(item.id))

	const subqueryDifferent: T[] = []
	const subsquidDifferent: T[] = []

	for (let i = 0; i < subsquidCommon.length; i++) {
		if (!_.isEqual(subsquidCommon[i], subqueryCommon[i])) {
			subqueryDifferent.push(subqueryCommon[i])
			subsquidDifferent.push(subsquidCommon[i])
		}
	}

	await fs.promises.mkdir(dataDir, { recursive: true })

	await fs.promises.writeFile(dataDir + 'subsquidCommon.json', JSON.stringify(subsquidCommon, null, 2), 'utf-8')
	await fs.promises.writeFile(dataDir + 'subqueryCommon.json', JSON.stringify(subqueryCommon, null, 2), 'utf-8')

    await fs.promises.writeFile(dataDir + 'subsquidOnly.json', JSON.stringify(subsquidOnly, null, 2), 'utf-8')
    await fs.promises.writeFile(dataDir + 'subqueryOnly.json', JSON.stringify(subqueryOnly, null, 2), 'utf-8')

	await fs.promises.writeFile(dataDir + 'subsquidDifferent.json', JSON.stringify(subsquidDifferent, null, 2), 'utf-8')
	await fs.promises.writeFile(dataDir + 'subqueryDifferent.json', JSON.stringify(subqueryDifferent, null, 2), 'utf-8')

	return {
		subsquid: subsquidSorted,
		subquery: subquerySorted,

		subsquidOnly,
		subqueryOnly,

		subqueryCommon,
		subsquidCommon,

		subqueryDifferent,
		subsquidDifferent,
	}
}