import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'

import { BlockContext, Call } from '../../types'
import { getCallData, getEventData } from '../../utils/entities'
import { assertDefined, toAddress } from '../../utils'
import { findEventByExtrinsicHash, findEventsByExtrinsicHash } from '../../utils/events'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { getExtrinsicSigner } from '../../utils/calls'
import { calls, events } from '../../types/generated/merged'

function getLiquidityProxyBatchSwapExecutedEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'LiquidityProxy.BatchSwapExecuted'
	const event = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (event === null) return null
	return getEventData(ctx, events.liquidityProxy.batchSwapExecuted, event)
}

function getXorFeeFeeWithdrawnEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'XorFee.FeeWithdrawn'
	const event = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (event === null) return null
	return getEventData(ctx, events.xorFee.feeWithdrawn, event)
}

function getTransactionPaymentTransactionFeePaidEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'TransactionPayment.TransactionFeePaid'
	const event = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (event === null) return null
	return getEventData(ctx, events.transactionPayment.transactionFeePaid, event)
}

const handleAndSaveExtrinsic = async (ctx: BlockContext, call: Call<'LiquidityProxy.swap_transfer_batch'>): Promise<void> => {
	const blockNumber = ctx.block.header.height
	const historyElement = await createCallHistoryElement(ctx, call)

	const data = getCallData(ctx, calls.liquidityProxy.swapTransferBatch, call)

	const inputAssetId = getAssetId(data.inputAssetId)
	const extrinsicSigner = getExtrinsicSigner(ctx, call)

	const details: any = {}

	const receivers = 'receivers' in data ? data.receivers : data.swapBatches.map((batch) => batch.receivers).flat(1)

	details.inputAssetId = getAssetId(data.inputAssetId)
	details.selectedMarket = data.selectedSourceTypes.map((lst) => lst.toString()).toString()
	details.maxInputAmount = data.maxInputAmount
	details.blockNumber = blockNumber
	details.from = extrinsicSigner
	details.receivers = receivers.map((receiver) => ({
		...receiver,
		accountId: toAddress(receiver.accountId),
	}))

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const batchSwapExecutedEvent = getLiquidityProxyBatchSwapExecutedEventData(ctx, call.extrinsic.hash)
        if (batchSwapExecutedEvent) {
            const [adarFee, inputAmount] = batchSwapExecutedEvent
			details.adarFee = formatU128ToBalance(adarFee, inputAssetId)
			details.inputAmount = formatU128ToBalance(inputAmount, inputAssetId)
        }

		const feeWithdrawnEvent = getXorFeeFeeWithdrawnEventData(ctx, call.extrinsic.hash)
		if (feeWithdrawnEvent) {
			const [, networkFee] = feeWithdrawnEvent
			details.networkFee = formatU128ToBalance(networkFee, XOR)
		}

		const transactionFeePaidEvent = getTransactionPaymentTransactionFeePaidEventData(ctx, call.extrinsic.hash)
		if (transactionFeePaidEvent) {
			const { actualFee } = transactionFeePaidEvent
			details.actualFee = formatU128ToBalance(actualFee, XOR)
		}

		const assetsTransfers = findEventsByExtrinsicHash(ctx, call.extrinsic.hash, ['Assets.Transfer']).map((event) => {
			const eventData = getEventData(ctx, events.assets.transfer, event)
			const [from, to, asset, amount] = eventData
			return {
				from: toAddress(from),
				to: toAddress(to),
				amount: formatU128ToBalance(amount, getAssetId(asset)),
				assetId: getAssetId(asset),
			}
		})
		details.transfers = assetsTransfers

		const exchanges = findEventsByExtrinsicHash(ctx, call.extrinsic.hash, ['LiquidityProxy.Exchange']).map((event) => {
			const eventData = getEventData(ctx, events.liquidityProxy.exchange, event)
			const [senderAddress, dexId, inputAsset, outputAsset, inputAmount, outputAmount, feeAmount] = eventData
			return {
				senderAddress: toAddress(senderAddress),
				dexId: dexId.toString(),
				inputAssetId: getAssetId(inputAsset),
				outputAssetId: getAssetId(outputAsset),
				inputAmount: formatU128ToBalance(inputAmount, getAssetId(inputAsset)),
				outputAmount: formatU128ToBalance(outputAmount, getAssetId(outputAsset)),
				feeAmount: formatU128ToBalance(feeAmount, getAssetId(inputAsset)),
			}
		})
		details.exchanges = exchanges
	} else {
		details.exchanges = []
		details.transfers = []
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}

export async function swapTransferBatchHandler(ctx: BlockContext, call: Call<'LiquidityProxy.swap_transfer_batch'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	await handleAndSaveExtrinsic(ctx, call)

	getCallHandlerLog(ctx, call).debug('Saved swap transfer batch')
}
