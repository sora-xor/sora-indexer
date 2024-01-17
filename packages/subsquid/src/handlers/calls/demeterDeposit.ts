import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, BlockContext, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { getCallData, getEventData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function demeterDepositCallHandler(ctx: BlockContext, call: Call<'DemeterFarmingPlatform.deposit'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.demeterFarmingPlatform.deposit, call)

	const baseAssetId = 'baseAsset' in data ? getAssetId(data.baseAsset) : XOR
	const assetId = getAssetId(data.poolAsset)
	const rewardAssetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm
	const desiredAmount = data.pooledTokens as AssetAmount

	let amount: string

	assertDefined(call.extrinsic)
	const event = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['DemeterFarmingPlatform.Deposited'])

	if (event) {
		const data = getEventData(ctx, events.demeterFarmingPlatform.deposited, event)

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

	const historyElement = await createCallHistoryElement(ctx, call)
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
