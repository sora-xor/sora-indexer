import * as ss58 from '@subsquid/ss58'
import BigNumber from 'bignumber.js'
import {
	AssetId,
	Address,
	AddressEthereum,
	ReferenceSymbol,
	BlockContext,
	Call,
	Event,
} from '../types'
import { SnapshotSecondsMap, SnapshotTimeDepthMap } from './consts'
import { decodeHex } from '@subsquid/substrate-processor'
import { SnapshotType } from '../model'
import { Bytes } from '../types/generated/production/support'

export function assertDefined<T>(value: T | null | undefined, message?: string): asserts value is T {
    if (value === null || value === undefined) {
        throw new Error(message || 'Assertion failed: value is null or undefined')
    }
}

export const toFloat = (value: BigNumber) => Number(value.toFixed(2));

export const last = <T>(snapshots: T[]) => {
	if (!snapshots.length) return null;
	return snapshots[snapshots.length - 1];
};

export const prevSnapshotsIndexesRow = (index: number, count: number): number[] => {
	return new Array(count).fill(index)
		.reduce((buffer, item, idx) => {
			const prevIndex = item - idx;

			if (prevIndex >= 0) buffer.push(prevIndex);

			return buffer;
		}, []);
};

export const calcPriceChange = (current: BigNumber, prev: BigNumber): number => {
	if (prev.isZero()) return current.isGreaterThan(new BigNumber(0)) ? 100 : 0;

	const change = current.minus(prev).div(prev).multipliedBy(new BigNumber(100));

	return toFloat(change);
};

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() * 0.001).toFixed(0))

export const getBlockTimestamp = (ctx: BlockContext): number => {
	assertDefined(ctx.block.header.timestamp)
	return formatDateTimestamp(new Date(ctx.block.header.timestamp))
}

export const shouldUpdate = (ctx: BlockContext, diff = 3_600) => {
	const blockTimestamp = getBlockTimestamp(ctx)
	const currentTimestamp = formatDateTimestamp(new Date())
  
	return currentTimestamp - blockTimestamp < diff
}

export const toText = (data: Uint8Array): string => {
	return new TextDecoder().decode(data)
}
export const decodeText = (data: string): Uint8Array => {
	return new TextEncoder().encode(data)
}

export const toReferenceSymbol = (data: string): ReferenceSymbol => {
	return decodeHex(data).toString() as ReferenceSymbol
}
export const decodeReferenceSymbol = (data: ReferenceSymbol): Uint8Array => {
	return decodeText(data)
}

export const toAssetId = (data: Bytes): AssetId => {
	return data.toString() as AssetId
}
export const decodeAssetId = (data: AssetId): Uint8Array => {
	return decodeHex(data)
}

export const toAddressEthereum = (data: string): AddressEthereum => {
	return data as AddressEthereum
}
export const decodeAddressEthereum = (data: AddressEthereum): Uint8Array => {
	return decodeHex(data)
}

export const toAddress = (data: string): Address => {
	return data as Address
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

export const getSnapshotTypes = (ctx: BlockContext, types: SnapshotType[]) => {
	return types.filter((type) => {
		const diff = SnapshotTimeDepthMap[type]
	
		return !diff || shouldUpdate(ctx, diff)
	})
}

export const getSnapshotIndex = (blockTimestamp: number, type: SnapshotType): { index: number; timestamp: number } => {
	const seconds = SnapshotSecondsMap[type]
	const index = Math.floor(blockTimestamp / seconds) // rounded snapshot index (from 0)
	const timestamp = seconds * index // rounded snapshot timestamp

	return { index, timestamp }
}

export const getCallId = (ctx: BlockContext, call: Call<any>): string => {
	assertDefined(call.extrinsic)
	return call.extrinsic.hash
}

export const getEventId = (ctx: BlockContext, event: Event<any>): string => {
	return `${ctx.block.header.height}-${event.index}`
}
