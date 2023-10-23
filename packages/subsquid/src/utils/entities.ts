import { BlockContext, EntityItem } from '../types'
import { UnsupportedSpecError } from './errors'
import { getLog } from './logs'

type VersionedObject = {
	[key: string]: any
}

type NarrowVersions<T, V extends readonly string[]> = {
	[K in Extract<keyof T, `isV${string}` | `asV${string}`> as K extends `isV${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: K extends `asV${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: never]: T[K]
}

function getVersionedObjectKeys(obj: any): string[] {
	return [
		...Object.keys(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(obj))),
		...Object.keys(Object.getOwnPropertyDescriptors(obj)),
	]
}

function getAllVersions(obj: any): readonly string[] {
	return getVersionedObjectKeys(obj)
		.filter((key) => key.startsWith('isV'))
		.map((key) => key.slice(3))
}

function isVersionedObject(obj: any): obj is VersionedObject {
	const keys = getVersionedObjectKeys(obj)
	return keys.some((key) => key.startsWith('isV')) && keys.some((key) => key.startsWith('asV'))
}

function getDataFromVersionedObject<T extends VersionedObject>(ctx: BlockContext, obj: T): Exclude<T[keyof T], boolean> | null {
	if (!isVersionedObject(obj)) {
		throw new Error(`[${ctx.block.header.height}] Object does not conform to VersionedObject pattern`)
	}

	for (const key of getVersionedObjectKeys(obj)) {
		if (key.startsWith('isV') && obj[key] === true) {
			return obj['as' + key.slice(2)]
		}
	}

	return null
}

// Make sure to add "as const" after the versions array to properly narrow the entity object
export function narrowVersionedObject<T extends VersionedObject, V extends readonly string[]>(obj: T, versions: V): NarrowVersions<T, V> {
	const narrowed: any = {}

	versions.forEach((version) => {
		const isKey = `isV${version}`
		const asKey = `asV${version}`
		Object.defineProperty(narrowed, isKey, {
			get() {
				return obj[isKey as keyof T]
			},
		})
		Object.defineProperty(narrowed, asKey, {
			get() {
				return obj[asKey as keyof T]
			},
		})
	})

	return narrowed as NarrowVersions<T, V>
}

export function findCurrentSpecVersion<T extends VersionedObject>(obj: T): string | null {
	for (const key of getVersionedObjectKeys(obj)) {
		if (key.startsWith('isV') && obj[key] === true) {
			return key.slice(3)
		}
	}
	return null
}

type ExcludeVersions<T, V extends readonly string[]> = V extends []
	? T
	: {
			[K in Extract<keyof T, `isV${string}` | `asV${string}`> as K extends `isV${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: K extends `asV${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: never]: T[K]
	  }

// Make sure to add "as const" after the versions array to properly narrow the entity object

export function getEntityData<T extends VersionedObject, V extends readonly string[] = []>(
	ctx: BlockContext,
	entity: T,
	entityItem: { kind: 'storage'; name: string } | EntityItem<any>,
	excludeVersions?: V,
): Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], boolean> {
	const allVersions = getAllVersions(entity) as V
	// Exclude the specified versions
	const versions: V = excludeVersions
		? (allVersions.filter((v) => !excludeVersions.includes(v)) as readonly string[] as V)
		: (allVersions as V)

	const narrowedObject = narrowVersionedObject(entity, versions)
	let data = getDataFromVersionedObject(ctx, narrowedObject)

	if (data === null) {
		const specVersion = findCurrentSpecVersion(narrowedObject)
		if (!specVersion) {
			getLog(ctx).error('No spec version found')
		}
		const unsupportedSpecError = new UnsupportedSpecError(ctx, entityItem)
		if (entityItem.kind === 'call') {
			data = ctx._chain.decodeCall(entityItem.call) as any
		} else if (entityItem.kind === 'event') {
			data = ctx._chain.decodeEvent(entityItem.event) as any
		} else {
			throw unsupportedSpecError
		}
		getLog(ctx).error(unsupportedSpecError.message)
	}
	if (data === null) {
		throw new Error(`[${ctx.block.header.height}] Entity data is null`)
	}

	return data
}
