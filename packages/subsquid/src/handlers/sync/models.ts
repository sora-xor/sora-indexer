import { assetSnapshotsStorage, assetStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolsStorage } from '../../utils/pools'
import { BlockContext } from '../../types'
import { getSyncModelsLog } from '../../utils/logs'
import { shouldUpdate } from '../../utils'
import { orderBooksSnapshotsStorage, orderBooksStorage } from '../../utils/orderBook'

const STATS_UPDATE_DIFF = 60 * 60 // seconds

export async function syncModels(ctx: BlockContext): Promise<void> {
	getSyncModelsLog(ctx).debug('Sync models')

	await poolsStorage.sync(ctx)
	await assetSnapshotsStorage.sync(ctx)
	await assetStorage.sync(ctx)
	await orderBooksSnapshotsStorage.sync(ctx)
	await orderBooksStorage.sync(ctx)
	await networkSnapshotsStorage.sync(ctx)
}

export async function updateDailyStats(ctx: BlockContext): Promise<void> {
	if (!shouldUpdate(ctx, STATS_UPDATE_DIFF)) return

	getSyncModelsLog(ctx).debug('Update daily stats')
  
	await assetStorage.updateDailyStats(ctx)
	await assetStorage.sync(ctx)
	await orderBooksStorage.updateDailyStats(ctx)
	await orderBooksStorage.sync(ctx)
}

export async function updateAssetsWeeklyStats(ctx: BlockContext): Promise<void> {
	if (!shouldUpdate(ctx, STATS_UPDATE_DIFF)) return

	getSyncModelsLog(ctx).debug('Update assets weekly stats')
  
	await assetStorage.updateWeeklyStats(ctx)
	await assetStorage.sync(ctx)
}
