import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { poolsStorage } from '../../utils/pools'
import { BlockContext, AssetAmount, Call } from '../../types'
import { getCallData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { calls } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function liquidityRemovalCallHandler(ctx: BlockContext, call: Call<'PoolXYK.withdraw_liquidity'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	const data = getCallData(ctx, calls.poolXyk.withdrawLiquidity, call)

	const baseAssetId = getAssetId(data.outputAssetA)
	const targetAssetId = getAssetId(data.outputAssetB)
	const baseAssetAmount = formatU128ToBalance(data.outputAMin as AssetAmount, baseAssetId)
	const targetAssetAmount = formatU128ToBalance(data.outputBMin as AssetAmount, targetAssetId)

	const details = {
		type: 'Removal',
		baseAssetId,
		targetAssetId,
		baseAssetAmount,
		targetAssetAmount,
	}

	if (historyElement.execution.success) {
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
	}

	await addDataToHistoryElement(ctx, historyElement, details)

	await poolsStorage.getPool(ctx, baseAssetId, targetAssetId)
	await updateHistoryElementStats(ctx, historyElement)
}
