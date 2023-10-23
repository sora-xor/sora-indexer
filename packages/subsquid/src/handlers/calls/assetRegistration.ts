import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { BlockContext, CallItem } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetsAssetRegisteredEvent } from '../../types/generated/events'
import { AssetsRegisterCall } from '../../types/generated/calls'
import { AssetId } from '../../types'
import { getEntityData } from '../../utils/entities'
import { getAssetId } from '../../utils/assets'
import { logStartProcessingCall } from '../../utils/logs'

export async function assetRegistrationCallHandler(ctx: BlockContext, callItem: CallItem<'Assets.register'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	if (!historyElement) return

	let details: {
		assetId: AssetId
	}

	if (historyElement.execution.success) {
		const assetRegistrationEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Assets.AssetRegistered'], true)
		const assetRegistrationEvent = new AssetsAssetRegisteredEvent(ctx, assetRegistrationEventItem.event)
		const assetRegistrationEventData = getEntityData(ctx, assetRegistrationEvent, assetRegistrationEventItem)

		const assetId = getAssetId(assetRegistrationEventData[0])

		details = {
			assetId,
		}
	} else {
		const call = new AssetsRegisterCall(ctx, callItem.call)
		const data = getEntityData(ctx, call, callItem)

		const symbol = getAssetId(data.symbol)

		details = {
			assetId: symbol,
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
