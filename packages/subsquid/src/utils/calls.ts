import { toAddress } from '.'
import { Address, BlockContext, CallItem, CallItemName } from '../types'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { getCallHandlerLog, getUtilsLog } from './logs'
import { CannotFindCallError } from './errors'

type SpecificCallItem<T extends CallItemName> = CallItem<T>

export function getBlockCalls(ctx: BlockContext): CallItem<CallItemName>[] {
	return ctx.block.items.filter((c) => c.kind === 'call') as CallItem<CallItemName>[]
}

export function findCallsByExtrinsicHash<T extends CallItemName[]>(
	ctx: BlockContext,
	extrinsicHash: SubstrateExtrinsic['hash'],
	callNames?: T,
): { [K in T[number]]: SpecificCallItem<K> }[T[number]][] {
	const calls = getBlockCalls(ctx).filter((c) => (!callNames || callNames.includes(c.name)) && c.extrinsic?.hash === extrinsicHash)
	// TODO: get rid of this unknown type
	return calls as unknown as {
		[K in T[number]]: SpecificCallItem<K>
	}[T[number]][]
}

export function findCallByExtrinsicHash<T extends CallItemName[], F extends boolean>(
	ctx: BlockContext,
	extrinsicHash: SubstrateExtrinsic['hash'],
	callNames?: T,
	throwError?: F,
): F extends true ? { [K in T[number]]: SpecificCallItem<K> }[T[number]] : { [K in T[number]]: SpecificCallItem<K> }[T[number]] | null {
	const call = findCallsByExtrinsicHash(ctx, extrinsicHash, callNames)[0] ?? null
	if (call) {
		getUtilsLog(ctx).debug(`The '${call.name}' call found`)
	} else {
		getUtilsLog(ctx).debug(
			callNames?.length === 1 ? `The '${callNames[0]}' call not found` : `Calls not found: ${callNames?.join(', ')}`,
		)
	}
	if ((throwError as boolean) && call === null) {
		throw new CannotFindCallError(ctx, extrinsicHash, callNames ?? '')
	}
	return call
}

export function getExtrinsicSigner(ctx: BlockContext, callItem: CallItem<CallItemName>): Address {
	const extrinsicSigner: Address | null = callItem.call.origin ? toAddress(callItem.call.origin.value.value) : null
	if (!extrinsicSigner) {
		getCallHandlerLog(ctx, callItem).error('Cannot get extrinsic signer')
		throw new Error('Cannot get extrinsic signer')
	}
	return extrinsicSigner
}
