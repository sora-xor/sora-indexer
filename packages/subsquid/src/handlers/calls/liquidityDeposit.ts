import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { PoolXykDepositLiquidityCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'

export async function liquidityDepositCallHandler(ctx: BlockContext, callItem: CallItem<'PoolXYK.deposit_liquidity'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	const call = new PoolXykDepositLiquidityCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

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

	const transfers = findEventsByExtrinsicHash(ctx, extrinsicHash, ['Balances.Transfer', 'Tokens.Transfer'])

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
