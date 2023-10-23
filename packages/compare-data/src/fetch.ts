import * as historyElements from './modules/historyElements'
import * as assets from './modules/assets'
import * as assetSnapshots from './modules/assetSnapshots'
import * as poolXYKs from './modules/poolXYKs'

async function fetch() {
	await historyElements.fetchData()
	// await assets.fetchData()
	await assetSnapshots.fetchData()
	// await poolXYKs.fetchData()
}

fetch()
