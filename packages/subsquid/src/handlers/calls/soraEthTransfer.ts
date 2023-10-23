import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { BlockContext, CallItem } from '../../types'
import { EthBridgeTransferToSidechainCall } from '../../types/generated/calls'
import { findEventByExtrinsicHash } from '../../utils/events'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { toHex } from '@subsquid/substrate-processor'
import { AddressEthereum, AssetAmount, AssetId } from '../../types'
import { toAddressEthereum } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'

export async function soraEthTransferCallHandler(ctx: BlockContext, callItem: CallItem<'EthBridge.transfer_to_sidechain'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	const call = new EthBridgeTransferToSidechainCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const assetId = getAssetId(data.assetId)
	const sidechainAddress = toAddressEthereum(data.to)
	const amount = data.amount as AssetAmount

	let details: {
		requestHash?: string
		assetId: AssetId
		sidechainAddress: AddressEthereum
		amount: string
	}

	if (historyElement.execution.success) {
		const soraEthTransferEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['EthBridge.RequestRegistered'], true)
		const soraEthTransferEvent = new EthBridgeRequestRegisteredEvent(ctx, soraEthTransferEventItem.event)
		const soraEthTransferEventData = getEntityData(ctx, soraEthTransferEvent, soraEthTransferEventItem)

		details = {
			requestHash: toHex(soraEthTransferEventData),
			assetId,
			sidechainAddress,
			amount: formatU128ToBalance(amount, assetId),
		}
	} else {
		details = {
			assetId,
			sidechainAddress,
			amount: formatU128ToBalance(amount, assetId),
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
	await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx)
}
