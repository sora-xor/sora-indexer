import { networkSnapshotsStorage } from '../../utils/network'
import { AssetAmount, BlockContext, EventItem } from '../../types'
import { XorFeeFeeWithdrawnEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingEvent } from '../../utils/logs'

export async function networkFeeEventHandler(ctx: BlockContext, eventItem: EventItem<'XorFee.FeeWithdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new XorFeeFeeWithdrawnEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

	const fee = data[1] as AssetAmount

	await networkSnapshotsStorage.updateFeesStats(ctx, fee)
}
