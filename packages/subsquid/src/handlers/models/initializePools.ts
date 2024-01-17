import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools'
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts'
import { BlockContext } from '../../types'
import { Asset, PoolXYK } from '../../model'
import { Address } from '../../types'
import { getInitializePoolsLog } from '../../utils/logs'

let isFirstBlockIndexed = false

export async function initializePools(ctx: BlockContext): Promise<void> {
	if (isFirstBlockIndexed) return

	getInitializePoolsLog(ctx).debug('Initialize Pool XYK entities')

	const poolsBuffer = new Map<
		string,
		{
			id: Address
			baseAsset: Asset
			targetAsset: Asset
			baseAssetReserves?: bigint
			targetAssetReserves?: bigint
			multiplier: number
		}
	>()

	for (const baseAssetId of BASE_ASSETS) {
		// We don't use Promise.all() here because we need consistent order of requests in the log
		const properties = await getAllProperties(ctx, baseAssetId)
		const reserves = await getAllReserves(ctx, baseAssetId)

		if (!properties || !reserves) continue

		for (const item of properties) {
			const targetAssetId = item.targetAssetId
			const poolAccountId = item.reservesAccountId

			poolAccounts.add(baseAssetId, targetAssetId, poolAccountId)

			const [baseAsset, targetAsset] = await Promise.all([ctx.store.get(Asset, baseAssetId), ctx.store.get(Asset, targetAssetId)])
			if (!baseAsset) throw new Error(`[${ctx.block.header.height}] Cannot find base asset`)
			if (!targetAsset) throw new Error(`[${ctx.block.header.height}] Cannot find target asset`)

			poolsBuffer.set(poolAccountId, {
				id: poolAccountId,
				baseAsset,
				targetAsset,
				multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
			})
		}

		reserves.forEach((item) => {
			const { targetAssetId, baseBalance, targetBalance } = item
			const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId)

			if (poolAccountId) {
				const pool = poolsBuffer.get(poolAccountId)
				if (pool) {
					pool.baseAssetReserves = baseBalance
					pool.targetAssetReserves = targetBalance
				}
			}
		})
	}

	const entities = [...poolsBuffer.values()].map(
		(pool) =>
			new PoolXYK({
				...pool,
				id: pool.id,
				updatedAtBlock: ctx.block.header.height,
			}),
	)

	if (entities.length) {
		await ctx.store.save(entities)
		getInitializePoolsLog(ctx).debug(`${entities.length} Pool XYKs initialized!`)


		// get or create entities in DB & memory
		const created = (await Promise.all(entities.map(entity => poolsStorage.getPoolById(ctx, entity.id as Address)))).filter((entity): entity is PoolXYK => !!entity)
		// update data in memory storage
		created.forEach((entity) => {
			Object.assign(entity, poolsBuffer.get(entity.id))
		});
		// save in DB
		await ctx.store.save(created)
		await Promise.all(entities.map((entity) => poolsStorage.getPoolById(ctx, entity.id as Address)))
	} else {
		getInitializePoolsLog(ctx).debug('No Pool XYKs to initialize!')
	}

	isFirstBlockIndexed = true
}
