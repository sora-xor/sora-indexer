import { PayeeType, StakingEra, StakingStaker } from '../model'
import { Address, BlockContext } from '../types'
import { StakingActiveEraStorage } from '../types/generated/storage'
import { getEntityData } from './entities'
import { getUtilsLog } from './logs'

export const getActiveStakingEra = async (ctx: BlockContext): Promise<StakingEra> => {
	const activeEraStorage = new StakingActiveEraStorage(ctx, ctx.block.header)

	const activeEra = await getEntityData(ctx, activeEraStorage, {
		kind: 'storage',
		name: StakingActiveEraStorage.name,
	}).get()

	if (!activeEra) {
		getUtilsLog(ctx).debug('Active era not found')
		throw new Error('Active era not found')
	}

	let stakingEra = await ctx.store.get(StakingEra, activeEra.index.toString())
	if (!stakingEra) {
		stakingEra = new StakingEra()
		stakingEra.id = activeEra.index.toString()
		stakingEra.index = activeEra.index
		if (activeEra.start) {
			stakingEra.start = activeEra.start
		}
		await ctx.store.save(stakingEra)
		getUtilsLog(ctx).debug({ index: activeEra.index }, 'Staking era saved')
	}

	return stakingEra
}

export const getStakingStaker = async (ctx: BlockContext, address: Address): Promise<StakingStaker> => {
	let stakingStaker = await ctx.store.get(StakingStaker, address)
	if (!stakingStaker) {
		stakingStaker = new StakingStaker({ id: address })
		stakingStaker.payeeType = PayeeType.STASH
		stakingStaker.payee = address
		await ctx.store.save(stakingStaker)
		getUtilsLog(ctx).debug({ id: address }, 'Staking staker saved')
	}
	return stakingStaker
}
