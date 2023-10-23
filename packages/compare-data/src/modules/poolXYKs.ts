import { PoolXYK } from '../types/generated'
import { sortById } from '../utils/sort'
import { NodeScheme } from '../types'
import { fetchAndSaveData } from '../utils/data'

const fs = require('fs')

const dataDir = 'data/poolXYKs/'

type Node = PoolXYK

const nodeScheme: NodeScheme = [
	'id',
	'multiplier',
	'priceUSD',
	'strategicBonusApy',
	'baseAssetReserves',
	'targetAssetReserves',
	'baseAsset',
	'targetAsset'
]

export async function fetchData() {
	console.log('Start fetching poolXYK data...')
	await fetchAndSaveData({
		nodeScheme,
		dataDir,
		subqueryModelName: 'poolXYKs',
		subsquidModelName: 'poolXyksConnection',
	})
}

export async function compare() {
	const subquery: Node[] = require(`../../${dataDir}subquery.json`)
	const subsquid: Node[] = require(`../../${dataDir}subsquid.json`)
	const subquerySorted = sortById(subquery)
	const subsquidSorted = sortById(subsquid)
	const subqueryIds = new Set(subquerySorted.map(item => item.id))
	const subsquidIds = new Set(subsquidSorted.map(item => item.id))
	const subqueryOnly = subquerySorted.filter(item => !subsquidIds.has(item.id))
	const subqueryOnlySorted = sortById(subqueryOnly)
	const subsquidOnly = subsquidSorted.filter(item => !subqueryIds.has(item.id))
	const subsquidOnlySorted = sortById(subsquidOnly)
	const common = subquerySorted.filter(item => subsquidIds.has(item.id))
	const commonSorted = sortById(common)

	await fs.promises.mkdir(dataDir, { recursive: true })

	await fs.promises.writeFile(dataDir + 'common.json', JSON.stringify(commonSorted, null, 2), 'utf-8')
    await fs.promises.writeFile(dataDir + 'subsquidOnly.json', JSON.stringify(subsquidOnlySorted, null, 2), 'utf-8')
    await fs.promises.writeFile(dataDir + 'subqueryOnly.json', JSON.stringify(subqueryOnlySorted, null, 2), 'utf-8')
}