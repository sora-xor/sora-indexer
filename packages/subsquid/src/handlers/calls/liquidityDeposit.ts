import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { BlockContext, AssetAmount, Call } from '../../types'
import { getCallData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { calls } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function liquidityDepositCallHandler(ctx: BlockContext, call: Call<'PoolXYK.deposit_liquidity'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	const data = getCallData(ctx, calls.poolXyk.depositLiquidity, call)

	const baseAssetId = getAssetId(data.inputAssetA)
	const targetAssetId = getAssetId(data.inputAssetB)
	const assetADesired = data.inputADesired as AssetAmount
	const assetBDesired = data.inputBDesired as AssetAmount
	const baseAssetAmount = formatU128ToBalance(assetADesired, baseAssetId)
	const targetAssetAmount = formatU128ToBalance(assetBDesired, targetAssetId)

	const details = {
		type: 'Deposit',
		baseAssetId,
		targetAssetId,
		baseAssetAmount,
		targetAssetAmount,
	}

	assertDefined(call.extrinsic)
	const transfers = findEventsByExtrinsicHash(ctx, call.extrinsic.hash, ['Balances.Transfer', 'Tokens.Transfer'])

	if (transfers.length === 2) {
		const [baseAssetTransfer, targetAssetTransfer] = transfers

		// We assume that events go in the same order as in the blockchain
		// First the event with the base asset, and then the event with the target asset
		const { amount: amountA } = getAssetsTransferEventData(ctx, baseAssetTransfer)
		const { amount: amountB } = getAssetsTransferEventData(ctx, targetAssetTransfer)

		details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
		details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
	}

	await addDataToHistoryElement(ctx, historyElement, details)

	await poolsStorage.getPool(ctx, baseAssetId, targetAssetId)
	await updateHistoryElementStats(ctx, historyElement)
}
