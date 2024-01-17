import { addCallsToHistoryElement, addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { BlockContext, Call } from '../../types'
import { calls as generatedCalls } from '../../types/generated/merged'
import { utilityBatchAllCallVersions } from '../../types/generated/merged/calls'
import { HistoryElement, HistoryElementCall } from '../../model'
import { AssetId } from '../../types'
import { toCamelCase } from '../../utils'
import { toJSON } from '@subsquid/util-internal-json'
import { logStartProcessingCall } from '../../utils/logs'

type Version = (typeof utilityBatchAllCallVersions)[number] 
type VersionRepresentation = { [V in Version]: `v${V}` }[Version]

type BatchCall = {
	[V in Version]: {
		version: V
		call: ReturnType<typeof generatedCalls.utility.batchAll[`v${V}`]['decode']>['calls'][number]
	}
}[Version]
type BatchCalls = {
	[V in Version]: {
		version: V
		calls: ReturnType<typeof generatedCalls.utility.batchAll[`v${V}`]['decode']>['calls']
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

function extractCall(ctx: BlockContext, batchCall: BatchCall, id: number, historyElement: HistoryElement): HistoryElementCall {
	return new HistoryElementCall({
		id: `${historyElement.blockHeight}-${id}`,
		historyElement,
		module: toCamelCase(batchCall.call.__kind),
		method: toCamelCase(batchCall.call.value.__kind),
		// TODO: determine whether or not hash is needed here
		// hash: 'hash' in batchCall.call ? batchCall.call.hash as string : undefined,
		data: toJSON(formatSpecificCall(batchCall)),
		updatedAtBlock: ctx.block.header.height,
	})
}

function mapCalls(ctx: BlockContext, { version, calls }: BatchCalls, historyElement: HistoryElement): HistoryElementCall[] {
	return calls.map((call, idx) => extractCall(ctx, { version, call } as BatchCall, idx, historyElement))
}

function mapCallsForAllVersions(
	ctx: BlockContext,
	call: Call<'Utility.batch_all'>,
	historyElement: HistoryElement,
): HistoryElementCall[] {
	let calls: HistoryElementCall[] | null = null
	utilityBatchAllCallVersions.forEach((version) => {
		if (generatedCalls.utility.batchAll[`v${version}`].is(call)) {
			calls = mapCalls(
				ctx,
				{
					version,
					calls: generatedCalls.utility.batchAll[('v' + version) as VersionRepresentation].decode(call).calls,
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
				calls: call.block._runtime.decodeJsonCallRecordArguments(call).calls,
			} as BatchCalls,
			historyElement,
		)
	}
	return calls
}

export async function batchTransactionsCallHandler(ctx: BlockContext, call: Call<'Utility.batch_all'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	let historyElementCalls = mapCallsForAllVersions(ctx, call, historyElement)

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
