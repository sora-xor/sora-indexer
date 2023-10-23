import * as ss58 from '@subsquid/ss58'
import { AssetId, Address, AddressEthereum, ReferenceSymbol, BlockContext, CallItem, CallItemName, EventItem, EventItemName, EntityItem, EntityItemName } from '../types'
import { SnapshotSecondsMap } from './consts'
import { toHex, decodeHex } from '@subsquid/substrate-processor'
import { SnapshotType } from '../model'

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() * 0.001).toFixed(0))

export const toText = (data: Uint8Array): string => {
	return new TextDecoder().decode(data)
}
export const decodeText = (data: string): Uint8Array => {
	return new TextEncoder().encode(data)
}

export const toReferenceSymbol = (data: Uint8Array): ReferenceSymbol => {
	return toText(data) as ReferenceSymbol
}
export const decodeReferenceSymbol = (data: ReferenceSymbol): Uint8Array => {
	return decodeText(data)
}

export const toAssetId = (data: Uint8Array): AssetId => {
	return toHex(data) as AssetId
}
export const decodeAssetId = (data: AssetId): Uint8Array => {
	return decodeHex(data)
}

export const toAddressEthereum = (data: Uint8Array): AddressEthereum => {
	return toHex(data) as AddressEthereum
}
export const decodeAddressEthereum = (data: AddressEthereum): Uint8Array => {
	return decodeHex(data)
}

export const toAddress = (data: Uint8Array | string): Address => {
	return ss58.codec('sora').encode(typeof data === 'string' ? decodeHex(data) : data) as Address
}
export const decodeAddress = (data: Address): Uint8Array => {
	return ss58.codec('sora').decode(data)
}

export const toCamelCase = (s: string): string => {
	// Step 1: Trim the string
	const trimmedString = s.trim()

	// Step 2: Split the string
	const words = trimmedString.split(/[\s-_]+/)

	// Step 3: Transform the words
	let transformedWords: string[][] = words.map((word) => {
		if (word === word.toUpperCase()) {
			return [word.toLowerCase()]
		}
		// Make sure to always return an array of strings
		return word.split(/(?=[A-Z])/).map((part) => part.toLowerCase())
	})

	// Step 4: Flat the result array
	const flatWords: string[] = transformedWords.flat()

	// Step 5: Make all words lowercase
	const lowerCaseWords = flatWords.map((word) => word.toLowerCase())

	// Step 6: Make the first letter of each word uppercase, except for the first word
	const camelCaseWords = lowerCaseWords.map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))

	// Step 7: Join the words
	const finalString = camelCaseWords.join('')

	// Step 8: Return the result
	return finalString
}

export const getSnapshotIndex = (blockTimestamp: number, type: SnapshotType): { index: number; timestamp: number } => {
	const seconds = SnapshotSecondsMap[type]
	const index = Math.floor(blockTimestamp / seconds) // rounded snapshot index (from 0)
	const timestamp = seconds * index // rounded snapshot timestamp

	return { index, timestamp }
}

export const getCallId = (ctx: BlockContext, callItem: CallItem<CallItemName>): string => {
	return callItem.extrinsic.hash
}

export const getEventId = (ctx: BlockContext, eventItem: EventItem<EventItemName>): string => {
	return `${ctx.block.header.height}-${eventItem.event.indexInBlock}`
}

export const getEntityId = (ctx: BlockContext, entityItem: EntityItem<EntityItemName>): string => {
	return entityItem.kind === 'call' ? getCallId(ctx, entityItem) : getEventId(ctx, entityItem)
}
