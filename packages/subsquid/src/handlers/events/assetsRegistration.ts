import { Event, BlockContext, AssetId } from '../../types'
import { assertDefined, toReferenceSymbol } from '../../utils'
import { assetPrecisions, getAssetId, assetStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { getStorageRepresentation, getEventData, isCurrentVersionIncluded } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { events, storage } from '../../types/generated/merged'
import { assetRegistrationStream } from '../../utils/stream'
import { versionsWithStringAssetId } from '../../consts'

async function getAssetInfos(ctx: BlockContext, assetId: AssetId) {
	const types = storage.assets.assetInfos
	const representationString = getStorageRepresentation(ctx, types, { kind: 'include', versions: versionsWithStringAssetId })
	const representationAsset32 = getStorageRepresentation(ctx, types, { kind: 'exclude', versions: versionsWithStringAssetId })

	let data = isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versionsWithStringAssetId)
		? await representationString?.get(ctx.block.header, assetId)
		: await representationAsset32?.get(ctx.block.header, { code: assetId })

	return data
}

export async function assetRegistrationEventHandler(ctx: BlockContext, event: Event<'Assets.AssetRegistered'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const [asset] = getEventData(ctx, events.assets.assetRegistered, event)
	const assetId = getAssetId(asset)

	const data = await getAssetInfos(ctx, assetId)
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
