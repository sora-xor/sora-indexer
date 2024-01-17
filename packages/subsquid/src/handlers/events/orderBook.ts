import BigNumber from 'bignumber.js'

import { getBlockTimestamp } from '../../utils'
import { getAccountEntity } from '../../utils/account'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { OrderBooksStorage, orderBooksStorage, orderBooksSnapshotsStorage, getOrderStatus, getBookStatus } from '../../utils/orderBook'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { BlockContext, Event } from '../../types'
import { OrderBookOrder, OrderStatus, OrderType } from '../../model'
import { getEventData } from '../../utils/entities'
import { events } from '../../types/generated/merged'
import { Bytes } from '../../types/generated/production/support'

interface AssetId32 {
	code: Bytes
}

interface OrderBookId {
    dexId: number
    base: AssetId32
    quote: AssetId32
}

const getBookData = (orderBook: OrderBookId) => {
	const dexId = orderBook.dexId
	const baseAssetId = getAssetId(orderBook.base)
	const quoteAssetId = getAssetId(orderBook.quote)

	return { dexId, baseAssetId, quoteAssetId }
}

const getOrderData = (orderBook: OrderBookId, orderId: bigint | string) => {
	const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBook)
	const orderBookId = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId)
	const id = OrderBooksStorage.getOrderId(orderBookId, orderId)

	return { dexId, baseAssetId, quoteAssetId, orderBookId, orderId, id }
}

export async function orderBookCreatedEventHandler(ctx: BlockContext, event: Event<'OrderBook.OrderBookCreated'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId } = getEventData(ctx, events.orderBook.orderBookCreated, event)
	const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookId)
	const { id } = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)

	getEventHandlerLog(ctx, event).debug({ id }, 'Order Book Created')
}

export async function orderBookStatusChangedEventHandler(ctx: BlockContext, event: Event<'OrderBook.OrderBookStatusChanged'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId, newStatus } = getEventData(ctx, events.orderBook.orderBookStatusChanged, event)
	const { dexId, baseAssetId, quoteAssetId } = getBookData(orderBookId)
	const orderBook = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
	const status = getBookStatus(newStatus.__kind)

	orderBook.status = status

	await ctx.store.save(orderBook)

	getEventHandlerLog(ctx, event).debug({ id: orderBook.id, status }, 'Order Book Status Changed')
}

export async function orderBookLimitOrderPlacedEventHandler(ctx: BlockContext, event: Event<'OrderBook.LimitOrderPlaced'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId, orderId, ownerId, side, price, amount, lifetime } = getEventData(ctx, events.orderBook.limitOrderPlaced, event)

	const blockHeight = ctx.block.header.height
	const timestamp = getBlockTimestamp(ctx)
	const orderLifetime = Number(lifetime) / 1000

	const { dexId, baseAssetId, quoteAssetId, id } = getOrderData(orderBookId, orderId)

	const book = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
	const account = await getAccountEntity(ctx, ownerId)
	const isBuy = side.__kind === 'Buy'

	const limitOrder = new OrderBookOrder()
	limitOrder.id = id
	limitOrder.type = OrderType.Limit
	limitOrder.orderBook = book
	limitOrder.account = account
	limitOrder.createdAtBlock = blockHeight
	limitOrder.timestamp = timestamp
	limitOrder.isBuy = isBuy
	limitOrder.amount = formatU128ToBalance(amount.inner, baseAssetId)
	limitOrder.price = formatU128ToBalance(price.inner, quoteAssetId)
	limitOrder.lifetime = orderLifetime
	limitOrder.expiresAt = timestamp + orderLifetime
	limitOrder.amountFilled = '0'
	limitOrder.status = OrderStatus.Active
	limitOrder.updatedAtBlock = blockHeight


	await ctx.store.save(limitOrder)

	getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order Saved')
}

export async function orderBookLimitOrderExecutedEventHandler(ctx: BlockContext, event: Event<'OrderBook.LimitOrderExecuted'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId, orderId, side, price, amount } = getEventData(ctx, events.orderBook.limitOrderExecuted, event)
	const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookId, orderId)

	const newPrice = formatU128ToBalance(price.inner, quoteAssetId)
	const newAmount = formatU128ToBalance(amount.value.inner, baseAssetId)
	const isBuy = side.__kind === 'Buy'

	const limitOrder = await ctx.store.get(OrderBookOrder, id)

	if (limitOrder) {
		const blockHeight = ctx.block.header.height

		limitOrder.amountFilled = new BigNumber(limitOrder.amountFilled).plus(new BigNumber(newAmount)).toString()
		limitOrder.updatedAtBlock = blockHeight

		await ctx.store.save(limitOrder)

		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order Executed')
	} else {
		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order not found')
	}

	await orderBooksSnapshotsStorage.updateDeal(ctx, dexId, baseAssetId, quoteAssetId, Number(orderId), newPrice, newAmount, isBuy)
}

export async function orderBookLimitOrderUpdatedEventHandler(ctx: BlockContext, event: Event<'OrderBook.LimitOrderUpdated'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId, orderId, ownerId, newAmount } = getEventData(ctx, events.orderBook.limitOrderUpdated, event)
	const { id, baseAssetId } = getOrderData(orderBookId, orderId)

	const limitOrder = await ctx.store.get(OrderBookOrder, id)

	if (limitOrder) {
		const blockHeight = ctx.block.header.height
		const amount = formatU128ToBalance(newAmount.inner, baseAssetId)

		limitOrder.amount = amount
		limitOrder.updatedAtBlock = blockHeight

		await ctx.store.save(limitOrder)

		getEventHandlerLog(ctx, event).debug({ id, amount }, 'Limit Order Updated')
	} else {
		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order not found')
	}
}

export async function orderBookLimitOrderFilledEventHandler(ctx: BlockContext, event: Event<'OrderBook.LimitOrderFilled'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.orderBook.limitOrderFilled, event)
	const { orderBookId, orderId } = data
	const { id } = getOrderData(orderBookId, orderId)

	const limitOrder = await ctx.store.get(OrderBookOrder, id)

	if (limitOrder) {
		const blockHeight = ctx.block.header.height
		limitOrder.status = OrderStatus.Filled
		limitOrder.updatedAtBlock = blockHeight

		await ctx.store.save(limitOrder)

		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order Filled')
	} else {
		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order not found')
	}
}

export async function orderBookLimitOrderCanceledEventHandler(ctx: BlockContext, event: Event<'OrderBook.LimitOrderCanceled'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { orderBookId, orderId, reason } = getEventData(ctx, events.orderBook.limitOrderCanceled, event)
	const { id } = getOrderData(orderBookId, orderId)

	const limitOrder = await ctx.store.get(OrderBookOrder, id)

	if (limitOrder) {
		const blockHeight = ctx.block.header.height
		limitOrder.status = getOrderStatus(reason.__kind)
		limitOrder.updatedAtBlock = blockHeight

		await ctx.store.save(limitOrder)

		getEventHandlerLog(ctx, event).debug({ id, reason }, 'Limit Order Canceled')
	} else {
		getEventHandlerLog(ctx, event).debug({ id }, 'Limit Order not found')
	}
}

export async function orderBookMarketOrderExecutedEventHandler(
	ctx: BlockContext,
	event: Event<'OrderBook.MarketOrderExecuted'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.orderBook.marketOrderExecuted, event)
	const { orderBookId, ownerId, direction, amount, averagePrice } = data

	const blockHeight = ctx.block.header.height
	const timestamp = getBlockTimestamp(ctx)

	const eventIndex = event.index
	const orderId = `${blockHeight}-${eventIndex}`

	const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookId, orderId)

	const book = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
	const account = await getAccountEntity(ctx, ownerId.toString())

	const marketOrder = new OrderBookOrder()
	marketOrder.id = id
	marketOrder.type = OrderType.Market
	marketOrder.orderBook = book
	marketOrder.account = account
	marketOrder.createdAtBlock = blockHeight
	marketOrder.timestamp = timestamp
	marketOrder.isBuy = direction.__kind === 'Buy'
	marketOrder.amount = formatU128ToBalance(amount.value.inner, baseAssetId)
	marketOrder.price = averagePrice ? formatU128ToBalance(averagePrice.inner, quoteAssetId) : '0'
	marketOrder.lifetime = 0
	marketOrder.expiresAt = timestamp
	marketOrder.amountFilled = formatU128ToBalance(amount.value.inner, baseAssetId)
	marketOrder.status = OrderStatus.Filled
	marketOrder.updatedAtBlock = blockHeight

	await ctx.store.save(marketOrder)

	getEventHandlerLog(ctx, event).debug({ id }, 'Market Order Saved')
}

export async function orderBookLimitOrderConvertedToMarketOrderEventHandler(
	ctx: BlockContext,
	event: Event<'OrderBook.LimitOrderConvertedToMarketOrder'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.orderBook.limitOrderConvertedToMarketOrder, event)
	const { orderBookId, ownerId, direction, amount, averagePrice } = data

	const blockHeight = ctx.block.header.height
	const timestamp = getBlockTimestamp(ctx)

	const eventIndex = event.index
	const orderId = `${blockHeight}-${eventIndex}`

	const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookId, orderId)

	const book = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
	const account = await getAccountEntity(ctx, ownerId.toString())

	const marketOrder = new OrderBookOrder()
	marketOrder.id = id
	marketOrder.type = OrderType.Market
	marketOrder.orderBook = book
	marketOrder.account = account
	marketOrder.createdAtBlock = blockHeight
	marketOrder.timestamp = timestamp
	marketOrder.isBuy = direction.__kind === 'Buy'
	marketOrder.amount = formatU128ToBalance(amount.value.inner, baseAssetId)
	marketOrder.price = averagePrice ? formatU128ToBalance(averagePrice.inner, quoteAssetId) : '0'
	marketOrder.lifetime = 0
	marketOrder.expiresAt = timestamp
	marketOrder.amountFilled = formatU128ToBalance(amount.value.inner, baseAssetId)
	marketOrder.status = OrderStatus.Filled
	marketOrder.updatedAtBlock = blockHeight

	await ctx.store.save(marketOrder)

	getEventHandlerLog(ctx, event).debug({ id }, 'Market Order Saved')
}

export async function orderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEventHandler(
	ctx: BlockContext,
	event: Event<'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.orderBook.limitOrderIsSplitIntoMarketOrderAndLimitOrder, event)
	const { orderBookId, ownerId, marketOrderDirection, marketOrderAmount, marketOrderAveragePrice } = data

	const blockHeight = ctx.block.header.height
	const timestamp = getBlockTimestamp(ctx)

	const eventIndex = event.index
	const orderId = `${blockHeight}-${eventIndex}`

	const { id, dexId, baseAssetId, quoteAssetId } = getOrderData(orderBookId, orderId)

	const book = await orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
	const account = await getAccountEntity(ctx, ownerId.toString())

	const marketOrder = new OrderBookOrder()
	marketOrder.id = id
	marketOrder.type = OrderType.Market
	marketOrder.orderBook = book
	marketOrder.account = account
	marketOrder.createdAtBlock = blockHeight
	marketOrder.timestamp = timestamp
	marketOrder.isBuy = marketOrderDirection.__kind === 'Buy'
	marketOrder.amount = formatU128ToBalance(marketOrderAmount.value.inner, baseAssetId)
	marketOrder.price = marketOrderAveragePrice ? formatU128ToBalance(marketOrderAveragePrice.inner, quoteAssetId) : '0'
	marketOrder.lifetime = 0
	marketOrder.expiresAt = timestamp
	marketOrder.amountFilled = formatU128ToBalance(marketOrderAmount.value.inner, baseAssetId)
	marketOrder.status = OrderStatus.Filled
	marketOrder.updatedAtBlock = blockHeight

	await ctx.store.save(marketOrder)

	getEventHandlerLog(ctx, event).debug({ id }, 'Market Order Saved')
}
