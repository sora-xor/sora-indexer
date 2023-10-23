import BigNumber from 'bignumber.js'

import { PoolXYK } from '../../model'

import { formatU128ToBalance, assetSnapshotsStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools'
import { XOR, PSWAP, DAI, BASE_ASSETS, XSTUSD } from '../../utils/consts'
import { BlockContext } from '../../types'
import { AssetId } from '../../types'
import { getPoolsStorageLog, getSyncPricesLog } from '../../utils/logs'

const getAssetDexCap = (assetReserves: BigNumber, assetPrice: BigNumber, daiReserves: BigNumber) => {
	// theoretical asset capitalization in DAI inside DEX
	const assetDaiCap = assetPrice.multipliedBy(assetReserves)
	// real asset capitalization is supported by DAI
	const assetDexCap = assetDaiCap.isGreaterThan(daiReserves) ? daiReserves : assetDaiCap

	return assetDexCap
}

export async function syncPoolXykPrices(ctx: BlockContext): Promise<void> {
	if (!PoolsPrices.get()) return

	getSyncPricesLog(ctx).debug('Sync PoolXYK prices')

	const assetsLockedInPools = new Map<AssetId, bigint>()

	let pswapPriceInDAI = new BigNumber(0)
	let liquiditiesUSD = new BigNumber(0)

	let baseAssetWithDoublePoolsPrice = new BigNumber(0)

	const pools: Record<AssetId, PoolXYK[]> = {}
	const daiReserves: Record<AssetId, BigNumber> = {}
	const assetsPrices: Record<AssetId, { dexCap: BigNumber; price: string }> = {}
	const syntheticAssetsIds = [...tickerSyntheticAssetId.values()].filter((id) => id !== XSTUSD)

	for (const baseAssetId of [...BASE_ASSETS].reverse()) {
		const poolsMap = poolAccounts.getMap(baseAssetId)

		if (!poolsMap) continue

		pools[baseAssetId] = []

		let baseAssetInPools = new BigNumber(0)
		let baseAssetWithDoublePools = new BigNumber(0)
		let baseAssetPriceInDAI = new BigNumber(0)

		getSyncPricesLog(ctx).debug({ baseAssetId }, `Update ${poolsMap.size} pools`)

		for (const poolId of poolsMap.values()) {
			const pool = await poolsStorage.getPoolById(ctx, poolId)

			if (!pool) continue

			const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString())
			const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString())

			baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN)
			baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)))

			if (pool.targetAsset.id === DAI) {
				baseAssetPriceInDAI = !baseAssetReservesBN.isZero()
					? targetAssetReservesBN.dividedBy(baseAssetReservesBN)
					: new BigNumber(0)
				daiReserves[baseAssetId] = targetAssetReservesBN
			}

			assetsLockedInPools.set(
				pool.baseAsset.id as AssetId,
				(assetsLockedInPools.get(pool.baseAsset.id as AssetId) || 0n) + pool.baseAssetReserves,
			)

			assetsLockedInPools.set(
				pool.targetAsset.id as AssetId,
				(assetsLockedInPools.get(pool.targetAsset.id as AssetId) || 0n) + pool.targetAssetReserves,
			)

			pools[baseAssetId].push(pool)
			getPoolsStorageLog(ctx).debug({ poolId: pool.id }, 'Update pool')
		}

		baseAssetWithDoublePoolsPrice = baseAssetWithDoublePoolsPrice.plus(baseAssetWithDoublePools.multipliedBy(baseAssetPriceInDAI))

		// If base asset has price in DAI
		if (!baseAssetPriceInDAI.isZero()) {
			// update pools prices
			pools[baseAssetId].forEach((p) => {
				const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString())
				const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString())
				const daiPrice = !targetAssetReserves.isZero()
					? baseAssetReserves.dividedBy(targetAssetReserves).multipliedBy(baseAssetPriceInDAI)
					: new BigNumber(0)

				p.priceUSD = daiPrice.toFixed(18)

				// update PSWAP price (price from pair with XOR)
				if (p.targetAsset.id === PSWAP && p.baseAsset.id === XOR) {
					pswapPriceInDAI = daiPrice
				}
			})
		}

		const baseAssetInPoolsFormatted = formatU128ToBalance(BigInt(baseAssetInPools.toFixed(0)), baseAssetId)

		// update liquidities data
		liquiditiesUSD = liquiditiesUSD.plus(
			new BigNumber(baseAssetInPoolsFormatted).multipliedBy(baseAssetPriceInDAI).multipliedBy(new BigNumber(2)),
		)

		// update price samples
		assetsPrices[baseAssetId] = {
			price: baseAssetPriceInDAI.toFixed(18),
			dexCap: getAssetDexCap(baseAssetInPools, baseAssetPriceInDAI, daiReserves[baseAssetId]),
		}

		// update price samples
		for (const pool of pools[baseAssetId]) {
			const assetDexCap = getAssetDexCap(
				new BigNumber(pool.targetAssetReserves.toString()),
				new BigNumber(pool.priceUSD!),
				daiReserves[baseAssetId],
			)

			if (
				!assetsPrices[pool.targetAsset.id as AssetId] ||
				assetsPrices[pool.targetAsset.id as AssetId].dexCap.isLessThan(assetDexCap)
			) {
				if (pool.priceUSD) {
					assetsPrices[pool.targetAsset.id as AssetId] = {
						dexCap: assetDexCap,
						price: pool.priceUSD,
					}
				}
			}
		}
	}

	// update pools SB_APY
	if (!pswapPriceInDAI.isZero()) {
		const pswapsPerDay = new BigNumber(2_500_000)

		for (const baseAssetId of BASE_ASSETS) {
			if (Array.isArray(pools[baseAssetId])) {
				pools[baseAssetId].forEach((p) => {
					const strategicBonusApy = pswapPriceInDAI
						.multipliedBy(pswapsPerDay)
						.dividedBy(baseAssetWithDoublePoolsPrice.dividedBy(Math.pow(10, 18)))
						.multipliedBy(new BigNumber(365 / 2))
						.multipliedBy(new BigNumber(p.multiplier))

					p.strategicBonusApy = strategicBonusApy.toFixed(18)
				})
			}
		}
	}

	// update assets prices
	for (const [assetId, { price }] of Object.entries(assetsPrices)) {
		// do not update price from XYK pool for synthetic assets
		if (!syntheticAssetsIds.includes(assetId as AssetId)) {
			await assetSnapshotsStorage.updatePrice(ctx, assetId as AssetId, price)
		}
	}
    getSyncPricesLog(ctx).debug(`${Object.entries(assetsPrices).length} asset snapshot prices updated`);

	// update locked liquidity for assets
	for (const [assetId, liquidity] of assetsLockedInPools.entries()) {
		await assetSnapshotsStorage.updateLiquidity(ctx, assetId as AssetId, liquidity)
	}
    getSyncPricesLog(ctx).debug(`${Object.entries(assetsPrices).length} asset snapshot liquidities updated`);

	// update total liquidity in USD
	await networkSnapshotsStorage.updateLiquidityStats(ctx, liquiditiesUSD)

	getSyncPricesLog(ctx).debug('PoolXYK prices updated')

	PoolsPrices.set(false)
}
