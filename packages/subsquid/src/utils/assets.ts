import BigNumber from 'bignumber.js'
import { SnapshotType, Asset, AssetSnapshot, AssetVolume, AssetPrice } from '../model'
import { BlockContext, ReferenceSymbol } from '../types'
import { DAI } from './consts'
import { AssetId } from '../types'
import { formatDateTimestamp, getSnapshotIndex, toAssetId } from '.'
import { getAssetSnapshotsStorageLog, getAssetStorageLog } from './logs'
import { testLogMode } from '../config'

const prevIndexesRow = (index: number, count: number): number[] => {
	return new Array(count).fill(index).reduce((buffer, item, idx) => {
		const prevIndex = item - idx

		if (prevIndex >= 0) buffer.push(prevIndex)

		return buffer
	}, [])
}

const getSnapshotsByIds = async (ctx: BlockContext, ids: string[]): Promise<AssetSnapshot[]> => {
	const snapshots = await Promise.all(ids.map((id) => ctx.store.get(AssetSnapshot, id)))
	return snapshots.filter((item): item is AssetSnapshot => item !== undefined)
}

const last = <T>(snapshots: T[]) => {
	if (!snapshots.length) return null
	return snapshots[snapshots.length - 1]
}

const toFloat = (value: BigNumber) => Number(value.toFixed(2))

const calcVolumeUSD = (snapshots: AssetSnapshot[]): number => {
	const totalVolume = snapshots.reduce((buffer, snapshot) => {
		const volumeUSD = new BigNumber(snapshot.volume?.amountUSD ?? 0)

		return buffer.plus(volumeUSD)
	}, new BigNumber(0))

	return toFloat(totalVolume)
}

const calcPriceChange = (current: BigNumber, prev: BigNumber): number => {
	if (prev.isZero()) return current.isGreaterThan(new BigNumber(0)) ? 100 : 0

	const change = current.minus(prev).div(prev).multipliedBy(new BigNumber(100))

	return toFloat(change)
}

export const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY]

export let assetPrecisions = new Map<AssetId, number>()

export let tickerSyntheticAssetId = new Map<ReferenceSymbol, AssetId>()

export const formatU128ToBalance = (u128: bigint, assetId: AssetId): string => {
	let decimals = assetPrecisions.get(assetId) ?? 18
	let padded = u128.toString().padStart(decimals + 1, '0')
	if (decimals === 0) {
		return padded
	}
	return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`
}

export const getAssetId = (asset: Uint8Array | { code: Uint8Array }): AssetId => {
	if (typeof asset === 'object' && 'code' in asset) {
		return toAssetId(asset.code)
	}
	return toAssetId(asset)
}

class AssetStorage {
	private storage!: Map<string, Asset>

	constructor() {
		this.storage = new Map()
	}

	async sync(ctx: BlockContext): Promise<void> {
		getAssetStorageLog(ctx).debug(`Sync ${this.storage.size} assets`)
		await ctx.store.save([...this.storage.values()])
	}

	async getAsset(ctx: BlockContext, id: AssetId): Promise<Asset> {
		let asset = this.storage.get(id)
		if (asset) {
			return asset
		}

		asset = await ctx.store.get(Asset, id)

		if (!asset) {
			asset = new Asset()
			asset.id = id
			asset.liquidity = 0n
			asset.priceUSD = '0'
			asset.supply = 0n
			asset.updatedAtBlock = ctx.block.header.height

			await ctx.store.save(asset)
			getAssetStorageLog(ctx).debug({ assetId: id }, 'Asset created and saved')
		}
		this.storage.set(asset.id, asset)
		return asset
	}

	async updatePrice(ctx: BlockContext, id: AssetId, priceUSD: string): Promise<void> {
		const asset = await this.getAsset(ctx, id)

		if (asset.priceUSD !== priceUSD) {
			asset.priceUSD = priceUSD
			// update liqudiity usd with new price
			this.calcLiquidityUSD(asset)
			asset.updatedAtBlock = ctx.block.header.height
			// to update asset price by ws subscription instantly
			await ctx.store.save(asset)
			if (testLogMode) {
				getAssetStorageLog(ctx).debug({ assetId: id, newPrice: priceUSD }, 'Asset price updated')
			}
		}
	}

	async updateLiquidity(ctx: BlockContext, id: AssetId, liquidity: bigint): Promise<void> {
		const asset = await this.getAsset(ctx, id)

		asset.liquidity = liquidity
		// update liqudiity usd with new liquidity
		asset.updatedAtBlock = ctx.block.header.height
		this.calcLiquidityUSD(asset)
		if (testLogMode) {
			getAssetStorageLog(ctx).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity updated')
		}
	}

	calcLiquidityUSD(asset: Asset): void {
		const price = new BigNumber(asset.priceUSD)
		const decimals = assetPrecisions.get(asset.id as AssetId) ?? 18
		const liquidity = new BigNumber(asset.liquidity.toString()).dividedBy(Math.pow(10, decimals))

		asset.liquidityUSD = toFloat(price.multipliedBy(liquidity))
	}

	private async calcAssetStats(ctx: BlockContext, asset: Asset, type: SnapshotType, snapshotsCount: number, blockTimestamp: number) {
		const { id, priceUSD, liquidityUSD } = asset
		const { index } = getSnapshotIndex(blockTimestamp, type)
		const indexes = prevIndexesRow(index, snapshotsCount)

		const ids = indexes.map((idx) => AssetSnapshotsStorage.getId(id as AssetId, type, idx))
		const snapshots = await getSnapshotsByIds(ctx, ids)

		const currentPriceUSD = new BigNumber(priceUSD)
		const startPriceUSD = new BigNumber(last(snapshots)?.priceUSD?.open ?? '0')
		const tvl = new BigNumber(liquidityUSD ?? 0)

		const priceChange = calcPriceChange(currentPriceUSD, startPriceUSD)
		const volumeUSD = calcVolumeUSD(snapshots)
		const velocity = tvl.isZero() ? 0 : toFloat(new BigNumber(volumeUSD).div(tvl))

		return {
			priceChange,
			volumeUSD,
			velocity,
		}
	}

	async updateDailyStats(ctx: BlockContext): Promise<void> {
		getAssetStorageLog(ctx).debug(`Assets Daily stats updating...`)
		for (const asset of this.storage.values()) {
			const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
			const { priceChange, volumeUSD } = await this.calcAssetStats(ctx, asset, SnapshotType.HOUR, 24, blockTimestamp)

			asset.priceChangeDay = priceChange
			asset.volumeDayUSD = volumeUSD
			if (testLogMode) {
				getAssetStorageLog(ctx).debug({ assetId: asset.id, priceChange, volumeUSD }, 'Asset daily stats updated')
			}
		}
	}

	async updateWeeklyStats(ctx: BlockContext): Promise<void> {
		getAssetStorageLog(ctx).debug(`Assets Weekly stats updating...`)
		for (const asset of this.storage.values()) {
			const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
			const { priceChange, volumeUSD, velocity } = await this.calcAssetStats(ctx, asset, SnapshotType.DAY, 7, blockTimestamp)

			asset.priceChangeWeek = priceChange
			asset.volumeWeekUSD = volumeUSD
			asset.velocity = velocity
			if (testLogMode) {
				getAssetStorageLog(ctx).debug({ assetId: asset.id, priceChange, volumeUSD, velocity }, 'Asset weekly stats updated')
			}
		}
	}
}

class AssetSnapshotsStorage {
	private storage!: Map<string, AssetSnapshot>
	public assetStorage!: AssetStorage

	constructor(assetStorage: AssetStorage) {
		this.storage = new Map()
		this.assetStorage = assetStorage
	}

	public static getId(assetId: AssetId, type: SnapshotType, index: number) {
		return [assetId, type, index].join('-')
	}

	async sync(ctx: BlockContext): Promise<void> {
		await this.syncSnapshots(ctx)
	}

	private async syncSnapshots(ctx: BlockContext): Promise<void> {
		getAssetSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots sync`)

		await ctx.store.save([...this.storage.values()])

		for (const snapshot of this.storage.values()) {
			const { type, timestamp } = snapshot
			const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
			const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type)

			if (currentTimestamp > timestamp) {
				this.storage.delete(snapshot.id)
			}
		}

		getAssetSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots in storage after sync`)
	}

	async getSnapshot(ctx: BlockContext, assetId: AssetId, type: SnapshotType): Promise<AssetSnapshot> {
		const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
		const { index, timestamp } = getSnapshotIndex(blockTimestamp, type)
		const id = AssetSnapshotsStorage.getId(assetId, type, index)

		let snapshot = this.storage.get(id)
		if (snapshot) {
			return snapshot
		}

		snapshot = await ctx.store.get(AssetSnapshot, id)

		if (!snapshot) {
			const asset = await this.assetStorage.getAsset(ctx, assetId)

			snapshot = new AssetSnapshot()
			snapshot.id = id
			snapshot.assetId = asset.id
			snapshot.asset = asset
			snapshot.timestamp = timestamp
			snapshot.type = type
			// set current asset supply & liquidity on creation
			snapshot.liquidity = asset.liquidity
			snapshot.supply = asset.supply
			snapshot.mint = 0n
			snapshot.burn = 0n
			snapshot.volume = new AssetVolume({
				amount: '0',
				amountUSD: '0',
			})
			// set current asset price on creation
			snapshot.priceUSD = new AssetPrice({
				open: asset.priceUSD,
				close: asset.priceUSD,
				high: asset.priceUSD,
				low: asset.priceUSD,
			})
			snapshot.updatedAtBlock = ctx.block.header.height
			getAssetSnapshotsStorageLog(ctx).debug({ assetId: id }, 'Asset snapshot created and saved')
		}

		this.storage.set(snapshot.id, snapshot)

		return snapshot
	}

	async updatePrice(ctx: BlockContext, assetId: AssetId, price: string): Promise<void> {
		const bnPrice = new BigNumber(price)

		for (const type of AssetSnapshots) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			if (snapshot.priceUSD) {
				snapshot.priceUSD.close = price
				snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString()
				snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString()

				// set open price to current price at first update (after start or restart)
				if (Number(snapshot.priceUSD.open) === 0) {
					snapshot.priceUSD.open = price
				}
			} else {
				getAssetSnapshotsStorageLog(ctx).error(`${snapshot.id} snapshot doesn't have priceUSD`)
				throw new Error(`${snapshot.id} snapshot doesn't have priceUSD`)
			}
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, newPrice: price }, 'Asset snapshot price updated')
			}
		}

		await this.assetStorage.updatePrice(ctx, assetId, price)
	}

	async updateVolume(ctx: BlockContext, assetId: AssetId, volume: BigNumber): Promise<BigNumber> {
		const asset = await this.assetStorage.getAsset(ctx, assetId)

		const assetPrice = DAI === assetId ? BigNumber(1) : BigNumber(asset?.priceUSD ?? 0)

		const volumeUSD = volume.multipliedBy(assetPrice)

		for (const type of AssetSnapshots) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug({ oldVolume: snapshot.volume?.amount }, 'Updating asset snapshot volume')
			}

			if (snapshot.volume) {
				snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume.toString()).toString()
				snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD.toString()).toFixed(2)
				snapshot.updatedAtBlock = ctx.block.header.height
			} else {
				getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, newVolume: volume.toString() }, `${snapshot.id} snapshot doesn't have volume`)
				throw new Error(`${snapshot.id} snapshot doesn't have volume`)
			}
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, newVolume: volume.toString() }, 'Asset snapshot volume updated')
			}
		}

		return volumeUSD
	}

	async updateLiquidity(ctx: BlockContext, assetId: AssetId, liquidity: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			snapshot.liquidity = liquidity
			snapshot.updatedAtBlock = ctx.block.header.height
			await ctx.store.save(snapshot)
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug(
					{ assetId: assetId, newLiquidity: liquidity.toString() },
					'Asset snapshot liquidity updated',
				)
			}
		}

		await this.assetStorage.updateLiquidity(ctx, assetId, liquidity)
	}

	async updateMinted(ctx: BlockContext, assetId: AssetId, amount: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			getAssetSnapshotsStorageLog(ctx).debug({ type }, 'Type')
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			snapshot.mint = snapshot.mint + amount
			snapshot.updatedAtBlock = ctx.block.header.height
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, newMinted: amount.toString() }, 'Asset snapshot mint updated')
			}
		}

		const asset = await this.assetStorage.getAsset(ctx, assetId)

		asset.supply = asset.supply + amount
		asset.updatedAtBlock = ctx.block.header.height
		getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, minted: amount.toString() }, 'Asset minted')
	}

	async updateBurned(ctx: BlockContext, assetId: AssetId, amount: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			snapshot.burn = snapshot.burn + amount
			snapshot.updatedAtBlock = ctx.block.header.height
			if (testLogMode) {
				getAssetSnapshotsStorageLog(ctx).debug(
					{ assetId: assetId, newBurned: snapshot.burn.toString() },
					'Asset snapshot burn updated',
				)
			}
		}

		const asset = await this.assetStorage.getAsset(ctx, assetId)

		asset.supply = asset.supply - amount
		asset.updatedAtBlock = ctx.block.header.height
		getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, supply: asset.supply.toString() }, 'Asset supply updated')
	}
}

export const assetStorage = new AssetStorage()
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage)
