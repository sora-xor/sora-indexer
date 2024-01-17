import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { BlockContext, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetId } from '../../types'
import { getCallData, getEventData } from '../../utils/entities'
import { getAssetId } from '../../utils/assets'
import { logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'

export async function assetRegistrationCallHandler(ctx: BlockContext, call: Call<'Assets.register'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const extrinsicHash = call.extrinsic!.hash
	const historyElement = await createCallHistoryElement(ctx, call)

	if (!historyElement) return

	let details: {
		assetId: AssetId
	}

	if (historyElement.execution.success) {
		const assetRegistrationEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Assets.AssetRegistered'], true)
		const assetRegistrationEventData = getEventData(ctx, events.assets.assetRegistered, assetRegistrationEvent)

		const assetId = getAssetId(assetRegistrationEventData[0])

		details = {
			assetId,
		}
	} else {
		const data = getCallData(ctx, calls.assets.register, call)

		const symbol = getAssetId(data.symbol)

		details = {
			assetId: symbol,
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
