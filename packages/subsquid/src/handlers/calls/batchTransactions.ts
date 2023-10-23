import { addCallsToHistoryElement, addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { BlockContext, CallItem } from '../../types'
import { UtilityBatchAllCall, utilityBatchAllCallVersions } from '../../types/generated/calls'
import { HistoryElement, HistoryElementCall } from '../../model'
import { AssetId } from '../../types'
import { toCamelCase } from '../../utils'
import { toJSON } from '@subsquid/util-internal-json'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'

type Version = (typeof utilityBatchAllCallVersions)[number]
type IsVersion = { [V in Version]: `isV${V}` }[Version]
type AsVersion = { [V in Version]: `asV${V}` }[Version]

type BatchCall = {
	[V in Version]: {
		version: V
		call: UtilityBatchAllCall[`asV${V}`]['calls'][number]
	}
}[Version]
type BatchCalls = {
	[V in Version]: {
		version: V
		calls: UtilityBatchAllCall[`asV${V}`]['calls']
	}
}[Version]

function formatSpecificCall(call: BatchCall): any {
	switch (call.call.__kind) {
		case 'PoolXYK': {
			switch (call.call.value.__kind) {
				case 'deposit_liquidity': {
					const { __kind, ...value } = call.call.value
					const { dexId, inputAssetA, inputAssetB, inputADesired, inputBDesired, inputAMin, inputBMin } = value
					// TODO: move args to common function here and in other cases
					return {
						dexId,
						inputAssetA: getAssetId(inputAssetA),
						inputAssetB: getAssetId(inputAssetB),
						inputAMin: formatU128ToBalance(inputAMin, getAssetId(inputAssetA)),
						inputBMin: formatU128ToBalance(inputBMin, getAssetId(inputAssetB)),
						inputADesired: formatU128ToBalance(inputADesired, getAssetId(inputAssetA)),
						inputBDesired: formatU128ToBalance(inputBDesired, getAssetId(inputAssetB)),
					}
				}
				case 'initialize_pool': {
					const { __kind, ...value } = call.call.value
					const { dexId, assetA, assetB } = value
					return {
						dexId,
						assetA: getAssetId(assetA),
						assetB: getAssetId(assetB),
					}
				}
			}
		}

		case 'TradingPair': {
			switch (call.call.value.__kind) {
				case 'register': {
					const { __kind, ...value } = call.call.value
					const { dexId, baseAssetId, targetAssetId } = value
					return {
						dexId,
						baseAssetId: getAssetId(baseAssetId),
						targetAssetId: getAssetId(targetAssetId),
					}
				}
			}
		}

		default: {
			const { __kind, ...value } = call.call.value
			return value
		}
	}
}

function extractCall(ctx: BlockContext, call: BatchCall, id: number, historyElement: HistoryElement): HistoryElementCall {
	return new HistoryElementCall({
		id: `${historyElement.blockHeight}-${id}`,
		historyElement,
		module: toCamelCase(call.call.__kind),
		method: toCamelCase(call.call.value.__kind),
		// TODO: determine where to get call hash
		// hash: call.hash,
		data: toJSON(formatSpecificCall(call)),
		updatedAtBlock: ctx.block.header.height,
	})
}

function mapCalls(ctx: BlockContext, { version, calls }: BatchCalls, historyElement: HistoryElement): HistoryElementCall[] {
	return calls.map((call, idx) => extractCall(ctx, { version, call } as BatchCall, idx, historyElement))
}

function mapCallsForAllVersions(
	ctx: BlockContext,
	callItem: CallItem<'Utility.batch_all'>,
	historyElement: HistoryElement,
): HistoryElementCall[] {
	const utilityBatchAllCall = new UtilityBatchAllCall(ctx, callItem.call)

	let calls: HistoryElementCall[] | null = null
	utilityBatchAllCallVersions.forEach((version) => {
		const isVersionKey = ('isV' + version) as IsVersion
		if (isVersionKey.startsWith('isV') && utilityBatchAllCall[isVersionKey]) {
			const version = isVersionKey.replace('isV', '') as Version
			calls = mapCalls(
				ctx,
				{
					version,
					calls: utilityBatchAllCall[('asV' + version) as AsVersion].calls,
				} as BatchCalls,
				historyElement,
			)
		}
	})
	if (calls === null) {
		calls = mapCalls(
			ctx,
			{
				version: 'unknown' as any,
				calls: ctx._chain.decodeCall(callItem.call).calls,
			} as BatchCalls,
			historyElement,
		)
	}
	return calls
}

export async function batchTransactionsCallHandler(ctx: BlockContext, callItem: CallItem<'Utility.batch_all'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const historyElement = await createHistoryElement(ctx, callItem)

	let historyElementCalls = mapCallsForAllVersions(ctx, callItem, historyElement)

	await addCallsToHistoryElement(ctx, historyElement, historyElementCalls)
	await addDataToHistoryElement(ctx, historyElement, {})
	await updateHistoryElementStats(ctx, historyElement)

	if (historyElement.execution.success) {
		// If initialize pool call exists, create new Pool
		const initializePool = historyElementCalls.find((call) => call.method === 'initializePool' && call.module === 'poolXYK')

		if (initializePool) {
			//TODO: Determine whether or not typization is applicable here
			const data: {
				dexId: number
				assetA: AssetId
				assetB: AssetId
			} = initializePool.data as any
			await poolsStorage.getPool(ctx, data.assetA, data.assetB)
		}
	}
}
