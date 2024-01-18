import { Asset } from '../../model'
import { BlockContext, ReferenceSymbol } from '../../types'

import { assetPrecisions, assetStorage, formatU128ToBalance, getAssetId, tickerSyntheticAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { assertDefined, toReferenceSymbol } from '../../utils'
import { AssetAmount, AssetId } from '../../types'
import { getStorageRepresentation, isCurrentVersionIncluded } from '../../utils/entities'
import { getInitializeAssetsLog } from '../../utils/logs'

import { storage } from '../../types/generated/merged'

let isFirstBlockIndexed = false

async function getXstPoolEnabledSynthetics(ctx: BlockContext) {
	const types = storage.xstPool.enabledSynthetics
	const versions = ['19', '33Stage', '33Test', '42', '42Stage', '42Test'] as const
	if (isCurrentVersionIncluded(ctx, types, { kind: 'storage' }, versions)) {
		return null
	}
	return getStorageRepresentation(ctx, storage.xstPool.enabledSynthetics, { kind: 'exclude', versions })?.getPairs(ctx.block.header)
}

export const getAssetInfos = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Asset infos request...')

		const data = await getStorageRepresentation(ctx, storage.assets.assetInfos)?.getPairs(ctx.block.header)
		assertDefined(data)

		const infos = data.map((pair) => {
			const [assetId, params] = pair
			if (!params) throw new Error(`[${ctx.block.header.height}] Asset infos request failed`)
			const [symbol, name, precision, isMintable] = params
			return {
				assetId: getAssetId(assetId),
				symbol,
				name,
				precision,
				isMintable,
			}
		})

		getInitializeAssetsLog(ctx).debug('Asset infos request completed')

		return infos
	} catch (e: any) {
		getInitializeAssetsLog(ctx).error('Error getting Asset infos')
		getInitializeAssetsLog(ctx).error(e)
		console.error(e)
		return null
	}
}

export const getSyntheticAssets = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('Synthetic assets request...')

		const pairs = await getXstPoolEnabledSynthetics(ctx)
		if (!pairs) {
			return null
		}

		const syntheticAssets = pairs.map((pair) => {
			const [asset, syntheticInfo] = pair
			const assetId = getAssetId(asset)
			if (!syntheticInfo) throw new Error(`[${ctx.block.header.height}] Synthetic assets request failed: there is no synthetic info for ${assetId}`)
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

		const data = getStorageRepresentation(ctx, storage.band.symbolRates)
		if (!data) return null
		const pairs = await data.getPairs(ctx.block.header)

		const rates = pairs.map((pair) => {
			const [ticker, rate] = pair
			const referenceSymbol = toReferenceSymbol(ticker)
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

		const data = getStorageRepresentation(ctx, storage.tokens.totalIssuance)
		assertDefined(data)
		const pairs = await data.getPairs(ctx.block.header)

		const issuances = pairs.map((pair) => {
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
		console.error(e)
		return null
	}
}

export const getXorIssuance = async (ctx: BlockContext) => {
	try {
		getInitializeAssetsLog(ctx).debug('XOR issuance request...')
		const data = getStorageRepresentation(ctx, storage.balances.totalIssuance)
		assertDefined(data)
		const issuance = (await data.get(ctx.block.header)) as AssetAmount

		getInitializeAssetsLog(ctx).debug('XOR issuance request completed')
		return issuance
	} catch (e: any) {
		getInitializeAssetsLog(ctx).error('Error getting XOR issuance')
		getInitializeAssetsLog(ctx).error(e)
		console.error(e)
		return null
	}
}

export async function initializeAssets(ctx: BlockContext): Promise<void> {
	if (isFirstBlockIndexed) return

	getInitializeAssetsLog(ctx).debug('Initialize Asset entities')

	// We don't use Promise.all here because we need consistent order of requests in the log
	const assetInfos = await getAssetInfos(ctx)
	const syntheticAssets = await getSyntheticAssets(ctx)
	const bandRates = await getBandRates(ctx)
	const tokensIssuances = await getTokensIssuances(ctx)
	const xorIssuance = await getXorIssuance(ctx)

	const assets = new Map<
		string,
		{
			id: AssetId
			liquidity?: bigint
			priceUSD?: string
			supply?: AssetAmount
		}
	>()

	const create = (assetId: AssetId) => {
		let asset = assets.get(assetId)

		if (!asset) {
			asset = {
				id: assetId,
			}
			assets.set(assetId, asset)
		}

		return asset
	}

	if (assetInfos) {
		for (const assetInfo of assetInfos) {
			assetPrecisions.set(assetInfo.assetId, assetInfo.precision)

			create(assetInfo.assetId)
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

			create(assetId)
		}
	}

	if (bandRates) {
		for (const { referenceSymbol, rate } of bandRates) {
			const assetId = tickerSyntheticAssetId.get(referenceSymbol)

			if (!assetId || !rate) {
				continue
			}

			create(assetId)

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
			const asset = create(tokenIssuances.assetId)

			asset.supply = tokenIssuances.issuances
		}
	}

	const assetXOR = create(XOR)

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
		// get or create entities in DB & memory
		// We don't use Promise.all here because we need consistent order of requests in the log
		const created: Asset[] = []
        for (const entity of entities) {
            const asset = await assetStorage.getAsset(ctx, entity.id as AssetId)
            created.push(asset)
        }
		// update data in memory storage
		created.forEach((entity) => {
			Object.assign(entity, assets.get(entity.id))
		});
		// save in DB
		await ctx.store.save(created)
		getInitializeAssetsLog(ctx).debug(`${entities.length} Assets initialized!`)
	} else {
		getInitializeAssetsLog(ctx).debug('No Assets to initialize!')
	}

	isFirstBlockIndexed = true
}
