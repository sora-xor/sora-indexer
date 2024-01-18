import { PoolXYK } from '../model'
import { AssetAmount, BlockContext } from '../types'
import { XOR, DOUBLE_PRICE_POOL } from './consts'
import { assertDefined, toAddress, toAssetId } from '.'
import { AssetId, Address } from '../types'
import { getStorageRepresentation, isCurrentVersionIncluded } from './entities'
import { assetStorage, getAssetId, assetPrecisions } from './assets'
import { getInitializePoolsLog, getPoolsStorageLog } from './logs'
import { storage } from '../types/generated/merged'
import { poolXykApyUpdatesStream } from './stream'
import BigNumber from 'bignumber.js'
import { versionsWithStringAssetId } from '../consts'

// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
	flag: false,
	get() {
		return this.flag
	},
	set(flag: boolean) {
		this.flag = flag
	},
}

async function getPoolXYKReserves(ctx: BlockContext, assetIdA: AssetId, assetIdB?: AssetId) {
	const types = storage.poolXyk.reserves
	const representationString = getStorageRepresentation(ctx, types, { kind: 'include', versions: versionsWithStringAssetId })
	const representationAsset32 = getStorageRepresentation(ctx, types, { kind: 'exclude', versions: versionsWithStringAssetId })

	let data = isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versionsWithStringAssetId)
		? await (assetIdB
			? representationString?.getPairs(ctx.block.header, assetIdA, assetIdB)
			: representationString?.getPairs(ctx.block.header, assetIdA)
		)
		: await (assetIdB
			? representationAsset32?.getPairs(ctx.block.header, { code: assetIdA }, { code: assetIdB })
			: representationAsset32?.getPairs(ctx.block.header, { code: assetIdA })
		)

	return data
}

async function getPoolXYKProperties(ctx: BlockContext, assetIdA: AssetId, assetIdB?: AssetId) {
	const types = storage.poolXyk.properties
	const representationString = getStorageRepresentation(ctx, types, { kind: 'include', versions: versionsWithStringAssetId })
	const representationAsset32 = getStorageRepresentation(ctx, types, { kind: 'exclude', versions: versionsWithStringAssetId })

	let data = isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versionsWithStringAssetId)
		? await (assetIdB
			? representationString?.getPairs(ctx.block.header, assetIdA, assetIdB)
			: representationString?.getPairs(ctx.block.header, assetIdA)
		)
		: await (assetIdB
			? representationAsset32?.getPairs(ctx.block.header, { code: assetIdA }, { code: assetIdB })
			: representationAsset32?.getPairs(ctx.block.header, { code: assetIdA })
		)

	return data
}

export const getAllReserves = async (ctx: BlockContext, baseAssetId: AssetId) => {
	try {
		getInitializePoolsLog(ctx).debug({ baseAssetId }, 'Pools XYK Reserves request...')

		const data = await getPoolXYKReserves(ctx, baseAssetId)

		assertDefined(data)

		const reserves = data.map((pair) => {
			assertDefined(pair[1])
			const [[, targetAssetId], [baseBalance, targetBalance]] = pair
			return {
				baseAssetId,
				targetAssetId: getAssetId(targetAssetId),
				baseBalance: baseBalance as AssetAmount,
				targetBalance: targetBalance as AssetAmount,
			}
		})

		getInitializePoolsLog(ctx).debug({ baseAssetId }, 'Pools XYK Reserves request completed')

		return reserves
	} catch (e: any) {
		getInitializePoolsLog(ctx).error('Error getting Reserves')
		getInitializePoolsLog(ctx).error(e)
		console.error(e)
		return null
	}
}

export const getAllProperties = async (ctx: BlockContext, baseAssetId: AssetId) => {
	try {
		getInitializePoolsLog(ctx).debug({ baseAssetId }, 'Pools XYK Properties request...')

		const data = await getPoolXYKProperties(ctx, baseAssetId)

		assertDefined(data)

		const properties = data.map((pair) => {
			assertDefined(pair[1])
			const [[, targetAssetId], [reservesAccountId, feesAccountId]] = pair
			return {
				baseAssetId,
				targetAssetId: getAssetId(targetAssetId),
				reservesAccountId: toAddress(reservesAccountId),
				feesAccountId: toAddress(feesAccountId),
			}
		})

		getInitializePoolsLog(ctx).debug(`'${baseAssetId}' Pools XYK Properties request completed`)
		return properties
	} catch (e: any) {
		getInitializePoolsLog(ctx).error('Error getting Properties')
		getInitializePoolsLog(ctx).error(e)
		console.error(e)
		return null
	}
}

export const getPoolProperties = async (ctx: BlockContext, baseAssetId: AssetId, targetAssetId: AssetId) => {
	const blockHeight = ctx.block.header.height

	try {
		getInitializePoolsLog(ctx).debug({ baseAssetId, targetAssetId }, 'Pool properties request...')

		const data = await getPoolXYKProperties(ctx, baseAssetId, targetAssetId)

		assertDefined(data)

		const properties = data.map((pair) => {
			assertDefined(pair[1])
			const [reservesAccountId, feesAccountId] = pair[1]
			return {
				reservesAccountId: toAddress(reservesAccountId),
				feesAccountId: toAddress(feesAccountId),
			}
		})

		getInitializePoolsLog(ctx).debug({ baseAssetId, targetAssetId }, 'Pool properties request completed')

		return {
			baseAssetId,
			targetAssetId,
			reservesAccountId: properties[0].reservesAccountId,
			feesAccountId: properties[0].feesAccountId,
		}
	} catch (error: any) {
		getInitializePoolsLog(ctx).error('Error getting pool properties')
		getInitializePoolsLog(ctx).error(error)
		return null
	}
}

class PoolAccountsStorage {
	private storage: Map<AssetId, Map<AssetId, Address>>
	private accountIds: Map<string, [AssetId, AssetId]>

	constructor() {
		this.storage = new Map()
		this.accountIds = new Map()
	}

	add(baseAssetId: AssetId, targetAssetId: AssetId, poolAccountId: Address): void {
		if (!this.storage.has(baseAssetId)) {
			this.storage.set(baseAssetId, new Map())
		}
		this.storage.get(baseAssetId)!.set(targetAssetId, poolAccountId)
		this.accountIds.set(poolAccountId, [baseAssetId, targetAssetId])
	}

	get(baseAssetId: AssetId, targetAssetId: AssetId): Address | undefined {
		return this.getMap(baseAssetId)?.get(targetAssetId)
	}

	getById(poolAccountId: string) {
		return this.accountIds.get(poolAccountId)
	}

	getMap(baseAssetId: AssetId) {
		return this.storage.get(baseAssetId)
	}

	has(poolAccountId: Address): boolean {
		return this.accountIds.has(poolAccountId)
	}

	async getPoolAccountId(ctx: BlockContext, baseAssetId: AssetId, targetAssetId: AssetId): Promise<Address | null> {
		const id = this.get(baseAssetId, targetAssetId)
		if (id) return id

		const properties = await getPoolProperties(ctx, baseAssetId, targetAssetId)
		const poolAccountId = properties?.reservesAccountId ?? null

		if (poolAccountId) {
			this.add(baseAssetId, targetAssetId, poolAccountId)
		} else {
			getInitializePoolsLog(ctx).debug({ baseAssetId, targetAssetId }, 'Cannot find pool id')
		}

		return poolAccountId
	}
}

class PoolsStorage {
	private storage!: Map<string, PoolXYK>

	constructor() {
		this.storage = new Map()
	}

	async getPoolById(ctx: BlockContext, poolId: string): Promise<PoolXYK | null> {
		let pool = this.storage.get(poolId)

		if (pool) {
			return pool
		}

		const assetIds = poolAccounts.getById(poolId)

		if (assetIds) {
			return await this.getPool(ctx, ...assetIds)
		}

		return null
	}

	async sync(ctx: BlockContext): Promise<void> {
		getPoolsStorageLog(ctx).debug(`Sync ${this.storage.size} pools`)
		await ctx.store.save([...this.storage.values()])
	}

	async getPool(ctx: BlockContext, baseAssetId: AssetId, targetAssetId: AssetId): Promise<PoolXYK | null> {
		const poolId = await poolAccounts.getPoolAccountId(ctx, baseAssetId, targetAssetId)

		if (!poolId) return null

		let pool = this.storage.get(poolId)

		if (pool) return pool

		pool = (
			await ctx.store.find(PoolXYK, {
				relations: {
					baseAsset: true,
					targetAsset: true,
				},
				where: {
					id: poolId,
				},
			})
		)[0]

		if (!pool) {
			const baseAsset = await assetStorage.getAsset(ctx, baseAssetId)
			const targetAsset = await assetStorage.getAsset(ctx, targetAssetId)

			if (!baseAsset) throw new Error(`Cannot find base asset: '${baseAssetId}'`)
			if (!targetAsset) throw new Error(`Cannot find target asset: '${targetAssetId}'`)

			pool = new PoolXYK({
				id: poolId,
				baseAsset,
				targetAsset,
				baseAssetReserves: 0n,
				targetAssetReserves: 0n,
				multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
				priceUSD: '0',
				strategicBonusApy: '0',
				updatedAtBlock: ctx.block.header.height,
			})

			await ctx.store.save(pool)

			getPoolsStorageLog(ctx).debug({ poolId }, 'Created Pool XYK')
		}

		this.storage.set(poolId, pool)

		return pool
	}



	public async getLockedLiquidityUSD(ctx: BlockContext): Promise<BigNumber> {
		const lockedAssets = new Map<AssetId, bigint>()
	
		for (const { baseAsset, targetAsset, baseAssetReserves, targetAssetReserves } of this.storage.values()) {
		  const a = lockedAssets.get(toAssetId(baseAsset.id))
		  const b = lockedAssets.get(toAssetId(targetAsset.id))
	
		  lockedAssets.set(toAssetId(baseAsset.id), (a || BigInt(0)) + baseAssetReserves)
		  lockedAssets.set(toAssetId(targetAsset.id), (b || BigInt(0)) + targetAssetReserves)
		}
	
		let lockedUSD = new BigNumber(0)
	
		// update locked luqidity for assets
		for (const [assetId, liquidity] of lockedAssets.entries()) {
		  const asset = await assetStorage.updateLiquidity(ctx, assetId, liquidity)
		  const precision = assetPrecisions.get(toAssetId(asset.id))
		  assertDefined(asset.liquidity)
		  assertDefined(precision)
		  const assetLockedUSD = new BigNumber(asset.liquidity.toString())
			.multipliedBy(new BigNumber(asset.priceUSD))
			.dividedBy(Math.pow(10, precision))
	
		  lockedUSD = lockedUSD.plus(assetLockedUSD)
		}
	
		return lockedUSD
	  }

	async updateApy(ctx: BlockContext, id: string, strategicBonusApy: string): Promise<void> {
	  const pool = await this.getPoolById(ctx, id)

	  assertDefined(pool)
  
	  if (pool.strategicBonusApy === strategicBonusApy) return
  
	  pool.strategicBonusApy = strategicBonusApy
	  // stream update
	  poolXykApyUpdatesStream.update(id, strategicBonusApy)
	}
}

export const poolAccounts = new PoolAccountsStorage()
export const poolsStorage = new PoolsStorage()
