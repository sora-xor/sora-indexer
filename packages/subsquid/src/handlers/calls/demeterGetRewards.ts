import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformRewardWithdrawnEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformGetRewardsCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

export async function demeterGetRewardsCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'DemeterFarmingPlatform.get_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash

	const call = new DemeterFarmingPlatformGetRewardsCall(ctx, callItem.call)

	const data = getEntityData(ctx, call, callItem)

	const assetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm

	let amount: string

	const eventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['DemeterFarmingPlatform.RewardWithdrawn'])

	if (eventItem) {
		const event = new DemeterFarmingPlatformRewardWithdrawnEvent(ctx, eventItem.event)
		const data = getEntityData(ctx, event, eventItem)

		const assetAmount = data[1] as AssetAmount

		amount = formatU128ToBalance(assetAmount, assetId)
	} else {
		amount = '0'
	}

	const details = {
		assetId: assetId,
		isFarm: isFarm,
		amount,
	}

	const historyElement = await createHistoryElement(ctx, callItem)
	if (!historyElement) return
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, callItem).debug(`Saved demeterFarmingPlatform getRewards`)
}
