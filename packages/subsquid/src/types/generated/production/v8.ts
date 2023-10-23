import type {Result, Option} from './support'

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Balances | Event_Permissions | Event_Rewards | Event_XorFee | Event_BridgeMultisig | Event_Utility | Event_Session | Event_Grandpa | Event_Staking | Event_Tokens | Event_Currencies | Event_TradingPair | Event_Assets | Event_MulticollateralBondingCurvePool | Event_Technical | Event_PoolXYK | Event_LiquidityProxy | Event_Council | Event_TechnicalCommittee | Event_Democracy | Event_DEXAPI | Event_EthBridge | Event_PswapDistribution | Event_Multisig | Event_Scheduler | Event_IrohaMigration | Event_ImOnline | Event_Offences | Event_TechnicalMembership | Event_ElectionsPhragmen | Event_VestedRewards | Event_Identity

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Permissions {
    __kind: 'Permissions'
    value: PermissionsEvent
}

export interface Event_Rewards {
    __kind: 'Rewards'
    value: RewardsEvent
}

export interface Event_XorFee {
    __kind: 'XorFee'
    value: XorFeeEvent
}

export interface Event_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Tokens {
    __kind: 'Tokens'
    value: TokensEvent
}

export interface Event_Currencies {
    __kind: 'Currencies'
    value: CurrenciesEvent
}

export interface Event_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairEvent
}

export interface Event_Assets {
    __kind: 'Assets'
    value: AssetsEvent
}

export interface Event_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolEvent
}

export interface Event_Technical {
    __kind: 'Technical'
    value: TechnicalEvent
}

export interface Event_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKEvent
}

export interface Event_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPIEvent
}

export interface Event_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeEvent
}

export interface Event_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Event_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: Uint8Array
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type PermissionsEvent = PermissionsEvent_PermissionGranted | PermissionsEvent_PermissionTransfered | PermissionsEvent_PermissionCreated | PermissionsEvent_PermissionAssigned

/**
 *  Permission was granted to a holder. [permission, who]
 */
export interface PermissionsEvent_PermissionGranted {
    __kind: 'PermissionGranted'
    value: [number, Uint8Array]
}

/**
 *  Permission was transfered to a new owner. [permission, who]
 */
export interface PermissionsEvent_PermissionTransfered {
    __kind: 'PermissionTransfered'
    value: [number, Uint8Array]
}

/**
 *  Permission was created with an owner. [permission, who]
 */
export interface PermissionsEvent_PermissionCreated {
    __kind: 'PermissionCreated'
    value: [number, Uint8Array]
}

/**
 *  Permission was assigned to the account in the scope. [permission, who]
 */
export interface PermissionsEvent_PermissionAssigned {
    __kind: 'PermissionAssigned'
    value: [number, Uint8Array]
}

export type RewardsEvent = RewardsEvent_Claimed

/**
 *  The account has claimed their rewards. [account]
 */
export interface RewardsEvent_Claimed {
    __kind: 'Claimed'
    value: Uint8Array
}

export type XorFeeEvent = XorFeeEvent_FeeWithdrawn

/**
 *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
 */
export interface XorFeeEvent_FeeWithdrawn {
    __kind: 'FeeWithdrawn'
    value: [Uint8Array, bigint]
}

export type BridgeMultisigEvent = BridgeMultisigEvent_MultisigAccountCreated | BridgeMultisigEvent_NewMultisig | BridgeMultisigEvent_MultisigApproval | BridgeMultisigEvent_MultisigExecuted | BridgeMultisigEvent_MultisigCancelled

/**
 *  A new multisig created. [multisig]
 */
export interface BridgeMultisigEvent_MultisigAccountCreated {
    __kind: 'MultisigAccountCreated'
    value: Uint8Array
}

/**
 *  A new multisig operation has begun. [approving, multisig, call_hash]
 */
export interface BridgeMultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array, Result<PostDispatchInfo, DispatchErrorWithPostInfoTPostDispatchInfo>]
}

/**
 *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array]
}

export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the \[session_index\], not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: number
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Uint8Array, bigint][]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type StakingEvent = StakingEvent_EraPayout | StakingEvent_Reward | StakingEvent_Slash | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakingElection | StakingEvent_SolutionStored | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked

/**
 *  The era payout has been set; the first balance is the validator-payout; the second is
 *  the remainder from the maximum amount of reward.
 *  \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPayout {
    __kind: 'EraPayout'
    value: [number, bigint]
}

/**
 *  The staker has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Reward {
    __kind: 'Reward'
    value: [Uint8Array, bigint]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 *  \[validator, amount\]
 */
export interface StakingEvent_Slash {
    __kind: 'Slash'
    value: [Uint8Array, bigint]
}

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 *  A new set of stakers was elected with the given \[compute\].
 */
export interface StakingEvent_StakingElection {
    __kind: 'StakingElection'
    value: ElectionCompute
}

/**
 *  A new solution for the upcoming election has been stored. \[compute\]
 */
export interface StakingEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: ElectionCompute
}

/**
 *  An account has bonded this amount. \[stash, amount\]
 * 
 *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *  it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *  from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 *  A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [Uint8Array, Uint8Array]
}

export type TokensEvent = TokensEvent_Transferred | TokensEvent_DustLost

/**
 *  Token transfer success. \[currency_id, from, to, amount\]
 */
export interface TokensEvent_Transferred {
    __kind: 'Transferred'
    value: [Uint8Array, Uint8Array, Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below
 *  ExistentialDeposit, resulting in an outright loss. \[account,
 *  currency_id, amount\]
 */
export interface TokensEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, Uint8Array, bigint]
}

export type CurrenciesEvent = CurrenciesEvent_Transferred | CurrenciesEvent_BalanceUpdated | CurrenciesEvent_Deposited | CurrenciesEvent_Withdrawn

/**
 *  Currency transfer success. [currency_id, from, to, amount]
 */
export interface CurrenciesEvent_Transferred {
    __kind: 'Transferred'
    value: [Uint8Array, Uint8Array, Uint8Array, bigint]
}

/**
 *  Update balance success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_BalanceUpdated {
    __kind: 'BalanceUpdated'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  Deposit success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_Deposited {
    __kind: 'Deposited'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  Withdraw success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, Uint8Array, bigint]
}

export type TradingPairEvent = TradingPairEvent_TradingPairStored

/**
 *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
 */
export interface TradingPairEvent_TradingPairStored {
    __kind: 'TradingPairStored'
    value: [number, TradingPair]
}

export type AssetsEvent = AssetsEvent_AssetRegistered | AssetsEvent_Transfer | AssetsEvent_Mint | AssetsEvent_Burn | AssetsEvent_AssetSetNonMintable

/**
 *  New asset has been registered. [Asset Id, Asset Owner Account]
 */
export interface AssetsEvent_AssetRegistered {
    __kind: 'AssetRegistered'
    value: [Uint8Array, Uint8Array]
}

/**
 *  Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
 */
export interface AssetsEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, Uint8Array, bigint]
}

/**
 *  Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
 */
export interface AssetsEvent_Mint {
    __kind: 'Mint'
    value: [Uint8Array, Uint8Array, Uint8Array, bigint]
}

/**
 *  Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
 */
export interface AssetsEvent_Burn {
    __kind: 'Burn'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  Asset is set as non-mintable. [Target Asset Id]
 */
export interface AssetsEvent_AssetSetNonMintable {
    __kind: 'AssetSetNonMintable'
    value: Uint8Array
}

export type MulticollateralBondingCurvePoolEvent = MulticollateralBondingCurvePoolEvent_PoolInitialized | MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged | MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated

/**
 *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [number, Uint8Array]
}

/**
 *  Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: Uint8Array
}

/**
 *  Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
 */
export interface MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated {
    __kind: 'OptionalRewardMultiplierUpdated'
    value: [Uint8Array, (bigint | undefined)]
}

export type TechnicalEvent = TechnicalEvent_Minted | TechnicalEvent_Burned | TechnicalEvent_OutputTransferred | TechnicalEvent_InputTransferred | TechnicalEvent_SwapSuccess

/**
 *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
 *  This is not only for pure TechAccountId.
 *  TechAccountId can be just wrapped AccountId.
 */
export interface TechnicalEvent_Minted {
    __kind: 'Minted'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
 *  For full kind of accounts like in Minted.
 */
export interface TechnicalEvent_Burned {
    __kind: 'Burned'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 *  Some assets were transferred out. [asset, from, to, amount].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_OutputTransferred {
    __kind: 'OutputTransferred'
    value: [TechAssetId, TechAccountId, Uint8Array, bigint]
}

/**
 *  Some assets were transferred in. [asset, from, to, amount].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_InputTransferred {
    __kind: 'InputTransferred'
    value: [TechAssetId, Uint8Array, TechAccountId, bigint]
}

/**
 *  Swap operaction is finalised [initiator, finaliser].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_SwapSuccess {
    __kind: 'SwapSuccess'
    value: Uint8Array
}

export type PoolXYKEvent = PoolXYKEvent_PoolIsInitialized

export interface PoolXYKEvent_PoolIsInitialized {
    __kind: 'PoolIsInitialized'
    value: Uint8Array
}

export type LiquidityProxyEvent = LiquidityProxyEvent_Exchange

/**
 *  Exchange of tokens has been performed
 *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface LiquidityProxyEvent_Exchange {
    __kind: 'Exchange'
    value: [Uint8Array, number, Uint8Array, Uint8Array, bigint, bigint, bigint]
}

export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Unlocked | DemocracyEvent_Blacklisted

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, Uint8Array[]]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 *  A proposal has been enacted. \[ref_index, is_ok\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, boolean]
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [Uint8Array, Uint8Array, number]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Uint8Array, number]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Uint8Array, number]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  An \[account\] has been unlocked successfully.
 */
export interface DemocracyEvent_Unlocked {
    __kind: 'Unlocked'
    value: Uint8Array
}

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: Uint8Array
}

export type DEXAPIEvent = DEXAPIEvent_DirectExchange

/**
 *  Exchange of tokens has been performed
 *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface DEXAPIEvent_DirectExchange {
    __kind: 'DirectExchange'
    value: [Uint8Array, Uint8Array, number, LiquiditySourceType, Uint8Array, Uint8Array, bigint, bigint, bigint]
}

export type EthBridgeEvent = EthBridgeEvent_RequestRegistered | EthBridgeEvent_ApprovalsCollected | EthBridgeEvent_RequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalized | EthBridgeEvent_RequestAborted | EthBridgeEvent_CancellationFailed

/**
 *  New request has been registered. [Request Hash]
 */
export interface EthBridgeEvent_RequestRegistered {
    __kind: 'RequestRegistered'
    value: Uint8Array
}

/**
 *  The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
 */
export interface EthBridgeEvent_ApprovalsCollected {
    __kind: 'ApprovalsCollected'
    value: Uint8Array
}

/**
 *  The request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_RequestFinalizationFailed {
    __kind: 'RequestFinalizationFailed'
    value: Uint8Array
}

/**
 *  The incoming request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalizationFailed {
    __kind: 'IncomingRequestFinalizationFailed'
    value: Uint8Array
}

/**
 *  The incoming request has been finalized. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalized {
    __kind: 'IncomingRequestFinalized'
    value: Uint8Array
}

/**
 *  The request was aborted and cancelled. [Request Hash]
 */
export interface EthBridgeEvent_RequestAborted {
    __kind: 'RequestAborted'
    value: Uint8Array
}

/**
 *  The request wasn't finalized nor cancelled. [Request Hash]
 */
export interface EthBridgeEvent_CancellationFailed {
    __kind: 'CancellationFailed'
    value: Uint8Array
}

export type PswapDistributionEvent = PswapDistributionEvent_FeesExchanged | PswapDistributionEvent_FeesExchangeFailed | PswapDistributionEvent_IncentiveDistributed | PswapDistributionEvent_IncentiveDistributionFailed | PswapDistributionEvent_BurnRateChanged | PswapDistributionEvent_NothingToExchange | PswapDistributionEvent_NothingToDistribute | PswapDistributionEvent_IncentivesBurnedAfterExchange

/**
 *  Fees successfully exchanged for appropriate amount of pool tokens.
 *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
 */
export interface PswapDistributionEvent_FeesExchanged {
    __kind: 'FeesExchanged'
    value: [number, Uint8Array, Uint8Array, bigint, Uint8Array, bigint]
}

/**
 *  Problem occurred that resulted in fees exchange not done.
 *  [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
 */
export interface PswapDistributionEvent_FeesExchangeFailed {
    __kind: 'FeesExchangeFailed'
    value: [number, Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  Incentives successfully sent out to shareholders.
 *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
 */
export interface PswapDistributionEvent_IncentiveDistributed {
    __kind: 'IncentiveDistributed'
    value: [number, Uint8Array, Uint8Array, bigint, bigint]
}

/**
 *  Problem occurred that resulted in incentive distribution not done.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_IncentiveDistributionFailed {
    __kind: 'IncentiveDistributionFailed'
    value: [number, Uint8Array]
}

/**
 *  Burn rate updated.
 *  [Current Burn Rate]
 */
export interface PswapDistributionEvent_BurnRateChanged {
    __kind: 'BurnRateChanged'
    value: bigint
}

/**
 *  Fees Account contains zero base tokens, thus exchange is dismissed.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToExchange {
    __kind: 'NothingToExchange'
    value: [number, Uint8Array]
}

/**
 *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToDistribute {
    __kind: 'NothingToDistribute'
    value: [number, Uint8Array]
}

/**
 *  This is needed for other pallet that will use this variables, for example this is
 *  farming pallet.
 *  [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
 *  Incentives burned (Incentives that is not revived (to burn)]).
 */
export interface PswapDistributionEvent_IncentivesBurnedAfterExchange {
    __kind: 'IncentivesBurnedAfterExchange'
    value: [number, Uint8Array, bigint, bigint]
}

export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 *  A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been approved by someone.
 *  \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array, DispatchResult]
}

/**
 *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Uint8Array | undefined), DispatchResult]
}

export type IrohaMigrationEvent = IrohaMigrationEvent_Migrated

/**
 *  Migrated. [source, target]
 */
export interface IrohaMigrationEvent_Migrated {
    __kind: 'Migrated'
    value: [Uint8Array, Uint8Array]
}

export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 *  A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: Uint8Array
}

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: [Uint8Array, FullIdentification][]
}

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
 *  element indicates of the offence was applied (true) or queued (false)
 *  \[kind, timeslot, applied\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Uint8Array, Uint8Array, boolean]
}

export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_ElectionError | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_Renounced | ElectionsPhragmenEvent_CandidateSlashed | ElectionsPhragmenEvent_SeatHolderSlashed

/**
 *  A new term with \[new_members\]. This indicates that enough candidates existed to run the
 *  election, not that enough have has been elected. The inner value must be examined for
 *  this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
 *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    value: [Uint8Array, bigint][]
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  Internal error happened while trying to perform election.
 */
export interface ElectionsPhragmenEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
 *  `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: Uint8Array
}

/**
 *  Someone has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_Renounced {
    __kind: 'Renounced'
    value: Uint8Array
}

/**
 *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 *  runner-up.
 * 
 *  Note that old members and runners-up are also candidates.
 */
export interface ElectionsPhragmenEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [Uint8Array, bigint]
}

/**
 *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface ElectionsPhragmenEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [Uint8Array, bigint]
}

export type VestedRewardsEvent = VestedRewardsEvent_RewardsVested | VestedRewardsEvent_ActualDoesntMatchAvailable | VestedRewardsEvent_FailedToSaveCalculatedReward | VestedRewardsEvent_AddingZeroMarketMakerReward | VestedRewardsEvent_NoEligibleMarketMakers

/**
 *  Rewards vested, limits were raised. [vested amount]
 */
export interface VestedRewardsEvent_RewardsVested {
    __kind: 'RewardsVested'
    value: bigint
}

/**
 *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
 */
export interface VestedRewardsEvent_ActualDoesntMatchAvailable {
    __kind: 'ActualDoesntMatchAvailable'
    value: RewardReason
}

/**
 *  Saving reward for account has failed in a distribution series. [account]
 */
export interface VestedRewardsEvent_FailedToSaveCalculatedReward {
    __kind: 'FailedToSaveCalculatedReward'
    value: Uint8Array
}

/**
 *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
 */
export interface VestedRewardsEvent_AddingZeroMarketMakerReward {
    __kind: 'AddingZeroMarketMakerReward'
    value: Uint8Array
}

/**
 *  Couldn't find any account with enough transactions to count market maker rewards.
 */
export interface VestedRewardsEvent_NoEligibleMarketMakers {
    __kind: 'NoEligibleMarketMakers'
}

export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 *  A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: Uint8Array
}

/**
 *  A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [Uint8Array, bigint]
}

/**
 *  A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [Uint8Array, bigint]
}

/**
 *  A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [Uint8Array, number]
}

/**
 *  A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: number
}

/**
 *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A sub-identity was removed from an identity and the deposit freed.
 *  \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A sub-identity was cleared, and the given deposit repatriated from the
 *  main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [Uint8Array, Uint8Array, bigint]
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface BridgeTimepoint {
    height: MultiChainHeight
    index: number
}

export interface PostDispatchInfo {
    actualWeight: (bigint | undefined)
    paysFee: Pays
}

export interface DispatchErrorWithPostInfoTPostDispatchInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface TradingPair {
    baseAssetId: Uint8Array
    targetAssetId: Uint8Array
}

export type TechAssetId = TechAssetId_Wrapped | TechAssetId_Escaped

export interface TechAssetId_Wrapped {
    __kind: 'Wrapped'
    value: PredefinedAssetId
}

export interface TechAssetId_Escaped {
    __kind: 'Escaped'
    value: Uint8Array
}

export type TechAccountId = TechAccountId_Pure | TechAccountId_Generic | TechAccountId_Wrapped | TechAccountId_WrappedRepr

export interface TechAccountId_Pure {
    __kind: 'Pure'
    value: [number, TechPurpose]
}

export interface TechAccountId_Generic {
    __kind: 'Generic'
    value: [Uint8Array, Uint8Array]
}

export interface TechAccountId_Wrapped {
    __kind: 'Wrapped'
    value: Uint8Array
}

export interface TechAccountId_WrappedRepr {
    __kind: 'WrappedRepr'
    value: Uint8Array
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export type LiquiditySourceType = LiquiditySourceType_XYKPool | LiquiditySourceType_BondingCurvePool | LiquiditySourceType_MulticollateralBondingCurvePool | LiquiditySourceType_MockPool | LiquiditySourceType_MockPool2 | LiquiditySourceType_MockPool3 | LiquiditySourceType_MockPool4 | LiquiditySourceType_XSTPool

export interface LiquiditySourceType_XYKPool {
    __kind: 'XYKPool'
}

export interface LiquiditySourceType_BondingCurvePool {
    __kind: 'BondingCurvePool'
}

export interface LiquiditySourceType_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
}

export interface LiquiditySourceType_MockPool {
    __kind: 'MockPool'
}

export interface LiquiditySourceType_MockPool2 {
    __kind: 'MockPool2'
}

export interface LiquiditySourceType_MockPool3 {
    __kind: 'MockPool3'
}

export interface LiquiditySourceType_MockPool4 {
    __kind: 'MockPool4'
}

export interface LiquiditySourceType_XSTPool {
    __kind: 'XSTPool'
}

export interface Timepoint {
    height: number
    index: number
}

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export type RewardReason = RewardReason_Unspecified | RewardReason_BuyOnBondingCurve | RewardReason_LiquidityProvisionFarming | RewardReason_MarketMakerVolume

export interface RewardReason_Unspecified {
    __kind: 'Unspecified'
}

export interface RewardReason_BuyOnBondingCurve {
    __kind: 'BuyOnBondingCurve'
}

export interface RewardReason_LiquidityProvisionFarming {
    __kind: 'LiquidityProvisionFarming'
}

export interface RewardReason_MarketMakerVolume {
    __kind: 'MarketMakerVolume'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type MultiChainHeight = MultiChainHeight_Thischain | MultiChainHeight_Sidechain

export interface MultiChainHeight_Thischain {
    __kind: 'Thischain'
    value: number
}

export interface MultiChainHeight_Sidechain {
    __kind: 'Sidechain'
    value: bigint
}

export type PredefinedAssetId = PredefinedAssetId_XOR | PredefinedAssetId_DOT | PredefinedAssetId_KSM | PredefinedAssetId_USDT | PredefinedAssetId_VAL | PredefinedAssetId_PSWAP | PredefinedAssetId_DAI | PredefinedAssetId_ETH | PredefinedAssetId_XSTUSD

export interface PredefinedAssetId_XOR {
    __kind: 'XOR'
}

export interface PredefinedAssetId_DOT {
    __kind: 'DOT'
}

export interface PredefinedAssetId_KSM {
    __kind: 'KSM'
}

export interface PredefinedAssetId_USDT {
    __kind: 'USDT'
}

export interface PredefinedAssetId_VAL {
    __kind: 'VAL'
}

export interface PredefinedAssetId_PSWAP {
    __kind: 'PSWAP'
}

export interface PredefinedAssetId_DAI {
    __kind: 'DAI'
}

export interface PredefinedAssetId_ETH {
    __kind: 'ETH'
}

export interface PredefinedAssetId_XSTUSD {
    __kind: 'XSTUSD'
}

export type TechPurpose = TechPurpose_FeeCollector | TechPurpose_FeeCollectorForPair | TechPurpose_LiquidityKeeper | TechPurpose_Identifier

export interface TechPurpose_FeeCollector {
    __kind: 'FeeCollector'
}

export interface TechPurpose_FeeCollectorForPair {
    __kind: 'FeeCollectorForPair'
    value: TechTradingPair
}

export interface TechPurpose_LiquidityKeeper {
    __kind: 'LiquidityKeeper'
    value: TechTradingPair
}

export interface TechPurpose_Identifier {
    __kind: 'Identifier'
    value: Uint8Array
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}

export interface TechTradingPair {
    baseAssetId: TechAssetId
    targetAssetId: TechAssetId
}
