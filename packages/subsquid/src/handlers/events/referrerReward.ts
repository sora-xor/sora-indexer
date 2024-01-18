import { ReferrerReward } from '../../model'
import { BlockContext, Event } from '../../types'
import { getBlockTimestamp, toAddress } from '../../utils'
import { getEventData } from '../../utils/entities'
import { logStartProcessingEvent, getEventHandlerLog } from '../../utils/logs'
import { events } from '../../types/generated/production'

export async function referrerRewardEventHandler(ctx: BlockContext, event: Event<'XorFee.ReferrerRewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.xorFee.referrerRewarded, event)
	const referral = toAddress(data[0])
	const referrer = toAddress(data[1])
	const amount = data[2]

	const key = `${referral}-${referrer}`

	let referrerReward = await ctx.store.get(ReferrerReward, key)

	if (!referrerReward) {
		referrerReward = new ReferrerReward()
		referrerReward.id = key
		referrerReward.referral = referral
		referrerReward.referrer = referrer
		referrerReward.amount = 0n
		referrerReward.updated = getBlockTimestamp(ctx)
	}

	referrerReward.updated = getBlockTimestamp(ctx)
	referrerReward.updatedAtBlock = ctx.block.header.height

	referrerReward.amount = referrerReward.amount + amount

	await ctx.store.save(referrerReward)
	getEventHandlerLog(ctx, event).debug({ referral, referrer, amount: referrerReward.amount, updated: referrerReward.updated }, 'Referrer reward updated')
}
