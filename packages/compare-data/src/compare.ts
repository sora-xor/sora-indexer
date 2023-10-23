import * as historyElements from './modules/historyElements'
import * as assets from './modules/assets'
import * as assetSnapshots from './modules/assetSnapshots'
import * as poolXYKs from './modules/poolXYKs'

async function main() {
	await historyElements.compare()
	// await assets.compare()
	await assetSnapshots.compare()
	// await poolXYKs.compare()
}

main()
