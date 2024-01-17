import { assetSnapshotsStorage, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, Event } from '../../types'
import { AssetAmount } from '../../types'
import { getEventData } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { events } from '../../types/generated/merged'

export async function tokenBurnEventHandler(ctx: BlockContext, event: Event<'Tokens.Withdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.tokens.withdrawn, event)

	const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

	await assetSnapshotsStorage.updateBurned(ctx, assetId, BigInt(amount))
}

export async function xorBurnEventHandler(ctx: BlockContext, event: Event<'Balances.Withdraw'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.balances.withdraw, event)

	const amount = data.amount as AssetAmount
	const assetId = XOR

	await assetSnapshotsStorage.updateBurned(ctx, assetId, amount)
}

export async function tokenMintEventHandler(ctx: BlockContext, event: Event<'Tokens.Deposited'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.tokens.deposited, event)

	const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

	getEventHandlerLog(ctx, event).debug(`1 Minting ${amount} of ${assetId}`)
	await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}

export async function xorMintEventHandler(ctx: BlockContext, event: Event<'Balances.Deposit'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = getEventData(ctx, events.balances.deposit, event)

	const assetId = XOR
	const amount = ('amount' in data ? data.amount : data[1]) as AssetAmount

	getEventHandlerLog(ctx, event).debug(`2 Minting ${amount} of ${assetId}`)
	await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}
