import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { XOR } from '../../utils/consts'
import { getCallData, getEventData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function demeterWithdrawCallHandler(ctx: BlockContext, call: Call<'DemeterFarmingPlatform.withdraw'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	assertDefined(call.extrinsic)
	const extrinsicHash = call.extrinsic.hash

	const data = getCallData(ctx, calls.demeterFarmingPlatform.withdraw, call)

	const baseAssetId = 'baseAsset' in data ? getAssetId(data.baseAsset) : XOR
	const assetId = getAssetId(data.poolAsset)
	const rewardAssetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm
	const desiredAmount = data.pooledTokens as AssetAmount

	let amount: string

	const event = findEventByExtrinsicHash(ctx, extrinsicHash, ['DemeterFarmingPlatform.Withdrawn'])

	if (event) {
		const data = getEventData(ctx, events.demeterFarmingPlatform.withdrawn, event)

		const assetAmount = data[1] as AssetAmount

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

	const historyElement = await createCallHistoryElement(ctx, call)
	if (!historyElement) return
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
