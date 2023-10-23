import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v1 from './v1'
import * as v7 from './v7'
import * as v22 from './v22'
import * as v33 from './v33'
import * as v38 from './v38'
import * as v42 from './v42'
import * as v43 from './v43'
import * as v45 from './v45'
import * as v46 from './v46'
import * as v47 from './v47'
import * as v53 from './v53'
import * as v57 from './v57'
import * as v60 from './v60'
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
     *  New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Assets.AssetRegistered') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get asV1(): [Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Assets.AssetRegistered') === 'e42a0be2c3ce5e53ba9c2d02e018c2d094b2017decc857eae19a065ac1c7b160'
    }

    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    get asV42(): [v42.AssetId32, Uint8Array] {
        assert(this.isV42)
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
     *  Asset is set as non-mintable. [Target Asset Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Assets.AssetSetNonMintable') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Asset is set as non-mintable. [Target Asset Id]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Assets.AssetSetNonMintable') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    get asV42(): v42.AssetId32 {
        assert(this.isV42)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.AssetUpdated') === '4886f61ece6aa0a161935224b5c8eeb011b50e4d1c52ae4fef559115febc029a'
    }

    /**
     * Asset info has been updated
     */
    get asV53(): [v53.AssetId32, (Uint8Array | undefined), (Uint8Array | undefined)] {
        assert(this.isV53)
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
     *  Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Assets.Burn') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Assets.Burn') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    get asV42(): [Uint8Array, v42.AssetId32, bigint] {
        assert(this.isV42)
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
     *  Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Assets.Mint') === 'a4260d0f93501b9acbb0b39a480f185d20afb97b362a5ae9f20dcbe9b4fabf45'
    }

    /**
     *  Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Assets.Mint') === '07d7187162902e1f3d5b68a2f24bdf532e95979d031b0979531a6a6e230e51c7'
    }

    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    get asV42(): [Uint8Array, Uint8Array, v42.AssetId32, bigint] {
        assert(this.isV42)
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
     *  Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Assets.Transfer') === 'a4260d0f93501b9acbb0b39a480f185d20afb97b362a5ae9f20dcbe9b4fabf45'
    }

    /**
     *  Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Assets.Transfer') === '07d7187162902e1f3d5b68a2f24bdf532e95979d031b0979531a6a6e230e51c7'
    }

    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    get asV42(): [Uint8Array, Uint8Array, v42.AssetId32, bigint] {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('BagsList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV42(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('BagsList.ScoreUpdated') === '3444db3e9dd4128c42e890eb1f98441148f3d7cea3a43f5b223ba3e6cdc2c8b6'
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get asV42(): {who: Uint8Array, newScore: bigint} {
        assert(this.isV42)
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
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV1(): [Uint8Array, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV42(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV42)
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
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV42(): {account: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV42(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV42)
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
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint, v1.BalanceStatus] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV42(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v42.BalanceStatus} {
        assert(this.isV42)
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
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV42(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV45(): boolean {
        return this._chain.getEventHash('Band.RelayersAdded') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * Added new trusted relayer accounts. [relayers]
     */
    get asV45(): Uint8Array[] {
        assert(this.isV45)
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
    get isV45(): boolean {
        return this._chain.getEventHash('Band.RelayersRemoved') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    get asV45(): Uint8Array[] {
        assert(this.isV45)
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
    get isV45(): boolean {
        return this._chain.getEventHash('Band.SymbolsRelayed') === 'f2b0cabdf20443353008549c96f80fd95d1644cc6340ec9f3b0e586acaa79fe2'
    }

    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    get asV45(): Uint8Array[] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    get isV57(): boolean {
        return this._chain.getEventHash('Band.SymbolsRelayed') === 'aeecc2946b2812d355559be362ff8a0f855cd4b8cee89da7ec213e5bb279c08e'
    }

    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    get asV57(): [Uint8Array, bigint][] {
        assert(this.isV57)
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
     *  A new multisig created. [multisig]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigAccountCreated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new multisig created. [multisig]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigApproval') === 'ce25f19a630b86308221a03b4196c77382abc4b4f3ef9d972fbf8dcec8b089c6'
    }

    /**
     *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    get asV1(): [Uint8Array, v1.BridgeTimepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
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
     *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigCancelled') === 'ce25f19a630b86308221a03b4196c77382abc4b4f3ef9d972fbf8dcec8b089c6'
    }

    /**
     *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    get asV1(): [Uint8Array, v1.BridgeTimepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
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
     *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigExecuted') === 'ccf0e74db5c519f72f483f5e25fb096853f7ca61c303fa891b65c18d0b7ea865'
    }

    /**
     *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get asV1(): [Uint8Array, v1.BridgeTimepoint, Uint8Array, Uint8Array, Result<v1.PostDispatchInfo, v1.DispatchErrorWithPostInfoTPostDispatchInfo>] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigExecuted') === '61a94649a9217553fd84ff04a20d25fcd1acc1a4ef40d9778b211a378d0d682c'
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get asV42(): [Uint8Array, v42.BridgeTimepoint, Uint8Array, Uint8Array, (v42.DispatchError | undefined)] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('BridgeMultisig.MultisigExecuted') === '67d09b3ff432b259bcd6128bfa877ba889500c4a2f89f91e4677992037f70954'
    }

    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    get asV53(): [Uint8Array, v53.BridgeTimepoint, Uint8Array, Uint8Array, (v53.DispatchError | undefined)] {
        assert(this.isV53)
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
     *  A new multisig operation has begun. [approving, multisig, call_hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('BridgeMultisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. [approving, multisig, call_hash]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV1)
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
     *  Create poll [who, option, start_block, end_block]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Created') === '656576c6d19e9fcd3967ff218a01a3b80e41aa146f43f955790866fe90b36151'
    }

    /**
     *  Create poll [who, option, start_block, end_block]
     */
    get asV26(): [Uint8Array, number, number, number] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Create poll [who, option, start_timestamp, end_timestamp]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Created') === 'a62875e28c0150e95632b1ce78969e1e861d51d2ca4bc6bd892af3ad78da78e5'
    }

    /**
     *  Create poll [who, option, start_timestamp, end_timestamp]
     */
    get asV37(): [Uint8Array, number, bigint, bigint] {
        assert(this.isV37)
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
     *  Voting [who, poll, option, balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Voted') === 'd08b220435c2bba105ffc874f66bd151749108863f6f4ed5ec2eadd74107ab62'
    }

    /**
     *  Voting [who, poll, option, balance]
     */
    get asV26(): [Uint8Array, Uint8Array, number, bigint] {
        assert(this.isV26)
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
     *  Withdrawn [who, balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresGovernancePlatform.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Withdrawn [who, balance]
     */
    get asV26(): [Uint8Array, bigint] {
        assert(this.isV26)
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
     *  Claim tokens [who, what]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Claimed') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Claim tokens [who, what]
     */
    get asV26(): [Uint8Array, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Claim tokens [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Claimed') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Claim tokens [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  Claim LP Tokens [who, what]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ClaimedLP') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Claim LP Tokens [who, what]
     */
    get asV26(): [Uint8Array, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Claim LP Tokens [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ClaimedLP') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Claim LP Tokens [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  PSWAP claimed
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ClaimedPSWAP') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  PSWAP claimed
     */
    get asV26(): null {
        assert(this.isV26)
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
     *  Contribute [who, what, balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Contributed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Contribute [who, what, balance]
     */
    get asV26(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Contribute [who, what, balance]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.Contributed') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Contribute [who, what, balance]
     */
    get asV42(): [Uint8Array, v42.AssetId32, bigint] {
        assert(this.isV42)
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
     *  Emergency withdraw [who, what, balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.EmergencyWithdrawn') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Emergency withdraw [who, what, balance]
     */
    get asV26(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Emergency withdraw [who, what, balance]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.EmergencyWithdrawn') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Emergency withdraw [who, what, balance]
     */
    get asV42(): [Uint8Array, v42.AssetId32, bigint] {
        assert(this.isV42)
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
     *  Fee changed [balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.FeeChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Fee changed [balance]
     */
    get asV26(): bigint {
        assert(this.isV26)
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
     *  ILO created [who, what]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOCreated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  ILO created [who, what]
     */
    get asV26(): [Uint8Array, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * ILO created [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOCreated') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * ILO created [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  ILO finished [who, what]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOFinished') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  ILO finished [who, what]
     */
    get asV26(): [Uint8Array, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * ILO finished [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.ILOFinished') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * ILO finished [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  Contributor removed [who]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.RemovedWhitelistedContributor') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Contributor removed [who]
     */
    get asV33(): Uint8Array {
        assert(this.isV33)
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
     *  ILO organizer removed [who]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.RemovedWhitelistedIloOrganizer') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  ILO organizer removed [who]
     */
    get asV33(): Uint8Array {
        assert(this.isV33)
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
     *  Contributor whitelisted [who]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.WhitelistedContributor') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Contributor whitelisted [who]
     */
    get asV33(): Uint8Array {
        assert(this.isV33)
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
     *  ILO organizer whitelisted [who]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('CeresLaunchpad.WhitelistedIloOrganizer') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  ILO organizer whitelisted [who]
     */
    get asV33(): Uint8Array {
        assert(this.isV33)
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
     *  Funds Locked [who, amount, block]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('CeresLiquidityLocker.Locked') === '08cc21c0d68ca514760f97888105328fe1685d191a70eb2254c1c645212a936f'
    }

    /**
     *  Funds Locked [who, amount, block]
     */
    get asV22(): [Uint8Array, bigint, number] {
        assert(this.isV22)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Funds Locked [who, amount, timestamp]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('CeresLiquidityLocker.Locked') === '1b06a1b78ae20fd47b293211e65ea37da996d4b8f15995eb04785241ce3f7383'
    }

    /**
     *  Funds Locked [who, amount, timestamp]
     */
    get asV37(): [Uint8Array, bigint, bigint] {
        assert(this.isV37)
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
     *  Ceres deposited. [who, amount]
     */
    get isV19(): boolean {
        return this._chain.getEventHash('CeresStaking.Deposited') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Ceres deposited. [who, amount]
     */
    get asV19(): [Uint8Array, bigint] {
        assert(this.isV19)
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
     *  Rewards changed [balance]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresStaking.RewardsChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Rewards changed [balance]
     */
    get asV26(): bigint {
        assert(this.isV26)
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
     *  Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    get isV19(): boolean {
        return this._chain.getEventHash('CeresStaking.Withdrawn') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    get asV19(): [Uint8Array, bigint, bigint] {
        assert(this.isV19)
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
     *  Fee Changed [who, amount]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.FeeChanged') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Fee Changed [who, amount]
     */
    get asV26(): [Uint8Array, bigint] {
        assert(this.isV26)
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
     *  Funds Locked [who, amount, asset]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Locked') === 'e5d45092dcac17c8173e3bc8fe6865f6fdfb171b3440a9bf9279ca36b62c16f9'
    }

    /**
     *  Funds Locked [who, amount, asset]
     */
    get asV26(): [Uint8Array, bigint, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Funds Locked [who, amount, asset]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Locked') === 'cf27e6222bb99d6f66a50d0452e3301c55fea28a8601b544e560a29d7bb3c7b1'
    }

    /**
     * Funds Locked [who, amount, asset]
     */
    get asV42(): [Uint8Array, bigint, v42.AssetId32] {
        assert(this.isV42)
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
     *  Funds Withdrawn [who, amount, asset]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Withdrawn') === 'e5d45092dcac17c8173e3bc8fe6865f6fdfb171b3440a9bf9279ca36b62c16f9'
    }

    /**
     *  Funds Withdrawn [who, amount, asset]
     */
    get asV26(): [Uint8Array, bigint, Uint8Array] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Funds Withdrawn [who, amount, asset]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('CeresTokenLocker.Withdrawn') === 'cf27e6222bb99d6f66a50d0452e3301c55fea28a8601b544e560a29d7bb3c7b1'
    }

    /**
     * Funds Withdrawn [who, amount, asset]
     */
    get asV42(): [Uint8Array, bigint, v42.AssetId32] {
        assert(this.isV42)
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
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV42(): {proposalHash: Uint8Array} {
        assert(this.isV42)
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
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV1(): [Uint8Array, number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV42(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV42)
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
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV42(): {proposalHash: Uint8Array} {
        assert(this.isV42)
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
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV1(): [Uint8Array, v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV42(): {proposalHash: Uint8Array, result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_41} {
        assert(this.isV53)
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
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV1(): [Uint8Array, v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV42(): {proposalHash: Uint8Array, result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_41} {
        assert(this.isV53)
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
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV1(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV42(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV42)
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
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV1(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV42(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesBalanceUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.BalanceUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Update balance success. [currency_id, who, amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Currencies.BalanceUpdated') === '6762b1a42f9fcdcd68850888c938162aa9377f168da3b72f17c66789593f163e'
    }

    /**
     *  Update balance success. [currency_id, who, amount]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Deposit success. [currency_id, who, amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Currencies.Deposited') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Deposit success. [currency_id, who, amount]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Currencies.Transferred') === 'a4260d0f93501b9acbb0b39a480f185d20afb97b362a5ae9f20dcbe9b4fabf45'
    }

    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Currencies.Withdrawn') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class DexapiDirectExchangeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DEXAPI.DirectExchange')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Exchange of tokens has been performed
     *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('DEXAPI.DirectExchange') === 'c52e692b3869ff8a1ef99f73b47616fdce9aaeac0fd23e0b9465af7e910273da'
    }

    /**
     *  Exchange of tokens has been performed
     *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get asV1(): [Uint8Array, Uint8Array, number, v1.LiquiditySourceType, Uint8Array, Uint8Array, bigint, bigint, bigint] {
        assert(this.isV1)
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
     *  DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.DepositFeeChanged') === 'd461a7db3aa74edecb000067e12d0509b24834e9d39ef0004f8cb65754aaf39b'
    }

    /**
     *  DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV33(): [Uint8Array, Uint8Array, Uint8Array, boolean, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.DepositFeeChanged') === 'b126ab93fffa5221a684fa577a71d1f75214304b6fbf30d5d5f8cd6acaea224d'
    }

    /**
     * DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.DepositFeeChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean, bigint] {
        assert(this.isV43)
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
     *  Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Deposited') === 'd461a7db3aa74edecb000067e12d0509b24834e9d39ef0004f8cb65754aaf39b'
    }

    /**
     *  Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV33(): [Uint8Array, Uint8Array, Uint8Array, boolean, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Deposited') === 'b126ab93fffa5221a684fa577a71d1f75214304b6fbf30d5d5f8cd6acaea224d'
    }

    /**
     * Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Deposited') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean, bigint] {
        assert(this.isV43)
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
     *  Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.InfoChanged') === 'd461a7db3aa74edecb000067e12d0509b24834e9d39ef0004f8cb65754aaf39b'
    }

    /**
     *  Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV35(): [Uint8Array, Uint8Array, Uint8Array, boolean, bigint] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.InfoChanged') === 'b126ab93fffa5221a684fa577a71d1f75214304b6fbf30d5d5f8cd6acaea224d'
    }

    /**
     * Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.InfoChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean, bigint] {
        assert(this.isV43)
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
     *  Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.MultiplierChanged') === '4e83898b67d1713400079172dd53013e265d3290212db8e522777834a80fb246'
    }

    /**
     *  Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV33(): [Uint8Array, Uint8Array, Uint8Array, boolean, number] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.MultiplierChanged') === '94c8ea87a4470e0f0c87d16d4bde556458b50e9a4090c8135d6e80f77a353c19'
    }

    /**
     * Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean, number] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.MultiplierChanged') === '8fa4d9bbfba87885c0607f53c20bc62fdd64a14e9b0302a39b6cd19c6b3f5a42'
    }

    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean, number] {
        assert(this.isV43)
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
     *  Pool added [who, pool_asset, reward_asset, is_farm]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolAdded') === '2eeb0e842cda7e043d2bda89ebf3635a4b55d1d21cd5f5db60955620a207891e'
    }

    /**
     *  Pool added [who, pool_asset, reward_asset, is_farm]
     */
    get asV33(): [Uint8Array, Uint8Array, Uint8Array, boolean] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool added [who, pool_asset, reward_asset, is_farm]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolAdded') === 'bddcb6cdb95b509cca657c00b139955a8ad44b81f2169b6a9534c66752ea785f'
    }

    /**
     * Pool added [who, pool_asset, reward_asset, is_farm]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolAdded') === '176dc62b208d548aaa0df79ce21570cb7ad8f4992e413a0549425bbc8e6d413e'
    }

    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean] {
        assert(this.isV43)
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
     *  Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolRemoved') === '2eeb0e842cda7e043d2bda89ebf3635a4b55d1d21cd5f5db60955620a207891e'
    }

    /**
     *  Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    get asV33(): [Uint8Array, Uint8Array, Uint8Array, boolean] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolRemoved') === 'bddcb6cdb95b509cca657c00b139955a8ad44b81f2169b6a9534c66752ea785f'
    }

    /**
     * Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.PoolRemoved') === '176dc62b208d548aaa0df79ce21570cb7ad8f4992e413a0549425bbc8e6d413e'
    }

    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean] {
        assert(this.isV43)
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
     *  Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.RewardWithdrawn') === '1215eba7d2c3757ef47542774d07d8e9c56d03d1ec212f238b76af5324085c7b'
    }

    /**
     *  Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get asV33(): [Uint8Array, bigint, Uint8Array, Uint8Array, boolean] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.RewardWithdrawn') === '5ce9acb91c832bdaac32c4bf89877eea689d6b2481c03207bc60a3a68450b7d0'
    }

    /**
     * Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get asV42(): [Uint8Array, bigint, v42.AssetId32, v42.AssetId32, boolean] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.RewardWithdrawn') === '82ef4a44ff36494e8f87478904ac53d0874e6e102d96e1ad5cda4a41f237ea56'
    }

    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV43(): [Uint8Array, bigint, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean] {
        assert(this.isV43)
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
     *  Token info changed [who, what]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenInfoChanged') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Token info changed [who, what]
     */
    get asV33(): [Uint8Array, Uint8Array] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Token info changed [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenInfoChanged') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Token info changed [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  Token registered [who, what]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenRegistered') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Token registered [who, what]
     */
    get asV33(): [Uint8Array, Uint8Array] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Token registered [who, what]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TokenRegistered') === '0788f065409b5f87ae78676713c60cc343cbf2a40fbdc26f68afb83a75c79974'
    }

    /**
     * Token registered [who, what]
     */
    get asV42(): [Uint8Array, v42.AssetId32] {
        assert(this.isV42)
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
     *  Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TotalTokensChanged') === 'd461a7db3aa74edecb000067e12d0509b24834e9d39ef0004f8cb65754aaf39b'
    }

    /**
     *  Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV35(): [Uint8Array, Uint8Array, Uint8Array, boolean, bigint] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TotalTokensChanged') === 'b126ab93fffa5221a684fa577a71d1f75214304b6fbf30d5d5f8cd6acaea224d'
    }

    /**
     * Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    get asV42(): [Uint8Array, v42.AssetId32, v42.AssetId32, boolean, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.TotalTokensChanged') === '297d07e4407a171bc16cf651e202aba5d0e2d9839f4c402e8808eb06b3453086'
    }

    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    get asV43(): [Uint8Array, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean, bigint] {
        assert(this.isV43)
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
     *  Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Withdrawn') === '1215eba7d2c3757ef47542774d07d8e9c56d03d1ec212f238b76af5324085c7b'
    }

    /**
     *  Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get asV33(): [Uint8Array, bigint, Uint8Array, Uint8Array, boolean] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Withdrawn') === '5ce9acb91c832bdaac32c4bf89877eea689d6b2481c03207bc60a3a68450b7d0'
    }

    /**
     * Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    get asV42(): [Uint8Array, bigint, v42.AssetId32, v42.AssetId32, boolean] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DemeterFarmingPlatform.Withdrawn') === '82ef4a44ff36494e8f87478904ac53d0874e6e102d96e1ad5cda4a41f237ea56'
    }

    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    get asV43(): [Uint8Array, bigint, v43.AssetId32, v43.AssetId32, v43.AssetId32, boolean] {
        assert(this.isV43)
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
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV42(): {proposalHash: Uint8Array} {
        assert(this.isV42)
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
     *  A referendum has been cancelled. \[ref_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A referendum has been cancelled. \[ref_index\]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV42(): {refIndex: number} {
        assert(this.isV42)
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
     *  An account has delegated their vote to another account. \[who, target\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An account has delegated their vote to another account. \[who, target\]
     */
    get asV1(): [Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV42(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal has been enacted. \[ref_index, is_ok\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
    }

    /**
     *  A proposal has been enacted. \[ref_index, is_ok\]
     */
    get asV1(): [number, boolean] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV42(): {refIndex: number, result: v42.Type_38} {
        assert(this.isV42)
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
     *  An external proposal has been tabled.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  An external proposal has been tabled.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV42(): {refIndex: number} {
        assert(this.isV42)
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
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV42(): {refIndex: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageInvalidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageInvalid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    get asV1(): [Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV42(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageMissingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageMissing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    get asV1(): [Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV42(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV42(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
    }

    /**
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV42(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageUsedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageUsed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV42(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV42(): {propIndex: number} {
        assert(this.isV42)
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
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get asV1(): [number, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV42(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV42(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV42)
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
     *  A referendum has begun. \[ref_index, threshold\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     *  A referendum has begun. \[ref_index, threshold\]
     */
    get asV1(): [number, v1.VoteThreshold] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV42(): {refIndex: number, threshold: v42.VoteThreshold} {
        assert(this.isV42)
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
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
    }

    /**
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    get asV1(): [number, bigint, Uint8Array[]] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV42(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV53(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV53)
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
     *  An \[account\] has cancelled a previous delegation operation.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] has cancelled a previous delegation operation.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV42(): {account: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An \[account\] has been unlocked successfully.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Unlocked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] has been unlocked successfully.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  An external proposal has been vetoed. \[who, proposal_hash, until\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '64ac8a943d1fe7bd7a24f0e53a57114f1d7eb2c98c411ff4d06daf824de450a7'
    }

    /**
     *  An external proposal has been vetoed. \[who, proposal_hash, until\]
     */
    get asV1(): [Uint8Array, Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV42(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV42(): {voter: Uint8Array, refIndex: number, vote: v42.AccountVote} {
        assert(this.isV42)
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
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get asV53(): null {
        assert(this.isV53)
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
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'd5e51cdb9bc2ebeb883517f810340524dcf71a9a43a1f33048bda8bd8170c4dc'
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get asV42(): {electionCompute: (v42.ElectionCompute | undefined)} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'ed50f7c0b841dc5aadb056d9e4cf2c665a79bd8ac019de47ef20e466590483fa'
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get asV53(): {compute: v53.ElectionCompute, score: v53.ElectionScore} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.PhaseTransitioned') === 'c7ca79c013a2eb6682b0eae5badc17841b3fa2ec00221d968b3e1fb4ce1f7d8f'
    }

    /**
     * There was a phase transition in a given round.
     */
    get asV53(): {from: v53.Phase, to: v53.Phase, round: number} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV42(): {account: Uint8Array, value: bigint} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The signed phase of the given round has started.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The signed phase of the given round has started.
     */
    get asV42(): {round: number} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV42(): {account: Uint8Array, value: bigint} {
        assert(this.isV42)
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
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '4023ddb4e5fc71e0a0d9479091f55fc4d7cdcefdd7ed5f2ba18b799eba527399'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV42(): {electionCompute: v42.ElectionCompute, prevEjected: boolean} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
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
    get isV53(): boolean {
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
    get asV53(): {compute: v53.ElectionCompute, origin: (Uint8Array | undefined), prevEjected: boolean} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseUnsignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.UnsignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.UnsignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get asV42(): {round: number} {
        assert(this.isV42)
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
     *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
     *  runner-up.
     * 
     *  Note that old members and runners-up are also candidates.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.CandidateSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
     *  runner-up.
     * 
     *  Note that old members and runners-up are also candidates.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get asV42(): {candidate: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  Internal error happened while trying to perform election.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
     *  `EmptyTerm`.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.MemberKicked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
     *  `EmptyTerm`.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get asV42(): {member: Uint8Array} {
        assert(this.isV42)
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
     *  A new term with \[new_members\]. This indicates that enough candidates existed to run the
     *  election, not that enough have has been elected. The inner value must be examined for
     *  this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
     *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.NewTerm') === 'd7a45cf0fb3b6c39f6db66d04bddff68afaa850200debf915801414eda809fe1'
    }

    /**
     *  A new term with \[new_members\]. This indicates that enough candidates existed to run the
     *  election, not that enough have has been elected. The inner value must be examined for
     *  this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
     *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
     */
    get asV1(): [Uint8Array, bigint][] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get asV42(): {newMembers: [Uint8Array, bigint][]} {
        assert(this.isV42)
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
     *  Someone has renounced their candidacy.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.Renounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Someone has renounced their candidacy.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has renounced their candidacy.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Someone has renounced their candidacy.
     */
    get asV42(): {candidate: Uint8Array} {
        assert(this.isV42)
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
     *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.SeatHolderSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get asV42(): {seatHolder: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.ApprovalsCollected') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  The request wasn't finalized nor cancelled. [Request Hash]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('EthBridge.CancellationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The request wasn't finalized nor cancelled. [Request Hash]
     */
    get asV3(): Uint8Array {
        assert(this.isV3)
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
     *  The incoming request finalization has been failed. [Request Hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.IncomingRequestFinalizationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The incoming request finalization has been failed. [Request Hash]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  The incoming request has been finalized. [Request Hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.IncomingRequestFinalized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The incoming request has been finalized. [Request Hash]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
    get isV53(): boolean {
        return this._chain.getEventHash('EthBridge.RegisterRequestFailed') === 'd385db17a37a17bb6513c4e93f27031a3f6a875af782149da647206ea8ec3970'
    }

    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    get asV53(): [Uint8Array, v53.DispatchError] {
        assert(this.isV53)
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
     *  The request was aborted and cancelled. [Request Hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.RequestAborted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The request was aborted and cancelled. [Request Hash]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  The request finalization has been failed. [Request Hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.RequestFinalizationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The request finalization has been failed. [Request Hash]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  New request has been registered. [Request Hash]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthBridge.RequestRegistered') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  New request has been registered. [Request Hash]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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

    get isV22(): boolean {
        return this._chain.getEventHash('Faucet.Transferred') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    get asV22(): [Uint8Array, bigint] {
        assert(this.isV22)
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
     *  New authority set has been applied. \[authority_set\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
    }

    /**
     *  New authority set has been applied. \[authority_set\]
     */
    get asV1(): [Uint8Array, bigint][] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New authority set has been applied.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV42(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV42)
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
     *  Current authority set has been paused.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been paused.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  Current authority set has been resumed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been resumed.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Created') === 'ebfe5a50f63690fc9fab57be33872850a435d03bec24186c1dde30a0d1be45bc'
    }

    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    get asV47(): [Uint8Array, string, bigint, bigint] {
        assert(this.isV47)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    get isV57(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Created') === '321c553894b4e645eb1d256dd648baa58c54c041b4f9631d1d7bd797ae28a72d'
    }

    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    get asV57(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV57)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.CreatorFundsWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Creator Funds Withdrawn [who, balance]
     */
    get asV47(): [Uint8Array, bigint] {
        assert(this.isV47)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.MinimumHermesForCreatingPollChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Change minimum Hermes for creating poll [balance]
     */
    get asV47(): bigint {
        assert(this.isV47)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.MinimumHermesForVotingChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Change minimum Hermes for voting [balance]
     */
    get asV47(): bigint {
        assert(this.isV47)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Voted') === '752a0ac8a4f811d1071ff5cae51fcd9071e3e68f0bfb99af379460baa3bcc14e'
    }

    /**
     * Voting [who, poll, option]
     */
    get asV47(): [Uint8Array, Uint8Array, v47.VotingOption] {
        assert(this.isV47)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Voting [who, poll, option]
     */
    get isV57(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.Voted') === '1794a5df6e71f8ceb9882994f762465a4a5bee5a2c4b3bc50c73caa5e894cc8d'
    }

    /**
     * Voting [who, poll, option]
     */
    get asV57(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV57)
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
    get isV47(): boolean {
        return this._chain.getEventHash('HermesGovernancePlatform.VoterFundsWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Voter Funds Withdrawn [who, balance]
     */
    get asV47(): [Uint8Array, bigint] {
        assert(this.isV47)
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
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get asV3(): [Uint8Array, bigint] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV42(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get asV3(): [Uint8Array, bigint] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV42(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get asV3(): Uint8Array {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV42(): {who: Uint8Array} {
        assert(this.isV42)
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
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get asV3(): [Uint8Array, number] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV42(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV42)
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
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get asV3(): [Uint8Array, number] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV42(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV42)
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
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get asV3(): [Uint8Array, number] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV42(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV42)
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
     *  A registrar was added. \[registrar_index\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A registrar was added. \[registrar_index\]
     */
    get asV3(): number {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV42(): {registrarIndex: number} {
        assert(this.isV42)
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
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV3(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV42(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get asV3(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV42(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV3(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV42(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV42)
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
     *  At the end of the session, no offence was committed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  A new heartbeat was received from `AuthorityId` \[authority_id\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new heartbeat was received from `AuthorityId` \[authority_id\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV42(): {authorityId: Uint8Array} {
        assert(this.isV42)
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
     *  At the end of the session, at least one validator was found to be \[offline\].
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '15e6fe82a6ae2efb2b8a5fb32d03f1140dda1d88a982e280ae917cb281bd63e1'
    }

    /**
     *  At the end of the session, at least one validator was found to be \[offline\].
     */
    get asV1(): [Uint8Array, v1.FullIdentification][] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV42(): {offline: [Uint8Array, v42.Exposure][]} {
        assert(this.isV42)
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
     *  Migrated. [source, target]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('IrohaMigration.Migrated') === '63c13892676f668f302b98b26d37c8976f6fe98fbb37aa3f0255d1d63d18bffb'
    }

    /**
     *  Migrated. [source, target]
     */
    get asV1(): [Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Migrated. [source, target]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('IrohaMigration.Migrated') === 'de50809c6ea797db05c82cecb0aa8021786798c5b6189381f752e2e23b804d06'
    }

    /**
     * Migrated. [source, target]
     */
    get asV42(): [string, Uint8Array] {
        assert(this.isV42)
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
    get isV57(): boolean {
        return this._chain.getEventHash('LiquidityProxy.BatchSwapExecuted') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     * Batch of swap transfers has been performed
     * [ADAR Fee, Input amount]
     */
    get asV57(): [bigint, bigint] {
        assert(this.isV57)
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
     *  Exchange of tokens has been performed
     *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('LiquidityProxy.Exchange') === 'c4616406baae7700862a5be79774373a812ab7646398d70d04b81ec232ab09db'
    }

    /**
     *  Exchange of tokens has been performed
     *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get asV1(): [Uint8Array, number, Uint8Array, Uint8Array, bigint, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('LiquidityProxy.Exchange') === '78b6a2d4de707f282875e4a3e17a8daeb80ccf03a32aa1a7fe82dad8cb794197'
    }

    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    get asV42(): [Uint8Array, number, v42.AssetId32, v42.AssetId32, bigint, bigint, bigint, v42.LiquiditySourceId[]] {
        assert(this.isV42)
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
     *  Liquidity source was disabled
     */
    get isV38(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceDisabled') === '56f813b5fcd4a7e12152808c737397d2cd460f4d29400c640164bbeb391e3ba2'
    }

    /**
     *  Liquidity source was disabled
     */
    get asV38(): v38.LiquiditySourceType {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Liquidity source was disabled
     */
    get isV42(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceDisabled') === '261493d49c343688c6e341bce0e026855feacbd7a85f1bb2f4477030b8a0c4d8'
    }

    /**
     * Liquidity source was disabled
     */
    get asV42(): v42.LiquiditySourceType {
        assert(this.isV42)
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
     *  Liquidity source was enabled
     */
    get isV38(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceEnabled') === '56f813b5fcd4a7e12152808c737397d2cd460f4d29400c640164bbeb391e3ba2'
    }

    /**
     *  Liquidity source was enabled
     */
    get asV38(): v38.LiquiditySourceType {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Liquidity source was enabled
     */
    get isV42(): boolean {
        return this._chain.getEventHash('LiquidityProxy.LiquiditySourceEnabled') === '261493d49c343688c6e341bce0e026855feacbd7a85f1bb2f4477030b8a0c4d8'
    }

    /**
     * Liquidity source was enabled
     */
    get asV42(): v42.LiquiditySourceType {
        assert(this.isV42)
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
     *  Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated') === 'a2a6e25fb07f79de35b29abd648fa36294de86462c992c85032b7ece7385497b'
    }

    /**
     *  Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get asV1(): [Uint8Array, (bigint | undefined)] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated') === 'd2bdabab52183f7a1c8c9d4c1bb6b0aba679768cd2af453443a600f15d81090e'
    }

    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    get asV42(): [v42.AssetId32, (v42.FixedPoint | undefined)] {
        assert(this.isV42)
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
     *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PoolInitialized') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PoolInitialized') === '21cf9054b1ae36cdcecba8bfb656549bc3b239aaa819e7795ede36e56786a640'
    }

    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    get asV42(): [number, v42.AssetId32] {
        assert(this.isV42)
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
     *  Price bias was changed. [New Price Bias]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PriceBiasChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Price bias was changed. [New Price Bias]
     */
    get asV22(): bigint {
        assert(this.isV22)
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
     *  Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.PriceChangeConfigChanged') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     *  Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    get asV22(): [bigint, bigint] {
        assert(this.isV22)
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
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.ReferenceAssetChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('MulticollateralBondingCurvePool.ReferenceAssetChanged') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV42(): v42.AssetId32 {
        assert(this.isV42)
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
     *  A multisig operation has been approved by someone.
     *  \[approving, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been approved by someone.
     *  \[approving, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV42(): {approving: Uint8Array, timepoint: v42.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV42)
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
     *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV42(): {cancelling: Uint8Array, timepoint: v42.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV42)
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
     *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'e368973d939e86d8e4639ec21b8ed877b5a6772f4da0bad0d4fe5df98c063ad2'
    }

    /**
     *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array, v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV42(): {approving: Uint8Array, timepoint: v42.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '303cb15b241c821ed02efcceb1d8f92a11e2a124e8eef73810b68e2592455034'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV53(): {approving: Uint8Array, timepoint: v53.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v53.Type_41} {
        assert(this.isV53)
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
     *  A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new multisig operation has begun.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV42(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV42)
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
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false)
     *  \[kind, timeslot, applied\].
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '18f4beafc9fe74427abdec4798ff1f921e7eef3c6cdea8f8dc175b766343d5be'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false)
     *  \[kind, timeslot, applied\].
     */
    get asV1(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV42(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV42)
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
    get isV45(): boolean {
        return this._chain.getEventHash('OracleProxy.OracleDisabled') === 'adeac13230a94b92e7a38f9f55429f55e67de9bcc25e4fe39b33083a9dcb522c'
    }

    /**
     * Oracle was successfully disabled. [oracle]
     */
    get asV45(): v45.Oracle {
        assert(this.isV45)
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
    get isV45(): boolean {
        return this._chain.getEventHash('OracleProxy.OracleEnabled') === 'adeac13230a94b92e7a38f9f55429f55e67de9bcc25e4fe39b33083a9dcb522c'
    }

    /**
     * Oracle was successfully enabled. [oracle]
     */
    get asV45(): v45.Oracle {
        assert(this.isV45)
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
     *  Permission was assigned to the account in the scope. [permission, who]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Permissions.PermissionAssigned') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Permission was assigned to the account in the scope. [permission, who]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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
     *  Permission was created with an owner. [permission, who]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Permissions.PermissionCreated') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Permission was created with an owner. [permission, who]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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
     *  Permission was granted to a holder. [permission, who]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Permissions.PermissionGranted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Permission was granted to a holder. [permission, who]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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
     *  Permission was transfered to a new owner. [permission, who]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Permissions.PermissionTransfered') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Permission was transfered to a new owner. [permission, who]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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

    get isV1(): boolean {
        return this._chain.getEventHash('PoolXYK.PoolIsInitialized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV1(): Uint8Array {
        assert(this.isV1)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
     *  Burn rate updated.
     *  [Current Burn Rate]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.BurnRateChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Burn rate updated.
     *  [Current Burn Rate]
     */
    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PswapDistribution.BurnRateChanged') === '86d428f85eed068faa1c1f92711bd8e55cb3b9777b62fd4eaf8b8feedbba929a'
    }

    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    get asV42(): v42.FixedPoint {
        assert(this.isV42)
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
     *  Problem occurred that resulted in fees exchange not done.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchangeFailed') === '1c47147a5e3408ef16ab0c86c6b68e9be7ebfcca1513a958f8b8a31a3e56cdcb'
    }

    /**
     *  Problem occurred that resulted in fees exchange not done.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    get asV1(): [number, Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchangeFailed') === '4f2d7a7541b60f8900fbc9ad2782f69f5d6e04459e913de74b81b8d3338cfdb1'
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
     */
    get asV42(): [number, Uint8Array, v42.AssetId32, bigint, v42.AssetId32] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get isV46(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchangeFailed') === '79e1d28657a4a40d98a2a20000c585a879f55b4ab6dc3bfe720a49fb3ec87a3e'
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get asV46(): [number, Uint8Array, v46.AssetId32, bigint, v46.AssetId32, v46.DispatchError] {
        assert(this.isV46)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchangeFailed') === 'ce34bd157711f579cc988e45046df06dce0f8c5377f7100d124c1ec6858cc68b'
    }

    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    get asV53(): [number, Uint8Array, v53.AssetId32, bigint, v53.AssetId32, v53.DispatchError] {
        assert(this.isV53)
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
     *  Fees successfully exchanged for appropriate amount of pool tokens.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchanged') === 'c2d0876ba833740f27e0c40f0d6f2c1c0f3ca012c50d07bc49dcd01fa6e62206'
    }

    /**
     *  Fees successfully exchanged for appropriate amount of pool tokens.
     *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get asV1(): [number, Uint8Array, Uint8Array, bigint, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PswapDistribution.FeesExchanged') === 'ed0bc6e528746e7bd0696a32ed5811e0ed2258b209481c160a220f99e52986f0'
    }

    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    get asV42(): [number, Uint8Array, v42.AssetId32, bigint, v42.AssetId32, bigint] {
        assert(this.isV42)
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
     *  Incentives successfully sent out to shareholders.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributed') === 'cc203d13d3d2ce7c97c9514af6133438bf9e724dfbc81f6b0bf356dd59fb1ca0'
    }

    /**
     *  Incentives successfully sent out to shareholders.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get asV1(): [number, Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributed') === '854e85ed7f4db5de47867e035b1cb45563fb3966182969651719fe003e52039f'
    }

    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    get asV42(): [number, Uint8Array, v42.AssetId32, bigint, bigint] {
        assert(this.isV42)
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
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Available Incentive Amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributionFailed') === 'd6b774c5b258baa877a8319bea3e3f8d42d54077cfd3ad4848765f205196496c'
    }

    /**
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id, Incentive Asset Id, Available Incentive Amount]
     */
    get asV1(): [number, Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentiveDistributionFailed') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Problem occurred that resulted in incentive distribution not done.
     *  [DEX Id, Fees Account Id]
     */
    get asV8(): [number, Uint8Array] {
        assert(this.isV8)
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
     *  This is needed for other pallet that will use this variables, for example this is
     *  farming pallet.
     *  [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     *  Incentives burned (Incentives that is not revived (to burn)]).
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentivesBurnedAfterExchange') === '509fd6bf05af1312163727733b94afe6ea0234cd120ac7f53d4cf765e8c50e51'
    }

    /**
     *  This is needed for other pallet that will use this variables, for example this is
     *  farming pallet.
     *  [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     *  Incentives burned (Incentives that is not revived (to burn)]).
     */
    get asV1(): [number, Uint8Array, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PswapDistribution.IncentivesBurnedAfterExchange') === '86115cf2e07ba6994db8f1bb5b570bd0ebbe5952c3e4f18dc334ab609f6d24fc'
    }

    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    get asV42(): [number, v42.AssetId32, bigint, bigint] {
        assert(this.isV42)
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
     *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.NothingToDistribute') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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
     *  Fees Account contains zero base tokens, thus exchange is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('PswapDistribution.NothingToExchange') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Fees Account contains zero base tokens, thus exchange is dismissed.
     *  [DEX Id, Fees Account Id]
     */
    get asV1(): [number, Uint8Array] {
        assert(this.isV1)
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
     *  The account has claimed their rewards. [account]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Rewards.Claimed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The account has claimed their rewards. [account]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  Storage migration to version 1.2.0 completed
     */
    get isV19(): boolean {
        return this._chain.getEventHash('Rewards.MigrationCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Storage migration to version 1.2.0 completed
     */
    get asV19(): null {
        assert(this.isV19)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallLookupFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallLookupFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV42(): {task: [number, number], id: (Uint8Array | undefined), error: v42.LookupError} {
        assert(this.isV42)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV53)
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
     *  Canceled some task. \[when, index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Canceled some task. \[when, index\]
     */
    get asV1(): [number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Canceled some task.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV42(): {when: number, index: number} {
        assert(this.isV42)
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
     *  Dispatched some task. \[task, id, result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '8932a074b1c2cd5ce9792be58d56c1325be1d704098dac81f23ff6804e2d5fee'
    }

    /**
     *  Dispatched some task. \[task, id, result\]
     */
    get asV1(): [[number, number], (Uint8Array | undefined), v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV42(): {task: [number, number], id: (Uint8Array | undefined), result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'b67102cc706599639b8e52e776b81c51142dad43652e91e7e72197b7df9a63f4'
    }

    /**
     * Dispatched some task.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined), result: v53.Type_41} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV53)
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
     *  Scheduled some task. \[when, index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Scheduled some task. \[when, index\]
     */
    get asV1(): [number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Scheduled some task.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV42(): {when: number, index: number} {
        assert(this.isV42)
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
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV42(): {sessionIndex: number} {
        assert(this.isV42)
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
     *  An account has bonded this amount. \[stash, amount\]
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has bonded this amount. \[stash, amount\]
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV53(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     * \[stash\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    get asV42(): Uint8Array {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV53(): {stash: Uint8Array} {
        assert(this.isV53)
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
     * \[era_index, validator_payout, remainder\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    get asV42(): [number, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === 'd2bed317bcd8237e9dc5cefc39e34371231ddd616b521477bdf03a39c9e823c6'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV53(): {eraIndex: number, validatorPayout: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPayoutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPayout')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.EraPayout') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get asV1(): [number, bigint] {
        assert(this.isV1)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.ForceEra') === 'd01e60727d072e84480126126bc575ed2a927476ff6a196deed5f14861885e98'
    }

    /**
     * A new force era mode was set.
     */
    get asV53(): {mode: v53.Forcing} {
        assert(this.isV53)
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
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get asV1(): [Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'd7d337878d792eb4a5ab3986a889ac0dcae3a639d0158fd9509bad8b5f25f81a'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV53(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV53)
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
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed. \[session_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed. \[session_index\]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get asV53(): {sessionIndex: number} {
        assert(this.isV53)
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
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV42(): [number, Uint8Array] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV53(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Reward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
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
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV42(): [Uint8Array, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV53(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slash')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.SlashReported') === 'e39cf2a18a4e10b8687c317e88d62091108b3531886ba13edd6e5b2b3fcd9ddc'
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get asV53(): {validator: Uint8Array, fraction: number, slashEra: number} {
        assert(this.isV53)
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
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get asV42(): [Uint8Array, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get asV53(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.SolutionStored') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    get asV1(): v1.ElectionCompute {
        assert(this.isV1)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV42(): null {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElection')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new set of stakers was elected with the given \[compute\].
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.StakingElection') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new set of stakers was elected with the given \[compute\].
     */
    get asV1(): v1.ElectionCompute {
        assert(this.isV1)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The election failed. No new era is planned.
     */
    get asV42(): null {
        assert(this.isV42)
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
     *  An account has unbonded this amount. \[stash, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has unbonded this amount. \[stash, amount\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has unbonded this amount.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV53(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === '8fa3f27535c1d0f1ffdc2ce940a56867f890d0c9454d7ce784db7b18f03b4648'
    }

    /**
     * A validator has set their preferences.
     */
    get asV42(): [Uint8Array, v42.ValidatorPrefs] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A validator has set their preferences.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === 'ddd49ae78e2f486962719114045bf4dd54c48ed4387a2f0ad91dc62c7bfc3212'
    }

    /**
     * A validator has set their preferences.
     */
    get asV53(): {stash: Uint8Array, prefs: v53.ValidatorPrefs} {
        assert(this.isV53)
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
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue. \[stash, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue. \[stash, amount\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV53(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV22(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV22(): Uint8Array {
        assert(this.isV22)
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
     *  A sudo just took place. \[result\]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV22(): v22.DispatchResult {
        assert(this.isV22)
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
     *  A sudo just took place. \[result\]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV22(): v22.DispatchResult {
        assert(this.isV22)
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
     *  `:code` was updated.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  An extrinsic failed. \[error, info\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get asV1(): [v1.DispatchError, v1.DispatchInfo] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV42(): {dispatchError: v42.DispatchError, dispatchInfo: v42.DispatchInfo} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV53(): {dispatchError: v53.DispatchError, dispatchInfo: v53.DispatchInfo} {
        assert(this.isV53)
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
     *  An extrinsic completed successfully. \[info\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get asV1(): v1.DispatchInfo {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV42(): {dispatchInfo: v42.DispatchInfo} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV53(): {dispatchInfo: v53.DispatchInfo} {
        assert(this.isV53)
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
     *  An \[account\] was reaped.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] was reaped.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV42(): {account: Uint8Array} {
        assert(this.isV42)
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
     *  A new \[account\] was created.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new \[account\] was created.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV42(): {account: Uint8Array} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV42(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV42)
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
     *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     *  For full kind of accounts like in Minted.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Technical.Burned') === 'be7cabb70fc2bda68bfd3dccf377736ebb3ff31044a4492251798f16da00e912'
    }

    /**
     *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     *  For full kind of accounts like in Minted.
     */
    get asV1(): [v1.TechAssetId, v1.TechAccountId, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     *  For full kind of accounts like in Minted.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Technical.Burned') === '3d3024b1c7952ef50b4b3f99486c42124891f012427b9cee0e6a8e492d3e1d78'
    }

    /**
     *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     *  For full kind of accounts like in Minted.
     */
    get asV33(): [v33.TechAssetId, v33.TechAccountId, bigint, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Technical.Burned') === '69189f1f3a968fed41f9d35d9a6d44a42cb72011b9b3f99b1b224a3d76eb20ff'
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get asV42(): [v42.TechAssetId, v42.TechAccountId, bigint, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get isV46(): boolean {
        return this._chain.getEventHash('Technical.Burned') === 'ec28e5a71cb2eb1f5c8b16d1bcc8e6a52f32bb79c9bbf64dd640b961c5362656'
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get asV46(): [v46.TechAssetId, v46.TechAccountId, bigint, bigint] {
        assert(this.isV46)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get isV57(): boolean {
        return this._chain.getEventHash('Technical.Burned') === '8d00268fd57ecce8e18da2d4606277a4ced45b7a2a4820442d8bc29372dd2bba'
    }

    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    get asV57(): [v57.TechAssetId, v57.TechAccountId, bigint, bigint] {
        assert(this.isV57)
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
     *  Some assets were transferred in. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === 'c5f8a1ebaf567741e298d189eecc9c3998fd9ca5b8d8f6a7c91b19273e0f4793'
    }

    /**
     *  Some assets were transferred in. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get asV1(): [v1.TechAssetId, Uint8Array, v1.TechAccountId, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Some assets were transferred in. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === '7f614fb62ab0b0418cda76c11a2ae69da6fe366aaa127be5ec36f8be5c2606a0'
    }

    /**
     *  Some assets were transferred in. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get asV33(): [v33.TechAssetId, Uint8Array, v33.TechAccountId, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === '58825ef74a5513e0a7ae1a5c4d00cd1faf13206b49303ebe728cbd9ef1b1901b'
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV42(): [v42.TechAssetId, Uint8Array, v42.TechAccountId, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV46(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === '3ad7bfc405c698c6b4527aa71cab5be6ae68f91ecc643ebb3ee94a77497424c5'
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV46(): [v46.TechAssetId, Uint8Array, v46.TechAccountId, bigint] {
        assert(this.isV46)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV57(): boolean {
        return this._chain.getEventHash('Technical.InputTransferred') === 'dd064d8b8bfe125fc82b9100e3d06ed1ddff18fd18a6e5164a8aad152ad91681'
    }

    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV57(): [v57.TechAssetId, Uint8Array, v57.TechAccountId, bigint] {
        assert(this.isV57)
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
     *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     *  This is not only for pure TechAccountId.
     *  TechAccountId can be just wrapped AccountId.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Technical.Minted') === 'be7cabb70fc2bda68bfd3dccf377736ebb3ff31044a4492251798f16da00e912'
    }

    /**
     *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     *  This is not only for pure TechAccountId.
     *  TechAccountId can be just wrapped AccountId.
     */
    get asV1(): [v1.TechAssetId, v1.TechAccountId, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     *  This is not only for pure TechAccountId.
     *  TechAccountId can be just wrapped AccountId.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Technical.Minted') === '3d3024b1c7952ef50b4b3f99486c42124891f012427b9cee0e6a8e492d3e1d78'
    }

    /**
     *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     *  This is not only for pure TechAccountId.
     *  TechAccountId can be just wrapped AccountId.
     */
    get asV33(): [v33.TechAssetId, v33.TechAccountId, bigint, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Technical.Minted') === '69189f1f3a968fed41f9d35d9a6d44a42cb72011b9b3f99b1b224a3d76eb20ff'
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get asV42(): [v42.TechAssetId, v42.TechAccountId, bigint, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get isV46(): boolean {
        return this._chain.getEventHash('Technical.Minted') === 'ec28e5a71cb2eb1f5c8b16d1bcc8e6a52f32bb79c9bbf64dd640b961c5362656'
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get asV46(): [v46.TechAssetId, v46.TechAccountId, bigint, bigint] {
        assert(this.isV46)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get isV57(): boolean {
        return this._chain.getEventHash('Technical.Minted') === '8d00268fd57ecce8e18da2d4606277a4ced45b7a2a4820442d8bc29372dd2bba'
    }

    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    get asV57(): [v57.TechAssetId, v57.TechAccountId, bigint, bigint] {
        assert(this.isV57)
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
     *  Some assets were transferred out. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '588864f57f1e9a175549d075ac34efc604cc5a1856a5b84b783cb2a7eee0eaac'
    }

    /**
     *  Some assets were transferred out. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get asV1(): [v1.TechAssetId, v1.TechAccountId, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Some assets were transferred out. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '084e444493e2bd2ee6110a96bce4ac48b0f451ba15009f73f4ca3279d82fb7ba'
    }

    /**
     *  Some assets were transferred out. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    get asV33(): [v33.TechAssetId, v33.TechAccountId, Uint8Array, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '72b3d84d00673a64167fdec2e490ec9810c8309f3e57b1938a2d340742762316'
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV42(): [v42.TechAssetId, v42.TechAccountId, Uint8Array, bigint] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV46(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '5190d7a4694b4cf6dab7a213789366fe12b6a3b46e6defac1490ae10d2969bfa'
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV46(): [v46.TechAssetId, v46.TechAccountId, Uint8Array, bigint] {
        assert(this.isV46)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get isV57(): boolean {
        return this._chain.getEventHash('Technical.OutputTransferred') === '60fe0d60c03a129214e7aaf1d9443956e4ac1de7fed87934849d026b6e59b22a'
    }

    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    get asV57(): [v57.TechAssetId, v57.TechAccountId, Uint8Array, bigint] {
        assert(this.isV57)
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
     *  Swap operaction is finalised [initiator, finaliser].
     *  TechAccountId is only pure TechAccountId.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Technical.SwapSuccess') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Swap operaction is finalised [initiator, finaliser].
     *  TechAccountId is only pure TechAccountId.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV42(): {proposalHash: Uint8Array} {
        assert(this.isV42)
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
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV1(): [Uint8Array, number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV42(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV42)
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
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV42(): {proposalHash: Uint8Array} {
        assert(this.isV42)
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
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV1(): [Uint8Array, v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV42(): {proposalHash: Uint8Array, result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_41} {
        assert(this.isV53)
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
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV1(): [Uint8Array, v1.DispatchResult] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV42(): {proposalHash: Uint8Array, result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_41} {
        assert(this.isV53)
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
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV1(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV42(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV42)
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
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV1(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV42(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV42)
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
     *  Phantom member, never used.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Phantom member, never used.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  One of the members' keys changed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  One of the members' keys changed.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  The given member was added; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was added; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  The given member was removed; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was removed; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  The membership was reset; see the transaction for who the new set is.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The membership was reset; see the transaction for who the new set is.
     */
    get asV1(): null {
        assert(this.isV1)
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
     *  Two members were swapped; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Two members were swapped; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '7ff7fc1c7a34342f2ecee41c8c6428a91bc59187ab7fdbd2403e52d3e8da72d7'
    }

    /**
     * A balance was set by root.
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Deposited some balance into an account
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[account,
     *  currency_id, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[account,
     *  currency_id, amount\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * An account was created with some free balance.
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.LockRemoved') === '4da86e4b594fdca1cead9427c0d5aa70f551e1f691f5bb5e406ef01828ca7594'
    }

    /**
     * Some locked funds were unlocked
     */
    get asV42(): {lockId: Uint8Array, currencyId: v42.AssetId32, who: Uint8Array} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.LockSet') === 'e7f67aaff687aad0ad91da03d98951eed3c33cd4b6c679c74f3c86d0041945bc'
    }

    /**
     * Some funds are locked
     */
    get asV42(): {lockId: Uint8Array, currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Tokens.Locked') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some free balance was locked.
     */
    get asV53(): {currencyId: v53.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.ReserveRepatriated') === 'e27c8522b1252567f1288559c6236ab578e9428f75eed6938d3337ee009f94d5'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV42(): {currencyId: v42.AssetId32, from: Uint8Array, to: Uint8Array, amount: bigint, status: v42.BalanceStatus} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Slashed') === '7de15539d234a7ddc785a2003df8536d05c89cb9109034fb33d0c1f62ad4b7f1'
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '16ff0f571eabe3d2f6567b464f15483d91843aee3d6233090a5536b9c01010da'
    }

    /**
     * The total issuance of an currency has been set
     */
    get asV42(): {currencyId: v42.AssetId32, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'cc205d02ee9218273262bb5bc028989e2cb4ab713e9ba84800d23a3c0154553d'
    }

    /**
     * Transfer succeeded.
     */
    get asV42(): {currencyId: v42.AssetId32, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Token transfer success. \[currency_id, from, to, amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Tokens.Transferred') === 'a4260d0f93501b9acbb0b39a480f185d20afb97b362a5ae9f20dcbe9b4fabf45'
    }

    /**
     *  Token transfer success. \[currency_id, from, to, amount\]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Tokens.Unlocked') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some locked balance was freed.
     */
    get asV53(): {currencyId: v53.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '34af985e3f34a63840879453852df5483317fe561626095900bcf025dc38673a'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV42(): {currencyId: v42.AssetId32, who: Uint8Array, amount: bigint} {
        assert(this.isV42)
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
     *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('TradingPair.TradingPairStored') === 'c033f2c37b5f56c5edcd145c5a00e14ba55903f8793c01e6f787159a4cb7eafa'
    }

    /**
     *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get asV1(): [number, v1.TradingPair] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('TradingPair.TradingPairStored') === '07d7a2498ad83e6414cd88e02e65f5cf8ce133adac83972f4b8c1e567897c0ae'
    }

    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    get asV42(): [number, v42.TradingPair] {
        assert(this.isV42)
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
    get isV53(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV53(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV53)
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
     *  Batch of dispatches completed fully with no error.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV42(): null {
        assert(this.isV42)
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
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'acf646b5aabc17d1d9bbcec046f84450721211384188c038f062a8174d381ca2'
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    get asV1(): [number, v1.DispatchError] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV42(): {index: number, error: v42.DispatchError} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV53(): {index: number, error: v53.DispatchError} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV42(): {result: v42.Type_38} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV53(): {result: v53.Type_41} {
        assert(this.isV53)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV42(): null {
        assert(this.isV42)
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
    get isV42(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV42(): {error: v42.DispatchError} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV53(): {error: v53.DispatchError} {
        assert(this.isV53)
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
     *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get isV7(): boolean {
        return this._chain.getEventHash('VestedRewards.ActualDoesntMatchAvailable') === '3152a675360919dd7a0b83b79712da9925582c939806d68bec8c9361106589d0'
    }

    /**
     *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get asV7(): v7.RewardReason {
        assert(this.isV7)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('VestedRewards.ActualDoesntMatchAvailable') === '86c53731b4c21617f19ce56e4682a596a7d76251bf6a15d1c21e506137abca57'
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get asV42(): v42.RewardReason {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('VestedRewards.ActualDoesntMatchAvailable') === 'be78b8bbc6254473ae26507c5aa6ae411c59850f71a46c165fa747685b687589'
    }

    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    get asV45(): v45.RewardReason {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsAddingZeroMarketMakerRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.AddingZeroMarketMakerReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
     */
    get isV7(): boolean {
        return this._chain.getEventHash('VestedRewards.AddingZeroMarketMakerReward') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
     */
    get asV7(): Uint8Array {
        assert(this.isV7)
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
    get isV53(): boolean {
        return this._chain.getEventHash('VestedRewards.CrowdloanClaimed') === '28cdcafc24c8c3c812ef90f216fc4855be92274a61cf3fc2d5cef9eaeacc50e3'
    }

    /**
     * Claimed crowdloan rewards
     */
    get asV53(): [Uint8Array, v53.AssetId32, bigint] {
        assert(this.isV53)
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
     *  Saving reward for account has failed in a distribution series. [account]
     */
    get isV7(): boolean {
        return this._chain.getEventHash('VestedRewards.FailedToSaveCalculatedReward') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Saving reward for account has failed in a distribution series. [account]
     */
    get asV7(): Uint8Array {
        assert(this.isV7)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestedRewardsNoEligibleMarketMakersEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VestedRewards.NoEligibleMarketMakers')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Couldn't find any account with enough transactions to count market maker rewards.
     */
    get isV7(): boolean {
        return this._chain.getEventHash('VestedRewards.NoEligibleMarketMakers') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Couldn't find any account with enough transactions to count market maker rewards.
     */
    get asV7(): null {
        assert(this.isV7)
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
     *  Rewards vested, limits were raised. [vested amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('VestedRewards.RewardsVested') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Rewards vested, limits were raised. [vested amount]
     */
    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class XstPoolPoolInitializedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XSTPool.PoolInitialized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    get isV19(): boolean {
        return this._chain.getEventHash('XSTPool.PoolInitialized') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    get asV19(): [number, Uint8Array] {
        assert(this.isV19)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XSTPool.PoolInitialized') === '21cf9054b1ae36cdcecba8bfb656549bc3b239aaa819e7795ede36e56786a640'
    }

    /**
     * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
     */
    get asV42(): [number, v42.AssetId32] {
        assert(this.isV42)
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
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV19(): boolean {
        return this._chain.getEventHash('XSTPool.ReferenceAssetChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV19(): Uint8Array {
        assert(this.isV19)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XSTPool.ReferenceAssetChanged') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    get asV42(): v42.AssetId32 {
        assert(this.isV42)
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
    get isV57(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetDisabled') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Synthetic asset has been disabled. [Synthetic Asset Id]
     */
    get asV57(): v57.AssetId32 {
        assert(this.isV57)
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
     * Synthetic asset was enabled. [Synthetic Asset Id]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetEnabled') === 'd95efc7b29a22298fded1b8a3d6268f031f1ecb06d36663796cb5be07bd8bfc1'
    }

    /**
     * Synthetic asset was enabled. [Synthetic Asset Id]
     */
    get asV45(): v45.AssetId32 {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    get isV57(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetEnabled') === 'f1a493e143982a38e21e7f50da7b073d2a8b733dab1ba49ececbb308c031423f'
    }

    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    get asV57(): [v57.AssetId32, Uint8Array] {
        assert(this.isV57)
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
    get isV57(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetFeeChanged') === '8e93767f9dcb69608756db13abb73914fa7140df859465e6b6c00f4a456709d5'
    }

    /**
     * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
     */
    get asV57(): [v57.AssetId32, v57.FixedPoint] {
        assert(this.isV57)
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
    get isV60(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticAssetRemoved') === 'f1a493e143982a38e21e7f50da7b073d2a8b733dab1ba49ececbb308c031423f'
    }

    /**
     * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
     */
    get asV60(): [v60.AssetId32, Uint8Array] {
        assert(this.isV60)
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
    get isV45(): boolean {
        return this._chain.getEventHash('XSTPool.SyntheticBaseAssetFloorPriceChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Floor price of the synthetic base asset has been changed. [New Floor Price]
     */
    get asV45(): bigint {
        assert(this.isV45)
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
     *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('XorFee.FeeWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
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
     *  The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    get isV22(): boolean {
        return this._chain.getEventHash('XorFee.ReferrerRewarded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    get asV22(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV22)
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
     *  New multiplier for weight to fee conversion is set
     *  (*1_000_000_000_000_000_000). [New value]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('XorFee.WeightToFeeMultiplierUpdated') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  New multiplier for weight to fee conversion is set
     *  (*1_000_000_000_000_000_000). [New value]
     */
    get asV37(): bigint {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }
}
