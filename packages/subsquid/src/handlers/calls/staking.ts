import { BlockContext, Call } from '../../types'
import { createCallHistoryElement } from '../../utils/history'
import { getCallData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { XOR } from '../../utils/consts'
import { formatU128ToBalance } from '../../utils/assets'
import { getExtrinsicSigner } from '../../utils/calls'
import { PayeeType } from '../../model'
import { getStakingStaker } from '../../utils/staking'
import { toAddress } from '../../utils'
import { calls } from '../../types/generated/merged'

export async function stakingBondCallHandler(ctx: BlockContext, call: Call<'Staking.bond'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.bond, call)

	const details = {
		controller: data.controller,
		payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: data.payee.value } : { kind: data.payee.__kind },
		amount: formatU128ToBalance(data.value, XOR),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingBondExtraCallHandler(ctx: BlockContext, call: Call<'Staking.bond_extra'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.bondExtra, call)

	const details = {
		amount: formatU128ToBalance(data.maxAdditional, XOR),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingCancelDeferredSlashCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.cancel_deferred_slash'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.cancelDeferredSlash, call)

	const details = {
		era: data.era,
		slashIndices: data.slashIndices,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingChillCallHandler(ctx: BlockContext, call: Call<'Staking.chill'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.chill, call)

	const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingChillOtherCallHandler(ctx: BlockContext, call: Call<'Staking.chill_other'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.chillOther, call)

	const details = {
		controller: toAddress(data.controller),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingForceApplyMinCommissionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.force_apply_min_commission'>,
): Promise<void> {
	const data = getCallData(ctx, calls.staking.forceApplyMinCommission, call)

	const details = {
		validatorStash: toAddress(data.validatorStash),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingForceNewEraCallHandler(ctx: BlockContext, call: Call<'Staking.force_new_era'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceNewEra, call)

	const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingForceNewEraAlwaysCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.force_new_era_always'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceNewEraAlways, call)

	const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingForceNoErasCallHandler(ctx: BlockContext, call: Call<'Staking.force_no_eras'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceNoEras, call)

	const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingForceUnstakeCallHandler(ctx: BlockContext, call: Call<'Staking.force_unstake'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceUnstake, call)

	const details = {
		stash: toAddress(data.stash),
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingIncreaseValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.increase_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.increaseValidatorCount, call)

	const details = {
		count: data.additional,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingKickCallHandler(ctx: BlockContext, call: Call<'Staking.kick'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.kick, call)

	const details = {
		address: data.who.map((item) => toAddress(item)),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingNominateCallHandler(ctx: BlockContext, call: Call<'Staking.nominate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.nominate, call)

	const details = {
		targets: data.targets.map(toAddress),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingPayoutStakersCallHandler(ctx: BlockContext, call: Call<'Staking.payout_stakers'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.payoutStakers, call)

	const details = {
		validatorStash: toAddress(data.validatorStash),
		era: data.era,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingReapStashCallHandler(ctx: BlockContext, call: Call<'Staking.reap_stash'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.reapStash, call)

	const details = {
		stash: data.stash,
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingRebondCallHandler(ctx: BlockContext, call: Call<'Staking.rebond'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.rebond, call)

	const details = { amount: formatU128ToBalance(data.value, XOR) }

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingScaleValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.scale_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.scaleValidatorCount, call)

	const details = {
		factor: data.factor,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetControllerCallHandler(ctx: BlockContext, call: Call<'Staking.set_controller'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setController, call)

	const controller = toAddress(data.controller)
	const extrinsicSigner = getExtrinsicSigner(ctx, call)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)

	if (stakingStaker.controller !== controller) {
		stakingStaker.controller = controller
		if (stakingStaker.payeeType === PayeeType.CONTROLLER) {
			stakingStaker.payee = controller
		}
		ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, call).debug({ staker: stakingStaker.id, controller }, 'Staking staker controller updated')
	}

	const details = {
		controller,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetHistoryDepthCallHandler(ctx: BlockContext, call: Call<'Staking.set_history_depth'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setHistoryDepth, call)

	const details = {
		newHistoryDepth: data.newHistoryDepth,
		eraItemsDeleted: data.eraItemsDeleted,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetInvulnerablesCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_invulnerables'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setInvulnerables, call)

	const details = {
		invulnerables: data.invulnerables.map(toAddress),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetMinCommissionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_min_commission'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setMinCommission, call)

	const details = {
		commission: data.new,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetPayeeCallHandler(ctx: BlockContext, call: Call<'Staking.set_payee'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setPayee, call)

	const extrinsicSigner = getExtrinsicSigner(ctx, call)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)
	const kind = data.payee.__kind.toUpperCase()
	const payeeType = kind === 'STAKED' || kind === 'NONE' ? PayeeType.STASH : kind as PayeeType
	let payee = null
	if (data.payee.__kind === 'Account') {
		payee = toAddress(data.payee.value)
	} else if (payeeType === PayeeType.STASH) {
		payee = stakingStaker.id
	} else if (payeeType === PayeeType.CONTROLLER) {
		payee = stakingStaker.controller
	}

	if (stakingStaker.payeeType !== payeeType || stakingStaker.payee !== payee) {
		stakingStaker.payeeType = payeeType
		stakingStaker.payee = payee
		ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, call).debug({ staker: stakingStaker.id, payee }, 'Staking staker payee updated')
	}

	const details = {
		payeeType,
		payee,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetStakingConfigsCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_staking_configs'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setStakingConfigs, call)

	const createDetailObject = (key: keyof typeof data) => {
		const value = data[key]
		return value.__kind === 'Set'
			? {
					kind: value.__kind,
					value: typeof value.value === 'bigint' ? formatU128ToBalance(value.value, XOR) : value.value,
			  }
			: { kind: value.__kind }
	}

	const details = {
		minNominatorBond: createDetailObject('minNominatorBond'),
		minValidatorBond: createDetailObject('minValidatorBond'),
		maxNominatorCount: createDetailObject('maxNominatorCount'),
		maxValidatorCount: createDetailObject('maxValidatorCount'),
		chillThreshold: createDetailObject('chillThreshold'),
		minCommission: createDetailObject('minCommission'),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSetValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setValidatorCount, call)

	const details = {
		count: data.new,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSubmitElectionSolutionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.submit_election_solution'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.submitElectionSolution, call)

	const details = {
		winners: data.winners,
		era: data.era,
		score: data.score,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingSubmitElectionSolutionUnsignedCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.submit_election_solution_unsigned'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.submitElectionSolutionUnsigned, call)

	const details = {
		winners: data.winners,
		compact: data.compact,
		score: data.score,
		era: data.era,
		size: data.size,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingUnbondCallHandler(ctx: BlockContext, call: Call<'Staking.unbond'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.unbond, call)

	const details = {
		amount: formatU128ToBalance(data.value, XOR),
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingValidateCallHandler(ctx: BlockContext, call: Call<'Staking.validate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.validate, call)

	const details = {
		commission: data.prefs.commission,
		blocked: data.prefs.blocked,
	}

	await createCallHistoryElement(ctx, call, details)
}

export async function stakingWithdrawUnbondedCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.withdraw_unbonded'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.withdrawUnbonded, call)

	const details = {
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}
