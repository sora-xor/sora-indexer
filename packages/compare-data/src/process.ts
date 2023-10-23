import * as historyElements from './modules/historyElements'
import * as assets from './modules/assets'
import * as assetSnapshots from './modules/assetSnapshots'
import * as poolXYKs from './modules/poolXYKs'

async function process() {
	await historyElements.process()
	// await assets.process()
	await assetSnapshots.process()
	// await poolXYKs.process()
}

process()
