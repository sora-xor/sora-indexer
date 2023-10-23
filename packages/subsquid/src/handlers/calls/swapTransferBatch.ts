import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'

import { BlockContext, CallItem } from '../../types'
import { LiquidityProxySwapTransferBatchCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { toAddress } from '../../utils'
import { findEventByExtrinsicHash, findEventsByExtrinsicHash } from '../../utils/events'
import {
	AssetsTransferEvent,
	LiquidityProxyBatchSwapExecutedEvent,
	LiquidityProxyExchangeEvent,
	TransactionPaymentTransactionFeePaidEvent,
	XorFeeFeeWithdrawnEvent,
} from '../../types/generated/events'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { getExtrinsicSigner } from '../../utils/calls'

function getLiquidityProxyBatchSwapExecutedEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'LiquidityProxy.BatchSwapExecuted'
	const eventItem = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (eventItem === null) return null
	// if (eventItem === null) throw new Error(`[${ctx.block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new LiquidityProxyBatchSwapExecutedEvent(ctx, eventItem.event)
	return getEntityData(ctx, event, eventItem)
}

function getXorFeeFeeWithdrawnEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'XorFee.FeeWithdrawn'
	const eventItem = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (eventItem === null) return null
	// if (eventItem === null) throw new Error(`[${ctx.block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new XorFeeFeeWithdrawnEvent(ctx, eventItem.event)
	return getEntityData(ctx, event, eventItem)
}

function getTransactionPaymentTransactionFeePaidEventData(ctx: BlockContext, extrinsicHash: string) {
	const name = 'TransactionPayment.TransactionFeePaid'
	const eventItem = findEventByExtrinsicHash(ctx, extrinsicHash, [name])
	if (eventItem === null) return null
	// if (eventItem === null) throw new Error(`[${ctx.block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new TransactionPaymentTransactionFeePaidEvent(ctx, eventItem.event)
	return getEntityData(ctx, event, eventItem)
}

const handleAndSaveExtrinsic = async (ctx: BlockContext, callItem: CallItem<'LiquidityProxy.swap_transfer_batch'>): Promise<void> => {
	const blockNumber = ctx.block.header.height
	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	const call = new LiquidityProxySwapTransferBatchCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const inputAssetId = getAssetId(data.inputAssetId)
	const extrinsicSigner = getExtrinsicSigner(ctx, callItem)

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
		const liquidityProxyBatchSwapExecutedEventData = getLiquidityProxyBatchSwapExecutedEventData(ctx, extrinsicHash)
		if (!liquidityProxyBatchSwapExecutedEventData) return
		const [adarFee, inputAmount] = liquidityProxyBatchSwapExecutedEventData
		details.adarFee = formatU128ToBalance(adarFee, inputAssetId)
		details.inputAmount = formatU128ToBalance(inputAmount, inputAssetId)

		const xorFeeFeeWithdrawnEventData = getXorFeeFeeWithdrawnEventData(ctx, extrinsicHash)
		if (!xorFeeFeeWithdrawnEventData) return
		const [, networkFee] = xorFeeFeeWithdrawnEventData
		details.networkFee = formatU128ToBalance(networkFee, XOR)

		const transactionPaymentTransactionFeePaidEventData = getTransactionPaymentTransactionFeePaidEventData(ctx, extrinsicHash)
		if (!transactionPaymentTransactionFeePaidEventData) return
		const { actualFee } = transactionPaymentTransactionFeePaidEventData
		details.actualFee = formatU128ToBalance(actualFee, XOR)

		const assetsTransfers = findEventsByExtrinsicHash(ctx, extrinsicHash, ['Assets.Transfer']).map((eventItem) => {
			const event = new AssetsTransferEvent(ctx, eventItem.event)
			const eventData = getEntityData(ctx, event, eventItem)
			const [from, to, asset, amount] = eventData
			return {
				from: toAddress(from),
				to: toAddress(to),
				amount: formatU128ToBalance(amount, getAssetId(asset)),
				assetId: getAssetId(asset),
			}
		})
		details.transfers = assetsTransfers

		const exchanges = findEventsByExtrinsicHash(ctx, extrinsicHash, ['LiquidityProxy.Exchange']).map((eventItem) => {
			const event = new LiquidityProxyExchangeEvent(ctx, eventItem.event)
			const eventData = getEntityData(ctx, event, eventItem)
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

export async function swapTransferBatchHandler(ctx: BlockContext, callItem: CallItem<'LiquidityProxy.swap_transfer_batch'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	await handleAndSaveExtrinsic(ctx, callItem)

	getCallHandlerLog(ctx, callItem).debug('Saved swap transfer batch')
}
