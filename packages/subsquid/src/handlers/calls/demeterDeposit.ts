import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, BlockContext, CallItem } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformDepositedEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformDepositCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'

export async function demeterDepositCallHandler(ctx: BlockContext, callItem: CallItem<'DemeterFarmingPlatform.deposit'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new DemeterFarmingPlatformDepositCall(ctx, callItem.call)

	const data = getEntityData(ctx, call, callItem)

	const baseAssetId = 'baseAsset' in data ? getAssetId(data.baseAsset) : XOR
	const assetId = getAssetId(data.poolAsset)
	const rewardAssetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm
	const desiredAmount = data.pooledTokens as AssetAmount

	let amount: string

	const eventItem = findEventByExtrinsicHash(ctx, callItem.extrinsic.hash, ['DemeterFarmingPlatform.Deposited'])

	if (eventItem) {
		const event = new DemeterFarmingPlatformDepositedEvent(ctx, eventItem.event)

		const data = getEntityData(ctx, event, eventItem)

		const assetAmount = typeof data[4] === 'bigint' ? data[4] : (data[5] as AssetAmount)

		// a little trick - we get decimals from pool asset, not lp token
		amount = formatU128ToBalance(assetAmount, assetId)
	} else {
		amount = formatU128ToBalance(desiredAmount, assetId)
	}

	let details = {
		baseAssetId,
		assetId,
		rewardAssetId,
		isFarm,
		amount,
	}

	const historyElement = await createHistoryElement(ctx, callItem)
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
