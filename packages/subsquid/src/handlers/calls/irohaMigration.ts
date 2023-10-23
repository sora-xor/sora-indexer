import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { CurrenciesDepositedEvent, CurrenciesTransferredEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'

export async function irohaMigrationCallHandler(ctx: BlockContext, callItem: CallItem<'IrohaMigration.migrate'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const historyElement = await createHistoryElement(ctx, callItem)
	const extrinsicHash = callItem.extrinsic.hash

	let details: {
		assetId: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		const currenciesDepositedEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Currencies.Deposited'])
		const currenciesTransferredEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Currencies.Transferred'])

		if (currenciesDepositedEventItem) {
			const event = new CurrenciesDepositedEvent(ctx, currenciesDepositedEventItem.event)
			const data = getEntityData(ctx, event, currenciesDepositedEventItem)

			const assetId = getAssetId(data[0])
			const assetAmount = data[2] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		} else if (currenciesTransferredEventItem) {
			const event = new CurrenciesTransferredEvent(ctx, currenciesTransferredEventItem.event)
			const data = getEntityData(ctx, event, currenciesTransferredEventItem)

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
