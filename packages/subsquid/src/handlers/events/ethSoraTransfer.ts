import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import {
	DepositEventData,
	TransferEventData,
	findEventByExtrinsicHash,
	getAssetsDepositEventData,
	getAssetsTransferEventData,
} from '../../utils/events'
import { BlockContext, EventItem } from '../../types'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { findCallByExtrinsicHash } from '../../utils/calls'
import { getEntityData } from '../../utils/entities'
import { toHex } from '@subsquid/substrate-processor'
import { CannotFindCallError } from '../../utils/errors'
import { logStartProcessingEvent } from '../../utils/logs'

export async function ethSoraTransferEventHandler(
	ctx: BlockContext,
	eventItem: EventItem<'EthBridge.IncomingRequestFinalized'> | EventItem<'EthBridge.IncomingRequestFinalizationFailed'>,
): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	if (!eventItem.event.extrinsic) {
		throw new Error(`[${ctx.block.header.height}][EventHandler] There is no extrinsic in the event`)
	}
	const extrinsicHash = eventItem.event.extrinsic.hash

	let registeredRequestEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['EthBridge.RequestRegistered'])
	let tokensTransferEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer'])
	let balancesTransferEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Transfer'])
	let tokensDepositedEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Deposited'])
	let BalancesDepositEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Deposited'])

	if (!registeredRequestEventItem) return

	const registeredRequestEvent = new EthBridgeRequestRegisteredEvent(ctx, registeredRequestEventItem.event)
	const registeredRequestEventData = getEntityData(ctx, registeredRequestEvent, registeredRequestEventItem)

	const requestHash = toHex(registeredRequestEventData)

	const assetsTransferEventItem = tokensTransferEventItem || balancesTransferEventItem
	const assetsDepositedEventItem = tokensDepositedEventItem || BalancesDepositEventItem

	let eventData: TransferEventData | DepositEventData
	if (assetsTransferEventItem) {
		eventData = getAssetsTransferEventData(ctx, assetsTransferEventItem)
	} else if (assetsDepositedEventItem) {
		eventData = getAssetsDepositEventData(ctx, assetsDepositedEventItem)
	} else return

	const details = {
		requestHash,
		assetId: eventData.assetId,
		to: eventData.to,
		amount: eventData.amount.toString(),
	}

	const callItem = findCallByExtrinsicHash(ctx, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	if (!callItem) {
		throw new CannotFindCallError(ctx, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	}

	await createHistoryElement(ctx, callItem, details)
	await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx)
}
