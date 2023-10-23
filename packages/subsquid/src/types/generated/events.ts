import {Chain, ChainContext, EventContext, Event, Result, Option} from './production/support'
import * as productionEvents from './production/events'
import * as stageEvents from './stage/events'
import * as testEvents from './test/events'
import * as devEvents from './dev/events'


export class AssetsAssetRegisteredEvent {
	private readonly production: productionEvents.AssetsAssetRegisteredEvent
	private readonly stage: stageEvents.AssetsAssetRegisteredEvent
	private readonly test: testEvents.AssetsAssetRegisteredEvent
	private readonly dev: devEvents.AssetsAssetRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetRegisteredEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetRegisteredEvent(ctx, event)
		this.test = new testEvents.AssetsAssetRegisteredEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetRegisteredEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsAssetRegisteredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsAssetRegisteredEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsAssetRegisteredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsAssetRegisteredEvent['asV42'] {
		return this.production.asV42
	}
}

export class AssetsAssetSetNonMintableEvent {
	private readonly production: productionEvents.AssetsAssetSetNonMintableEvent
	private readonly stage: stageEvents.AssetsAssetSetNonMintableEvent
	private readonly test: testEvents.AssetsAssetSetNonMintableEvent
	private readonly dev: devEvents.AssetsAssetSetNonMintableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetSetNonMintableEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetSetNonMintableEvent(ctx, event)
		this.test = new testEvents.AssetsAssetSetNonMintableEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetSetNonMintableEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsAssetSetNonMintableEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsAssetSetNonMintableEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsAssetSetNonMintableEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsAssetSetNonMintableEvent['asV42'] {
		return this.production.asV42
	}
}

export class AssetsAssetUpdatedEvent {
	private readonly production: productionEvents.AssetsAssetUpdatedEvent
	private readonly stage: stageEvents.AssetsAssetUpdatedEvent
	private readonly test: testEvents.AssetsAssetUpdatedEvent
	private readonly dev: devEvents.AssetsAssetUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetUpdatedEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetUpdatedEvent(ctx, event)
		this.test = new testEvents.AssetsAssetUpdatedEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetUpdatedEvent(ctx, event)
	}

	get isV53(): productionEvents.AssetsAssetUpdatedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.AssetsAssetUpdatedEvent['asV53'] {
		return this.production.asV53
	}
}

export class AssetsBurnEvent {
	private readonly production: productionEvents.AssetsBurnEvent
	private readonly stage: stageEvents.AssetsBurnEvent
	private readonly test: testEvents.AssetsBurnEvent
	private readonly dev: devEvents.AssetsBurnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsBurnEvent(ctx, event)
		this.stage = new stageEvents.AssetsBurnEvent(ctx, event)
		this.test = new testEvents.AssetsBurnEvent(ctx, event)
		this.dev = new devEvents.AssetsBurnEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsBurnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsBurnEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsBurnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsBurnEvent['asV42'] {
		return this.production.asV42
	}
}

export class AssetsMintEvent {
	private readonly production: productionEvents.AssetsMintEvent
	private readonly stage: stageEvents.AssetsMintEvent
	private readonly test: testEvents.AssetsMintEvent
	private readonly dev: devEvents.AssetsMintEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsMintEvent(ctx, event)
		this.stage = new stageEvents.AssetsMintEvent(ctx, event)
		this.test = new testEvents.AssetsMintEvent(ctx, event)
		this.dev = new devEvents.AssetsMintEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsMintEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsMintEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsMintEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsMintEvent['asV42'] {
		return this.production.asV42
	}
}

export class AssetsTransferEvent {
	private readonly production: productionEvents.AssetsTransferEvent
	private readonly stage: stageEvents.AssetsTransferEvent
	private readonly test: testEvents.AssetsTransferEvent
	private readonly dev: devEvents.AssetsTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsTransferEvent(ctx, event)
		this.stage = new stageEvents.AssetsTransferEvent(ctx, event)
		this.test = new testEvents.AssetsTransferEvent(ctx, event)
		this.dev = new devEvents.AssetsTransferEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsTransferEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsTransferEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsTransferEvent['asV42'] {
		return this.production.asV42
	}
}

export class BagsListRebaggedEvent {
	private readonly production: productionEvents.BagsListRebaggedEvent
	private readonly stage: stageEvents.BagsListRebaggedEvent
	private readonly test: testEvents.BagsListRebaggedEvent
	private readonly dev: devEvents.BagsListRebaggedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BagsListRebaggedEvent(ctx, event)
		this.stage = new stageEvents.BagsListRebaggedEvent(ctx, event)
		this.test = new testEvents.BagsListRebaggedEvent(ctx, event)
		this.dev = new devEvents.BagsListRebaggedEvent(ctx, event)
	}

	get isV42(): productionEvents.BagsListRebaggedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BagsListRebaggedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BagsListScoreUpdatedEvent {
	private readonly production: productionEvents.BagsListScoreUpdatedEvent
	private readonly stage: stageEvents.BagsListScoreUpdatedEvent
	private readonly test: testEvents.BagsListScoreUpdatedEvent
	private readonly dev: devEvents.BagsListScoreUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BagsListScoreUpdatedEvent(ctx, event)
		this.stage = new stageEvents.BagsListScoreUpdatedEvent(ctx, event)
		this.test = new testEvents.BagsListScoreUpdatedEvent(ctx, event)
		this.dev = new devEvents.BagsListScoreUpdatedEvent(ctx, event)
	}

	get isV42(): productionEvents.BagsListScoreUpdatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BagsListScoreUpdatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesBalanceSetEvent {
	private readonly production: productionEvents.BalancesBalanceSetEvent
	private readonly stage: stageEvents.BalancesBalanceSetEvent
	private readonly test: testEvents.BalancesBalanceSetEvent
	private readonly dev: devEvents.BalancesBalanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesBalanceSetEvent(ctx, event)
		this.stage = new stageEvents.BalancesBalanceSetEvent(ctx, event)
		this.test = new testEvents.BalancesBalanceSetEvent(ctx, event)
		this.dev = new devEvents.BalancesBalanceSetEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesBalanceSetEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesBalanceSetEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesBalanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesBalanceSetEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesDepositEvent {
	private readonly production: productionEvents.BalancesDepositEvent
	private readonly stage: stageEvents.BalancesDepositEvent
	private readonly test: testEvents.BalancesDepositEvent
	private readonly dev: devEvents.BalancesDepositEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesDepositEvent(ctx, event)
		this.stage = new stageEvents.BalancesDepositEvent(ctx, event)
		this.test = new testEvents.BalancesDepositEvent(ctx, event)
		this.dev = new devEvents.BalancesDepositEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesDepositEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesDepositEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesDepositEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesDepositEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesDustLostEvent {
	private readonly production: productionEvents.BalancesDustLostEvent
	private readonly stage: stageEvents.BalancesDustLostEvent
	private readonly test: testEvents.BalancesDustLostEvent
	private readonly dev: devEvents.BalancesDustLostEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesDustLostEvent(ctx, event)
		this.stage = new stageEvents.BalancesDustLostEvent(ctx, event)
		this.test = new testEvents.BalancesDustLostEvent(ctx, event)
		this.dev = new devEvents.BalancesDustLostEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesDustLostEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesDustLostEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesDustLostEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesDustLostEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesEndowedEvent {
	private readonly production: productionEvents.BalancesEndowedEvent
	private readonly stage: stageEvents.BalancesEndowedEvent
	private readonly test: testEvents.BalancesEndowedEvent
	private readonly dev: devEvents.BalancesEndowedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesEndowedEvent(ctx, event)
		this.stage = new stageEvents.BalancesEndowedEvent(ctx, event)
		this.test = new testEvents.BalancesEndowedEvent(ctx, event)
		this.dev = new devEvents.BalancesEndowedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesEndowedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesEndowedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesEndowedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesEndowedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesReserveRepatriatedEvent {
	private readonly production: productionEvents.BalancesReserveRepatriatedEvent
	private readonly stage: stageEvents.BalancesReserveRepatriatedEvent
	private readonly test: testEvents.BalancesReserveRepatriatedEvent
	private readonly dev: devEvents.BalancesReserveRepatriatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesReserveRepatriatedEvent(ctx, event)
		this.stage = new stageEvents.BalancesReserveRepatriatedEvent(ctx, event)
		this.test = new testEvents.BalancesReserveRepatriatedEvent(ctx, event)
		this.dev = new devEvents.BalancesReserveRepatriatedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesReserveRepatriatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesReserveRepatriatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesReserveRepatriatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesReserveRepatriatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesReservedEvent {
	private readonly production: productionEvents.BalancesReservedEvent
	private readonly stage: stageEvents.BalancesReservedEvent
	private readonly test: testEvents.BalancesReservedEvent
	private readonly dev: devEvents.BalancesReservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesReservedEvent(ctx, event)
		this.stage = new stageEvents.BalancesReservedEvent(ctx, event)
		this.test = new testEvents.BalancesReservedEvent(ctx, event)
		this.dev = new devEvents.BalancesReservedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesReservedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesReservedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesReservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesReservedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesSlashedEvent {
	private readonly production: productionEvents.BalancesSlashedEvent
	private readonly stage: stageEvents.BalancesSlashedEvent
	private readonly test: testEvents.BalancesSlashedEvent
	private readonly dev: devEvents.BalancesSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesSlashedEvent(ctx, event)
		this.stage = new stageEvents.BalancesSlashedEvent(ctx, event)
		this.test = new testEvents.BalancesSlashedEvent(ctx, event)
		this.dev = new devEvents.BalancesSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.BalancesSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesSlashedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesTransferEvent {
	private readonly production: productionEvents.BalancesTransferEvent
	private readonly stage: stageEvents.BalancesTransferEvent
	private readonly test: testEvents.BalancesTransferEvent
	private readonly dev: devEvents.BalancesTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesTransferEvent(ctx, event)
		this.stage = new stageEvents.BalancesTransferEvent(ctx, event)
		this.test = new testEvents.BalancesTransferEvent(ctx, event)
		this.dev = new devEvents.BalancesTransferEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesTransferEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesTransferEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesTransferEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesUnreservedEvent {
	private readonly production: productionEvents.BalancesUnreservedEvent
	private readonly stage: stageEvents.BalancesUnreservedEvent
	private readonly test: testEvents.BalancesUnreservedEvent
	private readonly dev: devEvents.BalancesUnreservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesUnreservedEvent(ctx, event)
		this.stage = new stageEvents.BalancesUnreservedEvent(ctx, event)
		this.test = new testEvents.BalancesUnreservedEvent(ctx, event)
		this.dev = new devEvents.BalancesUnreservedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesUnreservedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesUnreservedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesUnreservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesUnreservedEvent['asV42'] {
		return this.production.asV42
	}
}

export class BalancesWithdrawEvent {
	private readonly production: productionEvents.BalancesWithdrawEvent
	private readonly stage: stageEvents.BalancesWithdrawEvent
	private readonly test: testEvents.BalancesWithdrawEvent
	private readonly dev: devEvents.BalancesWithdrawEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesWithdrawEvent(ctx, event)
		this.stage = new stageEvents.BalancesWithdrawEvent(ctx, event)
		this.test = new testEvents.BalancesWithdrawEvent(ctx, event)
		this.dev = new devEvents.BalancesWithdrawEvent(ctx, event)
	}

	get isV42(): productionEvents.BalancesWithdrawEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesWithdrawEvent['asV42'] {
		return this.production.asV42
	}
}

export class BandRelayersAddedEvent {
	private readonly production: productionEvents.BandRelayersAddedEvent
	private readonly stage: stageEvents.BandRelayersAddedEvent
	private readonly test: testEvents.BandRelayersAddedEvent
	private readonly dev: devEvents.BandRelayersAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandRelayersAddedEvent(ctx, event)
		this.stage = new stageEvents.BandRelayersAddedEvent(ctx, event)
		this.test = new testEvents.BandRelayersAddedEvent(ctx, event)
		this.dev = new devEvents.BandRelayersAddedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandRelayersAddedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandRelayersAddedEvent['asV45'] {
		return this.production.asV45
	}
}

export class BandRelayersRemovedEvent {
	private readonly production: productionEvents.BandRelayersRemovedEvent
	private readonly stage: stageEvents.BandRelayersRemovedEvent
	private readonly test: testEvents.BandRelayersRemovedEvent
	private readonly dev: devEvents.BandRelayersRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandRelayersRemovedEvent(ctx, event)
		this.stage = new stageEvents.BandRelayersRemovedEvent(ctx, event)
		this.test = new testEvents.BandRelayersRemovedEvent(ctx, event)
		this.dev = new devEvents.BandRelayersRemovedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandRelayersRemovedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandRelayersRemovedEvent['asV45'] {
		return this.production.asV45
	}
}

export class BandSymbolsRelayedEvent {
	private readonly production: productionEvents.BandSymbolsRelayedEvent
	private readonly stage: stageEvents.BandSymbolsRelayedEvent
	private readonly test: testEvents.BandSymbolsRelayedEvent
	private readonly dev: devEvents.BandSymbolsRelayedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandSymbolsRelayedEvent(ctx, event)
		this.stage = new stageEvents.BandSymbolsRelayedEvent(ctx, event)
		this.test = new testEvents.BandSymbolsRelayedEvent(ctx, event)
		this.dev = new devEvents.BandSymbolsRelayedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandSymbolsRelayedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandSymbolsRelayedEvent['asV45'] {
		return this.production.asV45
	}
	get isV57(): productionEvents.BandSymbolsRelayedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.BandSymbolsRelayedEvent['asV57'] {
		return this.production.asV57
	}
	get isV44Stage(): stageEvents.BandSymbolsRelayedEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.BandSymbolsRelayedEvent['asV44'] {
		return this.stage.asV44
	}
}

export class BridgeDataSignerAddedPeerEvent {
	private readonly production: productionEvents.BridgeDataSignerAddedPeerEvent
	private readonly stage: stageEvents.BridgeDataSignerAddedPeerEvent
	private readonly test: testEvents.BridgeDataSignerAddedPeerEvent
	private readonly dev: devEvents.BridgeDataSignerAddedPeerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
		this.stage = new stageEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
		this.test = new testEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeDataSignerAddedPeerEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeDataSignerAddedPeerEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerApprovalAcceptedEvent {
	private readonly production: productionEvents.BridgeDataSignerApprovalAcceptedEvent
	private readonly stage: stageEvents.BridgeDataSignerApprovalAcceptedEvent
	private readonly test: testEvents.BridgeDataSignerApprovalAcceptedEvent
	private readonly dev: devEvents.BridgeDataSignerApprovalAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
		this.stage = new stageEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
		this.test = new testEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeDataSignerApprovalAcceptedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeDataSignerApprovalAcceptedEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerApprovedEvent {
	private readonly production: productionEvents.BridgeDataSignerApprovedEvent
	private readonly stage: stageEvents.BridgeDataSignerApprovedEvent
	private readonly test: testEvents.BridgeDataSignerApprovedEvent
	private readonly dev: devEvents.BridgeDataSignerApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeDataSignerApprovedEvent(ctx, event)
		this.stage = new stageEvents.BridgeDataSignerApprovedEvent(ctx, event)
		this.test = new testEvents.BridgeDataSignerApprovedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerApprovedEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeDataSignerApprovedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeDataSignerApprovedEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerInitializedEvent {
	private readonly production: productionEvents.BridgeDataSignerInitializedEvent
	private readonly stage: stageEvents.BridgeDataSignerInitializedEvent
	private readonly test: testEvents.BridgeDataSignerInitializedEvent
	private readonly dev: devEvents.BridgeDataSignerInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeDataSignerInitializedEvent(ctx, event)
		this.stage = new stageEvents.BridgeDataSignerInitializedEvent(ctx, event)
		this.test = new testEvents.BridgeDataSignerInitializedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerInitializedEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeDataSignerInitializedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeDataSignerInitializedEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerRemovedPeerEvent {
	private readonly production: productionEvents.BridgeDataSignerRemovedPeerEvent
	private readonly stage: stageEvents.BridgeDataSignerRemovedPeerEvent
	private readonly test: testEvents.BridgeDataSignerRemovedPeerEvent
	private readonly dev: devEvents.BridgeDataSignerRemovedPeerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
		this.stage = new stageEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
		this.test = new testEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeDataSignerRemovedPeerEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeDataSignerRemovedPeerEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeMultisigMultisigAccountCreatedEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigAccountCreatedEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigAccountCreatedEvent
	private readonly test: testEvents.BridgeMultisigMultisigAccountCreatedEvent
	private readonly dev: devEvents.BridgeMultisigMultisigAccountCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
		this.test = new testEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigAccountCreatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigAccountCreatedEvent['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigMultisigApprovalEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigApprovalEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigApprovalEvent
	private readonly test: testEvents.BridgeMultisigMultisigApprovalEvent
	private readonly dev: devEvents.BridgeMultisigMultisigApprovalEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
		this.test = new testEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigApprovalEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigApprovalEvent['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigMultisigCancelledEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigCancelledEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigCancelledEvent
	private readonly test: testEvents.BridgeMultisigMultisigCancelledEvent
	private readonly dev: devEvents.BridgeMultisigMultisigCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
		this.test = new testEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigCancelledEvent['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigMultisigExecutedEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigExecutedEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigExecutedEvent
	private readonly test: testEvents.BridgeMultisigMultisigExecutedEvent
	private readonly dev: devEvents.BridgeMultisigMultisigExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
		this.test = new testEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class BridgeMultisigNewMultisigEvent {
	private readonly production: productionEvents.BridgeMultisigNewMultisigEvent
	private readonly stage: stageEvents.BridgeMultisigNewMultisigEvent
	private readonly test: testEvents.BridgeMultisigNewMultisigEvent
	private readonly dev: devEvents.BridgeMultisigNewMultisigEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigNewMultisigEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigNewMultisigEvent(ctx, event)
		this.test = new testEvents.BridgeMultisigNewMultisigEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigNewMultisigEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigNewMultisigEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigNewMultisigEvent['asV1'] {
		return this.production.asV1
	}
}

export class BridgeProxyRefundFailedEvent {
	private readonly production: productionEvents.BridgeProxyRefundFailedEvent
	private readonly stage: stageEvents.BridgeProxyRefundFailedEvent
	private readonly test: testEvents.BridgeProxyRefundFailedEvent
	private readonly dev: devEvents.BridgeProxyRefundFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeProxyRefundFailedEvent(ctx, event)
		this.stage = new stageEvents.BridgeProxyRefundFailedEvent(ctx, event)
		this.test = new testEvents.BridgeProxyRefundFailedEvent(ctx, event)
		this.dev = new devEvents.BridgeProxyRefundFailedEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeProxyRefundFailedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeProxyRefundFailedEvent['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyRequestStatusUpdateEvent {
	private readonly production: productionEvents.BridgeProxyRequestStatusUpdateEvent
	private readonly stage: stageEvents.BridgeProxyRequestStatusUpdateEvent
	private readonly test: testEvents.BridgeProxyRequestStatusUpdateEvent
	private readonly dev: devEvents.BridgeProxyRequestStatusUpdateEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
		this.stage = new stageEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
		this.test = new testEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
		this.dev = new devEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
	}

	get isV64(): productionEvents.BridgeProxyRequestStatusUpdateEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.BridgeProxyRequestStatusUpdateEvent['asV64'] {
		return this.production.asV64
	}
}

export class CeresGovernancePlatformCreatedEvent {
	private readonly production: productionEvents.CeresGovernancePlatformCreatedEvent
	private readonly stage: stageEvents.CeresGovernancePlatformCreatedEvent
	private readonly test: testEvents.CeresGovernancePlatformCreatedEvent
	private readonly dev: devEvents.CeresGovernancePlatformCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
		this.test = new testEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformCreatedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformCreatedEvent['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionEvents.CeresGovernancePlatformCreatedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.CeresGovernancePlatformCreatedEvent['asV37'] {
		return this.production.asV37
	}
}

export class CeresGovernancePlatformVotedEvent {
	private readonly production: productionEvents.CeresGovernancePlatformVotedEvent
	private readonly stage: stageEvents.CeresGovernancePlatformVotedEvent
	private readonly test: testEvents.CeresGovernancePlatformVotedEvent
	private readonly dev: devEvents.CeresGovernancePlatformVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformVotedEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformVotedEvent(ctx, event)
		this.test = new testEvents.CeresGovernancePlatformVotedEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformVotedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformVotedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformVotedEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresGovernancePlatformWithdrawnEvent {
	private readonly production: productionEvents.CeresGovernancePlatformWithdrawnEvent
	private readonly stage: stageEvents.CeresGovernancePlatformWithdrawnEvent
	private readonly test: testEvents.CeresGovernancePlatformWithdrawnEvent
	private readonly dev: devEvents.CeresGovernancePlatformWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
		this.test = new testEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadClaimedEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedEvent
	private readonly test: testEvents.CeresLaunchpadClaimedEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadClaimedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadClaimedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadClaimedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadClaimedLpEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedLpEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedLpEvent
	private readonly test: testEvents.CeresLaunchpadClaimedLpEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedLpEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedLpEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedLpEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadClaimedLpEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadClaimedLpEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadClaimedPswapEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedPswapEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedPswapEvent
	private readonly test: testEvents.CeresLaunchpadClaimedPswapEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedPswapEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedPswapEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedPswapEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadContributedEvent {
	private readonly production: productionEvents.CeresLaunchpadContributedEvent
	private readonly stage: stageEvents.CeresLaunchpadContributedEvent
	private readonly test: testEvents.CeresLaunchpadContributedEvent
	private readonly dev: devEvents.CeresLaunchpadContributedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadContributedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadContributedEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadContributedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadContributedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadContributedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadContributedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadContributedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadContributedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadEmergencyWithdrawnEvent {
	private readonly production: productionEvents.CeresLaunchpadEmergencyWithdrawnEvent
	private readonly stage: stageEvents.CeresLaunchpadEmergencyWithdrawnEvent
	private readonly test: testEvents.CeresLaunchpadEmergencyWithdrawnEvent
	private readonly dev: devEvents.CeresLaunchpadEmergencyWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadFeeChangedEvent {
	private readonly production: productionEvents.CeresLaunchpadFeeChangedEvent
	private readonly stage: stageEvents.CeresLaunchpadFeeChangedEvent
	private readonly test: testEvents.CeresLaunchpadFeeChangedEvent
	private readonly dev: devEvents.CeresLaunchpadFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadFeeChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadFeeChangedEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadIloCreatedEvent {
	private readonly production: productionEvents.CeresLaunchpadIloCreatedEvent
	private readonly stage: stageEvents.CeresLaunchpadIloCreatedEvent
	private readonly test: testEvents.CeresLaunchpadIloCreatedEvent
	private readonly dev: devEvents.CeresLaunchpadIloCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadIloCreatedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadIloCreatedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadIloCreatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadIloCreatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadIloFinishedEvent {
	private readonly production: productionEvents.CeresLaunchpadIloFinishedEvent
	private readonly stage: stageEvents.CeresLaunchpadIloFinishedEvent
	private readonly test: testEvents.CeresLaunchpadIloFinishedEvent
	private readonly dev: devEvents.CeresLaunchpadIloFinishedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadIloFinishedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadIloFinishedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadIloFinishedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadIloFinishedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadRemovedWhitelistedContributorEvent {
	private readonly production: productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent
	private readonly stage: stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent
	private readonly test: testEvents.CeresLaunchpadRemovedWhitelistedContributorEvent
	private readonly dev: devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadRemovedWhitelistedIloOrganizerEvent {
	private readonly production: productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent
	private readonly stage: stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent
	private readonly test: testEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent
	private readonly dev: devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadWhitelistedContributorEvent {
	private readonly production: productionEvents.CeresLaunchpadWhitelistedContributorEvent
	private readonly stage: stageEvents.CeresLaunchpadWhitelistedContributorEvent
	private readonly test: testEvents.CeresLaunchpadWhitelistedContributorEvent
	private readonly dev: devEvents.CeresLaunchpadWhitelistedContributorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadWhitelistedContributorEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadWhitelistedContributorEvent['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadWhitelistedIloOrganizerEvent {
	private readonly production: productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent
	private readonly stage: stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent
	private readonly test: testEvents.CeresLaunchpadWhitelistedIloOrganizerEvent
	private readonly dev: devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
		this.test = new testEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['asV33'] {
		return this.production.asV33
	}
}

export class CeresLiquidityLockerLockedEvent {
	private readonly production: productionEvents.CeresLiquidityLockerLockedEvent
	private readonly stage: stageEvents.CeresLiquidityLockerLockedEvent
	private readonly test: testEvents.CeresLiquidityLockerLockedEvent
	private readonly dev: devEvents.CeresLiquidityLockerLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLiquidityLockerLockedEvent(ctx, event)
		this.stage = new stageEvents.CeresLiquidityLockerLockedEvent(ctx, event)
		this.test = new testEvents.CeresLiquidityLockerLockedEvent(ctx, event)
		this.dev = new devEvents.CeresLiquidityLockerLockedEvent(ctx, event)
	}

	get isV22(): productionEvents.CeresLiquidityLockerLockedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.CeresLiquidityLockerLockedEvent['asV22'] {
		return this.production.asV22
	}
	get isV37(): productionEvents.CeresLiquidityLockerLockedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.CeresLiquidityLockerLockedEvent['asV37'] {
		return this.production.asV37
	}
}

export class CeresStakingDepositedEvent {
	private readonly production: productionEvents.CeresStakingDepositedEvent
	private readonly stage: stageEvents.CeresStakingDepositedEvent
	private readonly test: testEvents.CeresStakingDepositedEvent
	private readonly dev: devEvents.CeresStakingDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingDepositedEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingDepositedEvent(ctx, event)
		this.test = new testEvents.CeresStakingDepositedEvent(ctx, event)
		this.dev = new devEvents.CeresStakingDepositedEvent(ctx, event)
	}

	get isV19(): productionEvents.CeresStakingDepositedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.CeresStakingDepositedEvent['asV19'] {
		return this.production.asV19
	}
}

export class CeresStakingRewardsChangedEvent {
	private readonly production: productionEvents.CeresStakingRewardsChangedEvent
	private readonly stage: stageEvents.CeresStakingRewardsChangedEvent
	private readonly test: testEvents.CeresStakingRewardsChangedEvent
	private readonly dev: devEvents.CeresStakingRewardsChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingRewardsChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingRewardsChangedEvent(ctx, event)
		this.test = new testEvents.CeresStakingRewardsChangedEvent(ctx, event)
		this.dev = new devEvents.CeresStakingRewardsChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresStakingRewardsChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresStakingRewardsChangedEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresStakingWithdrawnEvent {
	private readonly production: productionEvents.CeresStakingWithdrawnEvent
	private readonly stage: stageEvents.CeresStakingWithdrawnEvent
	private readonly test: testEvents.CeresStakingWithdrawnEvent
	private readonly dev: devEvents.CeresStakingWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingWithdrawnEvent(ctx, event)
		this.test = new testEvents.CeresStakingWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresStakingWithdrawnEvent(ctx, event)
	}

	get isV19(): productionEvents.CeresStakingWithdrawnEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.CeresStakingWithdrawnEvent['asV19'] {
		return this.production.asV19
	}
}

export class CeresTokenLockerFeeChangedEvent {
	private readonly production: productionEvents.CeresTokenLockerFeeChangedEvent
	private readonly stage: stageEvents.CeresTokenLockerFeeChangedEvent
	private readonly test: testEvents.CeresTokenLockerFeeChangedEvent
	private readonly dev: devEvents.CeresTokenLockerFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
		this.test = new testEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerFeeChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerFeeChangedEvent['asV26'] {
		return this.production.asV26
	}
}

export class CeresTokenLockerLockedEvent {
	private readonly production: productionEvents.CeresTokenLockerLockedEvent
	private readonly stage: stageEvents.CeresTokenLockerLockedEvent
	private readonly test: testEvents.CeresTokenLockerLockedEvent
	private readonly dev: devEvents.CeresTokenLockerLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerLockedEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerLockedEvent(ctx, event)
		this.test = new testEvents.CeresTokenLockerLockedEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerLockedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerLockedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerLockedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresTokenLockerLockedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresTokenLockerLockedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CeresTokenLockerWithdrawnEvent {
	private readonly production: productionEvents.CeresTokenLockerWithdrawnEvent
	private readonly stage: stageEvents.CeresTokenLockerWithdrawnEvent
	private readonly test: testEvents.CeresTokenLockerWithdrawnEvent
	private readonly dev: devEvents.CeresTokenLockerWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
		this.test = new testEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresTokenLockerWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresTokenLockerWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
}

export class CouncilApprovedEvent {
	private readonly production: productionEvents.CouncilApprovedEvent
	private readonly stage: stageEvents.CouncilApprovedEvent
	private readonly test: testEvents.CouncilApprovedEvent
	private readonly dev: devEvents.CouncilApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilApprovedEvent(ctx, event)
		this.stage = new stageEvents.CouncilApprovedEvent(ctx, event)
		this.test = new testEvents.CouncilApprovedEvent(ctx, event)
		this.dev = new devEvents.CouncilApprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilApprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilApprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilApprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilApprovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CouncilClosedEvent {
	private readonly production: productionEvents.CouncilClosedEvent
	private readonly stage: stageEvents.CouncilClosedEvent
	private readonly test: testEvents.CouncilClosedEvent
	private readonly dev: devEvents.CouncilClosedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilClosedEvent(ctx, event)
		this.stage = new stageEvents.CouncilClosedEvent(ctx, event)
		this.test = new testEvents.CouncilClosedEvent(ctx, event)
		this.dev = new devEvents.CouncilClosedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilClosedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilClosedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilClosedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilClosedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CouncilDisapprovedEvent {
	private readonly production: productionEvents.CouncilDisapprovedEvent
	private readonly stage: stageEvents.CouncilDisapprovedEvent
	private readonly test: testEvents.CouncilDisapprovedEvent
	private readonly dev: devEvents.CouncilDisapprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilDisapprovedEvent(ctx, event)
		this.stage = new stageEvents.CouncilDisapprovedEvent(ctx, event)
		this.test = new testEvents.CouncilDisapprovedEvent(ctx, event)
		this.dev = new devEvents.CouncilDisapprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilDisapprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilDisapprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilDisapprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilDisapprovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CouncilExecutedEvent {
	private readonly production: productionEvents.CouncilExecutedEvent
	private readonly stage: stageEvents.CouncilExecutedEvent
	private readonly test: testEvents.CouncilExecutedEvent
	private readonly dev: devEvents.CouncilExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilExecutedEvent(ctx, event)
		this.stage = new stageEvents.CouncilExecutedEvent(ctx, event)
		this.test = new testEvents.CouncilExecutedEvent(ctx, event)
		this.dev = new devEvents.CouncilExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.CouncilExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.CouncilExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class CouncilMemberExecutedEvent {
	private readonly production: productionEvents.CouncilMemberExecutedEvent
	private readonly stage: stageEvents.CouncilMemberExecutedEvent
	private readonly test: testEvents.CouncilMemberExecutedEvent
	private readonly dev: devEvents.CouncilMemberExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilMemberExecutedEvent(ctx, event)
		this.stage = new stageEvents.CouncilMemberExecutedEvent(ctx, event)
		this.test = new testEvents.CouncilMemberExecutedEvent(ctx, event)
		this.dev = new devEvents.CouncilMemberExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilMemberExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilMemberExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilMemberExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilMemberExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.CouncilMemberExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.CouncilMemberExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class CouncilProposedEvent {
	private readonly production: productionEvents.CouncilProposedEvent
	private readonly stage: stageEvents.CouncilProposedEvent
	private readonly test: testEvents.CouncilProposedEvent
	private readonly dev: devEvents.CouncilProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilProposedEvent(ctx, event)
		this.stage = new stageEvents.CouncilProposedEvent(ctx, event)
		this.test = new testEvents.CouncilProposedEvent(ctx, event)
		this.dev = new devEvents.CouncilProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilProposedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CouncilVotedEvent {
	private readonly production: productionEvents.CouncilVotedEvent
	private readonly stage: stageEvents.CouncilVotedEvent
	private readonly test: testEvents.CouncilVotedEvent
	private readonly dev: devEvents.CouncilVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilVotedEvent(ctx, event)
		this.stage = new stageEvents.CouncilVotedEvent(ctx, event)
		this.test = new testEvents.CouncilVotedEvent(ctx, event)
		this.dev = new devEvents.CouncilVotedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilVotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilVotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilVotedEvent['asV42'] {
		return this.production.asV42
	}
}

export class CurrenciesBalanceUpdatedEvent {
	private readonly production: productionEvents.CurrenciesBalanceUpdatedEvent
	private readonly stage: stageEvents.CurrenciesBalanceUpdatedEvent
	private readonly test: testEvents.CurrenciesBalanceUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesBalanceUpdatedEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesBalanceUpdatedEvent(ctx, event)
		this.test = new testEvents.CurrenciesBalanceUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesBalanceUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesBalanceUpdatedEvent['asV1'] {
		return this.production.asV1
	}
}

export class CurrenciesDepositedEvent {
	private readonly production: productionEvents.CurrenciesDepositedEvent
	private readonly stage: stageEvents.CurrenciesDepositedEvent
	private readonly test: testEvents.CurrenciesDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesDepositedEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesDepositedEvent(ctx, event)
		this.test = new testEvents.CurrenciesDepositedEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesDepositedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesDepositedEvent['asV1'] {
		return this.production.asV1
	}
}

export class CurrenciesTransferredEvent {
	private readonly production: productionEvents.CurrenciesTransferredEvent
	private readonly stage: stageEvents.CurrenciesTransferredEvent
	private readonly test: testEvents.CurrenciesTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesTransferredEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesTransferredEvent(ctx, event)
		this.test = new testEvents.CurrenciesTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesTransferredEvent['asV1'] {
		return this.production.asV1
	}
}

export class CurrenciesWithdrawnEvent {
	private readonly production: productionEvents.CurrenciesWithdrawnEvent
	private readonly stage: stageEvents.CurrenciesWithdrawnEvent
	private readonly test: testEvents.CurrenciesWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesWithdrawnEvent(ctx, event)
		this.test = new testEvents.CurrenciesWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
}

export class DexapiDirectExchangeEvent {
	private readonly production: productionEvents.DexapiDirectExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DexapiDirectExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.DexapiDirectExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DexapiDirectExchangeEvent['asV1'] {
		return this.production.asV1
	}
}

export class DemeterFarmingPlatformDepositFeeChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent
	private readonly test: testEvents.DemeterFarmingPlatformDepositFeeChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformDepositFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformDepositedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformDepositedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformDepositedEvent
	private readonly test: testEvents.DemeterFarmingPlatformDepositedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformInfoChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformInfoChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformInfoChangedEvent
	private readonly test: testEvents.DemeterFarmingPlatformInfoChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformInfoChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
	}

	get isV35(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformMultiplierChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformMultiplierChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformMultiplierChangedEvent
	private readonly test: testEvents.DemeterFarmingPlatformMultiplierChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformMultiplierChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformPoolAddedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformPoolAddedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformPoolAddedEvent
	private readonly test: testEvents.DemeterFarmingPlatformPoolAddedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformPoolAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformPoolRemovedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformPoolRemovedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformPoolRemovedEvent
	private readonly test: testEvents.DemeterFarmingPlatformPoolRemovedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformPoolRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformRewardWithdrawnEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent
	private readonly test: testEvents.DemeterFarmingPlatformRewardWithdrawnEvent
	private readonly dev: devEvents.DemeterFarmingPlatformRewardWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformTokenInfoChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent
	private readonly test: testEvents.DemeterFarmingPlatformTokenInfoChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTokenInfoChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemeterFarmingPlatformTokenRegisteredEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTokenRegisteredEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTokenRegisteredEvent
	private readonly test: testEvents.DemeterFarmingPlatformTokenRegisteredEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTokenRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemeterFarmingPlatformTotalTokensChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent
	private readonly test: testEvents.DemeterFarmingPlatformTotalTokensChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTotalTokensChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
	}

	get isV35(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformWithdrawnEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformWithdrawnEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformWithdrawnEvent
	private readonly test: testEvents.DemeterFarmingPlatformWithdrawnEvent
	private readonly dev: devEvents.DemeterFarmingPlatformWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
		this.test = new testEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV43'] {
		return this.production.asV43
	}
}

export class DemocracyBlacklistedEvent {
	private readonly production: productionEvents.DemocracyBlacklistedEvent
	private readonly stage: stageEvents.DemocracyBlacklistedEvent
	private readonly test: testEvents.DemocracyBlacklistedEvent
	private readonly dev: devEvents.DemocracyBlacklistedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyBlacklistedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyBlacklistedEvent(ctx, event)
		this.test = new testEvents.DemocracyBlacklistedEvent(ctx, event)
		this.dev = new devEvents.DemocracyBlacklistedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyBlacklistedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyBlacklistedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyBlacklistedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyBlacklistedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyCancelledEvent {
	private readonly production: productionEvents.DemocracyCancelledEvent
	private readonly stage: stageEvents.DemocracyCancelledEvent
	private readonly test: testEvents.DemocracyCancelledEvent
	private readonly dev: devEvents.DemocracyCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyCancelledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyCancelledEvent(ctx, event)
		this.test = new testEvents.DemocracyCancelledEvent(ctx, event)
		this.dev = new devEvents.DemocracyCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyCancelledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyCancelledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyCancelledEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyDelegatedEvent {
	private readonly production: productionEvents.DemocracyDelegatedEvent
	private readonly stage: stageEvents.DemocracyDelegatedEvent
	private readonly test: testEvents.DemocracyDelegatedEvent
	private readonly dev: devEvents.DemocracyDelegatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyDelegatedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyDelegatedEvent(ctx, event)
		this.test = new testEvents.DemocracyDelegatedEvent(ctx, event)
		this.dev = new devEvents.DemocracyDelegatedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyDelegatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyDelegatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyDelegatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyDelegatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyExecutedEvent {
	private readonly production: productionEvents.DemocracyExecutedEvent
	private readonly stage: stageEvents.DemocracyExecutedEvent
	private readonly test: testEvents.DemocracyExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyExecutedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyExecutedEvent(ctx, event)
		this.test = new testEvents.DemocracyExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyExecutedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyExternalTabledEvent {
	private readonly production: productionEvents.DemocracyExternalTabledEvent
	private readonly stage: stageEvents.DemocracyExternalTabledEvent
	private readonly test: testEvents.DemocracyExternalTabledEvent
	private readonly dev: devEvents.DemocracyExternalTabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyExternalTabledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyExternalTabledEvent(ctx, event)
		this.test = new testEvents.DemocracyExternalTabledEvent(ctx, event)
		this.dev = new devEvents.DemocracyExternalTabledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyExternalTabledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyExternalTabledEvent['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNotPassedEvent {
	private readonly production: productionEvents.DemocracyNotPassedEvent
	private readonly stage: stageEvents.DemocracyNotPassedEvent
	private readonly test: testEvents.DemocracyNotPassedEvent
	private readonly dev: devEvents.DemocracyNotPassedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyNotPassedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyNotPassedEvent(ctx, event)
		this.test = new testEvents.DemocracyNotPassedEvent(ctx, event)
		this.dev = new devEvents.DemocracyNotPassedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyNotPassedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyNotPassedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyNotPassedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyNotPassedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPassedEvent {
	private readonly production: productionEvents.DemocracyPassedEvent
	private readonly stage: stageEvents.DemocracyPassedEvent
	private readonly test: testEvents.DemocracyPassedEvent
	private readonly dev: devEvents.DemocracyPassedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPassedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPassedEvent(ctx, event)
		this.test = new testEvents.DemocracyPassedEvent(ctx, event)
		this.dev = new devEvents.DemocracyPassedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPassedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPassedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPassedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPassedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPreimageInvalidEvent {
	private readonly production: productionEvents.DemocracyPreimageInvalidEvent
	private readonly stage: stageEvents.DemocracyPreimageInvalidEvent
	private readonly test: testEvents.DemocracyPreimageInvalidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageInvalidEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageInvalidEvent(ctx, event)
		this.test = new testEvents.DemocracyPreimageInvalidEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageInvalidEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageInvalidEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageInvalidEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageInvalidEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPreimageMissingEvent {
	private readonly production: productionEvents.DemocracyPreimageMissingEvent
	private readonly stage: stageEvents.DemocracyPreimageMissingEvent
	private readonly test: testEvents.DemocracyPreimageMissingEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageMissingEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageMissingEvent(ctx, event)
		this.test = new testEvents.DemocracyPreimageMissingEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageMissingEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageMissingEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageMissingEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageMissingEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPreimageNotedEvent {
	private readonly production: productionEvents.DemocracyPreimageNotedEvent
	private readonly stage: stageEvents.DemocracyPreimageNotedEvent
	private readonly test: testEvents.DemocracyPreimageNotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageNotedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageNotedEvent(ctx, event)
		this.test = new testEvents.DemocracyPreimageNotedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageNotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageNotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageNotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageNotedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPreimageReapedEvent {
	private readonly production: productionEvents.DemocracyPreimageReapedEvent
	private readonly stage: stageEvents.DemocracyPreimageReapedEvent
	private readonly test: testEvents.DemocracyPreimageReapedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageReapedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageReapedEvent(ctx, event)
		this.test = new testEvents.DemocracyPreimageReapedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageReapedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageReapedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageReapedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageReapedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPreimageUsedEvent {
	private readonly production: productionEvents.DemocracyPreimageUsedEvent
	private readonly stage: stageEvents.DemocracyPreimageUsedEvent
	private readonly test: testEvents.DemocracyPreimageUsedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageUsedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageUsedEvent(ctx, event)
		this.test = new testEvents.DemocracyPreimageUsedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageUsedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageUsedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageUsedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageUsedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyProposalCanceledEvent {
	private readonly production: productionEvents.DemocracyProposalCanceledEvent
	private readonly stage: stageEvents.DemocracyProposalCanceledEvent
	private readonly test: testEvents.DemocracyProposalCanceledEvent
	private readonly dev: devEvents.DemocracyProposalCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyProposalCanceledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyProposalCanceledEvent(ctx, event)
		this.test = new testEvents.DemocracyProposalCanceledEvent(ctx, event)
		this.dev = new devEvents.DemocracyProposalCanceledEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracyProposalCanceledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyProposalCanceledEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyProposedEvent {
	private readonly production: productionEvents.DemocracyProposedEvent
	private readonly stage: stageEvents.DemocracyProposedEvent
	private readonly test: testEvents.DemocracyProposedEvent
	private readonly dev: devEvents.DemocracyProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyProposedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyProposedEvent(ctx, event)
		this.test = new testEvents.DemocracyProposedEvent(ctx, event)
		this.dev = new devEvents.DemocracyProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyProposedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracySecondedEvent {
	private readonly production: productionEvents.DemocracySecondedEvent
	private readonly stage: stageEvents.DemocracySecondedEvent
	private readonly test: testEvents.DemocracySecondedEvent
	private readonly dev: devEvents.DemocracySecondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracySecondedEvent(ctx, event)
		this.stage = new stageEvents.DemocracySecondedEvent(ctx, event)
		this.test = new testEvents.DemocracySecondedEvent(ctx, event)
		this.dev = new devEvents.DemocracySecondedEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracySecondedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracySecondedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyStartedEvent {
	private readonly production: productionEvents.DemocracyStartedEvent
	private readonly stage: stageEvents.DemocracyStartedEvent
	private readonly test: testEvents.DemocracyStartedEvent
	private readonly dev: devEvents.DemocracyStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyStartedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyStartedEvent(ctx, event)
		this.test = new testEvents.DemocracyStartedEvent(ctx, event)
		this.dev = new devEvents.DemocracyStartedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyStartedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyStartedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyStartedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyTabledEvent {
	private readonly production: productionEvents.DemocracyTabledEvent
	private readonly stage: stageEvents.DemocracyTabledEvent
	private readonly test: testEvents.DemocracyTabledEvent
	private readonly dev: devEvents.DemocracyTabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyTabledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyTabledEvent(ctx, event)
		this.test = new testEvents.DemocracyTabledEvent(ctx, event)
		this.dev = new devEvents.DemocracyTabledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyTabledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyTabledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyTabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyTabledEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.DemocracyTabledEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.DemocracyTabledEvent['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyUndelegatedEvent {
	private readonly production: productionEvents.DemocracyUndelegatedEvent
	private readonly stage: stageEvents.DemocracyUndelegatedEvent
	private readonly test: testEvents.DemocracyUndelegatedEvent
	private readonly dev: devEvents.DemocracyUndelegatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyUndelegatedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyUndelegatedEvent(ctx, event)
		this.test = new testEvents.DemocracyUndelegatedEvent(ctx, event)
		this.dev = new devEvents.DemocracyUndelegatedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyUndelegatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyUndelegatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyUndelegatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyUndelegatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyUnlockedEvent {
	private readonly production: productionEvents.DemocracyUnlockedEvent
	private readonly stage: stageEvents.DemocracyUnlockedEvent
	private readonly test: testEvents.DemocracyUnlockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyUnlockedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyUnlockedEvent(ctx, event)
		this.test = new testEvents.DemocracyUnlockedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyUnlockedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyUnlockedEvent['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyVetoedEvent {
	private readonly production: productionEvents.DemocracyVetoedEvent
	private readonly stage: stageEvents.DemocracyVetoedEvent
	private readonly test: testEvents.DemocracyVetoedEvent
	private readonly dev: devEvents.DemocracyVetoedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyVetoedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyVetoedEvent(ctx, event)
		this.test = new testEvents.DemocracyVetoedEvent(ctx, event)
		this.dev = new devEvents.DemocracyVetoedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyVetoedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyVetoedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyVetoedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyVetoedEvent['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyVotedEvent {
	private readonly production: productionEvents.DemocracyVotedEvent
	private readonly stage: stageEvents.DemocracyVotedEvent
	private readonly test: testEvents.DemocracyVotedEvent
	private readonly dev: devEvents.DemocracyVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyVotedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyVotedEvent(ctx, event)
		this.test = new testEvents.DemocracyVotedEvent(ctx, event)
		this.dev = new devEvents.DemocracyVotedEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracyVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyVotedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseElectionFailedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseElectionFailedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseElectionFailedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseElectionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.ElectionProviderMultiPhaseElectionFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseElectionFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseElectionFinalizedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV53'] {
		return this.production.asV53
	}
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent
	private readonly test: testEvents.ElectionProviderMultiPhasePhaseTransitionedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
	}

	get isV53(): productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['asV53'] {
		return this.production.asV53
	}
}

export class ElectionProviderMultiPhaseRewardedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseRewardedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseRewardedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseRewardedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseRewardedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseRewardedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSignedPhaseStartedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSlashedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSlashedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSlashedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseSlashedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSlashedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseSolutionStoredEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseSolutionStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV53'] {
		return this.production.asV53
	}
}

export class ElectionProviderMultiPhaseUnsignedPhaseStartedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent
	private readonly test: testEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent(ctx, event)
		this.test = new testEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenCandidateSlashedEvent {
	private readonly production: productionEvents.ElectionsPhragmenCandidateSlashedEvent
	private readonly stage: stageEvents.ElectionsPhragmenCandidateSlashedEvent
	private readonly test: testEvents.ElectionsPhragmenCandidateSlashedEvent
	private readonly dev: devEvents.ElectionsPhragmenCandidateSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenElectionErrorEvent {
	private readonly production: productionEvents.ElectionsPhragmenElectionErrorEvent
	private readonly stage: stageEvents.ElectionsPhragmenElectionErrorEvent
	private readonly test: testEvents.ElectionsPhragmenElectionErrorEvent
	private readonly dev: devEvents.ElectionsPhragmenElectionErrorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenElectionErrorEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenElectionErrorEvent['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenEmptyTermEvent {
	private readonly production: productionEvents.ElectionsPhragmenEmptyTermEvent
	private readonly stage: stageEvents.ElectionsPhragmenEmptyTermEvent
	private readonly test: testEvents.ElectionsPhragmenEmptyTermEvent
	private readonly dev: devEvents.ElectionsPhragmenEmptyTermEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenEmptyTermEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenEmptyTermEvent['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenMemberKickedEvent {
	private readonly production: productionEvents.ElectionsPhragmenMemberKickedEvent
	private readonly stage: stageEvents.ElectionsPhragmenMemberKickedEvent
	private readonly test: testEvents.ElectionsPhragmenMemberKickedEvent
	private readonly dev: devEvents.ElectionsPhragmenMemberKickedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenMemberKickedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenMemberKickedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenMemberKickedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenMemberKickedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenNewTermEvent {
	private readonly production: productionEvents.ElectionsPhragmenNewTermEvent
	private readonly stage: stageEvents.ElectionsPhragmenNewTermEvent
	private readonly test: testEvents.ElectionsPhragmenNewTermEvent
	private readonly dev: devEvents.ElectionsPhragmenNewTermEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenNewTermEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenNewTermEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenNewTermEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenNewTermEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenNewTermEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenNewTermEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenNewTermEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenNewTermEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenRenouncedEvent {
	private readonly production: productionEvents.ElectionsPhragmenRenouncedEvent
	private readonly stage: stageEvents.ElectionsPhragmenRenouncedEvent
	private readonly test: testEvents.ElectionsPhragmenRenouncedEvent
	private readonly dev: devEvents.ElectionsPhragmenRenouncedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenRenouncedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenRenouncedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenRenouncedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenRenouncedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenSeatHolderSlashedEvent {
	private readonly production: productionEvents.ElectionsPhragmenSeatHolderSlashedEvent
	private readonly stage: stageEvents.ElectionsPhragmenSeatHolderSlashedEvent
	private readonly test: testEvents.ElectionsPhragmenSeatHolderSlashedEvent
	private readonly dev: devEvents.ElectionsPhragmenSeatHolderSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
		this.test = new testEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeApprovalsCollectedEvent {
	private readonly production: productionEvents.EthBridgeApprovalsCollectedEvent
	private readonly stage: stageEvents.EthBridgeApprovalsCollectedEvent
	private readonly test: testEvents.EthBridgeApprovalsCollectedEvent
	private readonly dev: devEvents.EthBridgeApprovalsCollectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
		this.test = new testEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeApprovalsCollectedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeApprovalsCollectedEvent['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeCancellationFailedEvent {
	private readonly production: productionEvents.EthBridgeCancellationFailedEvent
	private readonly stage: stageEvents.EthBridgeCancellationFailedEvent
	private readonly test: testEvents.EthBridgeCancellationFailedEvent
	private readonly dev: devEvents.EthBridgeCancellationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeCancellationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeCancellationFailedEvent(ctx, event)
		this.test = new testEvents.EthBridgeCancellationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeCancellationFailedEvent(ctx, event)
	}

	get isV3(): productionEvents.EthBridgeCancellationFailedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.EthBridgeCancellationFailedEvent['asV3'] {
		return this.production.asV3
	}
}

export class EthBridgeIncomingRequestFinalizationFailedEvent {
	private readonly production: productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent
	private readonly stage: stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent
	private readonly test: testEvents.EthBridgeIncomingRequestFinalizationFailedEvent
	private readonly dev: devEvents.EthBridgeIncomingRequestFinalizationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
		this.test = new testEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeIncomingRequestFinalizedEvent {
	private readonly production: productionEvents.EthBridgeIncomingRequestFinalizedEvent
	private readonly stage: stageEvents.EthBridgeIncomingRequestFinalizedEvent
	private readonly test: testEvents.EthBridgeIncomingRequestFinalizedEvent
	private readonly dev: devEvents.EthBridgeIncomingRequestFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
		this.test = new testEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeIncomingRequestFinalizedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeIncomingRequestFinalizedEvent['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRegisterRequestFailedEvent {
	private readonly production: productionEvents.EthBridgeRegisterRequestFailedEvent
	private readonly stage: stageEvents.EthBridgeRegisterRequestFailedEvent
	private readonly test: testEvents.EthBridgeRegisterRequestFailedEvent
	private readonly dev: devEvents.EthBridgeRegisterRequestFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
		this.test = new testEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.EthBridgeRegisterRequestFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.EthBridgeRegisterRequestFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class EthBridgeRequestAbortedEvent {
	private readonly production: productionEvents.EthBridgeRequestAbortedEvent
	private readonly stage: stageEvents.EthBridgeRequestAbortedEvent
	private readonly test: testEvents.EthBridgeRequestAbortedEvent
	private readonly dev: devEvents.EthBridgeRequestAbortedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestAbortedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestAbortedEvent(ctx, event)
		this.test = new testEvents.EthBridgeRequestAbortedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestAbortedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestAbortedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestAbortedEvent['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRequestFinalizationFailedEvent {
	private readonly production: productionEvents.EthBridgeRequestFinalizationFailedEvent
	private readonly stage: stageEvents.EthBridgeRequestFinalizationFailedEvent
	private readonly test: testEvents.EthBridgeRequestFinalizationFailedEvent
	private readonly dev: devEvents.EthBridgeRequestFinalizationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
		this.test = new testEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestFinalizationFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestFinalizationFailedEvent['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRequestRegisteredEvent {
	private readonly production: productionEvents.EthBridgeRequestRegisteredEvent
	private readonly stage: stageEvents.EthBridgeRequestRegisteredEvent
	private readonly test: testEvents.EthBridgeRequestRegisteredEvent
	private readonly dev: devEvents.EthBridgeRequestRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestRegisteredEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestRegisteredEvent(ctx, event)
		this.test = new testEvents.EthBridgeRequestRegisteredEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestRegisteredEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestRegisteredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestRegisteredEvent['asV1'] {
		return this.production.asV1
	}
}

export class FaucetTransferredEvent {
	private readonly production: productionEvents.FaucetTransferredEvent
	private readonly stage: stageEvents.FaucetTransferredEvent
	private readonly test: testEvents.FaucetTransferredEvent
	private readonly dev: devEvents.FaucetTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.FaucetTransferredEvent(ctx, event)
		this.stage = new stageEvents.FaucetTransferredEvent(ctx, event)
		this.test = new testEvents.FaucetTransferredEvent(ctx, event)
		this.dev = new devEvents.FaucetTransferredEvent(ctx, event)
	}

	get isV22(): productionEvents.FaucetTransferredEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.FaucetTransferredEvent['asV22'] {
		return this.production.asV22
	}
}

export class GrandpaNewAuthoritiesEvent {
	private readonly production: productionEvents.GrandpaNewAuthoritiesEvent
	private readonly stage: stageEvents.GrandpaNewAuthoritiesEvent
	private readonly test: testEvents.GrandpaNewAuthoritiesEvent
	private readonly dev: devEvents.GrandpaNewAuthoritiesEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaNewAuthoritiesEvent(ctx, event)
		this.stage = new stageEvents.GrandpaNewAuthoritiesEvent(ctx, event)
		this.test = new testEvents.GrandpaNewAuthoritiesEvent(ctx, event)
		this.dev = new devEvents.GrandpaNewAuthoritiesEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaNewAuthoritiesEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaNewAuthoritiesEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.GrandpaNewAuthoritiesEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.GrandpaNewAuthoritiesEvent['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaPausedEvent {
	private readonly production: productionEvents.GrandpaPausedEvent
	private readonly stage: stageEvents.GrandpaPausedEvent
	private readonly test: testEvents.GrandpaPausedEvent
	private readonly dev: devEvents.GrandpaPausedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaPausedEvent(ctx, event)
		this.stage = new stageEvents.GrandpaPausedEvent(ctx, event)
		this.test = new testEvents.GrandpaPausedEvent(ctx, event)
		this.dev = new devEvents.GrandpaPausedEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaPausedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaPausedEvent['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaResumedEvent {
	private readonly production: productionEvents.GrandpaResumedEvent
	private readonly stage: stageEvents.GrandpaResumedEvent
	private readonly test: testEvents.GrandpaResumedEvent
	private readonly dev: devEvents.GrandpaResumedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaResumedEvent(ctx, event)
		this.stage = new stageEvents.GrandpaResumedEvent(ctx, event)
		this.test = new testEvents.GrandpaResumedEvent(ctx, event)
		this.dev = new devEvents.GrandpaResumedEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaResumedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaResumedEvent['asV1'] {
		return this.production.asV1
	}
}

export class HermesGovernancePlatformCreatedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformCreatedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformCreatedEvent
	private readonly test: testEvents.HermesGovernancePlatformCreatedEvent
	private readonly dev: devEvents.HermesGovernancePlatformCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformCreatedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformCreatedEvent['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionEvents.HermesGovernancePlatformCreatedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.HermesGovernancePlatformCreatedEvent['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformCreatorFundsWithdrawnEvent {
	private readonly production: productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent
	private readonly stage: stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent
	private readonly test: testEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent
	private readonly dev: devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent
	private readonly test: testEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent
	private readonly dev: devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformMinimumHermesForVotingChangedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent
	private readonly test: testEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent
	private readonly dev: devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformVotedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformVotedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformVotedEvent
	private readonly test: testEvents.HermesGovernancePlatformVotedEvent
	private readonly dev: devEvents.HermesGovernancePlatformVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformVotedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformVotedEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformVotedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformVotedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformVotedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformVotedEvent['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionEvents.HermesGovernancePlatformVotedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.HermesGovernancePlatformVotedEvent['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformVoterFundsWithdrawnEvent {
	private readonly production: productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent
	private readonly stage: stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent
	private readonly test: testEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent
	private readonly dev: devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
		this.test = new testEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['asV47'] {
		return this.production.asV47
	}
}

export class IdentityIdentityClearedEvent {
	private readonly production: productionEvents.IdentityIdentityClearedEvent
	private readonly stage: stageEvents.IdentityIdentityClearedEvent
	private readonly test: testEvents.IdentityIdentityClearedEvent
	private readonly dev: devEvents.IdentityIdentityClearedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentityClearedEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentityClearedEvent(ctx, event)
		this.test = new testEvents.IdentityIdentityClearedEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentityClearedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentityClearedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentityClearedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentityClearedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentityClearedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityIdentityKilledEvent {
	private readonly production: productionEvents.IdentityIdentityKilledEvent
	private readonly stage: stageEvents.IdentityIdentityKilledEvent
	private readonly test: testEvents.IdentityIdentityKilledEvent
	private readonly dev: devEvents.IdentityIdentityKilledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentityKilledEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentityKilledEvent(ctx, event)
		this.test = new testEvents.IdentityIdentityKilledEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentityKilledEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentityKilledEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentityKilledEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentityKilledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentityKilledEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityIdentitySetEvent {
	private readonly production: productionEvents.IdentityIdentitySetEvent
	private readonly stage: stageEvents.IdentityIdentitySetEvent
	private readonly test: testEvents.IdentityIdentitySetEvent
	private readonly dev: devEvents.IdentityIdentitySetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentitySetEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentitySetEvent(ctx, event)
		this.test = new testEvents.IdentityIdentitySetEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentitySetEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentitySetEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentitySetEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentitySetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentitySetEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityJudgementGivenEvent {
	private readonly production: productionEvents.IdentityJudgementGivenEvent
	private readonly stage: stageEvents.IdentityJudgementGivenEvent
	private readonly test: testEvents.IdentityJudgementGivenEvent
	private readonly dev: devEvents.IdentityJudgementGivenEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementGivenEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementGivenEvent(ctx, event)
		this.test = new testEvents.IdentityJudgementGivenEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementGivenEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementGivenEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementGivenEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementGivenEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementGivenEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityJudgementRequestedEvent {
	private readonly production: productionEvents.IdentityJudgementRequestedEvent
	private readonly stage: stageEvents.IdentityJudgementRequestedEvent
	private readonly test: testEvents.IdentityJudgementRequestedEvent
	private readonly dev: devEvents.IdentityJudgementRequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementRequestedEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementRequestedEvent(ctx, event)
		this.test = new testEvents.IdentityJudgementRequestedEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementRequestedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementRequestedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementRequestedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementRequestedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementRequestedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityJudgementUnrequestedEvent {
	private readonly production: productionEvents.IdentityJudgementUnrequestedEvent
	private readonly stage: stageEvents.IdentityJudgementUnrequestedEvent
	private readonly test: testEvents.IdentityJudgementUnrequestedEvent
	private readonly dev: devEvents.IdentityJudgementUnrequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementUnrequestedEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementUnrequestedEvent(ctx, event)
		this.test = new testEvents.IdentityJudgementUnrequestedEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementUnrequestedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementUnrequestedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementUnrequestedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementUnrequestedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementUnrequestedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentityRegistrarAddedEvent {
	private readonly production: productionEvents.IdentityRegistrarAddedEvent
	private readonly stage: stageEvents.IdentityRegistrarAddedEvent
	private readonly test: testEvents.IdentityRegistrarAddedEvent
	private readonly dev: devEvents.IdentityRegistrarAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityRegistrarAddedEvent(ctx, event)
		this.stage = new stageEvents.IdentityRegistrarAddedEvent(ctx, event)
		this.test = new testEvents.IdentityRegistrarAddedEvent(ctx, event)
		this.dev = new devEvents.IdentityRegistrarAddedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityRegistrarAddedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityRegistrarAddedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityRegistrarAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityRegistrarAddedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentitySubIdentityAddedEvent {
	private readonly production: productionEvents.IdentitySubIdentityAddedEvent
	private readonly stage: stageEvents.IdentitySubIdentityAddedEvent
	private readonly test: testEvents.IdentitySubIdentityAddedEvent
	private readonly dev: devEvents.IdentitySubIdentityAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityAddedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityAddedEvent(ctx, event)
		this.test = new testEvents.IdentitySubIdentityAddedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityAddedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityAddedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityAddedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityAddedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentitySubIdentityRemovedEvent {
	private readonly production: productionEvents.IdentitySubIdentityRemovedEvent
	private readonly stage: stageEvents.IdentitySubIdentityRemovedEvent
	private readonly test: testEvents.IdentitySubIdentityRemovedEvent
	private readonly dev: devEvents.IdentitySubIdentityRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityRemovedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityRemovedEvent(ctx, event)
		this.test = new testEvents.IdentitySubIdentityRemovedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityRemovedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityRemovedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityRemovedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityRemovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class IdentitySubIdentityRevokedEvent {
	private readonly production: productionEvents.IdentitySubIdentityRevokedEvent
	private readonly stage: stageEvents.IdentitySubIdentityRevokedEvent
	private readonly test: testEvents.IdentitySubIdentityRevokedEvent
	private readonly dev: devEvents.IdentitySubIdentityRevokedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityRevokedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityRevokedEvent(ctx, event)
		this.test = new testEvents.IdentitySubIdentityRevokedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityRevokedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityRevokedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityRevokedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityRevokedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityRevokedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ImOnlineAllGoodEvent {
	private readonly production: productionEvents.ImOnlineAllGoodEvent
	private readonly stage: stageEvents.ImOnlineAllGoodEvent
	private readonly test: testEvents.ImOnlineAllGoodEvent
	private readonly dev: devEvents.ImOnlineAllGoodEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineAllGoodEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineAllGoodEvent(ctx, event)
		this.test = new testEvents.ImOnlineAllGoodEvent(ctx, event)
		this.dev = new devEvents.ImOnlineAllGoodEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineAllGoodEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineAllGoodEvent['asV1'] {
		return this.production.asV1
	}
}

export class ImOnlineHeartbeatReceivedEvent {
	private readonly production: productionEvents.ImOnlineHeartbeatReceivedEvent
	private readonly stage: stageEvents.ImOnlineHeartbeatReceivedEvent
	private readonly test: testEvents.ImOnlineHeartbeatReceivedEvent
	private readonly dev: devEvents.ImOnlineHeartbeatReceivedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
		this.test = new testEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
		this.dev = new devEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineHeartbeatReceivedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineHeartbeatReceivedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ImOnlineHeartbeatReceivedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ImOnlineHeartbeatReceivedEvent['asV42'] {
		return this.production.asV42
	}
}

export class ImOnlineSomeOfflineEvent {
	private readonly production: productionEvents.ImOnlineSomeOfflineEvent
	private readonly stage: stageEvents.ImOnlineSomeOfflineEvent
	private readonly test: testEvents.ImOnlineSomeOfflineEvent
	private readonly dev: devEvents.ImOnlineSomeOfflineEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineSomeOfflineEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineSomeOfflineEvent(ctx, event)
		this.test = new testEvents.ImOnlineSomeOfflineEvent(ctx, event)
		this.dev = new devEvents.ImOnlineSomeOfflineEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineSomeOfflineEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineSomeOfflineEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ImOnlineSomeOfflineEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ImOnlineSomeOfflineEvent['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationMigratedEvent {
	private readonly production: productionEvents.IrohaMigrationMigratedEvent
	private readonly stage: stageEvents.IrohaMigrationMigratedEvent
	private readonly test: testEvents.IrohaMigrationMigratedEvent
	private readonly dev: devEvents.IrohaMigrationMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IrohaMigrationMigratedEvent(ctx, event)
		this.stage = new stageEvents.IrohaMigrationMigratedEvent(ctx, event)
		this.test = new testEvents.IrohaMigrationMigratedEvent(ctx, event)
		this.dev = new devEvents.IrohaMigrationMigratedEvent(ctx, event)
	}

	get isV1(): productionEvents.IrohaMigrationMigratedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.IrohaMigrationMigratedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.IrohaMigrationMigratedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IrohaMigrationMigratedEvent['asV42'] {
		return this.production.asV42
	}
}

export class LiquidityProxyBatchSwapExecutedEvent {
	private readonly production: productionEvents.LiquidityProxyBatchSwapExecutedEvent
	private readonly stage: stageEvents.LiquidityProxyBatchSwapExecutedEvent
	private readonly test: testEvents.LiquidityProxyBatchSwapExecutedEvent
	private readonly dev: devEvents.LiquidityProxyBatchSwapExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
		this.test = new testEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
	}

	get isV57(): productionEvents.LiquidityProxyBatchSwapExecutedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.LiquidityProxyBatchSwapExecutedEvent['asV57'] {
		return this.production.asV57
	}
}

export class LiquidityProxyExchangeEvent {
	private readonly production: productionEvents.LiquidityProxyExchangeEvent
	private readonly stage: stageEvents.LiquidityProxyExchangeEvent
	private readonly test: testEvents.LiquidityProxyExchangeEvent
	private readonly dev: devEvents.LiquidityProxyExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyExchangeEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyExchangeEvent(ctx, event)
		this.test = new testEvents.LiquidityProxyExchangeEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.LiquidityProxyExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.LiquidityProxyExchangeEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.LiquidityProxyExchangeEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyExchangeEvent['asV42'] {
		return this.production.asV42
	}
	get isV64Dev(): devEvents.LiquidityProxyExchangeEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.LiquidityProxyExchangeEvent['asV64'] {
		return this.dev.asV64
	}
}

export class LiquidityProxyLiquiditySourceDisabledEvent {
	private readonly production: productionEvents.LiquidityProxyLiquiditySourceDisabledEvent
	private readonly stage: stageEvents.LiquidityProxyLiquiditySourceDisabledEvent
	private readonly test: testEvents.LiquidityProxyLiquiditySourceDisabledEvent
	private readonly dev: devEvents.LiquidityProxyLiquiditySourceDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
		this.test = new testEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
	}

	get isV38(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV42'] {
		return this.production.asV42
	}
}

export class LiquidityProxyLiquiditySourceEnabledEvent {
	private readonly production: productionEvents.LiquidityProxyLiquiditySourceEnabledEvent
	private readonly stage: stageEvents.LiquidityProxyLiquiditySourceEnabledEvent
	private readonly test: testEvents.LiquidityProxyLiquiditySourceEnabledEvent
	private readonly dev: devEvents.LiquidityProxyLiquiditySourceEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
		this.test = new testEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
	}

	get isV38(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent
	private readonly test: testEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
		this.test = new testEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolPoolInitializedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent
	private readonly test: testEvents.MulticollateralBondingCurvePoolPoolInitializedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
		this.test = new testEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolPriceBiasChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent
	private readonly test: testEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
		this.test = new testEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['asV22'] {
		return this.production.asV22
	}
}

export class MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent
	private readonly test: testEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
		this.test = new testEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['asV22'] {
		return this.production.asV22
	}
}

export class MulticollateralBondingCurvePoolReferenceAssetChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent
	private readonly test: testEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
		this.test = new testEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV42'] {
		return this.production.asV42
	}
}

export class MultisigMultisigApprovalEvent {
	private readonly production: productionEvents.MultisigMultisigApprovalEvent
	private readonly stage: stageEvents.MultisigMultisigApprovalEvent
	private readonly test: testEvents.MultisigMultisigApprovalEvent
	private readonly dev: devEvents.MultisigMultisigApprovalEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigApprovalEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigApprovalEvent(ctx, event)
		this.test = new testEvents.MultisigMultisigApprovalEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigApprovalEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigApprovalEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigApprovalEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigApprovalEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigApprovalEvent['asV42'] {
		return this.production.asV42
	}
}

export class MultisigMultisigCancelledEvent {
	private readonly production: productionEvents.MultisigMultisigCancelledEvent
	private readonly stage: stageEvents.MultisigMultisigCancelledEvent
	private readonly test: testEvents.MultisigMultisigCancelledEvent
	private readonly dev: devEvents.MultisigMultisigCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigCancelledEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigCancelledEvent(ctx, event)
		this.test = new testEvents.MultisigMultisigCancelledEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigCancelledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigCancelledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigCancelledEvent['asV42'] {
		return this.production.asV42
	}
}

export class MultisigMultisigExecutedEvent {
	private readonly production: productionEvents.MultisigMultisigExecutedEvent
	private readonly stage: stageEvents.MultisigMultisigExecutedEvent
	private readonly test: testEvents.MultisigMultisigExecutedEvent
	private readonly dev: devEvents.MultisigMultisigExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigExecutedEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigExecutedEvent(ctx, event)
		this.test = new testEvents.MultisigMultisigExecutedEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.MultisigMultisigExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.MultisigMultisigExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class MultisigNewMultisigEvent {
	private readonly production: productionEvents.MultisigNewMultisigEvent
	private readonly stage: stageEvents.MultisigNewMultisigEvent
	private readonly test: testEvents.MultisigNewMultisigEvent
	private readonly dev: devEvents.MultisigNewMultisigEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigNewMultisigEvent(ctx, event)
		this.stage = new stageEvents.MultisigNewMultisigEvent(ctx, event)
		this.test = new testEvents.MultisigNewMultisigEvent(ctx, event)
		this.dev = new devEvents.MultisigNewMultisigEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigNewMultisigEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigNewMultisigEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigNewMultisigEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigNewMultisigEvent['asV42'] {
		return this.production.asV42
	}
}

export class MultisigVerifierNetworkInitializedEvent {
	private readonly production: productionEvents.MultisigVerifierNetworkInitializedEvent
	private readonly stage: stageEvents.MultisigVerifierNetworkInitializedEvent
	private readonly test: testEvents.MultisigVerifierNetworkInitializedEvent
	private readonly dev: devEvents.MultisigVerifierNetworkInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
		this.stage = new stageEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
		this.test = new testEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
	}

	get isV64(): productionEvents.MultisigVerifierNetworkInitializedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.MultisigVerifierNetworkInitializedEvent['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierPeerAddedEvent {
	private readonly production: productionEvents.MultisigVerifierPeerAddedEvent
	private readonly stage: stageEvents.MultisigVerifierPeerAddedEvent
	private readonly test: testEvents.MultisigVerifierPeerAddedEvent
	private readonly dev: devEvents.MultisigVerifierPeerAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigVerifierPeerAddedEvent(ctx, event)
		this.stage = new stageEvents.MultisigVerifierPeerAddedEvent(ctx, event)
		this.test = new testEvents.MultisigVerifierPeerAddedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierPeerAddedEvent(ctx, event)
	}

	get isV64(): productionEvents.MultisigVerifierPeerAddedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.MultisigVerifierPeerAddedEvent['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierPeerRemovedEvent {
	private readonly production: productionEvents.MultisigVerifierPeerRemovedEvent
	private readonly stage: stageEvents.MultisigVerifierPeerRemovedEvent
	private readonly test: testEvents.MultisigVerifierPeerRemovedEvent
	private readonly dev: devEvents.MultisigVerifierPeerRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
		this.stage = new stageEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
		this.test = new testEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
	}

	get isV64(): productionEvents.MultisigVerifierPeerRemovedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.MultisigVerifierPeerRemovedEvent['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierVerificationSuccessfulEvent {
	private readonly production: productionEvents.MultisigVerifierVerificationSuccessfulEvent
	private readonly stage: stageEvents.MultisigVerifierVerificationSuccessfulEvent
	private readonly test: testEvents.MultisigVerifierVerificationSuccessfulEvent
	private readonly dev: devEvents.MultisigVerifierVerificationSuccessfulEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
		this.stage = new stageEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
		this.test = new testEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
	}

	get isV64(): productionEvents.MultisigVerifierVerificationSuccessfulEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.MultisigVerifierVerificationSuccessfulEvent['asV64'] {
		return this.production.asV64
	}
}

export class OffencesOffenceEvent {
	private readonly production: productionEvents.OffencesOffenceEvent
	private readonly stage: stageEvents.OffencesOffenceEvent
	private readonly test: testEvents.OffencesOffenceEvent
	private readonly dev: devEvents.OffencesOffenceEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OffencesOffenceEvent(ctx, event)
		this.stage = new stageEvents.OffencesOffenceEvent(ctx, event)
		this.test = new testEvents.OffencesOffenceEvent(ctx, event)
		this.dev = new devEvents.OffencesOffenceEvent(ctx, event)
	}

	get isV1(): productionEvents.OffencesOffenceEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.OffencesOffenceEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.OffencesOffenceEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.OffencesOffenceEvent['asV42'] {
		return this.production.asV42
	}
}

export class OracleProxyOracleDisabledEvent {
	private readonly production: productionEvents.OracleProxyOracleDisabledEvent
	private readonly stage: stageEvents.OracleProxyOracleDisabledEvent
	private readonly test: testEvents.OracleProxyOracleDisabledEvent
	private readonly dev: devEvents.OracleProxyOracleDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OracleProxyOracleDisabledEvent(ctx, event)
		this.stage = new stageEvents.OracleProxyOracleDisabledEvent(ctx, event)
		this.test = new testEvents.OracleProxyOracleDisabledEvent(ctx, event)
		this.dev = new devEvents.OracleProxyOracleDisabledEvent(ctx, event)
	}

	get isV45(): productionEvents.OracleProxyOracleDisabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.OracleProxyOracleDisabledEvent['asV45'] {
		return this.production.asV45
	}
}

export class OracleProxyOracleEnabledEvent {
	private readonly production: productionEvents.OracleProxyOracleEnabledEvent
	private readonly stage: stageEvents.OracleProxyOracleEnabledEvent
	private readonly test: testEvents.OracleProxyOracleEnabledEvent
	private readonly dev: devEvents.OracleProxyOracleEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OracleProxyOracleEnabledEvent(ctx, event)
		this.stage = new stageEvents.OracleProxyOracleEnabledEvent(ctx, event)
		this.test = new testEvents.OracleProxyOracleEnabledEvent(ctx, event)
		this.dev = new devEvents.OracleProxyOracleEnabledEvent(ctx, event)
	}

	get isV45(): productionEvents.OracleProxyOracleEnabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.OracleProxyOracleEnabledEvent['asV45'] {
		return this.production.asV45
	}
}

export class ParachainBridgeAppBurnedEvent {
	private readonly production: productionEvents.ParachainBridgeAppBurnedEvent
	private readonly stage: stageEvents.ParachainBridgeAppBurnedEvent
	private readonly test: testEvents.ParachainBridgeAppBurnedEvent
	private readonly dev: devEvents.ParachainBridgeAppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ParachainBridgeAppBurnedEvent(ctx, event)
		this.stage = new stageEvents.ParachainBridgeAppBurnedEvent(ctx, event)
		this.test = new testEvents.ParachainBridgeAppBurnedEvent(ctx, event)
		this.dev = new devEvents.ParachainBridgeAppBurnedEvent(ctx, event)
	}

	get isV64(): productionEvents.ParachainBridgeAppBurnedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.ParachainBridgeAppBurnedEvent['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppMintedEvent {
	private readonly production: productionEvents.ParachainBridgeAppMintedEvent
	private readonly stage: stageEvents.ParachainBridgeAppMintedEvent
	private readonly test: testEvents.ParachainBridgeAppMintedEvent
	private readonly dev: devEvents.ParachainBridgeAppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ParachainBridgeAppMintedEvent(ctx, event)
		this.stage = new stageEvents.ParachainBridgeAppMintedEvent(ctx, event)
		this.test = new testEvents.ParachainBridgeAppMintedEvent(ctx, event)
		this.dev = new devEvents.ParachainBridgeAppMintedEvent(ctx, event)
	}

	get isV64(): productionEvents.ParachainBridgeAppMintedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.ParachainBridgeAppMintedEvent['asV64'] {
		return this.production.asV64
	}
}

export class PermissionsPermissionAssignedEvent {
	private readonly production: productionEvents.PermissionsPermissionAssignedEvent
	private readonly stage: stageEvents.PermissionsPermissionAssignedEvent
	private readonly test: testEvents.PermissionsPermissionAssignedEvent
	private readonly dev: devEvents.PermissionsPermissionAssignedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionAssignedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionAssignedEvent(ctx, event)
		this.test = new testEvents.PermissionsPermissionAssignedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionAssignedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionAssignedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionAssignedEvent['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsPermissionCreatedEvent {
	private readonly production: productionEvents.PermissionsPermissionCreatedEvent
	private readonly stage: stageEvents.PermissionsPermissionCreatedEvent
	private readonly test: testEvents.PermissionsPermissionCreatedEvent
	private readonly dev: devEvents.PermissionsPermissionCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionCreatedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionCreatedEvent(ctx, event)
		this.test = new testEvents.PermissionsPermissionCreatedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionCreatedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionCreatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionCreatedEvent['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsPermissionGrantedEvent {
	private readonly production: productionEvents.PermissionsPermissionGrantedEvent
	private readonly stage: stageEvents.PermissionsPermissionGrantedEvent
	private readonly test: testEvents.PermissionsPermissionGrantedEvent
	private readonly dev: devEvents.PermissionsPermissionGrantedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionGrantedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionGrantedEvent(ctx, event)
		this.test = new testEvents.PermissionsPermissionGrantedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionGrantedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionGrantedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionGrantedEvent['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsPermissionTransferedEvent {
	private readonly production: productionEvents.PermissionsPermissionTransferedEvent
	private readonly stage: stageEvents.PermissionsPermissionTransferedEvent
	private readonly test: testEvents.PermissionsPermissionTransferedEvent
	private readonly dev: devEvents.PermissionsPermissionTransferedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionTransferedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionTransferedEvent(ctx, event)
		this.test = new testEvents.PermissionsPermissionTransferedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionTransferedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionTransferedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionTransferedEvent['asV1'] {
		return this.production.asV1
	}
}

export class PoolXykPoolIsInitializedEvent {
	private readonly production: productionEvents.PoolXykPoolIsInitializedEvent
	private readonly stage: stageEvents.PoolXykPoolIsInitializedEvent
	private readonly test: testEvents.PoolXykPoolIsInitializedEvent
	private readonly dev: devEvents.PoolXykPoolIsInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PoolXykPoolIsInitializedEvent(ctx, event)
		this.stage = new stageEvents.PoolXykPoolIsInitializedEvent(ctx, event)
		this.test = new testEvents.PoolXykPoolIsInitializedEvent(ctx, event)
		this.dev = new devEvents.PoolXykPoolIsInitializedEvent(ctx, event)
	}

	get isV1(): productionEvents.PoolXykPoolIsInitializedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PoolXykPoolIsInitializedEvent['asV1'] {
		return this.production.asV1
	}
}

export class PreimageClearedEvent {
	private readonly production: productionEvents.PreimageClearedEvent
	private readonly stage: stageEvents.PreimageClearedEvent
	private readonly test: testEvents.PreimageClearedEvent
	private readonly dev: devEvents.PreimageClearedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageClearedEvent(ctx, event)
		this.stage = new stageEvents.PreimageClearedEvent(ctx, event)
		this.test = new testEvents.PreimageClearedEvent(ctx, event)
		this.dev = new devEvents.PreimageClearedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageClearedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageClearedEvent['asV53'] {
		return this.production.asV53
	}
}

export class PreimageNotedEvent {
	private readonly production: productionEvents.PreimageNotedEvent
	private readonly stage: stageEvents.PreimageNotedEvent
	private readonly test: testEvents.PreimageNotedEvent
	private readonly dev: devEvents.PreimageNotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageNotedEvent(ctx, event)
		this.stage = new stageEvents.PreimageNotedEvent(ctx, event)
		this.test = new testEvents.PreimageNotedEvent(ctx, event)
		this.dev = new devEvents.PreimageNotedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageNotedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageNotedEvent['asV53'] {
		return this.production.asV53
	}
}

export class PreimageRequestedEvent {
	private readonly production: productionEvents.PreimageRequestedEvent
	private readonly stage: stageEvents.PreimageRequestedEvent
	private readonly test: testEvents.PreimageRequestedEvent
	private readonly dev: devEvents.PreimageRequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageRequestedEvent(ctx, event)
		this.stage = new stageEvents.PreimageRequestedEvent(ctx, event)
		this.test = new testEvents.PreimageRequestedEvent(ctx, event)
		this.dev = new devEvents.PreimageRequestedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageRequestedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageRequestedEvent['asV53'] {
		return this.production.asV53
	}
}

export class PswapDistributionBurnRateChangedEvent {
	private readonly production: productionEvents.PswapDistributionBurnRateChangedEvent
	private readonly stage: stageEvents.PswapDistributionBurnRateChangedEvent
	private readonly test: testEvents.PswapDistributionBurnRateChangedEvent
	private readonly dev: devEvents.PswapDistributionBurnRateChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
		this.test = new testEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionBurnRateChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionBurnRateChangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionBurnRateChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionBurnRateChangedEvent['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionFeesExchangeFailedEvent {
	private readonly production: productionEvents.PswapDistributionFeesExchangeFailedEvent
	private readonly stage: stageEvents.PswapDistributionFeesExchangeFailedEvent
	private readonly test: testEvents.PswapDistributionFeesExchangeFailedEvent
	private readonly dev: devEvents.PswapDistributionFeesExchangeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
		this.test = new testEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV46'] {
		return this.production.asV46
	}
	get isV53(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class PswapDistributionFeesExchangedEvent {
	private readonly production: productionEvents.PswapDistributionFeesExchangedEvent
	private readonly stage: stageEvents.PswapDistributionFeesExchangedEvent
	private readonly test: testEvents.PswapDistributionFeesExchangedEvent
	private readonly dev: devEvents.PswapDistributionFeesExchangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionFeesExchangedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionFeesExchangedEvent(ctx, event)
		this.test = new testEvents.PswapDistributionFeesExchangedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionFeesExchangedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionFeesExchangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionFeesExchangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionFeesExchangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionFeesExchangedEvent['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionIncentiveDistributedEvent {
	private readonly production: productionEvents.PswapDistributionIncentiveDistributedEvent
	private readonly stage: stageEvents.PswapDistributionIncentiveDistributedEvent
	private readonly test: testEvents.PswapDistributionIncentiveDistributedEvent
	private readonly dev: devEvents.PswapDistributionIncentiveDistributedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
		this.test = new testEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentiveDistributedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentiveDistributedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionIncentiveDistributedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionIncentiveDistributedEvent['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionIncentiveDistributionFailedEvent {
	private readonly production: productionEvents.PswapDistributionIncentiveDistributionFailedEvent
	private readonly stage: stageEvents.PswapDistributionIncentiveDistributionFailedEvent
	private readonly test: testEvents.PswapDistributionIncentiveDistributionFailedEvent
	private readonly dev: devEvents.PswapDistributionIncentiveDistributionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
		this.test = new testEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV8(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['isV8'] {
		return this.production.isV8
	}
	get asV8(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['asV8'] {
		return this.production.asV8
	}
}

export class PswapDistributionIncentivesBurnedAfterExchangeEvent {
	private readonly production: productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent
	private readonly stage: stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent
	private readonly test: testEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent
	private readonly dev: devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
		this.test = new testEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionNothingToDistributeEvent {
	private readonly production: productionEvents.PswapDistributionNothingToDistributeEvent
	private readonly stage: stageEvents.PswapDistributionNothingToDistributeEvent
	private readonly test: testEvents.PswapDistributionNothingToDistributeEvent
	private readonly dev: devEvents.PswapDistributionNothingToDistributeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
		this.test = new testEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionNothingToDistributeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionNothingToDistributeEvent['asV1'] {
		return this.production.asV1
	}
}

export class PswapDistributionNothingToExchangeEvent {
	private readonly production: productionEvents.PswapDistributionNothingToExchangeEvent
	private readonly stage: stageEvents.PswapDistributionNothingToExchangeEvent
	private readonly test: testEvents.PswapDistributionNothingToExchangeEvent
	private readonly dev: devEvents.PswapDistributionNothingToExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
		this.test = new testEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionNothingToExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionNothingToExchangeEvent['asV1'] {
		return this.production.asV1
	}
}

export class RewardsClaimedEvent {
	private readonly production: productionEvents.RewardsClaimedEvent
	private readonly stage: stageEvents.RewardsClaimedEvent
	private readonly test: testEvents.RewardsClaimedEvent
	private readonly dev: devEvents.RewardsClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.RewardsClaimedEvent(ctx, event)
		this.stage = new stageEvents.RewardsClaimedEvent(ctx, event)
		this.test = new testEvents.RewardsClaimedEvent(ctx, event)
		this.dev = new devEvents.RewardsClaimedEvent(ctx, event)
	}

	get isV1(): productionEvents.RewardsClaimedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.RewardsClaimedEvent['asV1'] {
		return this.production.asV1
	}
}

export class RewardsMigrationCompletedEvent {
	private readonly production: productionEvents.RewardsMigrationCompletedEvent
	private readonly stage: stageEvents.RewardsMigrationCompletedEvent
	private readonly test: testEvents.RewardsMigrationCompletedEvent
	private readonly dev: devEvents.RewardsMigrationCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.RewardsMigrationCompletedEvent(ctx, event)
		this.stage = new stageEvents.RewardsMigrationCompletedEvent(ctx, event)
		this.test = new testEvents.RewardsMigrationCompletedEvent(ctx, event)
		this.dev = new devEvents.RewardsMigrationCompletedEvent(ctx, event)
	}

	get isV19(): productionEvents.RewardsMigrationCompletedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.RewardsMigrationCompletedEvent['asV19'] {
		return this.production.asV19
	}
}

export class SchedulerCallLookupFailedEvent {
	private readonly production: productionEvents.SchedulerCallLookupFailedEvent
	private readonly stage: stageEvents.SchedulerCallLookupFailedEvent
	private readonly test: testEvents.SchedulerCallLookupFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCallLookupFailedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCallLookupFailedEvent(ctx, event)
		this.test = new testEvents.SchedulerCallLookupFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.SchedulerCallLookupFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerCallLookupFailedEvent['asV42'] {
		return this.production.asV42
	}
}

export class SchedulerCallUnavailableEvent {
	private readonly production: productionEvents.SchedulerCallUnavailableEvent
	private readonly stage: stageEvents.SchedulerCallUnavailableEvent
	private readonly test: testEvents.SchedulerCallUnavailableEvent
	private readonly dev: devEvents.SchedulerCallUnavailableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCallUnavailableEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCallUnavailableEvent(ctx, event)
		this.test = new testEvents.SchedulerCallUnavailableEvent(ctx, event)
		this.dev = new devEvents.SchedulerCallUnavailableEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerCallUnavailableEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerCallUnavailableEvent['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerCanceledEvent {
	private readonly production: productionEvents.SchedulerCanceledEvent
	private readonly stage: stageEvents.SchedulerCanceledEvent
	private readonly test: testEvents.SchedulerCanceledEvent
	private readonly dev: devEvents.SchedulerCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCanceledEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCanceledEvent(ctx, event)
		this.test = new testEvents.SchedulerCanceledEvent(ctx, event)
		this.dev = new devEvents.SchedulerCanceledEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerCanceledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerCanceledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerCanceledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerCanceledEvent['asV42'] {
		return this.production.asV42
	}
}

export class SchedulerDispatchedEvent {
	private readonly production: productionEvents.SchedulerDispatchedEvent
	private readonly stage: stageEvents.SchedulerDispatchedEvent
	private readonly test: testEvents.SchedulerDispatchedEvent
	private readonly dev: devEvents.SchedulerDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerDispatchedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerDispatchedEvent(ctx, event)
		this.test = new testEvents.SchedulerDispatchedEvent(ctx, event)
		this.dev = new devEvents.SchedulerDispatchedEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerDispatchedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerDispatchedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerDispatchedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerDispatchedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SchedulerDispatchedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerDispatchedEvent['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerPeriodicFailedEvent {
	private readonly production: productionEvents.SchedulerPeriodicFailedEvent
	private readonly stage: stageEvents.SchedulerPeriodicFailedEvent
	private readonly test: testEvents.SchedulerPeriodicFailedEvent
	private readonly dev: devEvents.SchedulerPeriodicFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerPeriodicFailedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerPeriodicFailedEvent(ctx, event)
		this.test = new testEvents.SchedulerPeriodicFailedEvent(ctx, event)
		this.dev = new devEvents.SchedulerPeriodicFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerPeriodicFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerPeriodicFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerPermanentlyOverweightEvent {
	private readonly production: productionEvents.SchedulerPermanentlyOverweightEvent
	private readonly stage: stageEvents.SchedulerPermanentlyOverweightEvent
	private readonly test: testEvents.SchedulerPermanentlyOverweightEvent
	private readonly dev: devEvents.SchedulerPermanentlyOverweightEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
		this.stage = new stageEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
		this.test = new testEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
		this.dev = new devEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerPermanentlyOverweightEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerPermanentlyOverweightEvent['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerScheduledEvent {
	private readonly production: productionEvents.SchedulerScheduledEvent
	private readonly stage: stageEvents.SchedulerScheduledEvent
	private readonly test: testEvents.SchedulerScheduledEvent
	private readonly dev: devEvents.SchedulerScheduledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerScheduledEvent(ctx, event)
		this.stage = new stageEvents.SchedulerScheduledEvent(ctx, event)
		this.test = new testEvents.SchedulerScheduledEvent(ctx, event)
		this.dev = new devEvents.SchedulerScheduledEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerScheduledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerScheduledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerScheduledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerScheduledEvent['asV42'] {
		return this.production.asV42
	}
}

export class SessionNewSessionEvent {
	private readonly production: productionEvents.SessionNewSessionEvent
	private readonly stage: stageEvents.SessionNewSessionEvent
	private readonly test: testEvents.SessionNewSessionEvent
	private readonly dev: devEvents.SessionNewSessionEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SessionNewSessionEvent(ctx, event)
		this.stage = new stageEvents.SessionNewSessionEvent(ctx, event)
		this.test = new testEvents.SessionNewSessionEvent(ctx, event)
		this.dev = new devEvents.SessionNewSessionEvent(ctx, event)
	}

	get isV1(): productionEvents.SessionNewSessionEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SessionNewSessionEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SessionNewSessionEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SessionNewSessionEvent['asV42'] {
		return this.production.asV42
	}
}

export class StakingBondedEvent {
	private readonly production: productionEvents.StakingBondedEvent
	private readonly stage: stageEvents.StakingBondedEvent
	private readonly test: testEvents.StakingBondedEvent
	private readonly dev: devEvents.StakingBondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingBondedEvent(ctx, event)
		this.stage = new stageEvents.StakingBondedEvent(ctx, event)
		this.test = new testEvents.StakingBondedEvent(ctx, event)
		this.dev = new devEvents.StakingBondedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingBondedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingBondedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingBondedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingBondedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingChilledEvent {
	private readonly production: productionEvents.StakingChilledEvent
	private readonly stage: stageEvents.StakingChilledEvent
	private readonly test: testEvents.StakingChilledEvent
	private readonly dev: devEvents.StakingChilledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingChilledEvent(ctx, event)
		this.stage = new stageEvents.StakingChilledEvent(ctx, event)
		this.test = new testEvents.StakingChilledEvent(ctx, event)
		this.dev = new devEvents.StakingChilledEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingChilledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingChilledEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingChilledEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingChilledEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingEraPaidEvent {
	private readonly production: productionEvents.StakingEraPaidEvent
	private readonly stage: stageEvents.StakingEraPaidEvent
	private readonly test: testEvents.StakingEraPaidEvent
	private readonly dev: devEvents.StakingEraPaidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingEraPaidEvent(ctx, event)
		this.stage = new stageEvents.StakingEraPaidEvent(ctx, event)
		this.test = new testEvents.StakingEraPaidEvent(ctx, event)
		this.dev = new devEvents.StakingEraPaidEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingEraPaidEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingEraPaidEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingEraPaidEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingEraPaidEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingEraPayoutEvent {
	private readonly production: productionEvents.StakingEraPayoutEvent
	private readonly stage: stageEvents.StakingEraPayoutEvent
	private readonly test: testEvents.StakingEraPayoutEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingEraPayoutEvent(ctx, event)
		this.stage = new stageEvents.StakingEraPayoutEvent(ctx, event)
		this.test = new testEvents.StakingEraPayoutEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingEraPayoutEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingEraPayoutEvent['asV1'] {
		return this.production.asV1
	}
}

export class StakingForceEraEvent {
	private readonly production: productionEvents.StakingForceEraEvent
	private readonly stage: stageEvents.StakingForceEraEvent
	private readonly test: testEvents.StakingForceEraEvent
	private readonly dev: devEvents.StakingForceEraEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingForceEraEvent(ctx, event)
		this.stage = new stageEvents.StakingForceEraEvent(ctx, event)
		this.test = new testEvents.StakingForceEraEvent(ctx, event)
		this.dev = new devEvents.StakingForceEraEvent(ctx, event)
	}

	get isV53(): productionEvents.StakingForceEraEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingForceEraEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingKickedEvent {
	private readonly production: productionEvents.StakingKickedEvent
	private readonly stage: stageEvents.StakingKickedEvent
	private readonly test: testEvents.StakingKickedEvent
	private readonly dev: devEvents.StakingKickedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingKickedEvent(ctx, event)
		this.stage = new stageEvents.StakingKickedEvent(ctx, event)
		this.test = new testEvents.StakingKickedEvent(ctx, event)
		this.dev = new devEvents.StakingKickedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingKickedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingKickedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingKickedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingKickedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingOldSlashingReportDiscardedEvent {
	private readonly production: productionEvents.StakingOldSlashingReportDiscardedEvent
	private readonly stage: stageEvents.StakingOldSlashingReportDiscardedEvent
	private readonly test: testEvents.StakingOldSlashingReportDiscardedEvent
	private readonly dev: devEvents.StakingOldSlashingReportDiscardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
		this.stage = new stageEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
		this.test = new testEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
		this.dev = new devEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingOldSlashingReportDiscardedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingOldSlashingReportDiscardedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingOldSlashingReportDiscardedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingOldSlashingReportDiscardedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingPayoutStartedEvent {
	private readonly production: productionEvents.StakingPayoutStartedEvent
	private readonly stage: stageEvents.StakingPayoutStartedEvent
	private readonly test: testEvents.StakingPayoutStartedEvent
	private readonly dev: devEvents.StakingPayoutStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingPayoutStartedEvent(ctx, event)
		this.stage = new stageEvents.StakingPayoutStartedEvent(ctx, event)
		this.test = new testEvents.StakingPayoutStartedEvent(ctx, event)
		this.dev = new devEvents.StakingPayoutStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingPayoutStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingPayoutStartedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingPayoutStartedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingPayoutStartedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingRewardEvent {
	private readonly production: productionEvents.StakingRewardEvent
	private readonly stage: stageEvents.StakingRewardEvent
	private readonly test: testEvents.StakingRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingRewardEvent(ctx, event)
		this.stage = new stageEvents.StakingRewardEvent(ctx, event)
		this.test = new testEvents.StakingRewardEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingRewardEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingRewardEvent['asV1'] {
		return this.production.asV1
	}
}

export class StakingRewardedEvent {
	private readonly production: productionEvents.StakingRewardedEvent
	private readonly stage: stageEvents.StakingRewardedEvent
	private readonly test: testEvents.StakingRewardedEvent
	private readonly dev: devEvents.StakingRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingRewardedEvent(ctx, event)
		this.stage = new stageEvents.StakingRewardedEvent(ctx, event)
		this.test = new testEvents.StakingRewardedEvent(ctx, event)
		this.dev = new devEvents.StakingRewardedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingRewardedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingRewardedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingRewardedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingRewardedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingSlashEvent {
	private readonly production: productionEvents.StakingSlashEvent
	private readonly stage: stageEvents.StakingSlashEvent
	private readonly test: testEvents.StakingSlashEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashEvent(ctx, event)
		this.test = new testEvents.StakingSlashEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingSlashEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingSlashEvent['asV1'] {
		return this.production.asV1
	}
}

export class StakingSlashReportedEvent {
	private readonly production: productionEvents.StakingSlashReportedEvent
	private readonly stage: stageEvents.StakingSlashReportedEvent
	private readonly test: testEvents.StakingSlashReportedEvent
	private readonly dev: devEvents.StakingSlashReportedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashReportedEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashReportedEvent(ctx, event)
		this.test = new testEvents.StakingSlashReportedEvent(ctx, event)
		this.dev = new devEvents.StakingSlashReportedEvent(ctx, event)
	}

	get isV53(): productionEvents.StakingSlashReportedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingSlashReportedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingSlashedEvent {
	private readonly production: productionEvents.StakingSlashedEvent
	private readonly stage: stageEvents.StakingSlashedEvent
	private readonly test: testEvents.StakingSlashedEvent
	private readonly dev: devEvents.StakingSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashedEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashedEvent(ctx, event)
		this.test = new testEvents.StakingSlashedEvent(ctx, event)
		this.dev = new devEvents.StakingSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingSlashedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingSlashedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingSolutionStoredEvent {
	private readonly production: productionEvents.StakingSolutionStoredEvent
	private readonly stage: stageEvents.StakingSolutionStoredEvent
	private readonly test: testEvents.StakingSolutionStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSolutionStoredEvent(ctx, event)
		this.stage = new stageEvents.StakingSolutionStoredEvent(ctx, event)
		this.test = new testEvents.StakingSolutionStoredEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingSolutionStoredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingSolutionStoredEvent['asV1'] {
		return this.production.asV1
	}
}

export class StakingStakersElectedEvent {
	private readonly production: productionEvents.StakingStakersElectedEvent
	private readonly stage: stageEvents.StakingStakersElectedEvent
	private readonly test: testEvents.StakingStakersElectedEvent
	private readonly dev: devEvents.StakingStakersElectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakersElectedEvent(ctx, event)
		this.stage = new stageEvents.StakingStakersElectedEvent(ctx, event)
		this.test = new testEvents.StakingStakersElectedEvent(ctx, event)
		this.dev = new devEvents.StakingStakersElectedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingStakersElectedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingStakersElectedEvent['asV42'] {
		return this.production.asV42
	}
}

export class StakingStakingElectionEvent {
	private readonly production: productionEvents.StakingStakingElectionEvent
	private readonly stage: stageEvents.StakingStakingElectionEvent
	private readonly test: testEvents.StakingStakingElectionEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakingElectionEvent(ctx, event)
		this.stage = new stageEvents.StakingStakingElectionEvent(ctx, event)
		this.test = new testEvents.StakingStakingElectionEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingStakingElectionEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingStakingElectionEvent['asV1'] {
		return this.production.asV1
	}
}

export class StakingStakingElectionFailedEvent {
	private readonly production: productionEvents.StakingStakingElectionFailedEvent
	private readonly stage: stageEvents.StakingStakingElectionFailedEvent
	private readonly test: testEvents.StakingStakingElectionFailedEvent
	private readonly dev: devEvents.StakingStakingElectionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakingElectionFailedEvent(ctx, event)
		this.stage = new stageEvents.StakingStakingElectionFailedEvent(ctx, event)
		this.test = new testEvents.StakingStakingElectionFailedEvent(ctx, event)
		this.dev = new devEvents.StakingStakingElectionFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingStakingElectionFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingStakingElectionFailedEvent['asV42'] {
		return this.production.asV42
	}
}

export class StakingUnbondedEvent {
	private readonly production: productionEvents.StakingUnbondedEvent
	private readonly stage: stageEvents.StakingUnbondedEvent
	private readonly test: testEvents.StakingUnbondedEvent
	private readonly dev: devEvents.StakingUnbondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingUnbondedEvent(ctx, event)
		this.stage = new stageEvents.StakingUnbondedEvent(ctx, event)
		this.test = new testEvents.StakingUnbondedEvent(ctx, event)
		this.dev = new devEvents.StakingUnbondedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingUnbondedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingUnbondedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingUnbondedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingUnbondedEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingValidatorPrefsSetEvent {
	private readonly production: productionEvents.StakingValidatorPrefsSetEvent
	private readonly stage: stageEvents.StakingValidatorPrefsSetEvent
	private readonly test: testEvents.StakingValidatorPrefsSetEvent
	private readonly dev: devEvents.StakingValidatorPrefsSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingValidatorPrefsSetEvent(ctx, event)
		this.stage = new stageEvents.StakingValidatorPrefsSetEvent(ctx, event)
		this.test = new testEvents.StakingValidatorPrefsSetEvent(ctx, event)
		this.dev = new devEvents.StakingValidatorPrefsSetEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingValidatorPrefsSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingValidatorPrefsSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingValidatorPrefsSetEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingValidatorPrefsSetEvent['asV53'] {
		return this.production.asV53
	}
}

export class StakingWithdrawnEvent {
	private readonly production: productionEvents.StakingWithdrawnEvent
	private readonly stage: stageEvents.StakingWithdrawnEvent
	private readonly test: testEvents.StakingWithdrawnEvent
	private readonly dev: devEvents.StakingWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.StakingWithdrawnEvent(ctx, event)
		this.test = new testEvents.StakingWithdrawnEvent(ctx, event)
		this.dev = new devEvents.StakingWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingWithdrawnEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingWithdrawnEvent['asV53'] {
		return this.production.asV53
	}
}

export class SubstrateBridgeOutboundChannelMessageAcceptedEvent {
	private readonly production: productionEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent
	private readonly stage: stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent
	private readonly test: testEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent
	private readonly dev: devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.stage = new stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.test = new testEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.dev = new devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
	}

	get isV64(): productionEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateDispatchMessageDecodeFailedEvent {
	private readonly production: productionEvents.SubstrateDispatchMessageDecodeFailedEvent
	private readonly stage: stageEvents.SubstrateDispatchMessageDecodeFailedEvent
	private readonly test: testEvents.SubstrateDispatchMessageDecodeFailedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageDecodeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
		this.stage = new stageEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
		this.test = new testEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
	}

	get isV64(): productionEvents.SubstrateDispatchMessageDecodeFailedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.SubstrateDispatchMessageDecodeFailedEvent['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['asV54'] {
		return this.stage.asV54
	}
}

export class SubstrateDispatchMessageDispatchedEvent {
	private readonly production: productionEvents.SubstrateDispatchMessageDispatchedEvent
	private readonly stage: stageEvents.SubstrateDispatchMessageDispatchedEvent
	private readonly test: testEvents.SubstrateDispatchMessageDispatchedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
		this.stage = new stageEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
		this.test = new testEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
	}

	get isV64(): productionEvents.SubstrateDispatchMessageDispatchedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.SubstrateDispatchMessageDispatchedEvent['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['asV54'] {
		return this.stage.asV54
	}
}

export class SubstrateDispatchMessageRejectedEvent {
	private readonly production: productionEvents.SubstrateDispatchMessageRejectedEvent
	private readonly stage: stageEvents.SubstrateDispatchMessageRejectedEvent
	private readonly test: testEvents.SubstrateDispatchMessageRejectedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageRejectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
		this.stage = new stageEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
		this.test = new testEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
	}

	get isV64(): productionEvents.SubstrateDispatchMessageRejectedEvent['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionEvents.SubstrateDispatchMessageRejectedEvent['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['asV54'] {
		return this.stage.asV54
	}
}

export class SudoKeyChangedEvent {
	private readonly production: productionEvents.SudoKeyChangedEvent
	private readonly stage: stageEvents.SudoKeyChangedEvent
	private readonly test: testEvents.SudoKeyChangedEvent
	private readonly dev: devEvents.SudoKeyChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoKeyChangedEvent(ctx, event)
		this.stage = new stageEvents.SudoKeyChangedEvent(ctx, event)
		this.test = new testEvents.SudoKeyChangedEvent(ctx, event)
		this.dev = new devEvents.SudoKeyChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoKeyChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoKeyChangedEvent['asV22'] {
		return this.production.asV22
	}
	get isV42Stage(): stageEvents.SudoKeyChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoKeyChangedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class SudoSudidEvent {
	private readonly production: productionEvents.SudoSudidEvent
	private readonly stage: stageEvents.SudoSudidEvent
	private readonly test: testEvents.SudoSudidEvent
	private readonly dev: devEvents.SudoSudidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoSudidEvent(ctx, event)
		this.stage = new stageEvents.SudoSudidEvent(ctx, event)
		this.test = new testEvents.SudoSudidEvent(ctx, event)
		this.dev = new devEvents.SudoSudidEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoSudidEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoSudidEvent['asV22'] {
		return this.production.asV22
	}
	get isV42Stage(): stageEvents.SudoSudidEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoSudidEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SudoSudidEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SudoSudidEvent['asV52'] {
		return this.stage.asV52
	}
}

export class SudoSudoAsDoneEvent {
	private readonly production: productionEvents.SudoSudoAsDoneEvent
	private readonly stage: stageEvents.SudoSudoAsDoneEvent
	private readonly test: testEvents.SudoSudoAsDoneEvent
	private readonly dev: devEvents.SudoSudoAsDoneEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoSudoAsDoneEvent(ctx, event)
		this.stage = new stageEvents.SudoSudoAsDoneEvent(ctx, event)
		this.test = new testEvents.SudoSudoAsDoneEvent(ctx, event)
		this.dev = new devEvents.SudoSudoAsDoneEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoSudoAsDoneEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoSudoAsDoneEvent['asV22'] {
		return this.production.asV22
	}
	get isV42Stage(): stageEvents.SudoSudoAsDoneEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoSudoAsDoneEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SudoSudoAsDoneEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SudoSudoAsDoneEvent['asV52'] {
		return this.stage.asV52
	}
}

export class SystemCodeUpdatedEvent {
	private readonly production: productionEvents.SystemCodeUpdatedEvent
	private readonly stage: stageEvents.SystemCodeUpdatedEvent
	private readonly test: testEvents.SystemCodeUpdatedEvent
	private readonly dev: devEvents.SystemCodeUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemCodeUpdatedEvent(ctx, event)
		this.stage = new stageEvents.SystemCodeUpdatedEvent(ctx, event)
		this.test = new testEvents.SystemCodeUpdatedEvent(ctx, event)
		this.dev = new devEvents.SystemCodeUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemCodeUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemCodeUpdatedEvent['asV1'] {
		return this.production.asV1
	}
}

export class SystemExtrinsicFailedEvent {
	private readonly production: productionEvents.SystemExtrinsicFailedEvent
	private readonly stage: stageEvents.SystemExtrinsicFailedEvent
	private readonly test: testEvents.SystemExtrinsicFailedEvent
	private readonly dev: devEvents.SystemExtrinsicFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemExtrinsicFailedEvent(ctx, event)
		this.stage = new stageEvents.SystemExtrinsicFailedEvent(ctx, event)
		this.test = new testEvents.SystemExtrinsicFailedEvent(ctx, event)
		this.dev = new devEvents.SystemExtrinsicFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemExtrinsicFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemExtrinsicFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemExtrinsicFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemExtrinsicFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SystemExtrinsicFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SystemExtrinsicFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class SystemExtrinsicSuccessEvent {
	private readonly production: productionEvents.SystemExtrinsicSuccessEvent
	private readonly stage: stageEvents.SystemExtrinsicSuccessEvent
	private readonly test: testEvents.SystemExtrinsicSuccessEvent
	private readonly dev: devEvents.SystemExtrinsicSuccessEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemExtrinsicSuccessEvent(ctx, event)
		this.stage = new stageEvents.SystemExtrinsicSuccessEvent(ctx, event)
		this.test = new testEvents.SystemExtrinsicSuccessEvent(ctx, event)
		this.dev = new devEvents.SystemExtrinsicSuccessEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemExtrinsicSuccessEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemExtrinsicSuccessEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemExtrinsicSuccessEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemExtrinsicSuccessEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SystemExtrinsicSuccessEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SystemExtrinsicSuccessEvent['asV53'] {
		return this.production.asV53
	}
}

export class SystemKilledAccountEvent {
	private readonly production: productionEvents.SystemKilledAccountEvent
	private readonly stage: stageEvents.SystemKilledAccountEvent
	private readonly test: testEvents.SystemKilledAccountEvent
	private readonly dev: devEvents.SystemKilledAccountEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemKilledAccountEvent(ctx, event)
		this.stage = new stageEvents.SystemKilledAccountEvent(ctx, event)
		this.test = new testEvents.SystemKilledAccountEvent(ctx, event)
		this.dev = new devEvents.SystemKilledAccountEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemKilledAccountEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemKilledAccountEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemKilledAccountEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemKilledAccountEvent['asV42'] {
		return this.production.asV42
	}
}

export class SystemNewAccountEvent {
	private readonly production: productionEvents.SystemNewAccountEvent
	private readonly stage: stageEvents.SystemNewAccountEvent
	private readonly test: testEvents.SystemNewAccountEvent
	private readonly dev: devEvents.SystemNewAccountEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemNewAccountEvent(ctx, event)
		this.stage = new stageEvents.SystemNewAccountEvent(ctx, event)
		this.test = new testEvents.SystemNewAccountEvent(ctx, event)
		this.dev = new devEvents.SystemNewAccountEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemNewAccountEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemNewAccountEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemNewAccountEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemNewAccountEvent['asV42'] {
		return this.production.asV42
	}
}

export class SystemRemarkedEvent {
	private readonly production: productionEvents.SystemRemarkedEvent
	private readonly stage: stageEvents.SystemRemarkedEvent
	private readonly test: testEvents.SystemRemarkedEvent
	private readonly dev: devEvents.SystemRemarkedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemRemarkedEvent(ctx, event)
		this.stage = new stageEvents.SystemRemarkedEvent(ctx, event)
		this.test = new testEvents.SystemRemarkedEvent(ctx, event)
		this.dev = new devEvents.SystemRemarkedEvent(ctx, event)
	}

	get isV42(): productionEvents.SystemRemarkedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemRemarkedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalBurnedEvent {
	private readonly production: productionEvents.TechnicalBurnedEvent
	private readonly stage: stageEvents.TechnicalBurnedEvent
	private readonly test: testEvents.TechnicalBurnedEvent
	private readonly dev: devEvents.TechnicalBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalBurnedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalBurnedEvent(ctx, event)
		this.test = new testEvents.TechnicalBurnedEvent(ctx, event)
		this.dev = new devEvents.TechnicalBurnedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalBurnedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalBurnedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalBurnedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalBurnedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalBurnedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalBurnedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalBurnedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalBurnedEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalBurnedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalBurnedEvent['asV57'] {
		return this.production.asV57
	}
}

export class TechnicalInputTransferredEvent {
	private readonly production: productionEvents.TechnicalInputTransferredEvent
	private readonly stage: stageEvents.TechnicalInputTransferredEvent
	private readonly test: testEvents.TechnicalInputTransferredEvent
	private readonly dev: devEvents.TechnicalInputTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalInputTransferredEvent(ctx, event)
		this.stage = new stageEvents.TechnicalInputTransferredEvent(ctx, event)
		this.test = new testEvents.TechnicalInputTransferredEvent(ctx, event)
		this.dev = new devEvents.TechnicalInputTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalInputTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalInputTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalInputTransferredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalInputTransferredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalInputTransferredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalInputTransferredEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalInputTransferredEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalInputTransferredEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalInputTransferredEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalInputTransferredEvent['asV57'] {
		return this.production.asV57
	}
}

export class TechnicalMintedEvent {
	private readonly production: productionEvents.TechnicalMintedEvent
	private readonly stage: stageEvents.TechnicalMintedEvent
	private readonly test: testEvents.TechnicalMintedEvent
	private readonly dev: devEvents.TechnicalMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMintedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMintedEvent(ctx, event)
		this.test = new testEvents.TechnicalMintedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMintedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMintedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMintedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalMintedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalMintedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalMintedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalMintedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalMintedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalMintedEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalMintedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalMintedEvent['asV57'] {
		return this.production.asV57
	}
}

export class TechnicalOutputTransferredEvent {
	private readonly production: productionEvents.TechnicalOutputTransferredEvent
	private readonly stage: stageEvents.TechnicalOutputTransferredEvent
	private readonly test: testEvents.TechnicalOutputTransferredEvent
	private readonly dev: devEvents.TechnicalOutputTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalOutputTransferredEvent(ctx, event)
		this.stage = new stageEvents.TechnicalOutputTransferredEvent(ctx, event)
		this.test = new testEvents.TechnicalOutputTransferredEvent(ctx, event)
		this.dev = new devEvents.TechnicalOutputTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalOutputTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalOutputTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalOutputTransferredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalOutputTransferredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalOutputTransferredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalOutputTransferredEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalOutputTransferredEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalOutputTransferredEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalOutputTransferredEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalOutputTransferredEvent['asV57'] {
		return this.production.asV57
	}
}

export class TechnicalSwapSuccessEvent {
	private readonly production: productionEvents.TechnicalSwapSuccessEvent
	private readonly stage: stageEvents.TechnicalSwapSuccessEvent
	private readonly test: testEvents.TechnicalSwapSuccessEvent
	private readonly dev: devEvents.TechnicalSwapSuccessEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalSwapSuccessEvent(ctx, event)
		this.stage = new stageEvents.TechnicalSwapSuccessEvent(ctx, event)
		this.test = new testEvents.TechnicalSwapSuccessEvent(ctx, event)
		this.dev = new devEvents.TechnicalSwapSuccessEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalSwapSuccessEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalSwapSuccessEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalCommitteeApprovedEvent {
	private readonly production: productionEvents.TechnicalCommitteeApprovedEvent
	private readonly stage: stageEvents.TechnicalCommitteeApprovedEvent
	private readonly test: testEvents.TechnicalCommitteeApprovedEvent
	private readonly dev: devEvents.TechnicalCommitteeApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeApprovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeApprovedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeApprovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeApprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeApprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeApprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeApprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeApprovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeClosedEvent {
	private readonly production: productionEvents.TechnicalCommitteeClosedEvent
	private readonly stage: stageEvents.TechnicalCommitteeClosedEvent
	private readonly test: testEvents.TechnicalCommitteeClosedEvent
	private readonly dev: devEvents.TechnicalCommitteeClosedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeClosedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeClosedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeClosedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeClosedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeClosedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeClosedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeClosedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeClosedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeDisapprovedEvent {
	private readonly production: productionEvents.TechnicalCommitteeDisapprovedEvent
	private readonly stage: stageEvents.TechnicalCommitteeDisapprovedEvent
	private readonly test: testEvents.TechnicalCommitteeDisapprovedEvent
	private readonly dev: devEvents.TechnicalCommitteeDisapprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeDisapprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeDisapprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeDisapprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeDisapprovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeExecutedEvent {
	private readonly production: productionEvents.TechnicalCommitteeExecutedEvent
	private readonly stage: stageEvents.TechnicalCommitteeExecutedEvent
	private readonly test: testEvents.TechnicalCommitteeExecutedEvent
	private readonly dev: devEvents.TechnicalCommitteeExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeExecutedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeExecutedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeExecutedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.TechnicalCommitteeExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TechnicalCommitteeExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class TechnicalCommitteeMemberExecutedEvent {
	private readonly production: productionEvents.TechnicalCommitteeMemberExecutedEvent
	private readonly stage: stageEvents.TechnicalCommitteeMemberExecutedEvent
	private readonly test: testEvents.TechnicalCommitteeMemberExecutedEvent
	private readonly dev: devEvents.TechnicalCommitteeMemberExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV53'] {
		return this.production.asV53
	}
}

export class TechnicalCommitteeProposedEvent {
	private readonly production: productionEvents.TechnicalCommitteeProposedEvent
	private readonly stage: stageEvents.TechnicalCommitteeProposedEvent
	private readonly test: testEvents.TechnicalCommitteeProposedEvent
	private readonly dev: devEvents.TechnicalCommitteeProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeProposedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeProposedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeProposedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeProposedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeVotedEvent {
	private readonly production: productionEvents.TechnicalCommitteeVotedEvent
	private readonly stage: stageEvents.TechnicalCommitteeVotedEvent
	private readonly test: testEvents.TechnicalCommitteeVotedEvent
	private readonly dev: devEvents.TechnicalCommitteeVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeVotedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeVotedEvent(ctx, event)
		this.test = new testEvents.TechnicalCommitteeVotedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeVotedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeVotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeVotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeVotedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalMembershipDummyEvent {
	private readonly production: productionEvents.TechnicalMembershipDummyEvent
	private readonly stage: stageEvents.TechnicalMembershipDummyEvent
	private readonly test: testEvents.TechnicalMembershipDummyEvent
	private readonly dev: devEvents.TechnicalMembershipDummyEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipDummyEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipDummyEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipDummyEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipDummyEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipDummyEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipDummyEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipKeyChangedEvent {
	private readonly production: productionEvents.TechnicalMembershipKeyChangedEvent
	private readonly stage: stageEvents.TechnicalMembershipKeyChangedEvent
	private readonly test: testEvents.TechnicalMembershipKeyChangedEvent
	private readonly dev: devEvents.TechnicalMembershipKeyChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipKeyChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipKeyChangedEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipMemberAddedEvent {
	private readonly production: productionEvents.TechnicalMembershipMemberAddedEvent
	private readonly stage: stageEvents.TechnicalMembershipMemberAddedEvent
	private readonly test: testEvents.TechnicalMembershipMemberAddedEvent
	private readonly dev: devEvents.TechnicalMembershipMemberAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMemberAddedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMemberAddedEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipMemberRemovedEvent {
	private readonly production: productionEvents.TechnicalMembershipMemberRemovedEvent
	private readonly stage: stageEvents.TechnicalMembershipMemberRemovedEvent
	private readonly test: testEvents.TechnicalMembershipMemberRemovedEvent
	private readonly dev: devEvents.TechnicalMembershipMemberRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMemberRemovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMemberRemovedEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipMembersResetEvent {
	private readonly production: productionEvents.TechnicalMembershipMembersResetEvent
	private readonly stage: stageEvents.TechnicalMembershipMembersResetEvent
	private readonly test: testEvents.TechnicalMembershipMembersResetEvent
	private readonly dev: devEvents.TechnicalMembershipMembersResetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMembersResetEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMembersResetEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipMembersResetEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMembersResetEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMembersResetEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMembersResetEvent['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipMembersSwappedEvent {
	private readonly production: productionEvents.TechnicalMembershipMembersSwappedEvent
	private readonly stage: stageEvents.TechnicalMembershipMembersSwappedEvent
	private readonly test: testEvents.TechnicalMembershipMembersSwappedEvent
	private readonly dev: devEvents.TechnicalMembershipMembersSwappedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
		this.test = new testEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMembersSwappedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMembersSwappedEvent['asV1'] {
		return this.production.asV1
	}
}

export class TokensBalanceSetEvent {
	private readonly production: productionEvents.TokensBalanceSetEvent
	private readonly stage: stageEvents.TokensBalanceSetEvent
	private readonly test: testEvents.TokensBalanceSetEvent
	private readonly dev: devEvents.TokensBalanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensBalanceSetEvent(ctx, event)
		this.stage = new stageEvents.TokensBalanceSetEvent(ctx, event)
		this.test = new testEvents.TokensBalanceSetEvent(ctx, event)
		this.dev = new devEvents.TokensBalanceSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensBalanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensBalanceSetEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensDepositedEvent {
	private readonly production: productionEvents.TokensDepositedEvent
	private readonly stage: stageEvents.TokensDepositedEvent
	private readonly test: testEvents.TokensDepositedEvent
	private readonly dev: devEvents.TokensDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensDepositedEvent(ctx, event)
		this.stage = new stageEvents.TokensDepositedEvent(ctx, event)
		this.test = new testEvents.TokensDepositedEvent(ctx, event)
		this.dev = new devEvents.TokensDepositedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensDepositedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensDepositedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensDustLostEvent {
	private readonly production: productionEvents.TokensDustLostEvent
	private readonly stage: stageEvents.TokensDustLostEvent
	private readonly test: testEvents.TokensDustLostEvent
	private readonly dev: devEvents.TokensDustLostEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensDustLostEvent(ctx, event)
		this.stage = new stageEvents.TokensDustLostEvent(ctx, event)
		this.test = new testEvents.TokensDustLostEvent(ctx, event)
		this.dev = new devEvents.TokensDustLostEvent(ctx, event)
	}

	get isV1(): productionEvents.TokensDustLostEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TokensDustLostEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TokensDustLostEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensDustLostEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensEndowedEvent {
	private readonly production: productionEvents.TokensEndowedEvent
	private readonly stage: stageEvents.TokensEndowedEvent
	private readonly test: testEvents.TokensEndowedEvent
	private readonly dev: devEvents.TokensEndowedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensEndowedEvent(ctx, event)
		this.stage = new stageEvents.TokensEndowedEvent(ctx, event)
		this.test = new testEvents.TokensEndowedEvent(ctx, event)
		this.dev = new devEvents.TokensEndowedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensEndowedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensEndowedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensLockRemovedEvent {
	private readonly production: productionEvents.TokensLockRemovedEvent
	private readonly stage: stageEvents.TokensLockRemovedEvent
	private readonly test: testEvents.TokensLockRemovedEvent
	private readonly dev: devEvents.TokensLockRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockRemovedEvent(ctx, event)
		this.stage = new stageEvents.TokensLockRemovedEvent(ctx, event)
		this.test = new testEvents.TokensLockRemovedEvent(ctx, event)
		this.dev = new devEvents.TokensLockRemovedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensLockRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensLockRemovedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensLockSetEvent {
	private readonly production: productionEvents.TokensLockSetEvent
	private readonly stage: stageEvents.TokensLockSetEvent
	private readonly test: testEvents.TokensLockSetEvent
	private readonly dev: devEvents.TokensLockSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockSetEvent(ctx, event)
		this.stage = new stageEvents.TokensLockSetEvent(ctx, event)
		this.test = new testEvents.TokensLockSetEvent(ctx, event)
		this.dev = new devEvents.TokensLockSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensLockSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensLockSetEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensLockedEvent {
	private readonly production: productionEvents.TokensLockedEvent
	private readonly stage: stageEvents.TokensLockedEvent
	private readonly test: testEvents.TokensLockedEvent
	private readonly dev: devEvents.TokensLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockedEvent(ctx, event)
		this.stage = new stageEvents.TokensLockedEvent(ctx, event)
		this.test = new testEvents.TokensLockedEvent(ctx, event)
		this.dev = new devEvents.TokensLockedEvent(ctx, event)
	}

	get isV53(): productionEvents.TokensLockedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TokensLockedEvent['asV53'] {
		return this.production.asV53
	}
}

export class TokensReserveRepatriatedEvent {
	private readonly production: productionEvents.TokensReserveRepatriatedEvent
	private readonly stage: stageEvents.TokensReserveRepatriatedEvent
	private readonly test: testEvents.TokensReserveRepatriatedEvent
	private readonly dev: devEvents.TokensReserveRepatriatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensReserveRepatriatedEvent(ctx, event)
		this.stage = new stageEvents.TokensReserveRepatriatedEvent(ctx, event)
		this.test = new testEvents.TokensReserveRepatriatedEvent(ctx, event)
		this.dev = new devEvents.TokensReserveRepatriatedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensReserveRepatriatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensReserveRepatriatedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensReservedEvent {
	private readonly production: productionEvents.TokensReservedEvent
	private readonly stage: stageEvents.TokensReservedEvent
	private readonly test: testEvents.TokensReservedEvent
	private readonly dev: devEvents.TokensReservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensReservedEvent(ctx, event)
		this.stage = new stageEvents.TokensReservedEvent(ctx, event)
		this.test = new testEvents.TokensReservedEvent(ctx, event)
		this.dev = new devEvents.TokensReservedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensReservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensReservedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensSlashedEvent {
	private readonly production: productionEvents.TokensSlashedEvent
	private readonly stage: stageEvents.TokensSlashedEvent
	private readonly test: testEvents.TokensSlashedEvent
	private readonly dev: devEvents.TokensSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensSlashedEvent(ctx, event)
		this.stage = new stageEvents.TokensSlashedEvent(ctx, event)
		this.test = new testEvents.TokensSlashedEvent(ctx, event)
		this.dev = new devEvents.TokensSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensSlashedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensTotalIssuanceSetEvent {
	private readonly production: productionEvents.TokensTotalIssuanceSetEvent
	private readonly stage: stageEvents.TokensTotalIssuanceSetEvent
	private readonly test: testEvents.TokensTotalIssuanceSetEvent
	private readonly dev: devEvents.TokensTotalIssuanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTotalIssuanceSetEvent(ctx, event)
		this.stage = new stageEvents.TokensTotalIssuanceSetEvent(ctx, event)
		this.test = new testEvents.TokensTotalIssuanceSetEvent(ctx, event)
		this.dev = new devEvents.TokensTotalIssuanceSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensTotalIssuanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensTotalIssuanceSetEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensTransferEvent {
	private readonly production: productionEvents.TokensTransferEvent
	private readonly stage: stageEvents.TokensTransferEvent
	private readonly test: testEvents.TokensTransferEvent
	private readonly dev: devEvents.TokensTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTransferEvent(ctx, event)
		this.stage = new stageEvents.TokensTransferEvent(ctx, event)
		this.test = new testEvents.TokensTransferEvent(ctx, event)
		this.dev = new devEvents.TokensTransferEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensTransferEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensTransferredEvent {
	private readonly production: productionEvents.TokensTransferredEvent
	private readonly stage: stageEvents.TokensTransferredEvent
	private readonly test: testEvents.TokensTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTransferredEvent(ctx, event)
		this.stage = new stageEvents.TokensTransferredEvent(ctx, event)
		this.test = new testEvents.TokensTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TokensTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TokensTransferredEvent['asV1'] {
		return this.production.asV1
	}
}

export class TokensUnlockedEvent {
	private readonly production: productionEvents.TokensUnlockedEvent
	private readonly stage: stageEvents.TokensUnlockedEvent
	private readonly test: testEvents.TokensUnlockedEvent
	private readonly dev: devEvents.TokensUnlockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensUnlockedEvent(ctx, event)
		this.stage = new stageEvents.TokensUnlockedEvent(ctx, event)
		this.test = new testEvents.TokensUnlockedEvent(ctx, event)
		this.dev = new devEvents.TokensUnlockedEvent(ctx, event)
	}

	get isV53(): productionEvents.TokensUnlockedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TokensUnlockedEvent['asV53'] {
		return this.production.asV53
	}
}

export class TokensUnreservedEvent {
	private readonly production: productionEvents.TokensUnreservedEvent
	private readonly stage: stageEvents.TokensUnreservedEvent
	private readonly test: testEvents.TokensUnreservedEvent
	private readonly dev: devEvents.TokensUnreservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensUnreservedEvent(ctx, event)
		this.stage = new stageEvents.TokensUnreservedEvent(ctx, event)
		this.test = new testEvents.TokensUnreservedEvent(ctx, event)
		this.dev = new devEvents.TokensUnreservedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensUnreservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensUnreservedEvent['asV42'] {
		return this.production.asV42
	}
}

export class TokensWithdrawnEvent {
	private readonly production: productionEvents.TokensWithdrawnEvent
	private readonly stage: stageEvents.TokensWithdrawnEvent
	private readonly test: testEvents.TokensWithdrawnEvent
	private readonly dev: devEvents.TokensWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.TokensWithdrawnEvent(ctx, event)
		this.test = new testEvents.TokensWithdrawnEvent(ctx, event)
		this.dev = new devEvents.TokensWithdrawnEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
}

export class TradingPairTradingPairStoredEvent {
	private readonly production: productionEvents.TradingPairTradingPairStoredEvent
	private readonly stage: stageEvents.TradingPairTradingPairStoredEvent
	private readonly test: testEvents.TradingPairTradingPairStoredEvent
	private readonly dev: devEvents.TradingPairTradingPairStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TradingPairTradingPairStoredEvent(ctx, event)
		this.stage = new stageEvents.TradingPairTradingPairStoredEvent(ctx, event)
		this.test = new testEvents.TradingPairTradingPairStoredEvent(ctx, event)
		this.dev = new devEvents.TradingPairTradingPairStoredEvent(ctx, event)
	}

	get isV1(): productionEvents.TradingPairTradingPairStoredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TradingPairTradingPairStoredEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TradingPairTradingPairStoredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TradingPairTradingPairStoredEvent['asV42'] {
		return this.production.asV42
	}
}

export class TransactionPaymentTransactionFeePaidEvent {
	private readonly production: productionEvents.TransactionPaymentTransactionFeePaidEvent
	private readonly stage: stageEvents.TransactionPaymentTransactionFeePaidEvent
	private readonly test: testEvents.TransactionPaymentTransactionFeePaidEvent
	private readonly dev: devEvents.TransactionPaymentTransactionFeePaidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
		this.stage = new stageEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
		this.test = new testEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
		this.dev = new devEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
	}

	get isV53(): productionEvents.TransactionPaymentTransactionFeePaidEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TransactionPaymentTransactionFeePaidEvent['asV53'] {
		return this.production.asV53
	}
}

export class UtilityBatchCompletedEvent {
	private readonly production: productionEvents.UtilityBatchCompletedEvent
	private readonly stage: stageEvents.UtilityBatchCompletedEvent
	private readonly test: testEvents.UtilityBatchCompletedEvent
	private readonly dev: devEvents.UtilityBatchCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchCompletedEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchCompletedEvent(ctx, event)
		this.test = new testEvents.UtilityBatchCompletedEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchCompletedEvent(ctx, event)
	}

	get isV1(): productionEvents.UtilityBatchCompletedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.UtilityBatchCompletedEvent['asV1'] {
		return this.production.asV1
	}
}

export class UtilityBatchCompletedWithErrorsEvent {
	private readonly production: productionEvents.UtilityBatchCompletedWithErrorsEvent
	private readonly stage: stageEvents.UtilityBatchCompletedWithErrorsEvent
	private readonly test: testEvents.UtilityBatchCompletedWithErrorsEvent
	private readonly dev: devEvents.UtilityBatchCompletedWithErrorsEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
		this.test = new testEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityBatchCompletedWithErrorsEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityBatchCompletedWithErrorsEvent['asV42'] {
		return this.production.asV42
	}
}

export class UtilityBatchInterruptedEvent {
	private readonly production: productionEvents.UtilityBatchInterruptedEvent
	private readonly stage: stageEvents.UtilityBatchInterruptedEvent
	private readonly test: testEvents.UtilityBatchInterruptedEvent
	private readonly dev: devEvents.UtilityBatchInterruptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchInterruptedEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchInterruptedEvent(ctx, event)
		this.test = new testEvents.UtilityBatchInterruptedEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchInterruptedEvent(ctx, event)
	}

	get isV1(): productionEvents.UtilityBatchInterruptedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.UtilityBatchInterruptedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.UtilityBatchInterruptedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityBatchInterruptedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityBatchInterruptedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityBatchInterruptedEvent['asV53'] {
		return this.production.asV53
	}
}

export class UtilityDispatchedAsEvent {
	private readonly production: productionEvents.UtilityDispatchedAsEvent
	private readonly stage: stageEvents.UtilityDispatchedAsEvent
	private readonly test: testEvents.UtilityDispatchedAsEvent
	private readonly dev: devEvents.UtilityDispatchedAsEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityDispatchedAsEvent(ctx, event)
		this.stage = new stageEvents.UtilityDispatchedAsEvent(ctx, event)
		this.test = new testEvents.UtilityDispatchedAsEvent(ctx, event)
		this.dev = new devEvents.UtilityDispatchedAsEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityDispatchedAsEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityDispatchedAsEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityDispatchedAsEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityDispatchedAsEvent['asV53'] {
		return this.production.asV53
	}
}

export class UtilityItemCompletedEvent {
	private readonly production: productionEvents.UtilityItemCompletedEvent
	private readonly stage: stageEvents.UtilityItemCompletedEvent
	private readonly test: testEvents.UtilityItemCompletedEvent
	private readonly dev: devEvents.UtilityItemCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityItemCompletedEvent(ctx, event)
		this.stage = new stageEvents.UtilityItemCompletedEvent(ctx, event)
		this.test = new testEvents.UtilityItemCompletedEvent(ctx, event)
		this.dev = new devEvents.UtilityItemCompletedEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityItemCompletedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityItemCompletedEvent['asV42'] {
		return this.production.asV42
	}
}

export class UtilityItemFailedEvent {
	private readonly production: productionEvents.UtilityItemFailedEvent
	private readonly stage: stageEvents.UtilityItemFailedEvent
	private readonly test: testEvents.UtilityItemFailedEvent
	private readonly dev: devEvents.UtilityItemFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityItemFailedEvent(ctx, event)
		this.stage = new stageEvents.UtilityItemFailedEvent(ctx, event)
		this.test = new testEvents.UtilityItemFailedEvent(ctx, event)
		this.dev = new devEvents.UtilityItemFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityItemFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityItemFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityItemFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityItemFailedEvent['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsActualDoesntMatchAvailableEvent {
	private readonly production: productionEvents.VestedRewardsActualDoesntMatchAvailableEvent
	private readonly stage: stageEvents.VestedRewardsActualDoesntMatchAvailableEvent
	private readonly test: testEvents.VestedRewardsActualDoesntMatchAvailableEvent
	private readonly dev: devEvents.VestedRewardsActualDoesntMatchAvailableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
		this.test = new testEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV45'] {
		return this.production.asV45
	}
}

export class VestedRewardsAddingZeroMarketMakerRewardEvent {
	private readonly production: productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent
	private readonly stage: stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent
	private readonly test: testEvents.VestedRewardsAddingZeroMarketMakerRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent(ctx, event)
		this.test = new testEvents.VestedRewardsAddingZeroMarketMakerRewardEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['asV7'] {
		return this.production.asV7
	}
}

export class VestedRewardsCrowdloanClaimedEvent {
	private readonly production: productionEvents.VestedRewardsCrowdloanClaimedEvent
	private readonly stage: stageEvents.VestedRewardsCrowdloanClaimedEvent
	private readonly test: testEvents.VestedRewardsCrowdloanClaimedEvent
	private readonly dev: devEvents.VestedRewardsCrowdloanClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
		this.test = new testEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
	}

	get isV53(): productionEvents.VestedRewardsCrowdloanClaimedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.VestedRewardsCrowdloanClaimedEvent['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsFailedToSaveCalculatedRewardEvent {
	private readonly production: productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent
	private readonly stage: stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent
	private readonly test: testEvents.VestedRewardsFailedToSaveCalculatedRewardEvent
	private readonly dev: devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
		this.test = new testEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['asV7'] {
		return this.production.asV7
	}
}

export class VestedRewardsNoEligibleMarketMakersEvent {
	private readonly production: productionEvents.VestedRewardsNoEligibleMarketMakersEvent
	private readonly stage: stageEvents.VestedRewardsNoEligibleMarketMakersEvent
	private readonly test: testEvents.VestedRewardsNoEligibleMarketMakersEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsNoEligibleMarketMakersEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsNoEligibleMarketMakersEvent(ctx, event)
		this.test = new testEvents.VestedRewardsNoEligibleMarketMakersEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsNoEligibleMarketMakersEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsNoEligibleMarketMakersEvent['asV7'] {
		return this.production.asV7
	}
}

export class VestedRewardsRewardsVestedEvent {
	private readonly production: productionEvents.VestedRewardsRewardsVestedEvent
	private readonly stage: stageEvents.VestedRewardsRewardsVestedEvent
	private readonly test: testEvents.VestedRewardsRewardsVestedEvent
	private readonly dev: devEvents.VestedRewardsRewardsVestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsRewardsVestedEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsRewardsVestedEvent(ctx, event)
		this.test = new testEvents.VestedRewardsRewardsVestedEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsRewardsVestedEvent(ctx, event)
	}

	get isV1(): productionEvents.VestedRewardsRewardsVestedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.VestedRewardsRewardsVestedEvent['asV1'] {
		return this.production.asV1
	}
}

export class XstPoolPoolInitializedEvent {
	private readonly production: productionEvents.XstPoolPoolInitializedEvent
	private readonly stage: stageEvents.XstPoolPoolInitializedEvent
	private readonly test: testEvents.XstPoolPoolInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolPoolInitializedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolPoolInitializedEvent(ctx, event)
		this.test = new testEvents.XstPoolPoolInitializedEvent(ctx, event)
	}

	get isV19(): productionEvents.XstPoolPoolInitializedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.XstPoolPoolInitializedEvent['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionEvents.XstPoolPoolInitializedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.XstPoolPoolInitializedEvent['asV42'] {
		return this.production.asV42
	}
}

export class XstPoolReferenceAssetChangedEvent {
	private readonly production: productionEvents.XstPoolReferenceAssetChangedEvent
	private readonly stage: stageEvents.XstPoolReferenceAssetChangedEvent
	private readonly test: testEvents.XstPoolReferenceAssetChangedEvent
	private readonly dev: devEvents.XstPoolReferenceAssetChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
		this.test = new testEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
	}

	get isV19(): productionEvents.XstPoolReferenceAssetChangedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.XstPoolReferenceAssetChangedEvent['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionEvents.XstPoolReferenceAssetChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.XstPoolReferenceAssetChangedEvent['asV42'] {
		return this.production.asV42
	}
}

export class XstPoolSyntheticAssetDisabledEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetDisabledEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetDisabledEvent
	private readonly test: testEvents.XstPoolSyntheticAssetDisabledEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
		this.test = new testEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
	}

	get isV57(): productionEvents.XstPoolSyntheticAssetDisabledEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetDisabledEvent['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolSyntheticAssetEnabledEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetEnabledEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetEnabledEvent
	private readonly test: testEvents.XstPoolSyntheticAssetEnabledEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
		this.test = new testEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
	}

	get isV45(): productionEvents.XstPoolSyntheticAssetEnabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.XstPoolSyntheticAssetEnabledEvent['asV45'] {
		return this.production.asV45
	}
	get isV57(): productionEvents.XstPoolSyntheticAssetEnabledEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetEnabledEvent['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolSyntheticAssetFeeChangedEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetFeeChangedEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetFeeChangedEvent
	private readonly test: testEvents.XstPoolSyntheticAssetFeeChangedEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
		this.test = new testEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
	}

	get isV57(): productionEvents.XstPoolSyntheticAssetFeeChangedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetFeeChangedEvent['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolSyntheticAssetRemovedEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetRemovedEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetRemovedEvent
	private readonly test: testEvents.XstPoolSyntheticAssetRemovedEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
		this.test = new testEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
	}

	get isV60(): productionEvents.XstPoolSyntheticAssetRemovedEvent['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionEvents.XstPoolSyntheticAssetRemovedEvent['asV60'] {
		return this.production.asV60
	}
}

export class XstPoolSyntheticBaseAssetFloorPriceChangedEvent {
	private readonly production: productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent
	private readonly stage: stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent
	private readonly test: testEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent
	private readonly dev: devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
		this.test = new testEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
	}

	get isV45(): productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['asV45'] {
		return this.production.asV45
	}
}

export class XorFeeFeeWithdrawnEvent {
	private readonly production: productionEvents.XorFeeFeeWithdrawnEvent
	private readonly stage: stageEvents.XorFeeFeeWithdrawnEvent
	private readonly test: testEvents.XorFeeFeeWithdrawnEvent
	private readonly dev: devEvents.XorFeeFeeWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeFeeWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.XorFeeFeeWithdrawnEvent(ctx, event)
		this.test = new testEvents.XorFeeFeeWithdrawnEvent(ctx, event)
		this.dev = new devEvents.XorFeeFeeWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.XorFeeFeeWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.XorFeeFeeWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
}

export class XorFeeReferrerRewardedEvent {
	private readonly production: productionEvents.XorFeeReferrerRewardedEvent
	private readonly stage: stageEvents.XorFeeReferrerRewardedEvent
	private readonly test: testEvents.XorFeeReferrerRewardedEvent
	private readonly dev: devEvents.XorFeeReferrerRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeReferrerRewardedEvent(ctx, event)
		this.stage = new stageEvents.XorFeeReferrerRewardedEvent(ctx, event)
		this.test = new testEvents.XorFeeReferrerRewardedEvent(ctx, event)
		this.dev = new devEvents.XorFeeReferrerRewardedEvent(ctx, event)
	}

	get isV22(): productionEvents.XorFeeReferrerRewardedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.XorFeeReferrerRewardedEvent['asV22'] {
		return this.production.asV22
	}
}

export class XorFeeWeightToFeeMultiplierUpdatedEvent {
	private readonly production: productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent
	private readonly stage: stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent
	private readonly test: testEvents.XorFeeWeightToFeeMultiplierUpdatedEvent
	private readonly dev: devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
		this.stage = new stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
		this.test = new testEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
		this.dev = new devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
	}

	get isV37(): productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['asV37'] {
		return this.production.asV37
	}
}

export class BeefyLightClientNewMmrRootEvent {
	private readonly stage: stageEvents.BeefyLightClientNewMmrRootEvent
	private readonly test: testEvents.BeefyLightClientNewMmrRootEvent
	private readonly dev: devEvents.BeefyLightClientNewMmrRootEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientNewMmrRootEvent(ctx, event)
		this.test = new testEvents.BeefyLightClientNewMmrRootEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientNewMmrRootEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientNewMmrRootEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientNewMmrRootEvent['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientValidatorRegistryUpdatedEvent {
	private readonly stage: stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent
	private readonly test: testEvents.BeefyLightClientValidatorRegistryUpdatedEvent
	private readonly dev: devEvents.BeefyLightClientValidatorRegistryUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent(ctx, event)
		this.test = new testEvents.BeefyLightClientValidatorRegistryUpdatedEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientValidatorRegistryUpdatedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientVerificationSuccessfulEvent {
	private readonly stage: stageEvents.BeefyLightClientVerificationSuccessfulEvent
	private readonly test: testEvents.BeefyLightClientVerificationSuccessfulEvent
	private readonly dev: devEvents.BeefyLightClientVerificationSuccessfulEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientVerificationSuccessfulEvent(ctx, event)
		this.test = new testEvents.BeefyLightClientVerificationSuccessfulEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientVerificationSuccessfulEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientVerificationSuccessfulEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientVerificationSuccessfulEvent['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeOutboundChannelMessageAcceptedEvent {
	private readonly stage: stageEvents.BridgeOutboundChannelMessageAcceptedEvent
	private readonly test: testEvents.BridgeOutboundChannelMessageAcceptedEvent
	private readonly dev: devEvents.BridgeOutboundChannelMessageAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.test = new testEvents.BridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.dev = new devEvents.BridgeOutboundChannelMessageAcceptedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV55Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['asV55'] {
		return this.stage.asV55
	}
}

export class DispatchMessageDecodeFailedEvent {
	private readonly stage: stageEvents.DispatchMessageDecodeFailedEvent
	private readonly test: testEvents.DispatchMessageDecodeFailedEvent
	private readonly dev: devEvents.DispatchMessageDecodeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageDecodeFailedEvent(ctx, event)
		this.test = new testEvents.DispatchMessageDecodeFailedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageDecodeFailedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV59'] {
		return this.stage.asV59
	}
}

export class DispatchMessageDispatchedEvent {
	private readonly stage: stageEvents.DispatchMessageDispatchedEvent
	private readonly test: testEvents.DispatchMessageDispatchedEvent
	private readonly dev: devEvents.DispatchMessageDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageDispatchedEvent(ctx, event)
		this.test = new testEvents.DispatchMessageDispatchedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageDispatchedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageDispatchedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageDispatchedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageDispatchedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageDispatchedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageDispatchedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageDispatchedEvent['asV59'] {
		return this.stage.asV59
	}
}

export class DispatchMessageRejectedEvent {
	private readonly stage: stageEvents.DispatchMessageRejectedEvent
	private readonly test: testEvents.DispatchMessageRejectedEvent
	private readonly dev: devEvents.DispatchMessageRejectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageRejectedEvent(ctx, event)
		this.test = new testEvents.DispatchMessageRejectedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageRejectedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageRejectedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageRejectedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageRejectedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageRejectedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageRejectedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageRejectedEvent['asV59'] {
		return this.stage.asV59
	}
}

export class Erc20AppBurnedEvent {
	private readonly stage: stageEvents.Erc20AppBurnedEvent
	private readonly test: testEvents.Erc20AppBurnedEvent
	private readonly dev: devEvents.Erc20AppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppBurnedEvent(ctx, event)
		this.test = new testEvents.Erc20AppBurnedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppMintedEvent {
	private readonly stage: stageEvents.Erc20AppMintedEvent
	private readonly test: testEvents.Erc20AppMintedEvent
	private readonly dev: devEvents.Erc20AppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppMintedEvent(ctx, event)
		this.test = new testEvents.Erc20AppMintedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppMintedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRefundedEvent {
	private readonly stage: stageEvents.Erc20AppRefundedEvent
	private readonly test: testEvents.Erc20AppRefundedEvent
	private readonly dev: devEvents.Erc20AppRefundedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppRefundedEvent(ctx, event)
		this.test = new testEvents.Erc20AppRefundedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppRefundedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppRefundedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppRefundedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppBurnedEvent {
	private readonly stage: stageEvents.EthAppBurnedEvent
	private readonly test: testEvents.EthAppBurnedEvent
	private readonly dev: devEvents.EthAppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppBurnedEvent(ctx, event)
		this.test = new testEvents.EthAppBurnedEvent(ctx, event)
		this.dev = new devEvents.EthAppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppMintedEvent {
	private readonly stage: stageEvents.EthAppMintedEvent
	private readonly test: testEvents.EthAppMintedEvent
	private readonly dev: devEvents.EthAppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppMintedEvent(ctx, event)
		this.test = new testEvents.EthAppMintedEvent(ctx, event)
		this.dev = new devEvents.EthAppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppMintedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppRefundedEvent {
	private readonly stage: stageEvents.EthAppRefundedEvent
	private readonly test: testEvents.EthAppRefundedEvent
	private readonly dev: devEvents.EthAppRefundedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppRefundedEvent(ctx, event)
		this.test = new testEvents.EthAppRefundedEvent(ctx, event)
		this.dev = new devEvents.EthAppRefundedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppRefundedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppRefundedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientFinalizedEvent {
	private readonly stage: stageEvents.EthereumLightClientFinalizedEvent
	private readonly test: testEvents.EthereumLightClientFinalizedEvent
	private readonly dev: devEvents.EthereumLightClientFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthereumLightClientFinalizedEvent(ctx, event)
		this.test = new testEvents.EthereumLightClientFinalizedEvent(ctx, event)
		this.dev = new devEvents.EthereumLightClientFinalizedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthereumLightClientFinalizedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthereumLightClientFinalizedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyRefundFailedEvent {
	private readonly stage: stageEvents.EvmBridgeProxyRefundFailedEvent
	private readonly test: testEvents.EvmBridgeProxyRefundFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EvmBridgeProxyRefundFailedEvent(ctx, event)
		this.test = new testEvents.EvmBridgeProxyRefundFailedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EvmBridgeProxyRefundFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EvmBridgeProxyRefundFailedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyRequestStatusUpdateEvent {
	private readonly stage: stageEvents.EvmBridgeProxyRequestStatusUpdateEvent
	private readonly test: testEvents.EvmBridgeProxyRequestStatusUpdateEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EvmBridgeProxyRequestStatusUpdateEvent(ctx, event)
		this.test = new testEvents.EvmBridgeProxyRequestStatusUpdateEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EvmBridgeProxyRequestStatusUpdateEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EvmBridgeProxyRequestStatusUpdateEvent['asV52'] {
		return this.stage.asV52
	}
}

export class FaucetLimitUpdatedEvent {
	private readonly stage: stageEvents.FaucetLimitUpdatedEvent
	private readonly test: testEvents.FaucetLimitUpdatedEvent
	private readonly dev: devEvents.FaucetLimitUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.FaucetLimitUpdatedEvent(ctx, event)
		this.test = new testEvents.FaucetLimitUpdatedEvent(ctx, event)
		this.dev = new devEvents.FaucetLimitUpdatedEvent(ctx, event)
	}

	get isV37Stage(): stageEvents.FaucetLimitUpdatedEvent['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageEvents.FaucetLimitUpdatedEvent['asV37'] {
		return this.stage.asV37
	}
}

export class LiquidityProxyXorlessTransferEvent {
	private readonly stage: stageEvents.LiquidityProxyXorlessTransferEvent
	private readonly test: testEvents.LiquidityProxyXorlessTransferEvent
	private readonly dev: devEvents.LiquidityProxyXorlessTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.LiquidityProxyXorlessTransferEvent(ctx, event)
		this.test = new testEvents.LiquidityProxyXorlessTransferEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyXorlessTransferEvent(ctx, event)
	}

	get isV66Stage(): stageEvents.LiquidityProxyXorlessTransferEvent['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageEvents.LiquidityProxyXorlessTransferEvent['asV66'] {
		return this.stage.asV66
	}
}

export class MigrationAppErc20MigratedEvent {
	private readonly stage: stageEvents.MigrationAppErc20MigratedEvent
	private readonly test: testEvents.MigrationAppErc20MigratedEvent
	private readonly dev: devEvents.MigrationAppErc20MigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppErc20MigratedEvent(ctx, event)
		this.test = new testEvents.MigrationAppErc20MigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppErc20MigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppErc20MigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppErc20MigratedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class MigrationAppEthMigratedEvent {
	private readonly stage: stageEvents.MigrationAppEthMigratedEvent
	private readonly test: testEvents.MigrationAppEthMigratedEvent
	private readonly dev: devEvents.MigrationAppEthMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppEthMigratedEvent(ctx, event)
		this.test = new testEvents.MigrationAppEthMigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppEthMigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppEthMigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppEthMigratedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class MigrationAppSidechainMigratedEvent {
	private readonly stage: stageEvents.MigrationAppSidechainMigratedEvent
	private readonly test: testEvents.MigrationAppSidechainMigratedEvent
	private readonly dev: devEvents.MigrationAppSidechainMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppSidechainMigratedEvent(ctx, event)
		this.test = new testEvents.MigrationAppSidechainMigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppSidechainMigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppSidechainMigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppSidechainMigratedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppBurnedEvent {
	private readonly stage: stageEvents.SubstrateBridgeAppBurnedEvent
	private readonly test: testEvents.SubstrateBridgeAppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateBridgeAppBurnedEvent(ctx, event)
		this.test = new testEvents.SubstrateBridgeAppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateBridgeAppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeAppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppMintedEvent {
	private readonly stage: stageEvents.SubstrateBridgeAppMintedEvent
	private readonly test: testEvents.SubstrateBridgeAppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateBridgeAppMintedEvent(ctx, event)
		this.test = new testEvents.SubstrateBridgeAppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateBridgeAppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeAppMintedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class OrderBookOrderBookCreatedEvent {
	private readonly test: testEvents.OrderBookOrderBookCreatedEvent
	private readonly dev: devEvents.OrderBookOrderBookCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.test = new testEvents.OrderBookOrderBookCreatedEvent(ctx, event)
		this.dev = new devEvents.OrderBookOrderBookCreatedEvent(ctx, event)
	}

	get isV52Test(): testEvents.OrderBookOrderBookCreatedEvent['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testEvents.OrderBookOrderBookCreatedEvent['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devEvents.OrderBookOrderBookCreatedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookOrderBookCreatedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookOrderBookDeletedEvent {
	private readonly test: testEvents.OrderBookOrderBookDeletedEvent
	private readonly dev: devEvents.OrderBookOrderBookDeletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.test = new testEvents.OrderBookOrderBookDeletedEvent(ctx, event)
		this.dev = new devEvents.OrderBookOrderBookDeletedEvent(ctx, event)
	}

	get isV52Test(): testEvents.OrderBookOrderBookDeletedEvent['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testEvents.OrderBookOrderBookDeletedEvent['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devEvents.OrderBookOrderBookDeletedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookOrderBookDeletedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookOrderBookUpdatedEvent {
	private readonly test: testEvents.OrderBookOrderBookUpdatedEvent
	private readonly dev: devEvents.OrderBookOrderBookUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.test = new testEvents.OrderBookOrderBookUpdatedEvent(ctx, event)
		this.dev = new devEvents.OrderBookOrderBookUpdatedEvent(ctx, event)
	}

	get isV52Test(): testEvents.OrderBookOrderBookUpdatedEvent['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testEvents.OrderBookOrderBookUpdatedEvent['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devEvents.OrderBookOrderBookUpdatedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookOrderBookUpdatedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookOrderCanceledEvent {
	private readonly test: testEvents.OrderBookOrderCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.test = new testEvents.OrderBookOrderCanceledEvent(ctx, event)
	}

	get isV52Test(): testEvents.OrderBookOrderCanceledEvent['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testEvents.OrderBookOrderCanceledEvent['asV52'] {
		return this.test.asV52
	}
}

export class OrderBookOrderPlacedEvent {
	private readonly test: testEvents.OrderBookOrderPlacedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.test = new testEvents.OrderBookOrderPlacedEvent(ctx, event)
	}

	get isV52Test(): testEvents.OrderBookOrderPlacedEvent['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testEvents.OrderBookOrderPlacedEvent['asV52'] {
		return this.test.asV52
	}
}

export class OrderBookExpirationFailureEvent {
	private readonly dev: devEvents.OrderBookExpirationFailureEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookExpirationFailureEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookExpirationFailureEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookExpirationFailureEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderCanceledEvent {
	private readonly dev: devEvents.OrderBookLimitOrderCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderCanceledEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderCanceledEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderCanceledEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderConvertedToMarketOrderEvent {
	private readonly dev: devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderExecutedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderExecutedEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderExecutedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderExecutedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderExpiredEvent {
	private readonly dev: devEvents.OrderBookLimitOrderExpiredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderExpiredEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderExpiredEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderExpiredEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent {
	private readonly dev: devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderPlacedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderPlacedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderPlacedEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderPlacedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderPlacedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrderUpdatedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderUpdatedEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookLimitOrderUpdatedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookLimitOrderUpdatedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookMarketOrderExecutedEvent {
	private readonly dev: devEvents.OrderBookMarketOrderExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookMarketOrderExecutedEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookMarketOrderExecutedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookMarketOrderExecutedEvent['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookOrderBookStatusChangedEvent {
	private readonly dev: devEvents.OrderBookOrderBookStatusChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookOrderBookStatusChangedEvent(ctx, event)
	}

	get isV64Dev(): devEvents.OrderBookOrderBookStatusChangedEvent['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devEvents.OrderBookOrderBookStatusChangedEvent['asV64'] {
		return this.dev.asV64
	}
}
