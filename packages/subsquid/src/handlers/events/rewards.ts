import { StakingReward } from '../../model'
import { Address, BlockContext, Event } from '../../types'
import { assertDefined, formatDateTimestamp, getBlockTimestamp, getEventId, toAddress } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getEventData } from '../../utils/entities'
import { createEventHistoryElement } from '../../utils/history'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { events } from '../../types/generated/merged'

function getRewardData(ctx: BlockContext, event: Event<'Staking.Rewarded'>): { stash: Address; amount: string } {
	const data = getEventData(ctx, events.staking.rewarded, event)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { stash: toAddress(stash), amount: formatU128ToBalance(amount, VAL) }
}

export async function stakingRewardedEventHandler(ctx: BlockContext, event: Event<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { stash, amount } = getRewardData(ctx, event)

	const stakingEra = await getActiveStakingEra(ctx)
	const staker = await getStakingStaker(ctx, stash)
	const payeeType = staker.payeeType
	const payee = typeof staker.payee === 'string' ? staker.payee as Address : staker.payee
	const id = `${stakingEra.id}-${getEventId(ctx, event)}-${staker.id}`

	const stakingReward = new StakingReward()
	stakingReward.id = id
	stakingReward.staker = staker
	stakingReward.payeeType = payeeType
	stakingReward.payee = payee
	stakingReward.amount = amount
	stakingReward.era = stakingEra
	stakingReward.timestamp = getBlockTimestamp(ctx)

	await ctx.store.save(stakingReward)
	getEventHandlerLog(ctx, event).debug({ stash, payeeType, payee, amount, era: stakingEra.index }, 'Staking reward saved')

	await createEventHistoryElement(ctx, event, payee ?? id, { stash, payee, amount, era: stakingEra.index })
}
