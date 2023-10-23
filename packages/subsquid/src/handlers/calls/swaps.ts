import { BlockContext, CallItem } from '../../types'
import { LiquidityProxySwapCall, LiquidityProxySwapTransferCall } from '../../types/generated/calls'
import { receiveExtrinsicSwapAmounts, SwapAmount } from '../../utils/swaps'
import { getEntityData } from '../../utils/entities'
import { assetSnapshotsStorage, formatU128ToBalance, getAssetId } from '../../utils/assets'
import { findEventByExtrinsicHash } from '../../utils/events'
import { networkSnapshotsStorage } from '../../utils/network'
import { LiquidityProxyExchangeEvent } from '../../types/generated/events'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import BigNumber from 'bignumber.js'
import { XOR } from '../../utils/consts'
import { toAddress } from '../../utils'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

export async function swapsCallHandler(
	ctx: BlockContext,
	callItem: CallItem<'LiquidityProxy.swap'> | CallItem<'LiquidityProxy.swap_transfer'>,
): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	const call =
		callItem.name === 'LiquidityProxy.swap'
			? new LiquidityProxySwapCall(ctx, callItem.call)
			: new LiquidityProxySwapTransferCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const inputAssetId = getAssetId(data.inputAssetId)
	const outputAssetId = getAssetId(data.outputAssetId)
	const liquiditySources = data.selectedSourceTypes.map((type) => type.__kind)
	const swapAmount: SwapAmount =
		data.swapAmount.__kind === 'WithDesiredInput'
			? {
					kind: 'WithDesiredInput',
					desiredAmountIn: 'value' in data.swapAmount ? data.swapAmount.value.desiredAmountIn : data.swapAmount.desiredAmountIn,
					minAmountOut: 'value' in data.swapAmount ? data.swapAmount.value.minAmountOut : data.swapAmount.minAmountOut,
			  }
			: {
					kind: 'WithDesiredOutput',
					desiredAmountOut:
						'value' in data.swapAmount ? data.swapAmount.value.desiredAmountOut : data.swapAmount.desiredAmountOut,
					maxAmountIn: 'value' in data.swapAmount ? data.swapAmount.value.maxAmountIn : data.swapAmount.maxAmountIn,
			  }

	const details: {
		baseAssetId?: string
		targetAssetId?: string
		selectedMarket?: string
		baseAssetAmount?: string
		targetAssetAmount?: string
		liquidityProviderFee?: string
		to?: string
	} = {}

	details.baseAssetId = inputAssetId
	details.targetAssetId = outputAssetId
	details.selectedMarket = liquiditySources.toString()

	if ('receiver' in data) {
		details.to = toAddress(data.receiver)
	}

	if (historyElement.execution.success) {
		const exchangeEventItemItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['LiquidityProxy.Exchange'], true)
		const exchangeEventItem = new LiquidityProxyExchangeEvent(ctx, exchangeEventItemItem.event)
		const exchangeEventItemData = getEntityData(ctx, exchangeEventItem, exchangeEventItemItem)

		const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = exchangeEventItemData

		details.baseAssetAmount = formatU128ToBalance(baseAssetAmount, inputAssetId)
		details.targetAssetAmount = formatU128ToBalance(targetAssetAmount, outputAssetId)
		details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee, XOR)
	} else {
		details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, inputAssetId)[0]
		details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, outputAssetId)[1]
		details.liquidityProviderFee = '0'
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	// update assets volume
	if (historyElement.execution.success) {
		const aVolumeUSD = await assetSnapshotsStorage.updateVolume(ctx, inputAssetId, BigNumber(details.baseAssetAmount))
		const bVolumeUSD = await assetSnapshotsStorage.updateVolume(ctx, outputAssetId, BigNumber(details.targetAssetAmount))
		// get the minimal volume (sell\buy)
		const volumeUSD = BigNumber.min(aVolumeUSD, bVolumeUSD)

		await networkSnapshotsStorage.updateVolumeStats(ctx, volumeUSD)
	}

	getCallHandlerLog(ctx, callItem).debug(callItem.name === 'LiquidityProxy.swap' ? 'Saved swap' : 'Saved swap transfer')
}
