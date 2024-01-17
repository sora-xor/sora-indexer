import { getEventId } from '.'
import { performanceLogMinTime, performanceLogMode, testLogMode } from '../config'
import { BlockContext, Call, Event } from '../types'

let lastLogNow = performance.now()

function toPascalCase(str: string): string {
	return str
		.split('.')
		.map((segment) => {
			return segment
				.replace(/([a-z])([A-Z])/g, '$1 $2') // Separate camelCase
				.replace(/[_\W]+/g, ' ') // Replace underscores and non-alphanumeric characters with spaces
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join('')
		})
		.join('.')
		.toLowerCase() // Convert the whole string to lowercase
		.replace(/(^|\.)\w/g, (match) => match.toUpperCase()) // Capitalize the first character of each segment
}

export function getLog(ctx: BlockContext, logModule: string | null = null, attrs: Record<string, any> = {}, testMode: boolean = false) {
	const blockHeight = ctx.block.header.height
	const attributes: any = { blockHeight, ...attrs }
	if (performanceLogMode) {
		const now = performance.now()
		const timeFromLastLog = now - lastLogNow
		const timeFromBlockStart = now - ctx.now
		if (timeFromLastLog > performanceLogMinTime) {
			attributes['timeFromLastLog'] = timeFromLastLog.toFixed(2) + 'ms'
			attributes['timeFromBlockStart'] = timeFromBlockStart.toFixed(2) + 'ms'
		}
		lastLogNow = now
	}

	const log = (level: 'debug' | 'info' | 'warn' | 'error') => (arg1: Record<string, any> | string, arg2?: string) => {
		let attrs: Record<string, any> = {}
		let message: string

		if (typeof arg1 === 'string') {
			message = arg1
		} else {
			attrs = arg1
			message = arg2!
		}

		attrs = { ...attributes, ...attrs }

		ctx.log[level](attrs, `[${logModule}] ${message}`)
	}

	const sendMessages = testMode ? testLogMode : true

	return {
		debug: sendMessages ? log('debug') : () => {},
		info: sendMessages ? log('info') : () => {},
		warn: sendMessages ? log('warn') : () => {},
		error: sendMessages ? log('error') : () => {},
	}
}

export function getCallHandlerLog(ctx: BlockContext, call: Call<any>, testMode: boolean = false) {
	const extrinsicHash = call.extrinsic?.hash ?? null
	const callName = toPascalCase(call.name)
	const attributes = { extrinsicHash, callName }
	return getLog(ctx, 'CallHandler', attributes, testMode)
}

export function getEventHandlerLog(ctx: BlockContext, event: Event<any>, testMode: boolean = false) {
	const extrinsicHash = event.extrinsic?.hash ?? null
	const eventName = toPascalCase(event.name)
	const eventId = getEventId(ctx, event)
	const attributes: any = { eventName, eventId }
	if (extrinsicHash) {
		attributes['extrinsicHash'] = extrinsicHash
	}
	return getLog(ctx, 'EventHandler', attributes, testMode)
}

export function getInitializeAssetsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'InitializeAssets', {}, testMode)
}

export function getInitializePoolsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'InitializePools', {}, testMode)
}

export function getInitializeOrderBooksLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'InitializeOrderBooks', {}, testMode)
}

export function getSyncModelsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'SyncModels', {}, testMode)
}

export function getSyncPricesLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'SyncPrices', {}, testMode)
}

export function getAssetStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'AssetStorage', {}, testMode)
}

export function getAssetSnapshotsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'AssetSnapshotsStorage', {}, testMode)
}

export function getNetworkSnapshotsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'NetworkSnapshotsStorage', {}, testMode)
}

export function getOrderBooksSnapshotsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'OrderBooksSnapshotsStorage', {}, testMode)
}

export function getPoolsStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'PoolsStorage', {}, testMode)
}

export function getOrderBooksStorageLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'OrderBooksStorage', {}, testMode)
}

export function getUtilsLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'Utils', {}, testMode)
}

export function getStreamLog(ctx: BlockContext, testMode: boolean = false) {
	return getLog(ctx, 'Stream', {}, testMode)
}

export function logStartProcessingCall(ctx: BlockContext, callItem: Call<any>) {
	return getCallHandlerLog(ctx, callItem).debug('Start processing the call')
}

export function logStartProcessingEvent(ctx: BlockContext, eventItem: Event<any>) {
	return getEventHandlerLog(ctx, eventItem).debug('Start processing the event')
}
