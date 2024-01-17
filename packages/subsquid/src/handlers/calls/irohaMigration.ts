import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { getEventData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { events } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function irohaMigrationCallHandler(ctx: BlockContext, call: Call<'IrohaMigration.migrate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	let details: {
		assetId: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const currenciesDepositedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Deposited'])
		const currenciesTransferredEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Transferred'])

		if (currenciesDepositedEvent) {
			const data = getEventData(ctx, events.currencies.deposited, currenciesDepositedEvent)

			const assetId = getAssetId(data[0])
			const assetAmount = data[2] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		} else if (currenciesTransferredEvent) {
			const data = getEventData(ctx, events.currencies.transferred, currenciesTransferredEvent)

			const assetId = getAssetId(data[0])
			const assetAmount = data[3] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		}

		if (details) await addDataToHistoryElement(ctx, historyElement, details)
		await updateHistoryElementStats(ctx, historyElement)
	}
}
