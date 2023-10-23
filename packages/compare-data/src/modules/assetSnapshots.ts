import { AssetSnapshot } from '../types/generated'
import { NodeScheme } from '../types'
import { fetchAndSaveData } from '../utils/data'
import { compare as compareNodes } from '../utils/compare'
import { processData } from '../utils/process'

const dataDir = 'data/assetsSnapshots/'

const nodeScheme: NodeScheme = [
	'id',
	'liquidity',
	'mint',
	'supply',
	'timestamp',
	'type',
	'burn',
	['priceUSD', ['close', 'high', 'low', 'open']],
]

type Node = AssetSnapshot

export async function fetchData() {
	console.log('Start fetching asset snapshots data...')
	await fetchAndSaveData({
		subqueryNodeScheme: nodeScheme,
		subsquidNodeScheme: nodeScheme,
		dataDir,
		subqueryModelName: 'assetSnapshots',
		subsquidModelName: 'assetSnapshotsConnection',
	})
}

export async function process() {
	await processData<Node>({
		dataDir
	})
}

export async function compare() {
	await compareNodes<Node>(dataDir)
}