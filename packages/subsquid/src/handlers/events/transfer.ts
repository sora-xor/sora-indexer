import { BlockContext, Event } from '../../types'

import { getAssetsTransferEventData } from '../../utils/events'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'
import { orderBooksStorage } from '../../utils/orderBook'
import { assertDefined } from '../../utils'

export async function transferEventHandler(
	ctx: BlockContext,
	event: Event<'Tokens.Transfer'> | Event<'Balances.Transfer'>,
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { assetId, from, to, amount } = getAssetsTransferEventData(ctx, event)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, from)

		if (!pool) throw new Error(`[${ctx.block.header.height}][EventHandler] Cannot get pool '${from}'`)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves - amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves - amount
		}

		getEventHandlerLog(ctx, event).debug({ poolId: pool.id }, 'Pool information saved after withdrawal')
		PoolsPrices.set(true)
	}

	// deposit token to pool
	if (poolAccounts.has(to)) {
		const pool = await poolsStorage.getPoolById(ctx, to)

		if (!pool) throw new Error(`[${ctx.block.header.height}][EventHandler] Cannot get pool '${to}'`)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves + amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves + amount
		}

		getEventHandlerLog(ctx, event).debug({ poolId: pool.id }, 'Pool information saved after deposit')
		PoolsPrices.set(true)
	}

	// withdraw token from order book
	if (orderBooksStorage.accountIds.has(from)) {
		const book = await orderBooksStorage.getOrderBookByAccountId(ctx, from)

		assertDefined(book)
	
		if (book.baseAsset.id === assetId) {
			book.baseAssetReserves = book.baseAssetReserves - BigInt(amount)
		} else if (book.quoteAsset.id === assetId) {
			book.quoteAssetReserves = book.quoteAssetReserves - BigInt(amount)
		}
	
		getEventHandlerLog(ctx, event).debug({ id: book.id }, 'Order Book information saved after withdrawal')
	}
	// deposit token to order book
	if (orderBooksStorage.accountIds.has(to)) {
		const book = await orderBooksStorage.getOrderBookByAccountId(ctx, to)

		assertDefined(book)
	
		if (book.baseAsset.id === assetId) {
			book.baseAssetReserves = book.baseAssetReserves + BigInt(amount)
		} else if (book.quoteAsset.id === assetId) {
			book.quoteAssetReserves = book.quoteAssetReserves + BigInt(amount)
		}
	
		getEventHandlerLog(ctx, event).debug({ id: book.id }, 'Order Book information saved after deposit')
	}
}
