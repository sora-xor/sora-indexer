import { formatU128ToBalance } from './assets'
import { Address, AssetId } from '../types'

export type SwapAmount = SwapAmount_WithDesiredInput | SwapAmount_WithDesiredOutput

export interface SwapAmount_WithDesiredInput {
	kind: 'WithDesiredInput'
	desiredAmountIn: bigint
	minAmountOut: bigint
}

export interface SwapAmount_WithDesiredOutput {
	kind: 'WithDesiredOutput'
	desiredAmountOut: bigint
	maxAmountIn: bigint
}

export type LiquiditySourceType =
	| 'XYKPool'
	| 'BondingCurvePool'
	| 'MulticollateralBondingCurvePool'
	| 'MockPool'
	| 'MockPool2'
	| 'MockPool3'
	| 'MockPool4'
	| 'XSTPool'
	| 'OrderBook'

export type CallRec = {
	inputAssetId: AssetId
	outputAssetId: AssetId
	swapAmount: SwapAmount
	liquiditySources: LiquiditySourceType[]
	receiver?: Address
}

export const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: AssetId): string[] => {
	if (swapAmount.kind === 'WithDesiredOutput') {
		return [formatU128ToBalance(swapAmount.maxAmountIn, assetId), formatU128ToBalance(swapAmount.desiredAmountOut, assetId)]
	} else {
		return [formatU128ToBalance(swapAmount.desiredAmountIn, assetId), formatU128ToBalance(swapAmount.minAmountOut, assetId)]
	}
}
