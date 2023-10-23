import { StakingReward } from '../../model'
import { Address, BlockContext, EventItem } from '../../types'
import { StakingRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, getEventId, toAddress } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getEntityData } from '../../utils/entities'
import { createHistoryElement } from '../../utils/history'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'

function getRewardData(ctx: BlockContext, eventItem: EventItem<'Staking.Rewarded'>): { stash: Address; amount: string } {
	const event = new StakingRewardedEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { stash: toAddress(stash), amount: formatU128ToBalance(amount, VAL) }
}

export async function stakingRewardedEventHandler(ctx: BlockContext, eventItem: EventItem<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const { stash, amount } = getRewardData(ctx, eventItem)

	const stakingEra = await getActiveStakingEra(ctx)
	const staker = await getStakingStaker(ctx, stash)
	const payee = staker.payee
	const id = `${stakingEra.id}-${getEventId(ctx, eventItem)}-${staker.id}`

	const stakingReward = new StakingReward()
	stakingReward.id = id
	stakingReward.staker = staker
	stakingReward.payee = payee
	stakingReward.amount = amount
	stakingReward.era = stakingEra
	stakingReward.timestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))

	await ctx.store.save(stakingReward)
	getEventHandlerLog(ctx, eventItem).debug({ stash, payee, amount, era: stakingEra.index }, 'Staking reward saved')

	await createHistoryElement(ctx, eventItem, { stash, payee, amount, era: stakingEra.index })
}
