import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v64 from './v64'

export class AssetsBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.burn') === '7734e72b03f9f009a7e17461b27db33f360bb52e6486869fa3b8210b57a89bb5'
    }

    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    get asV64(): {assetId: v64.AssetId32, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Performs an unchecked Asset mint, can only be done
     * by root account.
     * 
     * Should be used as extrinsic call only.
     * `Currencies::updated_balance()` should be deprecated. Using `force_mint` allows us to
     * perform extra actions for minting, such as buy-back, extra-minting and etc.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.force_mint') === '2a34f920838ce658d25db96bd6d5847c2a59481fb3c9d43c3b2133f651f4abab'
    }

    /**
     * Performs an unchecked Asset mint, can only be done
     * by root account.
     * 
     * Should be used as extrinsic call only.
     * `Currencies::updated_balance()` should be deprecated. Using `force_mint` allows us to
     * perform extra actions for minting, such as buy-back, extra-minting and etc.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get asV64(): {assetId: v64.AssetId32, to: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.mint') === '2a34f920838ce658d25db96bd6d5847c2a59481fb3c9d43c3b2133f651f4abab'
    }

    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get asV64(): {assetId: v64.AssetId32, to: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Performs an asset registration.
     * 
     * Registers new `AssetId` for the given `origin`.
     * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.register') === '597eefd68a4a334503e554227f0c5f2662f16732354e0e751b678c328d3e8b32'
    }

    /**
     * Performs an asset registration.
     * 
     * Registers new `AssetId` for the given `origin`.
     * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    get asV64(): {symbol: Uint8Array, name: Uint8Array, initialSupply: bigint, isMintable: boolean, isIndivisible: boolean, optContentSrc: (Uint8Array | undefined), optDesc: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetNonMintableCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_non_mintable')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.set_non_mintable') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.transfer') === '2a34f920838ce658d25db96bd6d5847c2a59481fb3c9d43c3b2133f651f4abab'
    }

    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    get asV64(): {assetId: v64.AssetId32, to: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsUpdateBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.update_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add or remove abs(`by_amount`) from the balance of `who` under
     * `currency_id`. If positive `by_amount`, do add, else do remove.
     * 
     * Basically a wrapper of `MultiCurrencyExtended::update_balance`
     * for testing purposes.
     * 
     * TODO: move into tests extrinsic collection pallet
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.update_balance') === 'a0c92c8bc24a22727226e6e79f38058dfd61e1a72c4595224f0e3dfd9883578b'
    }

    /**
     * Add or remove abs(`by_amount`) from the balance of `who` under
     * `currency_id`. If positive `by_amount`, do add, else do remove.
     * 
     * Basically a wrapper of `MultiCurrencyExtended::update_balance`
     * for testing purposes.
     * 
     * TODO: move into tests extrinsic collection pallet
     */
    get asV64(): {who: Uint8Array, currencyId: v64.AssetId32, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsUpdateInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.update_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change information about asset. Can only be done by root
     * 
     * - `origin`: caller Account, should be root
     * - `asset_id`: Id of asset to change,
     * - `new_symbol`: New asset symbol. If None asset symbol will not change
     * - `new_name`: New asset name. If None asset name will not change
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.update_info') === 'd148f3bf6ec9bedadb28bf1f263b02ae30eb75112303bc45164416117bf2b938'
    }

    /**
     * Change information about asset. Can only be done by root
     * 
     * - `origin`: caller Account, should be root
     * - `asset_id`: Id of asset to change,
     * - `new_symbol`: New asset symbol. If None asset symbol will not change
     * - `new_name`: New asset name. If None asset name will not change
     */
    get asV64(): {assetId: v64.AssetId32, newSymbol: (Uint8Array | undefined), newName: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BabePlanConfigChangeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.plan_config_change')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Babe.plan_config_change') === '445d07b89db2246e1bb7a27672210d26caa40906751dc15e2e91036d19c646c3'
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get asV64(): {config: v64.NextConfigDescriptor} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get asV64(): {equivocationProof: v64.EquivocationProof, keyOwnerProof: v64.MembershipProof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation_unsigned') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get asV64(): {equivocationProof: v64.EquivocationProof, keyOwnerProof: v64.MembershipProof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListPutInFrontOfCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.put_in_front_of')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BagsList.put_in_front_of') === '1c9b6f4fe2c3f09518b5cf691b90a9cfbbb049860f2d665fdf2f18450ebe9b2f'
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get asV64(): {lighter: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListRebagCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.rebag')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BagsList.rebag') === '6f1b791f1be804afc4e38eb1e926ba86935e013132cb323a061f4b76a89cbd3e'
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    get asV64(): {dislocated: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BandAddRelayersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Band.add_relayers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add `account_ids` to the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is already a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of new trusted relayers to add.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Band.add_relayers') === '275135cf57d689a22807dfaa26669b167161eb228241755af8b383e378664509'
    }

    /**
     * Add `account_ids` to the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is already a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of new trusted relayers to add.
     */
    get asV64(): {accountIds: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BandForceRelayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Band.force_relay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Similar to [`relay()`] but without the resolve time guard.
     * 
     * Should be used in emergency situations i.e. then previous value was
     * relayed by a faulty/malicious actor.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Band.force_relay') === 'eefd81c03cc99a937a38cd1222f329c3c142570c920e1e1a904653326ca26135'
    }

    /**
     * Similar to [`relay()`] but without the resolve time guard.
     * 
     * Should be used in emergency situations i.e. then previous value was
     * relayed by a faulty/malicious actor.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    get asV64(): {rates: [Uint8Array, bigint][], resolveTime: bigint, requestId: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BandRelayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Band.relay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Relay a list of symbols and their associated rates along with the resolve time and request id on `BandChain`.
     * 
     * Checks if:
     * - The caller is a relayer;
     * - The `resolve_time` for a particular symbol is not lower than previous saved value, ignores this rate if so;
     * 
     * If `rates` contains duplicated symbols, then the last rate will be stored.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Band.relay') === 'eefd81c03cc99a937a38cd1222f329c3c142570c920e1e1a904653326ca26135'
    }

    /**
     * Relay a list of symbols and their associated rates along with the resolve time and request id on `BandChain`.
     * 
     * Checks if:
     * - The caller is a relayer;
     * - The `resolve_time` for a particular symbol is not lower than previous saved value, ignores this rate if so;
     * 
     * If `rates` contains duplicated symbols, then the last rate will be stored.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    get asV64(): {rates: [Uint8Array, bigint][], resolveTime: bigint, requestId: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BandRemoveRelayersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Band.remove_relayers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove `account_ids` from the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is not a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of relayers to remove.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Band.remove_relayers') === '275135cf57d689a22807dfaa26669b167161eb228241755af8b383e378664509'
    }

    /**
     * Remove `account_ids` from the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is not a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of relayers to remove.
     */
    get asV64(): {accountIds: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BandSetDynamicFeeParametersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Band.set_dynamic_fee_parameters')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('Band.set_dynamic_fee_parameters') === '860814da4d89fc5a09435bfb527e035763ce274802214d39a22fc9c6d2471038'
    }

    get asV64(): {feeParameters: v64.FeeCalculationParameters} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BeefyLightClientInitializeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BeefyLightClient.initialize')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BeefyLightClient.initialize') === '90683345c8b21fd092dda297a5b11b4c535993f092872b95e1093ec8055d3026'
    }

    get asV64(): {networkId: v64.SubNetworkId, latestBeefyBlock: bigint, validatorSet: v64.BeefyAuthoritySet, nextValidatorSet: v64.BeefyAuthoritySet} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BeefyLightClientSubmitSignatureCommitmentCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BeefyLightClient.submit_signature_commitment')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BeefyLightClient.submit_signature_commitment') === '023b207dc96538cae01395a208dcdd602aed9ffdaedd0cc4782a0f312a7f66f1'
    }

    get asV64(): {networkId: v64.SubNetworkId, commitment: v64.Commitment, validatorProof: v64.ValidatorProof, latestMmrLeaf: v64.MmrLeaf, proof: v64.Type_588} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.add_peer') === 'b7d97951fb9d6cf37ef146ec14282a2865e1f96be8305e55309949f67c606782'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerApproveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.approve')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.approve') === 'cc1e505fbb0fc7c1d9e0908d9427af24ffda18279e947e4e74e3e4cc738025ea'
    }

    get asV64(): {networkId: v64.GenericNetworkId, data: Uint8Array, signature: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerFinishAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.finish_add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.finish_add_peer') === '6dc51c603666af8321200579b2c2e2565d432a8d0410687cb308c27429d58f2a'
    }

    get asV64(): {peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerFinishRemovePeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.finish_remove_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.finish_remove_peer') === '6dc51c603666af8321200579b2c2e2565d432a8d0410687cb308c27429d58f2a'
    }

    get asV64(): {peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerRegisterNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.register_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.register_network') === 'be240b642cd00dc95a352881df96fece49765132d972374dc53694e55f68891f'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peers: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeDataSignerRemovePeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeDataSigner.remove_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeDataSigner.remove_peer') === 'b7d97951fb9d6cf37ef146ec14282a2865e1f96be8305e55309949f67c606782'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeInboundChannelBatchDispatchedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeInboundChannel.batch_dispatched')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * BatchDispatched event from InboundChannel on Ethereum found, the function verifies tx
     * and changes all the batch messages statuses.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeInboundChannel.batch_dispatched') === '0853372cc84ae7650d6b7fe4abc90a045251da741f4dbd9e617d97f0ce2ebea5'
    }

    /**
     * BatchDispatched event from InboundChannel on Ethereum found, the function verifies tx
     * and changes all the batch messages statuses.
     */
    get asV64(): {networkId: bigint, log: v64.Log, proof: v64.Proof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeInboundChannelRegisterChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeInboundChannel.register_channel')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeInboundChannel.register_channel') === '0222b1fdf69af4d948831b4f4b5e1f35079a0ecdb6feb74155972fa5263f843d'
    }

    get asV64(): {networkId: bigint, inboundChannel: Uint8Array, outboundChannel: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeInboundChannelSetRewardFractionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeInboundChannel.set_reward_fraction')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeInboundChannel.set_reward_fraction') === 'b2d5793cecbac31d142966f9fabe8d02949ed19582bae8c6e64f1d46a2a63da4'
    }

    get asV64(): {fraction: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeInboundChannelSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeInboundChannel.submit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeInboundChannel.submit') === '0853372cc84ae7650d6b7fe4abc90a045251da741f4dbd9e617d97f0ce2ebea5'
    }

    get asV64(): {networkId: bigint, log: v64.Log, proof: v64.Proof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAddSignatoryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.add_signatory')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new signatory to the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `add_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage read - O(1)
     * - search in members - O(M)
     * - Storage write - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.add_signatory') === 'f2c3aac97f55c3d092c4aae2962c52d4804aed0fc2148e4d05d9602d373f7204'
    }

    /**
     * Add a new signatory to the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `add_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage read - O(1)
     * - search in members - O(M)
     * - Storage write - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    get asV64(): {newMember: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - Base Weight:
     *     - Create: 44.71 + 0.088 * S
     *     - Approve: 31.48 + 0.116 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.approve_as_multi') === '19980ff28b2c1b72c93287173de769e30e929da4be2ebf87e703cdaaa07b34c7'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - Base Weight:
     *     - Create: 44.71 + 0.088 * S
     *     - Approve: 31.48 + 0.116 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV64(): {id: Uint8Array, maybeTimepoint: (v64.BridgeTimepoint | undefined), callHash: Uint8Array, maxWeight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - Base Weight:
     *     - Create:          41.89 + 0.118 * S + .002 * Z µs
     *     - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *     - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *     - Complete:        39.94 + 0.26  * S + .002 * Z µs
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi') === 'c5138eecb3a57c6d62e11a93e63cf5c910f14393d34c9c46b2195ef2d4938de6'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - Base Weight:
     *     - Create:          41.89 + 0.118 * S + .002 * Z µs
     *     - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *     - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *     - Complete:        39.94 + 0.26  * S + .002 * Z µs
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asV64(): {id: Uint8Array, maybeTimepoint: (v64.BridgeTimepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi_threshold_1') === '5c15a13e493c3bbf3b4145884766385f06b70761ea7c3d22ba44f89949ddaaa7'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV64(): {id: Uint8Array, call: v64.Call, timepoint: v64.BridgeTimepoint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - Base Weight: 36.07 + 0.124 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.cancel_as_multi') === '7defa1013d7858508f1f7587c304552d782888d4d1fe683cbc18f4025708d699'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - Base Weight: 36.07 + 0.124 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get asV64(): {id: Uint8Array, timepoint: v64.BridgeTimepoint, callHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigRegisterMultisigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.register_multisig')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new multisig account.
     * TODO: update weights for `register_multisig`
     * # <weight>
     * Key: M - length of members,
     * - One storage reads - O(1)
     * - One search in sorted list - O(logM)
     * - Confirmation that the list is sorted - O(M)
     * - One storage writes - O(1)
     * - One event
     * Total Complexity: O(M + logM)
     * # <weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.register_multisig') === 'e0d398e7963df4653da4f4e924afe992cbaa6dfa949059f906a4966f6bd47bf2'
    }

    /**
     * Create a new multisig account.
     * TODO: update weights for `register_multisig`
     * # <weight>
     * Key: M - length of members,
     * - One storage reads - O(1)
     * - One search in sorted list - O(logM)
     * - Confirmation that the list is sorted - O(M)
     * - One storage writes - O(1)
     * - One event
     * Total Complexity: O(M + logM)
     * # <weight>
     */
    get asV64(): {signatories: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigRemoveSignatoryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.remove_signatory')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the signatory from the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `remove_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage reads - O(1)
     * - remove items in list - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('BridgeMultisig.remove_signatory') === '1887c2def0ca2534f346482b0605aed0ce6c75e3e1b18c93b1e493f03d2116a7'
    }

    /**
     * Remove the signatory from the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `remove_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage reads - O(1)
     * - remove items in list - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    get asV64(): {signatory: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeProxyAddLimitedAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeProxy.add_limited_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeProxy.add_limited_asset') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeProxyBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeProxy.burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeProxy.burn') === '2b1111c71f05359b43ca42b187bffbf6647446def385a2b23b1f05508a559d73'
    }

    get asV64(): {networkId: v64.GenericNetworkId, assetId: v64.AssetId32, recipient: v64.GenericAccount, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeProxyRemoveLimitedAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeProxy.remove_limited_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeProxy.remove_limited_asset') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeProxyUpdateTransferLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeProxy.update_transfer_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('BridgeProxy.update_transfer_limit') === 'ad637849ec7178d8206dda4bb2d5cb977eb22224e132185d020fab587dc6e3a7'
    }

    get asV64(): {settings: v64.TransferLimitSettings} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformCreatePollCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.create_poll')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create poll
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.create_poll') === 'e99a6ab5ae365cabe56fc4443800ea7a68ee5e07a0568d12d867b0c8c2081727'
    }

    /**
     * Create poll
     */
    get asV64(): {pollId: Uint8Array, numberOfOptions: number, pollStartTimestamp: bigint, pollEndTimestamp: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Voting for option
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.vote') === 'a88596a49ff992df9d05faa833b601500b962ce637ca1c6cf762bf5a3d648d22'
    }

    /**
     * Voting for option
     */
    get asV64(): {pollId: Uint8Array, votingOption: number, numberOfVotes: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw voting funds
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.withdraw') === 'd59fe61d4871003a38c8a8093a489d7a77f4104524982df18b4cbcb942936107'
    }

    /**
     * Withdraw voting funds
     */
    get asV64(): {pollId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadAddWhitelistedContributorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.add_whitelisted_contributor')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add whitelisted contributor
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.add_whitelisted_contributor') === 'ab02d63fe190e1ddcdc0ca40e7eecd085716eff1846582b5d23f64905cf92a86'
    }

    /**
     * Add whitelisted contributor
     */
    get asV64(): {contributor: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadAddWhitelistedIloOrganizerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.add_whitelisted_ilo_organizer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add whitelisted ILO organizer
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.add_whitelisted_ilo_organizer') === '14150c0da05c92ad47fa53b73f87daf8a0c5243bea625db475abfe2affac4acd'
    }

    /**
     * Add whitelisted ILO organizer
     */
    get asV64(): {iloOrganizer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadChangeCeresBurnFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.change_ceres_burn_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change CERES burn fee
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.change_ceres_burn_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     * Change CERES burn fee
     */
    get asV64(): {ceresFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadChangeCeresContributionFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.change_ceres_contribution_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change CERES contribution fee
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.change_ceres_contribution_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     * Change CERES contribution fee
     */
    get asV64(): {ceresFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadChangeFeePercentForRaisedFundsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.change_fee_percent_for_raised_funds')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change fee percent on raised funds in successful ILO
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.change_fee_percent_for_raised_funds') === '87fdd24ad18e6ff19f57c694a062dd11084f758ad0fc1de56293d29f81404ae3'
    }

    /**
     * Change fee percent on raised funds in successful ILO
     */
    get asV64(): {feePercent: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim tokens
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Claim tokens
     */
    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimLpTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim_lp_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim LP tokens
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim_lp_tokens') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Claim LP tokens
     */
    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimPswapRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim_pswap_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim PSWAP rewards
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim_pswap_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Claim PSWAP rewards
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadContributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.contribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Contribute
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.contribute') === '712bafde6c2a864c6090f7785b37035b63c92d1bcc52d8e051e206233c66bb7b'
    }

    /**
     * Contribute
     */
    get asV64(): {assetId: v64.AssetId32, fundsToContribute: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadCreateIloCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.create_ilo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create ILO
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.create_ilo') === 'a7bd01624ae7ac01797e0f86cc2ab5cd66089d4044224c9dd9b4b2e0d5a64f08'
    }

    /**
     * Create ILO
     */
    get asV64(): {baseAsset: v64.AssetId32, assetId: v64.AssetId32, tokensForIlo: bigint, tokensForLiquidity: bigint, iloPrice: bigint, softCap: bigint, hardCap: bigint, minContribution: bigint, maxContribution: bigint, refundType: boolean, liquidityPercent: bigint, listingPrice: bigint, lockupDays: number, startTimestamp: bigint, endTimestamp: bigint, teamVestingTotalTokens: bigint, teamVestingFirstReleasePercent: bigint, teamVestingPeriod: bigint, teamVestingPercent: bigint, firstReleasePercent: bigint, vestingPeriod: bigint, vestingPercent: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadEmergencyWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.emergency_withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Emergency withdraw
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.emergency_withdraw') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Emergency withdraw
     */
    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadFinishIloCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.finish_ilo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finish ILO
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.finish_ilo') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Finish ILO
     */
    get asV64(): {assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadRemoveWhitelistedContributorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.remove_whitelisted_contributor')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove whitelisted contributor
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.remove_whitelisted_contributor') === 'ab02d63fe190e1ddcdc0ca40e7eecd085716eff1846582b5d23f64905cf92a86'
    }

    /**
     * Remove whitelisted contributor
     */
    get asV64(): {contributor: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadRemoveWhitelistedIloOrganizerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.remove_whitelisted_ilo_organizer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove whitelisted ILO organizer
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.remove_whitelisted_ilo_organizer') === '14150c0da05c92ad47fa53b73f87daf8a0c5243bea625db475abfe2affac4acd'
    }

    /**
     * Remove whitelisted ILO organizer
     */
    get asV64(): {iloOrganizer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLiquidityLockerChangeCeresFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLiquidityLocker.change_ceres_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change CERES fee
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLiquidityLocker.change_ceres_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     * Change CERES fee
     */
    get asV64(): {ceresFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLiquidityLockerLockLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLiquidityLocker.lock_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Lock liquidity
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresLiquidityLocker.lock_liquidity') === '954bb142ff16e4e1bb3345cdfc23618047a9a7bc898d09623d3cc7489c5c0263'
    }

    /**
     * Lock liquidity
     */
    get asV64(): {assetA: v64.AssetId32, assetB: v64.AssetId32, unlockingTimestamp: bigint, percentageOfPoolTokens: bigint, option: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingChangeRewardsRemainingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.change_rewards_remaining')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change RewardsRemaining
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresStaking.change_rewards_remaining') === '330a0ff25c7f1be9ed2e84fd35805c683f6920d276219eaaffc4e6a159123da2'
    }

    /**
     * Change RewardsRemaining
     */
    get asV64(): {rewardsRemaining: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.deposit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('CeresStaking.deposit') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    get asV64(): {amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('CeresStaking.withdraw') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerChangeFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.change_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change fee
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.change_fee') === '29deec73c007934b40d9375e38417591b900623c0a553c8adb29f30c0f270f81'
    }

    /**
     * Change fee
     */
    get asV64(): {newFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerLockTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.lock_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Lock tokens
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.lock_tokens') === '5823a15839b3bd7888a08fcd5cf8660c6ce24a7854299eb3df0add5ffad37bc2'
    }

    /**
     * Lock tokens
     */
    get asV64(): {assetId: v64.AssetId32, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerWithdrawTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.withdraw_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw tokens
     */
    get isV64(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.withdraw_tokens') === '5823a15839b3bd7888a08fcd5cf8660c6ce24a7854299eb3df0add5ffad37bc2'
    }

    /**
     * Withdraw tokens
     */
    get asV64(): {assetId: v64.AssetId32, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array, index: number, proposalWeightBound: v64.Weight, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.execute') === 'bcc17baac25e3df63170e0c02e0e0ba1053bd100bc858b9b294c50fa8604b499'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV64(): {proposal: v64.Call, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.propose') === '501cd83ef265631371ca83907f1c727bd71ec7c45600bfcdeef8b6b913638bdb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV64(): {threshold: number, proposal: v64.Call, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV64(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV64(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformAddPoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.add_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add pool
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.add_pool') === '3b9155e087e535c8f34e82d104755aa30746aab1aa01d057249fcc62ff106e47'
    }

    /**
     * Add pool
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, multiplier: number, depositFee: bigint, isCore: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change info
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_info') === '2a1606350e34e481f3b4090c1e5a99c56a85e92dbc29841724acecdf64491d85'
    }

    /**
     * Change info
     */
    get asV64(): {changedUser: Uint8Array, baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, poolTokens: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangePoolDepositFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_pool_deposit_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change pool deposit fee
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_deposit_fee') === '572850b56eb96521291d95c02dac4fae2f6866121decc37e53ca269250f82bf3'
    }

    /**
     * Change pool deposit fee
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, depositFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangePoolMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_pool_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change pool multiplier
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_multiplier') === 'c816c9c87eeae15336a4300ad16bbbe31bea1ea37120abf28b28f279af39a23b'
    }

    /**
     * Change pool multiplier
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, newMultiplier: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeTokenInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_token_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change token info
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_token_info') === '00f23230563c90f61f7d42bbe2ab916b3bfe328c3b0ba8fc8c68441fce5b4d6b'
    }

    /**
     * Change token info
     */
    get asV64(): {poolAsset: v64.AssetId32, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeTotalTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_total_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change total tokens
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_total_tokens') === '738357c1206b01400c36ae41ce8067f37ee7f5450ecc4140607c0d351c3a1c43'
    }

    /**
     * Change total tokens
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, totalTokens: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deposit to pool
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.deposit') === '7e1cf593c977493fef4faf40cfa2b2dd43c7e6a58f8e641eb7e8c657aa3bc0cf'
    }

    /**
     * Deposit to pool
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean, pooledTokens: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformGetRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.get_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Get rewards
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.get_rewards') === 'baddc9254c7c4efb34c387ac703b49fa5ebfc7e81b4e39638c46abac69069ba5'
    }

    /**
     * Get rewards
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformRegisterTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.register_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register token for farming
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.register_token') === '00f23230563c90f61f7d42bbe2ab916b3bfe328c3b0ba8fc8c68441fce5b4d6b'
    }

    /**
     * Register token for farming
     */
    get asV64(): {poolAsset: v64.AssetId32, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformRemovePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.remove_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove pool
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.remove_pool') === 'baddc9254c7c4efb34c387ac703b49fa5ebfc7e81b4e39638c46abac69069ba5'
    }

    /**
     * Remove pool
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, isFarm: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw
     */
    get isV64(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.withdraw') === '8fe5aaed5fd3663ba37cc1d50a5d4eb22d5e6fb05c3e5a1ff8d4a90b10322675'
    }

    /**
     * Withdraw
     */
    get asV64(): {baseAsset: v64.AssetId32, poolAsset: v64.AssetId32, rewardAsset: v64.AssetId32, pooledTokens: bigint, isFarm: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get asV64(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asV64(): {propIndex: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get asV64(): {refIndex: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV64(): {to: Uint8Array, conviction: v64.Conviction, balance: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get asV64(): {refIndex: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get asV64(): {proposal: v64.Bounded} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV64(): {proposal: v64.Bounded} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV64(): {proposal: v64.Bounded} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get asV64(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.propose') === 'db924825c9fd40cb04a839b510db55dcdd425c7b06116ccd22d4834d1201e8db'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get asV64(): {proposal: v64.Bounded, value: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV64(): {target: Uint8Array, index: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV64(): {index: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.second') === '7ac80a800d6686f21181e7b5b45c8949dc5b807bc6ec111188c7c6850a21b898'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get asV64(): {proposal: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asV64(): {target: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     */
    get asV64(): {refIndex: number, vote: v64.AccountVote} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.burn') === 'ad7cd8354591749bd3e30dd9a7a2ec5befa0552ed93d0f1270865dfd9d5461ea'
    }

    get asV64(): {networkId: bigint, assetId: v64.AssetId32, recipient: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.mint')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.mint') === 'cf645e152e5d6684c71333576b16421e913ab1849455dc55463491867df759ea'
    }

    get asV64(): {token: Uint8Array, sender: Uint8Array, recipient: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterAssetInternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_asset_internal')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_asset_internal') === '64978381bd0a087a17a926638ae7d9e9b36eb688bfedde8723f555a4d2bc23a6'
    }

    get asV64(): {assetId: v64.AssetId32, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterErc20AppCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_erc20_app')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_erc20_app') === 'ff2d38911d33ca9e1574d318d4c253678f7e934b1e64bfbf2f9b03c3ffc06a3c'
    }

    get asV64(): {networkId: bigint, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterErc20AssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_erc20_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_erc20_asset') === 'd617beb3806034546d2ce907ab9456f3741b58f8fa19a80da3ac9d8e51ae514b'
    }

    get asV64(): {networkId: bigint, address: Uint8Array, symbol: Uint8Array, name: Uint8Array, decimals: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterExistingErc20AssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_existing_erc20_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_existing_erc20_asset') === 'c85a1dc1bb96342ab95a69f206d349fe69c6560dfd7dd905ad6fd3c7642864fa'
    }

    get asV64(): {networkId: bigint, address: Uint8Array, assetId: v64.AssetId32, decimals: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterNativeAppCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_native_app')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_native_app') === 'ff2d38911d33ca9e1574d318d4c253678f7e934b1e64bfbf2f9b03c3ffc06a3c'
    }

    get asV64(): {networkId: bigint, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class Erc20AppRegisterNativeAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ERC20App.register_native_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ERC20App.register_native_asset') === '886a5177bf65102b27121fff8ca9a65016f14a38587886fd6e3d70ef4073652a'
    }

    get asV64(): {networkId: bigint, assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseGovernanceFallbackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.governance_fallback')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.governance_fallback') === 'f3179fd0f0529838d5758e1e919a1900aa58425b96768e9648bf806ee9c9b1ae'
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get asV64(): {maybeMaxVoters: (number | undefined), maybeMaxTargets: (number | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetEmergencyElectionResultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_emergency_election_result')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_emergency_election_result') === '976eeea3dee9ad3c2d95e30c6751a49c4ae6a755a0448d0d6f282625dd92e539'
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get asV64(): {supports: [Uint8Array, v64.Support][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_minimum_untrusted_score')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_minimum_untrusted_score') === '4b6d16ae537aca5ce887c10c25d838413bb18639efa0829f62aa6b722837c206'
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get asV64(): {maybeNextScore: (v64.ElectionScore | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit') === '3509bddc2e290e5056bab6adf0639cb780d40f3dc978c7478ef35f06da346d87'
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get asV64(): {rawSolution: v64.RawSolution} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit_unsigned') === '206a863dac73f7a4a92672c4e078897cac93dcb27517573adca2f9193acd8f5e'
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get asV64(): {rawSolution: v64.RawSolution, witness: v64.SolutionOrSnapshotSize} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenCleanDefunctVotersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.clean_defunct_voters')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get asV64(): {numVoters: number, numDefunct: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.remove_member') === '728eaf602e4f248add116893c9cdeb4eadb6e2daeac4ca34571a01fd60db514e'
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get asV64(): {who: Uint8Array, slashBond: boolean, rerunElection: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRemoveVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.remove_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRenounceCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.renounce_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get asV64(): {renouncing: v64.Renouncing} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenSubmitCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.submit_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get asV64(): {candidateCount: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get asV64(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthAppBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthApp.burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthApp.burn') === 'efa09f5087287094c7541680d73d65b36cef1501d143dfde5159743e41ae2a42'
    }

    get asV64(): {networkId: bigint, recipient: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthAppMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthApp.mint')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthApp.mint') === '01bfe15198d6ed87c591fd50ea299e613363d93f7d62122485b736d0cd1fa302'
    }

    get asV64(): {sender: Uint8Array, recipient: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthAppRegisterNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthApp.register_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthApp.register_network') === '197c8d48deacbe4752c528edd32580e9c1d3e3bc824433cba4776966b3754281'
    }

    get asV64(): {networkId: bigint, name: Uint8Array, symbol: Uint8Array, sidechainPrecision: number, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthAppRegisterNetworkWithExistingAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthApp.register_network_with_existing_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthApp.register_network_with_existing_asset') === 'e6447d7e917c6b5c36988db64b83acbf8dd74ae5105eadde188316a1f96fb8c7'
    }

    get asV64(): {networkId: bigint, assetId: v64.AssetId32, contract: Uint8Array, sidechainPrecision: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAbortRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.abort_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.abort_request') === '30f3a57c00dbe0b379a9e132c4a7e5dcdfc297ec81e1fd4251baa9fb41bbf0ab'
    }

    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    get asV64(): {hash: Uint8Array, error: v64.DispatchError, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a Thischain asset to the bridge whitelist.
     * 
     * Can only be called by root.
     * 
     * Parameters:
     * - `asset_id` - Thischain asset identifier.
     * - `network_id` - network identifier to which the asset should be added.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.add_asset') === 'd40d346e2348fa429e9bd3fdcb4adfff0e9f23c8899ee8227196564ed4e61854'
    }

    /**
     * Add a Thischain asset to the bridge whitelist.
     * 
     * Can only be called by root.
     * 
     * Parameters:
     * - `asset_id` - Thischain asset identifier.
     * - `network_id` - network identifier to which the asset should be added.
     */
    get asV64(): {assetId: v64.AssetId32, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new peer to the bridge peers set.
     * 
     * Parameters:
     * - `account_id` - account id on thischain.
     * - `address` - account id on sidechain.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.add_peer') === '5722f6d608c5d7b8c73c3cc6aed41b12d3a37715ceea89a6d99e5bf78ec115cf'
    }

    /**
     * Add a new peer to the bridge peers set.
     * 
     * Parameters:
     * - `account_id` - account id on thischain.
     * - `address` - account id on sidechain.
     * - `network_id` - network identifier.
     */
    get asV64(): {accountId: Uint8Array, address: Uint8Array, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddSidechainTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_sidechain_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a Sidechain token to the bridge whitelist.
     * 
     * Parameters:
     * - `token_address` - token contract address.
     * - `symbol` - token symbol (ticker).
     * - `name` - token name.
     * - `decimals` -  token precision.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.add_sidechain_token') === '8ca8b370c28e9f9f5b41e481d97aa82562a8d37daefe45072631bcdbfbe3b3c1'
    }

    /**
     * Add a Sidechain token to the bridge whitelist.
     * 
     * Parameters:
     * - `token_address` - token contract address.
     * - `symbol` - token symbol (ticker).
     * - `name` - token name.
     * - `decimals` -  token precision.
     * - `network_id` - network identifier.
     */
    get asV64(): {tokenAddress: Uint8Array, symbol: string, name: string, decimals: number, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeApproveRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.approve_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the given outgoing request. The function is used by bridge peers.
     * 
     * Verifies the peer signature of the given request and adds it to `RequestApprovals`.
     * Once quorum is collected, the request gets finalized and removed from request queue.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.approve_request') === 'b40386b2958dadc54d00ed18b6b7c70db43c05dcac36a9cb8e942e64ff827940'
    }

    /**
     * Approve the given outgoing request. The function is used by bridge peers.
     * 
     * Verifies the peer signature of the given request and adds it to `RequestApprovals`.
     * Once quorum is collected, the request gets finalized and removed from request queue.
     */
    get asV64(): {ocwPublic: Uint8Array, hash: Uint8Array, signatureParams: v64.SignatureParams, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeFinalizeIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.finalize_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
     * 
     * Can be only called from a bridge account.
     * 
     * Parameters:
     * - `request` - an incoming request.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.finalize_incoming_request') === '5ddd221f077b82b74c58eba1592b4bc21405e7b09323412b89dba7a62d06c7b4'
    }

    /**
     * Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
     * 
     * Can be only called from a bridge account.
     * 
     * Parameters:
     * - `request` - an incoming request.
     * - `network_id` - network identifier.
     */
    get asV64(): {hash: Uint8Array, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeForceAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.force_add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add the given peer to the peers set without additional checks.
     * 
     * Can only be called by a root account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.force_add_peer') === '36987f1a6095f6388b6a1995a1ddcd7fd8f7a13751e25afe6205146fac6f4756'
    }

    /**
     * Add the given peer to the peers set without additional checks.
     * 
     * Can only be called by a root account.
     */
    get asV64(): {who: Uint8Array, address: Uint8Array, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeImportIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.import_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.import_incoming_request') === 'cf7f506e0d5b0ba4a4f8e2d4af998aeeea6c676fa0598bd10b78725e79adf1b6'
    }

    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    get asV64(): {loadIncomingRequest: v64.LoadIncomingRequest, incomingRequestResult: Result<v64.IncomingRequest, v64.DispatchError>} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrate the given bridge to a new smart-contract.
     * 
     * Can only be called by an authority.
     * 
     * Parameters:
     * - `new_contract_address` - new sidechain ocntract address.
     * - `erc20_native_tokens` - migrated assets ids.
     * - `network_id` - bridge network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.migrate') === '5dbdb1f3ff572df374e5e9d5e779c4bd5bf2b3acf7141785d25a61b3140c5826'
    }

    /**
     * Migrate the given bridge to a new smart-contract.
     * 
     * Can only be called by an authority.
     * 
     * Parameters:
     * - `new_contract_address` - new sidechain ocntract address.
     * - `erc20_native_tokens` - migrated assets ids.
     * - `network_id` - bridge network identifier.
     */
    get asV64(): {newContractAddress: Uint8Array, erc20NativeTokens: Uint8Array[], networkId: number, newSignatureVersion: v64.BridgeSignatureVersion} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgePrepareForMigrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.prepare_for_migration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Prepare the given bridge for migration.
     * 
     * Can only be called by an authority.
     * 
     * Parameters:
     * - `network_id` - bridge network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.prepare_for_migration') === '8bc0c47826d72b1dc6ce9b17386254e79e3b91c024c74aeb79e1bda66e115939'
    }

    /**
     * Prepare the given bridge for migration.
     * 
     * Can only be called by an authority.
     * 
     * Parameters:
     * - `network_id` - bridge network identifier.
     */
    get asV64(): {networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterBridgeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_bridge')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a new bridge.
     * 
     * Parameters:
     * - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     * network.
     * - `initial_peers` - a set of initial network peers.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.register_bridge') === '161f1016c7a6177231ae9788f487475a5469386ec85c01f9ddf83c401c77ead8'
    }

    /**
     * Register a new bridge.
     * 
     * Parameters:
     * - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     * network.
     * - `initial_peers` - a set of initial network peers.
     */
    get asV64(): {bridgeContractAddress: Uint8Array, initialPeers: Uint8Array[], signatureVersion: v64.BridgeSignatureVersion} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterExistingSidechainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_existing_sidechain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register existing asset
     * 
     * Can only be called by root.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.register_existing_sidechain_asset') === 'a5ce4a0e093067cfa68a650725a13df1e527fe26de284833a7eaad112e45f469'
    }

    /**
     * Register existing asset
     * 
     * Can only be called by root.
     */
    get asV64(): {assetId: v64.AssetId32, tokenAddress: Uint8Array, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the given incoming request and add it to the queue.
     * 
     * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     * corresponding load-incoming-request and removes the load-request from the queue.
     * 
     * Can only be called by a bridge account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.register_incoming_request') === '26da55df27033abebdb03e7d1166192d74b06345bb8ba9cb4e04ab5abc46ca0d'
    }

    /**
     * Register the given incoming request and add it to the queue.
     * 
     * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     * corresponding load-incoming-request and removes the load-request from the queue.
     * 
     * Can only be called by a bridge account.
     */
    get asV64(): {incomingRequest: v64.IncomingRequest} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRemovePeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.remove_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove peer from the the bridge peers set.
     * 
     * Parameters:
     * - `account_id` - account id on thischain.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.remove_peer') === 'ea495ef11ae0a2dc3482c98b5af60bafc5628e50f661341629d65cd9cfe7db7f'
    }

    /**
     * Remove peer from the the bridge peers set.
     * 
     * Parameters:
     * - `account_id` - account id on thischain.
     * - `network_id` - network identifier.
     */
    get asV64(): {accountId: Uint8Array, peerAddress: (Uint8Array | undefined), networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRemoveSidechainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.remove_sidechain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove asset
     * 
     * Can only be called by root.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.remove_sidechain_asset') === 'd40d346e2348fa429e9bd3fdcb4adfff0e9f23c8899ee8227196564ed4e61854'
    }

    /**
     * Remove asset
     * 
     * Can only be called by root.
     */
    get asV64(): {assetId: v64.AssetId32, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRequestFromSidechainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.request_from_sidechain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Load incoming request from Sidechain by the given transaction hash.
     * 
     * Parameters:
     * - `eth_tx_hash` - transaction hash on Sidechain.
     * - `kind` - incoming request type.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.request_from_sidechain') === 'd8be79beeb660f1a05ee381ccb14e464bcd4287bf8334e5a2459b3f5bf1f3952'
    }

    /**
     * Load incoming request from Sidechain by the given transaction hash.
     * 
     * Parameters:
     * - `eth_tx_hash` - transaction hash on Sidechain.
     * - `kind` - incoming request type.
     * - `network_id` - network identifier.
     */
    get asV64(): {ethTxHash: Uint8Array, kind: v64.IncomingRequestKind, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeTransferToSidechainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.transfer_to_sidechain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some amount of the given asset to Sidechain address.
     * 
     * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     * correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     * Parameters:
     * - `asset_id` - thischain asset id.
     * - `to` - sidechain account id.
     * - `amount` - amount of the asset.
     * - `network_id` - network identifier.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthBridge.transfer_to_sidechain') === '35e47d281fbcb7eb403bb50e9d8ed997a9b92424892a802748567b537179ae3b'
    }

    /**
     * Transfer some amount of the given asset to Sidechain address.
     * 
     * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     * correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     * Parameters:
     * - `asset_id` - thischain asset id.
     * - `to` - sidechain account id.
     * - `amount` - amount of the asset.
     * - `network_id` - network identifier.
     */
    get asV64(): {assetId: v64.AssetId32, to: Uint8Array, amount: bigint, networkId: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthereumLightClientImportHeaderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthereumLightClient.import_header')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Import a single Ethereum PoW header.
     * 
     * Note that this extrinsic has a very high weight. The weight is affected by the
     * value of `DescendantsUntilFinalized`. Regenerate weights if it changes.
     * 
     * The largest contributors to the worst case weight, in decreasing order, are:
     * - Pruning: max 2 writes per pruned header + 2 writes to finalize pruning state.
     *   Up to `HEADERS_TO_PRUNE_IN_SINGLE_IMPORT` can be pruned in one call.
     * - Ethash validation: this cost is pure CPU. EthashProver checks a merkle proof
     *   for each DAG node selected in the "hashimoto"-loop.
     * - Iterating over ancestors: min `DescendantsUntilFinalized` reads to find the
     *   newly finalized ancestor of a header.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthereumLightClient.import_header') === '452302741038844eb343c52013c0a1d49a52e9f27a4cc31c2f2dd0afc396c065'
    }

    /**
     * Import a single Ethereum PoW header.
     * 
     * Note that this extrinsic has a very high weight. The weight is affected by the
     * value of `DescendantsUntilFinalized`. Regenerate weights if it changes.
     * 
     * The largest contributors to the worst case weight, in decreasing order, are:
     * - Pruning: max 2 writes per pruned header + 2 writes to finalize pruning state.
     *   Up to `HEADERS_TO_PRUNE_IN_SINGLE_IMPORT` can be pruned in one call.
     * - Ethash validation: this cost is pure CPU. EthashProver checks a merkle proof
     *   for each DAG node selected in the "hashimoto"-loop.
     * - Iterating over ancestors: min `DescendantsUntilFinalized` reads to find the
     *   newly finalized ancestor of a header.
     */
    get asV64(): {networkId: bigint, header: v64.Type_554, proof: v64.DoubleNodeWithMerkleProof[], mixNonce: Uint8Array, submitter: Uint8Array, signature: v64.MultiSignature} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthereumLightClientRegisterNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthereumLightClient.register_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthereumLightClient.register_network') === '4384e4ccc416d7bfa9f1f3fe96f5dfdbfc4cde8bc3c9022ccf4fbb0f47faf8d6'
    }

    get asV64(): {networkConfig: v64.NetworkConfig, header: v64.Type_554, initialDifficulty: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class EthereumLightClientUpdateDifficultyConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthereumLightClient.update_difficulty_config')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('EthereumLightClient.update_difficulty_config') === 'c9368ca18137a9a3efbdabb5f36f6249a10d05079fc6266ef547277629056bc2'
    }

    get asV64(): {networkConfig: v64.NetworkConfig} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetResetRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.reset_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('Faucet.reset_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Faucet.transfer') === '45efe1b906fb2c3d93c465ff2459d19a50bf5e8340ac2f53e03932c0411223e3'
    }

    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get asV64(): {assetId: v64.AssetId32, target: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetUpdateLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.update_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('Faucet.update_limit') === '9e7207bd47039810c3ae4b5b408fe24d413f8d03d3283af709a74e0af912fd4d'
    }

    get asV64(): {newLimit: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaNoteStalledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.note_stalled')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Note that the current authority set of the GRANDPA finality gadget has stalled.
     * 
     * This will trigger a forced authority set change at the beginning of the next session, to
     * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
     * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
     * The block production rate (which may be slowed down because of finality lagging) should
     * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
     * authority will start voting on top of `best_finalized_block_number` for new finalized
     * blocks. `best_finalized_block_number` should be the highest of the latest finalized
     * block of all validators of the new authority set.
     * 
     * Only callable by root.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
    }

    /**
     * Note that the current authority set of the GRANDPA finality gadget has stalled.
     * 
     * This will trigger a forced authority set change at the beginning of the next session, to
     * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
     * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
     * The block production rate (which may be slowed down because of finality lagging) should
     * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
     * authority will start voting on top of `best_finalized_block_number` for new finalized
     * blocks. `best_finalized_block_number` should be the highest of the latest finalized
     * block of all validators of the new authority set.
     * 
     * Only callable by root.
     */
    get asV64(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get asV64(): {equivocationProof: v64.Type_304, keyOwnerProof: v64.MembershipProof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     * 
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     * 
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get asV64(): {equivocationProof: v64.Type_304, keyOwnerProof: v64.MembershipProof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformChangeMinHermesForCreatingPollCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.change_min_hermes_for_creating_poll')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change minimum Hermes for creating a poll
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.change_min_hermes_for_creating_poll') === '3159efee62baca61c929b98e916de12d4e451b91f056aafea127554ce3b78d0d'
    }

    /**
     * Change minimum Hermes for creating a poll
     */
    get asV64(): {hermesAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformChangeMinHermesForVotingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.change_min_hermes_for_voting')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change minimum Hermes for voting
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.change_min_hermes_for_voting') === '3159efee62baca61c929b98e916de12d4e451b91f056aafea127554ce3b78d0d'
    }

    /**
     * Change minimum Hermes for voting
     */
    get asV64(): {hermesAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformCreatePollCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.create_poll')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create poll
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.create_poll') === '91b33041c98804b12dc33a841bb11eec93fe8c814aafbf743677df462214e194'
    }

    /**
     * Create poll
     */
    get asV64(): {pollStartTimestamp: bigint, pollEndTimestamp: bigint, title: Uint8Array, description: Uint8Array, options: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote for some option
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.vote') === '1ad755890a5f777883292c5870f6967485d96cbb808278014872b122b29c572c'
    }

    /**
     * Vote for some option
     */
    get asV64(): {pollId: Uint8Array, votingOption: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformWithdrawFundsCreatorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.withdraw_funds_creator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw funds creator
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.withdraw_funds_creator') === 'e623867ed4c6b9c57bb135867134b8f1478e83ac2f348219d2ddcaf4e14d4a68'
    }

    /**
     * Withdraw funds creator
     */
    get asV64(): {pollId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class HermesGovernancePlatformWithdrawFundsVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'HermesGovernancePlatform.withdraw_funds_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw funds voter
     */
    get isV64(): boolean {
        return this._chain.getCallHash('HermesGovernancePlatform.withdraw_funds_voter') === 'e623867ed4c6b9c57bb135867134b8f1478e83ac2f348219d2ddcaf4e14d4a68'
    }

    /**
     * Withdraw funds voter
     */
    get asV64(): {pollId: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddRegistrarCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_registrar')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV64(): {sub: Uint8Array, data: v64.Data} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityCancelRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.cancel_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get asV64(): {regIndex: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityClearIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.clear_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityKillIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.kill_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get asV64(): {target: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityProvideJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.provide_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === 'f45a4c20c47bf3f1eb1cbaed8c9daebd92373eee93a2db2834ad5eda4c2b15f1'
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get asV64(): {regIndex: number, target: Uint8Array, judgement: v64.Judgement, identity: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityQuitSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.quit_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRemoveSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.remove_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === '38b23c3d326211a5d1355a68469ac48b2d3b137ed03e1feb95bb1da67e04c022'
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV64(): {sub: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRenameSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.rename_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV64(): {sub: Uint8Array, data: v64.Data} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRequestJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.request_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get asV64(): {regIndex: number, maxFee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetAccountIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_account_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get asV64(): {index: number, new: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get asV64(): {index: number, fee: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFieldsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fields')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get asV64(): {index: number, fields: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get asV64(): {info: v64.IdentityInfo} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetSubsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_subs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get asV64(): {subs: [Uint8Array, v64.Data][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ImOnlineHeartbeatCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ImOnline.heartbeat')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ImOnline.heartbeat') === 'ceb066f24cc1efdb862584018e591b1046da22acdc1c7daf8270a6f6f31baffe'
    }

    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    get asV64(): {heartbeat: v64.Heartbeat, signature: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class IrohaMigrationMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'IrohaMigration.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('IrohaMigration.migrate') === 'd0a1da3461b6d673394d3f90bfb4356d1e620df001a395ec14a163c4a6e1c9d3'
    }

    get asV64(): {irohaAddress: string, irohaPublicKey: string, irohaSignature: string} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxyDisableLiquiditySourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.disable_liquidity_source')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.disable_liquidity_source') === 'd075d71210112005f0ca3a713782952225e711d5d70fd36bb9822df9d74ef8f4'
    }

    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    get asV64(): {liquiditySource: v64.LiquiditySourceType} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxyEnableLiquiditySourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.enable_liquidity_source')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.enable_liquidity_source') === 'd075d71210112005f0ca3a713782952225e711d5d70fd36bb9822df9d74ef8f4'
    }

    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    get asV64(): {liquiditySource: v64.LiquiditySourceType} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySetAdarCommissionRatioCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.set_adar_commission_ratio')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.set_adar_commission_ratio') === '914017aa9ac41b46e80daa8a3491319ba9fd1e88aef39a273e90d15cb116b51f'
    }

    get asV64(): {commissionRatio: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySwapCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.swap')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap') === '0ba3d3f0923473a295ad5792d0590831776056afcdebd1058b2443a5715440cd'
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV64(): {dexId: number, inputAssetId: v64.AssetId32, outputAssetId: v64.AssetId32, swapAmount: v64.SwapAmount, selectedSourceTypes: v64.LiquiditySourceType[], filterMode: v64.FilterMode} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySwapTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.swap_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap_transfer') === '6edc9aeb70826df0c48974cd7a2f0f64e32b6842b1cbc823261a08ac5c67e595'
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV64(): {receiver: Uint8Array, dexId: number, inputAssetId: v64.AssetId32, outputAssetId: v64.AssetId32, swapAmount: v64.SwapAmount, selectedSourceTypes: v64.LiquiditySourceType[], filterMode: v64.FilterMode} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySwapTransferBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.swap_transfer_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap_transfer_batch') === '5f36207020f3dfd05fde83e52f0d03648c2f29bb4ae1b3db2a20c91224281c70'
    }

    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV64(): {swapBatches: v64.SwapBatchInfo[], inputAssetId: v64.AssetId32, maxInputAmount: bigint, selectedSourceTypes: v64.LiquiditySourceType[], filterMode: v64.FilterMode} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxyXorlessTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.xorless_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('LiquidityProxy.xorless_transfer') === 'cac4832cc7e7be052850eddbaa6239b88b9a9c8194a6fffa4290dccbada406ad'
    }

    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    get asV64(): {dexId: number, assetId: v64.AssetId32, receiver: Uint8Array, amount: bigint, desiredXorAmount: bigint, maxAmountIn: bigint, selectedSourceTypes: v64.LiquiditySourceType[], filterMode: v64.FilterMode, additionalData: (Uint8Array | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MigrationAppMigrateErc20Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MigrationApp.migrate_erc20')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MigrationApp.migrate_erc20') === '868ebe952df9f02c3eb9a77a539e1b4a524520faa55773432e5ad8e14d83c543'
    }

    get asV64(): {networkId: bigint, erc20Assets: [v64.AssetId32, Uint8Array, number][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MigrationAppMigrateEthCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MigrationApp.migrate_eth')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MigrationApp.migrate_eth') === '791d2df852cf8293eaf460236d97f9281f2b2a7c0c865d5b2e936226f0fcd24a'
    }

    get asV64(): {networkId: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MigrationAppMigrateSidechainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MigrationApp.migrate_sidechain')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MigrationApp.migrate_sidechain') === '8bc3ba92afa4184fa7cb9ad3ba98b7c83c284f9b3713b55bc534382891e2341f'
    }

    get asV64(): {networkId: bigint, sidechainAssets: [v64.AssetId32, Uint8Array, number][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MigrationAppRegisterNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MigrationApp.register_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MigrationApp.register_network') === 'ff2d38911d33ca9e1574d318d4c253678f7e934b1e64bfbf2f9b03c3ffc06a3c'
    }

    get asV64(): {networkId: bigint, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.initialize_pool') === 'ddc7b8983b3345fab055be88bfd5c2c1befb4d7d07559ed60a2286974c6203f7'
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get asV64(): {collateralAssetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_optional_reward_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_optional_reward_multiplier') === '46824e2acf83d3c3a07598e0ec979f7587a6dbc33fb2ae25d0aa05b0a4b1ac29'
    }

    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    get asV64(): {collateralAssetId: v64.AssetId32, multiplier: (v64.FixedPoint | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetPriceBiasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_price_bias')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    get isV64(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_price_bias') === 'd251cb86e5a3d6a116745b498748833046d5bd8b9b0dc6127e1d740bb42e3dcd'
    }

    /**
     * Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    get asV64(): {priceBias: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetPriceChangeConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_price_change_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Changes price change rate and step
     */
    get isV64(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_price_change_config') === 'e64a89ccbd88304e41a7cd2b199e44554e806584a0638ada4c72f46f95f48c03'
    }

    /**
     * Changes price change rate and step
     */
    get asV64(): {priceChangeRate: bigint, priceChangeStep: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetReferenceAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_reference_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_reference_asset') === '0f3d967dea75c83db87adb08b56da4133e9350eb3cfc45a4d4618fb26ac13666'
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get asV64(): {referenceAssetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '88561668497d8fdee3be21d28e6e68bc1cd9568f418501a4b294fe2b9803acb4'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV64(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v64.Timepoint | undefined), callHash: Uint8Array, maxWeight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '362541b4f35d9d80210d674b1f185e22871774f8b31625115eb16cac6d17b953'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV64(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v64.Timepoint | undefined), call: v64.Call, maxWeight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '85fa811cce2e475bd839e61be88355498d28bcf56f95091788438be3ac4dc9b1'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV64(): {otherSignatories: Uint8Array[], call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account
     *     - Write: Multisig Storage, [Caller Account], Refund Account
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account
     *     - Write: Multisig Storage, [Caller Account], Refund Account
     * # </weight>
     */
    get asV64(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v64.Timepoint, callHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigVerifierAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultisigVerifier.add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MultisigVerifier.add_peer') === '6dc51c603666af8321200579b2c2e2565d432a8d0410687cb308c27429d58f2a'
    }

    get asV64(): {peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigVerifierInitializeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultisigVerifier.initialize')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MultisigVerifier.initialize') === 'be240b642cd00dc95a352881df96fece49765132d972374dc53694e55f68891f'
    }

    get asV64(): {networkId: v64.GenericNetworkId, peers: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigVerifierRemovePeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultisigVerifier.remove_peer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('MultisigVerifier.remove_peer') === '6dc51c603666af8321200579b2c2e2565d432a8d0410687cb308c27429d58f2a'
    }

    get asV64(): {peer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OracleProxyDisableOracleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OracleProxy.disable_oracle')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be disabled
     */
    get isV64(): boolean {
        return this._chain.getCallHash('OracleProxy.disable_oracle') === '24304f6701c131b6f66e9d3672a870effc0eb231e46e148be15197c4b15f5dee'
    }

    /**
     * Disables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be disabled
     */
    get asV64(): {oracle: v64.Oracle} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OracleProxyEnableOracleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OracleProxy.enable_oracle')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be enabled
     */
    get isV64(): boolean {
        return this._chain.getCallHash('OracleProxy.enable_oracle') === '24304f6701c131b6f66e9d3672a870effc0eb231e46e148be15197c4b15f5dee'
    }

    /**
     * Enables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be enabled
     */
    get asV64(): {oracle: v64.Oracle} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookCancelLimitOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.cancel_limit_order')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.cancel_limit_order') === '3531b722f3d756c852beee2a4666183b5a3804166506f6ec467804c7b637665a'
    }

    get asV64(): {orderBookId: v64.OrderBookId, orderId: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookCancelLimitOrdersBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.cancel_limit_orders_batch')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.cancel_limit_orders_batch') === '85871f715f61f56a8dc69b736c36744ca21f71d0422d3d2ec3b642a380f506ab'
    }

    get asV64(): {limitOrdersToCancel: [v64.OrderBookId, bigint[]][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookChangeOrderbookStatusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.change_orderbook_status')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.change_orderbook_status') === '07026ec98694448358340edb3c639a1462b7a5ccbe595dfe4e9e7633bb67830d'
    }

    get asV64(): {orderBookId: v64.OrderBookId, status: v64.OrderBookStatus} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookCreateOrderbookCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.create_orderbook')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.create_orderbook') === 'b09dbc94d9945f25005f169f6017bc16efeb44e7512efc35f1b47cd1fc5cc091'
    }

    get asV64(): {orderBookId: v64.OrderBookId} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookDeleteOrderbookCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.delete_orderbook')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.delete_orderbook') === 'b09dbc94d9945f25005f169f6017bc16efeb44e7512efc35f1b47cd1fc5cc091'
    }

    get asV64(): {orderBookId: v64.OrderBookId} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookExecuteMarketOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.execute_market_order')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.execute_market_order') === '89491791eedcfea3eee665ece2aa99a07b3fe5eee7b4ac7a37514e2989dee326'
    }

    get asV64(): {orderBookId: v64.OrderBookId, direction: v64.PriceVariant, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookPlaceLimitOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.place_limit_order')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.place_limit_order') === '4477270d13857b3c497e28081846ac19d02d2240d12d0e4994813aeabf4928aa'
    }

    get asV64(): {orderBookId: v64.OrderBookId, price: bigint, amount: bigint, side: v64.PriceVariant, lifespan: (bigint | undefined)} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class OrderBookUpdateOrderbookCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrderBook.update_orderbook')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('OrderBook.update_orderbook') === 'bf74041bdad761a5e3fed256bc51de6bbe5cd1bd1078b563dd5d9127e2c5e879'
    }

    get asV64(): {orderBookId: v64.OrderBookId, tickSize: bigint, stepLotSize: bigint, minLotSize: bigint, maxLotSize: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppAddAssetidParaidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.add_assetid_paraid')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.add_assetid_paraid') === '7025a5462a717b208617791cfcb22eb008ed97331a76895f58fe433871b9218c'
    }

    get asV64(): {networkId: v64.SubNetworkId, paraId: number, assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.burn') === 'ed8f2fff850594e17498ec885ec270c2cb4c7fd16272818f0620bf4dfd75c91b'
    }

    get asV64(): {networkId: v64.SubNetworkId, assetId: v64.AssetId32, recipient: v64.VersionedMultiLocation, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppFinalizeAssetRegistrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.finalize_asset_registration')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.finalize_asset_registration') === '3c951afc6309353d332d13d4de66b00ac3181d7d6db06bca8f2aa946764773e6'
    }

    get asV64(): {assetId: v64.AssetId32, assetKind: v64.Type_607} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.mint')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.mint') === '8736c03dfdba82cf736057610df78d1ada3f4c1a8dc6d1c0dc29068872adaf77'
    }

    get asV64(): {assetId: v64.AssetId32, sender: (v64.VersionedMultiLocation | undefined), recipient: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppRegisterSidechainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.register_sidechain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.register_sidechain_asset') === '283a699b34ac59054c1ac5a3521b735fa0fd0c497b8a6b7e98cb3e8b1561918f'
    }

    get asV64(): {networkId: v64.SubNetworkId, sidechainAsset: v64.V3AssetId, symbol: Uint8Array, name: Uint8Array, decimals: number, allowedParachains: number[], minimalXcmAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppRegisterThischainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.register_thischain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.register_thischain_asset') === '471e9fcf504ae945393e08bd28dfb5ae10c2168ffc951b4d300ab03516fc4efb'
    }

    get asV64(): {networkId: v64.SubNetworkId, assetId: v64.AssetId32, sidechainAsset: v64.V3AssetId, allowedParachains: number[], minimalXcmAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppRemoveAssetidParaidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.remove_assetid_paraid')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.remove_assetid_paraid') === '7025a5462a717b208617791cfcb22eb008ed97331a76895f58fe433871b9218c'
    }

    get asV64(): {networkId: v64.SubNetworkId, paraId: number, assetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.set_minimum_xcm_incoming_asset_count') === 'f264d3281bbef6ce043d5a99ec106535d918cac7d82973d2302945ff3eb0625d'
    }

    get asV64(): {networkId: v64.SubNetworkId, assetId: v64.AssetId32, minimalXcmAmount: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainBridgeAppUpdateTransactionStatusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainBridgeApp.update_transaction_status')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('ParachainBridgeApp.update_transaction_status') === '5bcaf9ffa18121742ca33004afd58c7b4b777a0bd816453d5dea4b199f74b061'
    }

    get asV64(): {messageId: Uint8Array, transferStatus: v64.XCMAppTransferStatus} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykDepositLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.deposit_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('PoolXYK.deposit_liquidity') === '0c5523e5380707a57e696c3938132fdaf957e074a5f686288c78be648bf3c79f'
    }

    get asV64(): {dexId: number, inputAssetA: v64.AssetId32, inputAssetB: v64.AssetId32, inputADesired: bigint, inputBDesired: bigint, inputAMin: bigint, inputBMin: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('PoolXYK.initialize_pool') === 'a94dd5897a28cb2cf3e19e610fbb83ddbbbf9ceab5abfc3379dc0ba546c10355'
    }

    get asV64(): {dexId: number, assetA: v64.AssetId32, assetB: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykWithdrawLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.withdraw_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('PoolXYK.withdraw_liquidity') === 'a338e410b4b1b91ea2577128670f126330c9fe85d1681983227c60e6d9a29164'
    }

    get asV64(): {dexId: number, outputAssetA: v64.AssetId32, outputAssetB: v64.AssetId32, markerAssetDesired: bigint, outputAMin: bigint, outputBMin: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV64(): {bytes: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnnotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unnote_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     * 
     * If `len` is provided, then it will be a much cheaper operation.
     * 
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     * 
     * If `len` is provided, then it will be a much cheaper operation.
     * 
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnrequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unrequest_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV64(): {hash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class PswapDistributionClaimIncentiveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PswapDistribution.claim_incentive')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('PswapDistribution.claim_incentive') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class QaToolsAddToWhitelistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'QATools.add_to_whitelist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add the account to the list of allowed callers.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('QATools.add_to_whitelist') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * Add the account to the list of allowed callers.
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class QaToolsOrderBookCreateAndFillBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'QATools.order_book_create_and_fill_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create multiple many order books with default parameters if do not exist and
     * fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * Parameters:
     * - `origin`: caller, should be account because unsigned error messages are unclear,
     * - `dex_id`: DEXId for all created order books,
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `fill_settings`: Parameters for placing the orders in each order book.
     * `best_bid_price` should be at least 3 price steps from the lowest accepted price,
     * and `best_ask_price` - at least 3 steps below maximum price,
     */
    get isV64(): boolean {
        return this._chain.getCallHash('QATools.order_book_create_and_fill_batch') === 'a67e495eb97b429ba63e4a285003621dd05566470219a74dac8c5a361327ccba'
    }

    /**
     * Create multiple many order books with default parameters if do not exist and
     * fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * Parameters:
     * - `origin`: caller, should be account because unsigned error messages are unclear,
     * - `dex_id`: DEXId for all created order books,
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `fill_settings`: Parameters for placing the orders in each order book.
     * `best_bid_price` should be at least 3 price steps from the lowest accepted price,
     * and `best_ask_price` - at least 3 steps below maximum price,
     */
    get asV64(): {bidsOwner: Uint8Array, asksOwner: Uint8Array, fillSettings: [v64.OrderBookId, v64.OrderBookFillSettings][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class QaToolsOrderBookCreateEmptyBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'QATools.order_book_create_empty_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create multiple order books with default parameters (if do not exist yet).
     * 
     * Parameters:
     * - `origin`: caller, should be account because error messages for unsigned txs are unclear,
     * - `order_book_ids`: ids of the created order books; trading pairs are created
     * if necessary,
     */
    get isV64(): boolean {
        return this._chain.getCallHash('QATools.order_book_create_empty_batch') === '383407fa2e949270d044e81cbd07fb3d085d9d9b5715a422e23c9e6eeb225924'
    }

    /**
     * Create multiple order books with default parameters (if do not exist yet).
     * 
     * Parameters:
     * - `origin`: caller, should be account because error messages for unsigned txs are unclear,
     * - `order_book_ids`: ids of the created order books; trading pairs are created
     * if necessary,
     */
    get asV64(): {orderBookIds: v64.OrderBookId[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class QaToolsRemoveFromWhitelistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'QATools.remove_from_whitelist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the account from the list of allowed callers.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('QATools.remove_from_whitelist') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * Remove the account from the list of allowed callers.
     */
    get asV64(): {account: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsReserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.reserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Referrals.reserve') === 'c7f36d9133a26314d7e2b6151de5a246741143f39f45d08fc42967b92cca42de'
    }

    /**
     * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    get asV64(): {balance: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsSetReferrerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.set_referrer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the referrer for the account
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Referrals.set_referrer') === 'a85f2da54bee856c89abf1e70cf29cd82224b5c14fffb4c464822bf5d3cf0dd6'
    }

    /**
     * Sets the referrer for the account
     */
    get asV64(): {referrer: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserves the balance and transfers it back to the account
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Referrals.unreserve') === 'c7f36d9133a26314d7e2b6151de5a246741143f39f45d08fc42967b92cca42de'
    }

    /**
     * Unreserves the balance and transfers it back to the account
     */
    get asV64(): {balance: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class RewardsAddUmiNftReceiversCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Rewards.add_umi_nft_receivers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalize the update of unclaimed VAL data in storage
     * Add addresses, who will receive UMI NFT rewards.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Rewards.add_umi_nft_receivers') === '459d27be4bbbe013042b6cb0bda4f7e3248d48762b891d42618aeef04ca86dd3'
    }

    /**
     * Finalize the update of unclaimed VAL data in storage
     * Add addresses, who will receive UMI NFT rewards.
     */
    get asV64(): {receivers: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class RewardsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Rewards.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the reward with signature.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Rewards.claim') === '709dcfb536f77abe420fcea544a14ca7aae295106048a972eec2942fa9bcf59a'
    }

    /**
     * Claim the reward with signature.
     */
    get asV64(): {signature: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asV64(): {when: number, index: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a named scheduled task.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV64(): {id: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '6bccfcd81a03ebba436dca52f499cc85d7132f7b1915fba77de699ddd7903f0a'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV64(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'f11a1e1bfd25d282bf226be0ae2809ba0b3cdbf6557d330e3be3b5338e43b9e9'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV64(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '120d98d103808d9d97e3046a3290d222621ee5c332b4d3518c80b933aac526c7'
    }

    /**
     * Schedule a named task.
     */
    get asV64(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '6c4f2422dca212162e9e94058a364809819dfb61bc4d4326e60ed0f2862906a2'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV64(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '4105d52cd5e705e0dda35e2eeff29e5dcb1ce49543f640d2f8b80089c4347be0'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV64(): {keys: v64.SessionKeys, proof: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.bond') === 'bb948688bed1a70b8b0ff155f0a4555536a3bab1f35f7432580a502b100ae8e4'
    }

    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    get asV64(): {controller: Uint8Array, value: bigint, payee: v64.RewardDestination} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondExtraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond_extra')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     * 
     * Emits `Bonded`.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.bond_extra') === 'f92c56c980d6a55c468653fc3149548edcf2481e5da53835a201cafa7dc02fd8'
    }

    /**
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     * 
     * Emits `Bonded`.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     * # </weight>
     */
    get asV64(): {maxAdditional: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingCancelDeferredSlashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.cancel_deferred_slash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel enactment of a deferred slash.
     * 
     * Can be called by the `T::AdminOrigin`.
     * 
     * Parameters: era and indices of the slashes for that era to kill.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.cancel_deferred_slash') === 'fab176436ff709189f441a9c591b1e715361b4db2636055c0154e452e116feb0'
    }

    /**
     * Cancel enactment of a deferred slash.
     * 
     * Can be called by the `T::AdminOrigin`.
     * 
     * Parameters: era and indices of the slashes for that era to kill.
     */
    get asV64(): {era: number, slashIndices: number[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare no desire to either validate or nominate.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Declare no desire to either validate or nominate.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     * # </weight>
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.chill_other') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get asV64(): {controller: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceApplyMinCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_apply_min_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.force_apply_min_commission') === 'ee412bb909d2500627205d4c5b741967883fb1ed7f64bdc95edae3852f63750e'
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get asV64(): {validatorStash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraAlwaysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era_always')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force there to be a new era at the end of sessions indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.force_new_era_always') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be a new era at the end of sessions indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNoErasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_no_eras')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force there to be no new eras indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.force_no_eras') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be no new eras indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a current staker to become completely unstaked, immediately.
     * 
     * The dispatch origin must be Root.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     * Force a current staker to become completely unstaked, immediately.
     * 
     * The dispatch origin must be Root.
     */
    get asV64(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingIncreaseValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.increase_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Increments the ideal number of validators upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.increase_validator_count') === '1b5e15eec25101f7a4e4a63e4c35b1120c3147dac0ca34ddcab4e7e3bb6ef150'
    }

    /**
     * Increments the ideal number of validators upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get asV64(): {additional: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingKickCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.kick')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.kick') === 'e074d5a93414f189b47fbb5d94c57b62cfb9e63808a3c94665eeb2cfe53be8df'
    }

    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    get asV64(): {who: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.nominate') === '730fc5a4090c1c566ea6d11126ba7258c98a461b0c6bfca8bf9e17e42f8801de'
    }

    /**
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    get asV64(): {targets: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingPayoutStakersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.payout_stakers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Pay out all the stakers behind a single validator for a single era.
     * 
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     * 
     * # <weight>
     * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     * - Contains a limited number of reads and writes.
     * -----------
     * N is the Number of payouts for the validator (including the validator)
     * Weight:
     * - Reward Destination Staked: O(N)
     * - Reward Destination Controller (Creating): O(N)
     * 
     *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
    }

    /**
     * Pay out all the stakers behind a single validator for a single era.
     * 
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     * 
     * # <weight>
     * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     * - Contains a limited number of reads and writes.
     * -----------
     * N is the Number of payouts for the validator (including the validator)
     * Weight:
     * - Reward Destination Staked: O(N)
     * - Reward Destination Controller (Creating): O(N)
     * 
     *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     * # </weight>
     */
    get asV64(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingReapStashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.reap_stash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     * 
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     * 
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     * 
     * It can be called by anyone, as long as `stash` meets the above requirements.
     * 
     * Refunds the transaction fees upon successful execution.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.reap_stash') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     * 
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     * 
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     * 
     * It can be called by anyone, as long as `stash` meets the above requirements.
     * 
     * Refunds the transaction fees upon successful execution.
     */
    get asV64(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingRebondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.rebond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Rebond a portion of the stash scheduled to be unlocked.
     * 
     * The dispatch origin must be signed by the controller.
     * 
     * # <weight>
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MaxUnlockingChunks`.
     * - Storage changes: Can't increase storage, only decrease it.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.rebond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     * Rebond a portion of the stash scheduled to be unlocked.
     * 
     * The dispatch origin must be signed by the controller.
     * 
     * # <weight>
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MaxUnlockingChunks`.
     * - Storage changes: Can't increase storage, only decrease it.
     * # </weight>
     */
    get asV64(): {value: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingScaleValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.scale_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Scale up the ideal number of validators by a factor upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.scale_validator_count') === 'd5f5b0d2128c7dec0e2681f604f51d1657af9bf5eb7c704432075cb4655e0065'
    }

    /**
     * Scale up the ideal number of validators by a factor upto maximum of
     * `ElectionProviderBase::MaxWinners`.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get asV64(): {factor: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetControllerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_controller')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_controller') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    get asV64(): {controller: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the validators who cannot be slashed (if any).
     * 
     * The dispatch origin must be Root.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_invulnerables') === '994c18897efc6a5b0e11aeb337b6c718ad03cb0eb182a442fc74b9c80dd56313'
    }

    /**
     * Set the validators who cannot be slashed (if any).
     * 
     * The dispatch origin must be Root.
     */
    get asV64(): {invulnerables: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetMinCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_min_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_min_commission') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    get asV64(): {new: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetPayeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_payee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * (Re-)set the payment target for a controller.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     * - Weight: O(1)
     * - DB Weight:
     *     - Read: Ledger
     *     - Write: Payee
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_payee') === 'e882138b8d0371da862d058ac00f1def3ca0f71ab72eda3fbfb7d75b5fa16515'
    }

    /**
     * (Re-)set the payment target for a controller.
     * 
     * Effects will be felt instantly (as soon as this function is completed successfully).
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     * - Weight: O(1)
     * - DB Weight:
     *     - Read: Ledger
     *     - Write: Payee
     * # </weight>
     */
    get asV64(): {payee: v64.RewardDestination} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetStakingConfigsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_staking_configs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * RuntimeOrigin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_staking_configs') === '67189d3ca60a3305c1159ea1c7b2cfcbc749ef2c16f16b4c876daab793efdf86'
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * RuntimeOrigin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get asV64(): {minNominatorBond: v64.ConfigOp, minValidatorBond: v64.ConfigOp, maxNominatorCount: v64.Type_297, maxValidatorCount: v64.Type_297, chillThreshold: v64.Type_298, minCommission: v64.Type_299} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Weight: O(1)
     * Write: Validator Count
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.set_validator_count') === 'e648274eb741b1a8ab74c4583589c621e8391cd9122c0f7063e1e18c4af71912'
    }

    /**
     * Sets the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Weight: O(1)
     * Write: Validator Count
     * # </weight>
     */
    get asV64(): {new: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     * 
     * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
     * can co-exists at the same time. If there are no unlocking chunks slots available
     * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
     * 
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     * 
     * Emits `Unbonded`.
     * 
     * See also [`Call::withdraw_unbonded`].
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.unbond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     * 
     * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
     * can co-exists at the same time. If there are no unlocking chunks slots available
     * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
     * 
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     * 
     * Emits `Unbonded`.
     * 
     * See also [`Call::withdraw_unbonded`].
     */
    get asV64(): {value: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingValidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.validate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare the desire to validate for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
    }

    /**
     * Declare the desire to validate for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    get asV64(): {prefs: v64.ValidatorPrefs} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller.
     * 
     * Emits `Withdrawn`.
     * 
     * See also [`Call::unbond`].
     * 
     * # <weight>
     * Complexity O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Staking.withdraw_unbonded') === '6a7f80eeb74b237a907212a84c7fbc3bbfc8155b3decc30afb4c65c3bcb3f317'
    }

    /**
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller.
     * 
     * Emits `Withdrawn`.
     * 
     * See also [`Call::unbond`].
     * 
     * # <weight>
     * Complexity O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     * # </weight>
     */
    get asV64(): {numSlashingSpans: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SubstrateBridgeInboundChannelSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubstrateBridgeInboundChannel.submit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('SubstrateBridgeInboundChannel.submit') === '4481e09a99c8e71d72d4ff83b5b617d1aa6f24b8ab883cb45cf36f3a9606a783'
    }

    get asV64(): {networkId: v64.SubNetworkId, commitment: v64.GenericCommitment, proof: v64.MultiProof} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get asV64(): {new: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ae3485ab1c9454f2794d67c75b4b934bd1b80b3228bda5b38e3f9d7bb6a1188c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV64(): {call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '843d0b597503413f5b7ddfcc6540bd6f7ab19d3680e91b57ae9cc32022137862'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV64(): {who: Uint8Array, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '434697adb21d84866fdd410d1417556379fa8d5f7bb5b3c369730a9a7e9b812c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV64(): {call: v64.Call, weight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get asV64(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill some items from storage.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     */
    get asV64(): {keys: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get asV64(): {remark: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asV64(): {remark: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get asV64(): {code: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get asV64(): {code: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get asV64(): {pages: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set some items of storage.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     */
    get asV64(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array, index: number, proposalWeightBound: v64.Weight, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV64(): {proposalHash: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'bcc17baac25e3df63170e0c02e0e0ba1053bd100bc858b9b294c50fa8604b499'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV64(): {proposal: v64.Call, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '501cd83ef265631371ca83907f1c727bd71ec7c45600bfcdeef8b6b913638bdb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV64(): {threshold: number, proposal: v64.Call, lengthBound: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV64(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV64(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV64(): {who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV64(): {new: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV64(): {who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV64(): {members: Uint8Array[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV64(): {who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV64(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get asV64(): {now: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class TradingPairRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TradingPair.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('TradingPair.register') === 'c349a7406202905e9a828ca8399576945e928120d5909b151c8c2aad0894b062'
    }

    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    get asV64(): {dexId: number, baseAssetId: v64.AssetId32, targetAssetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '965df23950a5dc846b4aa9123e7fba4fbd384a2bd12f1e0fb9f86672a49bf3f1'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV64(): {index: number, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c862622d6a01d6844d1d55e9c6c1b96334a7cdc3b1a6cee2a7f836909666259c'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c862622d6a01d6844d1d55e9c6c1b96334a7cdc3b1a6cee2a7f836909666259c'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '9ea3279f1b1c8caaa9e45dac243c453b61fd7c91fed571f4b98acc3d7520d0f2'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV64(): {asOrigin: v64.OriginCaller, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c862622d6a01d6844d1d55e9c6c1b96334a7cdc3b1a6cee2a7f836909666259c'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '434697adb21d84866fdd410d1417556379fa8d5f7bb5b3c369730a9a7e9b812c'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV64(): {call: v64.Call, weight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsClaimCrowdloanRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.claim_crowdloan_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('VestedRewards.claim_crowdloan_rewards') === 'fe729665eaacf74c1749a103ea7c9295467f10d9e2b97bd90f32bcb913cd38cb'
    }

    get asV64(): {crowdloan: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsClaimRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.claim_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim all available PSWAP rewards by account signing this transaction.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('VestedRewards.claim_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Claim all available PSWAP rewards by account signing this transaction.
     */
    get asV64(): null {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsRegisterCrowdloanCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.register_crowdloan')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('VestedRewards.register_crowdloan') === 'd1878ba83fe02124345f494ef4cf8a476f4bc4b49d164a27ca3863845433b79a'
    }

    get asV64(): {tag: Uint8Array, startBlock: number, length: number, rewards: [v64.AssetId32, bigint][], contributions: [Uint8Array, bigint][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsUpdateRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.update_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('VestedRewards.update_rewards') === '7f80366b408f3f1d109759f7844c8defe0f5123bf6a80759fac4bc900d005e08'
    }

    get asV64(): {rewards: [Uint8Array, [v64.RewardReason, bigint][]][]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolDisableSyntheticAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.disable_synthetic_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disable synthetic asset.
     * 
     * Removes synthetic from exchanging
     * and removes XSTPool liquidity source for corresponding trading pair.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to disable.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.disable_synthetic_asset') === 'b3d8cbeec8b655ff3ab7ed68a09a3fbbac71dd2bc30bba9349c9e796a47ce838'
    }

    /**
     * Disable synthetic asset.
     * 
     * Removes synthetic from exchanging
     * and removes XSTPool liquidity source for corresponding trading pair.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to disable.
     */
    get asV64(): {syntheticAsset: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolEnableSyntheticAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.enable_synthetic_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.enable_synthetic_asset') === 'd22a7502120b8177b82ef64f69b84ff89675862cdd465a43020e0377e3fb0f4c'
    }

    get asV64(): {assetId: v64.AssetId32, referenceSymbol: Uint8Array, feeRatio: v64.FixedPoint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolRegisterSyntheticAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.register_synthetic_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register and enable new synthetic asset with `reference_symbol` price binding
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.register_synthetic_asset') === '40cc076cc09aa9b25fdcdd7d1bd4eee2cbdcd23921236fc531c8f9aa1b180646'
    }

    /**
     * Register and enable new synthetic asset with `reference_symbol` price binding
     */
    get asV64(): {assetSymbol: Uint8Array, assetName: Uint8Array, referenceSymbol: Uint8Array, feeRatio: v64.FixedPoint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolRemoveSyntheticAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.remove_synthetic_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Entirely remove synthetic asset (including linked symbol info)
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.remove_synthetic_asset') === 'b3d8cbeec8b655ff3ab7ed68a09a3fbbac71dd2bc30bba9349c9e796a47ce838'
    }

    /**
     * Entirely remove synthetic asset (including linked symbol info)
     */
    get asV64(): {syntheticAsset: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolSetReferenceAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.set_reference_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change reference asset which is used to determine collateral assets value.
     * Intended to be e.g., stablecoin DAI.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `reference_asset_id`: asset id of the new reference asset.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.set_reference_asset') === '0f3d967dea75c83db87adb08b56da4133e9350eb3cfc45a4d4618fb26ac13666'
    }

    /**
     * Change reference asset which is used to determine collateral assets value.
     * Intended to be e.g., stablecoin DAI.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `reference_asset_id`: asset id of the new reference asset.
     */
    get asV64(): {referenceAssetId: v64.AssetId32} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolSetSyntheticAssetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.set_synthetic_asset_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set synthetic asset fee.
     * 
     * This fee will be used to determine the amount of synthetic base asset (e.g. XST) to be
     * burned when user buys synthetic asset.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to set fee for,
     * - `fee_ratio`: fee ratio with precision = 18, so 1000000000000000000 = 1 = 100% fee.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.set_synthetic_asset_fee') === 'c402f720dbecfef87097ee63e185d6b8e4d419d9ec6b464a102a2596784986a6'
    }

    /**
     * Set synthetic asset fee.
     * 
     * This fee will be used to determine the amount of synthetic base asset (e.g. XST) to be
     * burned when user buys synthetic asset.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to set fee for,
     * - `fee_ratio`: fee ratio with precision = 18, so 1000000000000000000 = 1 = 100% fee.
     */
    get asV64(): {syntheticAsset: v64.AssetId32, feeRatio: v64.FixedPoint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolSetSyntheticBaseAssetFloorPriceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.set_synthetic_base_asset_floor_price')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set floor price for the synthetic base asset
     * 
     * - `origin`: root account
     * - `floor_price`: floor price for the synthetic base asset
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XSTPool.set_synthetic_base_asset_floor_price') === '5a024ef9444b4058b9b7635f42f6d6bf0075d9c73c6dd3a4165933c5f70ed4c3'
    }

    /**
     * Set floor price for the synthetic base asset
     * 
     * - `origin`: root account
     * - `floor_price`: floor price for the synthetic base asset
     */
    get asV64(): {floorPrice: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class XorFeeUpdateMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XorFee.update_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the multiplier for weight -> fee conversion.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('XorFee.update_multiplier') === 'e9cb014db6bd33209c3200608002a57ac8221fbef4076d0a85e364bdbd33a375'
    }

    /**
     * Update the multiplier for weight -> fee conversion.
     */
    get asV64(): {newMultiplier: bigint} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}
