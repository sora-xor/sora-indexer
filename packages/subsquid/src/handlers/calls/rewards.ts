import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { BlockContext, Call } from '../../types'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { assertDefined } from '../../utils'

export async function rewardsCallHandler(
	ctx: BlockContext,
	call:
		| Call<'PswapDistribution.claim_incentive'>
		| Call<'Rewards.claim'>
		| Call<'VestedRewards.claim_rewards'>
		| Call<'VestedRewards.claim_crowdloan_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	assertDefined(call.extrinsic)
	const extrinsicHash = call.extrinsic.hash
	const historyElement = await createCallHistoryElement(ctx, call)

	if (historyElement.execution.success) {
		const rewards = findEventsByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer']).reduce(
			(buffer: { assetId: string; amount: string }[], event) => {
				const data = getAssetsTransferEventData(ctx, event)
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

	getCallHandlerLog(ctx, call).debug(`Saved reward claim extrinsic`)
}
