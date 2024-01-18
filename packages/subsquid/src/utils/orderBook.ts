import BigNumber from 'bignumber.js'

import { OrderBook, OrderBookStatus, SnapshotType, OrderBookSnapshot, OrderBookDeal, AssetPrice, OrderStatus } from '../model'

import { getOrderBooksStorageLog, getOrderBooksSnapshotsStorageLog } from './logs'
import { getSnapshotIndex, prevSnapshotsIndexesRow, last, calcPriceChange, shouldUpdate, assertDefined, getBlockTimestamp, getSnapshotTypes, toAssetId, toAddress } from './index'
import { assetSnapshotsStorage, assetStorage, calcTvlUSD } from './assets'
import { Address, AssetId, BlockContext } from "../types"
import { XOR, predefinedAssets } from './consts'
import { networkSnapshotsStorage } from './network'
import { getStorageRepresentation, isCurrentVersionIncluded } from './entities'
import { storage } from '../types/generated/merged'
import { TechAssetId } from '../types/generated/production/v57'
import { versionsWithStringAssetId } from '../consts'

const calcVolume = (snapshots: OrderBookSnapshot[]): BigNumber => {
  const totalVolume = snapshots.reduce((buffer, snapshot) => {
    const volumeUSD = new BigNumber(snapshot.volumeUSD)

    return buffer.plus(volumeUSD)
  }, new BigNumber(0))

  return totalVolume
}

export const getAllOrderBooks = async (ctx: BlockContext) => {
  try {
    getOrderBooksStorageLog(ctx).debug('Order Books entities request...')
	const entities = await getStorageRepresentation(ctx, storage.orderBook.orderBooks)?.getPairs(ctx.block.header)
    getOrderBooksStorageLog(ctx).debug('Order Books entities request completed')
    return entities
  } catch (error: any) {
    getOrderBooksStorageLog(ctx).error('Error getting Order Books entities')
	getOrderBooksStorageLog(ctx).error(error)
    return null
  }
}

async function getTokensAccounts(ctx: BlockContext, accountId: Address, assetId: AssetId) {
	const types = storage.tokens.accounts
	const representationString = getStorageRepresentation(ctx, types, { kind: 'include', versions: versionsWithStringAssetId })
	const representationAsset32 = getStorageRepresentation(ctx, types, { kind: 'exclude', versions: versionsWithStringAssetId })

	let data = isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versionsWithStringAssetId)
		? await representationString?.get(ctx.block.header, accountId, assetId)
		: await representationAsset32?.get(ctx.block.header, accountId, { code: assetId })

	return data
}

export const getOrderBookAssetBalance = async (ctx: BlockContext, accountId: Address, assetId: AssetId) => {
	try {
		getOrderBooksStorageLog(ctx).debug({ accountId, assetId }, 'Get Order Book balance')
		
		let free: bigint

		if (assetId === XOR) {
			const data = await getStorageRepresentation(ctx, storage.system.account)?.get(ctx.block.header, accountId)
			assertDefined(data)
			free = data.data.free
		} else {
			const data = await getTokensAccounts(ctx, accountId, assetId)
			assertDefined(data)
			free = data.free
		}
	
		return free
	} catch (e: any) {
	  getOrderBooksStorageLog(ctx).error('Error getting Order Book balance')
	  getOrderBooksStorageLog(ctx).error(e)
	  console.error(e)
	  return BigInt(0)
	}
}
  
export const getTechnicalAccounts = async (ctx: BlockContext) => {
	try {
		getOrderBooksStorageLog(ctx).debug('Order Books account ids request...')
		const entities = await getStorageRepresentation(ctx, storage.technical.techAccounts)?.getPairs(ctx.block.header)
		getOrderBooksStorageLog(ctx).debug('Order Books account ids request completed')
		return entities
	} catch (e: any) {
		getOrderBooksStorageLog(ctx).error('Error getting Order Books account ids')
		getOrderBooksStorageLog(ctx).error(e)
		console.error(e)
		return null
	}
}

const getAssetIdFromTech = (techAsset: TechAssetId): AssetId => {
	if (techAsset.__kind === 'Wrapped') {
		if (!(techAsset.value.__kind in predefinedAssets)) {
			throw new Error(`${techAsset.value} not exists in predefined assets!`)
		}
		if (techAsset.value.__kind === 'DOT') {
			throw new Error(`There is not DOT in predefinedAssets`)
		}
		if (techAsset.value.__kind === 'KSM') {
			throw new Error(`There is not KSM in predefinedAssets`)
		}
		if (techAsset.value.__kind === 'USDT') {
			throw new Error(`There is not USDT in predefinedAssets`)
		}
		// TODO: check why no DOT, KSM and USDT in predefinedAssets
		return predefinedAssets[techAsset.value.__kind]
	} else {
		return toAssetId(techAsset.value)
	}
}

const OrderBooksSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY]


export const getBookStatus = (status: 'OnlyCancel' | 'PlaceAndCancel' | 'Stop' | 'Trade'): OrderBookStatus => {
	switch (status) {
		case 'OnlyCancel':
			return OrderBookStatus.OnlyCancel
		case 'PlaceAndCancel':
			return OrderBookStatus.PlaceAndCancel
		case 'Stop':
			return OrderBookStatus.Stop
		case 'Trade':
			return OrderBookStatus.Trade
	}
}

export const getOrderStatus = (status: 'Manual' | 'Expired' | 'Aligned'): OrderStatus => {
	switch (status) {
		case 'Manual':
			return OrderStatus.Canceled
		case 'Expired':
			return OrderStatus.Expired
		case 'Aligned':
			return OrderStatus.Aligned
	}
}

export class OrderBooksStorage {
	private storage!: Map<string, OrderBook>
	public accountIds!: Map<Address, string>

	static readonly LAST_DEALS_LENGTH = 20

	constructor() {
		this.storage = new Map()
		this.accountIds = new Map()
	}
  
	async updateAccountIds(ctx: BlockContext) {
		const entries = await getTechnicalAccounts(ctx)
	
		if (!entries) return
	
		for (const [accountId, techAccountId] of entries) {
			assertDefined(techAccountId)
	
			if (techAccountId.__kind === 'Pure') {
				const [dexId, techPurpose] = techAccountId.value
		
				if (techPurpose.__kind === 'OrderBookLiquidityKeeper') {
					const { baseAssetId, targetAssetId } = techPurpose.value
					const quoteAsset = getAssetIdFromTech(baseAssetId)
					const baseAsset = getAssetIdFromTech(targetAssetId)
					const orderBookId = OrderBooksStorage.getId(dexId, baseAsset, quoteAsset)
		
					this.accountIds.set(toAddress(accountId), orderBookId)
				}
			}
		}
	}
  
	private findAccountId(orderBookId: string) {
		for (const [key, value] of this.accountIds.entries()) {
			if (value === orderBookId) return key
		}
		return null
	}
  
	async getAccountId(ctx: BlockContext, orderBookId: string) {
		let accountId = this.findAccountId(orderBookId)
	
		if (!accountId) {
			await this.updateAccountIds(ctx)
	
			accountId = this.findAccountId(orderBookId)
		}
	
		return accountId
	}

	async sync(ctx: BlockContext): Promise<void> {
		getOrderBooksStorageLog(ctx).debug(`Sync ${this.storage.size} order books`)
		await ctx.store.save([...this.storage.values()])
	}

	static getId(dexId: number, baseAssetId: string, quoteAssetId: string): string {
		return [dexId, baseAssetId, quoteAssetId].join('-')
	}

	static parseId(id: string) {
		const [dexId, baseAssetId, quoteAssetId] = id.split('-')
	
		return {
			dexId: Number(dexId),
			baseAssetId: baseAssetId as AssetId,
			quoteAssetId: quoteAssetId as AssetId,
		}
	}

	static getOrderId(orderBookId: string, orderId: bigint | string): string {
		return [orderBookId, orderId].join('_')
	}

	private async save(ctx: BlockContext, orderBook: OrderBook, force = false): Promise<void> {
		orderBook.updatedAtBlock = ctx.block.header.height

		if (force || shouldUpdate(ctx, 60)) {
			await ctx.store.save(orderBook)

			getOrderBooksStorageLog(ctx).debug({ id: orderBook.id }, 'Order Book saved')
		}
	}

	async getOrderBookById(ctx: BlockContext, id: string): Promise<OrderBook> {
		if (this.storage.has(id)) {
			return this.storage.get(id)!
		}

		let orderBook = await ctx.store.get(OrderBook, id)

		if (!orderBook) {
			await this.getAccountId(ctx, id)
      		const { dexId, baseAssetId, quoteAssetId } = OrderBooksStorage.parseId(id)

			orderBook = new OrderBook()
			orderBook.id = id
			orderBook.dexId = dexId
			orderBook.baseAsset = await assetStorage.getAsset(ctx, baseAssetId)
			orderBook.quoteAsset = await assetStorage.getAsset(ctx, quoteAssetId)
			orderBook.status = OrderBookStatus.Trade
			orderBook.baseAssetReserves = 0n
			orderBook.quoteAssetReserves = 0n
			orderBook.updatedAtBlock = ctx.block.header.height

			await this.save(ctx, orderBook, true)
		}

		this.storage.set(orderBook.id, orderBook)

		return orderBook
	}

	async getOrderBook(ctx: BlockContext, dexId: number, baseAssetId: string, quoteAssetId: string): Promise<OrderBook> {
		const id = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId)
	
		return await this.getOrderBookById(ctx, id)
	}

	async getOrderBookByAccountId(ctx: BlockContext, accountId: Address) {
		const orderBookId = this.accountIds.get(accountId)

		if (orderBookId) {
			return await this.getOrderBookById(ctx, orderBookId)
		}

		return null
	}

	async updateDeal(
		ctx: BlockContext,
		dexId: number,
		baseAssetId: AssetId,
		quoteAssetId: AssetId,
		orderId: number,
		price: string,
		amount: string,
		isBuy: boolean,
	): Promise<void> {
		const orderBook = await this.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)
		const timestamp = getBlockTimestamp(ctx)
		const deal: OrderBookDeal = { orderId, timestamp, isBuy, amount, price }

		const lastDeals: OrderBookDeal[] = orderBook.lastDeals ? JSON.parse(orderBook.lastDeals) : []
		lastDeals.unshift(deal)

		orderBook.price = price
		orderBook.lastDeals = JSON.stringify(lastDeals.slice(0, OrderBooksStorage.LAST_DEALS_LENGTH))

		await this.save(ctx, orderBook)

		getOrderBooksStorageLog(ctx, true).debug({ dexId, baseAssetId, quoteAssetId, price }, 'OrderBook price updated')
	}

	private async calcStats(ctx: BlockContext, orderBook: OrderBook, type: SnapshotType, snapshotsCount: number) {
		const { id, price } = orderBook
		getOrderBooksStorageLog(ctx).debug({ price }, `Something with price`)
		const blockTimestamp = getBlockTimestamp(ctx)
		const { index } = getSnapshotIndex(blockTimestamp, type)
		const indexes = prevSnapshotsIndexesRow(index, snapshotsCount)

		const ids = indexes.map((idx) => OrderBooksSnapshotsStorage.getId(id, type, idx))
		const snapshots = await OrderBooksSnapshotsStorage.getSnapshotsByIds(ctx, ids)

		const currentPrice = new BigNumber(price ?? 0)
		const startPrice = new BigNumber(last(snapshots)?.price?.open ?? '0')

		const priceChange = calcPriceChange(currentPrice, startPrice)
		const volumeUSD = calcVolume(snapshots).toString()

		return {
			priceChange,
			volumeUSD,
		}
	}

	async updateDailyStats(ctx: BlockContext): Promise<void> {
		getOrderBooksStorageLog(ctx).debug(`Order Books Daily stats updating...`)

		for (const orderBook of this.storage.values()) {
			const { priceChange, volumeUSD } = await this.calcStats(ctx, orderBook, SnapshotType.HOUR, 24)

			orderBook.priceChangeDay = priceChange
			orderBook.volumeDayUSD = volumeUSD
			getOrderBooksStorageLog(ctx, true).debug(
				{ orderBookId: orderBook.id, priceChange, volumeUSD },
				'Order Book daily stats updated',
			)
		}
	}

	public async getLockedLiquidityUSD(ctx: BlockContext): Promise<BigNumber> {
		const lockedAssets = new Map<AssetId, bigint>()
	
		let lockedUSD = new BigNumber(0)
	
		for (const { dexId, baseAsset, quoteAsset, baseAssetReserves, quoteAssetReserves } of this.storage.values()) {
			const baseAssetId = toAssetId(baseAsset.id)
			const quoteAssetId = toAssetId(quoteAsset.id)

			const a = lockedAssets.get(baseAssetId)
			const b = lockedAssets.get(quoteAssetId)
		
			lockedAssets.set(baseAssetId, (a || BigInt(0)) + baseAssetReserves)
			lockedAssets.set(quoteAssetId, (b || BigInt(0)) + quoteAssetReserves)
		
			const baseAssetLiquidityUSD = calcTvlUSD(baseAsset, baseAssetReserves)
			const quoteAssetLiquidityUSD = calcTvlUSD(quoteAsset, quoteAssetReserves)
			const liquidityUSD = baseAssetLiquidityUSD.plus(quoteAssetLiquidityUSD)
		
			await orderBooksSnapshotsStorage.updateLiquidityUSD(ctx, dexId, baseAssetId, quoteAssetId, liquidityUSD)
		}
	
		// update locked luqidity for assets
		for (const [assetId, liquidity] of lockedAssets.entries()) {
		  await assetStorage.updateLiquidityBooks(ctx, assetId, liquidity)
		}
	
		return lockedUSD
	  }
}

export class OrderBooksSnapshotsStorage {
	private storage!: Map<string, OrderBookSnapshot>
	public orderBooksStorage!: OrderBooksStorage

	constructor(orderBooksStorage: OrderBooksStorage) {
		this.storage = new Map()
		this.orderBooksStorage = orderBooksStorage
	}

	public static getId(orderBookId: string, type: SnapshotType, index: number) {
		return [orderBookId, type, index].join('-')
	}

	async sync(ctx: BlockContext): Promise<void> {
		await this.syncSnapshots(ctx)
	}

	private async syncSnapshots(ctx: BlockContext): Promise<void> {
		getOrderBooksSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots sync`)

		await ctx.store.save([...this.storage.values()])

		for (const snapshot of this.storage.values()) {
			const { type, timestamp } = snapshot
			const { timestamp: currentTimestamp } = getSnapshotIndex(getBlockTimestamp(ctx), type)

			if (currentTimestamp > timestamp) {
				this.storage.delete(snapshot.id)
			}
		}

		getOrderBooksSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots in storage after sync`)
	}

	async getSnapshot(
		ctx: BlockContext,
		dexId: number,
		baseAssetId: AssetId,
		quoteAssetId: AssetId,
		type: SnapshotType,
	): Promise<OrderBookSnapshot> {
		const blockTimestamp = getBlockTimestamp(ctx)
		const { index, timestamp } = getSnapshotIndex(blockTimestamp, type)
		const orderBookId = OrderBooksStorage.getId(dexId, baseAssetId, quoteAssetId)
		const id = OrderBooksSnapshotsStorage.getId(orderBookId, type, index)

		if (this.storage.has(id)) {
			return this.storage.get(id)!
		}

		let snapshot = await ctx.store.get(OrderBookSnapshot, id)

		if (!snapshot) {
			const orderBook = await this.orderBooksStorage.getOrderBook(ctx, dexId, baseAssetId, quoteAssetId)

			snapshot = new OrderBookSnapshot()
			snapshot.id = id
			snapshot.orderBook = orderBook
			snapshot.timestamp = timestamp
			snapshot.type = type
			snapshot.baseAssetVolume = '0'
			snapshot.quoteAssetVolume = '0'
			snapshot.volumeUSD = '0'
			snapshot.liquidityUSD = '0'
			snapshot.price = new AssetPrice({
				open: orderBook.price ?? '0',
				close: orderBook.price ?? '0',
				high: orderBook.price ?? '0',
				low: orderBook.price ?? '0',
			})

			// TODO: Add orderBook args to log
			getOrderBooksSnapshotsStorageLog(ctx).debug({ id }, 'Order Book snapshot created')
		}

		this.storage.set(snapshot.id, snapshot)

		return snapshot
	}

	static async getSnapshotsByIds(ctx: BlockContext, ids: string[]): Promise<OrderBookSnapshot[]> {
		const snapshots = await Promise.all(ids.map(id => ctx.store.get(OrderBookSnapshot, id)))

		return snapshots.filter((item): item is OrderBookSnapshot => !!item)
	}

	async updateDeal(
		ctx: BlockContext,
		dexId: number,
		baseAssetId: AssetId,
		quoteAssetId: AssetId,
		orderId: number,
		price: string,
		amount: string,
		isBuy: boolean,
	): Promise<void> {
		const quotePrice = new BigNumber(price)
		const baseAmount = new BigNumber(amount)
		const quoteAmount = baseAmount.multipliedBy(quotePrice)

		const quoteAsset = await assetStorage.getAsset(ctx, quoteAssetId)
		const quoteAssetPriceUSD = quoteAsset.priceUSD ?? '0'
		const quoteVolumeUSD = new BigNumber(quoteAssetPriceUSD).multipliedBy(quoteAmount)

		const snapshotTypes = getSnapshotTypes(ctx, OrderBooksSnapshots)

    	for (const type of snapshotTypes) {
			const snapshot = await this.getSnapshot(ctx, dexId, baseAssetId, quoteAssetId, type)
			const baseAssetVolume = new BigNumber(snapshot.baseAssetVolume).plus(baseAmount).toString()
			const quoteAssetVolume = new BigNumber(snapshot.quoteAssetVolume).plus(quoteAmount).toString()
			const volumeUSD = new BigNumber(snapshot.volumeUSD).plus(quoteVolumeUSD).toString()

			snapshot.baseAssetVolume = baseAssetVolume
			snapshot.quoteAssetVolume = quoteAssetVolume
			snapshot.volumeUSD = volumeUSD

			// set open price to current price at first update (after start or restart)
			if (Number(snapshot.price.open) === 0) {
				snapshot.price.open = price
				snapshot.price.low = price
			}

			snapshot.price.close = price
			snapshot.price.high = BigNumber.max(new BigNumber(snapshot.price.high), quotePrice).toString()
			snapshot.price.low = BigNumber.min(new BigNumber(snapshot.price.low), quotePrice).toString()

			getOrderBooksSnapshotsStorageLog(ctx, true).debug(
				{ dexId, baseAssetId, quoteAssetId, price, amount, isBuy, baseAssetVolume, quoteAssetVolume, volumeUSD, quoteAssetPriceUSD },
				'Order Book snapshot price and volume updated',
			)
		}

		await this.orderBooksStorage.updateDeal(ctx, dexId, baseAssetId, quoteAssetId, orderId, price, amount, isBuy)

		await assetSnapshotsStorage.updateVolume(ctx, baseAssetId, baseAmount)
		await assetSnapshotsStorage.updateVolume(ctx, quoteAssetId, quoteAmount)
		await networkSnapshotsStorage.updateVolumeStats(ctx, quoteVolumeUSD)
	}
	
	async updateLiquidityUSD(
		ctx: BlockContext,
		dexId: number,
		baseAssetId: AssetId,
		quoteAssetId: AssetId,
		liquidityUSD: BigNumber,
	): Promise<void> {
		const snapshotTypes = getSnapshotTypes(ctx, OrderBooksSnapshots)

		for (const type of snapshotTypes) {
			const snapshot = await this.getSnapshot(ctx, dexId, baseAssetId, quoteAssetId, type)

			snapshot.liquidityUSD = liquidityUSD.toFixed(2)
		}
	}
}

export const orderBooksStorage = new OrderBooksStorage()
export const orderBooksSnapshotsStorage = new OrderBooksSnapshotsStorage(orderBooksStorage)
