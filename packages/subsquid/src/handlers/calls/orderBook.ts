import { addDataToHistoryElement, createCallHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { logStartProcessingCall } from '../../utils/logs'
import { BlockContext, Call, AssetId } from '../../types'
import { findEventByExtrinsicHash, findEventsByExtrinsicHash } from '../../utils/events'
import { assertDefined } from '../../utils'
import { getCallData, getEventData } from '../../utils/entities'
import { events, calls } from '../../types/generated/merged'

export async function orderBookPlaceLimitOrderCallHandler(ctx: BlockContext, call: Call<'OrderBook.place_limit_order'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	const { orderBookId, price, amount, side, lifespan } = getCallData(ctx, calls.orderBook.placeLimitOrder, call)

	const baseAssetId = getAssetId(orderBookId.base)
	const quoteAssetId = getAssetId(orderBookId.quote)

	const details = {
		dexId: orderBookId.dexId,
		baseAssetId,
		quoteAssetId,
		orderId: null as number | null,
		price: formatU128ToBalance(price, quoteAssetId),
		amount: formatU128ToBalance(amount, baseAssetId),
		side: side,
		lifetime: lifespan ? Number(lifespan) / 1000 : null,
	}

	assertDefined(call.extrinsic?.hash)
	const limitOrderPlacedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['OrderBook.LimitOrderPlaced'])

	if (limitOrderPlacedEvent) {
		const { orderId } = getEventData(ctx, events.orderBook.limitOrderPlaced, limitOrderPlacedEvent)
		details.orderId = Number(orderId)
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}

export async function orderBookCancelLimitOrderCallHandler(ctx: BlockContext, call: Call<'OrderBook.cancel_limit_order'> | Call<'OrderBook.cancel_limit_orders_batch'>): Promise<void> {
  logStartProcessingCall(ctx, call)

  const historyElement = await createCallHistoryElement(ctx, call)
  assertDefined(call.extrinsic?.hash)
  const cancelEvents = findEventsByExtrinsicHash(ctx, call.extrinsic.hash, ['OrderBook.LimitOrderCanceled'])

  const details = cancelEvents.reduce((buffer, cancelEvent) => {
	const { orderBookId, orderId } = getEventData(ctx, events.orderBook.limitOrderCanceled, cancelEvent)

    buffer.push({
      dexId: orderBookId.dexId,
      baseAssetId: getAssetId(orderBookId.base),
      quoteAssetId: getAssetId(orderBookId.quote),
      orderId: Number(orderId),
    })

    return buffer
  }, [] as { dexId: any; baseAssetId: AssetId; quoteAssetId: AssetId; orderId: number; }[])

  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)
}
