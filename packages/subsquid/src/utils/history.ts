import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementCall, HistoryElementType } from '../model'
import { AnyCallItem, AssetAmount, BlockContext, EntityItem, EntityItemName } from '../types'
import { getAccountEntity } from './account'
import { networkSnapshotsStorage } from './network'
import { formatDateTimestamp, getEntityId, toAddress, toCamelCase } from './index'
import { nToU8a } from '@polkadot/util'
import { toJSON } from '@subsquid/util-internal-json'
import { findEventByExtrinsicHash } from './events'
import { XorFeeFeeWithdrawnEvent } from '../types/generated/events'
import { getEntityData } from './entities'
import { getUtilsLog } from './logs'

const INCOMING_TRANSFER_METHODS = ['transfer', 'swap_transfer']

const getCallItemNetworkFee = (ctx: BlockContext, callItem: AnyCallItem): AssetAmount => {
	const eventItem = findEventByExtrinsicHash(ctx, callItem.extrinsic.hash, ['XorFee.FeeWithdrawn'])

	if (eventItem) {
		const event = new XorFeeFeeWithdrawnEvent(ctx, eventItem.event)
		const eventData = getEntityData(ctx, event, eventItem)

		return eventData[1] as AssetAmount
	}
	return 0n as AssetAmount
}

function filterDataProperties(obj: Record<string, any>) {
	const entries = []
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log('key: ', key)
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
	entityItem: EntityItem<EntityItemName>,
	data?: {},
): Promise<HistoryElement> => {
	const historyElement = new HistoryElement()

	if (!ctx.block.header.validator) {
		throw Error('There is no block validator')
	}

	const extrinsic = entityItem.kind === 'call' ? entityItem.extrinsic : entityItem.event.extrinsic

	historyElement.id = getEntityId(ctx, entityItem)
	historyElement.type = entityItem.kind === 'call' ? HistoryElementType.CALL : HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.module = toCamelCase(entityItem.name.split('.')[0])
	historyElement.method = toCamelCase(entityItem.name.split('.')[1])
	historyElement.address = toAddress(extrinsic?.signature?.address)
	historyElement.networkFee = entityItem.kind === 'call' ? getCallItemNetworkFee(ctx, entityItem).toString() : null
	historyElement.timestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
	historyElement.updatedAtBlock = ctx.block.header.height
	historyElement.callNames = []

	const success = extrinsic?.success

	if (success) {
		historyElement.execution = new ExecutionResult({
			success,
		})
	} else if (extrinsic) {
		const error =
			extrinsic.error.__kind === 'Module'
				? new ExecutionError({
						moduleErrorId: nToU8a(extrinsic.error.value.error).at(-1),
						moduleErrorIndex: extrinsic.error.value.index,
				  })
				: new ExecutionError({
						nonModuleErrorMessage: JSON.stringify(extrinsic.error),
				  })

		historyElement.execution = new ExecutionResult({
			success,
			error,
		})
	}

	await ctx.store.save(historyElement)
	const { calls, callNames, execution, ...logArguments } = historyElement
	getUtilsLog(ctx).debug({ ...logArguments, executionSuccess: execution.success + '' }, 'Created history element')

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data)
		await updateHistoryElementStats(ctx, historyElement)
	}

	return historyElement
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

	getUtilsLog(ctx).debug({ addresses: addresses.join(', ') }, 'addresses');
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
