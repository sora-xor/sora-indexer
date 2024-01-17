import type { Bytes } from '@subsquid/substrate-runtime'
import BigNumber from 'bignumber.js'
import { SnapshotType, Asset, AssetSnapshot, AssetVolume, AssetPrice } from '../model'
import { BlockContext, ReferenceSymbol } from '../types'
import { DAI } from './consts'
import { AssetId } from '../types'
import { assertDefined, calcPriceChange, getBlockTimestamp, getSnapshotIndex, getSnapshotTypes, last, prevSnapshotsIndexesRow, shouldUpdate, toAssetId, toFloat } from '.'
import { getAssetSnapshotsStorageLog, getAssetStorageLog } from './logs'
import { priceUpdatesStream } from './stream'

const calcVolumeUSD = (snapshots: AssetSnapshot[]): number => {
	const totalVolume = snapshots.reduce((buffer, snapshot) => {
		const volumeUSD = new BigNumber(snapshot.volume?.amountUSD ?? 0)

		return buffer.plus(volumeUSD)
	}, new BigNumber(0))

	return toFloat(totalVolume)
}

export const calcTvlUSD = (asset: Asset, reserves?: bigint): BigNumber => {
  if (!reserves) return new BigNumber(0)

  const price = new BigNumber(asset.priceUSD)
  const decimals = assetPrecisions.get(getAssetId(asset.id)) ?? 18
  const amount = new BigNumber(reserves.toString()).dividedBy(Math.pow(10, decimals))

  return price.multipliedBy(amount)
}

const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY]

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

export const getAssetId = (asset: { code: Bytes } | string): AssetId => {
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

	private async save(ctx: BlockContext, asset: Asset, force = false): Promise<void> {
	  if (force || shouldUpdate(ctx, 60)) {
		await ctx.store.save(asset)
  
		getAssetStorageLog(ctx).debug({ id: asset.id }, 'Asset saved')
	  }
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
			asset.priceUSD = '0'
			asset.supply = 0n
			asset.updatedAtBlock = ctx.block.header.height

			await this.save(ctx, asset, true)
		}

		this.storage.set(asset.id, asset)

		return asset
	}

	async updatePrice(ctx: BlockContext, id: AssetId, priceUSD: string): Promise<void> {
		const asset = await this.getAsset(ctx, id)

		if (asset.priceUSD === priceUSD) return

		asset.priceUSD = priceUSD
		// stream update
		priceUpdatesStream.update(id, priceUSD)

		getAssetStorageLog(ctx, true).debug({ assetId: id, newPrice: priceUSD }, 'Asset price updated')

		await this.save(ctx, asset)
	}

	async updateLiquidity(ctx: BlockContext, id: AssetId, liquidity: bigint): Promise<Asset> {
		const asset = await this.getAsset(ctx, id)
	
		asset.liquidity = liquidity
	
		getAssetStorageLog(ctx, true).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity updated')
	
		return asset
	}

	async updateLiquidityBooks(ctx: BlockContext, id: AssetId, liquidity: bigint): Promise<Asset> {
		const asset = await this.getAsset(ctx, id)
	
		asset.liquidityBooks = liquidity
	
		getAssetStorageLog(ctx, true).debug({ assetId: id, newLiquidity: liquidity }, 'Asset liquidity in order books updated')
	
		return asset
	  }

	private async calcStats(ctx: BlockContext, asset: Asset, type: SnapshotType, snapshotsCount: number, blockTimestamp: number) {
		const { id, priceUSD } = asset
		const { index } = getSnapshotIndex(blockTimestamp, type)
		const indexes = prevSnapshotsIndexesRow(index, snapshotsCount)

		const ids = indexes.map((idx) => AssetSnapshotsStorage.getId(id as AssetId, type, idx))
		const snapshots = await AssetSnapshotsStorage.getSnapshotsByIds(ctx, ids)

		const currentPriceUSD = new BigNumber(priceUSD)
		const startPriceUSD = new BigNumber(last(snapshots)?.priceUSD?.open ?? '0')
		const tvlPools = calcTvlUSD(asset, asset.liquidity ?? undefined)
		const tvlOrderBooks = calcTvlUSD(asset, asset.liquidityBooks ?? undefined);
		const tvl = tvlPools.plus(tvlOrderBooks);

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
			const blockTimestamp = getBlockTimestamp(ctx)
			const { priceChange, volumeUSD } = await this.calcStats(ctx, asset, SnapshotType.HOUR, 24, blockTimestamp)

			asset.priceChangeDay = priceChange
			asset.volumeDayUSD = volumeUSD
			getAssetStorageLog(ctx, true).debug({ assetId: asset.id, priceChange, volumeUSD }, 'Asset daily stats updated')
		}
	}

	async updateWeeklyStats(ctx: BlockContext): Promise<void> {
		getAssetStorageLog(ctx).debug(`Assets Weekly stats updating...`)
		for (const asset of this.storage.values()) {
			const blockTimestamp = getBlockTimestamp(ctx)
			const { priceChange, volumeUSD, velocity } = await this.calcStats(ctx, asset, SnapshotType.DAY, 7, blockTimestamp)

			asset.priceChangeWeek = priceChange
			asset.volumeWeekUSD = volumeUSD
			asset.velocity = velocity
			getAssetStorageLog(ctx, true).debug({ assetId: asset.id, priceChange, volumeUSD, velocity }, 'Asset weekly stats updated')
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
			const blockTimestamp = getBlockTimestamp(ctx)
			const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type)

			if (currentTimestamp > timestamp) {
				this.storage.delete(snapshot.id)
			}
		}

		getAssetSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots in storage after sync`)
	}

	async getSnapshot(ctx: BlockContext, assetId: AssetId, type: SnapshotType): Promise<AssetSnapshot> {
		const blockTimestamp = getBlockTimestamp(ctx)
		const { index, timestamp } = getSnapshotIndex(blockTimestamp, type)
		const id = AssetSnapshotsStorage.getId(assetId, type, index)

		let snapshot = this.storage.get(id)
		if (snapshot) {
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetSnapshotId: id }, 'Asset snapshot found in storage')
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
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetSnapshotId: id }, 'Asset snapshot created and saved')
		}

		this.storage.set(snapshot.id, snapshot)

		return snapshot
	}

	static async getSnapshotsByIds(ctx: BlockContext, ids: string[]): Promise<AssetSnapshot[]> {
		const snapshots = await Promise.all(ids.map(id => ctx.store.get(AssetSnapshot, id)))
	
		return snapshots.filter((item): item is AssetSnapshot => !!item)
	}

	async updatePrice(ctx: BlockContext, assetId: AssetId, price: string): Promise<void> {
		const bnPrice = new BigNumber(price)
		const snapshotTypes = getSnapshotTypes(ctx, AssetSnapshots)
	
		for (const type of snapshotTypes) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			assertDefined(snapshot.priceUSD)
		
			// set open price to current price at first update (after start or restart)
			if (Number(snapshot.priceUSD.open) === 0) {
				snapshot.priceUSD.open = price
				snapshot.priceUSD.low = price
			}
		
			snapshot.priceUSD.close = price;
			snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString()
			snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString()
		
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetId, newPrice: price }, 'Asset snapshot price updated')
		}
		await this.assetStorage.updatePrice(ctx, assetId, price)
	}

	async updateVolume(ctx: BlockContext, assetId: AssetId, volume: BigNumber): Promise<BigNumber> {
		const asset = await this.assetStorage.getAsset(ctx, assetId)

		const assetPrice = DAI === assetId ? BigNumber(1) : BigNumber(asset?.priceUSD ?? 0)

		const volumeUSD = volume.multipliedBy(assetPrice)
		
		const snapshotTypes = getSnapshotTypes(ctx, AssetSnapshots)

		for (const type of snapshotTypes) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)
			getAssetSnapshotsStorageLog(ctx, true).debug({ oldVolume: snapshot.volume?.amount }, 'Updating asset snapshot volume')

			if (snapshot.volume) {
				snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume.toString()).toString()
				snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD.toString()).toFixed(2)
				snapshot.updatedAtBlock = ctx.block.header.height
			} else {
				getAssetSnapshotsStorageLog(ctx).debug(
					{ assetId: assetId, newVolume: volume },
					`${snapshot.id} snapshot doesn't have volume`,
				)
				throw new Error(`${snapshot.id} snapshot doesn't have volume`)
			}
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetId: assetId, newVolume: volume }, 'Asset snapshot volume updated')
		}

		return volumeUSD
	}

	async updateMinted(ctx: BlockContext, assetId: AssetId, amount: bigint): Promise<void> {
		const snapshotTypes = getSnapshotTypes(ctx, AssetSnapshots)

    	for (const type of snapshotTypes) {
			getAssetSnapshotsStorageLog(ctx).debug({ type }, 'Type')
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			snapshot.mint = snapshot.mint + amount
			snapshot.updatedAtBlock = ctx.block.header.height
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetId: assetId, newMinted: amount }, 'Asset snapshot mint updated')
		}

		const asset = await this.assetStorage.getAsset(ctx, assetId)

		asset.supply = asset.supply + amount
		asset.updatedAtBlock = ctx.block.header.height
		getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, minted: amount }, 'Asset minted')
	}

	async updateBurned(ctx: BlockContext, assetId: AssetId, amount: bigint): Promise<void> {
		const snapshotTypes = getSnapshotTypes(ctx, AssetSnapshots)

    	for (const type of snapshotTypes) {
			const snapshot = await this.getSnapshot(ctx, assetId, type)

			snapshot.burn = snapshot.burn + amount
			snapshot.updatedAtBlock = ctx.block.header.height
			getAssetSnapshotsStorageLog(ctx, true).debug({ assetId: assetId, burned: snapshot.burn }, 'Asset snapshot burn updated')
		}

		const asset = await this.assetStorage.getAsset(ctx, assetId)

		asset.supply = asset.supply - amount
		asset.updatedAtBlock = ctx.block.header.height
		getAssetSnapshotsStorageLog(ctx).debug({ assetId: assetId, supply: asset.supply }, 'Asset supply updated')
	}
}

export const assetStorage = new AssetStorage()
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage)
