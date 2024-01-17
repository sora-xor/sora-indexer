import { StakingEraNomination } from '../../model/generated/stakingEraNomination.model'
import { StakingEraNominator } from '../../model/generated/stakingEraNominator.model'
import { StakingEraValidator } from '../../model/generated/stakingEraValidator.model'
import { StakingValidator } from '../../model/generated/stakingValidator.model'
import { BlockContext, Event } from '../../types'
import { assertDefined, toAddress } from '../../utils'
import { getStorageRepresentation } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { storage } from '../../types/generated/merged'

export async function stakingStakersElectedEventHandler(ctx: BlockContext, event: Event<'Staking.StakersElected'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const activeStakingEra = await getActiveStakingEra(ctx)

	const exposures = await getStorageRepresentation(ctx, storage.staking.erasStakers)?.getPairs(ctx.block.header, activeStakingEra.index)
	assertDefined(exposures)

	for (const [[era, validator], exposure] of exposures) {
		let stakingValidator = await ctx.store.get(StakingValidator, toAddress(validator))
		if (!stakingValidator) {
			stakingValidator = new StakingValidator()
			stakingValidator.id = toAddress(validator)
		}

		const stakingStaker = await getStakingStaker(ctx, toAddress(validator))

		let stakingEraValidator = await ctx.store.get(StakingEraValidator, {
			where: {
				era: { id: activeStakingEra.id },
				staker: { id: stakingStaker.id },
			},
		})
		if (!stakingEraValidator) {
			stakingEraValidator = new StakingEraValidator()
			stakingEraValidator.id = `${activeStakingEra.id}-${stakingStaker.id}`
			stakingEraValidator.era = activeStakingEra
			stakingEraValidator.validator = stakingValidator
			stakingEraValidator.ownBond = 0n
			stakingEraValidator.totalBond = 0n
			stakingEraValidator.rewardAmount = 0n
			stakingEraValidator.staker = stakingStaker
		}
		assertDefined(exposure)
		stakingEraValidator.ownBond = exposure.own
		stakingEraValidator.totalBond = exposure.total
		stakingValidator.bond = exposure.total
		await ctx.store.save(stakingValidator)
		getEventHandlerLog(ctx, event).debug({ id: stakingValidator.id, bond: stakingValidator.bond }, 'Staking Validator saved')
		await ctx.store.save(stakingEraValidator)
		getEventHandlerLog(ctx, event).debug(
			{
				id: stakingEraValidator.id,
				ownBond: stakingEraValidator.ownBond,
				totalBond: stakingEraValidator.totalBond,
			},
			'Staking Era Validator saved',
		)

		for (let nomination of exposure.others) {
			const stakingStaker = await getStakingStaker(ctx, toAddress(nomination.who))

			let stakingEraNominator = await ctx.store.get(StakingEraNominator, {
				where: {
					era: { id: activeStakingEra.id },
					staker: { id: stakingStaker.id },
				},
			})
			if (!stakingEraNominator) {
				stakingEraNominator = new StakingEraNominator()
				stakingEraNominator.id = `${activeStakingEra.id}-${stakingStaker.id}`
				stakingEraNominator.era = activeStakingEra
				stakingEraNominator.bond = 0n
				stakingEraNominator.staker = stakingStaker
			}
			stakingEraNominator.bond += nomination.value
			await ctx.store.save(stakingEraNominator)
			getEventHandlerLog(ctx, event).debug(
				{ id: stakingEraNominator.id, bond: stakingEraNominator.bond },
				'Staking Era Nominator saved',
			)

			let stakingEraNomination = new StakingEraNomination()
			if (stakingValidator) {
				stakingEraNomination.id = `${activeStakingEra.id}-${stakingStaker.id}-${stakingValidator.id}`
			}
			stakingEraNomination.era = activeStakingEra
			stakingEraNomination.amount = nomination.value
			if (stakingEraValidator) {
				stakingEraNomination.validator = stakingEraValidator
			}
			stakingEraNomination.nominator = stakingEraNominator
			await ctx.store.save(stakingEraNomination)
			getEventHandlerLog(ctx, event).debug(
				{ id: stakingEraNomination.id, amount: stakingEraNomination.amount },
				'Staking Era Nomination saved',
			)
		}
	}
}
