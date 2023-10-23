import { toHex } from '@subsquid/substrate-processor'
import { BlockContext, CallItem } from '../../types'
import {
	StakingBondCall,
	StakingBondExtraCall,
	StakingCancelDeferredSlashCall,
	StakingChillCall,
	StakingChillOtherCall,
	StakingForceApplyMinCommissionCall,
	StakingForceNewEraAlwaysCall,
	StakingForceNewEraCall,
	StakingForceNoErasCall,
	StakingForceUnstakeCall,
	StakingIncreaseValidatorCountCall,
	StakingKickCall,
	StakingNominateCall,
	StakingPayoutStakersCall,
	StakingReapStashCall,
	StakingRebondCall,
	StakingScaleValidatorCountCall,
	StakingSetControllerCall,
	StakingSetHistoryDepthCall,
	StakingSetInvulnerablesCall,
	StakingSetMinCommissionCall,
	StakingSetPayeeCall,
	StakingSetStakingConfigsCall,
	StakingSetValidatorCountCall,
	StakingSubmitElectionSolutionCall,
	StakingSubmitElectionSolutionUnsignedCall,
	StakingUnbondCall,
	StakingValidateCall,
	StakingWithdrawUnbondedCall,
} from '../../types/generated/calls'
import { createHistoryElement } from '../../utils/history'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { XOR } from '../../utils/consts'
import { formatU128ToBalance } from '../../utils/assets'
import { getExtrinsicSigner } from '../../utils/calls'
import { PayeeType } from '../../model'
import { getStakingStaker } from '../../utils/staking'

export async function stakingBondCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.bond'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingBondCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		controller: toHex(data.controller),
		payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: toHex(data.payee.value) } : { kind: data.payee.__kind },
		value: formatU128ToBalance(data.value, XOR),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingBondExtraCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.bond_extra'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingBondExtraCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		maxAdditional: formatU128ToBalance(data.maxAdditional, XOR),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingCancelDeferredSlashCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.cancel_deferred_slash'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingCancelDeferredSlashCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		era: data.era,
		slashIndices: data.slashIndices,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingChillCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.chill'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingChillCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingChillOtherCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.chill_other'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingChillOtherCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		controller: toHex(data.controller),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingForceApplyMinCommissionCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.force_apply_min_commission'>,
): Promise<void> {
	const historyElement = await createHistoryElement(ctx, callItem)

	const call = new StakingForceApplyMinCommissionCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		validatorStash: toHex(data.validatorStash),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingForceNewEraCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.force_new_era'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingForceNewEraCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingForceNewEraAlwaysCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.force_new_era_always'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingForceNewEraAlwaysCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingForceNoErasCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.force_no_eras'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingForceNoErasCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingForceUnstakeCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.force_unstake'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingForceUnstakeCall(ctx, callItem.call)
	const data = call.asV1
	const details = {
		stash: toHex(data.stash),
		numSlashingSpans: data.numSlashingSpans,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingIncreaseValidatorCountCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.increase_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingIncreaseValidatorCountCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		additional: data.additional,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingKickCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.kick'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingKickCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		who: data.who.map((item) => toHex(item)),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingNominateCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.nominate'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingNominateCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		targets: data.targets.map(toHex),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingPayoutStakersCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.payout_stakers'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingPayoutStakersCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		validatorStash: toHex(data.validatorStash),
		era: data.era,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingReapStashCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.reap_stash'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingReapStashCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		stash: toHex(data.stash),
		numSlashingSpans: data.numSlashingSpans,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingRebondCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.rebond'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingRebondCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = { value: data.value }

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingScaleValidatorCountCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.scale_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingScaleValidatorCountCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		factor: data.factor,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetControllerCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.set_controller'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetControllerCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const controller = toHex(data.controller)
	const extrinsicSigner = getExtrinsicSigner(ctx, callItem)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)

	if (stakingStaker.controller !== controller) {
		stakingStaker.controller = controller
		ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, callItem).debug({ staker: stakingStaker.id, controller }, 'Staking staker controller updated')
	}

	const details = {
		controller,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetHistoryDepthCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.set_history_depth'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetHistoryDepthCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		newHistoryDepth: data.newHistoryDepth,
		eraItemsDeleted: data.eraItemsDeleted,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetInvulnerablesCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.set_invulnerables'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetInvulnerablesCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		invulnerables: data.invulnerables.map(toHex),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetMinCommissionCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.set_min_commission'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetMinCommissionCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		new: data.new,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetPayeeCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.set_payee'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetPayeeCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const extrinsicSigner = getExtrinsicSigner(ctx, callItem)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)
	const payeeType = data.payee.__kind.toUpperCase() as PayeeType
	const payee = data.payee.__kind === 'Account' ? toHex(data.payee.value) : null

	if (stakingStaker.payeeType !== payeeType || stakingStaker.payee !== payee) {
		stakingStaker.payeeType = payeeType
		stakingStaker.payee = payee
		ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, callItem).debug({ staker: stakingStaker.id, payee }, 'Staking staker payee updated')
	}

	const details = {
		payeeType,
		payee,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetStakingConfigsCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.set_staking_configs'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetStakingConfigsCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		minNominatorBond:
			data.minNominatorBond.__kind === 'Set'
				? {
						kind: data.minNominatorBond.__kind,
						value: data.minNominatorBond.value,
				  }
				: { kind: data.minNominatorBond.__kind },
		minValidatorBond:
			data.minValidatorBond.__kind === 'Set'
				? {
						kind: data.minValidatorBond.__kind,
						value: data.minValidatorBond.value,
				  }
				: { kind: data.minValidatorBond.__kind },
		maxNominatorCount:
			data.maxNominatorCount.__kind === 'Set'
				? {
						kind: data.maxNominatorCount.__kind,
						value: data.maxNominatorCount.value,
				  }
				: { kind: data.maxNominatorCount.__kind },
		maxValidatorCount:
			data.maxValidatorCount.__kind === 'Set'
				? {
						kind: data.maxValidatorCount.__kind,
						value: data.maxValidatorCount.value,
				  }
				: { kind: data.maxValidatorCount.__kind },
		chillThreshold:
			data.chillThreshold.__kind === 'Set'
				? {
						kind: data.chillThreshold.__kind,
						value: data.chillThreshold.value,
				  }
				: { kind: data.chillThreshold.__kind },
		minCommission:
			data.minCommission.__kind === 'Set'
				? {
						kind: data.minCommission.__kind,
						value: data.minCommission.value,
				  }
				: { kind: data.minCommission.__kind },
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSetValidatorCountCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.set_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSetValidatorCountCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		new: data.new,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSubmitElectionSolutionCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.submit_election_solution'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSubmitElectionSolutionCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		winners: data.winners,
		era: data.era,
		score: data.score,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingSubmitElectionSolutionUnsignedCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.submit_election_solution_unsigned'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingSubmitElectionSolutionUnsignedCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		winners: data.winners,
		compact: data.compact,
		score: data.score,
		era: data.era,
		size: data.size,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingUnbondCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.unbond'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingUnbondCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		value: formatU128ToBalance(data.value, XOR),
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingValidateCallHandler(ctx: BlockContext, callItem: CallItem<'Staking.validate'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingValidateCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		commission: data.prefs.commission,
		blocked: data.prefs.blocked,
	}

	await createHistoryElement(ctx, callItem, details)
}

export async function stakingWithdrawUnbondedCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'Staking.withdraw_unbonded'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const call = new StakingWithdrawUnbondedCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const details = {
		numSlashingSpans: data.numSlashingSpans,
	}

	await createHistoryElement(ctx, callItem, details)
}
