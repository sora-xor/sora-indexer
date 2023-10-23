import { Asset } from '../../model'
import { BlockContext, ReferenceSymbol } from '../../types'
import {
	AssetsAssetInfosStorage,
	BalancesTotalIssuanceStorage,
	BandSymbolRatesStorage,
	TokensTotalIssuanceStorage,
	XSTPoolEnabledSyntheticsStorage,
} from '../../types/generated/storage'

import { assetPrecisions, assetStorage, formatU128ToBalance, getAssetId, tickerSyntheticAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { toText, toReferenceSymbol } from '../../utils'
import { AssetAmount, AssetId } from '../../types'
import { getEntityData } from '../../utils/entities'
import { getInitializeAssetsLog } from '../../utils/logs'

let isFirstBlockIndexed = false

export const getAssetInfos = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Asset infos request...')

		const storage = new AssetsAssetInfosStorage(ctx, ctx.block.header)
		const data = await getEntityData(ctx, storage, {
			kind: 'storage',
			name: AssetsAssetInfosStorage.name,
		}).getPairs()

		const infos = data.map((pair) => {
			const [assetId, [symbol, name, precision, isMintable]] = pair
			return {
				assetId: getAssetId(assetId),
				symbol: toText(symbol),
				name: toText(name),
				precision,
				isMintable,
			}
		})

		getInitializeAssetsLog(ctx).debug('Asset infos request completed')

		return infos
	} catch (e: any) {
		getInitializeAssetsLog(ctx).error('Error getting Asset infos')
		getInitializeAssetsLog(ctx).error(e)
		return null
	}
}

export const getSyntheticAssets = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Synthetic assets request...')

		const storage = new XSTPoolEnabledSyntheticsStorage(ctx, ctx.block.header)
		if (!storage.isExists) return null
		if (storage.isV19 || storage.isV42) return null
		const data = getEntityData(ctx, storage, { kind: 'storage', name: XSTPoolEnabledSyntheticsStorage.name }, ['19', '42'] as const)
		const pairs = await data.getPairs()

		const syntheticAssets = pairs.map((pair) => {
			const [asset, syntheticInfo] = pair
			const assetId = getAssetId(asset)
			return {
				assetId,
				value: {
					referenceSymbol: toReferenceSymbol(syntheticInfo.referenceSymbol),
					feeRatio: syntheticInfo.feeRatio,
				},
			}
		})

		getInitializeAssetsLog(ctx).debug('Synthetic assets request completed')

		return syntheticAssets
	} catch (e) {
		getInitializeAssetsLog(ctx).error('Error getting Synthetic assets')
		getInitializeAssetsLog(ctx).error(e as string)

		return null
	}
}

export const getBandRates = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Band rates request...')

		const storage = new BandSymbolRatesStorage(ctx, ctx.block.header)
		if (!storage.isExists) return null
		const pairs = await getEntityData(ctx, storage, {
			kind: 'storage',
			name: BandSymbolRatesStorage.name,
		}).getPairs()

		const rates = pairs.map((pair) => {
			const [ticker, rate] = pair
			const referenceSymbol = typeof ticker === 'string' ? (ticker as ReferenceSymbol) : toReferenceSymbol(ticker)
			return {
				referenceSymbol,
				rate,
			}
		})

		getInitializeAssetsLog(ctx).debug('Band rates request completed')

		return rates
	} catch (e) {
		getInitializeAssetsLog(ctx).error('Error getting Band rates')
		getInitializeAssetsLog(ctx).error(e as string)

		return null
	}
}

export const getTokensIssuances = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Tokens issuances request...')

		const storage = new TokensTotalIssuanceStorage(ctx, ctx.block.header)
		const data = await getEntityData(ctx, storage, {
			kind: 'storage',
			name: TokensTotalIssuanceStorage.name,
		}).getPairs()

		const issuances = data.map((pair) => {
			const [assetId, issuances] = pair
			return {
				assetId: getAssetId(assetId),
				issuances: issuances as AssetAmount,
			}
		})

		getInitializeAssetsLog(ctx).debug('Tokens issuances request completed')
		return issuances
	} catch (e: any) {
		getInitializeAssetsLog(ctx).error('Error getting Tokens issuances')
		getInitializeAssetsLog(ctx).error(e)
		return null
	}
}

export const getXorIssuance = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('XOR issuance request...')
		const storage = new BalancesTotalIssuanceStorage(ctx, ctx.block.header)
		const issuance = (await getEntityData(ctx, storage, {
			kind: 'storage',
			name: BalancesTotalIssuanceStorage.name,
		}).get()) as AssetAmount

		getInitializeAssetsLog(ctx).debug('XOR issuance request completed')
		return issuance
	} catch (e: any) {
		getInitializeAssetsLog(ctx).error('Error getting XOR issuance')
		getInitializeAssetsLog(ctx).error(e)
		return null
	}
}

export async function initializeAssets(ctx: BlockContext): Promise<void> {
	if (isFirstBlockIndexed) return

	getInitializeAssetsLog(ctx).debug('Initialize Asset entities')

	// We don't use Promise.all() here because we need consistent order of requests in the log
	const assetInfos = await getAssetInfos(ctx)
	const syntheticAssets = await getSyntheticAssets(ctx)
	const bandRates = await getBandRates(ctx)
	const tokensIssuances = await getTokensIssuances(ctx)
	const xorIssuance = await getXorIssuance(ctx)

	const assets = new Map<
		string,
		{
			id: AssetId
			liquidity: bigint
			priceUSD: string
			supply: AssetAmount
		}
	>()

	const get = (assetId: AssetId) => {
		let asset = assets.get(assetId)

		if (!asset) {
			asset = {
				id: assetId,
				liquidity: 0n,
				priceUSD: '0',
				supply: 0n as AssetAmount,
			}
			assets.set(assetId, asset)
		}

		return asset
	}

	if (assetInfos) {
		for (const assetInfo of assetInfos) {
			assetPrecisions.set(assetInfo.assetId, assetInfo.precision)

			get(assetInfo.assetId)
		}
	}

	if (syntheticAssets) {
		for (const {
			assetId,
			value: { referenceSymbol },
		} of syntheticAssets) {
			assetPrecisions.set(assetId, 18)
			tickerSyntheticAssetId.set(referenceSymbol, assetId)

			getInitializeAssetsLog(ctx).debug(`'${referenceSymbol}' ticker and synthetic asset '${assetId}' added`)

			get(assetId)
		}
	}

	if (bandRates) {
		for (const { referenceSymbol, rate } of bandRates) {
			const assetId = tickerSyntheticAssetId.get(referenceSymbol)

			if (!assetId || !rate) {
				continue
			}

			get(assetId)

			const price = rate.value
			const priceUSD = formatU128ToBalance(price, assetId)

			getInitializeAssetsLog(ctx).debug(`'${referenceSymbol}' ticker price: ${priceUSD}`)

			const asset = assets.get(assetId)
			if (asset) {
				asset.priceUSD = priceUSD
			}
		}
	}

	if (tokensIssuances) {
		for (const tokenIssuances of tokensIssuances) {
			const asset = get(tokenIssuances.assetId)

			asset.supply = tokenIssuances.issuances
		}
	}

	const assetXOR = get(XOR)

	if (xorIssuance) {
		assetXOR.supply = xorIssuance as AssetAmount
	}

	const entities = [...assets.values()].map(
		(asset) =>
			new Asset({
				...asset,
				updatedAtBlock: ctx.block.header.height,
			}),
	)

	if (entities.length) {
		await ctx.store.save(entities)
		await Promise.all(entities.map((entity) => assetStorage.getAsset(ctx, entity.id as AssetId)))
		getInitializeAssetsLog(ctx).debug(`${entities.length} Assets initialized!`)
	} else {
		getInitializeAssetsLog(ctx).debug('No Assets to initialize!')
	}

	isFirstBlockIndexed = true
}
