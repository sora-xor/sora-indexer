import { createCallHistoryElement } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import {
	DepositEventData,
	TransferEventData,
	findEventByExtrinsicHash,
	getAssetsDepositEventData,
	getAssetsTransferEventData,
} from '../../utils/events'
import { BlockContext, Event } from '../../types'
import { findCallByExtrinsicHash } from '../../utils/calls'
import { getEventData } from '../../utils/entities'
import { CannotFindCallError } from '../../utils/errors'
import { logStartProcessingEvent } from '../../utils/logs'
import { events } from '../../types/generated/merged'

export async function ethSoraTransferEventHandler(
	ctx: BlockContext,
	event: Event<'EthBridge.IncomingRequestFinalized'> | Event<'EthBridge.IncomingRequestFinalizationFailed'>,
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	if (!event.extrinsic) {
		throw new Error(`[${ctx.block.header.height}][EventHandler] There is no extrinsic in the event`)
	}
	const extrinsicHash = event.extrinsic.hash

	let registeredRequestEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['EthBridge.RequestRegistered'])
	let tokensTransferEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer'])
	let balancesTransferEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Transfer'])
	let tokensDepositedEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Deposited'])
	let BalancesDepositEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Deposited'])

	if (!registeredRequestEvent) return

	const registeredRequestEventData = getEventData(ctx, events.ethBridge.requestRegistered, registeredRequestEvent)

	const requestHash = registeredRequestEventData

	const assetsTransferEvent = tokensTransferEvent || balancesTransferEvent
	const assetsDepositedEvent = tokensDepositedEvent || BalancesDepositEvent

	let eventData: TransferEventData | DepositEventData
	if (assetsTransferEvent) {
		eventData = getAssetsTransferEventData(ctx, assetsTransferEvent)
	} else if (assetsDepositedEvent) {
		eventData = getAssetsDepositEventData(ctx, assetsDepositedEvent)
	} else return

	const details = {
		requestHash,
		assetId: eventData.assetId,
		to: eventData.to,
		amount: eventData.amount.toString(),
	}

	const call = findCallByExtrinsicHash(ctx, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	if (!call) {
		throw new CannotFindCallError(ctx, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	}

	await createCallHistoryElement(ctx, call, details)
	await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx)
}
