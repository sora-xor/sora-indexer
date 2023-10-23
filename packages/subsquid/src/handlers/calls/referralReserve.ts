import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { ReferralsReserveCall } from '../../types/generated/calls'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

export async function referralReserveCallHandler(ctx: BlockContext, callItem: CallItem<'Referrals.reserve'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	let details: {
		from?: string
		to?: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		const balancesTransferEventName = 'Balances.Transfer'
		const balancesTransferEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, [balancesTransferEventName], false) // TODO: Check if 'Currencies.Transferred' event is applicable here

		if (!balancesTransferEventItem) {
			return
		}

		const { from, to, amount } = getAssetsTransferEventData(ctx, balancesTransferEventItem)

		details = {
			from,
			to,
			amount: formatU128ToBalance(amount, XOR),
		}
	} else {
		const call = new ReferralsReserveCall(ctx, callItem.call)
		const data = getEntityData(ctx, call, callItem)

		const amount = formatU128ToBalance(data.balance as AssetAmount, XOR)

		details = {
			amount,
		}
	}

	if (details) await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, callItem).debug(`Saved referral reserve`)
}
