import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, CallItem } from '../../types'
import { AssetsTransferCall, LiquidityProxyXorlessTransferCall } from '../../types/generated/calls'
import { toAddress, toText } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { getExtrinsicSigner } from '../../utils/calls'
import { findEventByExtrinsicHash } from '../../utils/events'
import { LiquidityProxyExchangeEvent } from '../../types/generated/events'
import { XOR } from '../../utils/consts'
import BigNumber from 'bignumber.js'

export async function assetTransferCallHandler(ctx: BlockContext, callItem: CallItem<'Assets.transfer'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new AssetsTransferCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const to = toAddress(data.to)
	const assetId = getAssetId(data.assetId)
	const amount = data.amount

	const details: any = {
		assetId,
		amount: formatU128ToBalance(amount, assetId),
		from: getExtrinsicSigner(ctx, callItem),
		to,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function xorlessTransferHandler(ctx: BlockContext, callItem: CallItem<'LiquidityProxy.xorless_transfer'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new LiquidityProxyXorlessTransferCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const { receiver, amount, additionalData } = data

	const historyElement = await createHistoryElement(ctx, callItem)
	const assetId = getAssetId(data.assetId)
	const xorFee = historyElement.networkFee!

	const details: any = {
		assetId,
		amount: formatU128ToBalance(amount, assetId),
		from: getExtrinsicSigner(ctx, callItem),
		to: toAddress(receiver),
		comment: additionalData ? toText(additionalData) : null,
		assetFee: '0', // fee paid in asset
		xorFee, // fee paid in XOR (by default 100% of network fee)
	}

	if (historyElement.execution.success) {
		const exchangeEventItem = findEventByExtrinsicHash(ctx, callItem.extrinsic.hash, ['LiquidityProxy.Exchange'])
		if (exchangeEventItem) {
			const exchangeEvent = new LiquidityProxyExchangeEvent(ctx, exchangeEventItem?.event)
			const exchangeEventData = getEntityData(ctx, exchangeEvent, exchangeEventItem)

			const [, , , , baseAssetAmount, targetAssetAmount] = exchangeEventData

			const assetSpent = formatU128ToBalance(baseAssetAmount, assetId)
			const xorReceived = formatU128ToBalance(targetAssetAmount, XOR)
			const xorSpent = new BigNumber(xorFee).minus(new BigNumber(xorReceived)).toString()

			details.assetFee = assetSpent
			details.xorFee = xorSpent
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
