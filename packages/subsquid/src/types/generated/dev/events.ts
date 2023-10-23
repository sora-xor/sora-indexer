import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v64 from './v64'

export class AssetsAssetRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.AssetRegistered') === 'e42a0be2c3ce5e53ba9c2d02e018c2d094b2017decc857eae19a065ac1c7b160'
    }

    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get asV64(): [v64.AssetId32, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetSetNonMintableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetSetNonMintable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.AssetSetNonMintable') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    get asV64(): v64.AssetId32 {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset info has been updated
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.AssetUpdated') === '4886f61ece6aa0a161935224b5c8eeb011b50e4d1c52ae4fef559115febc029a'
    }

    /**
     * Asset info has been updated
     */
    get asV64(): [v64.AssetId32, (Uint8Array | undefined), (Uint8Array | undefined)] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsBurnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Burn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.Burn') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get asV64(): [Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsMintEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Mint')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.Mint') === '07d7187162902e1f3d5b68a2f24bdf532e95979d031b0979531a6a6e230e51c7'
    }

    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get asV64(): [Uint8Array, Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.Transfer') === '07d7187162902e1f3d5b68a2f24bdf532e95979d031b0979531a6a6e230e51c7'
    }

    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get asV64(): [Uint8Array, Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BagsListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BagsList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BagsList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV64(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BagsListScoreUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BagsList.ScoreUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BagsList.ScoreUpdated') === '3444db3e9dd4128c42e890eb1f98441148f3d7cea3a43f5b223ba3e6cdc2c8b6'
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get asV64(): {who: Uint8Array, newScore: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A balance was set by root.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV64(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV64(): {account: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was created with some free balance.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV64(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV64(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v64.BalanceStatus} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV64(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BandRelayersAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Band.RelayersAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Added new trusted relayer accounts. [relayers]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Band.RelayersAdded') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * Added new trusted relayer accounts. [relayers]
     */
    get asV64(): Uint8Array[] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BandRelayersRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Band.RelayersRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Band.RelayersRemoved') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    get asV64(): Uint8Array[] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BandSymbolsRelayedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Band.SymbolsRelayed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Band.SymbolsRelayed') === 'aeecc2946b2812d355559be362ff8a0f855cd4b8cee89da7ec213e5bb279c08e'
    }

    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    get asV64(): [Uint8Array, bigint][] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BeefyLightClientNewMmrRootEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BeefyLightClient.NewMMRRoot')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BeefyLightClient.NewMMRRoot') === '21c0230f17bd63f86de066cce976ff99a536278769b7adb2d71ed5361c9d19d3'
    }

    get asV64(): [v64.SubNetworkId, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BeefyLightClientValidatorRegistryUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BeefyLightClient.ValidatorRegistryUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BeefyLightClient.ValidatorRegistryUpdated') === '462f26ee375cd5229f3ed9167abb9c301f973e00f5255acda4b8d447c9f4c1f8'
    }

    get asV64(): [v64.SubNetworkId, Uint8Array, number, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BeefyLightClientVerificationSuccessfulEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BeefyLightClient.VerificationSuccessful')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BeefyLightClient.VerificationSuccessful') === 'e685a5f9dbefa527c578da8c4fcdb9acde4b1c90cb851f94a9f53cdf48174257'
    }

    get asV64(): [v64.SubNetworkId, Uint8Array, number] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeDataSignerAddedPeerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeDataSigner.AddedPeer')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeDataSigner.AddedPeer') === 'b7d97951fb9d6cf37ef146ec14282a2865e1f96be8305e55309949f67c606782'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeDataSignerApprovalAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeDataSigner.ApprovalAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeDataSigner.ApprovalAccepted') === 'cc1e505fbb0fc7c1d9e0908d9427af24ffda18279e947e4e74e3e4cc738025ea'
    }

    get asV64(): {networkId: v64.GenericNetworkId, data: Uint8Array, signature: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeDataSignerApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeDataSigner.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeDataSigner.Approved') === '0a4c1ededbb9ab8ab03d7b07ad6523693cc25fcf8996d7e1f7391c61aa8040b9'
    }

    get asV64(): {networkId: v64.GenericNetworkId, data: Uint8Array, signatures: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeDataSignerInitializedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeDataSigner.Initialized')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeDataSigner.Initialized') === 'be240b642cd00dc95a352881df96fece49765132d972374dc53694e55f68891f'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peers: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeDataSignerRemovedPeerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeDataSigner.RemovedPeer')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeDataSigner.RemovedPeer') === 'b7d97951fb9d6cf37ef146ec14282a2865e1f96be8305e55309949f67c606782'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeMultisigMultisigAccountCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeMultisig.MultisigAccountCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig created. [multisig]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigAccountCreated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A new multisig created. [multisig]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeMultisigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeMultisig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigApproval') === 'ce25f19a630b86308221a03b4196c77382abc4b4f3ef9d972fbf8dcec8b089c6'
    }

    /**
     * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    get asV64(): [Uint8Array, v64.BridgeTimepoint, Uint8Array, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeMultisigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeMultisig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigCancelled') === 'ce25f19a630b86308221a03b4196c77382abc4b4f3ef9d972fbf8dcec8b089c6'
    }

    /**
     * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    get asV64(): [Uint8Array, v64.BridgeTimepoint, Uint8Array, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeMultisigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeMultisig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigExecuted') === '67d09b3ff432b259bcd6128bfa877ba889500c4a2f89f91e4677992037f70954'
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get asV64(): [Uint8Array, v64.BridgeTimepoint, Uint8Array, Uint8Array, (v64.DispatchError | undefined)] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeMultisigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeMultisig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun. [approving, multisig, call_hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('BridgeMultisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     * A new multisig operation has begun. [approving, multisig, call_hash]
     */
    get asV64(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeOutboundChannelMessageAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeOutboundChannel.MessageAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeOutboundChannel.MessageAccepted') === '6be6af3ab9a75ba728cf0ceffb18be467a10616f07c40327060ff3032571e49f'
    }

    get asV64(): [bigint, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeProxyRefundFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeProxy.RefundFailed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeProxy.RefundFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BridgeProxyRequestStatusUpdateEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BridgeProxy.RequestStatusUpdate')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('BridgeProxy.RequestStatusUpdate') === '69b4fdb4240fdb3fcceecc787163baa22979aed6ed678d9c3031dc061e0f55e7'
    }

    get asV64(): [Uint8Array, v64.MessageStatus] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresGovernancePlatformCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresGovernancePlatform.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Create poll [who, option, start_timestamp, end_timestamp]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Created') === 'a62875e28c0150e95632b1ce78969e1e861d51d2ca4bc6bd892af3ad78da78e5'
    }

    /**
     * Create poll [who, option, start_timestamp, end_timestamp]
     */
    get asV64(): [Uint8Array, number, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresGovernancePlatformVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresGovernancePlatform.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Voting [who, poll, option, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Voted') === 'd08b220435c2bba105ffc874f66bd151749108863f6f4ed5ec2eadd74107ab62'
    }

    /**
     * Voting [who, poll, option, balance]
     */
    get asV64(): [Uint8Array, Uint8Array, number, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresGovernancePlatformWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresGovernancePlatform.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdrawn [who, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Withdrawn [who, balance]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claim tokens [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Claimed') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Claim tokens [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadClaimedLpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.ClaimedLP')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claim LP Tokens [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ClaimedLP') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Claim LP Tokens [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadClaimedPswapEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.ClaimedPSWAP')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * PSWAP claimed
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ClaimedPSWAP') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * PSWAP claimed
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadContributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.Contributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contribute [who, what, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Contributed') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Contribute [who, what, balance]
     */
    get asV64(): [Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadEmergencyWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.EmergencyWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Emergency withdraw [who, what, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.EmergencyWithdrawn') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Emergency withdraw [who, what, balance]
     */
    get asV64(): [Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadFeeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.FeeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fee changed [balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.FeeChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Fee changed [balance]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadIloCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.ILOCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * ILO created [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOCreated') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * ILO created [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadIloFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.ILOFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * ILO finished [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOFinished') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * ILO finished [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadRemovedWhitelistedContributorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.RemovedWhitelistedContributor')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contributor removed [who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.RemovedWhitelistedContributor') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Contributor removed [who]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadRemovedWhitelistedIloOrganizerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.RemovedWhitelistedIloOrganizer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * ILO organizer removed [who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.RemovedWhitelistedIloOrganizer') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * ILO organizer removed [who]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadWhitelistedContributorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.WhitelistedContributor')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contributor whitelisted [who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.WhitelistedContributor') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Contributor whitelisted [who]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLaunchpadWhitelistedIloOrganizerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLaunchpad.WhitelistedIloOrganizer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * ILO organizer whitelisted [who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.WhitelistedIloOrganizer') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * ILO organizer whitelisted [who]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresLiquidityLockerLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresLiquidityLocker.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds Locked [who, amount, timestamp]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresLiquidityLocker.Locked') === '1b06a1b78ae20fd47b293211e65ea37da996d4b8f15995eb04785241ce3f7383'
    }

    /**
     * Funds Locked [who, amount, timestamp]
     */
    get asV64(): [Uint8Array, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresStakingDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresStaking.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Ceres deposited. [who, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresStaking.Deposited') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Ceres deposited. [who, amount]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresStakingRewardsChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresStaking.RewardsChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Rewards changed [balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresStaking.RewardsChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Rewards changed [balance]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresStakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresStaking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresStaking.Withdrawn') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    get asV64(): [Uint8Array, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresTokenLockerFeeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresTokenLocker.FeeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fee Changed [who, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.FeeChanged') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Fee Changed [who, amount]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresTokenLockerLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresTokenLocker.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds Locked [who, amount, asset]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Locked') === 'cf27e6222bb99d6f66a50d0452e3301c55fea28a8601b544e560a29d7bb3c7b1'
    }

    /**
     * Funds Locked [who, amount, asset]
     */
    get asV64(): [Uint8Array, bigint, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CeresTokenLockerWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CeresTokenLocker.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds Withdrawn [who, amount, asset]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Withdrawn') === 'cf27e6222bb99d6f66a50d0452e3301c55fea28a8601b544e560a29d7bb3c7b1'
    }

    /**
     * Funds Withdrawn [who, amount, asset]
     */
    get asV64(): [Uint8Array, bigint, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV64(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV64(): {proposalHash: Uint8Array, result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV64(): {proposalHash: Uint8Array, result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV64(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV64(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformDepositFeeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.DepositFeeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.DepositFeeChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Deposited') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformInfoChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.InfoChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.InfoChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformMultiplierChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.MultiplierChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.MultiplierChanged') === '8fa4d9bbfba87885c0607f53c20bc62fdd64a14e9b0302a39b6cd19c6b3f5a42'
    }

    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean, number] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformPoolAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.PoolAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolAdded') === '176dc62b208d548aaa0df79ce21570cb7ad8f4992e413a0549425bbc8e6d413e'
    }

    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformPoolRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.PoolRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolRemoved') === '176dc62b208d548aaa0df79ce21570cb7ad8f4992e413a0549425bbc8e6d413e'
    }

    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformRewardWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.RewardWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.RewardWithdrawn') === '82ef4a44ff36494e8f87478904ac53d0874e6e102d96e1ad5cda4a41f237ea56'
    }

    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV64(): [Uint8Array, bigint, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformTokenInfoChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.TokenInfoChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token info changed [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenInfoChanged') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Token info changed [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformTokenRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.TokenRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token registered [who, what]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenRegistered') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Token registered [who, what]
     */
    get asV64(): [Uint8Array, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformTotalTokensChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.TotalTokensChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TotalTokensChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV64(): [Uint8Array, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemeterFarmingPlatformWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DemeterFarmingPlatform.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Withdrawn') === '82ef4a44ff36494e8f87478904ac53d0874e6e102d96e1ad5cda4a41f237ea56'
    }

    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV64(): [Uint8Array, bigint, v64.AssetId32, v64.AssetId32, v64.AssetId32, boolean] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyBlacklistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Blacklisted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV64(): {refIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV64(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExternalTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ExternalTabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been tabled.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An external proposal has been tabled.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyNotPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.NotPassed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV64(): {refIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Passed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV64(): {refIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposalCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ProposalCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal got canceled.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV64(): {propIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV64(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracySecondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Seconded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has secconded a proposal
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV64(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Started')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has begun.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV64(): {refIndex: number, threshold: v64.VoteThreshold} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Tabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV64(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVetoedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Vetoed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV64(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has voted in a referendum
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV64(): {voter: Uint8Array, refIndex: number, vote: v64.AccountVote} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DispatchMessageDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Dispatch.MessageDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have failed to decode a Call from the message.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Dispatch.MessageDecodeFailed') === '44debdb810dc577f1b75189c3d28fa915ee1dbb4865e9798a55960e448a62b7d'
    }

    /**
     * We have failed to decode a Call from the message.
     */
    get asV64(): v64.MessageId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DispatchMessageDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Dispatch.MessageDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message has been dispatched with given result.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Dispatch.MessageDispatched') === '2ab512d54f11e2bbaf07774584a613c509432734a556ee1433e96524967015da'
    }

    /**
     * Message has been dispatched with given result.
     */
    get asV64(): [v64.MessageId, v64.Type_41] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class DispatchMessageRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Dispatch.MessageRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message has been rejected
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Dispatch.MessageRejected') === '44debdb810dc577f1b75189c3d28fa915ee1dbb4865e9798a55960e448a62b7d'
    }

    /**
     * Message has been rejected
     */
    get asV64(): v64.MessageId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class Erc20AppBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ERC20App.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ERC20App.Burned') === '411b028902eb7ec39d63e122a9ff46c4d22df2d8f42e6f2a5edfe7e2d8f5bd6f'
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get asV64(): [bigint, v64.AssetId32, Uint8Array, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class Erc20AppMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ERC20App.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ERC20App.Minted') === '8ea0273c71db967a31081f9ad46b47cc29b40fac39642c623585edfc05121887'
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get asV64(): [bigint, v64.AssetId32, Uint8Array, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class Erc20AppRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ERC20App.Refunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * [network_id, sender, asset_id, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ERC20App.Refunded') === '5a46fad90adefcc257b410874ba7bf4c6180f739c1bcae5793f21af58becfe70'
    }

    /**
     * [network_id, sender, asset_id, amount]
     */
    get asV64(): [bigint, Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'ed50f7c0b841dc5aadb056d9e4cf2c665a79bd8ac019de47ef20e466590483fa'
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get asV64(): {compute: v64.ElectionCompute, score: v64.ElectionScore} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.PhaseTransitioned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There was a phase transition in a given round.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.PhaseTransitioned') === 'c7ca79c013a2eb6682b0eae5badc17841b3fa2ec00221d968b3e1fb4ce1f7d8f'
    }

    /**
     * There was a phase transition in a given round.
     */
    get asV64(): {from: v64.Phase, to: v64.Phase, round: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV64(): {account: Uint8Array, value: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV64(): {account: Uint8Array, value: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '66fb962d8c6d753e5c5954ef51f605c0221a1597d71cb5cf595e74ae264b9d57'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get asV64(): {compute: v64.ElectionCompute, origin: (Uint8Array | undefined), prevEjected: boolean} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenCandidateSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.CandidateSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get asV64(): {candidate: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenElectionErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.ElectionError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Internal error happened while trying to perform election.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Internal error happened while trying to perform election.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenEmptyTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.EmptyTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenMemberKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.MemberKicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get asV64(): {member: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenNewTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.NewTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get asV64(): {newMembers: [Uint8Array, bigint][]} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.Renounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone has renounced their candidacy.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Someone has renounced their candidacy.
     */
    get asV64(): {candidate: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenSeatHolderSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.SeatHolderSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get asV64(): {seatHolder: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthAppBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthApp.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('EthApp.Burned') === 'b58d38e2887709153e0a963575282edf99c594b36fd88cbd33c1f3feb483cf30'
    }

    get asV64(): [bigint, Uint8Array, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthAppMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthApp.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('EthApp.Minted') === 'e06e5b563c0a1ab502a6ddb12a05a5fdb77b5020e1e8c0516b562cef81c7aab2'
    }

    get asV64(): [bigint, Uint8Array, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthAppRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthApp.Refunded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('EthApp.Refunded') === '1d4e0f4c40d78e1a2442d2284529edb0414e4e61cd047f6a49c9b34bc5a5db3b'
    }

    get asV64(): [bigint, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeApprovalsCollectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.ApprovalsCollected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.ApprovalsCollected') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeCancellationFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.CancellationFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The request wasn't finalized nor cancelled. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.CancellationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The request wasn't finalized nor cancelled. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeIncomingRequestFinalizationFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.IncomingRequestFinalizationFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The incoming request finalization has been failed. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.IncomingRequestFinalizationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The incoming request finalization has been failed. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeIncomingRequestFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.IncomingRequestFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The incoming request has been finalized. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.IncomingRequestFinalized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The incoming request has been finalized. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeRegisterRequestFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.RegisterRequestFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.RegisterRequestFailed') === 'd385db17a37a17bb6513c4e93f27031a3f6a875af782149da647206ea8ec3970'
    }

    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    get asV64(): [Uint8Array, v64.DispatchError] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeRequestAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.RequestAborted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The request was aborted and cancelled. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.RequestAborted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The request was aborted and cancelled. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeRequestFinalizationFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.RequestFinalizationFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The request finalization has been failed. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.RequestFinalizationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The request finalization has been failed. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthBridgeRequestRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthBridge.RequestRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New request has been registered. [Request Hash]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthBridge.RequestRegistered') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * New request has been registered. [Request Hash]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthereumLightClientFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthereumLightClient.Finalized')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('EthereumLightClient.Finalized') === '2176db060fa11994d065ad89338ac97667c85ad1e3a9f9b8311a8e0fdf2e5aad'
    }

    get asV64(): [bigint, v64.HeaderId] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class FaucetLimitUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Faucet.LimitUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('Faucet.LimitUpdated') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class FaucetTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Faucet.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('Faucet.Transferred') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New authority set has been applied.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV64(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been paused.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been paused.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been resumed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been resumed.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Created') === '321c553894b4e645eb1d256dd648baa58c54c041b4f9631d1d7bd797ae28a72d'
    }

    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    get asV64(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformCreatorFundsWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.CreatorFundsWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Creator Funds Withdrawn [who, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.CreatorFundsWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Creator Funds Withdrawn [who, balance]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Change minimum Hermes for creating poll [balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.MinimumHermesForCreatingPollChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Change minimum Hermes for creating poll [balance]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformMinimumHermesForVotingChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.MinimumHermesForVotingChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Change minimum Hermes for voting [balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.MinimumHermesForVotingChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Change minimum Hermes for voting [balance]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Voting [who, poll, option]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Voted') === '1794a5df6e71f8ceb9882994f762465a4a5bee5a2c4b3bc50c73caa5e894cc8d'
    }

    /**
     * Voting [who, poll, option]
     */
    get asV64(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class HermesGovernancePlatformVoterFundsWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'HermesGovernancePlatform.VoterFundsWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Voter Funds Withdrawn [who, balance]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.VoterFundsWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Voter Funds Withdrawn [who, balance]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV64(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityKilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV64(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentitySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentitySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV64(): {who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementGivenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementGiven')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV64(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV64(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement request was retracted.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV64(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityRegistrarAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.RegistrarAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A registrar was added.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV64(): {registrarIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV64(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV64(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRevokedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRevoked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV64(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineAllGoodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.AllGood')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineHeartbeatReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.HeartbeatReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV64(): {authorityId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineSomeOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.SomeOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV64(): {offline: [Uint8Array, v64.Exposure][]} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class IrohaMigrationMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'IrohaMigration.Migrated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Migrated. [source, target]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('IrohaMigration.Migrated') === 'de50809c6ea797db05c82cecb0aa8021786798c5b6189381f752e2e23b804d06'
    }

    /**
     * Migrated. [source, target]
     */
    get asV64(): [string, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityProxyBatchSwapExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityProxy.BatchSwapExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of swap transfers has been performed
     * [ADAR Fee, Input amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('LiquidityProxy.BatchSwapExecuted') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     * Batch of swap transfers has been performed
     * [ADAR Fee, Input amount]
     */
    get asV64(): [bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityProxyExchangeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityProxy.Exchange')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('LiquidityProxy.Exchange') === '3de6b83cb8addd113b0a893958e00dbaa5f9c30580257b4251b34dcec1c4c18c'
    }

    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get asV64(): [Uint8Array, number, v64.AssetId32, v64.AssetId32, bigint, bigint, bigint, v64.LiquiditySourceId[]] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityProxyLiquiditySourceDisabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityProxy.LiquiditySourceDisabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity source was disabled
     */
    get isV64(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceDisabled') === '56f813b5fcd4a7e12152808c737397d2cd460f4d29400c640164bbeb391e3ba2'
    }

    /**
     * Liquidity source was disabled
     */
    get asV64(): v64.LiquiditySourceType {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityProxyLiquiditySourceEnabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityProxy.LiquiditySourceEnabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity source was enabled
     */
    get isV64(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceEnabled') === '56f813b5fcd4a7e12152808c737397d2cd460f4d29400c640164bbeb391e3ba2'
    }

    /**
     * Liquidity source was enabled
     */
    get asV64(): v64.LiquiditySourceType {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityProxyXorlessTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityProxy.XorlessTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XORless transfer has been performed
     * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('LiquidityProxy.XorlessTransfer') === '8b9d54f982d31b7874159c16939999b8121a2dc6ee4f3654530f74f2874146a2'
    }

    /**
     * XORless transfer has been performed
     * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
     */
    get asV64(): [v64.AssetId32, Uint8Array, Uint8Array, bigint, (Uint8Array | undefined)] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationAppErc20MigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MigrationApp.Erc20Migrated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MigrationApp.Erc20Migrated') === '4656f53103c10a9df51665de09bfc2456eacf4560f7ab55a55e9404a5ebb731c'
    }

    get asV64(): [bigint, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationAppEthMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MigrationApp.EthMigrated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MigrationApp.EthMigrated') === '4656f53103c10a9df51665de09bfc2456eacf4560f7ab55a55e9404a5ebb731c'
    }

    get asV64(): [bigint, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationAppSidechainMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MigrationApp.SidechainMigrated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MigrationApp.SidechainMigrated') === '4656f53103c10a9df51665de09bfc2456eacf4560f7ab55a55e9404a5ebb731c'
    }

    get asV64(): [bigint, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated') === 'd2bdabab52183f7a1c8c9d4c1bb6b0aba679768cd2af453443a600f15d81090e'
    }

    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get asV64(): [v64.AssetId32, (v64.FixedPoint | undefined)] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MulticollateralBondingCurvePoolPoolInitializedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MulticollateralBondingCurvePool.PoolInitialized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PoolInitialized') === '21cf9054b1ae36cdcecba8bfb656549bc3b239aaa819e7795ede36e56786a640'
    }

    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get asV64(): [number, v64.AssetId32] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MulticollateralBondingCurvePoolPriceBiasChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MulticollateralBondingCurvePool.PriceBiasChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Price bias was changed. [New Price Bias]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PriceBiasChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Price bias was changed. [New Price Bias]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MulticollateralBondingCurvePool.PriceChangeConfigChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PriceChangeConfigChanged') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     * Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    get asV64(): [bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MulticollateralBondingCurvePoolReferenceAssetChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MulticollateralBondingCurvePool.ReferenceAssetChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.ReferenceAssetChanged') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV64(): v64.AssetId32 {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV64(): {approving: Uint8Array, timepoint: v64.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV64(): {cancelling: Uint8Array, timepoint: v64.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '303cb15b241c821ed02efcceb1d8f92a11e2a124e8eef73810b68e2592455034'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV64(): {approving: Uint8Array, timepoint: v64.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV64(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigVerifierNetworkInitializedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultisigVerifier.NetworkInitialized')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MultisigVerifier.NetworkInitialized') === 'db318f1e2593844561a049f1ca1c4cbf6c0f1575b0d8d7d116e9d8c487aebd51'
    }

    get asV64(): v64.GenericNetworkId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigVerifierPeerAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultisigVerifier.PeerAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MultisigVerifier.PeerAdded') === '67939ca16ec4a634df778bd422538344e9daf78811f2ac77b051ecb1c5f4ad33'
    }

    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigVerifierPeerRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultisigVerifier.PeerRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MultisigVerifier.PeerRemoved') === '67939ca16ec4a634df778bd422538344e9daf78811f2ac77b051ecb1c5f4ad33'
    }

    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigVerifierVerificationSuccessfulEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultisigVerifier.VerificationSuccessful')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('MultisigVerifier.VerificationSuccessful') === 'db318f1e2593844561a049f1ca1c4cbf6c0f1575b0d8d7d116e9d8c487aebd51'
    }

    get asV64(): v64.GenericNetworkId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OffencesOffenceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Offences.Offence')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV64(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OracleProxyOracleDisabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OracleProxy.OracleDisabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Oracle was successfully disabled. [oracle]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OracleProxy.OracleDisabled') === 'adeac13230a94b92e7a38f9f55429f55e67de9bcc25e4fe39b33083a9dcb522c'
    }

    /**
     * Oracle was successfully disabled. [oracle]
     */
    get asV64(): v64.Oracle {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OracleProxyOracleEnabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OracleProxy.OracleEnabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Oracle was successfully enabled. [oracle]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OracleProxy.OracleEnabled') === 'adeac13230a94b92e7a38f9f55429f55e67de9bcc25e4fe39b33083a9dcb522c'
    }

    /**
     * Oracle was successfully enabled. [oracle]
     */
    get asV64(): v64.Oracle {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookExpirationFailureEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.ExpirationFailure')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Failed to cancel expired order
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.ExpirationFailure') === 'fa7e5a77a8d65fca2dcff256baeedb23f42744bcb49e004cb835ef6ab900e56d'
    }

    /**
     * Failed to cancel expired order
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, error: v64.DispatchError} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * User canceled their limit order
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderCanceled') === 'f7f23c561ff2729d055c987f09f52557cc3d221d0bd422e140f5171858a157b7'
    }

    /**
     * User canceled their limit order
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, ownerId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderConvertedToMarketOrderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderConvertedToMarketOrder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * User tried to place the limit order out of the spread. The limit order is converted into a market order.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderConvertedToMarketOrder') === '02b571f17770211b94784a0b5fecaddf5213a5b0c323cd35858ebe3b10d75083'
    }

    /**
     * User tried to place the limit order out of the spread. The limit order is converted into a market order.
     */
    get asV64(): {orderBookId: v64.OrderBookId, ownerId: Uint8Array, direction: v64.PriceVariant, amount: v64.OrderAmount} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount of the limit order is executed
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderExecuted') === 'a372fce6e6f5267ff793a3b190930a916126594c88e4b46ff076dfacfe2569fc'
    }

    /**
     * Some amount of the limit order is executed
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, ownerId: Uint8Array, side: v64.PriceVariant, amount: v64.OrderAmount} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderExpiredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderExpired')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The limit order has reached the end of its lifespan
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderExpired') === 'f7f23c561ff2729d055c987f09f52557cc3d221d0bd422e140f5171858a157b7'
    }

    /**
     * The limit order has reached the end of its lifespan
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, ownerId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * User tried to place the limit order out of the spread.
     * One part of the liquidity of the limit order is converted into a market order, and the other part is placed as a limit order.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder') === '4b8b381d8135e13b529723d95ea3cae29ddbe3ec41d2b1e1c201c2266f746db0'
    }

    /**
     * User tried to place the limit order out of the spread.
     * One part of the liquidity of the limit order is converted into a market order, and the other part is placed as a limit order.
     */
    get asV64(): {orderBookId: v64.OrderBookId, ownerId: Uint8Array, marketOrderDirection: v64.PriceVariant, marketOrderAmount: v64.OrderAmount, marketOrderAveragePrice: v64.BalanceUnit, limitOrderId: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * User placed new limit order
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderPlaced') === 'f7f23c561ff2729d055c987f09f52557cc3d221d0bd422e140f5171858a157b7'
    }

    /**
     * User placed new limit order
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, ownerId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookLimitOrderUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.LimitOrderUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The limit order is updated
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.LimitOrderUpdated') === 'f7f23c561ff2729d055c987f09f52557cc3d221d0bd422e140f5171858a157b7'
    }

    /**
     * The limit order is updated
     */
    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint, ownerId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookMarketOrderExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.MarketOrderExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * User executes a deal by the market order
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.MarketOrderExecuted') === '7eef3d8eccee9952dcaffc59f8e1885b305979887b06b27e9b274622732a3c25'
    }

    /**
     * User executes a deal by the market order
     */
    get asV64(): {orderBookId: v64.OrderBookId, ownerId: Uint8Array, direction: v64.PriceVariant, amount: v64.OrderAmount, averagePrice: v64.BalanceUnit, to: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookOrderBookCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.OrderBookCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New order book is created by user
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.OrderBookCreated') === '1d47012323a2689470b950646be3355b857772574d70a31e65565df049e708c9'
    }

    /**
     * New order book is created by user
     */
    get asV64(): {orderBookId: v64.OrderBookId, creator: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookOrderBookDeletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.OrderBookDeleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Order book is deleted
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.OrderBookDeleted') === 'b09dbc94d9945f25005f169f6017bc16efeb44e7512efc35f1b47cd1fc5cc091'
    }

    /**
     * Order book is deleted
     */
    get asV64(): {orderBookId: v64.OrderBookId} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookOrderBookStatusChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.OrderBookStatusChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Order book status is changed
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.OrderBookStatusChanged') === '446411df8088a21861213d0bdba086d4824734ef7f02c6d05980e86e46f364e5'
    }

    /**
     * Order book status is changed
     */
    get asV64(): {orderBookId: v64.OrderBookId, newStatus: v64.OrderBookStatus} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrderBookOrderBookUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrderBook.OrderBookUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Order book attributes are updated
     */
    get isV64(): boolean {
        return this._chain.getEventHash('OrderBook.OrderBookUpdated') === 'b09dbc94d9945f25005f169f6017bc16efeb44e7512efc35f1b47cd1fc5cc091'
    }

    /**
     * Order book attributes are updated
     */
    get asV64(): {orderBookId: v64.OrderBookId} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainBridgeAppBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainBridgeApp.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ParachainBridgeApp.Burned') === '00deab9aca8eeb87dea4902ae64a1aea2b76816ea67d21bdd8a8daefbffb811d'
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get asV64(): [v64.SubNetworkId, v64.AssetId32, Uint8Array, v64.VersionedMultiLocation, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainBridgeAppMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainBridgeApp.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('ParachainBridgeApp.Minted') === 'e2e9c422011901e27a42b466b7bac40a216c045b42fad954b39f26344f85f536'
    }

    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    get asV64(): [v64.SubNetworkId, v64.AssetId32, (v64.VersionedMultiLocation | undefined), Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PermissionsPermissionAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Permissions.PermissionAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Permission was assigned to the account in the scope. [permission, who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Permissions.PermissionAssigned') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Permission was assigned to the account in the scope. [permission, who]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PermissionsPermissionCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Permissions.PermissionCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Permission was created with an owner. [permission, who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Permissions.PermissionCreated') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Permission was created with an owner. [permission, who]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PermissionsPermissionGrantedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Permissions.PermissionGranted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Permission was granted to a holder. [permission, who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Permissions.PermissionGranted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Permission was granted to a holder. [permission, who]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PermissionsPermissionTransferedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Permissions.PermissionTransfered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Permission was transfered to a new owner. [permission, who]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Permissions.PermissionTransfered') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Permission was transfered to a new owner. [permission, who]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PoolXykPoolIsInitializedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PoolXYK.PoolIsInitialized')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('PoolXYK.PoolIsInitialized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Cleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has ben cleared.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Noted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been noted.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Requested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been requested.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionBurnRateChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.BurnRateChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.BurnRateChanged') === '86d428f85eed068faa1c1f92711bd8e55cb3b9777b62fd4eaf8b8feedbba929a'
    }

    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    get asV64(): v64.FixedPoint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionFeesExchangeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.FeesExchangeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchangeFailed') === 'ce34bd157711f579cc988e45046df06dce0f8c5377f7100d124c1ec6858cc68b'
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get asV64(): [number, Uint8Array, v64.AssetId32, bigint, v64.AssetId32, v64.DispatchError] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionFeesExchangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.FeesExchanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchanged') === 'ed0bc6e528746e7bd0696a32ed5811e0ed2258b209481c160a220f99e52986f0'
    }

    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get asV64(): [number, Uint8Array, v64.AssetId32, bigint, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionIncentiveDistributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.IncentiveDistributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributed') === '854e85ed7f4db5de47867e035b1cb45563fb3966182969651719fe003e52039f'
    }

    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get asV64(): [number, Uint8Array, v64.AssetId32, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionIncentiveDistributionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.IncentiveDistributionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Problem occurred that resulted in incentive distribution not done.
     * [DEX Id, Fees Account Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributionFailed') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Problem occurred that resulted in incentive distribution not done.
     * [DEX Id, Fees Account Id]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionIncentivesBurnedAfterExchangeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.IncentivesBurnedAfterExchange')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentivesBurnedAfterExchange') === '86115cf2e07ba6994db8f1bb5b570bd0ebbe5952c3e4f18dc334ab609f6d24fc'
    }

    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    get asV64(): [number, v64.AssetId32, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionNothingToDistributeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.NothingToDistribute')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees Account contains zero incentive tokens, thus distribution is dismissed.
     * [DEX Id, Fees Account Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.NothingToDistribute') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Fees Account contains zero incentive tokens, thus distribution is dismissed.
     * [DEX Id, Fees Account Id]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class PswapDistributionNothingToExchangeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PswapDistribution.NothingToExchange')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees Account contains zero base tokens, thus exchange is dismissed.
     * [DEX Id, Fees Account Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('PswapDistribution.NothingToExchange') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Fees Account contains zero base tokens, thus exchange is dismissed.
     * [DEX Id, Fees Account Id]
     */
    get asV64(): [number, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class RewardsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Rewards.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The account has claimed their rewards. [account]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Rewards.Claimed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The account has claimed their rewards. [account]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class RewardsMigrationCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Rewards.MigrationCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Storage migration to version 1.2.0 completed
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Rewards.MigrationCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Storage migration to version 1.2.0 completed
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallUnavailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallUnavailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV64(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Canceled some task.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV64(): {when: number, index: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Dispatched some task.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'b67102cc706599639b8e52e776b81c51142dad43652e91e7e72197b7df9a63f4'
    }

    /**
     * Dispatched some task.
     */
    get asV64(): {task: [number, number], id: (Uint8Array | undefined), result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPeriodicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PeriodicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asV64(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPermanentlyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PermanentlyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asV64(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Scheduled some task.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV64(): {when: number, index: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SessionNewSessionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Session.NewSession')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV64(): {sessionIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV64(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV64(): {stash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === 'd2bed317bcd8237e9dc5cefc39e34371231ddd616b521477bdf03a39c9e823c6'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV64(): {eraIndex: number, validatorPayout: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingForceEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ForceEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new force era mode was set.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.ForceEra') === 'd01e60727d072e84480126126bc575ed2a927476ff6a196deed5f14861885e98'
    }

    /**
     * A new force era mode was set.
     */
    get asV64(): {mode: v64.Forcing} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'd7d337878d792eb4a5ab3986a889ac0dcae3a639d0158fd9509bad8b5f25f81a'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV64(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingOldSlashingReportDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.OldSlashingReportDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get asV64(): {sessionIndex: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV64(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV64(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SlashReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.SlashReported') === 'e39cf2a18a4e10b8687c317e88d62091108b3531886ba13edd6e5b2b3fcd9ddc'
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get asV64(): {validator: Uint8Array, fraction: number, slashEra: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get asV64(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new set of stakers was elected.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election failed. No new era is planned.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The election failed. No new era is planned.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has unbonded this amount.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV64(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingValidatorPrefsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ValidatorPrefsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A validator has set their preferences.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === 'ddd49ae78e2f486962719114045bf4dd54c48ed4387a2f0ad91dc62c7bfc3212'
    }

    /**
     * A validator has set their preferences.
     */
    get asV64(): {stash: Uint8Array, prefs: v64.ValidatorPrefs} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV64(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubstrateBridgeOutboundChannelMessageAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubstrateBridgeOutboundChannel.MessageAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV64(): boolean {
        return this._chain.getEventHash('SubstrateBridgeOutboundChannel.MessageAccepted') === '176599c1bdafa88b712125702951fbf9ec931f760929ca346efc1b59394d8cd0'
    }

    get asV64(): {networkId: v64.SubNetworkId, batchNonce: bigint, messageNonce: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubstrateDispatchMessageDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubstrateDispatch.MessageDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have failed to decode a Call from the message.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('SubstrateDispatch.MessageDecodeFailed') === '44debdb810dc577f1b75189c3d28fa915ee1dbb4865e9798a55960e448a62b7d'
    }

    /**
     * We have failed to decode a Call from the message.
     */
    get asV64(): v64.MessageId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubstrateDispatchMessageDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubstrateDispatch.MessageDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message has been dispatched with given result.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('SubstrateDispatch.MessageDispatched') === '2ab512d54f11e2bbaf07774584a613c509432734a556ee1433e96524967015da'
    }

    /**
     * Message has been dispatched with given result.
     */
    get asV64(): [v64.MessageId, v64.Type_41] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubstrateDispatchMessageRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubstrateDispatch.MessageRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message has been rejected
     */
    get isV64(): boolean {
        return this._chain.getEventHash('SubstrateDispatch.MessageRejected') === '44debdb810dc577f1b75189c3d28fa915ee1dbb4865e9798a55960e448a62b7d'
    }

    /**
     * Message has been rejected
     */
    get asV64(): v64.MessageId {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV64(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.Sudid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV64(): {sudoResult: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudoAsDoneEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.SudoAsDone')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV64(): {sudoResult: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.CodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * `:code` was updated.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic failed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV64(): {dispatchError: v64.DispatchError, dispatchInfo: v64.DispatchInfo} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV64(): {dispatchInfo: v64.DispatchInfo} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemKilledAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.KilledAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was reaped.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new account was created.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemRemarkedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.Remarked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * On on-chain remark happened.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV64(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Technical.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Technical.Burned') === '8d00268fd57ecce8e18da2d4606277a4ced45b7a2a4820442d8bc29372dd2bba'
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get asV64(): [v64.TechAssetId, v64.TechAccountId, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalInputTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Technical.InputTransferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === 'dd064d8b8bfe125fc82b9100e3d06ed1ddff18fd18a6e5164a8aad152ad91681'
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV64(): [v64.TechAssetId, Uint8Array, v64.TechAccountId, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Technical.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Technical.Minted') === '8d00268fd57ecce8e18da2d4606277a4ced45b7a2a4820442d8bc29372dd2bba'
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get asV64(): [v64.TechAssetId, v64.TechAccountId, bigint, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalOutputTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Technical.OutputTransferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '60fe0d60c03a129214e7aaf1d9443956e4ac1de7fed87934849d026b6e59b22a'
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV64(): [v64.TechAssetId, v64.TechAccountId, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalSwapSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Technical.SwapSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Swap operaction is finalised [initiator, finaliser].
     * TechAccountId is only pure TechAccountId.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Technical.SwapSuccess') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Swap operaction is finalised [initiator, finaliser].
     * TechAccountId is only pure TechAccountId.
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV64(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV64(): {proposalHash: Uint8Array, result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV64(): {proposalHash: Uint8Array, result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV64(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV64(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A balance was set by root.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '7ff7fc1c7a34342f2ecee41c8c6428a91bc59187ab7fdbd2403e52d3e8da72d7'
    }

    /**
     * A balance was set by root.
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposited some balance into an account
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Deposited some balance into an account
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was created with some free balance.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * An account was created with some free balance.
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some locked funds were unlocked
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.LockRemoved') === '4da86e4b594fdca1cead9427c0d5aa70f551e1f691f5bb5e406ef01828ca7594'
    }

    /**
     * Some locked funds were unlocked
     */
    get asV64(): {lockId: Uint8Array, currencyId: v64.AssetId32, who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds are locked
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.LockSet') === 'e7f67aaff687aad0ad91da03d98951eed3c33cd4b6c679c74f3c86d0041945bc'
    }

    /**
     * Some funds are locked
     */
    get asV64(): {lockId: Uint8Array, currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some free balance was locked.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Locked') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some free balance was locked.
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.ReserveRepatriated') === 'e27c8522b1252567f1288559c6236ab578e9428f75eed6938d3337ee009f94d5'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV64(): {currencyId: v64.AssetId32, from: Uint8Array, to: Uint8Array, amount: bigint, status: v64.BalanceStatus} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Slashed') === '7de15539d234a7ddc785a2003df8536d05c89cb9109034fb33d0c1f62ad4b7f1'
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTotalIssuanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.TotalIssuanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The total issuance of an currency has been set
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '16ff0f571eabe3d2f6567b464f15483d91843aee3d6233090a5536b9c01010da'
    }

    /**
     * The total issuance of an currency has been set
     */
    get asV64(): {currencyId: v64.AssetId32, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'cc205d02ee9218273262bb5bc028989e2cb4ab713e9ba84800d23a3c0154553d'
    }

    /**
     * Transfer succeeded.
     */
    get asV64(): {currencyId: v64.AssetId32, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some locked balance was freed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Unlocked') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some locked balance was freed.
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV64(): {currencyId: v64.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TradingPairTradingPairStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TradingPair.TradingPairStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TradingPair.TradingPairStored') === '07d7a2498ad83e6414cd88e02e65f5cf8ce133adac83972f4b8c1e567897c0ae'
    }

    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get asV64(): [number, v64.TradingPair] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPaymentTransactionFeePaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPayment.TransactionFeePaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV64(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedWithErrorsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompletedWithErrors')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchInterruptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchInterrupted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV64(): {index: number, error: v64.DispatchError} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityDispatchedAsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.DispatchedAs')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV64(): {result: v64.Type_41} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV64(): {error: v64.DispatchError} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsActualDoesntMatchAvailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.ActualDoesntMatchAvailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('VestedRewards.ActualDoesntMatchAvailable') === 'be78b8bbc6254473ae26507c5aa6ae411c59850f71a46c165fa747685b687589'
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get asV64(): v64.RewardReason {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsCrowdloanClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.CrowdloanClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claimed crowdloan rewards
     */
    get isV64(): boolean {
        return this._chain.getEventHash('VestedRewards.CrowdloanClaimed') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Claimed crowdloan rewards
     */
    get asV64(): [Uint8Array, v64.AssetId32, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsFailedToSaveCalculatedRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.FailedToSaveCalculatedReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Saving reward for account has failed in a distribution series. [account]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('VestedRewards.FailedToSaveCalculatedReward') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Saving reward for account has failed in a distribution series. [account]
     */
    get asV64(): Uint8Array {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsRewardsVestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.RewardsVested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Rewards vested, limits were raised. [vested amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('VestedRewards.RewardsVested') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Rewards vested, limits were raised. [vested amount]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolReferenceAssetChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.ReferenceAssetChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.ReferenceAssetChanged') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV64(): v64.AssetId32 {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolSyntheticAssetDisabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.SyntheticAssetDisabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Synthetic asset has been disabled. [Synthetic Asset Id]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetDisabled') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Synthetic asset has been disabled. [Synthetic Asset Id]
     */
    get asV64(): v64.AssetId32 {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolSyntheticAssetEnabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.SyntheticAssetEnabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetEnabled') === 'f1a493e143982a38e21e7f50da7b073d2a8b733dab1ba49ececbb308c031423f'
    }

    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    get asV64(): [v64.AssetId32, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolSyntheticAssetFeeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.SyntheticAssetFeeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetFeeChanged') === '8e93767f9dcb69608756db13abb73914fa7140df859465e6b6c00f4a456709d5'
    }

    /**
     * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
     */
    get asV64(): [v64.AssetId32, v64.FixedPoint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolSyntheticAssetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.SyntheticAssetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetRemoved') === 'f1a493e143982a38e21e7f50da7b073d2a8b733dab1ba49ececbb308c031423f'
    }

    /**
     * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
     */
    get asV64(): [v64.AssetId32, Uint8Array] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolSyntheticBaseAssetFloorPriceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.SyntheticBaseAssetFloorPriceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Floor price of the synthetic base asset has been changed. [New Floor Price]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticBaseAssetFloorPriceChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Floor price of the synthetic base asset has been changed. [New Floor Price]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XorFeeFeeWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XorFee.FeeWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XorFee.FeeWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    get asV64(): [Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XorFeeReferrerRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XorFee.ReferrerRewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XorFee.ReferrerRewarded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    get asV64(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class XorFeeWeightToFeeMultiplierUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XorFee.WeightToFeeMultiplierUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New multiplier for weight to fee conversion is set
     * (*1_000_000_000_000_000_000). [New value]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('XorFee.WeightToFeeMultiplierUpdated') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * New multiplier for weight to fee conversion is set
     * (*1_000_000_000_000_000_000). [New value]
     */
    get asV64(): bigint {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}
