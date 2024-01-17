import { BlockContext, Call, Event } from '../types'
import { CallType as CallTypeProduction, EventType as EventTypeProduction } from '../types/generated/production/support'
import { CallType as CallTypeStage, EventType as EventTypeStage } from '../types/generated/stage/support'
import { CallType as CallTypeTest, EventType as EventTypeTest } from '../types/generated/test/support'
import { CallType as CallTypeDev, EventType as EventTypeDev } from '../types/generated/dev/support'
import { UnsupportedSpecError } from './errors'
import { getLog } from './logs'
import * as sts from '@subsquid/substrate-runtime/lib/sts'

type VersionedObject = {
	[key: string]: any
}

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
} | {
	kind: 'storage',
}

type ExtractType<T> = T extends sts.Type<infer U> ? U : never;
export type ExtractCallType<T> = ExtractType<
	T extends CallTypeProduction<infer U> ? U
	: T extends CallTypeStage<infer U> ? U
	: T extends CallTypeTest<infer U> ? U
	: T extends CallTypeDev<infer U> ? U
	: never
>
export type ExtractEventType<T> = ExtractType<
	T extends EventTypeProduction<infer U> ? U
	: T extends EventTypeStage<infer U> ? U
	: T extends EventTypeTest<infer U> ? U
	: T extends EventTypeDev<infer U> ? U
	: never
>

type NarrowVersions<T, V extends readonly string[]> = {
	[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: never]: T[K]
}

function getVersionedObjectKeys(obj: any): string[] {
	return Object.keys(obj)
}

function getAllVersions(obj: any): readonly string[] {
	return getVersionedObjectKeys(obj)
		.filter((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
		.map((key) => key.slice(1))
}

function isVersionedObject(obj: any): obj is VersionedObject {
    const keys = getVersionedObjectKeys(obj)
    return keys.some((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
}

function getDataFromVersionedObject<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): Exclude<T[keyof T], boolean> | null {
	if (!isVersionedObject(obj)) {
		throw new Error(`[${ctx.block.header.height}] Object does not conform to VersionedObject pattern`)
	}

	let entity = null

	switch (entityItem.kind) {
		case 'call':
			entity = entityItem.entity
			break
		case 'event':
			entity = entityItem.entity
			break
		case 'storage':
			entity = ctx.block.header
			break
	}

	for (const key of getVersionedObjectKeys(obj)) {
		if (obj[key].is(entity)) {
			return obj[key]
		}
	}

	return null
}

// Make sure to add "as const" after the versions array to properly narrow the entity object
export function narrowVersionedObject<T extends VersionedObject, V extends readonly string[]>(obj: T, versions: V): NarrowVersions<T, V> {
	const narrowed: any = {}

	versions.forEach((version) => {
		const vKey = `v${version}`
		narrowed[vKey] = obj[vKey as keyof T]
	})

	return narrowed as NarrowVersions<T, V>
}

export function findCurrentSpecVersion<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): string | null {
	let entity = null

	switch (entityItem.kind) {
		case 'call':
			entity = entityItem.entity
			break
		case 'event':
			entity = entityItem.entity
			break
		case 'storage':
			entity = ctx.block.header
			break
	}

	for (const key of getVersionedObjectKeys(obj)) {
		if (key.startsWith('v') && !isNaN(parseInt(key[1])) && obj[key].is(entity) === true) {
			return key.slice(1)
		}
	}
	return null
}

type ExcludeVersions<T, V extends readonly string[]> = V extends []
	? T
	: {
			[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: K extends `v${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: never]: T[K]
	  }

// Make sure to add "as const" after the versions array to properly narrow the entity object

export function getEntityRepresentation<T extends VersionedObject, V extends readonly string[] = [], C extends boolean = false>(
	ctx: BlockContext,
	types: T,
	entityItem: EntityItem,
	excludeVersions?: V,
	couldBeNull?: C,
): C extends true ? Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string> | null : Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string> {
	const allVersions = getAllVersions(types) as V
	// Exclude the specified versions
	const versions: V = excludeVersions
		? (allVersions.filter((v) => !excludeVersions.includes(v)) as readonly string[] as V)
		: (allVersions as V)

	const narrowedObject = narrowVersionedObject(types, versions)
	let data = getDataFromVersionedObject(ctx, narrowedObject, entityItem)

	if (data === null) {
		const specVersion = findCurrentSpecVersion(ctx, narrowedObject, entityItem)
		if (!specVersion) {
			getLog(ctx).error('No spec version found')
		}
		const unsupportedSpecError = new UnsupportedSpecError(ctx, { kind: entityItem.kind, name: types.name })
		if (entityItem.kind === 'call') {
			data = {
				decode(call: Call<any>) {
					return entityItem.entity.block._runtime.decodeJsonCallRecordArguments(call)
				}
			} as any
		} else if (entityItem.kind === 'event') {
			data = {
				decode(event: Event<any>) {
					return entityItem.entity.block._runtime.decodeJsonEventRecordArguments(event)
				}
			} as any
		} else {
			throw unsupportedSpecError
		}
		getLog(ctx).error(unsupportedSpecError.message)
	}
	if (data === null && !couldBeNull) {
		throw new Error(`[${ctx.block.header.height}] Entity data is null`)
	}

	return data as any
}

export function getCallRepresentation<T extends VersionedObject, V extends readonly string[] = []>(
	ctx: BlockContext,
	types: T,
	call: Call<any>,
	excludeVersions?: V,
) {
	return getEntityRepresentation<T, V, false>(ctx, types, { kind: 'call', entity: call }, excludeVersions)
}
export function decodeCall<R>(representation: R, call: Call<any>): ExtractCallType<R> {
	return (representation as any).decode(call)
}
export function getCallData<T extends VersionedObject, V extends readonly string[] = []>(ctx: BlockContext, types: T, call: Call<any>, excludeVersions?: V) {
	const representation = getCallRepresentation<T, V>(ctx, types, call, excludeVersions)
	return decodeCall(representation, call)
}

export function getEventRepresentation<T extends VersionedObject, V extends readonly string[] = []>(
	ctx: BlockContext,
	types: T,
	event: Event<any>,
	excludeVersions?: V,
) {
	return getEntityRepresentation<T, V, false>(ctx, types, { kind: 'event', entity: event }, excludeVersions)
}
export function decodeEvent<R>(representation: R, event: Event<any>): ExtractEventType<R> {
	return (representation as any).decode(event)
}
export function getEventData<T extends VersionedObject, V extends readonly string[] = []>(ctx: BlockContext, types: T, event: Event<any>, excludeVersions?: V) {
	const representation = getEventRepresentation<T, V>(ctx, types, event, excludeVersions)
	return decodeEvent(representation, event)
}

export function getStorageRepresentation<T extends VersionedObject, V extends readonly string[] = []>(
	ctx: BlockContext,
	types: T,
	excludeVersions?: V,
) {
	return getEntityRepresentation<T, V, true>(ctx, types, { kind: 'storage' }, excludeVersions, true)
}
