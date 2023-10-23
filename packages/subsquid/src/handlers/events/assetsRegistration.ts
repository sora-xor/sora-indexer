import { EventItem, BlockContext } from '../../types'
import { AssetsAssetRegisteredEvent, XstPoolSyntheticAssetEnabledEvent } from '../../types/generated/events'
import { AssetsAssetInfosStorage } from '../../types/generated/storage'
import { decodeAssetId, toReferenceSymbol } from '../../utils'
import { assetPrecisions, getAssetId, assetStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { getEntityData } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'

export async function assetRegistrationEventHandler(ctx: BlockContext, eventItem: EventItem<'Assets.AssetRegistered'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new AssetsAssetRegisteredEvent(ctx, eventItem.event)

	const [asset] = getEntityData(ctx, event, eventItem)
	const assetId = getAssetId(asset)

	if (!assetPrecisions.has(assetId)) {
		const storage = new AssetsAssetInfosStorage(ctx, ctx.block.header)
		const [, , precision] =
			storage.isV1 || storage.isV26
				? await getEntityData(ctx, storage, { kind: 'storage', name: AssetsAssetInfosStorage.name }, ['42'] as const).get(
						decodeAssetId(assetId),
				  )
				: await getEntityData(ctx, storage, { kind: 'storage', name: AssetsAssetInfosStorage.name }, ['1', '26'] as const).get({
						code: decodeAssetId(assetId),
				  })
		assetPrecisions.set(assetId, precision)
	}

	await assetStorage.getAsset(ctx, assetId)
}

export async function syntheticAssetEnabledEventHandler(
	ctx: BlockContext,
	eventItem: EventItem<'XSTPool.SyntheticAssetEnabled'>,
): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new XstPoolSyntheticAssetEnabledEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)

	if (!Array.isArray(data)) return

	const [asset, ticker] = data
	const assetId = getAssetId(asset)
	const referenceSymbol = toReferenceSymbol(ticker)

	tickerSyntheticAssetId.set(referenceSymbol, assetId)
	// synthetic assets always have 18 decimals
	assetPrecisions.set(assetId, 18)

	getEventHandlerLog(ctx, eventItem).debug({ assetId, referenceSymbol }, 'Synthetic asset enabled')

	await assetStorage.getAsset(ctx, assetId)
}
