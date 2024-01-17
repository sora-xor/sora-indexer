import { ReferrerReward } from '../../model'
import { BlockContext, Event } from '../../types'
import { getBlockTimestamp, toAddress } from '../../utils'
import { getEventData } from '../../utils/entities'
import { logStartProcessingEvent, getEventHandlerLog } from '../../utils/logs'
import { events } from '../../types/generated/production'

export async function referrerRewardEventHandler(ctx: BlockContext, event: Event<'XorFee.ReferrerRewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const [referral, referrer, amount] = getEventData(ctx, events.xorFee.referrerRewarded, event)

	const key = `${toAddress(referral)}-${toAddress(referrer)}`

	let referrerReward = await ctx.store.get(ReferrerReward, key)

	if (!referrerReward) {
		referrerReward = new ReferrerReward()
		referrerReward.id = key
		referrerReward.referral = toAddress(referral)
		referrerReward.referrer = toAddress(referrer)
		referrerReward.amount = 0n
		referrerReward.updated = getBlockTimestamp(ctx)
	}

	referrerReward.updated = getBlockTimestamp(ctx)
	referrerReward.updatedAtBlock = ctx.block.header.height

	referrerReward.amount = referrerReward.amount + amount

	await ctx.store.save(referrerReward)
	getEventHandlerLog(ctx, event).debug({ referral, referrer, amount, updated: referrerReward.updated }, 'Referrer reward updated')
}
