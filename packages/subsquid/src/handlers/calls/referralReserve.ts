import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getCallData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { calls } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function referralReserveCallHandler(ctx: BlockContext, call: Call<'Referrals.reserve'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	let details: {
		from?: string
		to?: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		const balancesTransferEventName = 'Balances.Transfer'
		assertDefined(call.extrinsic)
		const balancesTransferEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, [balancesTransferEventName], false) // TODO: Check if 'Currencies.Transferred' event is applicable here

		if (!balancesTransferEvent) {
			return
		}

		const { from, to, amount } = getAssetsTransferEventData(ctx, balancesTransferEvent)
		details = {
			from,
			to,
			amount: formatU128ToBalance(amount, XOR),
		}
	} else {
		const data = getCallData(ctx, calls.referrals.reserve, call)
		const amount = formatU128ToBalance(data.balance as AssetAmount, XOR)
		details = {
			amount,
		}
	}

	if (details) await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, call).debug(`Saved referral reserve`)
}
