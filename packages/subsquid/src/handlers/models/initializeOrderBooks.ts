import { getAssetId } from '../../utils/assets'
import { getAllOrderBooks, OrderBooksStorage, orderBooksStorage, getOrderBookAssetBalance, getBookStatus } from '../../utils/orderBook'
import { getInitializeOrderBooksLog } from '../../utils/logs'
import { Asset, OrderBook, OrderBookStatus } from '../../model'
import { BlockContext } from '../../types'
import { assertDefined } from '../../utils'

let isFirstBlockIndexed = false

export async function initializeOrderBooks(ctx: BlockContext): Promise<void> {
	if (isFirstBlockIndexed) return

	getInitializeOrderBooksLog(ctx).debug('Initialize Order Books entities')

	await orderBooksStorage.updateAccountIds(ctx)

	const orderBooks = await getAllOrderBooks(ctx)

	const buffer = new Map<string, Omit<OrderBook, 'price' | 'priceChangeDay' | 'volumeDayUSD' | 'orders' | 'data' | 'lastDeals'>>()
	const updatedAtBlock = ctx.block.header.height

	if (orderBooks) {
		for (const [key, value] of orderBooks) {
			assertDefined(value)
			const { dexId: dex, base, quote } = key
			const { status: statusCodec } = value
			const dexId = Number(dex)
			const baseAssetId = getAssetId(base)
			const quoteAssetId = getAssetId(quote)
			const id = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId)
			const status = statusCodec ? getBookStatus(statusCodec.__kind) : OrderBookStatus.Trade
			const accountId = await orderBooksStorage.getAccountId(ctx, id)

			assertDefined(accountId)

       		 // We don't use Promise.all here because we need consistent order of requests in the log
			const baseAssetReserves = await getOrderBookAssetBalance(ctx, accountId, baseAssetId)
			const quoteAssetReserves = await getOrderBookAssetBalance(ctx, accountId, quoteAssetId)

			const baseAsset = await ctx.store.get(Asset, baseAssetId)
			const quoteAsset = await ctx.store.get(Asset, quoteAssetId)
			assertDefined(baseAsset)
			assertDefined(quoteAsset)

			buffer.set(id, {
				id,
				dexId,
				baseAsset,
				quoteAsset,
				baseAssetReserves,
				quoteAssetReserves,
				status,
				updatedAtBlock,
			})
		}
	}

	const entities = [...buffer.values()]

	if (entities.length) {
		// get or create entities in DB & memory
    	// We don't use Promise.all here because we need consistent order of requests in the log
		const created: OrderBook[] = []
		for (const { dexId, baseAsset, quoteAsset } of entities) {
			const orderBook = await orderBooksStorage.getOrderBook(ctx, dexId, baseAsset.id, quoteAsset.id)
			created.push(orderBook)
		}
		// update data in memory storage
		created.forEach((entity) => {
			Object.assign(entity, buffer.get(entity.id))
		})
		// save in DB
		for (const entity of created) {
			await ctx.store.save(entity)
		}
		getInitializeOrderBooksLog(ctx).debug(`${entities.length} Order Books initialized!`)
	} else {
		getInitializeOrderBooksLog(ctx).debug('No Order Books to initialize!')
	}

	isFirstBlockIndexed = true
}
