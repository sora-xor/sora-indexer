import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementCall, HistoryElementType } from '../model'
import { AssetAmount, BlockContext, Call, Event } from '../types'
import { getAccountEntity } from './account'
import { networkSnapshotsStorage } from './network'
import { assertDefined, formatDateTimestamp, getBlockTimestamp, getCallId, getEventId, toAddress, toCamelCase } from './index'
import { nToU8a } from '@polkadot/util'
import { toJSON } from '@subsquid/util-internal-json'
import { findEventByExtrinsicHash } from './events'
import { getEventData } from './entities'
import { getUtilsLog } from './logs'
import { events } from '../types/generated/merged'

const INCOMING_TRANSFER_METHODS = ['transfer', 'swap_transfer']

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
}


const getCallNetworkFee = (ctx: BlockContext, call: Call<any>): AssetAmount => {
	assertDefined(call.extrinsic)
	const event = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['XorFee.FeeWithdrawn'])

	if (event) {
		const eventData = getEventData(ctx, events.xorFee.feeWithdrawn, event)

		return eventData[1] as AssetAmount
	}
	return 0n as AssetAmount
}

function filterDataProperties(obj: Record<string, any>) {
	const entries = []
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			const type = typeof obj[key]
			if (type === 'number' || type === 'string' || type === 'bigint' || type === 'boolean') {
				entries.push(key + ': ' + obj[key])
			}
		}
	}
	return entries.join(', ')
}

export const createHistoryElement = async (
	ctx: BlockContext,
	{ kind, entity }: EntityItem,
	data?: {},
	address?: string,
): Promise<HistoryElement> => {
	const historyElement = new HistoryElement()

	const extrinsic = entity.extrinsic

	historyElement.id = kind === 'call' ? getCallId(ctx, entity) : getEventId(ctx, entity)
	historyElement.type = kind === 'call' ? HistoryElementType.CALL : HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.module = toCamelCase(entity.name.split('.')[0])
	historyElement.method = toCamelCase(entity.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method
	historyElement.updatedAtBlock = ctx.block.header.height
	historyElement.callNames = []
	historyElement.networkFee = kind === 'call' ? getCallNetworkFee(ctx, entity).toString() : null
	historyElement.timestamp = getBlockTimestamp(ctx)
	if (address) {
		historyElement.address = address
	} else if (kind === 'call') {
		assertDefined(extrinsic?.signature)
		historyElement.address = toAddress(extrinsic.signature.address as string)
	} else {
		historyElement.address = getEventId(ctx, entity)
	}

	const success = extrinsic?.success

	if (success) {
		historyElement.execution = new ExecutionResult({
			success,
		})
	} else if (extrinsic) {
		// TODO: change 'any' type to something better
		const extrinsicError = extrinsic.error as any
		const error =
			extrinsicError.__kind === 'Module'
				? new ExecutionError({
						moduleErrorId: nToU8a(extrinsicError.value.error).at(-1),
						moduleErrorIndex: extrinsicError.value.index,
				  })
				: new ExecutionError({
						nonModuleErrorMessage: JSON.stringify(extrinsicError),
				  })
		historyElement.execution = new ExecutionResult({
			success,
			error,
		})
	}

	await ctx.store.save(historyElement)
	// TODO: return 'name' to the log
	const { calls, callNames, execution, name, ...logArguments } = historyElement
	getUtilsLog(ctx).debug({ ...logArguments, executionSuccess: execution.success + '' }, 'Created history element')

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data)
		await updateHistoryElementStats(ctx, historyElement)
	}

	return historyElement
}

export const createCallHistoryElement = async (
	ctx: BlockContext,
	call: Call<any>,
	data?: {},
) => {
	return createHistoryElement(ctx, { kind: 'call', entity: call }, data)
}

export const createEventHistoryElement = async (
	ctx: BlockContext,
	event: Event<any>,
	address: string,
	data?: {}
) => {
	return createHistoryElement(ctx, { kind: 'event', entity: event }, data, address)
}

export const addDataToHistoryElement = async (ctx: BlockContext, historyElement: HistoryElement, data: {}) => {
	historyElement.data = toJSON(data)
	if ('to' in data && typeof data.to === 'string') {
		historyElement.dataTo = data.to
	}
	if ('from' in data && typeof data.from === 'string') {
		historyElement.dataFrom = data.from
	}
	historyElement.updatedAtBlock = ctx.block.header.height

	await ctx.store.save(historyElement)
	getUtilsLog(ctx).debug({ historyElementId: historyElement.id }, 'Updated history element with data')
	// TODO: fix data in log
	// getUtilsLog(ctx).debug({ historyElementId: historyElement.id, data: filterDataProperties(data) }, 'Updated history element with data')
}

export const addCallsToHistoryElement = async (ctx: BlockContext, historyElement: HistoryElement, calls: HistoryElementCall[]) => {
	historyElement.callNames = calls.map((call) => call.module + '.' + call.method)
	historyElement.updatedAtBlock = ctx.block.header.height

	await ctx.store.save(historyElement)
	await ctx.store.save(calls)
}

export const updateHistoryElementStats = async (ctx: BlockContext, historyElement: HistoryElement) => {
	const addresses = [historyElement.address.toString()]

	if (INCOMING_TRANSFER_METHODS.includes(historyElement.method.toString()) && historyElement.data && (historyElement.data as any)['to']) {
		addresses.push(((historyElement.data as any)['to'] as string).toString())
	}

	getUtilsLog(ctx).debug({ addresses: addresses.join(', ') }, 'addresses')
	// update accounts data
	for (const address of addresses) {
		const account = await getAccountEntity(ctx, address)
		account.latestHistoryElement = historyElement
		account.updatedAtBlock = ctx.block.header.height
		ctx.store.save(account)
	}

	await networkSnapshotsStorage.updateTransactionsStats(ctx)
	getUtilsLog(ctx).debug('Updated history element stats')
}
