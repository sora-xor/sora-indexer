import { AnyEntityItem, BlockContext } from '../types'

export class UnsupportedSpecError extends Error {
	constructor(ctx: BlockContext, { kind, name }: { kind: 'call' | 'event' | 'storage'; name: string }) {
		const blockHeight = ctx.block.header.height
		let specHash: string | undefined
		switch (kind) {
			case 'call':
				specHash = ctx._chain.getCallHash(name)
				break
			case 'event':
				specHash = ctx._chain.getEventHash(name)
				break
			case 'storage':
				// TODO: check if this is correct
				specHash = ctx._chain.getStorageItemTypeHash('', '')
				break
		}

		if (!specHash) super(`[${blockHeight}] There is no hash for ${name} ${kind}`)

		super(`[${blockHeight}] Unsupported spec ${specHash} for ${name} ${kind}`)
	}
}

const getCannotFindEntityErrorMessage = (
	ctx: BlockContext,
	kind: AnyEntityItem['kind'],
	extrinsicHash: string,
	entityNames?: string | string[],
): string => {
	const blockHeight = ctx.block.header.height

	if (!entityNames) {
		return `[${blockHeight}] Cannot find any ${kind}s with extrinsic hash ${extrinsicHash}`
	} else if (Array.isArray(entityNames)) {
		return `[${blockHeight}] Cannot find ${kind}s ${entityNames.join(', ')} with extrinsic hash ${extrinsicHash}`
	} else {
		return `[${blockHeight}] Cannot find ${kind} ${entityNames} with extrinsic hash ${extrinsicHash}`
	}
}

export class CannotFindCallError extends Error {
	constructor(ctx: BlockContext, extrinsicHash: string, callNames?: string | string[]) {
		super(getCannotFindEntityErrorMessage(ctx, 'call', extrinsicHash, callNames))
	}
}

export class CannotFindEventError extends Error {
	constructor(ctx: BlockContext, extrinsicHash: string, eventNames: string | string[]) {
		super(getCannotFindEntityErrorMessage(ctx, 'event', extrinsicHash, eventNames))
	}
}
