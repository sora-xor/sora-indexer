import { assertDefined, toAddress } from '.'
import { Address, BlockContext, Call, CallName } from '../types'
import { getUtilsLog } from './logs'
import { CannotFindCallError } from './errors'

type SpecificCall<T extends CallName> = Call<T>

export function findCallsByExtrinsicHash<T extends CallName[]>(
	ctx: BlockContext,
	extrinsicHash: string,
	callNames?: T,
): { [K in T[number]]: SpecificCall<K> }[T[number]][] {
	const calls = ctx.block.calls.filter((c) => (!callNames || callNames.includes(c.name as any)) && c.extrinsic?.hash === extrinsicHash)
	// TODO: get rid of this unknown type
	return calls as unknown as {
		[K in T[number]]: SpecificCall<K>
	}[T[number]][]
}

export function findCallByExtrinsicHash<T extends CallName[], F extends boolean>(
	ctx: BlockContext,
	extrinsicHash: string,
	callNames?: T,
	throwError?: F,
): F extends true ? { [K in T[number]]: SpecificCall<K> }[T[number]] : { [K in T[number]]: SpecificCall<K> }[T[number]] | null {
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

export function getExtrinsicSigner(ctx: BlockContext, call: Call<CallName>): Address {
	const address = call.extrinsic?.signature?.address
	assertDefined(address)
	return toAddress(address as any)
}
