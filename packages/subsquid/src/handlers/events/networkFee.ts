import { networkSnapshotsStorage } from '../../utils/network'
import { AssetAmount, BlockContext, Event } from '../../types'
import { getEventData } from '../../utils/entities'
import { logStartProcessingEvent } from '../../utils/logs'
import { events } from '../../types/generated/merged'

export async function networkFeeEventHandler(ctx: BlockContext, event: Event<'XorFee.FeeWithdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.xorFee.feeWithdrawn, event)

	const fee = data[1] as AssetAmount

	await networkSnapshotsStorage.updateFeesStats(ctx, fee)
}
