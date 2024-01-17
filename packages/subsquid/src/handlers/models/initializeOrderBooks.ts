import { getAssetId } from '../../utils/assets'
import { getAllOrderBooks, OrderBooksStorage, orderBooksStorage, getOrderBookAssetBalance } from '../../utils/orderBook'
import { getInitializeOrderBooksLog } from '../../utils/logs'
import { OrderBookStatus } from '../../model'
import { BlockContext } from '../../types'
import { assertDefined } from '../../utils'

let isFirstBlockIndexed = false

export async function initializeOrderBooks(ctx: BlockContext): Promise<void> {
	if (isFirstBlockIndexed) return

	getInitializeOrderBooksLog(ctx).debug('Initialize Order Books entities')

	await orderBooksStorage.updateAccountIds(ctx)

	const orderBooks = await getAllOrderBooks(ctx)

	const buffer = new Map()
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
			const status = statusCodec ? statusCodec : OrderBookStatus.Trade
			const accountId = await orderBooksStorage.getAccountId(ctx, id)

			assertDefined(accountId)

			const [baseAssetReserves, quoteAssetReserves] = await Promise.all([
				getOrderBookAssetBalance(ctx, accountId, baseAssetId),
				getOrderBookAssetBalance(ctx, accountId, quoteAssetId),
			])

			buffer.set(id, {
				id,
				dexId,
				baseAssetId,
				quoteAssetId,
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
		const created = await Promise.all(entities.map(({ dexId, baseAssetId, quoteAssetId }) => orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)))
		// update data in memory storage
		created.forEach((entity) => {
			Object.assign(entity, buffer.get(entity.id))
		})
		// save in DB
		await ctx.store.save(created)
		getInitializeOrderBooksLog(ctx).debug(`${entities.length} Order Books initialized!`)
	} else {
		getInitializeOrderBooksLog(ctx).debug('No Order Books to initialize!')
	}

	isFirstBlockIndexed = true
}
