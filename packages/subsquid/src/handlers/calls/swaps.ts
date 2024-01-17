import { BlockContext, Call } from '../../types'
import { receiveExtrinsicSwapAmounts, SwapAmount } from '../../utils/swaps'
import { getCallData, getEventData } from '../../utils/entities'
import { assetSnapshotsStorage, formatU128ToBalance, getAssetId } from '../../utils/assets'
import { findEventByExtrinsicHash } from '../../utils/events'
import { networkSnapshotsStorage } from '../../utils/network'
import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import BigNumber from 'bignumber.js'
import { XOR } from '../../utils/consts'
import { assertDefined, toAddress } from '../../utils'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'

export async function swapsCallHandler(
	ctx: BlockContext,
	call: Call<'LiquidityProxy.swap'> | Call<'LiquidityProxy.swap_transfer'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	const data = call.name === 'LiquidityProxy.swap'
		? getCallData(ctx, calls.liquidityProxy.swap, call)
		: getCallData(ctx, calls.liquidityProxy.swapTransfer, call)

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
		details.to = toAddress(data.receiver as any)
	}

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const exchangeEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['LiquidityProxy.Exchange'], true)
		const exchangeEventData = getEventData(ctx, events.liquidityProxy.exchange, exchangeEvent)

		const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = exchangeEventData

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

	getCallHandlerLog(ctx, call).debug(call.name === 'LiquidityProxy.swap' ? 'Saved swap' : 'Saved swap transfer')
}
