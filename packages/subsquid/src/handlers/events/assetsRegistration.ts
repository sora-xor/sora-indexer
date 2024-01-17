import { Event, BlockContext } from '../../types'
import { assertDefined, toReferenceSymbol } from '../../utils'
import { assetPrecisions, getAssetId, assetStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { getStorageRepresentation, getEventData, findCurrentSpecVersion } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { events, storage } from '../../types/generated/merged'
import { assetRegistrationStream } from '../../utils/stream'

export async function assetRegistrationEventHandler(ctx: BlockContext, event: Event<'Assets.AssetRegistered'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const [asset] = getEventData(ctx, events.assets.assetRegistered, event)
	const assetId = getAssetId(asset)

	const assetIdVersions = ['1', '26', '33Stage', '33Test'] as const
	const assetId32Versions = ['42', '42Stage', '42Test', '70Dev'] as const
	const data = assetIdVersions.includes(findCurrentSpecVersion(ctx, storage.assets.assetInfos, { kind: 'storage' }) as any)
		? await getStorageRepresentation(ctx, storage.assets.assetInfos, assetId32Versions)?.get(ctx.block.header, assetId)
		: await getStorageRepresentation(ctx, storage.assets.assetInfos, assetIdVersions)?.get(ctx.block.header, { code: assetId })
	assertDefined(data)
	const [symbol, name, decimals, _isMintable, content, description] = data

	if (!assetPrecisions.has(assetId)) {
		assetPrecisions.set(assetId, decimals)
	}

	const assetData = { address: assetId, symbol, name, decimals, content, description }

  	assetRegistrationStream.update(assetId, JSON.stringify(assetData))

	await assetStorage.getAsset(ctx, assetId)
}

export async function syntheticAssetEnabledEventHandler(
	ctx: BlockContext,
	event: Event<'XSTPool.SyntheticAssetEnabled'>,
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.xstPool.syntheticAssetEnabled, event)

	if (!Array.isArray(data)) return

	const [asset, ticker] = data
	const assetId = getAssetId(asset)
	const referenceSymbol = toReferenceSymbol(ticker)

	tickerSyntheticAssetId.set(referenceSymbol, assetId)
	// synthetic assets always have 18 decimals
	assetPrecisions.set(assetId, 18)

	getEventHandlerLog(ctx, event).debug({ assetId, referenceSymbol }, 'Synthetic asset enabled')

	await assetStorage.getAsset(ctx, assetId)
}
