import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets'
import { BlockContext, EventItem } from '../../types'
import { BandSymbolsRelayedEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'
import { toReferenceSymbol } from '../../utils'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'

export async function bandRateUpdateEventHandler(ctx: BlockContext, eventItem: EventItem<'Band.SymbolsRelayed'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new BandSymbolsRelayedEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

	for (const item of data) {
		if (!Array.isArray(item)) return

		const [ticker, rate] = item

		const referenceSymbol = toReferenceSymbol(ticker)
		const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol)

		if (syntheticAssetId) {
			const price = formatU128ToBalance(rate, syntheticAssetId)

			getEventHandlerLog(ctx, eventItem).debug({ syntheticAssetId, price }, 'Synthetic asset price update')

			await assetSnapshotsStorage.updatePrice(ctx, syntheticAssetId, price)
		}
	}
}
