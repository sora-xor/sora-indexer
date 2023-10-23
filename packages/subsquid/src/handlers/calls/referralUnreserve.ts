import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { ReferralsUnreserveCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

export async function referralUnreserveCallHandler(ctx: BlockContext, callItem: CallItem<'Referrals.unreserve'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	if (!historyElement) return

	let details: {
		from?: string
		to?: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		const balancesTransferEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Transfer'], true)

		const { from, to, amount } = getAssetsTransferEventData(ctx, balancesTransferEventItem)

		details = {
			from,
			to,
			amount: formatU128ToBalance(amount, XOR),
		}
	} else {
		const call = new ReferralsUnreserveCall(ctx, callItem.call)
		const data = getEntityData(ctx, call, callItem)

		details = {
			amount: formatU128ToBalance(data.balance as AssetAmount, XOR),
		}
	}

	if (details) await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, callItem).debug('Saved referral unreserve')
}
