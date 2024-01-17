import { BlockContext, Event, EventName } from '../types'
import { XOR } from './consts'
import { Address, AssetAmount, AssetId } from '../types'
import { toAddress } from '.'
import { getAssetId } from './assets'
import { CannotFindEventError } from './errors'
import { events } from '../types/generated/merged'
import { getEventData } from './entities'

type SpecificEvent<T extends EventName> = Event<T>

export type TransferEventData = {
	assetId: AssetId
	from: Address
	to: Address
	amount: bigint
}

export type DepositEventData = {
	assetId: AssetId
	to: Address
	amount: bigint
}

export function findEventsByExtrinsicHash<T extends EventName[]>(
	ctx: BlockContext,
	extrinsicHash: string,
	eventNames?: T,
): { [K in T[number]]: SpecificEvent<K> }[T[number]][] {
	const events = ctx.block.events.filter(
		(e) => (!eventNames || eventNames.includes(e.name as any)) && e.extrinsic?.hash === extrinsicHash,
	)
	// TODO: get rid of this unknown type
	return events as unknown as {
		[K in T[number]]: SpecificEvent<K>
	}[T[number]][]
}

export function findEventByExtrinsicHash<T extends EventName[], F extends boolean>(
	ctx: BlockContext,
	extrinsicHash: string,
	eventNames?: T,
	throwError?: F,
): F extends true ? { [K in T[number]]: SpecificEvent<K> }[T[number]] : { [K in T[number]]: SpecificEvent<K> }[T[number]] | null {
	const event = findEventsByExtrinsicHash(ctx, extrinsicHash, eventNames)[0] ?? null
	// if (event) {
	// 	getUtilsLog(ctx).debug(`The '${event.name}' event found`)
	// } else {
	// 	getUtilsLog(ctx).debug(
	// 		eventNames?.length === 1 ? `The '${eventNames[0]}' event not found` : `Events not found: ${eventNames?.join(', ')}`,
	// 	)
	// }
	if ((throwError as boolean) && event === null) {
		throw new CannotFindEventError(ctx, extrinsicHash, eventNames ?? '')
	}
	return event
}

export const isXorTransferEvent = (e: Event<EventName>) => {
	return e.name === 'Balances.Transfer'
}

export const isTokenTransferEvent = (e: Event<EventName>) => {
	return e.name === 'Tokens.Transfer'
}

export const isAssetTransferEvent = (e: Event<EventName>): boolean => {
	return isXorTransferEvent(e) || isTokenTransferEvent(e)
}

export const getBalancesTransferEventData = (ctx: BlockContext, event: Event<'Balances.Transfer'>): TransferEventData => {
	const data = getEventData(ctx, events.balances.transfer, event)

	return {
		assetId: XOR,
		from: toAddress('from' in data ? data.from : data[0]),
		to: toAddress('to' in data ? data.to : data[1]),
		amount: ('amount' in data ? data.amount : data[2]) as AssetAmount,
	}
}

export const getTokensTransferEventData = (ctx: BlockContext, event: Event<'Tokens.Transfer'>): TransferEventData => {
	const { currencyId, from, to, amount } = getEventData(ctx, events.tokens.transfer, event)

	return {
		assetId: getAssetId(currencyId),
		from: toAddress(from),
		to: toAddress(to),
		amount: amount as AssetAmount,
	}
}

export const getAssetsTransferEventData = (
	ctx: BlockContext,
	event: Event<'Balances.Transfer'> | Event<'Tokens.Transfer'>,
): TransferEventData => {
	if (event.name === 'Balances.Transfer') {
		return getBalancesTransferEventData(ctx, event)
	} else {
		return getTokensTransferEventData(ctx, event)
	}
}

export const getBalancesDepositEventData = (ctx: BlockContext, event: Event<'Balances.Deposited'>): DepositEventData => {
	const data = getEventData(ctx, events.balances.deposit, event)

	return {
		assetId: XOR,
		to: toAddress('who' in data ? data.who : data[0]),
		amount: ('amount' in data ? data.amount : data[1]) as AssetAmount,
	}
}

export const getTokensDepositedEventData = (ctx: BlockContext, event: Event<'Tokens.Deposited'>): DepositEventData => {
	const { currencyId, who, amount } = getEventData(ctx, events.tokens.deposited, event)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getAssetsDepositEventData = (
	ctx: BlockContext,
	event: Event<'Balances.Deposited'> | Event<'Tokens.Deposited'>,
): DepositEventData => {
	if (event.name === 'Balances.Deposited') {
		return getBalancesDepositEventData(ctx, event)
	} else {
		return getTokensDepositedEventData(ctx, event)
	}
}
