import {Chain, ChainContext, CallContext, Call, Result, Option} from './production/support'
import * as productionCalls from './production/calls'
import * as stageCalls from './stage/calls'
import * as testCalls from './test/calls'
import * as devCalls from './dev/calls'


export class AssetsBurnCall {
	private readonly production: productionCalls.AssetsBurnCall
	private readonly stage: stageCalls.AssetsBurnCall
	private readonly test: testCalls.AssetsBurnCall
	private readonly dev: devCalls.AssetsBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsBurnCall(ctx, call)
		this.stage = new stageCalls.AssetsBurnCall(ctx, call)
		this.test = new testCalls.AssetsBurnCall(ctx, call)
		this.dev = new devCalls.AssetsBurnCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsBurnCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsBurnCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsBurnCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsBurnCall['asV42'] {
		return this.production.asV42
	}
}

export class AssetsForceMintCall {
	private readonly production: productionCalls.AssetsForceMintCall
	private readonly stage: stageCalls.AssetsForceMintCall
	private readonly test: testCalls.AssetsForceMintCall
	private readonly dev: devCalls.AssetsForceMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsForceMintCall(ctx, call)
		this.stage = new stageCalls.AssetsForceMintCall(ctx, call)
		this.test = new testCalls.AssetsForceMintCall(ctx, call)
		this.dev = new devCalls.AssetsForceMintCall(ctx, call)
	}

	get isV45(): productionCalls.AssetsForceMintCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.AssetsForceMintCall['asV45'] {
		return this.production.asV45
	}
}

export class AssetsMintCall {
	private readonly production: productionCalls.AssetsMintCall
	private readonly stage: stageCalls.AssetsMintCall
	private readonly test: testCalls.AssetsMintCall
	private readonly dev: devCalls.AssetsMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsMintCall(ctx, call)
		this.stage = new stageCalls.AssetsMintCall(ctx, call)
		this.test = new testCalls.AssetsMintCall(ctx, call)
		this.dev = new devCalls.AssetsMintCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsMintCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsMintCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsMintCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsMintCall['asV42'] {
		return this.production.asV42
	}
}

export class AssetsRegisterCall {
	private readonly production: productionCalls.AssetsRegisterCall
	private readonly stage: stageCalls.AssetsRegisterCall
	private readonly test: testCalls.AssetsRegisterCall
	private readonly dev: devCalls.AssetsRegisterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsRegisterCall(ctx, call)
		this.stage = new stageCalls.AssetsRegisterCall(ctx, call)
		this.test = new testCalls.AssetsRegisterCall(ctx, call)
		this.dev = new devCalls.AssetsRegisterCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsRegisterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsRegisterCall['asV1'] {
		return this.production.asV1
	}
	get isV22(): productionCalls.AssetsRegisterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.AssetsRegisterCall['asV22'] {
		return this.production.asV22
	}
	get isV26(): productionCalls.AssetsRegisterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.AssetsRegisterCall['asV26'] {
		return this.production.asV26
	}
}

export class AssetsSetNonMintableCall {
	private readonly production: productionCalls.AssetsSetNonMintableCall
	private readonly stage: stageCalls.AssetsSetNonMintableCall
	private readonly test: testCalls.AssetsSetNonMintableCall
	private readonly dev: devCalls.AssetsSetNonMintableCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsSetNonMintableCall(ctx, call)
		this.stage = new stageCalls.AssetsSetNonMintableCall(ctx, call)
		this.test = new testCalls.AssetsSetNonMintableCall(ctx, call)
		this.dev = new devCalls.AssetsSetNonMintableCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsSetNonMintableCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsSetNonMintableCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsSetNonMintableCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsSetNonMintableCall['asV42'] {
		return this.production.asV42
	}
}

export class AssetsTransferCall {
	private readonly production: productionCalls.AssetsTransferCall
	private readonly stage: stageCalls.AssetsTransferCall
	private readonly test: testCalls.AssetsTransferCall
	private readonly dev: devCalls.AssetsTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsTransferCall(ctx, call)
		this.stage = new stageCalls.AssetsTransferCall(ctx, call)
		this.test = new testCalls.AssetsTransferCall(ctx, call)
		this.dev = new devCalls.AssetsTransferCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsTransferCall['asV42'] {
		return this.production.asV42
	}
}

export class AssetsUpdateBalanceCall {
	private readonly production: productionCalls.AssetsUpdateBalanceCall
	private readonly stage: stageCalls.AssetsUpdateBalanceCall
	private readonly test: testCalls.AssetsUpdateBalanceCall
	private readonly dev: devCalls.AssetsUpdateBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsUpdateBalanceCall(ctx, call)
		this.stage = new stageCalls.AssetsUpdateBalanceCall(ctx, call)
		this.test = new testCalls.AssetsUpdateBalanceCall(ctx, call)
		this.dev = new devCalls.AssetsUpdateBalanceCall(ctx, call)
	}

	get isV50(): productionCalls.AssetsUpdateBalanceCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.AssetsUpdateBalanceCall['asV50'] {
		return this.production.asV50
	}
}

export class AssetsUpdateInfoCall {
	private readonly production: productionCalls.AssetsUpdateInfoCall
	private readonly stage: stageCalls.AssetsUpdateInfoCall
	private readonly test: testCalls.AssetsUpdateInfoCall
	private readonly dev: devCalls.AssetsUpdateInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsUpdateInfoCall(ctx, call)
		this.stage = new stageCalls.AssetsUpdateInfoCall(ctx, call)
		this.test = new testCalls.AssetsUpdateInfoCall(ctx, call)
		this.dev = new devCalls.AssetsUpdateInfoCall(ctx, call)
	}

	get isV53(): productionCalls.AssetsUpdateInfoCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.AssetsUpdateInfoCall['asV53'] {
		return this.production.asV53
	}
}

export class AuthorshipSetUnclesCall {
	private readonly production: productionCalls.AuthorshipSetUnclesCall
	private readonly stage: stageCalls.AuthorshipSetUnclesCall
	private readonly test: testCalls.AuthorshipSetUnclesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AuthorshipSetUnclesCall(ctx, call)
		this.stage = new stageCalls.AuthorshipSetUnclesCall(ctx, call)
		this.test = new testCalls.AuthorshipSetUnclesCall(ctx, call)
	}

	get isV1(): productionCalls.AuthorshipSetUnclesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AuthorshipSetUnclesCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AuthorshipSetUnclesCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AuthorshipSetUnclesCall['asV42'] {
		return this.production.asV42
	}
}

export class BabePlanConfigChangeCall {
	private readonly production: productionCalls.BabePlanConfigChangeCall
	private readonly stage: stageCalls.BabePlanConfigChangeCall
	private readonly test: testCalls.BabePlanConfigChangeCall
	private readonly dev: devCalls.BabePlanConfigChangeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabePlanConfigChangeCall(ctx, call)
		this.stage = new stageCalls.BabePlanConfigChangeCall(ctx, call)
		this.test = new testCalls.BabePlanConfigChangeCall(ctx, call)
		this.dev = new devCalls.BabePlanConfigChangeCall(ctx, call)
	}

	get isV42(): productionCalls.BabePlanConfigChangeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabePlanConfigChangeCall['asV42'] {
		return this.production.asV42
	}
}

export class BabeReportEquivocationCall {
	private readonly production: productionCalls.BabeReportEquivocationCall
	private readonly stage: stageCalls.BabeReportEquivocationCall
	private readonly test: testCalls.BabeReportEquivocationCall
	private readonly dev: devCalls.BabeReportEquivocationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabeReportEquivocationCall(ctx, call)
		this.stage = new stageCalls.BabeReportEquivocationCall(ctx, call)
		this.test = new testCalls.BabeReportEquivocationCall(ctx, call)
		this.dev = new devCalls.BabeReportEquivocationCall(ctx, call)
	}

	get isV1(): productionCalls.BabeReportEquivocationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BabeReportEquivocationCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.BabeReportEquivocationCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabeReportEquivocationCall['asV42'] {
		return this.production.asV42
	}
}

export class BabeReportEquivocationUnsignedCall {
	private readonly production: productionCalls.BabeReportEquivocationUnsignedCall
	private readonly stage: stageCalls.BabeReportEquivocationUnsignedCall
	private readonly test: testCalls.BabeReportEquivocationUnsignedCall
	private readonly dev: devCalls.BabeReportEquivocationUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabeReportEquivocationUnsignedCall(ctx, call)
		this.stage = new stageCalls.BabeReportEquivocationUnsignedCall(ctx, call)
		this.test = new testCalls.BabeReportEquivocationUnsignedCall(ctx, call)
		this.dev = new devCalls.BabeReportEquivocationUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.BabeReportEquivocationUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BabeReportEquivocationUnsignedCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.BabeReportEquivocationUnsignedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabeReportEquivocationUnsignedCall['asV42'] {
		return this.production.asV42
	}
}

export class BagsListPutInFrontOfCall {
	private readonly production: productionCalls.BagsListPutInFrontOfCall
	private readonly stage: stageCalls.BagsListPutInFrontOfCall
	private readonly test: testCalls.BagsListPutInFrontOfCall
	private readonly dev: devCalls.BagsListPutInFrontOfCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BagsListPutInFrontOfCall(ctx, call)
		this.stage = new stageCalls.BagsListPutInFrontOfCall(ctx, call)
		this.test = new testCalls.BagsListPutInFrontOfCall(ctx, call)
		this.dev = new devCalls.BagsListPutInFrontOfCall(ctx, call)
	}

	get isV42(): productionCalls.BagsListPutInFrontOfCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BagsListPutInFrontOfCall['asV42'] {
		return this.production.asV42
	}
}

export class BagsListRebagCall {
	private readonly production: productionCalls.BagsListRebagCall
	private readonly stage: stageCalls.BagsListRebagCall
	private readonly test: testCalls.BagsListRebagCall
	private readonly dev: devCalls.BagsListRebagCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BagsListRebagCall(ctx, call)
		this.stage = new stageCalls.BagsListRebagCall(ctx, call)
		this.test = new testCalls.BagsListRebagCall(ctx, call)
		this.dev = new devCalls.BagsListRebagCall(ctx, call)
	}

	get isV42(): productionCalls.BagsListRebagCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BagsListRebagCall['asV42'] {
		return this.production.asV42
	}
}

export class BalancesForceTransferCall {
	private readonly production: productionCalls.BalancesForceTransferCall
	private readonly stage: stageCalls.BalancesForceTransferCall
	private readonly test: testCalls.BalancesForceTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesForceTransferCall(ctx, call)
		this.stage = new stageCalls.BalancesForceTransferCall(ctx, call)
		this.test = new testCalls.BalancesForceTransferCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesForceTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesForceTransferCall['asV1'] {
		return this.production.asV1
	}
}

export class BalancesForceUnreserveCall {
	private readonly production: productionCalls.BalancesForceUnreserveCall
	private readonly stage: stageCalls.BalancesForceUnreserveCall
	private readonly test: testCalls.BalancesForceUnreserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesForceUnreserveCall(ctx, call)
		this.stage = new stageCalls.BalancesForceUnreserveCall(ctx, call)
		this.test = new testCalls.BalancesForceUnreserveCall(ctx, call)
	}

	get isV42(): productionCalls.BalancesForceUnreserveCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BalancesForceUnreserveCall['asV42'] {
		return this.production.asV42
	}
}

export class BalancesSetBalanceCall {
	private readonly production: productionCalls.BalancesSetBalanceCall
	private readonly stage: stageCalls.BalancesSetBalanceCall
	private readonly test: testCalls.BalancesSetBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesSetBalanceCall(ctx, call)
		this.stage = new stageCalls.BalancesSetBalanceCall(ctx, call)
		this.test = new testCalls.BalancesSetBalanceCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesSetBalanceCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesSetBalanceCall['asV1'] {
		return this.production.asV1
	}
}

export class BalancesTransferCall {
	private readonly production: productionCalls.BalancesTransferCall
	private readonly stage: stageCalls.BalancesTransferCall
	private readonly test: testCalls.BalancesTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferCall(ctx, call)
		this.test = new testCalls.BalancesTransferCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesTransferCall['asV1'] {
		return this.production.asV1
	}
}

export class BalancesTransferAllCall {
	private readonly production: productionCalls.BalancesTransferAllCall
	private readonly stage: stageCalls.BalancesTransferAllCall
	private readonly test: testCalls.BalancesTransferAllCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferAllCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferAllCall(ctx, call)
		this.test = new testCalls.BalancesTransferAllCall(ctx, call)
	}

	get isV42(): productionCalls.BalancesTransferAllCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BalancesTransferAllCall['asV42'] {
		return this.production.asV42
	}
}

export class BalancesTransferKeepAliveCall {
	private readonly production: productionCalls.BalancesTransferKeepAliveCall
	private readonly stage: stageCalls.BalancesTransferKeepAliveCall
	private readonly test: testCalls.BalancesTransferKeepAliveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferKeepAliveCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferKeepAliveCall(ctx, call)
		this.test = new testCalls.BalancesTransferKeepAliveCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesTransferKeepAliveCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesTransferKeepAliveCall['asV1'] {
		return this.production.asV1
	}
}

export class BandAddRelayersCall {
	private readonly production: productionCalls.BandAddRelayersCall
	private readonly stage: stageCalls.BandAddRelayersCall
	private readonly test: testCalls.BandAddRelayersCall
	private readonly dev: devCalls.BandAddRelayersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandAddRelayersCall(ctx, call)
		this.stage = new stageCalls.BandAddRelayersCall(ctx, call)
		this.test = new testCalls.BandAddRelayersCall(ctx, call)
		this.dev = new devCalls.BandAddRelayersCall(ctx, call)
	}

	get isV45(): productionCalls.BandAddRelayersCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandAddRelayersCall['asV45'] {
		return this.production.asV45
	}
}

export class BandForceRelayCall {
	private readonly production: productionCalls.BandForceRelayCall
	private readonly stage: stageCalls.BandForceRelayCall
	private readonly test: testCalls.BandForceRelayCall
	private readonly dev: devCalls.BandForceRelayCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandForceRelayCall(ctx, call)
		this.stage = new stageCalls.BandForceRelayCall(ctx, call)
		this.test = new testCalls.BandForceRelayCall(ctx, call)
		this.dev = new devCalls.BandForceRelayCall(ctx, call)
	}

	get isV45(): productionCalls.BandForceRelayCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandForceRelayCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandForceRelayCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandForceRelayCall['asV44'] {
		return this.stage.asV44
	}
}

export class BandRelayCall {
	private readonly production: productionCalls.BandRelayCall
	private readonly stage: stageCalls.BandRelayCall
	private readonly test: testCalls.BandRelayCall
	private readonly dev: devCalls.BandRelayCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandRelayCall(ctx, call)
		this.stage = new stageCalls.BandRelayCall(ctx, call)
		this.test = new testCalls.BandRelayCall(ctx, call)
		this.dev = new devCalls.BandRelayCall(ctx, call)
	}

	get isV45(): productionCalls.BandRelayCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandRelayCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandRelayCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandRelayCall['asV44'] {
		return this.stage.asV44
	}
}

export class BandRemoveRelayersCall {
	private readonly production: productionCalls.BandRemoveRelayersCall
	private readonly stage: stageCalls.BandRemoveRelayersCall
	private readonly test: testCalls.BandRemoveRelayersCall
	private readonly dev: devCalls.BandRemoveRelayersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandRemoveRelayersCall(ctx, call)
		this.stage = new stageCalls.BandRemoveRelayersCall(ctx, call)
		this.test = new testCalls.BandRemoveRelayersCall(ctx, call)
		this.dev = new devCalls.BandRemoveRelayersCall(ctx, call)
	}

	get isV45(): productionCalls.BandRemoveRelayersCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandRemoveRelayersCall['asV45'] {
		return this.production.asV45
	}
}

export class BandSetDynamicFeeParametersCall {
	private readonly production: productionCalls.BandSetDynamicFeeParametersCall
	private readonly stage: stageCalls.BandSetDynamicFeeParametersCall
	private readonly test: testCalls.BandSetDynamicFeeParametersCall
	private readonly dev: devCalls.BandSetDynamicFeeParametersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandSetDynamicFeeParametersCall(ctx, call)
		this.stage = new stageCalls.BandSetDynamicFeeParametersCall(ctx, call)
		this.test = new testCalls.BandSetDynamicFeeParametersCall(ctx, call)
		this.dev = new devCalls.BandSetDynamicFeeParametersCall(ctx, call)
	}

	get isV59(): productionCalls.BandSetDynamicFeeParametersCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.BandSetDynamicFeeParametersCall['asV59'] {
		return this.production.asV59
	}
}

export class BridgeDataSignerAddPeerCall {
	private readonly production: productionCalls.BridgeDataSignerAddPeerCall
	private readonly stage: stageCalls.BridgeDataSignerAddPeerCall
	private readonly test: testCalls.BridgeDataSignerAddPeerCall
	private readonly dev: devCalls.BridgeDataSignerAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerAddPeerCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerAddPeerCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerAddPeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerAddPeerCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerAddPeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerAddPeerCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerApproveCall {
	private readonly production: productionCalls.BridgeDataSignerApproveCall
	private readonly stage: stageCalls.BridgeDataSignerApproveCall
	private readonly test: testCalls.BridgeDataSignerApproveCall
	private readonly dev: devCalls.BridgeDataSignerApproveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerApproveCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerApproveCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerApproveCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerApproveCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerApproveCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerApproveCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerFinishAddPeerCall {
	private readonly production: productionCalls.BridgeDataSignerFinishAddPeerCall
	private readonly stage: stageCalls.BridgeDataSignerFinishAddPeerCall
	private readonly test: testCalls.BridgeDataSignerFinishAddPeerCall
	private readonly dev: devCalls.BridgeDataSignerFinishAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerFinishAddPeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerFinishAddPeerCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerFinishRemovePeerCall {
	private readonly production: productionCalls.BridgeDataSignerFinishRemovePeerCall
	private readonly stage: stageCalls.BridgeDataSignerFinishRemovePeerCall
	private readonly test: testCalls.BridgeDataSignerFinishRemovePeerCall
	private readonly dev: devCalls.BridgeDataSignerFinishRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerFinishRemovePeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerFinishRemovePeerCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerRegisterNetworkCall {
	private readonly production: productionCalls.BridgeDataSignerRegisterNetworkCall
	private readonly stage: stageCalls.BridgeDataSignerRegisterNetworkCall
	private readonly test: testCalls.BridgeDataSignerRegisterNetworkCall
	private readonly dev: devCalls.BridgeDataSignerRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerRegisterNetworkCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerRegisterNetworkCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerRemovePeerCall {
	private readonly production: productionCalls.BridgeDataSignerRemovePeerCall
	private readonly stage: stageCalls.BridgeDataSignerRemovePeerCall
	private readonly test: testCalls.BridgeDataSignerRemovePeerCall
	private readonly dev: devCalls.BridgeDataSignerRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeDataSignerRemovePeerCall(ctx, call)
		this.stage = new stageCalls.BridgeDataSignerRemovePeerCall(ctx, call)
		this.test = new testCalls.BridgeDataSignerRemovePeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerRemovePeerCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeDataSignerRemovePeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeDataSignerRemovePeerCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeMultisigAddSignatoryCall {
	private readonly production: productionCalls.BridgeMultisigAddSignatoryCall
	private readonly stage: stageCalls.BridgeMultisigAddSignatoryCall
	private readonly test: testCalls.BridgeMultisigAddSignatoryCall
	private readonly dev: devCalls.BridgeMultisigAddSignatoryCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAddSignatoryCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAddSignatoryCall(ctx, call)
		this.test = new testCalls.BridgeMultisigAddSignatoryCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigAddSignatoryCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAddSignatoryCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAddSignatoryCall['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigApproveAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigApproveAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigApproveAsMultiCall
	private readonly test: testCalls.BridgeMultisigApproveAsMultiCall
	private readonly dev: devCalls.BridgeMultisigApproveAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
		this.test = new testCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigApproveAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigApproveAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.BridgeMultisigApproveAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigApproveAsMultiCall['asV53'] {
		return this.production.asV53
	}
}

export class BridgeMultisigAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigAsMultiCall
	private readonly test: testCalls.BridgeMultisigAsMultiCall
	private readonly dev: devCalls.BridgeMultisigAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAsMultiCall(ctx, call)
		this.test = new testCalls.BridgeMultisigAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.BridgeMultisigAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigAsMultiCall['asV53'] {
		return this.production.asV53
	}
}

export class BridgeMultisigAsMultiThreshold1Call {
	private readonly production: productionCalls.BridgeMultisigAsMultiThreshold1Call
	private readonly stage: stageCalls.BridgeMultisigAsMultiThreshold1Call
	private readonly test: testCalls.BridgeMultisigAsMultiThreshold1Call
	private readonly dev: devCalls.BridgeMultisigAsMultiThreshold1Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
		this.test = new testCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
		this.dev = new devCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.BridgeMultisigAsMultiThreshold1Call['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.BridgeMultisigAsMultiThreshold1Call['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.BridgeMultisigAsMultiThreshold1Call['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.BridgeMultisigAsMultiThreshold1Call['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.BridgeMultisigAsMultiThreshold1Call['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.BridgeMultisigAsMultiThreshold1Call['asV64'] {
		return this.dev.asV64
	}
}

export class BridgeMultisigCancelAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigCancelAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigCancelAsMultiCall
	private readonly test: testCalls.BridgeMultisigCancelAsMultiCall
	private readonly dev: devCalls.BridgeMultisigCancelAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
		this.test = new testCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigCancelAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigCancelAsMultiCall['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigRegisterMultisigCall {
	private readonly production: productionCalls.BridgeMultisigRegisterMultisigCall
	private readonly stage: stageCalls.BridgeMultisigRegisterMultisigCall
	private readonly test: testCalls.BridgeMultisigRegisterMultisigCall
	private readonly dev: devCalls.BridgeMultisigRegisterMultisigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
		this.test = new testCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigRegisterMultisigCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigRegisterMultisigCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.BridgeMultisigRegisterMultisigCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.BridgeMultisigRegisterMultisigCall['asV3'] {
		return this.production.asV3
	}
}

export class BridgeMultisigRemoveSignatoryCall {
	private readonly production: productionCalls.BridgeMultisigRemoveSignatoryCall
	private readonly stage: stageCalls.BridgeMultisigRemoveSignatoryCall
	private readonly test: testCalls.BridgeMultisigRemoveSignatoryCall
	private readonly dev: devCalls.BridgeMultisigRemoveSignatoryCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
		this.test = new testCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigRemoveSignatoryCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigRemoveSignatoryCall['asV1'] {
		return this.production.asV1
	}
}

export class BridgeProxyAddLimitedAssetCall {
	private readonly production: productionCalls.BridgeProxyAddLimitedAssetCall
	private readonly stage: stageCalls.BridgeProxyAddLimitedAssetCall
	private readonly test: testCalls.BridgeProxyAddLimitedAssetCall
	private readonly dev: devCalls.BridgeProxyAddLimitedAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeProxyAddLimitedAssetCall(ctx, call)
		this.stage = new stageCalls.BridgeProxyAddLimitedAssetCall(ctx, call)
		this.test = new testCalls.BridgeProxyAddLimitedAssetCall(ctx, call)
		this.dev = new devCalls.BridgeProxyAddLimitedAssetCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeProxyAddLimitedAssetCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeProxyAddLimitedAssetCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyBurnCall {
	private readonly production: productionCalls.BridgeProxyBurnCall
	private readonly stage: stageCalls.BridgeProxyBurnCall
	private readonly test: testCalls.BridgeProxyBurnCall
	private readonly dev: devCalls.BridgeProxyBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeProxyBurnCall(ctx, call)
		this.stage = new stageCalls.BridgeProxyBurnCall(ctx, call)
		this.test = new testCalls.BridgeProxyBurnCall(ctx, call)
		this.dev = new devCalls.BridgeProxyBurnCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeProxyBurnCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeProxyBurnCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyRemoveLimitedAssetCall {
	private readonly production: productionCalls.BridgeProxyRemoveLimitedAssetCall
	private readonly stage: stageCalls.BridgeProxyRemoveLimitedAssetCall
	private readonly test: testCalls.BridgeProxyRemoveLimitedAssetCall
	private readonly dev: devCalls.BridgeProxyRemoveLimitedAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeProxyRemoveLimitedAssetCall(ctx, call)
		this.stage = new stageCalls.BridgeProxyRemoveLimitedAssetCall(ctx, call)
		this.test = new testCalls.BridgeProxyRemoveLimitedAssetCall(ctx, call)
		this.dev = new devCalls.BridgeProxyRemoveLimitedAssetCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeProxyRemoveLimitedAssetCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeProxyRemoveLimitedAssetCall['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyUpdateTransferLimitCall {
	private readonly production: productionCalls.BridgeProxyUpdateTransferLimitCall
	private readonly stage: stageCalls.BridgeProxyUpdateTransferLimitCall
	private readonly test: testCalls.BridgeProxyUpdateTransferLimitCall
	private readonly dev: devCalls.BridgeProxyUpdateTransferLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeProxyUpdateTransferLimitCall(ctx, call)
		this.stage = new stageCalls.BridgeProxyUpdateTransferLimitCall(ctx, call)
		this.test = new testCalls.BridgeProxyUpdateTransferLimitCall(ctx, call)
		this.dev = new devCalls.BridgeProxyUpdateTransferLimitCall(ctx, call)
	}

	get isV64(): productionCalls.BridgeProxyUpdateTransferLimitCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.BridgeProxyUpdateTransferLimitCall['asV64'] {
		return this.production.asV64
	}
}

export class CeresGovernancePlatformCreatePollCall {
	private readonly production: productionCalls.CeresGovernancePlatformCreatePollCall
	private readonly stage: stageCalls.CeresGovernancePlatformCreatePollCall
	private readonly test: testCalls.CeresGovernancePlatformCreatePollCall
	private readonly dev: devCalls.CeresGovernancePlatformCreatePollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
		this.test = new testCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformCreatePollCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformCreatePollCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresGovernancePlatformCreatePollCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresGovernancePlatformCreatePollCall['asV37'] {
		return this.production.asV37
	}
}

export class CeresGovernancePlatformVoteCall {
	private readonly production: productionCalls.CeresGovernancePlatformVoteCall
	private readonly stage: stageCalls.CeresGovernancePlatformVoteCall
	private readonly test: testCalls.CeresGovernancePlatformVoteCall
	private readonly dev: devCalls.CeresGovernancePlatformVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformVoteCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformVoteCall(ctx, call)
		this.test = new testCalls.CeresGovernancePlatformVoteCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformVoteCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformVoteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformVoteCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresGovernancePlatformWithdrawCall {
	private readonly production: productionCalls.CeresGovernancePlatformWithdrawCall
	private readonly stage: stageCalls.CeresGovernancePlatformWithdrawCall
	private readonly test: testCalls.CeresGovernancePlatformWithdrawCall
	private readonly dev: devCalls.CeresGovernancePlatformWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
		this.test = new testCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformWithdrawCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformWithdrawCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadAddWhitelistedContributorCall {
	private readonly production: productionCalls.CeresLaunchpadAddWhitelistedContributorCall
	private readonly stage: stageCalls.CeresLaunchpadAddWhitelistedContributorCall
	private readonly test: testCalls.CeresLaunchpadAddWhitelistedContributorCall
	private readonly dev: devCalls.CeresLaunchpadAddWhitelistedContributorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadAddWhitelistedContributorCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadAddWhitelistedContributorCall['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadAddWhitelistedIloOrganizerCall {
	private readonly production: productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall
	private readonly stage: stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall
	private readonly test: testCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall
	private readonly dev: devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadChangeCeresBurnFeeCall {
	private readonly production: productionCalls.CeresLaunchpadChangeCeresBurnFeeCall
	private readonly stage: stageCalls.CeresLaunchpadChangeCeresBurnFeeCall
	private readonly test: testCalls.CeresLaunchpadChangeCeresBurnFeeCall
	private readonly dev: devCalls.CeresLaunchpadChangeCeresBurnFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadChangeCeresBurnFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadChangeCeresBurnFeeCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadChangeCeresContributionFeeCall {
	private readonly production: productionCalls.CeresLaunchpadChangeCeresContributionFeeCall
	private readonly stage: stageCalls.CeresLaunchpadChangeCeresContributionFeeCall
	private readonly test: testCalls.CeresLaunchpadChangeCeresContributionFeeCall
	private readonly dev: devCalls.CeresLaunchpadChangeCeresContributionFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadChangeCeresContributionFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadChangeCeresContributionFeeCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadChangeFeePercentForRaisedFundsCall {
	private readonly production: productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall
	private readonly stage: stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall
	private readonly test: testCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall
	private readonly dev: devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
	}

	get isV47(): productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['asV47'] {
		return this.production.asV47
	}
}

export class CeresLaunchpadClaimCall {
	private readonly production: productionCalls.CeresLaunchpadClaimCall
	private readonly stage: stageCalls.CeresLaunchpadClaimCall
	private readonly test: testCalls.CeresLaunchpadClaimCall
	private readonly dev: devCalls.CeresLaunchpadClaimCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadClaimCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadClaimCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadClaimCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadClaimLpTokensCall {
	private readonly production: productionCalls.CeresLaunchpadClaimLpTokensCall
	private readonly stage: stageCalls.CeresLaunchpadClaimLpTokensCall
	private readonly test: testCalls.CeresLaunchpadClaimLpTokensCall
	private readonly dev: devCalls.CeresLaunchpadClaimLpTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimLpTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimLpTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadClaimLpTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadClaimLpTokensCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadClaimPswapRewardsCall {
	private readonly production: productionCalls.CeresLaunchpadClaimPswapRewardsCall
	private readonly stage: stageCalls.CeresLaunchpadClaimPswapRewardsCall
	private readonly test: testCalls.CeresLaunchpadClaimPswapRewardsCall
	private readonly dev: devCalls.CeresLaunchpadClaimPswapRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimPswapRewardsCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimPswapRewardsCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadContributeCall {
	private readonly production: productionCalls.CeresLaunchpadContributeCall
	private readonly stage: stageCalls.CeresLaunchpadContributeCall
	private readonly test: testCalls.CeresLaunchpadContributeCall
	private readonly dev: devCalls.CeresLaunchpadContributeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadContributeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadContributeCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadContributeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadContributeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadContributeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadContributeCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadContributeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadContributeCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadCreateIloCall {
	private readonly production: productionCalls.CeresLaunchpadCreateIloCall
	private readonly stage: stageCalls.CeresLaunchpadCreateIloCall
	private readonly test: testCalls.CeresLaunchpadCreateIloCall
	private readonly dev: devCalls.CeresLaunchpadCreateIloCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadCreateIloCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadCreateIloCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadCreateIloCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadCreateIloCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadCreateIloCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadCreateIloCall['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionCalls.CeresLaunchpadCreateIloCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadCreateIloCall['asV33'] {
		return this.production.asV33
	}
	get isV37(): productionCalls.CeresLaunchpadCreateIloCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresLaunchpadCreateIloCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresLaunchpadCreateIloCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadCreateIloCall['asV42'] {
		return this.production.asV42
	}
	get isV47(): productionCalls.CeresLaunchpadCreateIloCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CeresLaunchpadCreateIloCall['asV47'] {
		return this.production.asV47
	}
}

export class CeresLaunchpadEmergencyWithdrawCall {
	private readonly production: productionCalls.CeresLaunchpadEmergencyWithdrawCall
	private readonly stage: stageCalls.CeresLaunchpadEmergencyWithdrawCall
	private readonly test: testCalls.CeresLaunchpadEmergencyWithdrawCall
	private readonly dev: devCalls.CeresLaunchpadEmergencyWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadFinishIloCall {
	private readonly production: productionCalls.CeresLaunchpadFinishIloCall
	private readonly stage: stageCalls.CeresLaunchpadFinishIloCall
	private readonly test: testCalls.CeresLaunchpadFinishIloCall
	private readonly dev: devCalls.CeresLaunchpadFinishIloCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadFinishIloCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadFinishIloCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadFinishIloCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadFinishIloCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadFinishIloCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadFinishIloCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadFinishIloCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadFinishIloCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadRemoveWhitelistedContributorCall {
	private readonly production: productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall
	private readonly stage: stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall
	private readonly test: testCalls.CeresLaunchpadRemoveWhitelistedContributorCall
	private readonly dev: devCalls.CeresLaunchpadRemoveWhitelistedContributorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadRemoveWhitelistedIloOrganizerCall {
	private readonly production: productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall
	private readonly stage: stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall
	private readonly test: testCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall
	private readonly dev: devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
		this.test = new testCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['asV33'] {
		return this.production.asV33
	}
}

export class CeresLiquidityLockerChangeCeresFeeCall {
	private readonly production: productionCalls.CeresLiquidityLockerChangeCeresFeeCall
	private readonly stage: stageCalls.CeresLiquidityLockerChangeCeresFeeCall
	private readonly test: testCalls.CeresLiquidityLockerChangeCeresFeeCall
	private readonly dev: devCalls.CeresLiquidityLockerChangeCeresFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
		this.test = new testCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
		this.dev = new devCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
	}

	get isV22(): productionCalls.CeresLiquidityLockerChangeCeresFeeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CeresLiquidityLockerChangeCeresFeeCall['asV22'] {
		return this.production.asV22
	}
}

export class CeresLiquidityLockerLockLiquidityCall {
	private readonly production: productionCalls.CeresLiquidityLockerLockLiquidityCall
	private readonly stage: stageCalls.CeresLiquidityLockerLockLiquidityCall
	private readonly test: testCalls.CeresLiquidityLockerLockLiquidityCall
	private readonly dev: devCalls.CeresLiquidityLockerLockLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
		this.stage = new stageCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
		this.test = new testCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
		this.dev = new devCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
	}

	get isV22(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV22'] {
		return this.production.asV22
	}
	get isV37(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresStakingChangeRewardsRemainingCall {
	private readonly production: productionCalls.CeresStakingChangeRewardsRemainingCall
	private readonly stage: stageCalls.CeresStakingChangeRewardsRemainingCall
	private readonly test: testCalls.CeresStakingChangeRewardsRemainingCall
	private readonly dev: devCalls.CeresStakingChangeRewardsRemainingCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
		this.stage = new stageCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
		this.test = new testCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
		this.dev = new devCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
	}

	get isV26(): productionCalls.CeresStakingChangeRewardsRemainingCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresStakingChangeRewardsRemainingCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresStakingDepositCall {
	private readonly production: productionCalls.CeresStakingDepositCall
	private readonly stage: stageCalls.CeresStakingDepositCall
	private readonly test: testCalls.CeresStakingDepositCall
	private readonly dev: devCalls.CeresStakingDepositCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingDepositCall(ctx, call)
		this.stage = new stageCalls.CeresStakingDepositCall(ctx, call)
		this.test = new testCalls.CeresStakingDepositCall(ctx, call)
		this.dev = new devCalls.CeresStakingDepositCall(ctx, call)
	}

	get isV19(): productionCalls.CeresStakingDepositCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CeresStakingDepositCall['asV19'] {
		return this.production.asV19
	}
}

export class CeresStakingWithdrawCall {
	private readonly production: productionCalls.CeresStakingWithdrawCall
	private readonly stage: stageCalls.CeresStakingWithdrawCall
	private readonly test: testCalls.CeresStakingWithdrawCall
	private readonly dev: devCalls.CeresStakingWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresStakingWithdrawCall(ctx, call)
		this.test = new testCalls.CeresStakingWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresStakingWithdrawCall(ctx, call)
	}

	get isV19(): productionCalls.CeresStakingWithdrawCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CeresStakingWithdrawCall['asV19'] {
		return this.production.asV19
	}
}

export class CeresTokenLockerChangeFeeCall {
	private readonly production: productionCalls.CeresTokenLockerChangeFeeCall
	private readonly stage: stageCalls.CeresTokenLockerChangeFeeCall
	private readonly test: testCalls.CeresTokenLockerChangeFeeCall
	private readonly dev: devCalls.CeresTokenLockerChangeFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerChangeFeeCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerChangeFeeCall(ctx, call)
		this.test = new testCalls.CeresTokenLockerChangeFeeCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerChangeFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerChangeFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerChangeFeeCall['asV26'] {
		return this.production.asV26
	}
}

export class CeresTokenLockerLockTokensCall {
	private readonly production: productionCalls.CeresTokenLockerLockTokensCall
	private readonly stage: stageCalls.CeresTokenLockerLockTokensCall
	private readonly test: testCalls.CeresTokenLockerLockTokensCall
	private readonly dev: devCalls.CeresTokenLockerLockTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerLockTokensCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerLockTokensCall(ctx, call)
		this.test = new testCalls.CeresTokenLockerLockTokensCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerLockTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerLockTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerLockTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresTokenLockerLockTokensCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresTokenLockerLockTokensCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresTokenLockerLockTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresTokenLockerLockTokensCall['asV42'] {
		return this.production.asV42
	}
}

export class CeresTokenLockerWithdrawTokensCall {
	private readonly production: productionCalls.CeresTokenLockerWithdrawTokensCall
	private readonly stage: stageCalls.CeresTokenLockerWithdrawTokensCall
	private readonly test: testCalls.CeresTokenLockerWithdrawTokensCall
	private readonly dev: devCalls.CeresTokenLockerWithdrawTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
		this.test = new testCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV42'] {
		return this.production.asV42
	}
}

export class CouncilCloseCall {
	private readonly production: productionCalls.CouncilCloseCall
	private readonly stage: stageCalls.CouncilCloseCall
	private readonly test: testCalls.CouncilCloseCall
	private readonly dev: devCalls.CouncilCloseCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilCloseCall(ctx, call)
		this.stage = new stageCalls.CouncilCloseCall(ctx, call)
		this.test = new testCalls.CouncilCloseCall(ctx, call)
		this.dev = new devCalls.CouncilCloseCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilCloseCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilCloseCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.CouncilCloseCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilCloseCall['asV53'] {
		return this.production.asV53
	}
}

export class CouncilCloseOldWeightCall {
	private readonly production: productionCalls.CouncilCloseOldWeightCall
	private readonly stage: stageCalls.CouncilCloseOldWeightCall
	private readonly test: testCalls.CouncilCloseOldWeightCall
	private readonly dev: devCalls.CouncilCloseOldWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilCloseOldWeightCall(ctx, call)
		this.stage = new stageCalls.CouncilCloseOldWeightCall(ctx, call)
		this.test = new testCalls.CouncilCloseOldWeightCall(ctx, call)
		this.dev = new devCalls.CouncilCloseOldWeightCall(ctx, call)
	}

	get isV53(): productionCalls.CouncilCloseOldWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilCloseOldWeightCall['asV53'] {
		return this.production.asV53
	}
}

export class CouncilDisapproveProposalCall {
	private readonly production: productionCalls.CouncilDisapproveProposalCall
	private readonly stage: stageCalls.CouncilDisapproveProposalCall
	private readonly test: testCalls.CouncilDisapproveProposalCall
	private readonly dev: devCalls.CouncilDisapproveProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilDisapproveProposalCall(ctx, call)
		this.stage = new stageCalls.CouncilDisapproveProposalCall(ctx, call)
		this.test = new testCalls.CouncilDisapproveProposalCall(ctx, call)
		this.dev = new devCalls.CouncilDisapproveProposalCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilDisapproveProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilDisapproveProposalCall['asV1'] {
		return this.production.asV1
	}
}

export class CouncilExecuteCall {
	private readonly production: productionCalls.CouncilExecuteCall
	private readonly stage: stageCalls.CouncilExecuteCall
	private readonly test: testCalls.CouncilExecuteCall
	private readonly dev: devCalls.CouncilExecuteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilExecuteCall(ctx, call)
		this.stage = new stageCalls.CouncilExecuteCall(ctx, call)
		this.test = new testCalls.CouncilExecuteCall(ctx, call)
		this.dev = new devCalls.CouncilExecuteCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilExecuteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilExecuteCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.CouncilExecuteCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.CouncilExecuteCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.CouncilExecuteCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.CouncilExecuteCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.CouncilExecuteCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CouncilExecuteCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.CouncilExecuteCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CouncilExecuteCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.CouncilExecuteCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.CouncilExecuteCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.CouncilExecuteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CouncilExecuteCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.CouncilExecuteCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.CouncilExecuteCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.CouncilExecuteCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CouncilExecuteCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.CouncilExecuteCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.CouncilExecuteCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.CouncilExecuteCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CouncilExecuteCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.CouncilExecuteCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.CouncilExecuteCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.CouncilExecuteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CouncilExecuteCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.CouncilExecuteCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.CouncilExecuteCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.CouncilExecuteCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.CouncilExecuteCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.CouncilExecuteCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.CouncilExecuteCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.CouncilExecuteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CouncilExecuteCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.CouncilExecuteCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.CouncilExecuteCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.CouncilExecuteCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilExecuteCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.CouncilExecuteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.CouncilExecuteCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.CouncilExecuteCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.CouncilExecuteCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.CouncilExecuteCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.CouncilExecuteCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.CouncilExecuteCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.CouncilExecuteCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.CouncilExecuteCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.CouncilExecuteCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.CouncilExecuteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilExecuteCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.CouncilExecuteCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.CouncilExecuteCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.CouncilExecuteCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CouncilExecuteCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.CouncilExecuteCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.CouncilExecuteCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.CouncilExecuteCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CouncilExecuteCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.CouncilExecuteCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.CouncilExecuteCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.CouncilExecuteCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.CouncilExecuteCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.CouncilExecuteCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.CouncilExecuteCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.CouncilExecuteCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.CouncilExecuteCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.CouncilExecuteCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CouncilExecuteCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.CouncilExecuteCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.CouncilExecuteCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.CouncilExecuteCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilExecuteCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.CouncilExecuteCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.CouncilExecuteCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.CouncilExecuteCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.CouncilExecuteCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.CouncilExecuteCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.CouncilExecuteCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.CouncilExecuteCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.CouncilExecuteCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.CouncilExecuteCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.CouncilExecuteCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.CouncilExecuteCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.CouncilExecuteCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.CouncilExecuteCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.CouncilExecuteCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.CouncilExecuteCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.CouncilExecuteCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.CouncilExecuteCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.CouncilExecuteCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.CouncilExecuteCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.CouncilExecuteCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.CouncilExecuteCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.CouncilExecuteCall['asV64'] {
		return this.dev.asV64
	}
}

export class CouncilProposeCall {
	private readonly production: productionCalls.CouncilProposeCall
	private readonly stage: stageCalls.CouncilProposeCall
	private readonly test: testCalls.CouncilProposeCall
	private readonly dev: devCalls.CouncilProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilProposeCall(ctx, call)
		this.stage = new stageCalls.CouncilProposeCall(ctx, call)
		this.test = new testCalls.CouncilProposeCall(ctx, call)
		this.dev = new devCalls.CouncilProposeCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.CouncilProposeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.CouncilProposeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.CouncilProposeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.CouncilProposeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.CouncilProposeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CouncilProposeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.CouncilProposeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CouncilProposeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.CouncilProposeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.CouncilProposeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.CouncilProposeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CouncilProposeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.CouncilProposeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.CouncilProposeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.CouncilProposeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CouncilProposeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.CouncilProposeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.CouncilProposeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.CouncilProposeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CouncilProposeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.CouncilProposeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.CouncilProposeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.CouncilProposeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CouncilProposeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.CouncilProposeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.CouncilProposeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.CouncilProposeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.CouncilProposeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.CouncilProposeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.CouncilProposeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.CouncilProposeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CouncilProposeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.CouncilProposeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.CouncilProposeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.CouncilProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.CouncilProposeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.CouncilProposeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.CouncilProposeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.CouncilProposeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.CouncilProposeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.CouncilProposeCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.CouncilProposeCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.CouncilProposeCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.CouncilProposeCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.CouncilProposeCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.CouncilProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.CouncilProposeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.CouncilProposeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.CouncilProposeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CouncilProposeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.CouncilProposeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.CouncilProposeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.CouncilProposeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CouncilProposeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.CouncilProposeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.CouncilProposeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.CouncilProposeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.CouncilProposeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.CouncilProposeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.CouncilProposeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.CouncilProposeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.CouncilProposeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.CouncilProposeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CouncilProposeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.CouncilProposeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.CouncilProposeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.CouncilProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.CouncilProposeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.CouncilProposeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.CouncilProposeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.CouncilProposeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.CouncilProposeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.CouncilProposeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.CouncilProposeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.CouncilProposeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.CouncilProposeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.CouncilProposeCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.CouncilProposeCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.CouncilProposeCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.CouncilProposeCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.CouncilProposeCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.CouncilProposeCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.CouncilProposeCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.CouncilProposeCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.CouncilProposeCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.CouncilProposeCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.CouncilProposeCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.CouncilProposeCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.CouncilProposeCall['asV64'] {
		return this.dev.asV64
	}
}

export class CouncilSetMembersCall {
	private readonly production: productionCalls.CouncilSetMembersCall
	private readonly stage: stageCalls.CouncilSetMembersCall
	private readonly test: testCalls.CouncilSetMembersCall
	private readonly dev: devCalls.CouncilSetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilSetMembersCall(ctx, call)
		this.stage = new stageCalls.CouncilSetMembersCall(ctx, call)
		this.test = new testCalls.CouncilSetMembersCall(ctx, call)
		this.dev = new devCalls.CouncilSetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilSetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilSetMembersCall['asV1'] {
		return this.production.asV1
	}
}

export class CouncilVoteCall {
	private readonly production: productionCalls.CouncilVoteCall
	private readonly stage: stageCalls.CouncilVoteCall
	private readonly test: testCalls.CouncilVoteCall
	private readonly dev: devCalls.CouncilVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilVoteCall(ctx, call)
		this.stage = new stageCalls.CouncilVoteCall(ctx, call)
		this.test = new testCalls.CouncilVoteCall(ctx, call)
		this.dev = new devCalls.CouncilVoteCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilVoteCall['asV1'] {
		return this.production.asV1
	}
}

export class CurrenciesTransferCall {
	private readonly production: productionCalls.CurrenciesTransferCall
	private readonly stage: stageCalls.CurrenciesTransferCall
	private readonly test: testCalls.CurrenciesTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesTransferCall(ctx, call)
		this.stage = new stageCalls.CurrenciesTransferCall(ctx, call)
		this.test = new testCalls.CurrenciesTransferCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.CurrenciesTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CurrenciesTransferCall['asV42'] {
		return this.production.asV42
	}
}

export class CurrenciesTransferNativeCurrencyCall {
	private readonly production: productionCalls.CurrenciesTransferNativeCurrencyCall
	private readonly stage: stageCalls.CurrenciesTransferNativeCurrencyCall
	private readonly test: testCalls.CurrenciesTransferNativeCurrencyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesTransferNativeCurrencyCall(ctx, call)
		this.stage = new stageCalls.CurrenciesTransferNativeCurrencyCall(ctx, call)
		this.test = new testCalls.CurrenciesTransferNativeCurrencyCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesTransferNativeCurrencyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesTransferNativeCurrencyCall['asV1'] {
		return this.production.asV1
	}
}

export class CurrenciesUpdateBalanceCall {
	private readonly production: productionCalls.CurrenciesUpdateBalanceCall
	private readonly stage: stageCalls.CurrenciesUpdateBalanceCall
	private readonly test: testCalls.CurrenciesUpdateBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesUpdateBalanceCall(ctx, call)
		this.stage = new stageCalls.CurrenciesUpdateBalanceCall(ctx, call)
		this.test = new testCalls.CurrenciesUpdateBalanceCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesUpdateBalanceCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesUpdateBalanceCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.CurrenciesUpdateBalanceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CurrenciesUpdateBalanceCall['asV42'] {
		return this.production.asV42
	}
}

export class DexapiSwapCall {
	private readonly production: productionCalls.DexapiSwapCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DexapiSwapCall(ctx, call)
	}

	get isV19(): productionCalls.DexapiSwapCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.DexapiSwapCall['asV19'] {
		return this.production.asV19
	}
}

export class DemeterFarmingPlatformAddPoolCall {
	private readonly production: productionCalls.DemeterFarmingPlatformAddPoolCall
	private readonly stage: stageCalls.DemeterFarmingPlatformAddPoolCall
	private readonly test: testCalls.DemeterFarmingPlatformAddPoolCall
	private readonly dev: devCalls.DemeterFarmingPlatformAddPoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformChangeInfoCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeInfoCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeInfoCall
	private readonly test: testCalls.DemeterFarmingPlatformChangeInfoCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
	}

	get isV35(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformChangePoolDepositFeeCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall
	private readonly test: testCalls.DemeterFarmingPlatformChangePoolDepositFeeCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformChangePoolMultiplierCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall
	private readonly test: testCalls.DemeterFarmingPlatformChangePoolMultiplierCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangePoolMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformChangeTokenInfoCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeTokenInfoCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeTokenInfoCall
	private readonly test: testCalls.DemeterFarmingPlatformChangeTokenInfoCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeTokenInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV42'] {
		return this.production.asV42
	}
}

export class DemeterFarmingPlatformChangeTotalTokensCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeTotalTokensCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeTotalTokensCall
	private readonly test: testCalls.DemeterFarmingPlatformChangeTotalTokensCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeTotalTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
	}

	get isV35(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformDepositCall {
	private readonly production: productionCalls.DemeterFarmingPlatformDepositCall
	private readonly stage: stageCalls.DemeterFarmingPlatformDepositCall
	private readonly test: testCalls.DemeterFarmingPlatformDepositCall
	private readonly dev: devCalls.DemeterFarmingPlatformDepositCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformDepositCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformDepositCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformDepositCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformDepositCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformDepositCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformDepositCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformDepositCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformDepositCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformDepositCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformDepositCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformGetRewardsCall {
	private readonly production: productionCalls.DemeterFarmingPlatformGetRewardsCall
	private readonly stage: stageCalls.DemeterFarmingPlatformGetRewardsCall
	private readonly test: testCalls.DemeterFarmingPlatformGetRewardsCall
	private readonly dev: devCalls.DemeterFarmingPlatformGetRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformRegisterTokenCall {
	private readonly production: productionCalls.DemeterFarmingPlatformRegisterTokenCall
	private readonly stage: stageCalls.DemeterFarmingPlatformRegisterTokenCall
	private readonly test: testCalls.DemeterFarmingPlatformRegisterTokenCall
	private readonly dev: devCalls.DemeterFarmingPlatformRegisterTokenCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['asV42'] {
		return this.production.asV42
	}
}

export class DemeterFarmingPlatformRemovePoolCall {
	private readonly production: productionCalls.DemeterFarmingPlatformRemovePoolCall
	private readonly stage: stageCalls.DemeterFarmingPlatformRemovePoolCall
	private readonly test: testCalls.DemeterFarmingPlatformRemovePoolCall
	private readonly dev: devCalls.DemeterFarmingPlatformRemovePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformWithdrawCall {
	private readonly production: productionCalls.DemeterFarmingPlatformWithdrawCall
	private readonly stage: stageCalls.DemeterFarmingPlatformWithdrawCall
	private readonly test: testCalls.DemeterFarmingPlatformWithdrawCall
	private readonly dev: devCalls.DemeterFarmingPlatformWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
		this.test = new testCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV43'] {
		return this.production.asV43
	}
}

export class DemocracyBlacklistCall {
	private readonly production: productionCalls.DemocracyBlacklistCall
	private readonly stage: stageCalls.DemocracyBlacklistCall
	private readonly test: testCalls.DemocracyBlacklistCall
	private readonly dev: devCalls.DemocracyBlacklistCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyBlacklistCall(ctx, call)
		this.stage = new stageCalls.DemocracyBlacklistCall(ctx, call)
		this.test = new testCalls.DemocracyBlacklistCall(ctx, call)
		this.dev = new devCalls.DemocracyBlacklistCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyBlacklistCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyBlacklistCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyCancelProposalCall {
	private readonly production: productionCalls.DemocracyCancelProposalCall
	private readonly stage: stageCalls.DemocracyCancelProposalCall
	private readonly test: testCalls.DemocracyCancelProposalCall
	private readonly dev: devCalls.DemocracyCancelProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelProposalCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelProposalCall(ctx, call)
		this.test = new testCalls.DemocracyCancelProposalCall(ctx, call)
		this.dev = new devCalls.DemocracyCancelProposalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelProposalCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyCancelQueuedCall {
	private readonly production: productionCalls.DemocracyCancelQueuedCall
	private readonly stage: stageCalls.DemocracyCancelQueuedCall
	private readonly test: testCalls.DemocracyCancelQueuedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelQueuedCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelQueuedCall(ctx, call)
		this.test = new testCalls.DemocracyCancelQueuedCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelQueuedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelQueuedCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyCancelReferendumCall {
	private readonly production: productionCalls.DemocracyCancelReferendumCall
	private readonly stage: stageCalls.DemocracyCancelReferendumCall
	private readonly test: testCalls.DemocracyCancelReferendumCall
	private readonly dev: devCalls.DemocracyCancelReferendumCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelReferendumCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelReferendumCall(ctx, call)
		this.test = new testCalls.DemocracyCancelReferendumCall(ctx, call)
		this.dev = new devCalls.DemocracyCancelReferendumCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelReferendumCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelReferendumCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyClearPublicProposalsCall {
	private readonly production: productionCalls.DemocracyClearPublicProposalsCall
	private readonly stage: stageCalls.DemocracyClearPublicProposalsCall
	private readonly test: testCalls.DemocracyClearPublicProposalsCall
	private readonly dev: devCalls.DemocracyClearPublicProposalsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyClearPublicProposalsCall(ctx, call)
		this.stage = new stageCalls.DemocracyClearPublicProposalsCall(ctx, call)
		this.test = new testCalls.DemocracyClearPublicProposalsCall(ctx, call)
		this.dev = new devCalls.DemocracyClearPublicProposalsCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyClearPublicProposalsCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyClearPublicProposalsCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyDelegateCall {
	private readonly production: productionCalls.DemocracyDelegateCall
	private readonly stage: stageCalls.DemocracyDelegateCall
	private readonly test: testCalls.DemocracyDelegateCall
	private readonly dev: devCalls.DemocracyDelegateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyDelegateCall(ctx, call)
		this.stage = new stageCalls.DemocracyDelegateCall(ctx, call)
		this.test = new testCalls.DemocracyDelegateCall(ctx, call)
		this.dev = new devCalls.DemocracyDelegateCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyDelegateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyDelegateCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyEmergencyCancelCall {
	private readonly production: productionCalls.DemocracyEmergencyCancelCall
	private readonly stage: stageCalls.DemocracyEmergencyCancelCall
	private readonly test: testCalls.DemocracyEmergencyCancelCall
	private readonly dev: devCalls.DemocracyEmergencyCancelCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyEmergencyCancelCall(ctx, call)
		this.stage = new stageCalls.DemocracyEmergencyCancelCall(ctx, call)
		this.test = new testCalls.DemocracyEmergencyCancelCall(ctx, call)
		this.dev = new devCalls.DemocracyEmergencyCancelCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyEmergencyCancelCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyEmergencyCancelCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyEnactProposalCall {
	private readonly production: productionCalls.DemocracyEnactProposalCall
	private readonly stage: stageCalls.DemocracyEnactProposalCall
	private readonly test: testCalls.DemocracyEnactProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyEnactProposalCall(ctx, call)
		this.stage = new stageCalls.DemocracyEnactProposalCall(ctx, call)
		this.test = new testCalls.DemocracyEnactProposalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyEnactProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyEnactProposalCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyExternalProposeCall {
	private readonly production: productionCalls.DemocracyExternalProposeCall
	private readonly stage: stageCalls.DemocracyExternalProposeCall
	private readonly test: testCalls.DemocracyExternalProposeCall
	private readonly dev: devCalls.DemocracyExternalProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeCall(ctx, call)
		this.test = new testCalls.DemocracyExternalProposeCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeCall['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyExternalProposeDefaultCall {
	private readonly production: productionCalls.DemocracyExternalProposeDefaultCall
	private readonly stage: stageCalls.DemocracyExternalProposeDefaultCall
	private readonly test: testCalls.DemocracyExternalProposeDefaultCall
	private readonly dev: devCalls.DemocracyExternalProposeDefaultCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeDefaultCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeDefaultCall(ctx, call)
		this.test = new testCalls.DemocracyExternalProposeDefaultCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeDefaultCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeDefaultCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeDefaultCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeDefaultCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeDefaultCall['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyExternalProposeMajorityCall {
	private readonly production: productionCalls.DemocracyExternalProposeMajorityCall
	private readonly stage: stageCalls.DemocracyExternalProposeMajorityCall
	private readonly test: testCalls.DemocracyExternalProposeMajorityCall
	private readonly dev: devCalls.DemocracyExternalProposeMajorityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeMajorityCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeMajorityCall(ctx, call)
		this.test = new testCalls.DemocracyExternalProposeMajorityCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeMajorityCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeMajorityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeMajorityCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeMajorityCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeMajorityCall['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyFastTrackCall {
	private readonly production: productionCalls.DemocracyFastTrackCall
	private readonly stage: stageCalls.DemocracyFastTrackCall
	private readonly test: testCalls.DemocracyFastTrackCall
	private readonly dev: devCalls.DemocracyFastTrackCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyFastTrackCall(ctx, call)
		this.stage = new stageCalls.DemocracyFastTrackCall(ctx, call)
		this.test = new testCalls.DemocracyFastTrackCall(ctx, call)
		this.dev = new devCalls.DemocracyFastTrackCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyFastTrackCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyFastTrackCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNoteImminentPreimageCall {
	private readonly production: productionCalls.DemocracyNoteImminentPreimageCall
	private readonly stage: stageCalls.DemocracyNoteImminentPreimageCall
	private readonly test: testCalls.DemocracyNoteImminentPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNoteImminentPreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyNoteImminentPreimageCall(ctx, call)
		this.test = new testCalls.DemocracyNoteImminentPreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNoteImminentPreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNoteImminentPreimageCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNoteImminentPreimageOperationalCall {
	private readonly production: productionCalls.DemocracyNoteImminentPreimageOperationalCall
	private readonly stage: stageCalls.DemocracyNoteImminentPreimageOperationalCall
	private readonly test: testCalls.DemocracyNoteImminentPreimageOperationalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNoteImminentPreimageOperationalCall(ctx, call)
		this.stage = new stageCalls.DemocracyNoteImminentPreimageOperationalCall(ctx, call)
		this.test = new testCalls.DemocracyNoteImminentPreimageOperationalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNoteImminentPreimageOperationalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNoteImminentPreimageOperationalCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNotePreimageCall {
	private readonly production: productionCalls.DemocracyNotePreimageCall
	private readonly stage: stageCalls.DemocracyNotePreimageCall
	private readonly test: testCalls.DemocracyNotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNotePreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyNotePreimageCall(ctx, call)
		this.test = new testCalls.DemocracyNotePreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNotePreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNotePreimageCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNotePreimageOperationalCall {
	private readonly production: productionCalls.DemocracyNotePreimageOperationalCall
	private readonly stage: stageCalls.DemocracyNotePreimageOperationalCall
	private readonly test: testCalls.DemocracyNotePreimageOperationalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNotePreimageOperationalCall(ctx, call)
		this.stage = new stageCalls.DemocracyNotePreimageOperationalCall(ctx, call)
		this.test = new testCalls.DemocracyNotePreimageOperationalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNotePreimageOperationalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNotePreimageOperationalCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyProposeCall {
	private readonly production: productionCalls.DemocracyProposeCall
	private readonly stage: stageCalls.DemocracyProposeCall
	private readonly test: testCalls.DemocracyProposeCall
	private readonly dev: devCalls.DemocracyProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyProposeCall(ctx, call)
		this.stage = new stageCalls.DemocracyProposeCall(ctx, call)
		this.test = new testCalls.DemocracyProposeCall(ctx, call)
		this.dev = new devCalls.DemocracyProposeCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyProposeCall['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyReapPreimageCall {
	private readonly production: productionCalls.DemocracyReapPreimageCall
	private readonly stage: stageCalls.DemocracyReapPreimageCall
	private readonly test: testCalls.DemocracyReapPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyReapPreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyReapPreimageCall(ctx, call)
		this.test = new testCalls.DemocracyReapPreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyReapPreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyReapPreimageCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyRemoveOtherVoteCall {
	private readonly production: productionCalls.DemocracyRemoveOtherVoteCall
	private readonly stage: stageCalls.DemocracyRemoveOtherVoteCall
	private readonly test: testCalls.DemocracyRemoveOtherVoteCall
	private readonly dev: devCalls.DemocracyRemoveOtherVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyRemoveOtherVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyRemoveOtherVoteCall(ctx, call)
		this.test = new testCalls.DemocracyRemoveOtherVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyRemoveOtherVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyRemoveOtherVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyRemoveOtherVoteCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyRemoveVoteCall {
	private readonly production: productionCalls.DemocracyRemoveVoteCall
	private readonly stage: stageCalls.DemocracyRemoveVoteCall
	private readonly test: testCalls.DemocracyRemoveVoteCall
	private readonly dev: devCalls.DemocracyRemoveVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyRemoveVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyRemoveVoteCall(ctx, call)
		this.test = new testCalls.DemocracyRemoveVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyRemoveVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyRemoveVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyRemoveVoteCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracySecondCall {
	private readonly production: productionCalls.DemocracySecondCall
	private readonly stage: stageCalls.DemocracySecondCall
	private readonly test: testCalls.DemocracySecondCall
	private readonly dev: devCalls.DemocracySecondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracySecondCall(ctx, call)
		this.stage = new stageCalls.DemocracySecondCall(ctx, call)
		this.test = new testCalls.DemocracySecondCall(ctx, call)
		this.dev = new devCalls.DemocracySecondCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracySecondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracySecondCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracySecondCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracySecondCall['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyUndelegateCall {
	private readonly production: productionCalls.DemocracyUndelegateCall
	private readonly stage: stageCalls.DemocracyUndelegateCall
	private readonly test: testCalls.DemocracyUndelegateCall
	private readonly dev: devCalls.DemocracyUndelegateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyUndelegateCall(ctx, call)
		this.stage = new stageCalls.DemocracyUndelegateCall(ctx, call)
		this.test = new testCalls.DemocracyUndelegateCall(ctx, call)
		this.dev = new devCalls.DemocracyUndelegateCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyUndelegateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyUndelegateCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyUnlockCall {
	private readonly production: productionCalls.DemocracyUnlockCall
	private readonly stage: stageCalls.DemocracyUnlockCall
	private readonly test: testCalls.DemocracyUnlockCall
	private readonly dev: devCalls.DemocracyUnlockCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyUnlockCall(ctx, call)
		this.stage = new stageCalls.DemocracyUnlockCall(ctx, call)
		this.test = new testCalls.DemocracyUnlockCall(ctx, call)
		this.dev = new devCalls.DemocracyUnlockCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyUnlockCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyUnlockCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyVetoExternalCall {
	private readonly production: productionCalls.DemocracyVetoExternalCall
	private readonly stage: stageCalls.DemocracyVetoExternalCall
	private readonly test: testCalls.DemocracyVetoExternalCall
	private readonly dev: devCalls.DemocracyVetoExternalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyVetoExternalCall(ctx, call)
		this.stage = new stageCalls.DemocracyVetoExternalCall(ctx, call)
		this.test = new testCalls.DemocracyVetoExternalCall(ctx, call)
		this.dev = new devCalls.DemocracyVetoExternalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyVetoExternalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyVetoExternalCall['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyVoteCall {
	private readonly production: productionCalls.DemocracyVoteCall
	private readonly stage: stageCalls.DemocracyVoteCall
	private readonly test: testCalls.DemocracyVoteCall
	private readonly dev: devCalls.DemocracyVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyVoteCall(ctx, call)
		this.test = new testCalls.DemocracyVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.DemocracyVoteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemocracyVoteCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseGovernanceFallbackCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall
	private readonly test: testCalls.ElectionProviderMultiPhaseGovernanceFallbackCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
		this.test = new testCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSetEmergencyElectionResultCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall
	private readonly test: testCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
		this.test = new testCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall
	private readonly test: testCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
		this.test = new testCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSubmitCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSubmitCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSubmitCall
	private readonly test: testCalls.ElectionProviderMultiPhaseSubmitCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
		this.test = new testCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSubmitCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSubmitCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSubmitUnsignedCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall
	private readonly test: testCalls.ElectionProviderMultiPhaseSubmitUnsignedCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
		this.test = new testCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenCleanDefunctVotersCall {
	private readonly production: productionCalls.ElectionsPhragmenCleanDefunctVotersCall
	private readonly stage: stageCalls.ElectionsPhragmenCleanDefunctVotersCall
	private readonly test: testCalls.ElectionsPhragmenCleanDefunctVotersCall
	private readonly dev: devCalls.ElectionsPhragmenCleanDefunctVotersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenCleanDefunctVotersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenCleanDefunctVotersCall['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenRemoveMemberCall {
	private readonly production: productionCalls.ElectionsPhragmenRemoveMemberCall
	private readonly stage: stageCalls.ElectionsPhragmenRemoveMemberCall
	private readonly test: testCalls.ElectionsPhragmenRemoveMemberCall
	private readonly dev: devCalls.ElectionsPhragmenRemoveMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRemoveMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRemoveMemberCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.ElectionsPhragmenRemoveMemberCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.ElectionsPhragmenRemoveMemberCall['asV53'] {
		return this.production.asV53
	}
}

export class ElectionsPhragmenRemoveVoterCall {
	private readonly production: productionCalls.ElectionsPhragmenRemoveVoterCall
	private readonly stage: stageCalls.ElectionsPhragmenRemoveVoterCall
	private readonly test: testCalls.ElectionsPhragmenRemoveVoterCall
	private readonly dev: devCalls.ElectionsPhragmenRemoveVoterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRemoveVoterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRemoveVoterCall['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenRenounceCandidacyCall {
	private readonly production: productionCalls.ElectionsPhragmenRenounceCandidacyCall
	private readonly stage: stageCalls.ElectionsPhragmenRenounceCandidacyCall
	private readonly test: testCalls.ElectionsPhragmenRenounceCandidacyCall
	private readonly dev: devCalls.ElectionsPhragmenRenounceCandidacyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRenounceCandidacyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRenounceCandidacyCall['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenSubmitCandidacyCall {
	private readonly production: productionCalls.ElectionsPhragmenSubmitCandidacyCall
	private readonly stage: stageCalls.ElectionsPhragmenSubmitCandidacyCall
	private readonly test: testCalls.ElectionsPhragmenSubmitCandidacyCall
	private readonly dev: devCalls.ElectionsPhragmenSubmitCandidacyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenSubmitCandidacyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenSubmitCandidacyCall['asV1'] {
		return this.production.asV1
	}
}

export class ElectionsPhragmenVoteCall {
	private readonly production: productionCalls.ElectionsPhragmenVoteCall
	private readonly stage: stageCalls.ElectionsPhragmenVoteCall
	private readonly test: testCalls.ElectionsPhragmenVoteCall
	private readonly dev: devCalls.ElectionsPhragmenVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenVoteCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenVoteCall(ctx, call)
		this.test = new testCalls.ElectionsPhragmenVoteCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenVoteCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenVoteCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeAbortRequestCall {
	private readonly production: productionCalls.EthBridgeAbortRequestCall
	private readonly stage: stageCalls.EthBridgeAbortRequestCall
	private readonly test: testCalls.EthBridgeAbortRequestCall
	private readonly dev: devCalls.EthBridgeAbortRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAbortRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAbortRequestCall(ctx, call)
		this.test = new testCalls.EthBridgeAbortRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeAbortRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAbortRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAbortRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAbortRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAbortRequestCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.EthBridgeAbortRequestCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.EthBridgeAbortRequestCall['asV53'] {
		return this.production.asV53
	}
}

export class EthBridgeAddAssetCall {
	private readonly production: productionCalls.EthBridgeAddAssetCall
	private readonly stage: stageCalls.EthBridgeAddAssetCall
	private readonly test: testCalls.EthBridgeAddAssetCall
	private readonly dev: devCalls.EthBridgeAddAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddAssetCall(ctx, call)
		this.test = new testCalls.EthBridgeAddAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddAssetCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddAssetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddAssetCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAddAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAddAssetCall['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeAddPeerCall {
	private readonly production: productionCalls.EthBridgeAddPeerCall
	private readonly stage: stageCalls.EthBridgeAddPeerCall
	private readonly test: testCalls.EthBridgeAddPeerCall
	private readonly dev: devCalls.EthBridgeAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddPeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddPeerCall(ctx, call)
		this.test = new testCalls.EthBridgeAddPeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddPeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddPeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddPeerCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeAddSidechainTokenCall {
	private readonly production: productionCalls.EthBridgeAddSidechainTokenCall
	private readonly stage: stageCalls.EthBridgeAddSidechainTokenCall
	private readonly test: testCalls.EthBridgeAddSidechainTokenCall
	private readonly dev: devCalls.EthBridgeAddSidechainTokenCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddSidechainTokenCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddSidechainTokenCall(ctx, call)
		this.test = new testCalls.EthBridgeAddSidechainTokenCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddSidechainTokenCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddSidechainTokenCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddSidechainTokenCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAddSidechainTokenCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAddSidechainTokenCall['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeApproveRequestCall {
	private readonly production: productionCalls.EthBridgeApproveRequestCall
	private readonly stage: stageCalls.EthBridgeApproveRequestCall
	private readonly test: testCalls.EthBridgeApproveRequestCall
	private readonly dev: devCalls.EthBridgeApproveRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeApproveRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeApproveRequestCall(ctx, call)
		this.test = new testCalls.EthBridgeApproveRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeApproveRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeApproveRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeApproveRequestCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeFinalizeIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeFinalizeIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeFinalizeIncomingRequestCall
	private readonly test: testCalls.EthBridgeFinalizeIncomingRequestCall
	private readonly dev: devCalls.EthBridgeFinalizeIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
		this.test = new testCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeFinalizeIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeFinalizeIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeForceAddPeerCall {
	private readonly production: productionCalls.EthBridgeForceAddPeerCall
	private readonly stage: stageCalls.EthBridgeForceAddPeerCall
	private readonly test: testCalls.EthBridgeForceAddPeerCall
	private readonly dev: devCalls.EthBridgeForceAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeForceAddPeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeForceAddPeerCall(ctx, call)
		this.test = new testCalls.EthBridgeForceAddPeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeForceAddPeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeForceAddPeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeForceAddPeerCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeImportIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeImportIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeImportIncomingRequestCall
	private readonly test: testCalls.EthBridgeImportIncomingRequestCall
	private readonly dev: devCalls.EthBridgeImportIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeImportIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeImportIncomingRequestCall(ctx, call)
		this.test = new testCalls.EthBridgeImportIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeImportIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeImportIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeImportIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeImportIncomingRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeImportIncomingRequestCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.EthBridgeImportIncomingRequestCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.EthBridgeImportIncomingRequestCall['asV53'] {
		return this.production.asV53
	}
}

export class EthBridgeMigrateCall {
	private readonly production: productionCalls.EthBridgeMigrateCall
	private readonly stage: stageCalls.EthBridgeMigrateCall
	private readonly test: testCalls.EthBridgeMigrateCall
	private readonly dev: devCalls.EthBridgeMigrateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeMigrateCall(ctx, call)
		this.stage = new stageCalls.EthBridgeMigrateCall(ctx, call)
		this.test = new testCalls.EthBridgeMigrateCall(ctx, call)
		this.dev = new devCalls.EthBridgeMigrateCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeMigrateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeMigrateCall['asV1'] {
		return this.production.asV1
	}
	get isV38(): productionCalls.EthBridgeMigrateCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.EthBridgeMigrateCall['asV38'] {
		return this.production.asV38
	}
}

export class EthBridgeMigrateTo020Call {
	private readonly production: productionCalls.EthBridgeMigrateTo020Call
	private readonly stage: stageCalls.EthBridgeMigrateTo020Call
	private readonly test: testCalls.EthBridgeMigrateTo020Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeMigrateTo020Call(ctx, call)
		this.stage = new stageCalls.EthBridgeMigrateTo020Call(ctx, call)
		this.test = new testCalls.EthBridgeMigrateTo020Call(ctx, call)
	}

	get isV19(): productionCalls.EthBridgeMigrateTo020Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.EthBridgeMigrateTo020Call['asV19'] {
		return this.production.asV19
	}
}

export class EthBridgePrepareForMigrationCall {
	private readonly production: productionCalls.EthBridgePrepareForMigrationCall
	private readonly stage: stageCalls.EthBridgePrepareForMigrationCall
	private readonly test: testCalls.EthBridgePrepareForMigrationCall
	private readonly dev: devCalls.EthBridgePrepareForMigrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgePrepareForMigrationCall(ctx, call)
		this.stage = new stageCalls.EthBridgePrepareForMigrationCall(ctx, call)
		this.test = new testCalls.EthBridgePrepareForMigrationCall(ctx, call)
		this.dev = new devCalls.EthBridgePrepareForMigrationCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgePrepareForMigrationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgePrepareForMigrationCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRegisterBridgeCall {
	private readonly production: productionCalls.EthBridgeRegisterBridgeCall
	private readonly stage: stageCalls.EthBridgeRegisterBridgeCall
	private readonly test: testCalls.EthBridgeRegisterBridgeCall
	private readonly dev: devCalls.EthBridgeRegisterBridgeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterBridgeCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterBridgeCall(ctx, call)
		this.test = new testCalls.EthBridgeRegisterBridgeCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterBridgeCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRegisterBridgeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRegisterBridgeCall['asV1'] {
		return this.production.asV1
	}
	get isV38(): productionCalls.EthBridgeRegisterBridgeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.EthBridgeRegisterBridgeCall['asV38'] {
		return this.production.asV38
	}
}

export class EthBridgeRegisterExistingSidechainAssetCall {
	private readonly production: productionCalls.EthBridgeRegisterExistingSidechainAssetCall
	private readonly stage: stageCalls.EthBridgeRegisterExistingSidechainAssetCall
	private readonly test: testCalls.EthBridgeRegisterExistingSidechainAssetCall
	private readonly dev: devCalls.EthBridgeRegisterExistingSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
		this.test = new testCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
	}

	get isV32(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['asV32'] {
		return this.production.asV32
	}
	get isV42(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRegisterIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeRegisterIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeRegisterIncomingRequestCall
	private readonly test: testCalls.EthBridgeRegisterIncomingRequestCall
	private readonly dev: devCalls.EthBridgeRegisterIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
		this.test = new testCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRegisterIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRegisterIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeRegisterIncomingRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRegisterIncomingRequestCall['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRemovePeerCall {
	private readonly production: productionCalls.EthBridgeRemovePeerCall
	private readonly stage: stageCalls.EthBridgeRemovePeerCall
	private readonly test: testCalls.EthBridgeRemovePeerCall
	private readonly dev: devCalls.EthBridgeRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRemovePeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRemovePeerCall(ctx, call)
		this.test = new testCalls.EthBridgeRemovePeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeRemovePeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRemovePeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRemovePeerCall['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionCalls.EthBridgeRemovePeerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.EthBridgeRemovePeerCall['asV33'] {
		return this.production.asV33
	}
}

export class EthBridgeRemoveSidechainAssetCall {
	private readonly production: productionCalls.EthBridgeRemoveSidechainAssetCall
	private readonly stage: stageCalls.EthBridgeRemoveSidechainAssetCall
	private readonly test: testCalls.EthBridgeRemoveSidechainAssetCall
	private readonly dev: devCalls.EthBridgeRemoveSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
		this.test = new testCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
	}

	get isV32(): productionCalls.EthBridgeRemoveSidechainAssetCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.EthBridgeRemoveSidechainAssetCall['asV32'] {
		return this.production.asV32
	}
	get isV42(): productionCalls.EthBridgeRemoveSidechainAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRemoveSidechainAssetCall['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRequestFromSidechainCall {
	private readonly production: productionCalls.EthBridgeRequestFromSidechainCall
	private readonly stage: stageCalls.EthBridgeRequestFromSidechainCall
	private readonly test: testCalls.EthBridgeRequestFromSidechainCall
	private readonly dev: devCalls.EthBridgeRequestFromSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRequestFromSidechainCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRequestFromSidechainCall(ctx, call)
		this.test = new testCalls.EthBridgeRequestFromSidechainCall(ctx, call)
		this.dev = new devCalls.EthBridgeRequestFromSidechainCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRequestFromSidechainCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRequestFromSidechainCall['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeTransferToSidechainCall {
	private readonly production: productionCalls.EthBridgeTransferToSidechainCall
	private readonly stage: stageCalls.EthBridgeTransferToSidechainCall
	private readonly test: testCalls.EthBridgeTransferToSidechainCall
	private readonly dev: devCalls.EthBridgeTransferToSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeTransferToSidechainCall(ctx, call)
		this.stage = new stageCalls.EthBridgeTransferToSidechainCall(ctx, call)
		this.test = new testCalls.EthBridgeTransferToSidechainCall(ctx, call)
		this.dev = new devCalls.EthBridgeTransferToSidechainCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeTransferToSidechainCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeTransferToSidechainCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeTransferToSidechainCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeTransferToSidechainCall['asV42'] {
		return this.production.asV42
	}
}

export class FarmingMigrateTo11Call {
	private readonly production: productionCalls.FarmingMigrateTo11Call
	private readonly stage: stageCalls.FarmingMigrateTo11Call
	private readonly test: testCalls.FarmingMigrateTo11Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FarmingMigrateTo11Call(ctx, call)
		this.stage = new stageCalls.FarmingMigrateTo11Call(ctx, call)
		this.test = new testCalls.FarmingMigrateTo11Call(ctx, call)
	}

	get isV7(): productionCalls.FarmingMigrateTo11Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.FarmingMigrateTo11Call['asV7'] {
		return this.production.asV7
	}
}

export class FaucetResetRewardsCall {
	private readonly production: productionCalls.FaucetResetRewardsCall
	private readonly stage: stageCalls.FaucetResetRewardsCall
	private readonly test: testCalls.FaucetResetRewardsCall
	private readonly dev: devCalls.FaucetResetRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FaucetResetRewardsCall(ctx, call)
		this.stage = new stageCalls.FaucetResetRewardsCall(ctx, call)
		this.test = new testCalls.FaucetResetRewardsCall(ctx, call)
		this.dev = new devCalls.FaucetResetRewardsCall(ctx, call)
	}

	get isV22(): productionCalls.FaucetResetRewardsCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.FaucetResetRewardsCall['asV22'] {
		return this.production.asV22
	}
}

export class FaucetTransferCall {
	private readonly production: productionCalls.FaucetTransferCall
	private readonly stage: stageCalls.FaucetTransferCall
	private readonly test: testCalls.FaucetTransferCall
	private readonly dev: devCalls.FaucetTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FaucetTransferCall(ctx, call)
		this.stage = new stageCalls.FaucetTransferCall(ctx, call)
		this.test = new testCalls.FaucetTransferCall(ctx, call)
		this.dev = new devCalls.FaucetTransferCall(ctx, call)
	}

	get isV22(): productionCalls.FaucetTransferCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.FaucetTransferCall['asV22'] {
		return this.production.asV22
	}
	get isV42Stage(): stageCalls.FaucetTransferCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.FaucetTransferCall['asV42'] {
		return this.stage.asV42
	}
}

export class GrandpaNoteStalledCall {
	private readonly production: productionCalls.GrandpaNoteStalledCall
	private readonly stage: stageCalls.GrandpaNoteStalledCall
	private readonly test: testCalls.GrandpaNoteStalledCall
	private readonly dev: devCalls.GrandpaNoteStalledCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaNoteStalledCall(ctx, call)
		this.stage = new stageCalls.GrandpaNoteStalledCall(ctx, call)
		this.test = new testCalls.GrandpaNoteStalledCall(ctx, call)
		this.dev = new devCalls.GrandpaNoteStalledCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaNoteStalledCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaNoteStalledCall['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaReportEquivocationCall {
	private readonly production: productionCalls.GrandpaReportEquivocationCall
	private readonly stage: stageCalls.GrandpaReportEquivocationCall
	private readonly test: testCalls.GrandpaReportEquivocationCall
	private readonly dev: devCalls.GrandpaReportEquivocationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaReportEquivocationCall(ctx, call)
		this.stage = new stageCalls.GrandpaReportEquivocationCall(ctx, call)
		this.test = new testCalls.GrandpaReportEquivocationCall(ctx, call)
		this.dev = new devCalls.GrandpaReportEquivocationCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaReportEquivocationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaReportEquivocationCall['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaReportEquivocationUnsignedCall {
	private readonly production: productionCalls.GrandpaReportEquivocationUnsignedCall
	private readonly stage: stageCalls.GrandpaReportEquivocationUnsignedCall
	private readonly test: testCalls.GrandpaReportEquivocationUnsignedCall
	private readonly dev: devCalls.GrandpaReportEquivocationUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
		this.stage = new stageCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
		this.test = new testCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
		this.dev = new devCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaReportEquivocationUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaReportEquivocationUnsignedCall['asV1'] {
		return this.production.asV1
	}
}

export class HermesGovernancePlatformChangeMinHermesForCreatingPollCall {
	private readonly production: productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall
	private readonly stage: stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall
	private readonly test: testCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall
	private readonly dev: devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformChangeMinHermesForVotingCall {
	private readonly production: productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall
	private readonly stage: stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall
	private readonly test: testCalls.HermesGovernancePlatformChangeMinHermesForVotingCall
	private readonly dev: devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformCreatePollCall {
	private readonly production: productionCalls.HermesGovernancePlatformCreatePollCall
	private readonly stage: stageCalls.HermesGovernancePlatformCreatePollCall
	private readonly test: testCalls.HermesGovernancePlatformCreatePollCall
	private readonly dev: devCalls.HermesGovernancePlatformCreatePollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformCreatePollCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformCreatePollCall['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionCalls.HermesGovernancePlatformCreatePollCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.HermesGovernancePlatformCreatePollCall['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformVoteCall {
	private readonly production: productionCalls.HermesGovernancePlatformVoteCall
	private readonly stage: stageCalls.HermesGovernancePlatformVoteCall
	private readonly test: testCalls.HermesGovernancePlatformVoteCall
	private readonly dev: devCalls.HermesGovernancePlatformVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformVoteCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformVoteCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformVoteCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformVoteCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformVoteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformVoteCall['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionCalls.HermesGovernancePlatformVoteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.HermesGovernancePlatformVoteCall['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformWithdrawFundsCreatorCall {
	private readonly production: productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall
	private readonly stage: stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall
	private readonly test: testCalls.HermesGovernancePlatformWithdrawFundsCreatorCall
	private readonly dev: devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformWithdrawFundsVoterCall {
	private readonly production: productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall
	private readonly stage: stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall
	private readonly test: testCalls.HermesGovernancePlatformWithdrawFundsVoterCall
	private readonly dev: devCalls.HermesGovernancePlatformWithdrawFundsVoterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
		this.test = new testCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall['asV47'] {
		return this.production.asV47
	}
}

export class IdentityAddRegistrarCall {
	private readonly production: productionCalls.IdentityAddRegistrarCall
	private readonly stage: stageCalls.IdentityAddRegistrarCall
	private readonly test: testCalls.IdentityAddRegistrarCall
	private readonly dev: devCalls.IdentityAddRegistrarCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityAddRegistrarCall(ctx, call)
		this.stage = new stageCalls.IdentityAddRegistrarCall(ctx, call)
		this.test = new testCalls.IdentityAddRegistrarCall(ctx, call)
		this.dev = new devCalls.IdentityAddRegistrarCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityAddRegistrarCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityAddRegistrarCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityAddSubCall {
	private readonly production: productionCalls.IdentityAddSubCall
	private readonly stage: stageCalls.IdentityAddSubCall
	private readonly test: testCalls.IdentityAddSubCall
	private readonly dev: devCalls.IdentityAddSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityAddSubCall(ctx, call)
		this.stage = new stageCalls.IdentityAddSubCall(ctx, call)
		this.test = new testCalls.IdentityAddSubCall(ctx, call)
		this.dev = new devCalls.IdentityAddSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityAddSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityAddSubCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityCancelRequestCall {
	private readonly production: productionCalls.IdentityCancelRequestCall
	private readonly stage: stageCalls.IdentityCancelRequestCall
	private readonly test: testCalls.IdentityCancelRequestCall
	private readonly dev: devCalls.IdentityCancelRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityCancelRequestCall(ctx, call)
		this.stage = new stageCalls.IdentityCancelRequestCall(ctx, call)
		this.test = new testCalls.IdentityCancelRequestCall(ctx, call)
		this.dev = new devCalls.IdentityCancelRequestCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityCancelRequestCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityCancelRequestCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityClearIdentityCall {
	private readonly production: productionCalls.IdentityClearIdentityCall
	private readonly stage: stageCalls.IdentityClearIdentityCall
	private readonly test: testCalls.IdentityClearIdentityCall
	private readonly dev: devCalls.IdentityClearIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityClearIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentityClearIdentityCall(ctx, call)
		this.test = new testCalls.IdentityClearIdentityCall(ctx, call)
		this.dev = new devCalls.IdentityClearIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityClearIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityClearIdentityCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityKillIdentityCall {
	private readonly production: productionCalls.IdentityKillIdentityCall
	private readonly stage: stageCalls.IdentityKillIdentityCall
	private readonly test: testCalls.IdentityKillIdentityCall
	private readonly dev: devCalls.IdentityKillIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityKillIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentityKillIdentityCall(ctx, call)
		this.test = new testCalls.IdentityKillIdentityCall(ctx, call)
		this.dev = new devCalls.IdentityKillIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityKillIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityKillIdentityCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityProvideJudgementCall {
	private readonly production: productionCalls.IdentityProvideJudgementCall
	private readonly stage: stageCalls.IdentityProvideJudgementCall
	private readonly test: testCalls.IdentityProvideJudgementCall
	private readonly dev: devCalls.IdentityProvideJudgementCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityProvideJudgementCall(ctx, call)
		this.stage = new stageCalls.IdentityProvideJudgementCall(ctx, call)
		this.test = new testCalls.IdentityProvideJudgementCall(ctx, call)
		this.dev = new devCalls.IdentityProvideJudgementCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityProvideJudgementCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityProvideJudgementCall['asV3'] {
		return this.production.asV3
	}
	get isV53(): productionCalls.IdentityProvideJudgementCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.IdentityProvideJudgementCall['asV53'] {
		return this.production.asV53
	}
}

export class IdentityQuitSubCall {
	private readonly production: productionCalls.IdentityQuitSubCall
	private readonly stage: stageCalls.IdentityQuitSubCall
	private readonly test: testCalls.IdentityQuitSubCall
	private readonly dev: devCalls.IdentityQuitSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityQuitSubCall(ctx, call)
		this.stage = new stageCalls.IdentityQuitSubCall(ctx, call)
		this.test = new testCalls.IdentityQuitSubCall(ctx, call)
		this.dev = new devCalls.IdentityQuitSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityQuitSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityQuitSubCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityRemoveSubCall {
	private readonly production: productionCalls.IdentityRemoveSubCall
	private readonly stage: stageCalls.IdentityRemoveSubCall
	private readonly test: testCalls.IdentityRemoveSubCall
	private readonly dev: devCalls.IdentityRemoveSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRemoveSubCall(ctx, call)
		this.stage = new stageCalls.IdentityRemoveSubCall(ctx, call)
		this.test = new testCalls.IdentityRemoveSubCall(ctx, call)
		this.dev = new devCalls.IdentityRemoveSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRemoveSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRemoveSubCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityRenameSubCall {
	private readonly production: productionCalls.IdentityRenameSubCall
	private readonly stage: stageCalls.IdentityRenameSubCall
	private readonly test: testCalls.IdentityRenameSubCall
	private readonly dev: devCalls.IdentityRenameSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRenameSubCall(ctx, call)
		this.stage = new stageCalls.IdentityRenameSubCall(ctx, call)
		this.test = new testCalls.IdentityRenameSubCall(ctx, call)
		this.dev = new devCalls.IdentityRenameSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRenameSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRenameSubCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentityRequestJudgementCall {
	private readonly production: productionCalls.IdentityRequestJudgementCall
	private readonly stage: stageCalls.IdentityRequestJudgementCall
	private readonly test: testCalls.IdentityRequestJudgementCall
	private readonly dev: devCalls.IdentityRequestJudgementCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRequestJudgementCall(ctx, call)
		this.stage = new stageCalls.IdentityRequestJudgementCall(ctx, call)
		this.test = new testCalls.IdentityRequestJudgementCall(ctx, call)
		this.dev = new devCalls.IdentityRequestJudgementCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRequestJudgementCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRequestJudgementCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySetAccountIdCall {
	private readonly production: productionCalls.IdentitySetAccountIdCall
	private readonly stage: stageCalls.IdentitySetAccountIdCall
	private readonly test: testCalls.IdentitySetAccountIdCall
	private readonly dev: devCalls.IdentitySetAccountIdCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetAccountIdCall(ctx, call)
		this.stage = new stageCalls.IdentitySetAccountIdCall(ctx, call)
		this.test = new testCalls.IdentitySetAccountIdCall(ctx, call)
		this.dev = new devCalls.IdentitySetAccountIdCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetAccountIdCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetAccountIdCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySetFeeCall {
	private readonly production: productionCalls.IdentitySetFeeCall
	private readonly stage: stageCalls.IdentitySetFeeCall
	private readonly test: testCalls.IdentitySetFeeCall
	private readonly dev: devCalls.IdentitySetFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetFeeCall(ctx, call)
		this.stage = new stageCalls.IdentitySetFeeCall(ctx, call)
		this.test = new testCalls.IdentitySetFeeCall(ctx, call)
		this.dev = new devCalls.IdentitySetFeeCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetFeeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetFeeCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySetFieldsCall {
	private readonly production: productionCalls.IdentitySetFieldsCall
	private readonly stage: stageCalls.IdentitySetFieldsCall
	private readonly test: testCalls.IdentitySetFieldsCall
	private readonly dev: devCalls.IdentitySetFieldsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetFieldsCall(ctx, call)
		this.stage = new stageCalls.IdentitySetFieldsCall(ctx, call)
		this.test = new testCalls.IdentitySetFieldsCall(ctx, call)
		this.dev = new devCalls.IdentitySetFieldsCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetFieldsCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetFieldsCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySetIdentityCall {
	private readonly production: productionCalls.IdentitySetIdentityCall
	private readonly stage: stageCalls.IdentitySetIdentityCall
	private readonly test: testCalls.IdentitySetIdentityCall
	private readonly dev: devCalls.IdentitySetIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentitySetIdentityCall(ctx, call)
		this.test = new testCalls.IdentitySetIdentityCall(ctx, call)
		this.dev = new devCalls.IdentitySetIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetIdentityCall['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySetSubsCall {
	private readonly production: productionCalls.IdentitySetSubsCall
	private readonly stage: stageCalls.IdentitySetSubsCall
	private readonly test: testCalls.IdentitySetSubsCall
	private readonly dev: devCalls.IdentitySetSubsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetSubsCall(ctx, call)
		this.stage = new stageCalls.IdentitySetSubsCall(ctx, call)
		this.test = new testCalls.IdentitySetSubsCall(ctx, call)
		this.dev = new devCalls.IdentitySetSubsCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetSubsCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetSubsCall['asV3'] {
		return this.production.asV3
	}
}

export class ImOnlineHeartbeatCall {
	private readonly production: productionCalls.ImOnlineHeartbeatCall
	private readonly stage: stageCalls.ImOnlineHeartbeatCall
	private readonly test: testCalls.ImOnlineHeartbeatCall
	private readonly dev: devCalls.ImOnlineHeartbeatCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ImOnlineHeartbeatCall(ctx, call)
		this.stage = new stageCalls.ImOnlineHeartbeatCall(ctx, call)
		this.test = new testCalls.ImOnlineHeartbeatCall(ctx, call)
		this.dev = new devCalls.ImOnlineHeartbeatCall(ctx, call)
	}

	get isV1(): productionCalls.ImOnlineHeartbeatCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ImOnlineHeartbeatCall['asV1'] {
		return this.production.asV1
	}
}

export class IrohaMigrationMigrateCall {
	private readonly production: productionCalls.IrohaMigrationMigrateCall
	private readonly stage: stageCalls.IrohaMigrationMigrateCall
	private readonly test: testCalls.IrohaMigrationMigrateCall
	private readonly dev: devCalls.IrohaMigrationMigrateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IrohaMigrationMigrateCall(ctx, call)
		this.stage = new stageCalls.IrohaMigrationMigrateCall(ctx, call)
		this.test = new testCalls.IrohaMigrationMigrateCall(ctx, call)
		this.dev = new devCalls.IrohaMigrationMigrateCall(ctx, call)
	}

	get isV1(): productionCalls.IrohaMigrationMigrateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.IrohaMigrationMigrateCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.IrohaMigrationMigrateCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.IrohaMigrationMigrateCall['asV42'] {
		return this.production.asV42
	}
}

export class LiquidityProxyDisableLiquiditySourceCall {
	private readonly production: productionCalls.LiquidityProxyDisableLiquiditySourceCall
	private readonly stage: stageCalls.LiquidityProxyDisableLiquiditySourceCall
	private readonly test: testCalls.LiquidityProxyDisableLiquiditySourceCall
	private readonly dev: devCalls.LiquidityProxyDisableLiquiditySourceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
		this.test = new testCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
		this.dev = new devCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
	}

	get isV38(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['asV42'] {
		return this.production.asV42
	}
}

export class LiquidityProxyEnableLiquiditySourceCall {
	private readonly production: productionCalls.LiquidityProxyEnableLiquiditySourceCall
	private readonly stage: stageCalls.LiquidityProxyEnableLiquiditySourceCall
	private readonly test: testCalls.LiquidityProxyEnableLiquiditySourceCall
	private readonly dev: devCalls.LiquidityProxyEnableLiquiditySourceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
		this.test = new testCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
		this.dev = new devCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
	}

	get isV38(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['asV42'] {
		return this.production.asV42
	}
}

export class LiquidityProxySetAdarCommissionRatioCall {
	private readonly production: productionCalls.LiquidityProxySetAdarCommissionRatioCall
	private readonly stage: stageCalls.LiquidityProxySetAdarCommissionRatioCall
	private readonly test: testCalls.LiquidityProxySetAdarCommissionRatioCall
	private readonly dev: devCalls.LiquidityProxySetAdarCommissionRatioCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
		this.test = new testCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
	}

	get isV57(): productionCalls.LiquidityProxySetAdarCommissionRatioCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.LiquidityProxySetAdarCommissionRatioCall['asV57'] {
		return this.production.asV57
	}
}

export class LiquidityProxySwapCall {
	private readonly production: productionCalls.LiquidityProxySwapCall
	private readonly stage: stageCalls.LiquidityProxySwapCall
	private readonly test: testCalls.LiquidityProxySwapCall
	private readonly dev: devCalls.LiquidityProxySwapCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapCall(ctx, call)
		this.test = new testCalls.LiquidityProxySwapCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapCall(ctx, call)
	}

	get isV1(): productionCalls.LiquidityProxySwapCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.LiquidityProxySwapCall['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionCalls.LiquidityProxySwapCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.LiquidityProxySwapCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.LiquidityProxySwapCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxySwapCall['asV42'] {
		return this.production.asV42
	}
	get isV64Dev(): devCalls.LiquidityProxySwapCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.LiquidityProxySwapCall['asV64'] {
		return this.dev.asV64
	}
}

export class LiquidityProxySwapTransferCall {
	private readonly production: productionCalls.LiquidityProxySwapTransferCall
	private readonly stage: stageCalls.LiquidityProxySwapTransferCall
	private readonly test: testCalls.LiquidityProxySwapTransferCall
	private readonly dev: devCalls.LiquidityProxySwapTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapTransferCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapTransferCall(ctx, call)
		this.test = new testCalls.LiquidityProxySwapTransferCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapTransferCall(ctx, call)
	}

	get isV33(): productionCalls.LiquidityProxySwapTransferCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.LiquidityProxySwapTransferCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.LiquidityProxySwapTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxySwapTransferCall['asV42'] {
		return this.production.asV42
	}
	get isV64Dev(): devCalls.LiquidityProxySwapTransferCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.LiquidityProxySwapTransferCall['asV64'] {
		return this.dev.asV64
	}
}

export class LiquidityProxySwapTransferBatchCall {
	private readonly production: productionCalls.LiquidityProxySwapTransferBatchCall
	private readonly stage: stageCalls.LiquidityProxySwapTransferBatchCall
	private readonly test: testCalls.LiquidityProxySwapTransferBatchCall
	private readonly dev: devCalls.LiquidityProxySwapTransferBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
		this.test = new testCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
	}

	get isV45(): productionCalls.LiquidityProxySwapTransferBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.LiquidityProxySwapTransferBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV50(): productionCalls.LiquidityProxySwapTransferBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.LiquidityProxySwapTransferBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV63(): productionCalls.LiquidityProxySwapTransferBatchCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.LiquidityProxySwapTransferBatchCall['asV63'] {
		return this.production.asV63
	}
	get isV64Dev(): devCalls.LiquidityProxySwapTransferBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.LiquidityProxySwapTransferBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class MulticollateralBondingCurvePoolClaimIncentivesCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall['asV1'] {
		return this.production.asV1
	}
}

export class MulticollateralBondingCurvePoolInitializePoolCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolInitializePoolCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolInitializePoolCall
	private readonly test: testCalls.MulticollateralBondingCurvePoolInitializePoolCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
		this.test = new testCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall
	private readonly test: testCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
		this.test = new testCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolSetPriceBiasCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall
	private readonly test: testCalls.MulticollateralBondingCurvePoolSetPriceBiasCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
		this.test = new testCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
	}

	get isV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['asV22'] {
		return this.production.asV22
	}
}

export class MulticollateralBondingCurvePoolSetPriceChangeConfigCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall
	private readonly test: testCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
		this.test = new testCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
	}

	get isV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['asV22'] {
		return this.production.asV22
	}
}

export class MulticollateralBondingCurvePoolSetReferenceAssetCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall
	private readonly test: testCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
		this.test = new testCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV42'] {
		return this.production.asV42
	}
}

export class MultisigApproveAsMultiCall {
	private readonly production: productionCalls.MultisigApproveAsMultiCall
	private readonly stage: stageCalls.MultisigApproveAsMultiCall
	private readonly test: testCalls.MultisigApproveAsMultiCall
	private readonly dev: devCalls.MultisigApproveAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigApproveAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigApproveAsMultiCall(ctx, call)
		this.test = new testCalls.MultisigApproveAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigApproveAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigApproveAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigApproveAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.MultisigApproveAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigApproveAsMultiCall['asV53'] {
		return this.production.asV53
	}
}

export class MultisigAsMultiCall {
	private readonly production: productionCalls.MultisigAsMultiCall
	private readonly stage: stageCalls.MultisigAsMultiCall
	private readonly test: testCalls.MultisigAsMultiCall
	private readonly dev: devCalls.MultisigAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigAsMultiCall(ctx, call)
		this.test = new testCalls.MultisigAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.MultisigAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigAsMultiCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.MultisigAsMultiCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.MultisigAsMultiCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.MultisigAsMultiCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.MultisigAsMultiCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.MultisigAsMultiCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.MultisigAsMultiCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.MultisigAsMultiCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.MultisigAsMultiCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.MultisigAsMultiCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.MultisigAsMultiCall['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageCalls.MultisigAsMultiCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MultisigAsMultiCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MultisigAsMultiCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigAsMultiCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.MultisigAsMultiCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.MultisigAsMultiCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.MultisigAsMultiCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.MultisigAsMultiCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.MultisigAsMultiCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.MultisigAsMultiCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.MultisigAsMultiCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.MultisigAsMultiCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.MultisigAsMultiCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.MultisigAsMultiCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.MultisigAsMultiCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.MultisigAsMultiCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.MultisigAsMultiCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.MultisigAsMultiCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.MultisigAsMultiCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.MultisigAsMultiCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.MultisigAsMultiCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.MultisigAsMultiCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.MultisigAsMultiCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.MultisigAsMultiCall['asV64'] {
		return this.dev.asV64
	}
}

export class MultisigAsMultiThreshold1Call {
	private readonly production: productionCalls.MultisigAsMultiThreshold1Call
	private readonly stage: stageCalls.MultisigAsMultiThreshold1Call
	private readonly test: testCalls.MultisigAsMultiThreshold1Call
	private readonly dev: devCalls.MultisigAsMultiThreshold1Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigAsMultiThreshold1Call(ctx, call)
		this.stage = new stageCalls.MultisigAsMultiThreshold1Call(ctx, call)
		this.test = new testCalls.MultisigAsMultiThreshold1Call(ctx, call)
		this.dev = new devCalls.MultisigAsMultiThreshold1Call(ctx, call)
	}

	get isV1(): productionCalls.MultisigAsMultiThreshold1Call['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigAsMultiThreshold1Call['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.MultisigAsMultiThreshold1Call['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.MultisigAsMultiThreshold1Call['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.MultisigAsMultiThreshold1Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.MultisigAsMultiThreshold1Call['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.MultisigAsMultiThreshold1Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.MultisigAsMultiThreshold1Call['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.MultisigAsMultiThreshold1Call['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MultisigAsMultiThreshold1Call['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.MultisigAsMultiThreshold1Call['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.MultisigAsMultiThreshold1Call['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.MultisigAsMultiThreshold1Call['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.MultisigAsMultiThreshold1Call['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.MultisigAsMultiThreshold1Call['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.MultisigAsMultiThreshold1Call['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.MultisigAsMultiThreshold1Call['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.MultisigAsMultiThreshold1Call['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.MultisigAsMultiThreshold1Call['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.MultisigAsMultiThreshold1Call['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.MultisigAsMultiThreshold1Call['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.MultisigAsMultiThreshold1Call['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.MultisigAsMultiThreshold1Call['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.MultisigAsMultiThreshold1Call['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.MultisigAsMultiThreshold1Call['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MultisigAsMultiThreshold1Call['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.MultisigAsMultiThreshold1Call['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.MultisigAsMultiThreshold1Call['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.MultisigAsMultiThreshold1Call['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.MultisigAsMultiThreshold1Call['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.MultisigAsMultiThreshold1Call['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.MultisigAsMultiThreshold1Call['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.MultisigAsMultiThreshold1Call['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.MultisigAsMultiThreshold1Call['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.MultisigAsMultiThreshold1Call['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.MultisigAsMultiThreshold1Call['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.MultisigAsMultiThreshold1Call['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigAsMultiThreshold1Call['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.MultisigAsMultiThreshold1Call['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.MultisigAsMultiThreshold1Call['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.MultisigAsMultiThreshold1Call['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.MultisigAsMultiThreshold1Call['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.MultisigAsMultiThreshold1Call['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.MultisigAsMultiThreshold1Call['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.MultisigAsMultiThreshold1Call['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.MultisigAsMultiThreshold1Call['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.MultisigAsMultiThreshold1Call['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.MultisigAsMultiThreshold1Call['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.MultisigAsMultiThreshold1Call['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.MultisigAsMultiThreshold1Call['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.MultisigAsMultiThreshold1Call['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.MultisigAsMultiThreshold1Call['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.MultisigAsMultiThreshold1Call['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.MultisigAsMultiThreshold1Call['asV64'] {
		return this.dev.asV64
	}
}

export class MultisigCancelAsMultiCall {
	private readonly production: productionCalls.MultisigCancelAsMultiCall
	private readonly stage: stageCalls.MultisigCancelAsMultiCall
	private readonly test: testCalls.MultisigCancelAsMultiCall
	private readonly dev: devCalls.MultisigCancelAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigCancelAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigCancelAsMultiCall(ctx, call)
		this.test = new testCalls.MultisigCancelAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigCancelAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigCancelAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigCancelAsMultiCall['asV1'] {
		return this.production.asV1
	}
}

export class MultisigVerifierAddPeerCall {
	private readonly production: productionCalls.MultisigVerifierAddPeerCall
	private readonly stage: stageCalls.MultisigVerifierAddPeerCall
	private readonly test: testCalls.MultisigVerifierAddPeerCall
	private readonly dev: devCalls.MultisigVerifierAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigVerifierAddPeerCall(ctx, call)
		this.stage = new stageCalls.MultisigVerifierAddPeerCall(ctx, call)
		this.test = new testCalls.MultisigVerifierAddPeerCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierAddPeerCall(ctx, call)
	}

	get isV64(): productionCalls.MultisigVerifierAddPeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.MultisigVerifierAddPeerCall['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierInitializeCall {
	private readonly production: productionCalls.MultisigVerifierInitializeCall
	private readonly stage: stageCalls.MultisigVerifierInitializeCall
	private readonly test: testCalls.MultisigVerifierInitializeCall
	private readonly dev: devCalls.MultisigVerifierInitializeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigVerifierInitializeCall(ctx, call)
		this.stage = new stageCalls.MultisigVerifierInitializeCall(ctx, call)
		this.test = new testCalls.MultisigVerifierInitializeCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierInitializeCall(ctx, call)
	}

	get isV64(): productionCalls.MultisigVerifierInitializeCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.MultisigVerifierInitializeCall['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierRemovePeerCall {
	private readonly production: productionCalls.MultisigVerifierRemovePeerCall
	private readonly stage: stageCalls.MultisigVerifierRemovePeerCall
	private readonly test: testCalls.MultisigVerifierRemovePeerCall
	private readonly dev: devCalls.MultisigVerifierRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigVerifierRemovePeerCall(ctx, call)
		this.stage = new stageCalls.MultisigVerifierRemovePeerCall(ctx, call)
		this.test = new testCalls.MultisigVerifierRemovePeerCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierRemovePeerCall(ctx, call)
	}

	get isV64(): productionCalls.MultisigVerifierRemovePeerCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.MultisigVerifierRemovePeerCall['asV64'] {
		return this.production.asV64
	}
}

export class OracleProxyDisableOracleCall {
	private readonly production: productionCalls.OracleProxyDisableOracleCall
	private readonly stage: stageCalls.OracleProxyDisableOracleCall
	private readonly test: testCalls.OracleProxyDisableOracleCall
	private readonly dev: devCalls.OracleProxyDisableOracleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.OracleProxyDisableOracleCall(ctx, call)
		this.stage = new stageCalls.OracleProxyDisableOracleCall(ctx, call)
		this.test = new testCalls.OracleProxyDisableOracleCall(ctx, call)
		this.dev = new devCalls.OracleProxyDisableOracleCall(ctx, call)
	}

	get isV45(): productionCalls.OracleProxyDisableOracleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.OracleProxyDisableOracleCall['asV45'] {
		return this.production.asV45
	}
}

export class OracleProxyEnableOracleCall {
	private readonly production: productionCalls.OracleProxyEnableOracleCall
	private readonly stage: stageCalls.OracleProxyEnableOracleCall
	private readonly test: testCalls.OracleProxyEnableOracleCall
	private readonly dev: devCalls.OracleProxyEnableOracleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.OracleProxyEnableOracleCall(ctx, call)
		this.stage = new stageCalls.OracleProxyEnableOracleCall(ctx, call)
		this.test = new testCalls.OracleProxyEnableOracleCall(ctx, call)
		this.dev = new devCalls.OracleProxyEnableOracleCall(ctx, call)
	}

	get isV45(): productionCalls.OracleProxyEnableOracleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.OracleProxyEnableOracleCall['asV45'] {
		return this.production.asV45
	}
}

export class ParachainBridgeAppAddAssetidParaidCall {
	private readonly production: productionCalls.ParachainBridgeAppAddAssetidParaidCall
	private readonly stage: stageCalls.ParachainBridgeAppAddAssetidParaidCall
	private readonly test: testCalls.ParachainBridgeAppAddAssetidParaidCall
	private readonly dev: devCalls.ParachainBridgeAppAddAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppAddAssetidParaidCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppAddAssetidParaidCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppAddAssetidParaidCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppAddAssetidParaidCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppAddAssetidParaidCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppAddAssetidParaidCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppBurnCall {
	private readonly production: productionCalls.ParachainBridgeAppBurnCall
	private readonly stage: stageCalls.ParachainBridgeAppBurnCall
	private readonly test: testCalls.ParachainBridgeAppBurnCall
	private readonly dev: devCalls.ParachainBridgeAppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppBurnCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppBurnCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppBurnCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppBurnCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppBurnCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppBurnCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppFinalizeAssetRegistrationCall {
	private readonly production: productionCalls.ParachainBridgeAppFinalizeAssetRegistrationCall
	private readonly stage: stageCalls.ParachainBridgeAppFinalizeAssetRegistrationCall
	private readonly test: testCalls.ParachainBridgeAppFinalizeAssetRegistrationCall
	private readonly dev: devCalls.ParachainBridgeAppFinalizeAssetRegistrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppFinalizeAssetRegistrationCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppFinalizeAssetRegistrationCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppFinalizeAssetRegistrationCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppFinalizeAssetRegistrationCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppFinalizeAssetRegistrationCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppFinalizeAssetRegistrationCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppMintCall {
	private readonly production: productionCalls.ParachainBridgeAppMintCall
	private readonly stage: stageCalls.ParachainBridgeAppMintCall
	private readonly test: testCalls.ParachainBridgeAppMintCall
	private readonly dev: devCalls.ParachainBridgeAppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppMintCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppMintCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppMintCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppMintCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppMintCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppMintCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppRegisterSidechainAssetCall {
	private readonly production: productionCalls.ParachainBridgeAppRegisterSidechainAssetCall
	private readonly stage: stageCalls.ParachainBridgeAppRegisterSidechainAssetCall
	private readonly test: testCalls.ParachainBridgeAppRegisterSidechainAssetCall
	private readonly dev: devCalls.ParachainBridgeAppRegisterSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppRegisterSidechainAssetCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppRegisterSidechainAssetCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppRegisterSidechainAssetCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppRegisterSidechainAssetCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppRegisterSidechainAssetCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppRegisterSidechainAssetCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppRegisterThischainAssetCall {
	private readonly production: productionCalls.ParachainBridgeAppRegisterThischainAssetCall
	private readonly stage: stageCalls.ParachainBridgeAppRegisterThischainAssetCall
	private readonly test: testCalls.ParachainBridgeAppRegisterThischainAssetCall
	private readonly dev: devCalls.ParachainBridgeAppRegisterThischainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppRegisterThischainAssetCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppRegisterThischainAssetCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppRegisterThischainAssetCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppRegisterThischainAssetCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppRegisterThischainAssetCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppRegisterThischainAssetCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppRemoveAssetidParaidCall {
	private readonly production: productionCalls.ParachainBridgeAppRemoveAssetidParaidCall
	private readonly stage: stageCalls.ParachainBridgeAppRemoveAssetidParaidCall
	private readonly test: testCalls.ParachainBridgeAppRemoveAssetidParaidCall
	private readonly dev: devCalls.ParachainBridgeAppRemoveAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppRemoveAssetidParaidCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppRemoveAssetidParaidCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppRemoveAssetidParaidCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppRemoveAssetidParaidCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppRemoveAssetidParaidCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppRemoveAssetidParaidCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall {
	private readonly production: productionCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall
	private readonly stage: stageCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall
	private readonly test: testCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall
	private readonly dev: devCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppSetMinimumXcmIncomingAssetCountCall['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppUpdateTransactionStatusCall {
	private readonly production: productionCalls.ParachainBridgeAppUpdateTransactionStatusCall
	private readonly stage: stageCalls.ParachainBridgeAppUpdateTransactionStatusCall
	private readonly test: testCalls.ParachainBridgeAppUpdateTransactionStatusCall
	private readonly dev: devCalls.ParachainBridgeAppUpdateTransactionStatusCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ParachainBridgeAppUpdateTransactionStatusCall(ctx, call)
		this.stage = new stageCalls.ParachainBridgeAppUpdateTransactionStatusCall(ctx, call)
		this.test = new testCalls.ParachainBridgeAppUpdateTransactionStatusCall(ctx, call)
		this.dev = new devCalls.ParachainBridgeAppUpdateTransactionStatusCall(ctx, call)
	}

	get isV64(): productionCalls.ParachainBridgeAppUpdateTransactionStatusCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.ParachainBridgeAppUpdateTransactionStatusCall['asV64'] {
		return this.production.asV64
	}
}

export class PoolXykDepositLiquidityCall {
	private readonly production: productionCalls.PoolXykDepositLiquidityCall
	private readonly stage: stageCalls.PoolXykDepositLiquidityCall
	private readonly test: testCalls.PoolXykDepositLiquidityCall
	private readonly dev: devCalls.PoolXykDepositLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykDepositLiquidityCall(ctx, call)
		this.stage = new stageCalls.PoolXykDepositLiquidityCall(ctx, call)
		this.test = new testCalls.PoolXykDepositLiquidityCall(ctx, call)
		this.dev = new devCalls.PoolXykDepositLiquidityCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykDepositLiquidityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykDepositLiquidityCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykDepositLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykDepositLiquidityCall['asV42'] {
		return this.production.asV42
	}
}

export class PoolXykInitializePoolCall {
	private readonly production: productionCalls.PoolXykInitializePoolCall
	private readonly stage: stageCalls.PoolXykInitializePoolCall
	private readonly test: testCalls.PoolXykInitializePoolCall
	private readonly dev: devCalls.PoolXykInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykInitializePoolCall(ctx, call)
		this.stage = new stageCalls.PoolXykInitializePoolCall(ctx, call)
		this.test = new testCalls.PoolXykInitializePoolCall(ctx, call)
		this.dev = new devCalls.PoolXykInitializePoolCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykInitializePoolCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykInitializePoolCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykInitializePoolCall['asV42'] {
		return this.production.asV42
	}
}

export class PoolXykSwapPairCall {
	private readonly production: productionCalls.PoolXykSwapPairCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykSwapPairCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykSwapPairCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykSwapPairCall['asV1'] {
		return this.production.asV1
	}
}

export class PoolXykWithdrawLiquidityCall {
	private readonly production: productionCalls.PoolXykWithdrawLiquidityCall
	private readonly stage: stageCalls.PoolXykWithdrawLiquidityCall
	private readonly test: testCalls.PoolXykWithdrawLiquidityCall
	private readonly dev: devCalls.PoolXykWithdrawLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykWithdrawLiquidityCall(ctx, call)
		this.stage = new stageCalls.PoolXykWithdrawLiquidityCall(ctx, call)
		this.test = new testCalls.PoolXykWithdrawLiquidityCall(ctx, call)
		this.dev = new devCalls.PoolXykWithdrawLiquidityCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykWithdrawLiquidityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykWithdrawLiquidityCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykWithdrawLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykWithdrawLiquidityCall['asV42'] {
		return this.production.asV42
	}
}

export class PreimageNotePreimageCall {
	private readonly production: productionCalls.PreimageNotePreimageCall
	private readonly stage: stageCalls.PreimageNotePreimageCall
	private readonly test: testCalls.PreimageNotePreimageCall
	private readonly dev: devCalls.PreimageNotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageNotePreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageNotePreimageCall(ctx, call)
		this.test = new testCalls.PreimageNotePreimageCall(ctx, call)
		this.dev = new devCalls.PreimageNotePreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageNotePreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageNotePreimageCall['asV53'] {
		return this.production.asV53
	}
}

export class PreimageRequestPreimageCall {
	private readonly production: productionCalls.PreimageRequestPreimageCall
	private readonly stage: stageCalls.PreimageRequestPreimageCall
	private readonly test: testCalls.PreimageRequestPreimageCall
	private readonly dev: devCalls.PreimageRequestPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageRequestPreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageRequestPreimageCall(ctx, call)
		this.test = new testCalls.PreimageRequestPreimageCall(ctx, call)
		this.dev = new devCalls.PreimageRequestPreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageRequestPreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageRequestPreimageCall['asV53'] {
		return this.production.asV53
	}
}

export class PreimageUnnotePreimageCall {
	private readonly production: productionCalls.PreimageUnnotePreimageCall
	private readonly stage: stageCalls.PreimageUnnotePreimageCall
	private readonly test: testCalls.PreimageUnnotePreimageCall
	private readonly dev: devCalls.PreimageUnnotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageUnnotePreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageUnnotePreimageCall(ctx, call)
		this.test = new testCalls.PreimageUnnotePreimageCall(ctx, call)
		this.dev = new devCalls.PreimageUnnotePreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageUnnotePreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageUnnotePreimageCall['asV53'] {
		return this.production.asV53
	}
}

export class PreimageUnrequestPreimageCall {
	private readonly production: productionCalls.PreimageUnrequestPreimageCall
	private readonly stage: stageCalls.PreimageUnrequestPreimageCall
	private readonly test: testCalls.PreimageUnrequestPreimageCall
	private readonly dev: devCalls.PreimageUnrequestPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageUnrequestPreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageUnrequestPreimageCall(ctx, call)
		this.test = new testCalls.PreimageUnrequestPreimageCall(ctx, call)
		this.dev = new devCalls.PreimageUnrequestPreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageUnrequestPreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageUnrequestPreimageCall['asV53'] {
		return this.production.asV53
	}
}

export class PswapDistributionClaimIncentiveCall {
	private readonly production: productionCalls.PswapDistributionClaimIncentiveCall
	private readonly stage: stageCalls.PswapDistributionClaimIncentiveCall
	private readonly test: testCalls.PswapDistributionClaimIncentiveCall
	private readonly dev: devCalls.PswapDistributionClaimIncentiveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PswapDistributionClaimIncentiveCall(ctx, call)
		this.stage = new stageCalls.PswapDistributionClaimIncentiveCall(ctx, call)
		this.test = new testCalls.PswapDistributionClaimIncentiveCall(ctx, call)
		this.dev = new devCalls.PswapDistributionClaimIncentiveCall(ctx, call)
	}

	get isV1(): productionCalls.PswapDistributionClaimIncentiveCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PswapDistributionClaimIncentiveCall['asV1'] {
		return this.production.asV1
	}
}

export class ReferralsReserveCall {
	private readonly production: productionCalls.ReferralsReserveCall
	private readonly stage: stageCalls.ReferralsReserveCall
	private readonly test: testCalls.ReferralsReserveCall
	private readonly dev: devCalls.ReferralsReserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsReserveCall(ctx, call)
		this.stage = new stageCalls.ReferralsReserveCall(ctx, call)
		this.test = new testCalls.ReferralsReserveCall(ctx, call)
		this.dev = new devCalls.ReferralsReserveCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsReserveCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsReserveCall['asV22'] {
		return this.production.asV22
	}
}

export class ReferralsSetReferrerCall {
	private readonly production: productionCalls.ReferralsSetReferrerCall
	private readonly stage: stageCalls.ReferralsSetReferrerCall
	private readonly test: testCalls.ReferralsSetReferrerCall
	private readonly dev: devCalls.ReferralsSetReferrerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsSetReferrerCall(ctx, call)
		this.stage = new stageCalls.ReferralsSetReferrerCall(ctx, call)
		this.test = new testCalls.ReferralsSetReferrerCall(ctx, call)
		this.dev = new devCalls.ReferralsSetReferrerCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsSetReferrerCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsSetReferrerCall['asV22'] {
		return this.production.asV22
	}
}

export class ReferralsUnreserveCall {
	private readonly production: productionCalls.ReferralsUnreserveCall
	private readonly stage: stageCalls.ReferralsUnreserveCall
	private readonly test: testCalls.ReferralsUnreserveCall
	private readonly dev: devCalls.ReferralsUnreserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsUnreserveCall(ctx, call)
		this.stage = new stageCalls.ReferralsUnreserveCall(ctx, call)
		this.test = new testCalls.ReferralsUnreserveCall(ctx, call)
		this.dev = new devCalls.ReferralsUnreserveCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsUnreserveCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsUnreserveCall['asV22'] {
		return this.production.asV22
	}
}

export class RewardsAddUmiNftReceiversCall {
	private readonly production: productionCalls.RewardsAddUmiNftReceiversCall
	private readonly stage: stageCalls.RewardsAddUmiNftReceiversCall
	private readonly test: testCalls.RewardsAddUmiNftReceiversCall
	private readonly dev: devCalls.RewardsAddUmiNftReceiversCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsAddUmiNftReceiversCall(ctx, call)
		this.stage = new stageCalls.RewardsAddUmiNftReceiversCall(ctx, call)
		this.test = new testCalls.RewardsAddUmiNftReceiversCall(ctx, call)
		this.dev = new devCalls.RewardsAddUmiNftReceiversCall(ctx, call)
	}

	get isV33(): productionCalls.RewardsAddUmiNftReceiversCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.RewardsAddUmiNftReceiversCall['asV33'] {
		return this.production.asV33
	}
}

export class RewardsClaimCall {
	private readonly production: productionCalls.RewardsClaimCall
	private readonly stage: stageCalls.RewardsClaimCall
	private readonly test: testCalls.RewardsClaimCall
	private readonly dev: devCalls.RewardsClaimCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsClaimCall(ctx, call)
		this.stage = new stageCalls.RewardsClaimCall(ctx, call)
		this.test = new testCalls.RewardsClaimCall(ctx, call)
		this.dev = new devCalls.RewardsClaimCall(ctx, call)
	}

	get isV1(): productionCalls.RewardsClaimCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.RewardsClaimCall['asV1'] {
		return this.production.asV1
	}
}

export class RewardsFinalizeStorageMigrationCall {
	private readonly production: productionCalls.RewardsFinalizeStorageMigrationCall
	private readonly stage: stageCalls.RewardsFinalizeStorageMigrationCall
	private readonly test: testCalls.RewardsFinalizeStorageMigrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsFinalizeStorageMigrationCall(ctx, call)
		this.stage = new stageCalls.RewardsFinalizeStorageMigrationCall(ctx, call)
		this.test = new testCalls.RewardsFinalizeStorageMigrationCall(ctx, call)
	}

	get isV19(): productionCalls.RewardsFinalizeStorageMigrationCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.RewardsFinalizeStorageMigrationCall['asV19'] {
		return this.production.asV19
	}
}

export class SchedulerCancelCall {
	private readonly production: productionCalls.SchedulerCancelCall
	private readonly stage: stageCalls.SchedulerCancelCall
	private readonly test: testCalls.SchedulerCancelCall
	private readonly dev: devCalls.SchedulerCancelCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerCancelCall(ctx, call)
		this.stage = new stageCalls.SchedulerCancelCall(ctx, call)
		this.test = new testCalls.SchedulerCancelCall(ctx, call)
		this.dev = new devCalls.SchedulerCancelCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerCancelCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerCancelCall['asV1'] {
		return this.production.asV1
	}
}

export class SchedulerCancelNamedCall {
	private readonly production: productionCalls.SchedulerCancelNamedCall
	private readonly stage: stageCalls.SchedulerCancelNamedCall
	private readonly test: testCalls.SchedulerCancelNamedCall
	private readonly dev: devCalls.SchedulerCancelNamedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerCancelNamedCall(ctx, call)
		this.stage = new stageCalls.SchedulerCancelNamedCall(ctx, call)
		this.test = new testCalls.SchedulerCancelNamedCall(ctx, call)
		this.dev = new devCalls.SchedulerCancelNamedCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerCancelNamedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerCancelNamedCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.SchedulerCancelNamedCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerCancelNamedCall['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerScheduleCall {
	private readonly production: productionCalls.SchedulerScheduleCall
	private readonly stage: stageCalls.SchedulerScheduleCall
	private readonly test: testCalls.SchedulerScheduleCall
	private readonly dev: devCalls.SchedulerScheduleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleCall(ctx, call)
		this.test = new testCalls.SchedulerScheduleCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.SchedulerScheduleCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.SchedulerScheduleCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.SchedulerScheduleCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.SchedulerScheduleCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.SchedulerScheduleCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SchedulerScheduleCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SchedulerScheduleCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SchedulerScheduleCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SchedulerScheduleCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SchedulerScheduleCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SchedulerScheduleCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SchedulerScheduleCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SchedulerScheduleCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SchedulerScheduleCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SchedulerScheduleCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SchedulerScheduleCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SchedulerScheduleCall['asV64'] {
		return this.dev.asV64
	}
}

export class SchedulerScheduleAfterCall {
	private readonly production: productionCalls.SchedulerScheduleAfterCall
	private readonly stage: stageCalls.SchedulerScheduleAfterCall
	private readonly test: testCalls.SchedulerScheduleAfterCall
	private readonly dev: devCalls.SchedulerScheduleAfterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleAfterCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleAfterCall(ctx, call)
		this.test = new testCalls.SchedulerScheduleAfterCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleAfterCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleAfterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleAfterCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleAfterCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleAfterCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleAfterCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleAfterCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleAfterCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleAfterCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleAfterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleAfterCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleAfterCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleAfterCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleAfterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleAfterCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleAfterCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleAfterCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleAfterCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleAfterCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleAfterCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleAfterCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleAfterCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleAfterCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleAfterCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleAfterCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleAfterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleAfterCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleAfterCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleAfterCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleAfterCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleAfterCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleAfterCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleAfterCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleAfterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleAfterCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleAfterCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleAfterCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleAfterCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleAfterCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleAfterCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleAfterCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleAfterCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleAfterCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleAfterCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleAfterCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.SchedulerScheduleAfterCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.SchedulerScheduleAfterCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.SchedulerScheduleAfterCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.SchedulerScheduleAfterCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.SchedulerScheduleAfterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleAfterCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleAfterCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleAfterCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleAfterCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleAfterCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleAfterCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleAfterCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleAfterCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleAfterCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleAfterCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleAfterCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleAfterCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleAfterCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleAfterCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleAfterCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleAfterCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleAfterCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleAfterCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleAfterCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleAfterCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleAfterCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleAfterCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleAfterCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleAfterCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleAfterCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleAfterCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleAfterCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleAfterCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleAfterCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleAfterCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleAfterCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleAfterCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleAfterCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SchedulerScheduleAfterCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SchedulerScheduleAfterCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SchedulerScheduleAfterCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SchedulerScheduleAfterCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SchedulerScheduleAfterCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SchedulerScheduleAfterCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SchedulerScheduleAfterCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SchedulerScheduleAfterCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SchedulerScheduleAfterCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SchedulerScheduleAfterCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SchedulerScheduleAfterCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SchedulerScheduleAfterCall['asV64'] {
		return this.dev.asV64
	}
}

export class SchedulerScheduleNamedCall {
	private readonly production: productionCalls.SchedulerScheduleNamedCall
	private readonly stage: stageCalls.SchedulerScheduleNamedCall
	private readonly test: testCalls.SchedulerScheduleNamedCall
	private readonly dev: devCalls.SchedulerScheduleNamedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleNamedCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleNamedCall(ctx, call)
		this.test = new testCalls.SchedulerScheduleNamedCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleNamedCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleNamedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleNamedCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleNamedCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleNamedCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleNamedCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleNamedCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleNamedCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleNamedCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleNamedCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleNamedCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleNamedCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleNamedCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleNamedCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleNamedCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleNamedCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleNamedCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleNamedCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleNamedCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleNamedCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleNamedCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleNamedCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleNamedCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleNamedCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleNamedCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleNamedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleNamedCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleNamedCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleNamedCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleNamedCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleNamedCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleNamedCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleNamedCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleNamedCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleNamedCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleNamedCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleNamedCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleNamedCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleNamedCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleNamedCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleNamedCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleNamedCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleNamedCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleNamedCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleNamedCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.SchedulerScheduleNamedCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.SchedulerScheduleNamedCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.SchedulerScheduleNamedCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.SchedulerScheduleNamedCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.SchedulerScheduleNamedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleNamedCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleNamedCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleNamedCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleNamedCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleNamedCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleNamedCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleNamedCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleNamedCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleNamedCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleNamedCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleNamedCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleNamedCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleNamedCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleNamedCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleNamedCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleNamedCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleNamedCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleNamedCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleNamedCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleNamedCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleNamedCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleNamedCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleNamedCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleNamedCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleNamedCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleNamedCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleNamedCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleNamedCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleNamedCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleNamedCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleNamedCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleNamedCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleNamedCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SchedulerScheduleNamedCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SchedulerScheduleNamedCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SchedulerScheduleNamedCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SchedulerScheduleNamedCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SchedulerScheduleNamedCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SchedulerScheduleNamedCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SchedulerScheduleNamedCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SchedulerScheduleNamedCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SchedulerScheduleNamedCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SchedulerScheduleNamedCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SchedulerScheduleNamedCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SchedulerScheduleNamedCall['asV64'] {
		return this.dev.asV64
	}
}

export class SchedulerScheduleNamedAfterCall {
	private readonly production: productionCalls.SchedulerScheduleNamedAfterCall
	private readonly stage: stageCalls.SchedulerScheduleNamedAfterCall
	private readonly test: testCalls.SchedulerScheduleNamedAfterCall
	private readonly dev: devCalls.SchedulerScheduleNamedAfterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleNamedAfterCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleNamedAfterCall(ctx, call)
		this.test = new testCalls.SchedulerScheduleNamedAfterCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleNamedAfterCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleNamedAfterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleNamedAfterCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleNamedAfterCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleNamedAfterCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleNamedAfterCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleNamedAfterCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleNamedAfterCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleNamedAfterCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleNamedAfterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleNamedAfterCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleNamedAfterCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleNamedAfterCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleNamedAfterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleNamedAfterCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleNamedAfterCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleNamedAfterCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleNamedAfterCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleNamedAfterCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleNamedAfterCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleNamedAfterCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleNamedAfterCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleNamedAfterCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleNamedAfterCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleNamedAfterCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleNamedAfterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleNamedAfterCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleNamedAfterCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleNamedAfterCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleNamedAfterCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleNamedAfterCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleNamedAfterCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleNamedAfterCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleNamedAfterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleNamedAfterCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleNamedAfterCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleNamedAfterCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleNamedAfterCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleNamedAfterCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleNamedAfterCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleNamedAfterCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleNamedAfterCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleNamedAfterCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleNamedAfterCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleNamedAfterCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.SchedulerScheduleNamedAfterCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.SchedulerScheduleNamedAfterCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.SchedulerScheduleNamedAfterCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.SchedulerScheduleNamedAfterCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SchedulerScheduleNamedAfterCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SchedulerScheduleNamedAfterCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SchedulerScheduleNamedAfterCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SchedulerScheduleNamedAfterCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SchedulerScheduleNamedAfterCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SchedulerScheduleNamedAfterCall['asV64'] {
		return this.dev.asV64
	}
}

export class SessionPurgeKeysCall {
	private readonly production: productionCalls.SessionPurgeKeysCall
	private readonly stage: stageCalls.SessionPurgeKeysCall
	private readonly test: testCalls.SessionPurgeKeysCall
	private readonly dev: devCalls.SessionPurgeKeysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SessionPurgeKeysCall(ctx, call)
		this.stage = new stageCalls.SessionPurgeKeysCall(ctx, call)
		this.test = new testCalls.SessionPurgeKeysCall(ctx, call)
		this.dev = new devCalls.SessionPurgeKeysCall(ctx, call)
	}

	get isV1(): productionCalls.SessionPurgeKeysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SessionPurgeKeysCall['asV1'] {
		return this.production.asV1
	}
}

export class SessionSetKeysCall {
	private readonly production: productionCalls.SessionSetKeysCall
	private readonly stage: stageCalls.SessionSetKeysCall
	private readonly test: testCalls.SessionSetKeysCall
	private readonly dev: devCalls.SessionSetKeysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SessionSetKeysCall(ctx, call)
		this.stage = new stageCalls.SessionSetKeysCall(ctx, call)
		this.test = new testCalls.SessionSetKeysCall(ctx, call)
		this.dev = new devCalls.SessionSetKeysCall(ctx, call)
	}

	get isV1(): productionCalls.SessionSetKeysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SessionSetKeysCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.SessionSetKeysCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SessionSetKeysCall['asV42'] {
		return this.production.asV42
	}
}

export class StakingBondCall {
	private readonly production: productionCalls.StakingBondCall
	private readonly stage: stageCalls.StakingBondCall
	private readonly test: testCalls.StakingBondCall
	private readonly dev: devCalls.StakingBondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingBondCall(ctx, call)
		this.stage = new stageCalls.StakingBondCall(ctx, call)
		this.test = new testCalls.StakingBondCall(ctx, call)
		this.dev = new devCalls.StakingBondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingBondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingBondCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingBondExtraCall {
	private readonly production: productionCalls.StakingBondExtraCall
	private readonly stage: stageCalls.StakingBondExtraCall
	private readonly test: testCalls.StakingBondExtraCall
	private readonly dev: devCalls.StakingBondExtraCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingBondExtraCall(ctx, call)
		this.stage = new stageCalls.StakingBondExtraCall(ctx, call)
		this.test = new testCalls.StakingBondExtraCall(ctx, call)
		this.dev = new devCalls.StakingBondExtraCall(ctx, call)
	}

	get isV1(): productionCalls.StakingBondExtraCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingBondExtraCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingCancelDeferredSlashCall {
	private readonly production: productionCalls.StakingCancelDeferredSlashCall
	private readonly stage: stageCalls.StakingCancelDeferredSlashCall
	private readonly test: testCalls.StakingCancelDeferredSlashCall
	private readonly dev: devCalls.StakingCancelDeferredSlashCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingCancelDeferredSlashCall(ctx, call)
		this.stage = new stageCalls.StakingCancelDeferredSlashCall(ctx, call)
		this.test = new testCalls.StakingCancelDeferredSlashCall(ctx, call)
		this.dev = new devCalls.StakingCancelDeferredSlashCall(ctx, call)
	}

	get isV1(): productionCalls.StakingCancelDeferredSlashCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingCancelDeferredSlashCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingChillCall {
	private readonly production: productionCalls.StakingChillCall
	private readonly stage: stageCalls.StakingChillCall
	private readonly test: testCalls.StakingChillCall
	private readonly dev: devCalls.StakingChillCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingChillCall(ctx, call)
		this.stage = new stageCalls.StakingChillCall(ctx, call)
		this.test = new testCalls.StakingChillCall(ctx, call)
		this.dev = new devCalls.StakingChillCall(ctx, call)
	}

	get isV1(): productionCalls.StakingChillCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingChillCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingChillOtherCall {
	private readonly production: productionCalls.StakingChillOtherCall
	private readonly stage: stageCalls.StakingChillOtherCall
	private readonly test: testCalls.StakingChillOtherCall
	private readonly dev: devCalls.StakingChillOtherCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingChillOtherCall(ctx, call)
		this.stage = new stageCalls.StakingChillOtherCall(ctx, call)
		this.test = new testCalls.StakingChillOtherCall(ctx, call)
		this.dev = new devCalls.StakingChillOtherCall(ctx, call)
	}

	get isV42(): productionCalls.StakingChillOtherCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingChillOtherCall['asV42'] {
		return this.production.asV42
	}
}

export class StakingForceApplyMinCommissionCall {
	private readonly production: productionCalls.StakingForceApplyMinCommissionCall
	private readonly stage: stageCalls.StakingForceApplyMinCommissionCall
	private readonly test: testCalls.StakingForceApplyMinCommissionCall
	private readonly dev: devCalls.StakingForceApplyMinCommissionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceApplyMinCommissionCall(ctx, call)
		this.stage = new stageCalls.StakingForceApplyMinCommissionCall(ctx, call)
		this.test = new testCalls.StakingForceApplyMinCommissionCall(ctx, call)
		this.dev = new devCalls.StakingForceApplyMinCommissionCall(ctx, call)
	}

	get isV42(): productionCalls.StakingForceApplyMinCommissionCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingForceApplyMinCommissionCall['asV42'] {
		return this.production.asV42
	}
}

export class StakingForceNewEraCall {
	private readonly production: productionCalls.StakingForceNewEraCall
	private readonly stage: stageCalls.StakingForceNewEraCall
	private readonly test: testCalls.StakingForceNewEraCall
	private readonly dev: devCalls.StakingForceNewEraCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNewEraCall(ctx, call)
		this.stage = new stageCalls.StakingForceNewEraCall(ctx, call)
		this.test = new testCalls.StakingForceNewEraCall(ctx, call)
		this.dev = new devCalls.StakingForceNewEraCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNewEraCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNewEraCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingForceNewEraAlwaysCall {
	private readonly production: productionCalls.StakingForceNewEraAlwaysCall
	private readonly stage: stageCalls.StakingForceNewEraAlwaysCall
	private readonly test: testCalls.StakingForceNewEraAlwaysCall
	private readonly dev: devCalls.StakingForceNewEraAlwaysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNewEraAlwaysCall(ctx, call)
		this.stage = new stageCalls.StakingForceNewEraAlwaysCall(ctx, call)
		this.test = new testCalls.StakingForceNewEraAlwaysCall(ctx, call)
		this.dev = new devCalls.StakingForceNewEraAlwaysCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNewEraAlwaysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNewEraAlwaysCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingForceNoErasCall {
	private readonly production: productionCalls.StakingForceNoErasCall
	private readonly stage: stageCalls.StakingForceNoErasCall
	private readonly test: testCalls.StakingForceNoErasCall
	private readonly dev: devCalls.StakingForceNoErasCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNoErasCall(ctx, call)
		this.stage = new stageCalls.StakingForceNoErasCall(ctx, call)
		this.test = new testCalls.StakingForceNoErasCall(ctx, call)
		this.dev = new devCalls.StakingForceNoErasCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNoErasCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNoErasCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingForceUnstakeCall {
	private readonly production: productionCalls.StakingForceUnstakeCall
	private readonly stage: stageCalls.StakingForceUnstakeCall
	private readonly test: testCalls.StakingForceUnstakeCall
	private readonly dev: devCalls.StakingForceUnstakeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceUnstakeCall(ctx, call)
		this.stage = new stageCalls.StakingForceUnstakeCall(ctx, call)
		this.test = new testCalls.StakingForceUnstakeCall(ctx, call)
		this.dev = new devCalls.StakingForceUnstakeCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceUnstakeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceUnstakeCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingIncreaseValidatorCountCall {
	private readonly production: productionCalls.StakingIncreaseValidatorCountCall
	private readonly stage: stageCalls.StakingIncreaseValidatorCountCall
	private readonly test: testCalls.StakingIncreaseValidatorCountCall
	private readonly dev: devCalls.StakingIncreaseValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingIncreaseValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingIncreaseValidatorCountCall(ctx, call)
		this.test = new testCalls.StakingIncreaseValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingIncreaseValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingIncreaseValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingIncreaseValidatorCountCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingKickCall {
	private readonly production: productionCalls.StakingKickCall
	private readonly stage: stageCalls.StakingKickCall
	private readonly test: testCalls.StakingKickCall
	private readonly dev: devCalls.StakingKickCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingKickCall(ctx, call)
		this.stage = new stageCalls.StakingKickCall(ctx, call)
		this.test = new testCalls.StakingKickCall(ctx, call)
		this.dev = new devCalls.StakingKickCall(ctx, call)
	}

	get isV1(): productionCalls.StakingKickCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingKickCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingNominateCall {
	private readonly production: productionCalls.StakingNominateCall
	private readonly stage: stageCalls.StakingNominateCall
	private readonly test: testCalls.StakingNominateCall
	private readonly dev: devCalls.StakingNominateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingNominateCall(ctx, call)
		this.stage = new stageCalls.StakingNominateCall(ctx, call)
		this.test = new testCalls.StakingNominateCall(ctx, call)
		this.dev = new devCalls.StakingNominateCall(ctx, call)
	}

	get isV1(): productionCalls.StakingNominateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingNominateCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingPayoutStakersCall {
	private readonly production: productionCalls.StakingPayoutStakersCall
	private readonly stage: stageCalls.StakingPayoutStakersCall
	private readonly test: testCalls.StakingPayoutStakersCall
	private readonly dev: devCalls.StakingPayoutStakersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingPayoutStakersCall(ctx, call)
		this.stage = new stageCalls.StakingPayoutStakersCall(ctx, call)
		this.test = new testCalls.StakingPayoutStakersCall(ctx, call)
		this.dev = new devCalls.StakingPayoutStakersCall(ctx, call)
	}

	get isV1(): productionCalls.StakingPayoutStakersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingPayoutStakersCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingReapStashCall {
	private readonly production: productionCalls.StakingReapStashCall
	private readonly stage: stageCalls.StakingReapStashCall
	private readonly test: testCalls.StakingReapStashCall
	private readonly dev: devCalls.StakingReapStashCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingReapStashCall(ctx, call)
		this.stage = new stageCalls.StakingReapStashCall(ctx, call)
		this.test = new testCalls.StakingReapStashCall(ctx, call)
		this.dev = new devCalls.StakingReapStashCall(ctx, call)
	}

	get isV1(): productionCalls.StakingReapStashCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingReapStashCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingRebondCall {
	private readonly production: productionCalls.StakingRebondCall
	private readonly stage: stageCalls.StakingRebondCall
	private readonly test: testCalls.StakingRebondCall
	private readonly dev: devCalls.StakingRebondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingRebondCall(ctx, call)
		this.stage = new stageCalls.StakingRebondCall(ctx, call)
		this.test = new testCalls.StakingRebondCall(ctx, call)
		this.dev = new devCalls.StakingRebondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingRebondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingRebondCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingScaleValidatorCountCall {
	private readonly production: productionCalls.StakingScaleValidatorCountCall
	private readonly stage: stageCalls.StakingScaleValidatorCountCall
	private readonly test: testCalls.StakingScaleValidatorCountCall
	private readonly dev: devCalls.StakingScaleValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingScaleValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingScaleValidatorCountCall(ctx, call)
		this.test = new testCalls.StakingScaleValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingScaleValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingScaleValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingScaleValidatorCountCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSetControllerCall {
	private readonly production: productionCalls.StakingSetControllerCall
	private readonly stage: stageCalls.StakingSetControllerCall
	private readonly test: testCalls.StakingSetControllerCall
	private readonly dev: devCalls.StakingSetControllerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetControllerCall(ctx, call)
		this.stage = new stageCalls.StakingSetControllerCall(ctx, call)
		this.test = new testCalls.StakingSetControllerCall(ctx, call)
		this.dev = new devCalls.StakingSetControllerCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetControllerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetControllerCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSetHistoryDepthCall {
	private readonly production: productionCalls.StakingSetHistoryDepthCall
	private readonly stage: stageCalls.StakingSetHistoryDepthCall
	private readonly test: testCalls.StakingSetHistoryDepthCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetHistoryDepthCall(ctx, call)
		this.stage = new stageCalls.StakingSetHistoryDepthCall(ctx, call)
		this.test = new testCalls.StakingSetHistoryDepthCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetHistoryDepthCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetHistoryDepthCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSetInvulnerablesCall {
	private readonly production: productionCalls.StakingSetInvulnerablesCall
	private readonly stage: stageCalls.StakingSetInvulnerablesCall
	private readonly test: testCalls.StakingSetInvulnerablesCall
	private readonly dev: devCalls.StakingSetInvulnerablesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetInvulnerablesCall(ctx, call)
		this.stage = new stageCalls.StakingSetInvulnerablesCall(ctx, call)
		this.test = new testCalls.StakingSetInvulnerablesCall(ctx, call)
		this.dev = new devCalls.StakingSetInvulnerablesCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetInvulnerablesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetInvulnerablesCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSetMinCommissionCall {
	private readonly production: productionCalls.StakingSetMinCommissionCall
	private readonly stage: stageCalls.StakingSetMinCommissionCall
	private readonly test: testCalls.StakingSetMinCommissionCall
	private readonly dev: devCalls.StakingSetMinCommissionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetMinCommissionCall(ctx, call)
		this.stage = new stageCalls.StakingSetMinCommissionCall(ctx, call)
		this.test = new testCalls.StakingSetMinCommissionCall(ctx, call)
		this.dev = new devCalls.StakingSetMinCommissionCall(ctx, call)
	}

	get isV53(): productionCalls.StakingSetMinCommissionCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.StakingSetMinCommissionCall['asV53'] {
		return this.production.asV53
	}
}

export class StakingSetPayeeCall {
	private readonly production: productionCalls.StakingSetPayeeCall
	private readonly stage: stageCalls.StakingSetPayeeCall
	private readonly test: testCalls.StakingSetPayeeCall
	private readonly dev: devCalls.StakingSetPayeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetPayeeCall(ctx, call)
		this.stage = new stageCalls.StakingSetPayeeCall(ctx, call)
		this.test = new testCalls.StakingSetPayeeCall(ctx, call)
		this.dev = new devCalls.StakingSetPayeeCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetPayeeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetPayeeCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSetStakingConfigsCall {
	private readonly production: productionCalls.StakingSetStakingConfigsCall
	private readonly stage: stageCalls.StakingSetStakingConfigsCall
	private readonly test: testCalls.StakingSetStakingConfigsCall
	private readonly dev: devCalls.StakingSetStakingConfigsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetStakingConfigsCall(ctx, call)
		this.stage = new stageCalls.StakingSetStakingConfigsCall(ctx, call)
		this.test = new testCalls.StakingSetStakingConfigsCall(ctx, call)
		this.dev = new devCalls.StakingSetStakingConfigsCall(ctx, call)
	}

	get isV42(): productionCalls.StakingSetStakingConfigsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingSetStakingConfigsCall['asV42'] {
		return this.production.asV42
	}
}

export class StakingSetValidatorCountCall {
	private readonly production: productionCalls.StakingSetValidatorCountCall
	private readonly stage: stageCalls.StakingSetValidatorCountCall
	private readonly test: testCalls.StakingSetValidatorCountCall
	private readonly dev: devCalls.StakingSetValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingSetValidatorCountCall(ctx, call)
		this.test = new testCalls.StakingSetValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingSetValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetValidatorCountCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSubmitElectionSolutionCall {
	private readonly production: productionCalls.StakingSubmitElectionSolutionCall
	private readonly stage: stageCalls.StakingSubmitElectionSolutionCall
	private readonly test: testCalls.StakingSubmitElectionSolutionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSubmitElectionSolutionCall(ctx, call)
		this.stage = new stageCalls.StakingSubmitElectionSolutionCall(ctx, call)
		this.test = new testCalls.StakingSubmitElectionSolutionCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSubmitElectionSolutionCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSubmitElectionSolutionCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingSubmitElectionSolutionUnsignedCall {
	private readonly production: productionCalls.StakingSubmitElectionSolutionUnsignedCall
	private readonly stage: stageCalls.StakingSubmitElectionSolutionUnsignedCall
	private readonly test: testCalls.StakingSubmitElectionSolutionUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSubmitElectionSolutionUnsignedCall(ctx, call)
		this.stage = new stageCalls.StakingSubmitElectionSolutionUnsignedCall(ctx, call)
		this.test = new testCalls.StakingSubmitElectionSolutionUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSubmitElectionSolutionUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSubmitElectionSolutionUnsignedCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingUnbondCall {
	private readonly production: productionCalls.StakingUnbondCall
	private readonly stage: stageCalls.StakingUnbondCall
	private readonly test: testCalls.StakingUnbondCall
	private readonly dev: devCalls.StakingUnbondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingUnbondCall(ctx, call)
		this.stage = new stageCalls.StakingUnbondCall(ctx, call)
		this.test = new testCalls.StakingUnbondCall(ctx, call)
		this.dev = new devCalls.StakingUnbondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingUnbondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingUnbondCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingValidateCall {
	private readonly production: productionCalls.StakingValidateCall
	private readonly stage: stageCalls.StakingValidateCall
	private readonly test: testCalls.StakingValidateCall
	private readonly dev: devCalls.StakingValidateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingValidateCall(ctx, call)
		this.stage = new stageCalls.StakingValidateCall(ctx, call)
		this.test = new testCalls.StakingValidateCall(ctx, call)
		this.dev = new devCalls.StakingValidateCall(ctx, call)
	}

	get isV1(): productionCalls.StakingValidateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingValidateCall['asV1'] {
		return this.production.asV1
	}
}

export class StakingWithdrawUnbondedCall {
	private readonly production: productionCalls.StakingWithdrawUnbondedCall
	private readonly stage: stageCalls.StakingWithdrawUnbondedCall
	private readonly test: testCalls.StakingWithdrawUnbondedCall
	private readonly dev: devCalls.StakingWithdrawUnbondedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingWithdrawUnbondedCall(ctx, call)
		this.stage = new stageCalls.StakingWithdrawUnbondedCall(ctx, call)
		this.test = new testCalls.StakingWithdrawUnbondedCall(ctx, call)
		this.dev = new devCalls.StakingWithdrawUnbondedCall(ctx, call)
	}

	get isV1(): productionCalls.StakingWithdrawUnbondedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingWithdrawUnbondedCall['asV1'] {
		return this.production.asV1
	}
}

export class SubstrateBridgeInboundChannelSubmitCall {
	private readonly production: productionCalls.SubstrateBridgeInboundChannelSubmitCall
	private readonly stage: stageCalls.SubstrateBridgeInboundChannelSubmitCall
	private readonly test: testCalls.SubstrateBridgeInboundChannelSubmitCall
	private readonly dev: devCalls.SubstrateBridgeInboundChannelSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
		this.stage = new stageCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
	}

	get isV64(): productionCalls.SubstrateBridgeInboundChannelSubmitCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.SubstrateBridgeInboundChannelSubmitCall['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV54'] {
		return this.stage.asV54
	}
	get isV57Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV57'] {
		return this.stage.asV57
	}
}

export class SudoSetKeyCall {
	private readonly production: productionCalls.SudoSetKeyCall
	private readonly stage: stageCalls.SudoSetKeyCall
	private readonly test: testCalls.SudoSetKeyCall
	private readonly dev: devCalls.SudoSetKeyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSetKeyCall(ctx, call)
		this.stage = new stageCalls.SudoSetKeyCall(ctx, call)
		this.test = new testCalls.SudoSetKeyCall(ctx, call)
		this.dev = new devCalls.SudoSetKeyCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSetKeyCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSetKeyCall['asV22'] {
		return this.production.asV22
	}
}

export class SudoSudoCall {
	private readonly production: productionCalls.SudoSudoCall
	private readonly stage: stageCalls.SudoSudoCall
	private readonly test: testCalls.SudoSudoCall
	private readonly dev: devCalls.SudoSudoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoCall(ctx, call)
		this.stage = new stageCalls.SudoSudoCall(ctx, call)
		this.test = new testCalls.SudoSudoCall(ctx, call)
		this.dev = new devCalls.SudoSudoCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SudoSudoCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SudoSudoCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SudoSudoCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SudoSudoCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SudoSudoCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SudoSudoCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SudoSudoCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SudoSudoCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SudoSudoCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SudoSudoCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SudoSudoCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SudoSudoCall['asV64'] {
		return this.dev.asV64
	}
}

export class SudoSudoAsCall {
	private readonly production: productionCalls.SudoSudoAsCall
	private readonly stage: stageCalls.SudoSudoAsCall
	private readonly test: testCalls.SudoSudoAsCall
	private readonly dev: devCalls.SudoSudoAsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoAsCall(ctx, call)
		this.stage = new stageCalls.SudoSudoAsCall(ctx, call)
		this.test = new testCalls.SudoSudoAsCall(ctx, call)
		this.dev = new devCalls.SudoSudoAsCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoAsCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoAsCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoAsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoAsCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoAsCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoAsCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoAsCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoAsCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoAsCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoAsCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoAsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoAsCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoAsCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoAsCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoAsCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoAsCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoAsCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoAsCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoAsCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoAsCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoAsCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoAsCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoAsCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoAsCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoAsCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoAsCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoAsCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoAsCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoAsCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoAsCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoAsCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoAsCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoAsCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoAsCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoAsCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoAsCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SudoSudoAsCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SudoSudoAsCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SudoSudoAsCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SudoSudoAsCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SudoSudoAsCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SudoSudoAsCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SudoSudoAsCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SudoSudoAsCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SudoSudoAsCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SudoSudoAsCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SudoSudoAsCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SudoSudoAsCall['asV64'] {
		return this.dev.asV64
	}
}

export class SudoSudoUncheckedWeightCall {
	private readonly production: productionCalls.SudoSudoUncheckedWeightCall
	private readonly stage: stageCalls.SudoSudoUncheckedWeightCall
	private readonly test: testCalls.SudoSudoUncheckedWeightCall
	private readonly dev: devCalls.SudoSudoUncheckedWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoUncheckedWeightCall(ctx, call)
		this.stage = new stageCalls.SudoSudoUncheckedWeightCall(ctx, call)
		this.test = new testCalls.SudoSudoUncheckedWeightCall(ctx, call)
		this.dev = new devCalls.SudoSudoUncheckedWeightCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoUncheckedWeightCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoUncheckedWeightCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.SudoSudoUncheckedWeightCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.SudoSudoUncheckedWeightCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.SudoSudoUncheckedWeightCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.SudoSudoUncheckedWeightCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.SudoSudoUncheckedWeightCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.SudoSudoUncheckedWeightCall['asV64'] {
		return this.dev.asV64
	}
}

export class SystemFillBlockCall {
	private readonly production: productionCalls.SystemFillBlockCall
	private readonly stage: stageCalls.SystemFillBlockCall
	private readonly test: testCalls.SystemFillBlockCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemFillBlockCall(ctx, call)
		this.stage = new stageCalls.SystemFillBlockCall(ctx, call)
		this.test = new testCalls.SystemFillBlockCall(ctx, call)
	}

	get isV1(): productionCalls.SystemFillBlockCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemFillBlockCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemKillPrefixCall {
	private readonly production: productionCalls.SystemKillPrefixCall
	private readonly stage: stageCalls.SystemKillPrefixCall
	private readonly test: testCalls.SystemKillPrefixCall
	private readonly dev: devCalls.SystemKillPrefixCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemKillPrefixCall(ctx, call)
		this.stage = new stageCalls.SystemKillPrefixCall(ctx, call)
		this.test = new testCalls.SystemKillPrefixCall(ctx, call)
		this.dev = new devCalls.SystemKillPrefixCall(ctx, call)
	}

	get isV1(): productionCalls.SystemKillPrefixCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemKillPrefixCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemKillStorageCall {
	private readonly production: productionCalls.SystemKillStorageCall
	private readonly stage: stageCalls.SystemKillStorageCall
	private readonly test: testCalls.SystemKillStorageCall
	private readonly dev: devCalls.SystemKillStorageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemKillStorageCall(ctx, call)
		this.stage = new stageCalls.SystemKillStorageCall(ctx, call)
		this.test = new testCalls.SystemKillStorageCall(ctx, call)
		this.dev = new devCalls.SystemKillStorageCall(ctx, call)
	}

	get isV1(): productionCalls.SystemKillStorageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemKillStorageCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemRemarkCall {
	private readonly production: productionCalls.SystemRemarkCall
	private readonly stage: stageCalls.SystemRemarkCall
	private readonly test: testCalls.SystemRemarkCall
	private readonly dev: devCalls.SystemRemarkCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemRemarkCall(ctx, call)
		this.stage = new stageCalls.SystemRemarkCall(ctx, call)
		this.test = new testCalls.SystemRemarkCall(ctx, call)
		this.dev = new devCalls.SystemRemarkCall(ctx, call)
	}

	get isV1(): productionCalls.SystemRemarkCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemRemarkCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemRemarkWithEventCall {
	private readonly production: productionCalls.SystemRemarkWithEventCall
	private readonly stage: stageCalls.SystemRemarkWithEventCall
	private readonly test: testCalls.SystemRemarkWithEventCall
	private readonly dev: devCalls.SystemRemarkWithEventCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemRemarkWithEventCall(ctx, call)
		this.stage = new stageCalls.SystemRemarkWithEventCall(ctx, call)
		this.test = new testCalls.SystemRemarkWithEventCall(ctx, call)
		this.dev = new devCalls.SystemRemarkWithEventCall(ctx, call)
	}

	get isV42(): productionCalls.SystemRemarkWithEventCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SystemRemarkWithEventCall['asV42'] {
		return this.production.asV42
	}
}

export class SystemSetChangesTrieConfigCall {
	private readonly production: productionCalls.SystemSetChangesTrieConfigCall
	private readonly stage: stageCalls.SystemSetChangesTrieConfigCall
	private readonly test: testCalls.SystemSetChangesTrieConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetChangesTrieConfigCall(ctx, call)
		this.stage = new stageCalls.SystemSetChangesTrieConfigCall(ctx, call)
		this.test = new testCalls.SystemSetChangesTrieConfigCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetChangesTrieConfigCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetChangesTrieConfigCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemSetCodeCall {
	private readonly production: productionCalls.SystemSetCodeCall
	private readonly stage: stageCalls.SystemSetCodeCall
	private readonly test: testCalls.SystemSetCodeCall
	private readonly dev: devCalls.SystemSetCodeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetCodeCall(ctx, call)
		this.stage = new stageCalls.SystemSetCodeCall(ctx, call)
		this.test = new testCalls.SystemSetCodeCall(ctx, call)
		this.dev = new devCalls.SystemSetCodeCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetCodeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetCodeCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemSetCodeWithoutChecksCall {
	private readonly production: productionCalls.SystemSetCodeWithoutChecksCall
	private readonly stage: stageCalls.SystemSetCodeWithoutChecksCall
	private readonly test: testCalls.SystemSetCodeWithoutChecksCall
	private readonly dev: devCalls.SystemSetCodeWithoutChecksCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetCodeWithoutChecksCall(ctx, call)
		this.stage = new stageCalls.SystemSetCodeWithoutChecksCall(ctx, call)
		this.test = new testCalls.SystemSetCodeWithoutChecksCall(ctx, call)
		this.dev = new devCalls.SystemSetCodeWithoutChecksCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetCodeWithoutChecksCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetCodeWithoutChecksCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemSetHeapPagesCall {
	private readonly production: productionCalls.SystemSetHeapPagesCall
	private readonly stage: stageCalls.SystemSetHeapPagesCall
	private readonly test: testCalls.SystemSetHeapPagesCall
	private readonly dev: devCalls.SystemSetHeapPagesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetHeapPagesCall(ctx, call)
		this.stage = new stageCalls.SystemSetHeapPagesCall(ctx, call)
		this.test = new testCalls.SystemSetHeapPagesCall(ctx, call)
		this.dev = new devCalls.SystemSetHeapPagesCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetHeapPagesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetHeapPagesCall['asV1'] {
		return this.production.asV1
	}
}

export class SystemSetStorageCall {
	private readonly production: productionCalls.SystemSetStorageCall
	private readonly stage: stageCalls.SystemSetStorageCall
	private readonly test: testCalls.SystemSetStorageCall
	private readonly dev: devCalls.SystemSetStorageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetStorageCall(ctx, call)
		this.stage = new stageCalls.SystemSetStorageCall(ctx, call)
		this.test = new testCalls.SystemSetStorageCall(ctx, call)
		this.dev = new devCalls.SystemSetStorageCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetStorageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetStorageCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalCommitteeCloseCall {
	private readonly production: productionCalls.TechnicalCommitteeCloseCall
	private readonly stage: stageCalls.TechnicalCommitteeCloseCall
	private readonly test: testCalls.TechnicalCommitteeCloseCall
	private readonly dev: devCalls.TechnicalCommitteeCloseCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeCloseCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeCloseCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeCloseCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeCloseCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeCloseCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeCloseCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.TechnicalCommitteeCloseCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeCloseCall['asV53'] {
		return this.production.asV53
	}
}

export class TechnicalCommitteeCloseOldWeightCall {
	private readonly production: productionCalls.TechnicalCommitteeCloseOldWeightCall
	private readonly stage: stageCalls.TechnicalCommitteeCloseOldWeightCall
	private readonly test: testCalls.TechnicalCommitteeCloseOldWeightCall
	private readonly dev: devCalls.TechnicalCommitteeCloseOldWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
	}

	get isV53(): productionCalls.TechnicalCommitteeCloseOldWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeCloseOldWeightCall['asV53'] {
		return this.production.asV53
	}
}

export class TechnicalCommitteeDisapproveProposalCall {
	private readonly production: productionCalls.TechnicalCommitteeDisapproveProposalCall
	private readonly stage: stageCalls.TechnicalCommitteeDisapproveProposalCall
	private readonly test: testCalls.TechnicalCommitteeDisapproveProposalCall
	private readonly dev: devCalls.TechnicalCommitteeDisapproveProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeDisapproveProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeDisapproveProposalCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalCommitteeExecuteCall {
	private readonly production: productionCalls.TechnicalCommitteeExecuteCall
	private readonly stage: stageCalls.TechnicalCommitteeExecuteCall
	private readonly test: testCalls.TechnicalCommitteeExecuteCall
	private readonly dev: devCalls.TechnicalCommitteeExecuteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeExecuteCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeExecuteCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeExecuteCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeExecuteCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeExecuteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeExecuteCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.TechnicalCommitteeExecuteCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.TechnicalCommitteeExecuteCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.TechnicalCommitteeExecuteCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.TechnicalCommitteeExecuteCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.TechnicalCommitteeExecuteCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.TechnicalCommitteeExecuteCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.TechnicalCommitteeExecuteCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.TechnicalCommitteeExecuteCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.TechnicalCommitteeExecuteCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.TechnicalCommitteeExecuteCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.TechnicalCommitteeExecuteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.TechnicalCommitteeExecuteCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.TechnicalCommitteeExecuteCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.TechnicalCommitteeExecuteCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.TechnicalCommitteeExecuteCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.TechnicalCommitteeExecuteCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.TechnicalCommitteeExecuteCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.TechnicalCommitteeExecuteCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.TechnicalCommitteeExecuteCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.TechnicalCommitteeExecuteCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.TechnicalCommitteeExecuteCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.TechnicalCommitteeExecuteCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.TechnicalCommitteeExecuteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TechnicalCommitteeExecuteCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.TechnicalCommitteeExecuteCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.TechnicalCommitteeExecuteCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.TechnicalCommitteeExecuteCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.TechnicalCommitteeExecuteCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.TechnicalCommitteeExecuteCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.TechnicalCommitteeExecuteCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.TechnicalCommitteeExecuteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.TechnicalCommitteeExecuteCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.TechnicalCommitteeExecuteCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.TechnicalCommitteeExecuteCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.TechnicalCommitteeExecuteCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeExecuteCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.TechnicalCommitteeExecuteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.TechnicalCommitteeExecuteCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.TechnicalCommitteeExecuteCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.TechnicalCommitteeExecuteCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.TechnicalCommitteeExecuteCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.TechnicalCommitteeExecuteCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.TechnicalCommitteeExecuteCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.TechnicalCommitteeExecuteCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.TechnicalCommitteeExecuteCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.TechnicalCommitteeExecuteCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.TechnicalCommitteeExecuteCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.TechnicalCommitteeExecuteCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.TechnicalCommitteeExecuteCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.TechnicalCommitteeExecuteCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.TechnicalCommitteeExecuteCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.TechnicalCommitteeExecuteCall['asV64'] {
		return this.dev.asV64
	}
}

export class TechnicalCommitteeProposeCall {
	private readonly production: productionCalls.TechnicalCommitteeProposeCall
	private readonly stage: stageCalls.TechnicalCommitteeProposeCall
	private readonly test: testCalls.TechnicalCommitteeProposeCall
	private readonly dev: devCalls.TechnicalCommitteeProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeProposeCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeProposeCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeProposeCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeProposeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.TechnicalCommitteeProposeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.TechnicalCommitteeProposeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.TechnicalCommitteeProposeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.TechnicalCommitteeProposeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.TechnicalCommitteeProposeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.TechnicalCommitteeProposeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.TechnicalCommitteeProposeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.TechnicalCommitteeProposeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.TechnicalCommitteeProposeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.TechnicalCommitteeProposeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.TechnicalCommitteeProposeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.TechnicalCommitteeProposeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.TechnicalCommitteeProposeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.TechnicalCommitteeProposeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.TechnicalCommitteeProposeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.TechnicalCommitteeProposeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.TechnicalCommitteeProposeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.TechnicalCommitteeProposeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.TechnicalCommitteeProposeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.TechnicalCommitteeProposeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.TechnicalCommitteeProposeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.TechnicalCommitteeProposeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.TechnicalCommitteeProposeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TechnicalCommitteeProposeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.TechnicalCommitteeProposeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.TechnicalCommitteeProposeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.TechnicalCommitteeProposeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.TechnicalCommitteeProposeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.TechnicalCommitteeProposeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.TechnicalCommitteeProposeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.TechnicalCommitteeProposeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.TechnicalCommitteeProposeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.TechnicalCommitteeProposeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.TechnicalCommitteeProposeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.TechnicalCommitteeProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.TechnicalCommitteeProposeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.TechnicalCommitteeProposeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.TechnicalCommitteeProposeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.TechnicalCommitteeProposeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.TechnicalCommitteeProposeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.TechnicalCommitteeProposeCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.TechnicalCommitteeProposeCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.TechnicalCommitteeProposeCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.TechnicalCommitteeProposeCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.TechnicalCommitteeProposeCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.TechnicalCommitteeProposeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.TechnicalCommitteeProposeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.TechnicalCommitteeProposeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.TechnicalCommitteeProposeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.TechnicalCommitteeProposeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.TechnicalCommitteeProposeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.TechnicalCommitteeProposeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.TechnicalCommitteeProposeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.TechnicalCommitteeProposeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.TechnicalCommitteeProposeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.TechnicalCommitteeProposeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.TechnicalCommitteeProposeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.TechnicalCommitteeProposeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.TechnicalCommitteeProposeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.TechnicalCommitteeProposeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.TechnicalCommitteeProposeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.TechnicalCommitteeProposeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.TechnicalCommitteeProposeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.TechnicalCommitteeProposeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.TechnicalCommitteeProposeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.TechnicalCommitteeProposeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.TechnicalCommitteeProposeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.TechnicalCommitteeProposeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.TechnicalCommitteeProposeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.TechnicalCommitteeProposeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.TechnicalCommitteeProposeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.TechnicalCommitteeProposeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.TechnicalCommitteeProposeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.TechnicalCommitteeProposeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.TechnicalCommitteeProposeCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.TechnicalCommitteeProposeCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.TechnicalCommitteeProposeCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.TechnicalCommitteeProposeCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.TechnicalCommitteeProposeCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.TechnicalCommitteeProposeCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.TechnicalCommitteeProposeCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.TechnicalCommitteeProposeCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.TechnicalCommitteeProposeCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.TechnicalCommitteeProposeCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.TechnicalCommitteeProposeCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.TechnicalCommitteeProposeCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.TechnicalCommitteeProposeCall['asV64'] {
		return this.dev.asV64
	}
}

export class TechnicalCommitteeSetMembersCall {
	private readonly production: productionCalls.TechnicalCommitteeSetMembersCall
	private readonly stage: stageCalls.TechnicalCommitteeSetMembersCall
	private readonly test: testCalls.TechnicalCommitteeSetMembersCall
	private readonly dev: devCalls.TechnicalCommitteeSetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeSetMembersCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeSetMembersCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeSetMembersCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeSetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeSetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeSetMembersCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalCommitteeVoteCall {
	private readonly production: productionCalls.TechnicalCommitteeVoteCall
	private readonly stage: stageCalls.TechnicalCommitteeVoteCall
	private readonly test: testCalls.TechnicalCommitteeVoteCall
	private readonly dev: devCalls.TechnicalCommitteeVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeVoteCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeVoteCall(ctx, call)
		this.test = new testCalls.TechnicalCommitteeVoteCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeVoteCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeVoteCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipAddMemberCall {
	private readonly production: productionCalls.TechnicalMembershipAddMemberCall
	private readonly stage: stageCalls.TechnicalMembershipAddMemberCall
	private readonly test: testCalls.TechnicalMembershipAddMemberCall
	private readonly dev: devCalls.TechnicalMembershipAddMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipAddMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipAddMemberCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipAddMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipAddMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipAddMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipAddMemberCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipChangeKeyCall {
	private readonly production: productionCalls.TechnicalMembershipChangeKeyCall
	private readonly stage: stageCalls.TechnicalMembershipChangeKeyCall
	private readonly test: testCalls.TechnicalMembershipChangeKeyCall
	private readonly dev: devCalls.TechnicalMembershipChangeKeyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipChangeKeyCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipChangeKeyCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipChangeKeyCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipChangeKeyCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipChangeKeyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipChangeKeyCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipClearPrimeCall {
	private readonly production: productionCalls.TechnicalMembershipClearPrimeCall
	private readonly stage: stageCalls.TechnicalMembershipClearPrimeCall
	private readonly test: testCalls.TechnicalMembershipClearPrimeCall
	private readonly dev: devCalls.TechnicalMembershipClearPrimeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipClearPrimeCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipClearPrimeCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipClearPrimeCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipClearPrimeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipClearPrimeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipClearPrimeCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipRemoveMemberCall {
	private readonly production: productionCalls.TechnicalMembershipRemoveMemberCall
	private readonly stage: stageCalls.TechnicalMembershipRemoveMemberCall
	private readonly test: testCalls.TechnicalMembershipRemoveMemberCall
	private readonly dev: devCalls.TechnicalMembershipRemoveMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipRemoveMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipRemoveMemberCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipResetMembersCall {
	private readonly production: productionCalls.TechnicalMembershipResetMembersCall
	private readonly stage: stageCalls.TechnicalMembershipResetMembersCall
	private readonly test: testCalls.TechnicalMembershipResetMembersCall
	private readonly dev: devCalls.TechnicalMembershipResetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipResetMembersCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipResetMembersCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipResetMembersCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipResetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipResetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipResetMembersCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipSetPrimeCall {
	private readonly production: productionCalls.TechnicalMembershipSetPrimeCall
	private readonly stage: stageCalls.TechnicalMembershipSetPrimeCall
	private readonly test: testCalls.TechnicalMembershipSetPrimeCall
	private readonly dev: devCalls.TechnicalMembershipSetPrimeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipSetPrimeCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipSetPrimeCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipSetPrimeCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipSetPrimeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipSetPrimeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipSetPrimeCall['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalMembershipSwapMemberCall {
	private readonly production: productionCalls.TechnicalMembershipSwapMemberCall
	private readonly stage: stageCalls.TechnicalMembershipSwapMemberCall
	private readonly test: testCalls.TechnicalMembershipSwapMemberCall
	private readonly dev: devCalls.TechnicalMembershipSwapMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipSwapMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipSwapMemberCall(ctx, call)
		this.test = new testCalls.TechnicalMembershipSwapMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipSwapMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipSwapMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipSwapMemberCall['asV1'] {
		return this.production.asV1
	}
}

export class TimestampSetCall {
	private readonly production: productionCalls.TimestampSetCall
	private readonly stage: stageCalls.TimestampSetCall
	private readonly test: testCalls.TimestampSetCall
	private readonly dev: devCalls.TimestampSetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TimestampSetCall(ctx, call)
		this.stage = new stageCalls.TimestampSetCall(ctx, call)
		this.test = new testCalls.TimestampSetCall(ctx, call)
		this.dev = new devCalls.TimestampSetCall(ctx, call)
	}

	get isV1(): productionCalls.TimestampSetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TimestampSetCall['asV1'] {
		return this.production.asV1
	}
}

export class TradingPairRegisterCall {
	private readonly production: productionCalls.TradingPairRegisterCall
	private readonly stage: stageCalls.TradingPairRegisterCall
	private readonly test: testCalls.TradingPairRegisterCall
	private readonly dev: devCalls.TradingPairRegisterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TradingPairRegisterCall(ctx, call)
		this.stage = new stageCalls.TradingPairRegisterCall(ctx, call)
		this.test = new testCalls.TradingPairRegisterCall(ctx, call)
		this.dev = new devCalls.TradingPairRegisterCall(ctx, call)
	}

	get isV1(): productionCalls.TradingPairRegisterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TradingPairRegisterCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.TradingPairRegisterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TradingPairRegisterCall['asV42'] {
		return this.production.asV42
	}
}

export class UtilityAsDerivativeCall {
	private readonly production: productionCalls.UtilityAsDerivativeCall
	private readonly stage: stageCalls.UtilityAsDerivativeCall
	private readonly test: testCalls.UtilityAsDerivativeCall
	private readonly dev: devCalls.UtilityAsDerivativeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityAsDerivativeCall(ctx, call)
		this.stage = new stageCalls.UtilityAsDerivativeCall(ctx, call)
		this.test = new testCalls.UtilityAsDerivativeCall(ctx, call)
		this.dev = new devCalls.UtilityAsDerivativeCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityAsDerivativeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityAsDerivativeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityAsDerivativeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityAsDerivativeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityAsDerivativeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityAsDerivativeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityAsDerivativeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityAsDerivativeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityAsDerivativeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityAsDerivativeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityAsDerivativeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityAsDerivativeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityAsDerivativeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityAsDerivativeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityAsDerivativeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityAsDerivativeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityAsDerivativeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityAsDerivativeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityAsDerivativeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityAsDerivativeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityAsDerivativeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityAsDerivativeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityAsDerivativeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityAsDerivativeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityAsDerivativeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityAsDerivativeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityAsDerivativeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityAsDerivativeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityAsDerivativeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityAsDerivativeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityAsDerivativeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityAsDerivativeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityAsDerivativeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityAsDerivativeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityAsDerivativeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityAsDerivativeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityAsDerivativeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityAsDerivativeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityAsDerivativeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityAsDerivativeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityAsDerivativeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityAsDerivativeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityAsDerivativeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityAsDerivativeCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityAsDerivativeCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityAsDerivativeCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityAsDerivativeCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityAsDerivativeCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.UtilityAsDerivativeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityAsDerivativeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityAsDerivativeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityAsDerivativeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityAsDerivativeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityAsDerivativeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityAsDerivativeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityAsDerivativeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityAsDerivativeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityAsDerivativeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityAsDerivativeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityAsDerivativeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityAsDerivativeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityAsDerivativeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityAsDerivativeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityAsDerivativeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityAsDerivativeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityAsDerivativeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityAsDerivativeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityAsDerivativeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityAsDerivativeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityAsDerivativeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityAsDerivativeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityAsDerivativeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityAsDerivativeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityAsDerivativeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityAsDerivativeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityAsDerivativeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityAsDerivativeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityAsDerivativeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityAsDerivativeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityAsDerivativeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityAsDerivativeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityAsDerivativeCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityAsDerivativeCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityAsDerivativeCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityAsDerivativeCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityAsDerivativeCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityAsDerivativeCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityAsDerivativeCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityAsDerivativeCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityAsDerivativeCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityAsDerivativeCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityAsDerivativeCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityAsDerivativeCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityAsDerivativeCall['asV64'] {
		return this.dev.asV64
	}
}

export class UtilityBatchCall {
	private readonly production: productionCalls.UtilityBatchCall
	private readonly stage: stageCalls.UtilityBatchCall
	private readonly test: testCalls.UtilityBatchCall
	private readonly dev: devCalls.UtilityBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityBatchCall(ctx, call)
		this.stage = new stageCalls.UtilityBatchCall(ctx, call)
		this.test = new testCalls.UtilityBatchCall(ctx, call)
		this.dev = new devCalls.UtilityBatchCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityBatchCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityBatchCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityBatchCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityBatchCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityBatchCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityBatchCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityBatchCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityBatchCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityBatchCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityBatchCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityBatchCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityBatchCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityBatchCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityBatchCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityBatchCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityBatchCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityBatchCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityBatchCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityBatchCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityBatchCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityBatchCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityBatchCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityBatchCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityBatchCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityBatchCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityBatchCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityBatchCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityBatchCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityBatchCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityBatchCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityBatchCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityBatchCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityBatchCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityBatchCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityBatchCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityBatchCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityBatchCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityBatchCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityBatchCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityBatchCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityBatchCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityBatchCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityBatchCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityBatchCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.UtilityBatchCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityBatchCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityBatchCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityBatchCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityBatchCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityBatchCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityBatchCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityBatchCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityBatchCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityBatchCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityBatchCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityBatchCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityBatchCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityBatchCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityBatchCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityBatchCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityBatchCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityBatchCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityBatchCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityBatchCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityBatchCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityBatchCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityBatchCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityBatchCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityBatchCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityBatchCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityBatchCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityBatchCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityBatchCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityBatchCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityBatchCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityBatchCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityBatchCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityBatchCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityBatchCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityBatchCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityBatchCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityBatchCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityBatchCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityBatchCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityBatchCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityBatchCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityBatchCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityBatchCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class UtilityBatchAllCall {
	private readonly production: productionCalls.UtilityBatchAllCall
	private readonly stage: stageCalls.UtilityBatchAllCall
	private readonly test: testCalls.UtilityBatchAllCall
	private readonly dev: devCalls.UtilityBatchAllCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityBatchAllCall(ctx, call)
		this.stage = new stageCalls.UtilityBatchAllCall(ctx, call)
		this.test = new testCalls.UtilityBatchAllCall(ctx, call)
		this.dev = new devCalls.UtilityBatchAllCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityBatchAllCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityBatchAllCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityBatchAllCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityBatchAllCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityBatchAllCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityBatchAllCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityBatchAllCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityBatchAllCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityBatchAllCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityBatchAllCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityBatchAllCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityBatchAllCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityBatchAllCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityBatchAllCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityBatchAllCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityBatchAllCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityBatchAllCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityBatchAllCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityBatchAllCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityBatchAllCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityBatchAllCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityBatchAllCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityBatchAllCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityBatchAllCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityBatchAllCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityBatchAllCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityBatchAllCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityBatchAllCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityBatchAllCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityBatchAllCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityBatchAllCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityBatchAllCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityBatchAllCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityBatchAllCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityBatchAllCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityBatchAllCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityBatchAllCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityBatchAllCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityBatchAllCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityBatchAllCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityBatchAllCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityBatchAllCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityBatchAllCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityBatchAllCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityBatchAllCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityBatchAllCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityBatchAllCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityBatchAllCall['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageCalls.UtilityBatchAllCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityBatchAllCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityBatchAllCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityBatchAllCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityBatchAllCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityBatchAllCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityBatchAllCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityBatchAllCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityBatchAllCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityBatchAllCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityBatchAllCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityBatchAllCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityBatchAllCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityBatchAllCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityBatchAllCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityBatchAllCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityBatchAllCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityBatchAllCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityBatchAllCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityBatchAllCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityBatchAllCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityBatchAllCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityBatchAllCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityBatchAllCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityBatchAllCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityBatchAllCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityBatchAllCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityBatchAllCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityBatchAllCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityBatchAllCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityBatchAllCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityBatchAllCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityBatchAllCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityBatchAllCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityBatchAllCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityBatchAllCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityBatchAllCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityBatchAllCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityBatchAllCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityBatchAllCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityBatchAllCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityBatchAllCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityBatchAllCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityBatchAllCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityBatchAllCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityBatchAllCall['asV64'] {
		return this.dev.asV64
	}
}

export class UtilityDispatchAsCall {
	private readonly production: productionCalls.UtilityDispatchAsCall
	private readonly stage: stageCalls.UtilityDispatchAsCall
	private readonly test: testCalls.UtilityDispatchAsCall
	private readonly dev: devCalls.UtilityDispatchAsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityDispatchAsCall(ctx, call)
		this.stage = new stageCalls.UtilityDispatchAsCall(ctx, call)
		this.test = new testCalls.UtilityDispatchAsCall(ctx, call)
		this.dev = new devCalls.UtilityDispatchAsCall(ctx, call)
	}

	get isV42(): productionCalls.UtilityDispatchAsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityDispatchAsCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityDispatchAsCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityDispatchAsCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityDispatchAsCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityDispatchAsCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityDispatchAsCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityDispatchAsCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityDispatchAsCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityDispatchAsCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityDispatchAsCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityDispatchAsCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityDispatchAsCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityDispatchAsCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityDispatchAsCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityDispatchAsCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityDispatchAsCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityDispatchAsCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityDispatchAsCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityDispatchAsCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityDispatchAsCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityDispatchAsCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityDispatchAsCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityDispatchAsCall['asV64'] {
		return this.production.asV64
	}
	get isV42Stage(): stageCalls.UtilityDispatchAsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityDispatchAsCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityDispatchAsCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityDispatchAsCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityDispatchAsCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityDispatchAsCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityDispatchAsCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityDispatchAsCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityDispatchAsCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityDispatchAsCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityDispatchAsCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityDispatchAsCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityDispatchAsCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityDispatchAsCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityDispatchAsCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityDispatchAsCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityDispatchAsCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityDispatchAsCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityDispatchAsCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityDispatchAsCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityDispatchAsCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityDispatchAsCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityDispatchAsCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityDispatchAsCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityDispatchAsCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityDispatchAsCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityDispatchAsCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityDispatchAsCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityDispatchAsCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityDispatchAsCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityDispatchAsCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityDispatchAsCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityDispatchAsCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityDispatchAsCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityDispatchAsCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityDispatchAsCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityDispatchAsCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityDispatchAsCall['asV64'] {
		return this.dev.asV64
	}
}

export class UtilityForceBatchCall {
	private readonly production: productionCalls.UtilityForceBatchCall
	private readonly stage: stageCalls.UtilityForceBatchCall
	private readonly test: testCalls.UtilityForceBatchCall
	private readonly dev: devCalls.UtilityForceBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityForceBatchCall(ctx, call)
		this.stage = new stageCalls.UtilityForceBatchCall(ctx, call)
		this.test = new testCalls.UtilityForceBatchCall(ctx, call)
		this.dev = new devCalls.UtilityForceBatchCall(ctx, call)
	}

	get isV42(): productionCalls.UtilityForceBatchCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityForceBatchCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityForceBatchCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityForceBatchCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityForceBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityForceBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityForceBatchCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityForceBatchCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityForceBatchCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityForceBatchCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityForceBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityForceBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityForceBatchCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityForceBatchCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityForceBatchCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityForceBatchCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityForceBatchCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityForceBatchCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityForceBatchCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityForceBatchCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityForceBatchCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityForceBatchCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityForceBatchCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityForceBatchCall['asV64'] {
		return this.production.asV64
	}
	get isV42Stage(): stageCalls.UtilityForceBatchCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityForceBatchCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityForceBatchCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityForceBatchCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityForceBatchCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityForceBatchCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityForceBatchCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityForceBatchCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityForceBatchCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityForceBatchCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityForceBatchCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityForceBatchCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityForceBatchCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityForceBatchCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityForceBatchCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityForceBatchCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityForceBatchCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityForceBatchCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityForceBatchCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityForceBatchCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityForceBatchCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityForceBatchCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityForceBatchCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityForceBatchCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityForceBatchCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityForceBatchCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityForceBatchCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityForceBatchCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityForceBatchCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityForceBatchCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityForceBatchCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityForceBatchCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityForceBatchCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityForceBatchCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityForceBatchCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityForceBatchCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityForceBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityForceBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class UtilityWithWeightCall {
	private readonly production: productionCalls.UtilityWithWeightCall
	private readonly stage: stageCalls.UtilityWithWeightCall
	private readonly test: testCalls.UtilityWithWeightCall
	private readonly dev: devCalls.UtilityWithWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityWithWeightCall(ctx, call)
		this.stage = new stageCalls.UtilityWithWeightCall(ctx, call)
		this.test = new testCalls.UtilityWithWeightCall(ctx, call)
		this.dev = new devCalls.UtilityWithWeightCall(ctx, call)
	}

	get isV53(): productionCalls.UtilityWithWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityWithWeightCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityWithWeightCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityWithWeightCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityWithWeightCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityWithWeightCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityWithWeightCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityWithWeightCall['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionCalls.UtilityWithWeightCall['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionCalls.UtilityWithWeightCall['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionCalls.UtilityWithWeightCall['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionCalls.UtilityWithWeightCall['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageCalls.UtilityWithWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityWithWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityWithWeightCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityWithWeightCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityWithWeightCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityWithWeightCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityWithWeightCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityWithWeightCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityWithWeightCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityWithWeightCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityWithWeightCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityWithWeightCall['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageCalls.UtilityWithWeightCall['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageCalls.UtilityWithWeightCall['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageCalls.UtilityWithWeightCall['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageCalls.UtilityWithWeightCall['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageCalls.UtilityWithWeightCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.UtilityWithWeightCall['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testCalls.UtilityWithWeightCall['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testCalls.UtilityWithWeightCall['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testCalls.UtilityWithWeightCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.UtilityWithWeightCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.UtilityWithWeightCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.UtilityWithWeightCall['asV64'] {
		return this.dev.asV64
	}
}

export class VestedRewardsClaimCrowdloanRewardsCall {
	private readonly production: productionCalls.VestedRewardsClaimCrowdloanRewardsCall
	private readonly stage: stageCalls.VestedRewardsClaimCrowdloanRewardsCall
	private readonly test: testCalls.VestedRewardsClaimCrowdloanRewardsCall
	private readonly dev: devCalls.VestedRewardsClaimCrowdloanRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
		this.test = new testCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
	}

	get isV33(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsClaimRewardsCall {
	private readonly production: productionCalls.VestedRewardsClaimRewardsCall
	private readonly stage: stageCalls.VestedRewardsClaimRewardsCall
	private readonly test: testCalls.VestedRewardsClaimRewardsCall
	private readonly dev: devCalls.VestedRewardsClaimRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsClaimRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsClaimRewardsCall(ctx, call)
		this.test = new testCalls.VestedRewardsClaimRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsClaimRewardsCall(ctx, call)
	}

	get isV7(): productionCalls.VestedRewardsClaimRewardsCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.VestedRewardsClaimRewardsCall['asV7'] {
		return this.production.asV7
	}
}

export class VestedRewardsInjectMarketMakersCall {
	private readonly production: productionCalls.VestedRewardsInjectMarketMakersCall
	private readonly stage: stageCalls.VestedRewardsInjectMarketMakersCall
	private readonly test: testCalls.VestedRewardsInjectMarketMakersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsInjectMarketMakersCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsInjectMarketMakersCall(ctx, call)
		this.test = new testCalls.VestedRewardsInjectMarketMakersCall(ctx, call)
	}

	get isV7(): productionCalls.VestedRewardsInjectMarketMakersCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.VestedRewardsInjectMarketMakersCall['asV7'] {
		return this.production.asV7
	}
}

export class VestedRewardsRegisterCrowdloanCall {
	private readonly production: productionCalls.VestedRewardsRegisterCrowdloanCall
	private readonly stage: stageCalls.VestedRewardsRegisterCrowdloanCall
	private readonly test: testCalls.VestedRewardsRegisterCrowdloanCall
	private readonly dev: devCalls.VestedRewardsRegisterCrowdloanCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
		this.test = new testCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
		this.dev = new devCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
	}

	get isV53(): productionCalls.VestedRewardsRegisterCrowdloanCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.VestedRewardsRegisterCrowdloanCall['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsSetAssetPairCall {
	private readonly production: productionCalls.VestedRewardsSetAssetPairCall
	private readonly stage: stageCalls.VestedRewardsSetAssetPairCall
	private readonly test: testCalls.VestedRewardsSetAssetPairCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsSetAssetPairCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsSetAssetPairCall(ctx, call)
		this.test = new testCalls.VestedRewardsSetAssetPairCall(ctx, call)
	}

	get isV22(): productionCalls.VestedRewardsSetAssetPairCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.VestedRewardsSetAssetPairCall['asV22'] {
		return this.production.asV22
	}
	get isV42(): productionCalls.VestedRewardsSetAssetPairCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.VestedRewardsSetAssetPairCall['asV42'] {
		return this.production.asV42
	}
}

export class VestedRewardsUpdateRewardsCall {
	private readonly production: productionCalls.VestedRewardsUpdateRewardsCall
	private readonly stage: stageCalls.VestedRewardsUpdateRewardsCall
	private readonly test: testCalls.VestedRewardsUpdateRewardsCall
	private readonly dev: devCalls.VestedRewardsUpdateRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsUpdateRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsUpdateRewardsCall(ctx, call)
		this.test = new testCalls.VestedRewardsUpdateRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsUpdateRewardsCall(ctx, call)
	}

	get isV46(): productionCalls.VestedRewardsUpdateRewardsCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.VestedRewardsUpdateRewardsCall['asV46'] {
		return this.production.asV46
	}
}

export class XstPoolDisableSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolDisableSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolDisableSyntheticAssetCall
	private readonly test: testCalls.XstPoolDisableSyntheticAssetCall
	private readonly dev: devCalls.XstPoolDisableSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
		this.test = new testCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolDisableSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolDisableSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolEnableSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolEnableSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolEnableSyntheticAssetCall
	private readonly test: testCalls.XstPoolEnableSyntheticAssetCall
	private readonly dev: devCalls.XstPoolEnableSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
		this.test = new testCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolEnableSyntheticAssetCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolEnableSyntheticAssetCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolEnableSyntheticAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolEnableSyntheticAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV57(): productionCalls.XstPoolEnableSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolEnableSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolInitializePoolCall {
	private readonly production: productionCalls.XstPoolInitializePoolCall
	private readonly stage: stageCalls.XstPoolInitializePoolCall
	private readonly test: testCalls.XstPoolInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolInitializePoolCall(ctx, call)
		this.stage = new stageCalls.XstPoolInitializePoolCall(ctx, call)
		this.test = new testCalls.XstPoolInitializePoolCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolInitializePoolCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolInitializePoolCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolInitializePoolCall['asV42'] {
		return this.production.asV42
	}
}

export class XstPoolRegisterSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolRegisterSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolRegisterSyntheticAssetCall
	private readonly test: testCalls.XstPoolRegisterSyntheticAssetCall
	private readonly dev: devCalls.XstPoolRegisterSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
		this.test = new testCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolRegisterSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolRegisterSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolRemoveSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolRemoveSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolRemoveSyntheticAssetCall
	private readonly test: testCalls.XstPoolRemoveSyntheticAssetCall
	private readonly dev: devCalls.XstPoolRemoveSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
		this.test = new testCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
	}

	get isV60(): productionCalls.XstPoolRemoveSyntheticAssetCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.XstPoolRemoveSyntheticAssetCall['asV60'] {
		return this.production.asV60
	}
}

export class XstPoolSetReferenceAssetCall {
	private readonly production: productionCalls.XstPoolSetReferenceAssetCall
	private readonly stage: stageCalls.XstPoolSetReferenceAssetCall
	private readonly test: testCalls.XstPoolSetReferenceAssetCall
	private readonly dev: devCalls.XstPoolSetReferenceAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetReferenceAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetReferenceAssetCall(ctx, call)
		this.test = new testCalls.XstPoolSetReferenceAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolSetReferenceAssetCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolSetReferenceAssetCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolSetReferenceAssetCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolSetReferenceAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolSetReferenceAssetCall['asV42'] {
		return this.production.asV42
	}
}

export class XstPoolSetSyntheticAssetFeeCall {
	private readonly production: productionCalls.XstPoolSetSyntheticAssetFeeCall
	private readonly stage: stageCalls.XstPoolSetSyntheticAssetFeeCall
	private readonly test: testCalls.XstPoolSetSyntheticAssetFeeCall
	private readonly dev: devCalls.XstPoolSetSyntheticAssetFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
		this.test = new testCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
		this.dev = new devCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolSetSyntheticAssetFeeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolSetSyntheticAssetFeeCall['asV57'] {
		return this.production.asV57
	}
}

export class XstPoolSetSyntheticBaseAssetFloorPriceCall {
	private readonly production: productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall
	private readonly stage: stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall
	private readonly test: testCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall
	private readonly dev: devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
		this.test = new testCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
		this.dev = new devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
	}

	get isV45(): productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['asV45'] {
		return this.production.asV45
	}
}

export class XorFeeUpdateMultiplierCall {
	private readonly production: productionCalls.XorFeeUpdateMultiplierCall
	private readonly stage: stageCalls.XorFeeUpdateMultiplierCall
	private readonly test: testCalls.XorFeeUpdateMultiplierCall
	private readonly dev: devCalls.XorFeeUpdateMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XorFeeUpdateMultiplierCall(ctx, call)
		this.stage = new stageCalls.XorFeeUpdateMultiplierCall(ctx, call)
		this.test = new testCalls.XorFeeUpdateMultiplierCall(ctx, call)
		this.dev = new devCalls.XorFeeUpdateMultiplierCall(ctx, call)
	}

	get isV37(): productionCalls.XorFeeUpdateMultiplierCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.XorFeeUpdateMultiplierCall['asV37'] {
		return this.production.asV37
	}
}

export class BeefyLightClientInitializeCall {
	private readonly stage: stageCalls.BeefyLightClientInitializeCall
	private readonly test: testCalls.BeefyLightClientInitializeCall
	private readonly dev: devCalls.BeefyLightClientInitializeCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BeefyLightClientInitializeCall(ctx, call)
		this.test = new testCalls.BeefyLightClientInitializeCall(ctx, call)
		this.dev = new devCalls.BeefyLightClientInitializeCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BeefyLightClientInitializeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BeefyLightClientInitializeCall['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientSubmitSignatureCommitmentCall {
	private readonly stage: stageCalls.BeefyLightClientSubmitSignatureCommitmentCall
	private readonly test: testCalls.BeefyLightClientSubmitSignatureCommitmentCall
	private readonly dev: devCalls.BeefyLightClientSubmitSignatureCommitmentCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BeefyLightClientSubmitSignatureCommitmentCall(ctx, call)
		this.test = new testCalls.BeefyLightClientSubmitSignatureCommitmentCall(ctx, call)
		this.dev = new devCalls.BeefyLightClientSubmitSignatureCommitmentCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BeefyLightClientSubmitSignatureCommitmentCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BeefyLightClientSubmitSignatureCommitmentCall['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelBatchDispatchedCall {
	private readonly stage: stageCalls.BridgeInboundChannelBatchDispatchedCall
	private readonly test: testCalls.BridgeInboundChannelBatchDispatchedCall
	private readonly dev: devCalls.BridgeInboundChannelBatchDispatchedCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelBatchDispatchedCall(ctx, call)
		this.test = new testCalls.BridgeInboundChannelBatchDispatchedCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelBatchDispatchedCall(ctx, call)
	}

	get isV55Stage(): stageCalls.BridgeInboundChannelBatchDispatchedCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.BridgeInboundChannelBatchDispatchedCall['asV55'] {
		return this.stage.asV55
	}
}

export class BridgeInboundChannelMessageDispatchedCall {
	private readonly stage: stageCalls.BridgeInboundChannelMessageDispatchedCall
	private readonly test: testCalls.BridgeInboundChannelMessageDispatchedCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelMessageDispatchedCall(ctx, call)
		this.test = new testCalls.BridgeInboundChannelMessageDispatchedCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['asV54'] {
		return this.stage.asV54
	}
}

export class BridgeInboundChannelRegisterChannelCall {
	private readonly stage: stageCalls.BridgeInboundChannelRegisterChannelCall
	private readonly test: testCalls.BridgeInboundChannelRegisterChannelCall
	private readonly dev: devCalls.BridgeInboundChannelRegisterChannelCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelRegisterChannelCall(ctx, call)
		this.test = new testCalls.BridgeInboundChannelRegisterChannelCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelRegisterChannelCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelRegisterChannelCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelRegisterChannelCall['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelSetRewardFractionCall {
	private readonly stage: stageCalls.BridgeInboundChannelSetRewardFractionCall
	private readonly test: testCalls.BridgeInboundChannelSetRewardFractionCall
	private readonly dev: devCalls.BridgeInboundChannelSetRewardFractionCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelSetRewardFractionCall(ctx, call)
		this.test = new testCalls.BridgeInboundChannelSetRewardFractionCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelSetRewardFractionCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelSetRewardFractionCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelSetRewardFractionCall['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelSubmitCall {
	private readonly stage: stageCalls.BridgeInboundChannelSubmitCall
	private readonly test: testCalls.BridgeInboundChannelSubmitCall
	private readonly dev: devCalls.BridgeInboundChannelSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelSubmitCall(ctx, call)
		this.test = new testCalls.BridgeInboundChannelSubmitCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelSubmitCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelSubmitCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelSubmitCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeInboundChannelSubmitCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeInboundChannelSubmitCall['asV54'] {
		return this.stage.asV54
	}
}

export class Erc20AppBurnCall {
	private readonly stage: stageCalls.Erc20AppBurnCall
	private readonly test: testCalls.Erc20AppBurnCall
	private readonly dev: devCalls.Erc20AppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppBurnCall(ctx, call)
		this.test = new testCalls.Erc20AppBurnCall(ctx, call)
		this.dev = new devCalls.Erc20AppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppBurnCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppMintCall {
	private readonly stage: stageCalls.Erc20AppMintCall
	private readonly test: testCalls.Erc20AppMintCall
	private readonly dev: devCalls.Erc20AppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppMintCall(ctx, call)
		this.test = new testCalls.Erc20AppMintCall(ctx, call)
		this.dev = new devCalls.Erc20AppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppMintCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRegisterAssetInternalCall {
	private readonly stage: stageCalls.Erc20AppRegisterAssetInternalCall
	private readonly test: testCalls.Erc20AppRegisterAssetInternalCall
	private readonly dev: devCalls.Erc20AppRegisterAssetInternalCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterAssetInternalCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterAssetInternalCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterAssetInternalCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterAssetInternalCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterAssetInternalCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRegisterErc20AppCall {
	private readonly stage: stageCalls.Erc20AppRegisterErc20AppCall
	private readonly test: testCalls.Erc20AppRegisterErc20AppCall
	private readonly dev: devCalls.Erc20AppRegisterErc20AppCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterErc20AppCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterErc20AppCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterErc20AppCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterErc20AppCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterErc20AppCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRegisterErc20AssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterErc20AssetCall
	private readonly test: testCalls.Erc20AppRegisterErc20AssetCall
	private readonly dev: devCalls.Erc20AppRegisterErc20AssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterErc20AssetCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterErc20AssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterErc20AssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterErc20AssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterErc20AssetCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRegisterExistingErc20AssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterExistingErc20AssetCall
	private readonly test: testCalls.Erc20AppRegisterExistingErc20AssetCall
	private readonly dev: devCalls.Erc20AppRegisterExistingErc20AssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterExistingErc20AssetCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterExistingErc20AssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterExistingErc20AssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['asV54'] {
		return this.stage.asV54
	}
}

export class Erc20AppRegisterNativeAppCall {
	private readonly stage: stageCalls.Erc20AppRegisterNativeAppCall
	private readonly test: testCalls.Erc20AppRegisterNativeAppCall
	private readonly dev: devCalls.Erc20AppRegisterNativeAppCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterNativeAppCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterNativeAppCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterNativeAppCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterNativeAppCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterNativeAppCall['asV52'] {
		return this.stage.asV52
	}
}

export class Erc20AppRegisterNativeAssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterNativeAssetCall
	private readonly test: testCalls.Erc20AppRegisterNativeAssetCall
	private readonly dev: devCalls.Erc20AppRegisterNativeAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterNativeAssetCall(ctx, call)
		this.test = new testCalls.Erc20AppRegisterNativeAssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterNativeAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterNativeAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterNativeAssetCall['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppBurnCall {
	private readonly stage: stageCalls.EthAppBurnCall
	private readonly test: testCalls.EthAppBurnCall
	private readonly dev: devCalls.EthAppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppBurnCall(ctx, call)
		this.test = new testCalls.EthAppBurnCall(ctx, call)
		this.dev = new devCalls.EthAppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppBurnCall['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppMintCall {
	private readonly stage: stageCalls.EthAppMintCall
	private readonly test: testCalls.EthAppMintCall
	private readonly dev: devCalls.EthAppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppMintCall(ctx, call)
		this.test = new testCalls.EthAppMintCall(ctx, call)
		this.dev = new devCalls.EthAppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppMintCall['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppRegisterNetworkCall {
	private readonly stage: stageCalls.EthAppRegisterNetworkCall
	private readonly test: testCalls.EthAppRegisterNetworkCall
	private readonly dev: devCalls.EthAppRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppRegisterNetworkCall(ctx, call)
		this.test = new testCalls.EthAppRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.EthAppRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.EthAppRegisterNetworkCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.EthAppRegisterNetworkCall['asV54'] {
		return this.stage.asV54
	}
}

export class EthAppRegisterNetworkWithExistingAssetCall {
	private readonly stage: stageCalls.EthAppRegisterNetworkWithExistingAssetCall
	private readonly test: testCalls.EthAppRegisterNetworkWithExistingAssetCall
	private readonly dev: devCalls.EthAppRegisterNetworkWithExistingAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppRegisterNetworkWithExistingAssetCall(ctx, call)
		this.test = new testCalls.EthAppRegisterNetworkWithExistingAssetCall(ctx, call)
		this.dev = new devCalls.EthAppRegisterNetworkWithExistingAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['asV54'] {
		return this.stage.asV54
	}
}

export class EthereumLightClientImportHeaderCall {
	private readonly stage: stageCalls.EthereumLightClientImportHeaderCall
	private readonly test: testCalls.EthereumLightClientImportHeaderCall
	private readonly dev: devCalls.EthereumLightClientImportHeaderCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientImportHeaderCall(ctx, call)
		this.test = new testCalls.EthereumLightClientImportHeaderCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientImportHeaderCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientImportHeaderCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientImportHeaderCall['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientRegisterNetworkCall {
	private readonly stage: stageCalls.EthereumLightClientRegisterNetworkCall
	private readonly test: testCalls.EthereumLightClientRegisterNetworkCall
	private readonly dev: devCalls.EthereumLightClientRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientRegisterNetworkCall(ctx, call)
		this.test = new testCalls.EthereumLightClientRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientUpdateDifficultyConfigCall {
	private readonly stage: stageCalls.EthereumLightClientUpdateDifficultyConfigCall
	private readonly test: testCalls.EthereumLightClientUpdateDifficultyConfigCall
	private readonly dev: devCalls.EthereumLightClientUpdateDifficultyConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientUpdateDifficultyConfigCall(ctx, call)
		this.test = new testCalls.EthereumLightClientUpdateDifficultyConfigCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientUpdateDifficultyConfigCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientUpdateDifficultyConfigCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientUpdateDifficultyConfigCall['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyBurnCall {
	private readonly stage: stageCalls.EvmBridgeProxyBurnCall
	private readonly test: testCalls.EvmBridgeProxyBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EvmBridgeProxyBurnCall(ctx, call)
		this.test = new testCalls.EvmBridgeProxyBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EvmBridgeProxyBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EvmBridgeProxyBurnCall['asV52'] {
		return this.stage.asV52
	}
}

export class FaucetUpdateLimitCall {
	private readonly stage: stageCalls.FaucetUpdateLimitCall
	private readonly test: testCalls.FaucetUpdateLimitCall
	private readonly dev: devCalls.FaucetUpdateLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.FaucetUpdateLimitCall(ctx, call)
		this.test = new testCalls.FaucetUpdateLimitCall(ctx, call)
		this.dev = new devCalls.FaucetUpdateLimitCall(ctx, call)
	}

	get isV37Stage(): stageCalls.FaucetUpdateLimitCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.FaucetUpdateLimitCall['asV37'] {
		return this.stage.asV37
	}
}

export class LiquidityProxyXorlessTransferCall {
	private readonly stage: stageCalls.LiquidityProxyXorlessTransferCall
	private readonly test: testCalls.LiquidityProxyXorlessTransferCall
	private readonly dev: devCalls.LiquidityProxyXorlessTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.LiquidityProxyXorlessTransferCall(ctx, call)
		this.test = new testCalls.LiquidityProxyXorlessTransferCall(ctx, call)
		this.dev = new devCalls.LiquidityProxyXorlessTransferCall(ctx, call)
	}

	get isV66Stage(): stageCalls.LiquidityProxyXorlessTransferCall['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageCalls.LiquidityProxyXorlessTransferCall['asV66'] {
		return this.stage.asV66
	}
	get isV64Dev(): devCalls.LiquidityProxyXorlessTransferCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.LiquidityProxyXorlessTransferCall['asV64'] {
		return this.dev.asV64
	}
}

export class MigrationAppMigrateErc20Call {
	private readonly stage: stageCalls.MigrationAppMigrateErc20Call
	private readonly test: testCalls.MigrationAppMigrateErc20Call
	private readonly dev: devCalls.MigrationAppMigrateErc20Call

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateErc20Call(ctx, call)
		this.test = new testCalls.MigrationAppMigrateErc20Call(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateErc20Call(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateErc20Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateErc20Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MigrationAppMigrateErc20Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MigrationAppMigrateErc20Call['asV54'] {
		return this.stage.asV54
	}
}

export class MigrationAppMigrateEthCall {
	private readonly stage: stageCalls.MigrationAppMigrateEthCall
	private readonly test: testCalls.MigrationAppMigrateEthCall
	private readonly dev: devCalls.MigrationAppMigrateEthCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateEthCall(ctx, call)
		this.test = new testCalls.MigrationAppMigrateEthCall(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateEthCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateEthCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateEthCall['asV52'] {
		return this.stage.asV52
	}
}

export class MigrationAppMigrateSidechainCall {
	private readonly stage: stageCalls.MigrationAppMigrateSidechainCall
	private readonly test: testCalls.MigrationAppMigrateSidechainCall
	private readonly dev: devCalls.MigrationAppMigrateSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateSidechainCall(ctx, call)
		this.test = new testCalls.MigrationAppMigrateSidechainCall(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateSidechainCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateSidechainCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateSidechainCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MigrationAppMigrateSidechainCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MigrationAppMigrateSidechainCall['asV54'] {
		return this.stage.asV54
	}
}

export class MigrationAppRegisterNetworkCall {
	private readonly stage: stageCalls.MigrationAppRegisterNetworkCall
	private readonly test: testCalls.MigrationAppRegisterNetworkCall
	private readonly dev: devCalls.MigrationAppRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppRegisterNetworkCall(ctx, call)
		this.test = new testCalls.MigrationAppRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.MigrationAppRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppAddAssetidParaidCall {
	private readonly stage: stageCalls.SubstrateBridgeAppAddAssetidParaidCall
	private readonly test: testCalls.SubstrateBridgeAppAddAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppAddAssetidParaidCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppAddAssetidParaidCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppAddAssetidParaidCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppAddAssetidParaidCall['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppBurnCall {
	private readonly stage: stageCalls.SubstrateBridgeAppBurnCall
	private readonly test: testCalls.SubstrateBridgeAppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppBurnCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppBurnCall['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppFinalizeAssetRegistrationCall {
	private readonly stage: stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall
	private readonly test: testCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppMintCall {
	private readonly stage: stageCalls.SubstrateBridgeAppMintCall
	private readonly test: testCalls.SubstrateBridgeAppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppMintCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppMintCall['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppRegisterSidechainAssetCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall
	private readonly test: testCalls.SubstrateBridgeAppRegisterSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppRegisterSidechainAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV57Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV59'] {
		return this.stage.asV59
	}
}

export class SubstrateBridgeAppRegisterThischainAssetCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRegisterThischainAssetCall
	private readonly test: testCalls.SubstrateBridgeAppRegisterThischainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRegisterThischainAssetCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppRegisterThischainAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV57Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV59'] {
		return this.stage.asV59
	}
}

export class SubstrateBridgeAppRemoveAssetidParaidCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall
	private readonly test: testCalls.SubstrateBridgeAppRemoveAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppRemoveAssetidParaidCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall {
	private readonly stage: stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall
	private readonly test: testCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
	}

	get isV59Stage(): stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['asV59'] {
		return this.stage.asV59
	}
}

export class SubstrateBridgeAppSetTransferLimitCall {
	private readonly stage: stageCalls.SubstrateBridgeAppSetTransferLimitCall
	private readonly test: testCalls.SubstrateBridgeAppSetTransferLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppSetTransferLimitCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppSetTransferLimitCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppSetTransferLimitCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppSetTransferLimitCall['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppUpdateTransactionStatusCall {
	private readonly stage: stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall
	private readonly test: testCalls.SubstrateBridgeAppUpdateTransactionStatusCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeAppUpdateTransactionStatusCall(ctx, call)
	}

	get isV59Stage(): stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall['asV59'] {
		return this.stage.asV59
	}
}

export class SubstrateBridgeInboundChannelSetRewardFractionCall {
	private readonly stage: stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall
	private readonly test: testCalls.SubstrateBridgeInboundChannelSetRewardFractionCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall(ctx, call)
		this.test = new testCalls.SubstrateBridgeInboundChannelSetRewardFractionCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall['asV52'] {
		return this.stage.asV52
	}
}

export class OrderBookCancelLimitOrderCall {
	private readonly test: testCalls.OrderBookCancelLimitOrderCall
	private readonly dev: devCalls.OrderBookCancelLimitOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookCancelLimitOrderCall(ctx, call)
		this.dev = new devCalls.OrderBookCancelLimitOrderCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookCancelLimitOrderCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookCancelLimitOrderCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookCancelLimitOrderCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookCancelLimitOrderCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookChangeOrderbookStatusCall {
	private readonly test: testCalls.OrderBookChangeOrderbookStatusCall
	private readonly dev: devCalls.OrderBookChangeOrderbookStatusCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookChangeOrderbookStatusCall(ctx, call)
		this.dev = new devCalls.OrderBookChangeOrderbookStatusCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookChangeOrderbookStatusCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookChangeOrderbookStatusCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookChangeOrderbookStatusCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookChangeOrderbookStatusCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookCreateOrderbookCall {
	private readonly test: testCalls.OrderBookCreateOrderbookCall
	private readonly dev: devCalls.OrderBookCreateOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookCreateOrderbookCall(ctx, call)
		this.dev = new devCalls.OrderBookCreateOrderbookCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookCreateOrderbookCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookCreateOrderbookCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookCreateOrderbookCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookCreateOrderbookCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookDeleteOrderbookCall {
	private readonly test: testCalls.OrderBookDeleteOrderbookCall
	private readonly dev: devCalls.OrderBookDeleteOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookDeleteOrderbookCall(ctx, call)
		this.dev = new devCalls.OrderBookDeleteOrderbookCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookDeleteOrderbookCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookDeleteOrderbookCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookDeleteOrderbookCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookDeleteOrderbookCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookPlaceLimitOrderCall {
	private readonly test: testCalls.OrderBookPlaceLimitOrderCall
	private readonly dev: devCalls.OrderBookPlaceLimitOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookPlaceLimitOrderCall(ctx, call)
		this.dev = new devCalls.OrderBookPlaceLimitOrderCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookPlaceLimitOrderCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookPlaceLimitOrderCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookPlaceLimitOrderCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookPlaceLimitOrderCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookUpdateOrderbookCall {
	private readonly test: testCalls.OrderBookUpdateOrderbookCall
	private readonly dev: devCalls.OrderBookUpdateOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.test = new testCalls.OrderBookUpdateOrderbookCall(ctx, call)
		this.dev = new devCalls.OrderBookUpdateOrderbookCall(ctx, call)
	}

	get isV52Test(): testCalls.OrderBookUpdateOrderbookCall['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testCalls.OrderBookUpdateOrderbookCall['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devCalls.OrderBookUpdateOrderbookCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookUpdateOrderbookCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookCancelLimitOrdersBatchCall {
	private readonly dev: devCalls.OrderBookCancelLimitOrdersBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookCancelLimitOrdersBatchCall(ctx, call)
	}

	get isV64Dev(): devCalls.OrderBookCancelLimitOrdersBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookCancelLimitOrdersBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookExecuteMarketOrderCall {
	private readonly dev: devCalls.OrderBookExecuteMarketOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookExecuteMarketOrderCall(ctx, call)
	}

	get isV64Dev(): devCalls.OrderBookExecuteMarketOrderCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.OrderBookExecuteMarketOrderCall['asV64'] {
		return this.dev.asV64
	}
}

export class QaToolsAddToWhitelistCall {
	private readonly dev: devCalls.QaToolsAddToWhitelistCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsAddToWhitelistCall(ctx, call)
	}

	get isV64Dev(): devCalls.QaToolsAddToWhitelistCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.QaToolsAddToWhitelistCall['asV64'] {
		return this.dev.asV64
	}
}

export class QaToolsOrderBookCreateAndFillBatchCall {
	private readonly dev: devCalls.QaToolsOrderBookCreateAndFillBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsOrderBookCreateAndFillBatchCall(ctx, call)
	}

	get isV64Dev(): devCalls.QaToolsOrderBookCreateAndFillBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.QaToolsOrderBookCreateAndFillBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class QaToolsOrderBookCreateEmptyBatchCall {
	private readonly dev: devCalls.QaToolsOrderBookCreateEmptyBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsOrderBookCreateEmptyBatchCall(ctx, call)
	}

	get isV64Dev(): devCalls.QaToolsOrderBookCreateEmptyBatchCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.QaToolsOrderBookCreateEmptyBatchCall['asV64'] {
		return this.dev.asV64
	}
}

export class QaToolsRemoveFromWhitelistCall {
	private readonly dev: devCalls.QaToolsRemoveFromWhitelistCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsRemoveFromWhitelistCall(ctx, call)
	}

	get isV64Dev(): devCalls.QaToolsRemoveFromWhitelistCall['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devCalls.QaToolsRemoveFromWhitelistCall['asV64'] {
		return this.dev.asV64
	}
}

export const utilityBatchAllCallVersions = ['1', '3', '7', '19', '22', '23', '26', '32', '33', '35', '37', '38', '42', '43', '45', '46', '47', '50', '53', '57', '59', '60', '63', '64', '33Stage', '35Stage', '37Stage', '38Stage', '42Stage', '43Stage', '44Stage', '45Stage', '46Stage', '47Stage', '48Stage', '52Stage', '54Stage', '55Stage', '57Stage', '59Stage', '60Stage', '62Stage', '64Stage', '66Stage', '51Test', '52Test', '64Dev'] as const
