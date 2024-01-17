import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets'
import { BlockContext, Event } from '../../types'
import { getEventData } from '../../utils/entities'
import { toReferenceSymbol } from '../../utils'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { events } from '../../types/generated/merged'

export async function bandRateUpdateEventHandler(ctx: BlockContext, event: Event<'Band.SymbolsRelayed'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.band.symbolsRelayed, event)

	for (const item of data) {
		if (!Array.isArray(item)) return

		const [ticker, rate] = item

		const referenceSymbol = toReferenceSymbol(ticker)
		const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol)

		if (syntheticAssetId) {
			const price = formatU128ToBalance(rate, syntheticAssetId)

			getEventHandlerLog(ctx, event).debug({ syntheticAssetId, price }, 'Synthetic asset price update')

			await assetSnapshotsStorage.updatePrice(ctx, syntheticAssetId, price)
		}
	}
}
