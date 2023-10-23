import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { BlockContext, CallItem } from '../../types'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

export async function rewardsCallHandler(
	ctx: BlockContext,
	callItem:
		| CallItem<'PswapDistribution.claim_incentive'>
		| CallItem<'Rewards.claim'>
		| CallItem<'VestedRewards.claim_rewards'>
		| CallItem<'VestedRewards.claim_crowdloan_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	if (historyElement.execution.success) {
		const rewards = findEventsByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer']).reduce(
			(buffer: { assetId: string; amount: string }[], eventItem) => {
				const data = getAssetsTransferEventData(ctx, eventItem)
				buffer.push({
					assetId: data.assetId,
					amount: data.amount.toString(),
				})
				return buffer
			},
			[],
		)

		await addDataToHistoryElement(ctx, historyElement, rewards)
	}

	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, callItem).debug(`Saved reward claim extrinsic`)
}
