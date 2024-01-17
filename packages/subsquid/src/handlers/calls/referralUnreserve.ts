import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getCallData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { calls } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function referralUnreserveCallHandler(ctx: BlockContext, call: Call<'Referrals.unreserve'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	if (!historyElement) return

	let details: {
		from?: string
		to?: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const balancesTransferEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Balances.Transfer'], true)

		const { from, to, amount } = getAssetsTransferEventData(ctx, balancesTransferEvent)

		details = {
			from,
			to,
			amount: formatU128ToBalance(amount, XOR),
		}
	} else {
		const data = getCallData(ctx, calls.referrals.unreserve, call)

		details = {
			amount: formatU128ToBalance(data.balance as AssetAmount, XOR),
		}
	}

	if (details) await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, call).debug('Saved referral unreserve')
}
