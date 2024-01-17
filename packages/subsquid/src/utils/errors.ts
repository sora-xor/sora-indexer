import { BlockContext, EntityKind } from '../types'

export class UnsupportedSpecError extends Error {
	constructor(ctx: BlockContext, { kind, name }: { kind: EntityKind; name: string }) {
		const blockHeight = ctx.block.header.height

		super(`[${blockHeight}] Unsupported spec for ${name} ${kind}`)
	}
}

const getCannotFindEntityErrorMessage = (
	ctx: BlockContext,
	kind: EntityKind,
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
