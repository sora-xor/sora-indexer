import { BlockContext, CallItem, CallItemName, EntityItem, EntityItemName, EventItem, EventItemName } from '../types'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { BalancesTransferEvent, TokensTransferEvent, BalancesDepositEvent, TokensDepositedEvent } from '../types/generated/events'
import { XOR } from './consts'
import { Address, AssetAmount, AssetId } from '../types'
import { toAddress } from '.'
import { getEntityData } from './entities'
import { getAssetId } from './assets'
import { CannotFindEventError } from './errors'
import { getUtilsLog } from './logs'

type SpecificEventItem<T extends EventItemName> = EventItem<T>

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

export function getBlockEvents(ctx: BlockContext): EventItem<EventItemName>[] {
	return ctx.block.items.filter((c) => c.kind === 'event') as EventItem<EventItemName>[]
}

export function findEventsByExtrinsicHash<T extends EventItemName[]>(
	ctx: BlockContext,
	extrinsicHash: SubstrateExtrinsic['hash'],
	eventNames?: T,
): { [K in T[number]]: SpecificEventItem<K> }[T[number]][] {
	const events = getBlockEvents(ctx).filter(
		(e) => (!eventNames || eventNames.includes(e.name)) && e.event.extrinsic?.hash === extrinsicHash,
	)
	// TODO: get rid of this unknown type
	return events as unknown as {
		[K in T[number]]: SpecificEventItem<K>
	}[T[number]][]
}

export function findEventByExtrinsicHash<T extends EventItemName[], F extends boolean>(
	ctx: BlockContext,
	extrinsicHash: SubstrateExtrinsic['hash'],
	eventNames?: T,
	throwError?: F,
): F extends true ? { [K in T[number]]: SpecificEventItem<K> }[T[number]] : { [K in T[number]]: SpecificEventItem<K> }[T[number]] | null {
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

export const isXorTransferEvent = (e: EventItem<EventItemName>) => {
	return e.name === 'Balances.Transfer'
}

export const isTokenTransferEvent = (e: EventItem<EventItemName>) => {
	return e.name === 'Tokens.Transfer'
}

export const isAssetTransferEvent = (e: EventItem<EventItemName>): boolean => {
	return isXorTransferEvent(e) || isTokenTransferEvent(e)
}

export const getBalancesTransferEventData = (ctx: BlockContext, eventItem: EventItem<'Balances.Transfer'>): TransferEventData => {
	const event = new BalancesTransferEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)

	return {
		assetId: XOR,
		from: toAddress('from' in data ? data.from : data[0]),
		to: toAddress('to' in data ? data.to : data[1]),
		amount: ('amount' in data ? data.amount : data[2]) as AssetAmount,
	}
}

export const getTokensTransferEventData = (ctx: BlockContext, eventItem: EventItem<'Tokens.Transfer'>): TransferEventData => {
	const event = new TokensTransferEvent(ctx, eventItem.event)

	const { currencyId, from, to, amount } = getEntityData(ctx, event, eventItem)

	return {
		assetId: getAssetId(currencyId),
		from: toAddress(from),
		to: toAddress(to),
		amount: amount as AssetAmount,
	}
}

export const getAssetsTransferEventData = (
	ctx: BlockContext,
	eventItem: EventItem<'Balances.Transfer'> | EventItem<'Tokens.Transfer'>,
): TransferEventData => {
	if (eventItem.name === 'Balances.Transfer') {
		return getBalancesTransferEventData(ctx, eventItem)
	} else {
		return getTokensTransferEventData(ctx, eventItem)
	}
}

export const getBalancesDepositEventData = (ctx: BlockContext, eventItem: EventItem<'Balances.Deposited'>): DepositEventData => {
	const event = new BalancesDepositEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)

	return {
		assetId: XOR,
		to: toAddress('who' in data ? data.who : data[0]),
		amount: ('amount' in data ? data.amount : data[1]) as AssetAmount,
	}
}

export const getTokensDepositedEventData = (ctx: BlockContext, eventItem: EventItem<'Tokens.Deposited'>): DepositEventData => {
	const event = new TokensDepositedEvent(ctx, eventItem.event)

	const { currencyId, who, amount } = getEntityData(ctx, event, eventItem)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getAssetsDepositEventData = (
	ctx: BlockContext,
	eventItem: EventItem<'Balances.Deposited'> | EventItem<'Tokens.Deposited'>,
): DepositEventData => {
	if (eventItem.name === 'Balances.Deposited') {
		return getBalancesDepositEventData(ctx, eventItem)
	} else {
		return getTokensDepositedEventData(ctx, eventItem)
	}
}
