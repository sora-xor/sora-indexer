import type {Result, Option} from './support'

export interface AssetId32 {
    code: Uint8Array
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

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional

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
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export type Type_30 = Type_30_Ok | Type_30_Err

export interface Type_30_Ok {
    __kind: 'Ok'
}

export interface Type_30_Err {
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

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned | ElectionCompute_Fallback | ElectionCompute_Emergency

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface LiquiditySourceId {
    dexId: number
    liquiditySourceIndex: LiquiditySourceType
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

export interface FixedPoint {
    inner: bigint
}

export interface Timepoint {
    height: number
    index: number
}

export type LookupError = LookupError_Unknown | LookupError_BadFormat

export interface LookupError_Unknown {
    __kind: 'Unknown'
}

export interface LookupError_BadFormat {
    __kind: 'BadFormat'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
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

export type TechAccountId = TechAccountId_Pure | TechAccountId_Generic | TechAccountId_Wrapped | TechAccountId_WrappedRepr | TechAccountId_None

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

export interface TechAccountId_None {
    __kind: 'None'
}

export interface TradingPair {
    baseAssetId: AssetId32
    targetAssetId: AssetId32
}

export type RewardReason = RewardReason_Unspecified | RewardReason_BuyOnBondingCurve | RewardReason_LiquidityProvisionFarming | RewardReason_MarketMakerVolume | RewardReason_Crowdloan

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

export interface RewardReason_Crowdloan {
    __kind: 'Crowdloan'
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export interface EquivocationProof {
    offender: Uint8Array
    slot: bigint
    firstHeader: Header
    secondHeader: Header
}

export interface MembershipProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export type Call = Call_System | Call_Babe | Call_Timestamp | Call_Balances | Call_Sudo | Call_Permissions | Call_Referrals | Call_Rewards | Call_XorFee | Call_BridgeMultisig | Call_Utility | Call_Authorship | Call_Staking | Call_Session | Call_Grandpa | Call_ImOnline | Call_Currencies | Call_TradingPair | Call_Assets | Call_MulticollateralBondingCurvePool | Call_Technical | Call_PoolXYK | Call_LiquidityProxy | Call_Council | Call_TechnicalCommittee | Call_Democracy | Call_DEXAPI | Call_EthBridge | Call_PswapDistribution | Call_Multisig | Call_Scheduler | Call_IrohaMigration | Call_TechnicalMembership | Call_ElectionsPhragmen | Call_VestedRewards | Call_Identity | Call_XSTPool | Call_CeresStaking | Call_CeresLiquidityLocker | Call_CeresTokenLocker | Call_CeresGovernancePlatform | Call_CeresLaunchpad | Call_DemeterFarmingPlatform | Call_BagsList | Call_ElectionProviderMultiPhase | Call_Faucet

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Permissions {
    __kind: 'Permissions'
    value: PermissionsCall
}

export interface Call_Referrals {
    __kind: 'Referrals'
    value: ReferralsCall
}

export interface Call_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export interface Call_XorFee {
    __kind: 'XorFee'
    value: XorFeeCall
}

export interface Call_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Call_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairCall
}

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolCall
}

export interface Call_Technical {
    __kind: 'Technical'
    value: TechnicalCall
}

export interface Call_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKCall
}

export interface Call_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPICall
}

export interface Call_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeCall
}

export interface Call_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Call_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolCall
}

export interface Call_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingCall
}

export interface Call_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerCall
}

export interface Call_CeresTokenLocker {
    __kind: 'CeresTokenLocker'
    value: CeresTokenLockerCall
}

export interface Call_CeresGovernancePlatform {
    __kind: 'CeresGovernancePlatform'
    value: CeresGovernancePlatformCall
}

export interface Call_CeresLaunchpad {
    __kind: 'CeresLaunchpad'
    value: CeresLaunchpadCall
}

export interface Call_DemeterFarmingPlatform {
    __kind: 'DemeterFarmingPlatform'
    value: DemeterFarmingPlatformCall
}

export interface Call_BagsList {
    __kind: 'BagsList'
    value: BagsListCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_Faucet {
    __kind: 'Faucet'
    value: FaucetCall
}

export interface Support {
    total: bigint
    voters: [Uint8Array, bigint][]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export interface RawSolution {
    solution: NposCompactSolution24
    score: ElectionScore
    round: number
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export type LoadIncomingRequest = LoadIncomingRequest_Transaction | LoadIncomingRequest_Meta

export interface LoadIncomingRequest_Transaction {
    __kind: 'Transaction'
    value: LoadIncomingTransactionRequest
}

export interface LoadIncomingRequest_Meta {
    __kind: 'Meta'
    value: [LoadIncomingMetaRequest, Uint8Array]
}

export type IncomingRequest = IncomingRequest_Transfer | IncomingRequest_AddToken | IncomingRequest_ChangePeers | IncomingRequest_CancelOutgoingRequest | IncomingRequest_MarkAsDone | IncomingRequest_PrepareForMigration | IncomingRequest_Migrate | IncomingRequest_ChangePeersCompat

export interface IncomingRequest_Transfer {
    __kind: 'Transfer'
    value: IncomingTransfer
}

export interface IncomingRequest_AddToken {
    __kind: 'AddToken'
    value: IncomingAddToken
}

export interface IncomingRequest_ChangePeers {
    __kind: 'ChangePeers'
    value: IncomingChangePeers
}

export interface IncomingRequest_CancelOutgoingRequest {
    __kind: 'CancelOutgoingRequest'
    value: IncomingCancelOutgoingRequest
}

export interface IncomingRequest_MarkAsDone {
    __kind: 'MarkAsDone'
    value: IncomingMarkAsDoneRequest
}

export interface IncomingRequest_PrepareForMigration {
    __kind: 'PrepareForMigration'
    value: IncomingPrepareForMigration
}

export interface IncomingRequest_Migrate {
    __kind: 'Migrate'
    value: IncomingMigrate
}

export interface IncomingRequest_ChangePeersCompat {
    __kind: 'ChangePeersCompat'
    value: IncomingChangePeersCompat
}

export type SwapAmount = SwapAmount_WithDesiredInput | SwapAmount_WithDesiredOutput

export interface SwapAmount_WithDesiredInput {
    __kind: 'WithDesiredInput'
    desiredAmountIn: bigint
    minAmountOut: bigint
}

export interface SwapAmount_WithDesiredOutput {
    __kind: 'WithDesiredOutput'
    desiredAmountOut: bigint
    maxAmountIn: bigint
}

export type FilterMode = FilterMode_Disabled | FilterMode_ForbidSelected | FilterMode_AllowSelected

export interface FilterMode_Disabled {
    __kind: 'Disabled'
}

export interface FilterMode_ForbidSelected {
    __kind: 'ForbidSelected'
}

export interface FilterMode_AllowSelected {
    __kind: 'AllowSelected'
}

export type MaybeHashed = MaybeHashed_Value | MaybeHashed_Hash

export interface MaybeHashed_Value {
    __kind: 'Value'
    value: Call
}

export interface MaybeHashed_Hash {
    __kind: 'Hash'
    value: Uint8Array
}

export interface SessionKeys {
    babe: Uint8Array
    grandpa: Uint8Array
    imOnline: Uint8Array
    beefy: Uint8Array
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Set | ConfigOp_Remove

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export type Type_205 = Type_205_Noop | Type_205_Set | Type_205_Remove

export interface Type_205_Noop {
    __kind: 'Noop'
}

export interface Type_205_Set {
    __kind: 'Set'
    value: number
}

export interface Type_205_Remove {
    __kind: 'Remove'
}

export type Type_206 = Type_206_Noop | Type_206_Set | Type_206_Remove

export interface Type_206_Noop {
    __kind: 'Noop'
}

export interface Type_206_Set {
    __kind: 'Set'
    value: number
}

export interface Type_206_Remove {
    __kind: 'Remove'
}

export type Type_207 = Type_207_Noop | Type_207_Set | Type_207_Remove

export interface Type_207_Noop {
    __kind: 'Noop'
}

export interface Type_207_Set {
    __kind: 'Set'
    value: number
}

export interface Type_207_Remove {
    __kind: 'Remove'
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_195
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_196
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export type AssetRecord = AssetRecord_Arity0 | AssetRecord_Arity1 | AssetRecord_Arity2 | AssetRecord_Arity3 | AssetRecord_Arity4 | AssetRecord_Arity5 | AssetRecord_Arity6 | AssetRecord_Arity7 | AssetRecord_Arity8 | AssetRecord_Arity9

export interface AssetRecord_Arity0 {
    __kind: 'Arity0'
}

export interface AssetRecord_Arity1 {
    __kind: 'Arity1'
    value: AssetRecordArg
}

export interface AssetRecord_Arity2 {
    __kind: 'Arity2'
    value: [AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity3 {
    __kind: 'Arity3'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity4 {
    __kind: 'Arity4'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity5 {
    __kind: 'Arity5'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity6 {
    __kind: 'Arity6'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity7 {
    __kind: 'Arity7'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity8 {
    __kind: 'Arity8'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export interface AssetRecord_Arity9 {
    __kind: 'Arity9'
    value: [AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg, AssetRecordArg]
}

export type UncleEntryItem = UncleEntryItem_InclusionHeight | UncleEntryItem_Uncle

export interface UncleEntryItem_InclusionHeight {
    __kind: 'InclusionHeight'
    value: number
}

export interface UncleEntryItem_Uncle {
    __kind: 'Uncle'
    value: [Uint8Array, (Uint8Array | undefined)]
}

export interface BabeEpochConfiguration {
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type PreDigest = PreDigest_Primary | PreDigest_SecondaryPlain | PreDigest_SecondaryVRF

export interface PreDigest_Primary {
    __kind: 'Primary'
    value: PrimaryPreDigest
}

export interface PreDigest_SecondaryPlain {
    __kind: 'SecondaryPlain'
    value: SecondaryPlainPreDigest
}

export interface PreDigest_SecondaryVRF {
    __kind: 'SecondaryVRF'
    value: SecondaryVRFPreDigest
}

export interface Bag {
    head: (Uint8Array | undefined)
    tail: (Uint8Array | undefined)
}

export interface Node {
    id: Uint8Array
    prev: (Uint8Array | undefined)
    next: (Uint8Array | undefined)
    bagUpper: bigint
    score: bigint
}

export interface ReserveData {
    amount: bigint
}

export type Releases = Releases_V1_0_0 | Releases_V2_0_0

export interface Releases_V1_0_0 {
    __kind: 'V1_0_0'
}

export interface Releases_V2_0_0 {
    __kind: 'V2_0_0'
}

export interface Multisig {
    when: BridgeTimepoint
    deposit: bigint
    depositor: Uint8Array
    approvals: Uint8Array[]
}

export type StorageVersion = StorageVersion_V1 | StorageVersion_V2

export interface StorageVersion_V1 {
    __kind: 'V1'
}

export interface StorageVersion_V2 {
    __kind: 'V2'
}

export interface ContributionInfo {
    fundsContributed: bigint
    tokensBought: bigint
    tokensClaimed: bigint
    claimingFinished: boolean
    numberOfClaims: number
}

export interface ILOInfo {
    iloOrganizer: Uint8Array
    tokensForIlo: bigint
    tokensForLiquidity: bigint
    iloPrice: bigint
    softCap: bigint
    hardCap: bigint
    minContribution: bigint
    maxContribution: bigint
    refundType: boolean
    liquidityPercent: bigint
    listingPrice: bigint
    lockupDays: number
    startTimestamp: bigint
    endTimestamp: bigint
    contributorsVesting: ContributorsVesting
    teamVesting: TeamVesting
    soldTokens: bigint
    fundsRaised: bigint
    succeeded: boolean
    failed: boolean
    lpTokens: bigint
    claimedLpTokens: boolean
    finishTimestamp: bigint
}

export interface LockInfo {
    poolTokens: bigint
    unlockingTimestamp: bigint
    assetA: AssetId32
    assetB: AssetId32
}

export interface TokenLockInfo {
    tokens: bigint
    unlockingTimestamp: bigint
    assetId: AssetId32
}

export interface Votes {
    index: number
    threshold: number
    ayes: Uint8Array[]
    nays: Uint8Array[]
    end: number
}

export interface DEXInfo {
    baseAssetId: AssetId32
    isPublic: boolean
}

export interface PoolData {
    multiplier: number
    depositFee: bigint
    isCore: boolean
    isFarm: boolean
    totalTokensInPool: bigint
    rewards: bigint
    rewardsToBeDistributed: bigint
    isRemoved: boolean
}

export interface TokenInfo {
    farmsTotalMultiplier: number
    stakingTotalMultiplier: number
    tokenPerBlock: bigint
    farmsAllocation: bigint
    stakingAllocation: bigint
    teamAllocation: bigint
    teamAccount: Uint8Array
}

export interface UserInfo {
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    pooledTokens: bigint
    rewards: bigint
}

export type PreimageStatus = PreimageStatus_Missing | PreimageStatus_Available

export interface PreimageStatus_Missing {
    __kind: 'Missing'
    value: number
}

export interface PreimageStatus_Available {
    __kind: 'Available'
    data: Uint8Array
    provider: Uint8Array
    deposit: bigint
    since: number
    expiry: (number | undefined)
}

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
    __kind: 'Finished'
    approved: boolean
    end: number
}

export type Type_549 = Type_549_V1

export interface Type_549_V1 {
    __kind: 'V1'
}

export type Voting = Voting_Direct | Voting_Delegating

export interface Voting_Direct {
    __kind: 'Direct'
    votes: [number, AccountVote][]
    delegations: Delegations
    prior: [number, bigint]
}

export interface Voting_Delegating {
    __kind: 'Delegating'
    balance: bigint
    target: Uint8Array
    conviction: Conviction
    delegations: Delegations
    prior: [number, bigint]
}

export type Type_642 = Type_642_Off | Type_642_Signed | Type_642_Unsigned | Type_642_Emergency

export interface Type_642_Off {
    __kind: 'Off'
}

export interface Type_642_Signed {
    __kind: 'Signed'
}

export interface Type_642_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface Type_642_Emergency {
    __kind: 'Emergency'
}

export interface ReadySolution {
    supports: [Uint8Array, Support][]
    score: ElectionScore
    compute: ElectionCompute
}

export interface SignedSubmission {
    who: Uint8Array
    deposit: bigint
    rawSolution: RawSolution
    callFee: bigint
}

export interface RoundSnapshot {
    voters: [Uint8Array, bigint, Uint8Array[]][]
    targets: Uint8Array[]
}

export interface SeatHolder {
    who: Uint8Array
    stake: bigint
    deposit: bigint
}

export interface Voter {
    votes: Uint8Array[]
    stake: bigint
    deposit: bigint
}

export type AssetKind = AssetKind_Thischain | AssetKind_Sidechain | AssetKind_SidechainOwned

export interface AssetKind_Thischain {
    __kind: 'Thischain'
}

export interface AssetKind_Sidechain {
    __kind: 'Sidechain'
}

export interface AssetKind_SidechainOwned {
    __kind: 'SidechainOwned'
}

export type RequestStatus = RequestStatus_Pending | RequestStatus_Frozen | RequestStatus_ApprovalsReady | RequestStatus_Failed | RequestStatus_Done | RequestStatus_Broken

export interface RequestStatus_Pending {
    __kind: 'Pending'
}

export interface RequestStatus_Frozen {
    __kind: 'Frozen'
}

export interface RequestStatus_ApprovalsReady {
    __kind: 'ApprovalsReady'
}

export interface RequestStatus_Failed {
    __kind: 'Failed'
    value: DispatchError
}

export interface RequestStatus_Done {
    __kind: 'Done'
}

export interface RequestStatus_Broken {
    __kind: 'Broken'
    value: [DispatchError, DispatchError]
}

export type OffchainRequest = OffchainRequest_Outgoing | OffchainRequest_LoadIncoming | OffchainRequest_Incoming

export interface OffchainRequest_Outgoing {
    __kind: 'Outgoing'
    value: [OutgoingRequest, Uint8Array]
}

export interface OffchainRequest_LoadIncoming {
    __kind: 'LoadIncoming'
    value: LoadIncomingRequest
}

export interface OffchainRequest_Incoming {
    __kind: 'Incoming'
    value: [IncomingRequest, Uint8Array]
}

export interface StoredPendingChange {
    scheduledAt: number
    delay: number
    nextAuthorities: [Uint8Array, bigint][]
    forced: (number | undefined)
}

export type StoredState = StoredState_Live | StoredState_PendingPause | StoredState_Paused | StoredState_PendingResume

export interface StoredState_Live {
    __kind: 'Live'
}

export interface StoredState_PendingPause {
    __kind: 'PendingPause'
    scheduledAt: number
    delay: number
}

export interface StoredState_Paused {
    __kind: 'Paused'
}

export interface StoredState_PendingResume {
    __kind: 'PendingResume'
    scheduledAt: number
    delay: number
}

export interface BoundedOpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export interface PendingMultisigAccount {
    approvingAccounts: Uint8Array[]
    migrateAt: (number | undefined)
}

export interface DistributionAccounts {
    xorAllocation: DistributionAccountData
    valHolders: DistributionAccountData
    soraCitizens: DistributionAccountData
    storesAndShops: DistributionAccountData
    parliamentAndDevelopment: DistributionAccountData
    projects: DistributionAccountData
}

export interface PriceInfo {
    priceFailures: number
    spotPrices: bigint[]
    averagePrice: bigint
    needsUpdate: boolean
    lastSpotPrice: bigint
}

export interface RewardInfo {
    claimable: bigint
    total: bigint
}

export interface ScheduledV3 {
    maybeId: (Uint8Array | undefined)
    priority: number
    call: MaybeHashed
    maybePeriodic: ([number, number] | undefined)
    origin: OriginCaller
}

export type Type_475 = Type_475_V1_0_0Ancient | Type_475_V2_0_0 | Type_475_V3_0_0 | Type_475_V4_0_0 | Type_475_V5_0_0 | Type_475_V6_0_0 | Type_475_V7_0_0 | Type_475_V8_0_0 | Type_475_V9_0_0

export interface Type_475_V1_0_0Ancient {
    __kind: 'V1_0_0Ancient'
}

export interface Type_475_V2_0_0 {
    __kind: 'V2_0_0'
}

export interface Type_475_V3_0_0 {
    __kind: 'V3_0_0'
}

export interface Type_475_V4_0_0 {
    __kind: 'V4_0_0'
}

export interface Type_475_V5_0_0 {
    __kind: 'V5_0_0'
}

export interface Type_475_V6_0_0 {
    __kind: 'V6_0_0'
}

export interface Type_475_V7_0_0 {
    __kind: 'V7_0_0'
}

export interface Type_475_V8_0_0 {
    __kind: 'V8_0_0'
}

export interface Type_475_V9_0_0 {
    __kind: 'V9_0_0'
}

export interface DurationWrapper {
    secs: bigint
    nanos: number
}

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}

export interface Digest {
    logs: DigestItem[]
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export interface LastRuntimeUpgradeInfo {
    specVersion: number
    specName: string
}

export interface Type_500 {
    free: bigint
    reserved: bigint
    frozen: bigint
}

export interface Type_498 {
    id: Uint8Array
    amount: bigint
}

export type Type_433 = Type_433_V1Ancient | Type_433_V2

export interface Type_433_V1Ancient {
    __kind: 'V1Ancient'
}

export interface Type_433_V2 {
    __kind: 'V2'
}

export interface CrowdloanReward {
    id: Uint8Array
    address: Uint8Array
    contribution: FixedPoint
    xorReward: FixedPoint
    valReward: FixedPoint
    pswapReward: FixedPoint
    xstusdReward: FixedPoint
    percent: FixedPoint
}

export interface Type_586 {
    limit: bigint
    totalAvailable: bigint
    rewards: [RewardReason, bigint][]
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

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

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

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
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

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
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

export type PredefinedAssetId = PredefinedAssetId_XOR | PredefinedAssetId_DOT | PredefinedAssetId_KSM | PredefinedAssetId_USDT | PredefinedAssetId_VAL | PredefinedAssetId_PSWAP | PredefinedAssetId_DAI | PredefinedAssetId_ETH | PredefinedAssetId_XSTUSD | PredefinedAssetId_XST

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

export interface PredefinedAssetId_XST {
    __kind: 'XST'
}

export type TechPurpose = TechPurpose_FeeCollector | TechPurpose_FeeCollectorForPair | TechPurpose_LiquidityKeeper | TechPurpose_Identifier

export interface TechPurpose_FeeCollector {
    __kind: 'FeeCollector'
}

export interface TechPurpose_FeeCollectorForPair {
    __kind: 'FeeCollectorForPair'
    value: Type_79
}

export interface TechPurpose_LiquidityKeeper {
    __kind: 'LiquidityKeeper'
    value: Type_79
}

export interface TechPurpose_Identifier {
    __kind: 'Identifier'
    value: Uint8Array
}

export type AllowedSlots = AllowedSlots_PrimarySlots | AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
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
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
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
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned | BabeCall_plan_config_change

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
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
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

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
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: Uint8Array
    newFree: bigint
    newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: Uint8Array
    dest: Uint8Array
    value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: Uint8Array
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: Uint8Array
    keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: Uint8Array
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

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
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
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
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: bigint
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
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: Uint8Array
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
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: Uint8Array
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PermissionsCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReferralsCall = ReferralsCall_reserve | ReferralsCall_unreserve | ReferralsCall_set_referrer

/**
 * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
 */
export interface ReferralsCall_reserve {
    __kind: 'reserve'
    balance: bigint
}

/**
 * Unreserves the balance and transfers it back to the account
 */
export interface ReferralsCall_unreserve {
    __kind: 'unreserve'
    balance: bigint
}

/**
 * Sets the referrer for the account
 */
export interface ReferralsCall_set_referrer {
    __kind: 'set_referrer'
    referrer: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RewardsCall = RewardsCall_claim | RewardsCall_add_umi_nft_receivers

/**
 * Claim the reward with signature.
 */
export interface RewardsCall_claim {
    __kind: 'claim'
    signature: Uint8Array
}

/**
 * Finalize the update of unclaimed VAL data in storage
 * Add addresses, who will receive UMI NFT rewards.
 */
export interface RewardsCall_add_umi_nft_receivers {
    __kind: 'add_umi_nft_receivers'
    receivers: Uint8Array[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XorFeeCall = XorFeeCall_update_multiplier

/**
 * Update the multiplier for weight -> fee conversion.
 */
export interface XorFeeCall_update_multiplier {
    __kind: 'update_multiplier'
    newMultiplier: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BridgeMultisigCall = BridgeMultisigCall_register_multisig | BridgeMultisigCall_remove_signatory | BridgeMultisigCall_add_signatory | BridgeMultisigCall_as_multi_threshold_1 | BridgeMultisigCall_as_multi | BridgeMultisigCall_approve_as_multi | BridgeMultisigCall_cancel_as_multi

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
export interface BridgeMultisigCall_register_multisig {
    __kind: 'register_multisig'
    signatories: Uint8Array[]
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
export interface BridgeMultisigCall_remove_signatory {
    __kind: 'remove_signatory'
    signatory: Uint8Array
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
export interface BridgeMultisigCall_add_signatory {
    __kind: 'add_signatory'
    newMember: Uint8Array
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
export interface BridgeMultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    id: Uint8Array
    call: Call
    timepoint: BridgeTimepoint
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
export interface BridgeMultisigCall_as_multi {
    __kind: 'as_multi'
    id: Uint8Array
    maybeTimepoint: (BridgeTimepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
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
export interface BridgeMultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    id: Uint8Array
    maybeTimepoint: (BridgeTimepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
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
export interface BridgeMultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    id: Uint8Array
    timepoint: BridgeTimepoint
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
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
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
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
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
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
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_set_history_depth | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_configs | StakingCall_chill_other | StakingCall_force_apply_min_commission

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
export interface StakingCall_bond {
    __kind: 'bond'
    controller: Uint8Array
    value: bigint
    payee: RewardDestination
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
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
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
 * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 * to be called first to remove some of the chunks (if possible).
 * 
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 * 
 * Emits `Unbonded`.
 * 
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
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
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * Declare the desire to validate for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
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
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: Uint8Array[]
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
export interface StakingCall_chill {
    __kind: 'chill'
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
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
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
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: Uint8Array
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
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Increments the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Scale up the ideal number of validators by a factor.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
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
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
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
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 * Force a current staker to become completely unstaked, immediately.
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
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
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Cancel enactment of a deferred slash.
 * 
 * Can be called by the `T::SlashCancelOrigin`.
 * 
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
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
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
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
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Set `HistoryDepth` value. This function will delete any history information
 * when `HistoryDepth` is reduced.
 * 
 * Parameters:
 * - `new_history_depth`: The new history depth you would like to set.
 * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
 *   should report all the storage items that will be deleted by clearing old era history.
 *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
 *   accurate number.
 * 
 * Origin must be root.
 * 
 * # <weight>
 * - E: Number of history depths removed, i.e. 10 -> 7 = 3
 * - Weight: O(E)
 * - DB Weight:
 *     - Reads: Current Era, History Depth
 *     - Writes: History Depth
 *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
 *       ErasStartSessionIndex
 * # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
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
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
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
export interface StakingCall_kick {
    __kind: 'kick'
    who: Uint8Array[]
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
 * Origin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_205
    maxValidatorCount: Type_205
    chillThreshold: Type_206
    minCommission: Type_207
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
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

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
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
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
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_214
    keyOwnerProof: MembershipProof
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
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_214
    keyOwnerProof: MembershipProof
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
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

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
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: Uint8Array
    currencyId: AssetId32
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: Uint8Array
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: Uint8Array
    currencyId: AssetId32
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TradingPairCall = TradingPairCall_register

/**
 * Register trading pair on the given DEX.
 * Can be only called by the DEX owner.
 * 
 * - `dex_id`: ID of the exchange.
 * - `base_asset_id`: base asset ID.
 * - `target_asset_id`: target asset ID.
 */
export interface TradingPairCall_register {
    __kind: 'register'
    dexId: number
    baseAssetId: AssetId32
    targetAssetId: AssetId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_register | AssetsCall_transfer | AssetsCall_mint | AssetsCall_burn | AssetsCall_set_non_mintable

/**
 * Performs an asset registration.
 * 
 * Registers new `AssetId` for the given `origin`.
 * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
 * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
 */
export interface AssetsCall_register {
    __kind: 'register'
    symbol: Uint8Array
    name: Uint8Array
    initialSupply: bigint
    isMintable: boolean
    isIndivisible: boolean
    optContentSrc: (Uint8Array | undefined)
    optDesc: (Uint8Array | undefined)
}

/**
 * Performs a checked Asset transfer.
 * 
 * - `origin`: caller Account, from which Asset amount is withdrawn,
 * - `asset_id`: Id of transferred Asset,
 * - `to`: Id of Account, to which Asset amount is deposited,
 * - `amount`: transferred Asset amount.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    assetId: AssetId32
    to: Uint8Array
    amount: bigint
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
export interface AssetsCall_mint {
    __kind: 'mint'
    assetId: AssetId32
    to: Uint8Array
    amount: bigint
}

/**
 * Performs a checked Asset burn, can only be done
 * by corresponding asset owner with own account.
 * 
 * - `origin`: caller Account, from which Asset amount is burned,
 * - `asset_id`: Id of burned Asset,
 * - `amount`: burned Asset amount.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    assetId: AssetId32
    amount: bigint
}

/**
 * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
 * Operation can not be undone.
 * 
 * - `origin`: caller Account, should correspond to Asset owner
 * - `asset_id`: Id of burned Asset,
 */
export interface AssetsCall_set_non_mintable {
    __kind: 'set_non_mintable'
    assetId: AssetId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MulticollateralBondingCurvePoolCall = MulticollateralBondingCurvePoolCall_initialize_pool | MulticollateralBondingCurvePoolCall_set_reference_asset | MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier | MulticollateralBondingCurvePoolCall_set_price_bias | MulticollateralBondingCurvePoolCall_set_price_change_config

/**
 * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
 */
export interface MulticollateralBondingCurvePoolCall_initialize_pool {
    __kind: 'initialize_pool'
    collateralAssetId: AssetId32
}

/**
 * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
 */
export interface MulticollateralBondingCurvePoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId32
}

/**
 * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
 * `None` value indicates reward without change, same as Some(1.0).
 */
export interface MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier {
    __kind: 'set_optional_reward_multiplier'
    collateralAssetId: AssetId32
    multiplier: (FixedPoint | undefined)
}

/**
 * Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
 */
export interface MulticollateralBondingCurvePoolCall_set_price_bias {
    __kind: 'set_price_bias'
    priceBias: bigint
}

/**
 * Changes price change rate and step
 */
export interface MulticollateralBondingCurvePoolCall_set_price_change_config {
    __kind: 'set_price_change_config'
    priceChangeRate: bigint
    priceChangeStep: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PoolXYKCall = PoolXYKCall_deposit_liquidity | PoolXYKCall_withdraw_liquidity | PoolXYKCall_initialize_pool

export interface PoolXYKCall_deposit_liquidity {
    __kind: 'deposit_liquidity'
    dexId: number
    inputAssetA: AssetId32
    inputAssetB: AssetId32
    inputADesired: bigint
    inputBDesired: bigint
    inputAMin: bigint
    inputBMin: bigint
}

export interface PoolXYKCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    dexId: number
    outputAssetA: AssetId32
    outputAssetB: AssetId32
    markerAssetDesired: bigint
    outputAMin: bigint
    outputBMin: bigint
}

export interface PoolXYKCall_initialize_pool {
    __kind: 'initialize_pool'
    dexId: number
    assetA: AssetId32
    assetB: AssetId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityProxyCall = LiquidityProxyCall_swap | LiquidityProxyCall_swap_transfer | LiquidityProxyCall_enable_liquidity_source | LiquidityProxyCall_disable_liquidity_source

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
export interface LiquidityProxyCall_swap {
    __kind: 'swap'
    dexId: number
    inputAssetId: AssetId32
    outputAssetId: AssetId32
    swapAmount: SwapAmount
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
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
export interface LiquidityProxyCall_swap_transfer {
    __kind: 'swap_transfer'
    receiver: Uint8Array
    dexId: number
    inputAssetId: AssetId32
    outputAssetId: AssetId32
    swapAmount: SwapAmount
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

/**
 * Enables XST or TBC liquidity source.
 * 
 * - `liquidity_source`: the liquidity source to be enabled.
 */
export interface LiquidityProxyCall_enable_liquidity_source {
    __kind: 'enable_liquidity_source'
    liquiditySource: LiquiditySourceType
}

/**
 * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
 * 
 * - `liquidity_source`: the liquidity source to be disabled.
 */
export interface LiquidityProxyCall_disable_liquidity_source {
    __kind: 'disable_liquidity_source'
    liquiditySource: LiquiditySourceType
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

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
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
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
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
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
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
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
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
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
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
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
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

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
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
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
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
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
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
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
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
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
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
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
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

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
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Uint8Array
    value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
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
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Uint8Array
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
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Uint8Array
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
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Uint8Array
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
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
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
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
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
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: number
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
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: Uint8Array
    conviction: Conviction
    balance: bigint
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
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Uint8Array
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Uint8Array
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Uint8Array
    proposalLenUpperBound: number
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
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: Uint8Array
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
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
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
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: Uint8Array
    index: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Uint8Array
    index: number
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
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
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
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DEXAPICall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EthBridgeCall = EthBridgeCall_register_bridge | EthBridgeCall_add_asset | EthBridgeCall_add_sidechain_token | EthBridgeCall_transfer_to_sidechain | EthBridgeCall_request_from_sidechain | EthBridgeCall_finalize_incoming_request | EthBridgeCall_add_peer | EthBridgeCall_remove_peer | EthBridgeCall_prepare_for_migration | EthBridgeCall_migrate | EthBridgeCall_register_incoming_request | EthBridgeCall_import_incoming_request | EthBridgeCall_approve_request | EthBridgeCall_abort_request | EthBridgeCall_force_add_peer | EthBridgeCall_remove_sidechain_asset | EthBridgeCall_register_existing_sidechain_asset

/**
 * Register a new bridge.
 * 
 * Parameters:
 * - `bridge_contract_address` - address of smart-contract deployed on a corresponding
 * network.
 * - `initial_peers` - a set of initial network peers.
 */
export interface EthBridgeCall_register_bridge {
    __kind: 'register_bridge'
    bridgeContractAddress: Uint8Array
    initialPeers: Uint8Array[]
    signatureVersion: BridgeSignatureVersion
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
export interface EthBridgeCall_add_asset {
    __kind: 'add_asset'
    assetId: AssetId32
    networkId: number
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
export interface EthBridgeCall_add_sidechain_token {
    __kind: 'add_sidechain_token'
    tokenAddress: Uint8Array
    symbol: string
    name: string
    decimals: number
    networkId: number
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
export interface EthBridgeCall_transfer_to_sidechain {
    __kind: 'transfer_to_sidechain'
    assetId: AssetId32
    to: Uint8Array
    amount: bigint
    networkId: number
}

/**
 * Load incoming request from Sidechain by the given transaction hash.
 * 
 * Parameters:
 * - `eth_tx_hash` - transaction hash on Sidechain.
 * - `kind` - incoming request type.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_request_from_sidechain {
    __kind: 'request_from_sidechain'
    ethTxHash: Uint8Array
    kind: IncomingRequestKind
    networkId: number
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
export interface EthBridgeCall_finalize_incoming_request {
    __kind: 'finalize_incoming_request'
    hash: Uint8Array
    networkId: number
}

/**
 * Add a new peer to the bridge peers set.
 * 
 * Parameters:
 * - `account_id` - account id on thischain.
 * - `address` - account id on sidechain.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_add_peer {
    __kind: 'add_peer'
    accountId: Uint8Array
    address: Uint8Array
    networkId: number
}

/**
 * Remove peer from the the bridge peers set.
 * 
 * Parameters:
 * - `account_id` - account id on thischain.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_remove_peer {
    __kind: 'remove_peer'
    accountId: Uint8Array
    peerAddress: (Uint8Array | undefined)
    networkId: number
}

/**
 * Prepare the given bridge for migration.
 * 
 * Can only be called by an authority.
 * 
 * Parameters:
 * - `network_id` - bridge network identifier.
 */
export interface EthBridgeCall_prepare_for_migration {
    __kind: 'prepare_for_migration'
    networkId: number
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
export interface EthBridgeCall_migrate {
    __kind: 'migrate'
    newContractAddress: Uint8Array
    erc20NativeTokens: Uint8Array[]
    networkId: number
    newSignatureVersion: BridgeSignatureVersion
}

/**
 * Register the given incoming request and add it to the queue.
 * 
 * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
 * corresponding load-incoming-request and removes the load-request from the queue.
 * 
 * Can only be called by a bridge account.
 */
export interface EthBridgeCall_register_incoming_request {
    __kind: 'register_incoming_request'
    incomingRequest: IncomingRequest
}

/**
 * Import the given incoming request.
 * 
 * Register's the load request, then registers and finalizes the incoming request if it
 * succeeded, otherwise aborts the load request.
 * 
 * Can only be called by a bridge account.
 */
export interface EthBridgeCall_import_incoming_request {
    __kind: 'import_incoming_request'
    loadIncomingRequest: LoadIncomingRequest
    incomingRequestResult: Result<IncomingRequest, DispatchError>
}

/**
 * Approve the given outgoing request. The function is used by bridge peers.
 * 
 * Verifies the peer signature of the given request and adds it to `RequestApprovals`.
 * Once quorum is collected, the request gets finalized and removed from request queue.
 */
export interface EthBridgeCall_approve_request {
    __kind: 'approve_request'
    ocwPublic: Uint8Array
    hash: Uint8Array
    signatureParams: SignatureParams
    networkId: number
}

/**
 * Cancels a registered request.
 * 
 * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
 * removes it from the request queues.
 * 
 * Can only be called from a bridge account.
 */
export interface EthBridgeCall_abort_request {
    __kind: 'abort_request'
    hash: Uint8Array
    error: DispatchError
    networkId: number
}

/**
 * Add the given peer to the peers set without additional checks.
 * 
 * Can only be called by a root account.
 */
export interface EthBridgeCall_force_add_peer {
    __kind: 'force_add_peer'
    who: Uint8Array
    address: Uint8Array
    networkId: number
}

/**
 * Remove asset
 * 
 * Can only be called by root.
 */
export interface EthBridgeCall_remove_sidechain_asset {
    __kind: 'remove_sidechain_asset'
    assetId: AssetId32
    networkId: number
}

/**
 * Register existing asset
 * 
 * Can only be called by root.
 */
export interface EthBridgeCall_register_existing_sidechain_asset {
    __kind: 'register_existing_sidechain_asset'
    assetId: AssetId32
    tokenAddress: Uint8Array
    networkId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PswapDistributionCall = PswapDistributionCall_claim_incentive

export interface PswapDistributionCall_claim_incentive {
    __kind: 'claim_incentive'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

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
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
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
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
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
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
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
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IrohaMigrationCall = IrohaMigrationCall_migrate

export interface IrohaMigrationCall_migrate {
    __kind: 'migrate'
    irohaAddress: string
    irohaPublicKey: string
    irohaSignature: string
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: Uint8Array
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: Uint8Array
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsPhragmenCall = ElectionsPhragmenCall_vote | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_remove_member | ElectionsPhragmenCall_clean_defunct_voters

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
export interface ElectionsPhragmenCall_vote {
    __kind: 'vote'
    votes: Uint8Array[]
    value: bigint
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsPhragmenCall_remove_voter {
    __kind: 'remove_voter'
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
export interface ElectionsPhragmenCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
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
export interface ElectionsPhragmenCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
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
export interface ElectionsPhragmenCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
    hasReplacement: boolean
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
export interface ElectionsPhragmenCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestedRewardsCall = VestedRewardsCall_claim_rewards | VestedRewardsCall_claim_crowdloan_rewards | VestedRewardsCall_set_asset_pair

/**
 * Claim all available PSWAP rewards by account signing this transaction.
 */
export interface VestedRewardsCall_claim_rewards {
    __kind: 'claim_rewards'
}

export interface VestedRewardsCall_claim_crowdloan_rewards {
    __kind: 'claim_crowdloan_rewards'
    assetId: AssetId32
}

/**
 * Allow/disallow a market making pair.
 */
export interface VestedRewardsCall_set_asset_pair {
    __kind: 'set_asset_pair'
    fromAssetId: AssetId32
    toAssetId: AssetId32
    marketMakingRewardsAllowed: boolean
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

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
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: Uint8Array
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
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
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
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
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
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
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
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
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
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
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
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
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
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: Uint8Array
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
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
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
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: Uint8Array
    judgement: Judgement
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
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: Uint8Array
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
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: Uint8Array
    data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: Uint8Array
    data: Data
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
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: Uint8Array
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
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XSTPoolCall = XSTPoolCall_initialize_pool | XSTPoolCall_set_reference_asset | XSTPoolCall_enable_synthetic_asset

/**
 * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
 */
export interface XSTPoolCall_initialize_pool {
    __kind: 'initialize_pool'
    syntheticAssetId: AssetId32
}

/**
 * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
 */
export interface XSTPoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId32
}

export interface XSTPoolCall_enable_synthetic_asset {
    __kind: 'enable_synthetic_asset'
    syntheticAsset: AssetId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresStakingCall = CeresStakingCall_deposit | CeresStakingCall_withdraw | CeresStakingCall_change_rewards_remaining

export interface CeresStakingCall_deposit {
    __kind: 'deposit'
    amount: bigint
}

export interface CeresStakingCall_withdraw {
    __kind: 'withdraw'
}

/**
 * Change RewardsRemaining
 */
export interface CeresStakingCall_change_rewards_remaining {
    __kind: 'change_rewards_remaining'
    rewardsRemaining: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresLiquidityLockerCall = CeresLiquidityLockerCall_lock_liquidity | CeresLiquidityLockerCall_change_ceres_fee

/**
 * Lock liquidity
 */
export interface CeresLiquidityLockerCall_lock_liquidity {
    __kind: 'lock_liquidity'
    assetA: AssetId32
    assetB: AssetId32
    unlockingTimestamp: bigint
    percentageOfPoolTokens: bigint
    option: boolean
}

/**
 * Change CERES fee
 */
export interface CeresLiquidityLockerCall_change_ceres_fee {
    __kind: 'change_ceres_fee'
    ceresFee: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresTokenLockerCall = CeresTokenLockerCall_lock_tokens | CeresTokenLockerCall_withdraw_tokens | CeresTokenLockerCall_change_fee

/**
 * Lock tokens
 */
export interface CeresTokenLockerCall_lock_tokens {
    __kind: 'lock_tokens'
    assetId: AssetId32
    unlockingTimestamp: bigint
    numberOfTokens: bigint
}

/**
 * Withdraw tokens
 */
export interface CeresTokenLockerCall_withdraw_tokens {
    __kind: 'withdraw_tokens'
    assetId: AssetId32
    unlockingTimestamp: bigint
    numberOfTokens: bigint
}

/**
 * Change fee
 */
export interface CeresTokenLockerCall_change_fee {
    __kind: 'change_fee'
    newFee: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresGovernancePlatformCall = CeresGovernancePlatformCall_vote | CeresGovernancePlatformCall_create_poll | CeresGovernancePlatformCall_withdraw

/**
 * Voting for option
 */
export interface CeresGovernancePlatformCall_vote {
    __kind: 'vote'
    pollId: Uint8Array
    votingOption: number
    numberOfVotes: bigint
}

/**
 * Create poll
 */
export interface CeresGovernancePlatformCall_create_poll {
    __kind: 'create_poll'
    pollId: Uint8Array
    numberOfOptions: number
    pollStartTimestamp: bigint
    pollEndTimestamp: bigint
}

/**
 * Withdraw voting funds
 */
export interface CeresGovernancePlatformCall_withdraw {
    __kind: 'withdraw'
    pollId: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresLaunchpadCall = CeresLaunchpadCall_create_ilo | CeresLaunchpadCall_contribute | CeresLaunchpadCall_emergency_withdraw | CeresLaunchpadCall_finish_ilo | CeresLaunchpadCall_claim_lp_tokens | CeresLaunchpadCall_claim | CeresLaunchpadCall_change_ceres_burn_fee | CeresLaunchpadCall_change_ceres_contribution_fee | CeresLaunchpadCall_claim_pswap_rewards | CeresLaunchpadCall_add_whitelisted_contributor | CeresLaunchpadCall_remove_whitelisted_contributor | CeresLaunchpadCall_add_whitelisted_ilo_organizer | CeresLaunchpadCall_remove_whitelisted_ilo_organizer

/**
 * Create ILO
 */
export interface CeresLaunchpadCall_create_ilo {
    __kind: 'create_ilo'
    assetId: AssetId32
    tokensForIlo: bigint
    tokensForLiquidity: bigint
    iloPrice: bigint
    softCap: bigint
    hardCap: bigint
    minContribution: bigint
    maxContribution: bigint
    refundType: boolean
    liquidityPercent: bigint
    listingPrice: bigint
    lockupDays: number
    startTimestamp: bigint
    endTimestamp: bigint
    teamVestingTotalTokens: bigint
    teamVestingFirstReleasePercent: bigint
    teamVestingPeriod: bigint
    teamVestingPercent: bigint
    firstReleasePercent: bigint
    vestingPeriod: bigint
    vestingPercent: bigint
}

/**
 * Contribute
 */
export interface CeresLaunchpadCall_contribute {
    __kind: 'contribute'
    assetId: AssetId32
    fundsToContribute: bigint
}

/**
 * Emergency withdraw
 */
export interface CeresLaunchpadCall_emergency_withdraw {
    __kind: 'emergency_withdraw'
    assetId: AssetId32
}

/**
 * Finish ILO
 */
export interface CeresLaunchpadCall_finish_ilo {
    __kind: 'finish_ilo'
    assetId: AssetId32
}

/**
 * Claim LP tokens
 */
export interface CeresLaunchpadCall_claim_lp_tokens {
    __kind: 'claim_lp_tokens'
    assetId: AssetId32
}

/**
 * Claim tokens
 */
export interface CeresLaunchpadCall_claim {
    __kind: 'claim'
    assetId: AssetId32
}

/**
 * Change CERES burn fee
 */
export interface CeresLaunchpadCall_change_ceres_burn_fee {
    __kind: 'change_ceres_burn_fee'
    ceresFee: bigint
}

/**
 * Change CERES contribution fee
 */
export interface CeresLaunchpadCall_change_ceres_contribution_fee {
    __kind: 'change_ceres_contribution_fee'
    ceresFee: bigint
}

/**
 * Claim PSWAP rewards
 */
export interface CeresLaunchpadCall_claim_pswap_rewards {
    __kind: 'claim_pswap_rewards'
}

/**
 * Add whitelisted contributor
 */
export interface CeresLaunchpadCall_add_whitelisted_contributor {
    __kind: 'add_whitelisted_contributor'
    contributor: Uint8Array
}

/**
 * Remove whitelisted contributor
 */
export interface CeresLaunchpadCall_remove_whitelisted_contributor {
    __kind: 'remove_whitelisted_contributor'
    contributor: Uint8Array
}

/**
 * Add whitelisted ILO organizer
 */
export interface CeresLaunchpadCall_add_whitelisted_ilo_organizer {
    __kind: 'add_whitelisted_ilo_organizer'
    iloOrganizer: Uint8Array
}

/**
 * Remove whitelisted ILO organizer
 */
export interface CeresLaunchpadCall_remove_whitelisted_ilo_organizer {
    __kind: 'remove_whitelisted_ilo_organizer'
    iloOrganizer: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemeterFarmingPlatformCall = DemeterFarmingPlatformCall_register_token | DemeterFarmingPlatformCall_add_pool | DemeterFarmingPlatformCall_deposit | DemeterFarmingPlatformCall_get_rewards | DemeterFarmingPlatformCall_withdraw | DemeterFarmingPlatformCall_remove_pool | DemeterFarmingPlatformCall_change_pool_multiplier | DemeterFarmingPlatformCall_change_total_tokens | DemeterFarmingPlatformCall_change_info | DemeterFarmingPlatformCall_change_pool_deposit_fee | DemeterFarmingPlatformCall_change_token_info

/**
 * Register token for farming
 */
export interface DemeterFarmingPlatformCall_register_token {
    __kind: 'register_token'
    poolAsset: AssetId32
    tokenPerBlock: bigint
    farmsAllocation: bigint
    stakingAllocation: bigint
    teamAllocation: bigint
    teamAccount: Uint8Array
}

/**
 * Add pool
 */
export interface DemeterFarmingPlatformCall_add_pool {
    __kind: 'add_pool'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    multiplier: number
    depositFee: bigint
    isCore: boolean
}

/**
 * Deposit to pool
 */
export interface DemeterFarmingPlatformCall_deposit {
    __kind: 'deposit'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    pooledTokens: bigint
}

/**
 * Get rewards
 */
export interface DemeterFarmingPlatformCall_get_rewards {
    __kind: 'get_rewards'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
}

/**
 * Withdraw
 */
export interface DemeterFarmingPlatformCall_withdraw {
    __kind: 'withdraw'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    pooledTokens: bigint
    isFarm: boolean
}

/**
 * Remove pool
 */
export interface DemeterFarmingPlatformCall_remove_pool {
    __kind: 'remove_pool'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
}

/**
 * Change pool multiplier
 */
export interface DemeterFarmingPlatformCall_change_pool_multiplier {
    __kind: 'change_pool_multiplier'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    newMultiplier: number
}

/**
 * Change total tokens
 */
export interface DemeterFarmingPlatformCall_change_total_tokens {
    __kind: 'change_total_tokens'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    totalTokens: bigint
}

/**
 * Change info
 */
export interface DemeterFarmingPlatformCall_change_info {
    __kind: 'change_info'
    changedUser: Uint8Array
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    poolTokens: bigint
}

/**
 * Change pool deposit fee
 */
export interface DemeterFarmingPlatformCall_change_pool_deposit_fee {
    __kind: 'change_pool_deposit_fee'
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    depositFee: bigint
}

/**
 * Change token info
 */
export interface DemeterFarmingPlatformCall_change_token_info {
    __kind: 'change_token_info'
    poolAsset: AssetId32
    tokenPerBlock: bigint
    farmsAllocation: bigint
    stakingAllocation: bigint
    teamAllocation: bigint
    teamAccount: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BagsListCall = BagsListCall_rebag | BagsListCall_put_in_front_of

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
export interface BagsListCall_rebag {
    __kind: 'rebag'
    dislocated: Uint8Array
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
export interface BagsListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_submit_unsigned | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_governance_fallback

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
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

/**
 * Set a new value for `MinimumUntrustedScore`.
 * 
 * Dispatch origin must be aligned with `T::ForceOrigin`.
 * 
 * This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore: (ElectionScore | undefined)
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
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [Uint8Array, Support][]
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
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * Trigger the governance fallback.
 * 
 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 * calling [`Call::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters: (number | undefined)
    maybeMaxTargets: (number | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FaucetCall = FaucetCall_transfer | FaucetCall_reset_rewards | FaucetCall_update_limit

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
export interface FaucetCall_transfer {
    __kind: 'transfer'
    assetId: AssetId32
    target: Uint8Array
    amount: bigint
}

export interface FaucetCall_reset_rewards {
    __kind: 'reset_rewards'
}

export interface FaucetCall_update_limit {
    __kind: 'update_limit'
    newLimit: bigint
}

export interface NposCompactSolution24 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface LoadIncomingTransactionRequest {
    author: Uint8Array
    hash: Uint8Array
    timepoint: BridgeTimepoint
    kind: IncomingTransactionRequestKind
    networkId: number
}

export interface LoadIncomingMetaRequest {
    author: Uint8Array
    hash: Uint8Array
    timepoint: BridgeTimepoint
    kind: IncomingMetaRequestKind
    networkId: number
}

export interface IncomingTransfer {
    from: Uint8Array
    to: Uint8Array
    assetId: AssetId32
    assetKind: AssetKind
    amount: bigint
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
    shouldTakeFee: boolean
}

export interface IncomingAddToken {
    tokenAddress: Uint8Array
    assetId: AssetId32
    precision: number
    symbol: Uint8Array
    name: Uint8Array
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingChangePeers {
    peerAccountId: (Uint8Array | undefined)
    peerAddress: Uint8Array
    removed: boolean
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingCancelOutgoingRequest {
    outgoingRequest: OutgoingRequest
    outgoingRequestHash: Uint8Array
    initialRequestHash: Uint8Array
    txInput: Uint8Array
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingMarkAsDoneRequest {
    outgoingRequestHash: Uint8Array
    initialRequestHash: Uint8Array
    author: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingPrepareForMigration {
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingMigrate {
    newContractAddress: Uint8Array
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingChangePeersCompat {
    peerAccountId: Uint8Array
    peerAddress: Uint8Array
    added: boolean
    contract: ChangePeersContract
    author: Uint8Array
    txHash: Uint8Array
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Type_195 = Type_195_Members | Type_195_Member | Type_195__Phantom

export interface Type_195_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_195_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_195__Phantom {
    __kind: '_Phantom'
}

export type Type_196 = Type_196_Members | Type_196_Member | Type_196__Phantom

export interface Type_196_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_196_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_196__Phantom {
    __kind: '_Phantom'
}

export type Void = never

export type AssetRecordArg = AssetRecordArg_GenericI32 | AssetRecordArg_GenericU64 | AssetRecordArg_GenericU128 | AssetRecordArg_GenericU8x32 | AssetRecordArg_GenericH256 | AssetRecordArg_GenericH512 | AssetRecordArg_LeafAssetId | AssetRecordArg_AssetRecordAssetId | AssetRecordArg_Extra

export interface AssetRecordArg_GenericI32 {
    __kind: 'GenericI32'
    value: number
}

export interface AssetRecordArg_GenericU64 {
    __kind: 'GenericU64'
    value: bigint
}

export interface AssetRecordArg_GenericU128 {
    __kind: 'GenericU128'
    value: bigint
}

export interface AssetRecordArg_GenericU8x32 {
    __kind: 'GenericU8x32'
    value: Uint8Array
}

export interface AssetRecordArg_GenericH256 {
    __kind: 'GenericH256'
    value: Uint8Array
}

export interface AssetRecordArg_GenericH512 {
    __kind: 'GenericH512'
    value: Uint8Array
}

export interface AssetRecordArg_LeafAssetId {
    __kind: 'LeafAssetId'
    value: AssetId32
}

export interface AssetRecordArg_AssetRecordAssetId {
    __kind: 'AssetRecordAssetId'
    value: AssetId32
}

export interface AssetRecordArg_Extra {
    __kind: 'Extra'
    value: AssetIdExtraAssetRecordArg
}

export interface PrimaryPreDigest {
    authorityIndex: number
    slot: bigint
    vrfOutput: Uint8Array
    vrfProof: Uint8Array
}

export interface SecondaryPlainPreDigest {
    authorityIndex: number
    slot: bigint
}

export interface SecondaryVRFPreDigest {
    authorityIndex: number
    slot: bigint
    vrfOutput: Uint8Array
    vrfProof: Uint8Array
}

export interface ContributorsVesting {
    firstReleasePercent: bigint
    vestingPeriod: bigint
    vestingPercent: bigint
}

export interface TeamVesting {
    teamVestingTotalTokens: bigint
    teamVestingFirstReleasePercent: bigint
    teamVestingPeriod: bigint
    teamVestingPercent: bigint
}

export interface ReferendumStatus {
    end: number
    proposalHash: Uint8Array
    threshold: VoteThreshold
    delay: number
    tally: Tally
}

export interface Delegations {
    votes: bigint
    capital: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export type OutgoingRequest = OutgoingRequest_Transfer | OutgoingRequest_AddAsset | OutgoingRequest_AddToken | OutgoingRequest_AddPeer | OutgoingRequest_RemovePeer | OutgoingRequest_PrepareForMigration | OutgoingRequest_Migrate | OutgoingRequest_AddPeerCompat | OutgoingRequest_RemovePeerCompat

export interface OutgoingRequest_Transfer {
    __kind: 'Transfer'
    value: OutgoingTransfer
}

export interface OutgoingRequest_AddAsset {
    __kind: 'AddAsset'
    value: OutgoingAddAsset
}

export interface OutgoingRequest_AddToken {
    __kind: 'AddToken'
    value: OutgoingAddToken
}

export interface OutgoingRequest_AddPeer {
    __kind: 'AddPeer'
    value: OutgoingAddPeer
}

export interface OutgoingRequest_RemovePeer {
    __kind: 'RemovePeer'
    value: OutgoingRemovePeer
}

export interface OutgoingRequest_PrepareForMigration {
    __kind: 'PrepareForMigration'
    value: OutgoingPrepareForMigration
}

export interface OutgoingRequest_Migrate {
    __kind: 'Migrate'
    value: OutgoingMigrate
}

export interface OutgoingRequest_AddPeerCompat {
    __kind: 'AddPeerCompat'
    value: OutgoingAddPeerCompat
}

export interface OutgoingRequest_RemovePeerCompat {
    __kind: 'RemovePeerCompat'
    value: OutgoingRemovePeerCompat
}

export interface DistributionAccountData {
    account: DistributionAccount
    coefficient: FixedPoint
}

export interface AccountData {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
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

export type Event = Event_System | Event_Balances | Event_Sudo | Event_Permissions | Event_Rewards | Event_XorFee | Event_BridgeMultisig | Event_Utility | Event_Staking | Event_Offences | Event_Session | Event_Grandpa | Event_ImOnline | Event_Tokens | Event_TradingPair | Event_Assets | Event_MulticollateralBondingCurvePool | Event_Technical | Event_PoolXYK | Event_LiquidityProxy | Event_Council | Event_TechnicalCommittee | Event_Democracy | Event_EthBridge | Event_PswapDistribution | Event_Multisig | Event_Scheduler | Event_IrohaMigration | Event_TechnicalMembership | Event_ElectionsPhragmen | Event_VestedRewards | Event_Identity | Event_XSTPool | Event_PriceTools | Event_CeresStaking | Event_CeresLiquidityLocker | Event_CeresTokenLocker | Event_CeresGovernancePlatform | Event_CeresLaunchpad | Event_DemeterFarmingPlatform | Event_BagsList | Event_ElectionProviderMultiPhase | Event_Faucet

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
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

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Tokens {
    __kind: 'Tokens'
    value: TokensEvent
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

export interface Event_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolEvent
}

export interface Event_PriceTools {
    __kind: 'PriceTools'
    value: PriceToolsEvent
}

export interface Event_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingEvent
}

export interface Event_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerEvent
}

export interface Event_CeresTokenLocker {
    __kind: 'CeresTokenLocker'
    value: CeresTokenLockerEvent
}

export interface Event_CeresGovernancePlatform {
    __kind: 'CeresGovernancePlatform'
    value: CeresGovernancePlatformEvent
}

export interface Event_CeresLaunchpad {
    __kind: 'CeresLaunchpad'
    value: CeresLaunchpadEvent
}

export interface Event_DemeterFarmingPlatform {
    __kind: 'DemeterFarmingPlatform'
    value: DemeterFarmingPlatformEvent
}

export interface Event_BagsList {
    __kind: 'BagsList'
    value: BagsListEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Faucet {
    __kind: 'Faucet'
    value: FaucetEvent
}

export interface Type_79 {
    baseAssetId: TechAssetId
    targetAssetId: TechAssetId
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface Type_214 {
    setId: bigint
    equivocation: Equivocation
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export type BridgeSignatureVersion = BridgeSignatureVersion_V1 | BridgeSignatureVersion_V2 | BridgeSignatureVersion_V3

export interface BridgeSignatureVersion_V1 {
    __kind: 'V1'
}

export interface BridgeSignatureVersion_V2 {
    __kind: 'V2'
}

export interface BridgeSignatureVersion_V3 {
    __kind: 'V3'
}

export type IncomingRequestKind = IncomingRequestKind_Transaction | IncomingRequestKind_Meta

export interface IncomingRequestKind_Transaction {
    __kind: 'Transaction'
    value: IncomingTransactionRequestKind
}

export interface IncomingRequestKind_Meta {
    __kind: 'Meta'
    value: IncomingMetaRequestKind
}

export interface SignatureParams {
    r: Uint8Array
    s: Uint8Array
    v: number
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export type IncomingTransactionRequestKind = IncomingTransactionRequestKind_Transfer | IncomingTransactionRequestKind_AddAsset | IncomingTransactionRequestKind_AddPeer | IncomingTransactionRequestKind_RemovePeer | IncomingTransactionRequestKind_PrepareForMigration | IncomingTransactionRequestKind_Migrate | IncomingTransactionRequestKind_AddPeerCompat | IncomingTransactionRequestKind_RemovePeerCompat | IncomingTransactionRequestKind_TransferXOR

export interface IncomingTransactionRequestKind_Transfer {
    __kind: 'Transfer'
}

export interface IncomingTransactionRequestKind_AddAsset {
    __kind: 'AddAsset'
}

export interface IncomingTransactionRequestKind_AddPeer {
    __kind: 'AddPeer'
}

export interface IncomingTransactionRequestKind_RemovePeer {
    __kind: 'RemovePeer'
}

export interface IncomingTransactionRequestKind_PrepareForMigration {
    __kind: 'PrepareForMigration'
}

export interface IncomingTransactionRequestKind_Migrate {
    __kind: 'Migrate'
}

export interface IncomingTransactionRequestKind_AddPeerCompat {
    __kind: 'AddPeerCompat'
}

export interface IncomingTransactionRequestKind_RemovePeerCompat {
    __kind: 'RemovePeerCompat'
}

export interface IncomingTransactionRequestKind_TransferXOR {
    __kind: 'TransferXOR'
}

export type IncomingMetaRequestKind = IncomingMetaRequestKind_CancelOutgoingRequest | IncomingMetaRequestKind_MarkAsDone

export interface IncomingMetaRequestKind_CancelOutgoingRequest {
    __kind: 'CancelOutgoingRequest'
}

export interface IncomingMetaRequestKind_MarkAsDone {
    __kind: 'MarkAsDone'
}

export type ChangePeersContract = ChangePeersContract_XOR | ChangePeersContract_VAL

export interface ChangePeersContract_XOR {
    __kind: 'XOR'
}

export interface ChangePeersContract_VAL {
    __kind: 'VAL'
}

export type AssetIdExtraAssetRecordArg = AssetIdExtraAssetRecordArg_DEXId | AssetIdExtraAssetRecordArg_LstId | AssetIdExtraAssetRecordArg_AccountId

export interface AssetIdExtraAssetRecordArg_DEXId {
    __kind: 'DEXId'
    value: number
}

export interface AssetIdExtraAssetRecordArg_LstId {
    __kind: 'LstId'
    value: LiquiditySourceType
}

export interface AssetIdExtraAssetRecordArg_AccountId {
    __kind: 'AccountId'
    value: Uint8Array
}

export interface Tally {
    ayes: bigint
    nays: bigint
    turnout: bigint
}

export interface OutgoingTransfer {
    from: Uint8Array
    to: Uint8Array
    assetId: AssetId32
    amount: bigint
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddAsset {
    author: Uint8Array
    assetId: AssetId32
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddToken {
    author: Uint8Array
    tokenAddress: Uint8Array
    symbol: string
    name: string
    decimals: number
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddPeer {
    author: Uint8Array
    peerAddress: Uint8Array
    peerAccountId: Uint8Array
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingRemovePeer {
    author: Uint8Array
    peerAccountId: Uint8Array
    peerAddress: Uint8Array
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
    compatHash: (Uint8Array | undefined)
}

export interface OutgoingPrepareForMigration {
    author: Uint8Array
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingMigrate {
    author: Uint8Array
    newContractAddress: Uint8Array
    erc20NativeTokens: Uint8Array[]
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
    newSignatureVersion: BridgeSignatureVersion
}

export interface OutgoingAddPeerCompat {
    author: Uint8Array
    peerAddress: Uint8Array
    peerAccountId: Uint8Array
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingRemovePeerCompat {
    author: Uint8Array
    peerAccountId: Uint8Array
    peerAddress: Uint8Array
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export type DistributionAccount = DistributionAccount_Account | DistributionAccount_TechAccount

export interface DistributionAccount_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface DistributionAccount_TechAccount {
    __kind: 'TechAccount'
    value: TechAccountId
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
    reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_30
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Type_30
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PermissionsEvent = PermissionsEvent_PermissionGranted | PermissionsEvent_PermissionTransfered | PermissionsEvent_PermissionCreated | PermissionsEvent_PermissionAssigned

/**
 * Permission was granted to a holder. [permission, who]
 */
export interface PermissionsEvent_PermissionGranted {
    __kind: 'PermissionGranted'
    value: [number, Uint8Array]
}

/**
 * Permission was transfered to a new owner. [permission, who]
 */
export interface PermissionsEvent_PermissionTransfered {
    __kind: 'PermissionTransfered'
    value: [number, Uint8Array]
}

/**
 * Permission was created with an owner. [permission, who]
 */
export interface PermissionsEvent_PermissionCreated {
    __kind: 'PermissionCreated'
    value: [number, Uint8Array]
}

/**
 * Permission was assigned to the account in the scope. [permission, who]
 */
export interface PermissionsEvent_PermissionAssigned {
    __kind: 'PermissionAssigned'
    value: [number, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type RewardsEvent = RewardsEvent_Claimed | RewardsEvent_MigrationCompleted

/**
 * The account has claimed their rewards. [account]
 */
export interface RewardsEvent_Claimed {
    __kind: 'Claimed'
    value: Uint8Array
}

/**
 * Storage migration to version 1.2.0 completed
 */
export interface RewardsEvent_MigrationCompleted {
    __kind: 'MigrationCompleted'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XorFeeEvent = XorFeeEvent_FeeWithdrawn | XorFeeEvent_ReferrerRewarded | XorFeeEvent_WeightToFeeMultiplierUpdated

/**
 * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
 */
export interface XorFeeEvent_FeeWithdrawn {
    __kind: 'FeeWithdrawn'
    value: [Uint8Array, bigint]
}

/**
 * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
 */
export interface XorFeeEvent_ReferrerRewarded {
    __kind: 'ReferrerRewarded'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 * New multiplier for weight to fee conversion is set
 * (*1_000_000_000_000_000_000). [New value]
 */
export interface XorFeeEvent_WeightToFeeMultiplierUpdated {
    __kind: 'WeightToFeeMultiplierUpdated'
    value: bigint
}

/**
 * Events type.
 */
export type BridgeMultisigEvent = BridgeMultisigEvent_MultisigAccountCreated | BridgeMultisigEvent_NewMultisig | BridgeMultisigEvent_MultisigApproval | BridgeMultisigEvent_MultisigExecuted | BridgeMultisigEvent_MultisigCancelled

/**
 * A new multisig created. [multisig]
 */
export interface BridgeMultisigEvent_MultisigAccountCreated {
    __kind: 'MultisigAccountCreated'
    value: Uint8Array
}

/**
 * A new multisig operation has begun. [approving, multisig, call_hash]
 */
export interface BridgeMultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array]
}

/**
 * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array, (DispatchError | undefined)]
}

/**
 * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [Uint8Array, BridgeTimepoint, Uint8Array, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_30
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_EraPaid | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakersElected | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked | StakingEvent_StakingElectionFailed | StakingEvent_Chilled | StakingEvent_PayoutStarted | StakingEvent_ValidatorPrefsSet

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 * \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint]
}

/**
 * The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [Uint8Array, bigint]
}

/**
 * One validator (and its nominators) has been slashed by the given amount.
 * \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [Uint8Array, bigint]
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [Uint8Array, bigint]
}

/**
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [Uint8Array, bigint]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 * A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [Uint8Array, Uint8Array]
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has stopped participating as either a validator or nominator.
 * \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: Uint8Array
}

/**
 * The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, Uint8Array]
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    value: [Uint8Array, ValidatorPrefs]
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Uint8Array
    timeslot: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Uint8Array
}

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [Uint8Array, Exposure][]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TokensEvent = TokensEvent_Endowed | TokensEvent_DustLost | TokensEvent_Transfer | TokensEvent_Reserved | TokensEvent_Unreserved | TokensEvent_ReserveRepatriated | TokensEvent_BalanceSet | TokensEvent_TotalIssuanceSet | TokensEvent_Withdrawn | TokensEvent_Slashed | TokensEvent_Deposited | TokensEvent_LockSet | TokensEvent_LockRemoved

/**
 * An account was created with some free balance.
 */
export interface TokensEvent_Endowed {
    __kind: 'Endowed'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below
 * ExistentialDeposit, resulting in an outright loss.
 */
export interface TokensEvent_DustLost {
    __kind: 'DustLost'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface TokensEvent_Transfer {
    __kind: 'Transfer'
    currencyId: AssetId32
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface TokensEvent_Reserved {
    __kind: 'Reserved'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface TokensEvent_Unreserved {
    __kind: 'Unreserved'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Some reserved balance was repatriated (moved from reserved to
 * another account).
 */
export interface TokensEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    currencyId: AssetId32
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    status: BalanceStatus
}

/**
 * A balance was set by root.
 */
export interface TokensEvent_BalanceSet {
    __kind: 'BalanceSet'
    currencyId: AssetId32
    who: Uint8Array
    free: bigint
    reserved: bigint
}

/**
 * The total issuance of an currency has been set
 */
export interface TokensEvent_TotalIssuanceSet {
    __kind: 'TotalIssuanceSet'
    currencyId: AssetId32
    amount: bigint
}

/**
 * Some balances were withdrawn (e.g. pay for transaction fee)
 */
export interface TokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Some balances were slashed (e.g. due to mis-behavior)
 */
export interface TokensEvent_Slashed {
    __kind: 'Slashed'
    currencyId: AssetId32
    who: Uint8Array
    freeAmount: bigint
    reservedAmount: bigint
}

/**
 * Deposited some balance into an account
 */
export interface TokensEvent_Deposited {
    __kind: 'Deposited'
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Some funds are locked
 */
export interface TokensEvent_LockSet {
    __kind: 'LockSet'
    lockId: Uint8Array
    currencyId: AssetId32
    who: Uint8Array
    amount: bigint
}

/**
 * Some locked funds were unlocked
 */
export interface TokensEvent_LockRemoved {
    __kind: 'LockRemoved'
    lockId: Uint8Array
    currencyId: AssetId32
    who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TradingPairEvent = TradingPairEvent_TradingPairStored

/**
 * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
 */
export interface TradingPairEvent_TradingPairStored {
    __kind: 'TradingPairStored'
    value: [number, TradingPair]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AssetsEvent = AssetsEvent_AssetRegistered | AssetsEvent_Transfer | AssetsEvent_Mint | AssetsEvent_Burn | AssetsEvent_AssetSetNonMintable

/**
 * New asset has been registered. [Asset Id, Asset Owner Account]
 */
export interface AssetsEvent_AssetRegistered {
    __kind: 'AssetRegistered'
    value: [AssetId32, Uint8Array]
}

/**
 * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
 */
export interface AssetsEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, AssetId32, bigint]
}

/**
 * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
 */
export interface AssetsEvent_Mint {
    __kind: 'Mint'
    value: [Uint8Array, Uint8Array, AssetId32, bigint]
}

/**
 * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
 */
export interface AssetsEvent_Burn {
    __kind: 'Burn'
    value: [Uint8Array, AssetId32, bigint]
}

/**
 * Asset is set as non-mintable. [Target Asset Id]
 */
export interface AssetsEvent_AssetSetNonMintable {
    __kind: 'AssetSetNonMintable'
    value: AssetId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MulticollateralBondingCurvePoolEvent = MulticollateralBondingCurvePoolEvent_PoolInitialized | MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged | MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated | MulticollateralBondingCurvePoolEvent_PriceBiasChanged | MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged

/**
 * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [number, AssetId32]
}

/**
 * Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId32
}

/**
 * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
 */
export interface MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated {
    __kind: 'OptionalRewardMultiplierUpdated'
    value: [AssetId32, (FixedPoint | undefined)]
}

/**
 * Price bias was changed. [New Price Bias]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceBiasChanged {
    __kind: 'PriceBiasChanged'
    value: bigint
}

/**
 * Price change config was changed. [New Price Change Rate, New Price Change Step]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged {
    __kind: 'PriceChangeConfigChanged'
    value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalEvent = TechnicalEvent_Minted | TechnicalEvent_Burned | TechnicalEvent_OutputTransferred | TechnicalEvent_InputTransferred | TechnicalEvent_SwapSuccess

/**
 * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
 * This is not only for pure TechAccountId.
 * TechAccountId can be just wrapped AccountId.
 */
export interface TechnicalEvent_Minted {
    __kind: 'Minted'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
 * For full kind of accounts like in Minted.
 */
export interface TechnicalEvent_Burned {
    __kind: 'Burned'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 * Some assets were transferred out. [asset, from, to, amount].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_OutputTransferred {
    __kind: 'OutputTransferred'
    value: [TechAssetId, TechAccountId, Uint8Array, bigint]
}

/**
 * Some assets were transferred in. [asset, from, to, amount].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_InputTransferred {
    __kind: 'InputTransferred'
    value: [TechAssetId, Uint8Array, TechAccountId, bigint]
}

/**
 * Swap operaction is finalised [initiator, finaliser].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_SwapSuccess {
    __kind: 'SwapSuccess'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PoolXYKEvent = PoolXYKEvent_PoolIsInitialized

export interface PoolXYKEvent_PoolIsInitialized {
    __kind: 'PoolIsInitialized'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LiquidityProxyEvent = LiquidityProxyEvent_Exchange | LiquidityProxyEvent_LiquiditySourceEnabled | LiquidityProxyEvent_LiquiditySourceDisabled

/**
 * Exchange of tokens has been performed
 * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface LiquidityProxyEvent_Exchange {
    __kind: 'Exchange'
    value: [Uint8Array, number, AssetId32, AssetId32, bigint, bigint, bigint, LiquiditySourceId[]]
}

/**
 * Liquidity source was enabled
 */
export interface LiquidityProxyEvent_LiquiditySourceEnabled {
    __kind: 'LiquiditySourceEnabled'
    value: LiquiditySourceType
}

/**
 * Liquidity source was disabled
 */
export interface LiquidityProxyEvent_LiquiditySourceDisabled {
    __kind: 'LiquiditySourceDisabled'
    value: LiquiditySourceType
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_30
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_30
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_30
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_30
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded | DemocracyEvent_ProposalCanceled

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
    depositors: Uint8Array[]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    refIndex: number
    result: Type_30
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: Uint8Array
    target: Uint8Array
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: Uint8Array
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: Uint8Array
    proposalHash: Uint8Array
    until: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    proposalHash: Uint8Array
    who: Uint8Array
    deposit: bigint
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    proposalHash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    proposalHash: Uint8Array
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    proposalHash: Uint8Array
    refIndex: number
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    proposalHash: Uint8Array
    provider: Uint8Array
    deposit: bigint
    reaper: Uint8Array
}

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: Uint8Array
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: Uint8Array
    refIndex: number
    vote: AccountVote
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: Uint8Array
    propIndex: number
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type EthBridgeEvent = EthBridgeEvent_RequestRegistered | EthBridgeEvent_ApprovalsCollected | EthBridgeEvent_RequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalized | EthBridgeEvent_RequestAborted | EthBridgeEvent_CancellationFailed

/**
 * New request has been registered. [Request Hash]
 */
export interface EthBridgeEvent_RequestRegistered {
    __kind: 'RequestRegistered'
    value: Uint8Array
}

/**
 * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
 */
export interface EthBridgeEvent_ApprovalsCollected {
    __kind: 'ApprovalsCollected'
    value: Uint8Array
}

/**
 * The request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_RequestFinalizationFailed {
    __kind: 'RequestFinalizationFailed'
    value: Uint8Array
}

/**
 * The incoming request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalizationFailed {
    __kind: 'IncomingRequestFinalizationFailed'
    value: Uint8Array
}

/**
 * The incoming request has been finalized. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalized {
    __kind: 'IncomingRequestFinalized'
    value: Uint8Array
}

/**
 * The request was aborted and cancelled. [Request Hash]
 */
export interface EthBridgeEvent_RequestAborted {
    __kind: 'RequestAborted'
    value: Uint8Array
}

/**
 * The request wasn't finalized nor cancelled. [Request Hash]
 */
export interface EthBridgeEvent_CancellationFailed {
    __kind: 'CancellationFailed'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PswapDistributionEvent = PswapDistributionEvent_FeesExchanged | PswapDistributionEvent_FeesExchangeFailed | PswapDistributionEvent_IncentiveDistributed | PswapDistributionEvent_IncentiveDistributionFailed | PswapDistributionEvent_BurnRateChanged | PswapDistributionEvent_NothingToExchange | PswapDistributionEvent_NothingToDistribute | PswapDistributionEvent_IncentivesBurnedAfterExchange

/**
 * Fees successfully exchanged for appropriate amount of pool tokens.
 * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
 */
export interface PswapDistributionEvent_FeesExchanged {
    __kind: 'FeesExchanged'
    value: [number, Uint8Array, AssetId32, bigint, AssetId32, bigint]
}

/**
 * Problem occurred that resulted in fees exchange not done.
 * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
 */
export interface PswapDistributionEvent_FeesExchangeFailed {
    __kind: 'FeesExchangeFailed'
    value: [number, Uint8Array, AssetId32, bigint, AssetId32]
}

/**
 * Incentives successfully sent out to shareholders.
 * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
 */
export interface PswapDistributionEvent_IncentiveDistributed {
    __kind: 'IncentiveDistributed'
    value: [number, Uint8Array, AssetId32, bigint, bigint]
}

/**
 * Problem occurred that resulted in incentive distribution not done.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_IncentiveDistributionFailed {
    __kind: 'IncentiveDistributionFailed'
    value: [number, Uint8Array]
}

/**
 * Burn rate updated.
 * [Current Burn Rate]
 */
export interface PswapDistributionEvent_BurnRateChanged {
    __kind: 'BurnRateChanged'
    value: FixedPoint
}

/**
 * Fees Account contains zero base tokens, thus exchange is dismissed.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToExchange {
    __kind: 'NothingToExchange'
    value: [number, Uint8Array]
}

/**
 * Fees Account contains zero incentive tokens, thus distribution is dismissed.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToDistribute {
    __kind: 'NothingToDistribute'
    value: [number, Uint8Array]
}

/**
 * This is needed for other pallet that will use this variables, for example this is
 * farming pallet.
 * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
 * Incentives burned (Incentives that is not revived (to burn)]).
 */
export interface PswapDistributionEvent_IncentivesBurnedAfterExchange {
    __kind: 'IncentivesBurnedAfterExchange'
    value: [number, AssetId32, bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: Uint8Array
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
    result: Type_30
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallLookupFailed

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id: (Uint8Array | undefined)
    result: Type_30
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
    __kind: 'CallLookupFailed'
    task: [number, number]
    id: (Uint8Array | undefined)
    error: LookupError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IrohaMigrationEvent = IrohaMigrationEvent_Migrated

/**
 * Migrated. [source, target]
 */
export interface IrohaMigrationEvent_Migrated {
    __kind: 'Migrated'
    value: [string, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_ElectionError | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_Renounced | ElectionsPhragmenEvent_CandidateSlashed | ElectionsPhragmenEvent_SeatHolderSlashed

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    newMembers: [Uint8Array, bigint][]
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 * Internal error happened while trying to perform election.
 */
export interface ElectionsPhragmenEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    member: Uint8Array
}

/**
 * Someone has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_Renounced {
    __kind: 'Renounced'
    candidate: Uint8Array
}

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface ElectionsPhragmenEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    candidate: Uint8Array
    amount: bigint
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface ElectionsPhragmenEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    seatHolder: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestedRewardsEvent = VestedRewardsEvent_RewardsVested | VestedRewardsEvent_ActualDoesntMatchAvailable | VestedRewardsEvent_FailedToSaveCalculatedReward | VestedRewardsEvent_AddingZeroMarketMakerReward | VestedRewardsEvent_NoEligibleMarketMakers

/**
 * Rewards vested, limits were raised. [vested amount]
 */
export interface VestedRewardsEvent_RewardsVested {
    __kind: 'RewardsVested'
    value: bigint
}

/**
 * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
 */
export interface VestedRewardsEvent_ActualDoesntMatchAvailable {
    __kind: 'ActualDoesntMatchAvailable'
    value: RewardReason
}

/**
 * Saving reward for account has failed in a distribution series. [account]
 */
export interface VestedRewardsEvent_FailedToSaveCalculatedReward {
    __kind: 'FailedToSaveCalculatedReward'
    value: Uint8Array
}

/**
 * Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
 */
export interface VestedRewardsEvent_AddingZeroMarketMakerReward {
    __kind: 'AddingZeroMarketMakerReward'
    value: Uint8Array
}

/**
 * Couldn't find any account with enough transactions to count market maker rewards.
 */
export interface VestedRewardsEvent_NoEligibleMarketMakers {
    __kind: 'NoEligibleMarketMakers'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: Uint8Array
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: Uint8Array
    deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: Uint8Array
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XSTPoolEvent = XSTPoolEvent_PoolInitialized | XSTPoolEvent_ReferenceAssetChanged

/**
 * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
 */
export interface XSTPoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [number, AssetId32]
}

/**
 * Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface XSTPoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PriceToolsEvent = never

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresStakingEvent = CeresStakingEvent_Deposited | CeresStakingEvent_Withdrawn | CeresStakingEvent_RewardsChanged

/**
 * Ceres deposited. [who, amount]
 */
export interface CeresStakingEvent_Deposited {
    __kind: 'Deposited'
    value: [Uint8Array, bigint]
}

/**
 * Staked Ceres and rewards withdrawn. [who, staked, rewards]
 */
export interface CeresStakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint, bigint]
}

/**
 * Rewards changed [balance]
 */
export interface CeresStakingEvent_RewardsChanged {
    __kind: 'RewardsChanged'
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresLiquidityLockerEvent = CeresLiquidityLockerEvent_Locked

/**
 * Funds Locked [who, amount, timestamp]
 */
export interface CeresLiquidityLockerEvent_Locked {
    __kind: 'Locked'
    value: [Uint8Array, bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresTokenLockerEvent = CeresTokenLockerEvent_Locked | CeresTokenLockerEvent_Withdrawn | CeresTokenLockerEvent_FeeChanged

/**
 * Funds Locked [who, amount, asset]
 */
export interface CeresTokenLockerEvent_Locked {
    __kind: 'Locked'
    value: [Uint8Array, bigint, AssetId32]
}

/**
 * Funds Withdrawn [who, amount, asset]
 */
export interface CeresTokenLockerEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint, AssetId32]
}

/**
 * Fee Changed [who, amount]
 */
export interface CeresTokenLockerEvent_FeeChanged {
    __kind: 'FeeChanged'
    value: [Uint8Array, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresGovernancePlatformEvent = CeresGovernancePlatformEvent_Voted | CeresGovernancePlatformEvent_Created | CeresGovernancePlatformEvent_Withdrawn

/**
 * Voting [who, poll, option, balance]
 */
export interface CeresGovernancePlatformEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, number, bigint]
}

/**
 * Create poll [who, option, start_timestamp, end_timestamp]
 */
export interface CeresGovernancePlatformEvent_Created {
    __kind: 'Created'
    value: [Uint8Array, number, bigint, bigint]
}

/**
 * Withdrawn [who, balance]
 */
export interface CeresGovernancePlatformEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresLaunchpadEvent = CeresLaunchpadEvent_ILOCreated | CeresLaunchpadEvent_Contributed | CeresLaunchpadEvent_EmergencyWithdrawn | CeresLaunchpadEvent_ILOFinished | CeresLaunchpadEvent_ClaimedLP | CeresLaunchpadEvent_Claimed | CeresLaunchpadEvent_FeeChanged | CeresLaunchpadEvent_ClaimedPSWAP | CeresLaunchpadEvent_WhitelistedContributor | CeresLaunchpadEvent_WhitelistedIloOrganizer | CeresLaunchpadEvent_RemovedWhitelistedContributor | CeresLaunchpadEvent_RemovedWhitelistedIloOrganizer

/**
 * ILO created [who, what]
 */
export interface CeresLaunchpadEvent_ILOCreated {
    __kind: 'ILOCreated'
    value: [Uint8Array, AssetId32]
}

/**
 * Contribute [who, what, balance]
 */
export interface CeresLaunchpadEvent_Contributed {
    __kind: 'Contributed'
    value: [Uint8Array, AssetId32, bigint]
}

/**
 * Emergency withdraw [who, what, balance]
 */
export interface CeresLaunchpadEvent_EmergencyWithdrawn {
    __kind: 'EmergencyWithdrawn'
    value: [Uint8Array, AssetId32, bigint]
}

/**
 * ILO finished [who, what]
 */
export interface CeresLaunchpadEvent_ILOFinished {
    __kind: 'ILOFinished'
    value: [Uint8Array, AssetId32]
}

/**
 * Claim LP Tokens [who, what]
 */
export interface CeresLaunchpadEvent_ClaimedLP {
    __kind: 'ClaimedLP'
    value: [Uint8Array, AssetId32]
}

/**
 * Claim tokens [who, what]
 */
export interface CeresLaunchpadEvent_Claimed {
    __kind: 'Claimed'
    value: [Uint8Array, AssetId32]
}

/**
 * Fee changed [balance]
 */
export interface CeresLaunchpadEvent_FeeChanged {
    __kind: 'FeeChanged'
    value: bigint
}

/**
 * PSWAP claimed
 */
export interface CeresLaunchpadEvent_ClaimedPSWAP {
    __kind: 'ClaimedPSWAP'
}

/**
 * Contributor whitelisted [who]
 */
export interface CeresLaunchpadEvent_WhitelistedContributor {
    __kind: 'WhitelistedContributor'
    value: Uint8Array
}

/**
 * ILO organizer whitelisted [who]
 */
export interface CeresLaunchpadEvent_WhitelistedIloOrganizer {
    __kind: 'WhitelistedIloOrganizer'
    value: Uint8Array
}

/**
 * Contributor removed [who]
 */
export interface CeresLaunchpadEvent_RemovedWhitelistedContributor {
    __kind: 'RemovedWhitelistedContributor'
    value: Uint8Array
}

/**
 * ILO organizer removed [who]
 */
export interface CeresLaunchpadEvent_RemovedWhitelistedIloOrganizer {
    __kind: 'RemovedWhitelistedIloOrganizer'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemeterFarmingPlatformEvent = DemeterFarmingPlatformEvent_TokenRegistered | DemeterFarmingPlatformEvent_PoolAdded | DemeterFarmingPlatformEvent_RewardWithdrawn | DemeterFarmingPlatformEvent_Withdrawn | DemeterFarmingPlatformEvent_PoolRemoved | DemeterFarmingPlatformEvent_Deposited | DemeterFarmingPlatformEvent_MultiplierChanged | DemeterFarmingPlatformEvent_DepositFeeChanged | DemeterFarmingPlatformEvent_TokenInfoChanged | DemeterFarmingPlatformEvent_TotalTokensChanged | DemeterFarmingPlatformEvent_InfoChanged

/**
 * Token registered [who, what]
 */
export interface DemeterFarmingPlatformEvent_TokenRegistered {
    __kind: 'TokenRegistered'
    value: [Uint8Array, AssetId32]
}

/**
 * Pool added [who, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_PoolAdded {
    __kind: 'PoolAdded'
    value: [Uint8Array, AssetId32, AssetId32, boolean]
}

/**
 * Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_RewardWithdrawn {
    __kind: 'RewardWithdrawn'
    value: [Uint8Array, bigint, AssetId32, AssetId32, boolean]
}

/**
 * Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint, AssetId32, AssetId32, boolean]
}

/**
 * Pool removed [who, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_PoolRemoved {
    __kind: 'PoolRemoved'
    value: [Uint8Array, AssetId32, AssetId32, boolean]
}

/**
 * Deposited [who, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_Deposited {
    __kind: 'Deposited'
    value: [Uint8Array, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_MultiplierChanged {
    __kind: 'MultiplierChanged'
    value: [Uint8Array, AssetId32, AssetId32, boolean, number]
}

/**
 * DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_DepositFeeChanged {
    __kind: 'DepositFeeChanged'
    value: [Uint8Array, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Token info changed [who, what]
 */
export interface DemeterFarmingPlatformEvent_TokenInfoChanged {
    __kind: 'TokenInfoChanged'
    value: [Uint8Array, AssetId32]
}

/**
 * Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_TotalTokensChanged {
    __kind: 'TotalTokensChanged'
    value: [Uint8Array, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Info changed [who, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_InfoChanged {
    __kind: 'InfoChanged'
    value: [Uint8Array, AssetId32, AssetId32, boolean, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BagsListEvent = BagsListEvent_Rebagged | BagsListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface BagsListEvent_Rebagged {
    __kind: 'Rebagged'
    who: Uint8Array
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface BagsListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: Uint8Array
    newScore: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * A solution was stored with the given compute.
 * 
 * If the solution is signed, this means that it hasn't yet been processed. If the
 * solution is unsigned, this means that it has also been processed.
 * 
 * The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    electionCompute: ElectionCompute
    prevEjected: boolean
}

/**
 * The election has been finalized, with `Some` of the given computation, or else if the
 * election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    electionCompute: (ElectionCompute | undefined)
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: Uint8Array
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: Uint8Array
    value: bigint
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    round: number
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    round: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type FaucetEvent = FaucetEvent_Transferred | FaucetEvent_LimitUpdated

export interface FaucetEvent_Transferred {
    __kind: 'Transferred'
    value: [Uint8Array, bigint]
}

export interface FaucetEvent_LimitUpdated {
    __kind: 'LimitUpdated'
    value: bigint
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_216
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_221
}

export interface OpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export interface Type_216 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_221 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
}

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}
