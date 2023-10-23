import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './production/support'
import * as productionStorage from './production/storage'
import * as stageStorage from './stage/storage'
import * as testStorage from './test/storage'
import * as devStorage from './dev/storage'


export class AssetsAssetContentSourceStorage {
	private readonly production: productionStorage.AssetsAssetContentSourceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AssetsAssetContentSourceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV22(): productionStorage.AssetsAssetContentSourceStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.AssetsAssetContentSourceStorage['asV22'] {
		return this.production.asV22
	}
}

export class AssetsAssetDescriptionStorage {
	private readonly production: productionStorage.AssetsAssetDescriptionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AssetsAssetDescriptionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV22(): productionStorage.AssetsAssetDescriptionStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.AssetsAssetDescriptionStorage['asV22'] {
		return this.production.asV22
	}
}

export class AssetsAssetInfosStorage {
	private readonly production: productionStorage.AssetsAssetInfosStorage
	private readonly stage: stageStorage.AssetsAssetInfosStorage
	private readonly test: testStorage.AssetsAssetInfosStorage
	private readonly dev: devStorage.AssetsAssetInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AssetsAssetInfosStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetInfosStorage(ctx, storage)
		this.test = new testStorage.AssetsAssetInfosStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.AssetsAssetInfosStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetInfosStorage['asV1'] {
		return this.production.asV1
	}
	get isV26(): productionStorage.AssetsAssetInfosStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.AssetsAssetInfosStorage['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionStorage.AssetsAssetInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetInfosStorage['asV42'] {
		return this.production.asV42
	}
}

export class AssetsAssetOwnersStorage {
	private readonly production: productionStorage.AssetsAssetOwnersStorage
	private readonly stage: stageStorage.AssetsAssetOwnersStorage
	private readonly test: testStorage.AssetsAssetOwnersStorage
	private readonly dev: devStorage.AssetsAssetOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AssetsAssetOwnersStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetOwnersStorage(ctx, storage)
		this.test = new testStorage.AssetsAssetOwnersStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetOwnersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.AssetsAssetOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isV7(): productionStorage.AssetsAssetOwnersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.AssetsAssetOwnersStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.AssetsAssetOwnersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetOwnersStorage['asV42'] {
		return this.production.asV42
	}
}

export class AssetsAssetRecordAssetIdStorage {
	private readonly production: productionStorage.AssetsAssetRecordAssetIdStorage
	private readonly stage: stageStorage.AssetsAssetRecordAssetIdStorage
	private readonly test: testStorage.AssetsAssetRecordAssetIdStorage
	private readonly dev: devStorage.AssetsAssetRecordAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
		this.test = new testStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.AssetsAssetRecordAssetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetRecordAssetIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.AssetsAssetRecordAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetRecordAssetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isV64Dev(): devStorage.AssetsAssetRecordAssetIdStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.AssetsAssetRecordAssetIdStorage['asV64'] {
		return this.dev.asV64
	}
}

export class AuthorshipAuthorStorage {
	private readonly production: productionStorage.AuthorshipAuthorStorage
	private readonly stage: stageStorage.AuthorshipAuthorStorage
	private readonly test: testStorage.AuthorshipAuthorStorage
	private readonly dev: devStorage.AuthorshipAuthorStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AuthorshipAuthorStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipAuthorStorage(ctx, storage)
		this.test = new testStorage.AuthorshipAuthorStorage(ctx, storage)
		this.dev = new devStorage.AuthorshipAuthorStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.AuthorshipAuthorStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipAuthorStorage['asV1'] {
		return this.production.asV1
	}
}

export class AuthorshipDidSetUnclesStorage {
	private readonly production: productionStorage.AuthorshipDidSetUnclesStorage
	private readonly stage: stageStorage.AuthorshipDidSetUnclesStorage
	private readonly test: testStorage.AuthorshipDidSetUnclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AuthorshipDidSetUnclesStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipDidSetUnclesStorage(ctx, storage)
		this.test = new testStorage.AuthorshipDidSetUnclesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.AuthorshipDidSetUnclesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipDidSetUnclesStorage['asV1'] {
		return this.production.asV1
	}
}

export class AuthorshipUnclesStorage {
	private readonly production: productionStorage.AuthorshipUnclesStorage
	private readonly stage: stageStorage.AuthorshipUnclesStorage
	private readonly test: testStorage.AuthorshipUnclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.AuthorshipUnclesStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipUnclesStorage(ctx, storage)
		this.test = new testStorage.AuthorshipUnclesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.AuthorshipUnclesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipUnclesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.AuthorshipUnclesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AuthorshipUnclesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeAuthorVrfRandomnessStorage {
	private readonly production: productionStorage.BabeAuthorVrfRandomnessStorage
	private readonly stage: stageStorage.BabeAuthorVrfRandomnessStorage
	private readonly test: testStorage.BabeAuthorVrfRandomnessStorage
	private readonly dev: devStorage.BabeAuthorVrfRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
		this.test = new testStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeAuthorVrfRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeAuthorVrfRandomnessStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeAuthoritiesStorage {
	private readonly production: productionStorage.BabeAuthoritiesStorage
	private readonly stage: stageStorage.BabeAuthoritiesStorage
	private readonly test: testStorage.BabeAuthoritiesStorage
	private readonly dev: devStorage.BabeAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BabeAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.BabeAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BabeAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeAuthoritiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeAuthoritiesStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeCurrentSlotStorage {
	private readonly production: productionStorage.BabeCurrentSlotStorage
	private readonly stage: stageStorage.BabeCurrentSlotStorage
	private readonly test: testStorage.BabeCurrentSlotStorage
	private readonly dev: devStorage.BabeCurrentSlotStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeCurrentSlotStorage(ctx, storage)
		this.stage = new stageStorage.BabeCurrentSlotStorage(ctx, storage)
		this.test = new testStorage.BabeCurrentSlotStorage(ctx, storage)
		this.dev = new devStorage.BabeCurrentSlotStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeCurrentSlotStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeCurrentSlotStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeEpochConfigStorage {
	private readonly production: productionStorage.BabeEpochConfigStorage
	private readonly stage: stageStorage.BabeEpochConfigStorage
	private readonly test: testStorage.BabeEpochConfigStorage
	private readonly dev: devStorage.BabeEpochConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeEpochConfigStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochConfigStorage(ctx, storage)
		this.test = new testStorage.BabeEpochConfigStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochConfigStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BabeEpochConfigStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeEpochConfigStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeEpochIndexStorage {
	private readonly production: productionStorage.BabeEpochIndexStorage
	private readonly stage: stageStorage.BabeEpochIndexStorage
	private readonly test: testStorage.BabeEpochIndexStorage
	private readonly dev: devStorage.BabeEpochIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeEpochIndexStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochIndexStorage(ctx, storage)
		this.test = new testStorage.BabeEpochIndexStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeEpochIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeEpochIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeEpochStartStorage {
	private readonly production: productionStorage.BabeEpochStartStorage
	private readonly stage: stageStorage.BabeEpochStartStorage
	private readonly test: testStorage.BabeEpochStartStorage
	private readonly dev: devStorage.BabeEpochStartStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeEpochStartStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochStartStorage(ctx, storage)
		this.test = new testStorage.BabeEpochStartStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochStartStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BabeEpochStartStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeEpochStartStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeGenesisSlotStorage {
	private readonly production: productionStorage.BabeGenesisSlotStorage
	private readonly stage: stageStorage.BabeGenesisSlotStorage
	private readonly test: testStorage.BabeGenesisSlotStorage
	private readonly dev: devStorage.BabeGenesisSlotStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeGenesisSlotStorage(ctx, storage)
		this.stage = new stageStorage.BabeGenesisSlotStorage(ctx, storage)
		this.test = new testStorage.BabeGenesisSlotStorage(ctx, storage)
		this.dev = new devStorage.BabeGenesisSlotStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeGenesisSlotStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeGenesisSlotStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeInitializedStorage {
	private readonly production: productionStorage.BabeInitializedStorage
	private readonly stage: stageStorage.BabeInitializedStorage
	private readonly test: testStorage.BabeInitializedStorage
	private readonly dev: devStorage.BabeInitializedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeInitializedStorage(ctx, storage)
		this.stage = new stageStorage.BabeInitializedStorage(ctx, storage)
		this.test = new testStorage.BabeInitializedStorage(ctx, storage)
		this.dev = new devStorage.BabeInitializedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeInitializedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeInitializedStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BabeInitializedStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeInitializedStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeLatenessStorage {
	private readonly production: productionStorage.BabeLatenessStorage
	private readonly stage: stageStorage.BabeLatenessStorage
	private readonly test: testStorage.BabeLatenessStorage
	private readonly dev: devStorage.BabeLatenessStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeLatenessStorage(ctx, storage)
		this.stage = new stageStorage.BabeLatenessStorage(ctx, storage)
		this.test = new testStorage.BabeLatenessStorage(ctx, storage)
		this.dev = new devStorage.BabeLatenessStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeLatenessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeLatenessStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeNextAuthoritiesStorage {
	private readonly production: productionStorage.BabeNextAuthoritiesStorage
	private readonly stage: stageStorage.BabeNextAuthoritiesStorage
	private readonly test: testStorage.BabeNextAuthoritiesStorage
	private readonly dev: devStorage.BabeNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeNextAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.BabeNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BabeNextAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeNextAuthoritiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextAuthoritiesStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeNextEpochConfigStorage {
	private readonly production: productionStorage.BabeNextEpochConfigStorage
	private readonly stage: stageStorage.BabeNextEpochConfigStorage
	private readonly test: testStorage.BabeNextEpochConfigStorage
	private readonly dev: devStorage.BabeNextEpochConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeNextEpochConfigStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextEpochConfigStorage(ctx, storage)
		this.test = new testStorage.BabeNextEpochConfigStorage(ctx, storage)
		this.dev = new devStorage.BabeNextEpochConfigStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeNextEpochConfigStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextEpochConfigStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BabeNextEpochConfigStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeNextEpochConfigStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeNextRandomnessStorage {
	private readonly production: productionStorage.BabeNextRandomnessStorage
	private readonly stage: stageStorage.BabeNextRandomnessStorage
	private readonly test: testStorage.BabeNextRandomnessStorage
	private readonly dev: devStorage.BabeNextRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeNextRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextRandomnessStorage(ctx, storage)
		this.test = new testStorage.BabeNextRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeNextRandomnessStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeNextRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextRandomnessStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabePendingEpochConfigChangeStorage {
	private readonly production: productionStorage.BabePendingEpochConfigChangeStorage
	private readonly stage: stageStorage.BabePendingEpochConfigChangeStorage
	private readonly test: testStorage.BabePendingEpochConfigChangeStorage
	private readonly dev: devStorage.BabePendingEpochConfigChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
		this.stage = new stageStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
		this.test = new testStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
		this.dev = new devStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BabePendingEpochConfigChangeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabePendingEpochConfigChangeStorage['asV42'] {
		return this.production.asV42
	}
}

export class BabeRandomnessStorage {
	private readonly production: productionStorage.BabeRandomnessStorage
	private readonly stage: stageStorage.BabeRandomnessStorage
	private readonly test: testStorage.BabeRandomnessStorage
	private readonly dev: devStorage.BabeRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeRandomnessStorage(ctx, storage)
		this.test = new testStorage.BabeRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeRandomnessStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeRandomnessStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeSegmentIndexStorage {
	private readonly production: productionStorage.BabeSegmentIndexStorage
	private readonly stage: stageStorage.BabeSegmentIndexStorage
	private readonly test: testStorage.BabeSegmentIndexStorage
	private readonly dev: devStorage.BabeSegmentIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeSegmentIndexStorage(ctx, storage)
		this.stage = new stageStorage.BabeSegmentIndexStorage(ctx, storage)
		this.test = new testStorage.BabeSegmentIndexStorage(ctx, storage)
		this.dev = new devStorage.BabeSegmentIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeSegmentIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeSegmentIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class BabeUnderConstructionStorage {
	private readonly production: productionStorage.BabeUnderConstructionStorage
	private readonly stage: stageStorage.BabeUnderConstructionStorage
	private readonly test: testStorage.BabeUnderConstructionStorage
	private readonly dev: devStorage.BabeUnderConstructionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BabeUnderConstructionStorage(ctx, storage)
		this.stage = new stageStorage.BabeUnderConstructionStorage(ctx, storage)
		this.test = new testStorage.BabeUnderConstructionStorage(ctx, storage)
		this.dev = new devStorage.BabeUnderConstructionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BabeUnderConstructionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeUnderConstructionStorage['asV1'] {
		return this.production.asV1
	}
}

export class BagsListCounterForListNodesStorage {
	private readonly production: productionStorage.BagsListCounterForListNodesStorage
	private readonly stage: stageStorage.BagsListCounterForListNodesStorage
	private readonly test: testStorage.BagsListCounterForListNodesStorage
	private readonly dev: devStorage.BagsListCounterForListNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BagsListCounterForListNodesStorage(ctx, storage)
		this.stage = new stageStorage.BagsListCounterForListNodesStorage(ctx, storage)
		this.test = new testStorage.BagsListCounterForListNodesStorage(ctx, storage)
		this.dev = new devStorage.BagsListCounterForListNodesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BagsListCounterForListNodesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListCounterForListNodesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BagsListListBagsStorage {
	private readonly production: productionStorage.BagsListListBagsStorage
	private readonly stage: stageStorage.BagsListListBagsStorage
	private readonly test: testStorage.BagsListListBagsStorage
	private readonly dev: devStorage.BagsListListBagsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BagsListListBagsStorage(ctx, storage)
		this.stage = new stageStorage.BagsListListBagsStorage(ctx, storage)
		this.test = new testStorage.BagsListListBagsStorage(ctx, storage)
		this.dev = new devStorage.BagsListListBagsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BagsListListBagsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListListBagsStorage['asV42'] {
		return this.production.asV42
	}
}

export class BagsListListNodesStorage {
	private readonly production: productionStorage.BagsListListNodesStorage
	private readonly stage: stageStorage.BagsListListNodesStorage
	private readonly test: testStorage.BagsListListNodesStorage
	private readonly dev: devStorage.BagsListListNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BagsListListNodesStorage(ctx, storage)
		this.stage = new stageStorage.BagsListListNodesStorage(ctx, storage)
		this.test = new testStorage.BagsListListNodesStorage(ctx, storage)
		this.dev = new devStorage.BagsListListNodesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BagsListListNodesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListListNodesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BalancesAccountStorage {
	private readonly production: productionStorage.BalancesAccountStorage
	private readonly stage: stageStorage.BalancesAccountStorage
	private readonly test: testStorage.BalancesAccountStorage
	private readonly dev: devStorage.BalancesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesAccountStorage(ctx, storage)
		this.stage = new stageStorage.BalancesAccountStorage(ctx, storage)
		this.test = new testStorage.BalancesAccountStorage(ctx, storage)
		this.dev = new devStorage.BalancesAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BalancesAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesAccountStorage['asV1'] {
		return this.production.asV1
	}
}

export class BalancesInactiveIssuanceStorage {
	private readonly production: productionStorage.BalancesInactiveIssuanceStorage
	private readonly stage: stageStorage.BalancesInactiveIssuanceStorage
	private readonly test: testStorage.BalancesInactiveIssuanceStorage
	private readonly dev: devStorage.BalancesInactiveIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesInactiveIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.BalancesInactiveIssuanceStorage(ctx, storage)
		this.test = new testStorage.BalancesInactiveIssuanceStorage(ctx, storage)
		this.dev = new devStorage.BalancesInactiveIssuanceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.BalancesInactiveIssuanceStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.BalancesInactiveIssuanceStorage['asV53'] {
		return this.production.asV53
	}
}

export class BalancesLocksStorage {
	private readonly production: productionStorage.BalancesLocksStorage
	private readonly stage: stageStorage.BalancesLocksStorage
	private readonly test: testStorage.BalancesLocksStorage
	private readonly dev: devStorage.BalancesLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesLocksStorage(ctx, storage)
		this.stage = new stageStorage.BalancesLocksStorage(ctx, storage)
		this.test = new testStorage.BalancesLocksStorage(ctx, storage)
		this.dev = new devStorage.BalancesLocksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BalancesLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesLocksStorage['asV1'] {
		return this.production.asV1
	}
}

export class BalancesReservesStorage {
	private readonly production: productionStorage.BalancesReservesStorage
	private readonly stage: stageStorage.BalancesReservesStorage
	private readonly test: testStorage.BalancesReservesStorage
	private readonly dev: devStorage.BalancesReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesReservesStorage(ctx, storage)
		this.stage = new stageStorage.BalancesReservesStorage(ctx, storage)
		this.test = new testStorage.BalancesReservesStorage(ctx, storage)
		this.dev = new devStorage.BalancesReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BalancesReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BalancesReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BalancesStorageVersionStorage {
	private readonly production: productionStorage.BalancesStorageVersionStorage
	private readonly stage: stageStorage.BalancesStorageVersionStorage
	private readonly test: testStorage.BalancesStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.BalancesStorageVersionStorage(ctx, storage)
		this.test = new testStorage.BalancesStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.BalancesStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BalancesStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BalancesStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class BalancesTotalIssuanceStorage {
	private readonly production: productionStorage.BalancesTotalIssuanceStorage
	private readonly stage: stageStorage.BalancesTotalIssuanceStorage
	private readonly test: testStorage.BalancesTotalIssuanceStorage
	private readonly dev: devStorage.BalancesTotalIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BalancesTotalIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.BalancesTotalIssuanceStorage(ctx, storage)
		this.test = new testStorage.BalancesTotalIssuanceStorage(ctx, storage)
		this.dev = new devStorage.BalancesTotalIssuanceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BalancesTotalIssuanceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesTotalIssuanceStorage['asV1'] {
		return this.production.asV1
	}
}

export class BandDynamicFeeParametersStorage {
	private readonly production: productionStorage.BandDynamicFeeParametersStorage
	private readonly stage: stageStorage.BandDynamicFeeParametersStorage
	private readonly test: testStorage.BandDynamicFeeParametersStorage
	private readonly dev: devStorage.BandDynamicFeeParametersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BandDynamicFeeParametersStorage(ctx, storage)
		this.stage = new stageStorage.BandDynamicFeeParametersStorage(ctx, storage)
		this.test = new testStorage.BandDynamicFeeParametersStorage(ctx, storage)
		this.dev = new devStorage.BandDynamicFeeParametersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV59(): productionStorage.BandDynamicFeeParametersStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.BandDynamicFeeParametersStorage['asV59'] {
		return this.production.asV59
	}
}

export class BandSymbolCheckBlockStorage {
	private readonly production: productionStorage.BandSymbolCheckBlockStorage
	private readonly stage: stageStorage.BandSymbolCheckBlockStorage
	private readonly test: testStorage.BandSymbolCheckBlockStorage
	private readonly dev: devStorage.BandSymbolCheckBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BandSymbolCheckBlockStorage(ctx, storage)
		this.stage = new stageStorage.BandSymbolCheckBlockStorage(ctx, storage)
		this.test = new testStorage.BandSymbolCheckBlockStorage(ctx, storage)
		this.dev = new devStorage.BandSymbolCheckBlockStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV60(): productionStorage.BandSymbolCheckBlockStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.BandSymbolCheckBlockStorage['asV60'] {
		return this.production.asV60
	}
}

export class BandSymbolRatesStorage {
	private readonly production: productionStorage.BandSymbolRatesStorage
	private readonly stage: stageStorage.BandSymbolRatesStorage
	private readonly test: testStorage.BandSymbolRatesStorage
	private readonly dev: devStorage.BandSymbolRatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BandSymbolRatesStorage(ctx, storage)
		this.stage = new stageStorage.BandSymbolRatesStorage(ctx, storage)
		this.test = new testStorage.BandSymbolRatesStorage(ctx, storage)
		this.dev = new devStorage.BandSymbolRatesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.BandSymbolRatesStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.BandSymbolRatesStorage['asV45'] {
		return this.production.asV45
	}
	get isV59(): productionStorage.BandSymbolRatesStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.BandSymbolRatesStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.BandSymbolRatesStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.BandSymbolRatesStorage['asV60'] {
		return this.production.asV60
	}
	get isV44Stage(): stageStorage.BandSymbolRatesStorage['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageStorage.BandSymbolRatesStorage['asV44'] {
		return this.stage.asV44
	}
}

export class BandTrustedRelayersStorage {
	private readonly production: productionStorage.BandTrustedRelayersStorage
	private readonly stage: stageStorage.BandTrustedRelayersStorage
	private readonly test: testStorage.BandTrustedRelayersStorage
	private readonly dev: devStorage.BandTrustedRelayersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BandTrustedRelayersStorage(ctx, storage)
		this.stage = new stageStorage.BandTrustedRelayersStorage(ctx, storage)
		this.test = new testStorage.BandTrustedRelayersStorage(ctx, storage)
		this.dev = new devStorage.BandTrustedRelayersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.BandTrustedRelayersStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.BandTrustedRelayersStorage['asV45'] {
		return this.production.asV45
	}
}

export class BeefyAuthoritiesStorage {
	private readonly production: productionStorage.BeefyAuthoritiesStorage
	private readonly stage: stageStorage.BeefyAuthoritiesStorage
	private readonly test: testStorage.BeefyAuthoritiesStorage
	private readonly dev: devStorage.BeefyAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BeefyAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BeefyAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.BeefyAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BeefyAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BeefyAuthoritiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyAuthoritiesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BeefyNextAuthoritiesStorage {
	private readonly production: productionStorage.BeefyNextAuthoritiesStorage
	private readonly stage: stageStorage.BeefyNextAuthoritiesStorage
	private readonly test: testStorage.BeefyNextAuthoritiesStorage
	private readonly dev: devStorage.BeefyNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BeefyNextAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BeefyNextAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.BeefyNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BeefyNextAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BeefyNextAuthoritiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyNextAuthoritiesStorage['asV42'] {
		return this.production.asV42
	}
}

export class BeefyValidatorSetIdStorage {
	private readonly production: productionStorage.BeefyValidatorSetIdStorage
	private readonly stage: stageStorage.BeefyValidatorSetIdStorage
	private readonly test: testStorage.BeefyValidatorSetIdStorage
	private readonly dev: devStorage.BeefyValidatorSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BeefyValidatorSetIdStorage(ctx, storage)
		this.stage = new stageStorage.BeefyValidatorSetIdStorage(ctx, storage)
		this.test = new testStorage.BeefyValidatorSetIdStorage(ctx, storage)
		this.dev = new devStorage.BeefyValidatorSetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.BeefyValidatorSetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyValidatorSetIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class BridgeDataSignerApprovalsStorage {
	private readonly production: productionStorage.BridgeDataSignerApprovalsStorage
	private readonly stage: stageStorage.BridgeDataSignerApprovalsStorage
	private readonly test: testStorage.BridgeDataSignerApprovalsStorage
	private readonly dev: devStorage.BridgeDataSignerApprovalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
		this.test = new testStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeDataSignerApprovalsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeDataSignerApprovalsStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerPeersStorage {
	private readonly production: productionStorage.BridgeDataSignerPeersStorage
	private readonly stage: stageStorage.BridgeDataSignerPeersStorage
	private readonly test: testStorage.BridgeDataSignerPeersStorage
	private readonly dev: devStorage.BridgeDataSignerPeersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeDataSignerPeersStorage(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerPeersStorage(ctx, storage)
		this.test = new testStorage.BridgeDataSignerPeersStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerPeersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeDataSignerPeersStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeDataSignerPeersStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeDataSignerPendingPeerUpdateStorage {
	private readonly production: productionStorage.BridgeDataSignerPendingPeerUpdateStorage
	private readonly stage: stageStorage.BridgeDataSignerPendingPeerUpdateStorage
	private readonly test: testStorage.BridgeDataSignerPendingPeerUpdateStorage
	private readonly dev: devStorage.BridgeDataSignerPendingPeerUpdateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
		this.test = new testStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeDataSignerPendingPeerUpdateStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeDataSignerPendingPeerUpdateStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeMultisigAccountsStorage {
	private readonly production: productionStorage.BridgeMultisigAccountsStorage
	private readonly stage: stageStorage.BridgeMultisigAccountsStorage
	private readonly test: testStorage.BridgeMultisigAccountsStorage
	private readonly dev: devStorage.BridgeMultisigAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeMultisigAccountsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigAccountsStorage(ctx, storage)
		this.test = new testStorage.BridgeMultisigAccountsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BridgeMultisigAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigAccountsStorage['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigCallsStorage {
	private readonly production: productionStorage.BridgeMultisigCallsStorage
	private readonly stage: stageStorage.BridgeMultisigCallsStorage
	private readonly test: testStorage.BridgeMultisigCallsStorage
	private readonly dev: devStorage.BridgeMultisigCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeMultisigCallsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigCallsStorage(ctx, storage)
		this.test = new testStorage.BridgeMultisigCallsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigCallsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BridgeMultisigCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigCallsStorage['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigDispatchedCallsStorage {
	private readonly production: productionStorage.BridgeMultisigDispatchedCallsStorage
	private readonly stage: stageStorage.BridgeMultisigDispatchedCallsStorage
	private readonly test: testStorage.BridgeMultisigDispatchedCallsStorage
	private readonly dev: devStorage.BridgeMultisigDispatchedCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
		this.test = new testStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BridgeMultisigDispatchedCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigDispatchedCallsStorage['asV1'] {
		return this.production.asV1
	}
}

export class BridgeMultisigMultisigsStorage {
	private readonly production: productionStorage.BridgeMultisigMultisigsStorage
	private readonly stage: stageStorage.BridgeMultisigMultisigsStorage
	private readonly test: testStorage.BridgeMultisigMultisigsStorage
	private readonly dev: devStorage.BridgeMultisigMultisigsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeMultisigMultisigsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigMultisigsStorage(ctx, storage)
		this.test = new testStorage.BridgeMultisigMultisigsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigMultisigsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.BridgeMultisigMultisigsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigMultisigsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BridgeMultisigMultisigsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BridgeMultisigMultisigsStorage['asV42'] {
		return this.production.asV42
	}
}

export class BridgeProxyConsumedTransferLimitStorage {
	private readonly production: productionStorage.BridgeProxyConsumedTransferLimitStorage
	private readonly stage: stageStorage.BridgeProxyConsumedTransferLimitStorage
	private readonly test: testStorage.BridgeProxyConsumedTransferLimitStorage
	private readonly dev: devStorage.BridgeProxyConsumedTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyConsumedTransferLimitStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyConsumedTransferLimitStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyConsumedTransferLimitStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyConsumedTransferLimitStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyConsumedTransferLimitStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyConsumedTransferLimitStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyLimitedAssetsStorage {
	private readonly production: productionStorage.BridgeProxyLimitedAssetsStorage
	private readonly stage: stageStorage.BridgeProxyLimitedAssetsStorage
	private readonly test: testStorage.BridgeProxyLimitedAssetsStorage
	private readonly dev: devStorage.BridgeProxyLimitedAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyLimitedAssetsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyLimitedAssetsStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyLimitedAssetsStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyLimitedAssetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyLimitedAssetsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyLimitedAssetsStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyLockedAssetsStorage {
	private readonly production: productionStorage.BridgeProxyLockedAssetsStorage
	private readonly stage: stageStorage.BridgeProxyLockedAssetsStorage
	private readonly test: testStorage.BridgeProxyLockedAssetsStorage
	private readonly dev: devStorage.BridgeProxyLockedAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyLockedAssetsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyLockedAssetsStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxySendersStorage {
	private readonly production: productionStorage.BridgeProxySendersStorage
	private readonly stage: stageStorage.BridgeProxySendersStorage
	private readonly test: testStorage.BridgeProxySendersStorage
	private readonly dev: devStorage.BridgeProxySendersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxySendersStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxySendersStorage(ctx, storage)
		this.test = new testStorage.BridgeProxySendersStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxySendersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxySendersStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxySendersStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxySidechainFeePaidStorage {
	private readonly production: productionStorage.BridgeProxySidechainFeePaidStorage
	private readonly stage: stageStorage.BridgeProxySidechainFeePaidStorage
	private readonly test: testStorage.BridgeProxySidechainFeePaidStorage
	private readonly dev: devStorage.BridgeProxySidechainFeePaidStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
		this.test = new testStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxySidechainFeePaidStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxySidechainFeePaidStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyTransactionsStorage {
	private readonly production: productionStorage.BridgeProxyTransactionsStorage
	private readonly stage: stageStorage.BridgeProxyTransactionsStorage
	private readonly test: testStorage.BridgeProxyTransactionsStorage
	private readonly dev: devStorage.BridgeProxyTransactionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyTransactionsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyTransactionsStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyTransactionsStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransactionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyTransactionsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyTransactionsStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyTransferLimitStorage {
	private readonly production: productionStorage.BridgeProxyTransferLimitStorage
	private readonly stage: stageStorage.BridgeProxyTransferLimitStorage
	private readonly test: testStorage.BridgeProxyTransferLimitStorage
	private readonly dev: devStorage.BridgeProxyTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyTransferLimitStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyTransferLimitStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyTransferLimitStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransferLimitStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyTransferLimitStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyTransferLimitStorage['asV64'] {
		return this.production.asV64
	}
}

export class BridgeProxyTransferLimitUnlockScheduleStorage {
	private readonly production: productionStorage.BridgeProxyTransferLimitUnlockScheduleStorage
	private readonly stage: stageStorage.BridgeProxyTransferLimitUnlockScheduleStorage
	private readonly test: testStorage.BridgeProxyTransferLimitUnlockScheduleStorage
	private readonly dev: devStorage.BridgeProxyTransferLimitUnlockScheduleStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.BridgeProxyTransferLimitUnlockScheduleStorage(ctx, storage)
		this.stage = new stageStorage.BridgeProxyTransferLimitUnlockScheduleStorage(ctx, storage)
		this.test = new testStorage.BridgeProxyTransferLimitUnlockScheduleStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransferLimitUnlockScheduleStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.BridgeProxyTransferLimitUnlockScheduleStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.BridgeProxyTransferLimitUnlockScheduleStorage['asV64'] {
		return this.production.asV64
	}
}

export class CeresGovernancePlatformPalletStorageVersionStorage {
	private readonly production: productionStorage.CeresGovernancePlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresGovernancePlatformPalletStorageVersionStorage
	private readonly test: testStorage.CeresGovernancePlatformPalletStorageVersionStorage
	private readonly dev: devStorage.CeresGovernancePlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.test = new testStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV37(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class CeresGovernancePlatformPollDataStorage {
	private readonly production: productionStorage.CeresGovernancePlatformPollDataStorage
	private readonly stage: stageStorage.CeresGovernancePlatformPollDataStorage
	private readonly test: testStorage.CeresGovernancePlatformPollDataStorage
	private readonly dev: devStorage.CeresGovernancePlatformPollDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
		this.test = new testStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresGovernancePlatformPollDataStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresGovernancePlatformPollDataStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresGovernancePlatformPollDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresGovernancePlatformPollDataStorage['asV33'] {
		return this.production.asV33
	}
}

export class CeresGovernancePlatformVotingStorage {
	private readonly production: productionStorage.CeresGovernancePlatformVotingStorage
	private readonly stage: stageStorage.CeresGovernancePlatformVotingStorage
	private readonly test: testStorage.CeresGovernancePlatformVotingStorage
	private readonly dev: devStorage.CeresGovernancePlatformVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
		this.test = new testStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresGovernancePlatformVotingStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresGovernancePlatformVotingStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadAuthorityAccountStorage {
	private readonly production: productionStorage.CeresLaunchpadAuthorityAccountStorage
	private readonly stage: stageStorage.CeresLaunchpadAuthorityAccountStorage
	private readonly test: testStorage.CeresLaunchpadAuthorityAccountStorage
	private readonly dev: devStorage.CeresLaunchpadAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadCeresBurnFeeAmountStorage {
	private readonly production: productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage
	private readonly stage: stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage
	private readonly test: testStorage.CeresLaunchpadCeresBurnFeeAmountStorage
	private readonly dev: devStorage.CeresLaunchpadCeresBurnFeeAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadCeresForContributionInILOStorage {
	private readonly production: productionStorage.CeresLaunchpadCeresForContributionInILOStorage
	private readonly stage: stageStorage.CeresLaunchpadCeresForContributionInILOStorage
	private readonly test: testStorage.CeresLaunchpadCeresForContributionInILOStorage
	private readonly dev: devStorage.CeresLaunchpadCeresForContributionInILOStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadCeresForContributionInILOStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadCeresForContributionInILOStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadContributionsStorage {
	private readonly production: productionStorage.CeresLaunchpadContributionsStorage
	private readonly stage: stageStorage.CeresLaunchpadContributionsStorage
	private readonly test: testStorage.CeresLaunchpadContributionsStorage
	private readonly dev: devStorage.CeresLaunchpadContributionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadContributionsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadContributionsStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadContributionsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadContributionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadContributionsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadContributionsStorage['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionStorage.CeresLaunchpadContributionsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLaunchpadContributionsStorage['asV42'] {
		return this.production.asV42
	}
}

export class CeresLaunchpadFeePercentOnRaisedFundsStorage {
	private readonly production: productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage
	private readonly stage: stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage
	private readonly test: testStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage
	private readonly dev: devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['asV47'] {
		return this.production.asV47
	}
}

export class CeresLaunchpadILOsStorage {
	private readonly production: productionStorage.CeresLaunchpadILOsStorage
	private readonly stage: stageStorage.CeresLaunchpadILOsStorage
	private readonly test: testStorage.CeresLaunchpadILOsStorage
	private readonly dev: devStorage.CeresLaunchpadILOsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadILOsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadILOsStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadILOsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadILOsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadILOsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadILOsStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresLaunchpadILOsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadILOsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.CeresLaunchpadILOsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.CeresLaunchpadILOsStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.CeresLaunchpadILOsStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresLaunchpadILOsStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresLaunchpadILOsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLaunchpadILOsStorage['asV42'] {
		return this.production.asV42
	}
	get isV47(): productionStorage.CeresLaunchpadILOsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CeresLaunchpadILOsStorage['asV47'] {
		return this.production.asV47
	}
}

export class CeresLaunchpadPenaltiesAccountStorage {
	private readonly production: productionStorage.CeresLaunchpadPenaltiesAccountStorage
	private readonly stage: stageStorage.CeresLaunchpadPenaltiesAccountStorage
	private readonly test: testStorage.CeresLaunchpadPenaltiesAccountStorage
	private readonly dev: devStorage.CeresLaunchpadPenaltiesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresLaunchpadPenaltiesAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadPenaltiesAccountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresLaunchpadWhitelistedContributorsStorage {
	private readonly production: productionStorage.CeresLaunchpadWhitelistedContributorsStorage
	private readonly stage: stageStorage.CeresLaunchpadWhitelistedContributorsStorage
	private readonly test: testStorage.CeresLaunchpadWhitelistedContributorsStorage
	private readonly dev: devStorage.CeresLaunchpadWhitelistedContributorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.CeresLaunchpadWhitelistedContributorsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadWhitelistedContributorsStorage['asV33'] {
		return this.production.asV33
	}
}

export class CeresLaunchpadWhitelistedIloOrganizersStorage {
	private readonly production: productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage
	private readonly stage: stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage
	private readonly test: testStorage.CeresLaunchpadWhitelistedIloOrganizersStorage
	private readonly dev: devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
		this.test = new testStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['asV33'] {
		return this.production.asV33
	}
}

export class CeresLiquidityLockerAuthorityAccountStorage {
	private readonly production: productionStorage.CeresLiquidityLockerAuthorityAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerAuthorityAccountStorage
	private readonly test: testStorage.CeresLiquidityLockerAuthorityAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.CeresLiquidityLockerAuthorityAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerAuthorityAccountStorage['asV22'] {
		return this.production.asV22
	}
}

export class CeresLiquidityLockerFeesOptionOneAccountStorage {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage
	private readonly test: testStorage.CeresLiquidityLockerFeesOptionOneAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['asV22'] {
		return this.production.asV22
	}
}

export class CeresLiquidityLockerFeesOptionTwoAccountStorage {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage
	private readonly test: testStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['asV22'] {
		return this.production.asV22
	}
}

export class CeresLiquidityLockerFeesOptionTwoCeresAmountStorage {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage
	private readonly test: testStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['asV22'] {
		return this.production.asV22
	}
}

export class CeresLiquidityLockerLockerDataStorage {
	private readonly production: productionStorage.CeresLiquidityLockerLockerDataStorage
	private readonly stage: stageStorage.CeresLiquidityLockerLockerDataStorage
	private readonly test: testStorage.CeresLiquidityLockerLockerDataStorage
	private readonly dev: devStorage.CeresLiquidityLockerLockerDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV22'] {
		return this.production.asV22
	}
	get isV33(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV42'] {
		return this.production.asV42
	}
}

export class CeresLiquidityLockerPalletStorageVersionStorage {
	private readonly production: productionStorage.CeresLiquidityLockerPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresLiquidityLockerPalletStorageVersionStorage
	private readonly test: testStorage.CeresLiquidityLockerPalletStorageVersionStorage
	private readonly dev: devStorage.CeresLiquidityLockerPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
		this.test = new testStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV37(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class CeresStakingAuthorityAccountStorage {
	private readonly production: productionStorage.CeresStakingAuthorityAccountStorage
	private readonly stage: stageStorage.CeresStakingAuthorityAccountStorage
	private readonly test: testStorage.CeresStakingAuthorityAccountStorage
	private readonly dev: devStorage.CeresStakingAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresStakingAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresStakingAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresStakingRewardsRemainingStorage {
	private readonly production: productionStorage.CeresStakingRewardsRemainingStorage
	private readonly stage: stageStorage.CeresStakingRewardsRemainingStorage
	private readonly test: testStorage.CeresStakingRewardsRemainingStorage
	private readonly dev: devStorage.CeresStakingRewardsRemainingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
		this.test = new testStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.CeresStakingRewardsRemainingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingRewardsRemainingStorage['asV19'] {
		return this.production.asV19
	}
}

export class CeresStakingStakersStorage {
	private readonly production: productionStorage.CeresStakingStakersStorage
	private readonly stage: stageStorage.CeresStakingStakersStorage
	private readonly test: testStorage.CeresStakingStakersStorage
	private readonly dev: devStorage.CeresStakingStakersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresStakingStakersStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingStakersStorage(ctx, storage)
		this.test = new testStorage.CeresStakingStakersStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingStakersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.CeresStakingStakersStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingStakersStorage['asV19'] {
		return this.production.asV19
	}
}

export class CeresStakingTotalDepositedStorage {
	private readonly production: productionStorage.CeresStakingTotalDepositedStorage
	private readonly stage: stageStorage.CeresStakingTotalDepositedStorage
	private readonly test: testStorage.CeresStakingTotalDepositedStorage
	private readonly dev: devStorage.CeresStakingTotalDepositedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresStakingTotalDepositedStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingTotalDepositedStorage(ctx, storage)
		this.test = new testStorage.CeresStakingTotalDepositedStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingTotalDepositedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.CeresStakingTotalDepositedStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingTotalDepositedStorage['asV19'] {
		return this.production.asV19
	}
}

export class CeresTokenLockerAuthorityAccountStorage {
	private readonly production: productionStorage.CeresTokenLockerAuthorityAccountStorage
	private readonly stage: stageStorage.CeresTokenLockerAuthorityAccountStorage
	private readonly test: testStorage.CeresTokenLockerAuthorityAccountStorage
	private readonly dev: devStorage.CeresTokenLockerAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresTokenLockerAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresTokenLockerFeeAmountStorage {
	private readonly production: productionStorage.CeresTokenLockerFeeAmountStorage
	private readonly stage: stageStorage.CeresTokenLockerFeeAmountStorage
	private readonly test: testStorage.CeresTokenLockerFeeAmountStorage
	private readonly dev: devStorage.CeresTokenLockerFeeAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
		this.test = new testStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresTokenLockerFeeAmountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerFeeAmountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresTokenLockerFeesAccountStorage {
	private readonly production: productionStorage.CeresTokenLockerFeesAccountStorage
	private readonly stage: stageStorage.CeresTokenLockerFeesAccountStorage
	private readonly test: testStorage.CeresTokenLockerFeesAccountStorage
	private readonly dev: devStorage.CeresTokenLockerFeesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
		this.test = new testStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresTokenLockerFeesAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerFeesAccountStorage['asV26'] {
		return this.production.asV26
	}
}

export class CeresTokenLockerPalletStorageVersionStorage {
	private readonly production: productionStorage.CeresTokenLockerPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresTokenLockerPalletStorageVersionStorage
	private readonly test: testStorage.CeresTokenLockerPalletStorageVersionStorage
	private readonly dev: devStorage.CeresTokenLockerPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
		this.test = new testStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV37(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class CeresTokenLockerTokenLockerDataStorage {
	private readonly production: productionStorage.CeresTokenLockerTokenLockerDataStorage
	private readonly stage: stageStorage.CeresTokenLockerTokenLockerDataStorage
	private readonly test: testStorage.CeresTokenLockerTokenLockerDataStorage
	private readonly dev: devStorage.CeresTokenLockerTokenLockerDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
		this.test = new testStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV26(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV42'] {
		return this.production.asV42
	}
}

export class CouncilMembersStorage {
	private readonly production: productionStorage.CouncilMembersStorage
	private readonly stage: stageStorage.CouncilMembersStorage
	private readonly test: testStorage.CouncilMembersStorage
	private readonly dev: devStorage.CouncilMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilMembersStorage(ctx, storage)
		this.stage = new stageStorage.CouncilMembersStorage(ctx, storage)
		this.test = new testStorage.CouncilMembersStorage(ctx, storage)
		this.dev = new devStorage.CouncilMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilMembersStorage['asV42'] {
		return this.production.asV42
	}
}

export class CouncilPrimeStorage {
	private readonly production: productionStorage.CouncilPrimeStorage
	private readonly stage: stageStorage.CouncilPrimeStorage
	private readonly test: testStorage.CouncilPrimeStorage
	private readonly dev: devStorage.CouncilPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilPrimeStorage(ctx, storage)
		this.stage = new stageStorage.CouncilPrimeStorage(ctx, storage)
		this.test = new testStorage.CouncilPrimeStorage(ctx, storage)
		this.dev = new devStorage.CouncilPrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilPrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilPrimeStorage['asV42'] {
		return this.production.asV42
	}
}

export class CouncilProposalCountStorage {
	private readonly production: productionStorage.CouncilProposalCountStorage
	private readonly stage: stageStorage.CouncilProposalCountStorage
	private readonly test: testStorage.CouncilProposalCountStorage
	private readonly dev: devStorage.CouncilProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalCountStorage(ctx, storage)
		this.test = new testStorage.CouncilProposalCountStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilProposalCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalCountStorage['asV42'] {
		return this.production.asV42
	}
}

export class CouncilProposalOfStorage {
	private readonly production: productionStorage.CouncilProposalOfStorage
	private readonly stage: stageStorage.CouncilProposalOfStorage
	private readonly test: testStorage.CouncilProposalOfStorage
	private readonly dev: devStorage.CouncilProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalOfStorage(ctx, storage)
		this.test = new testStorage.CouncilProposalOfStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilProposalOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.CouncilProposalOfStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.CouncilProposalOfStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.CouncilProposalOfStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.CouncilProposalOfStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.CouncilProposalOfStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.CouncilProposalOfStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.CouncilProposalOfStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CouncilProposalOfStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.CouncilProposalOfStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.CouncilProposalOfStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.CouncilProposalOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.CouncilProposalOfStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.CouncilProposalOfStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.CouncilProposalOfStorage['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionStorage.CouncilProposalOfStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.CouncilProposalOfStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.CouncilProposalOfStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.CouncilProposalOfStorage['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionStorage.CouncilProposalOfStorage['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionStorage.CouncilProposalOfStorage['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionStorage.CouncilProposalOfStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.CouncilProposalOfStorage['asV64'] {
		return this.production.asV64
	}
	get isV42Stage(): stageStorage.CouncilProposalOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageStorage.CouncilProposalOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageStorage.CouncilProposalOfStorage['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageStorage.CouncilProposalOfStorage['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageStorage.CouncilProposalOfStorage['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageStorage.CouncilProposalOfStorage['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageStorage.CouncilProposalOfStorage['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageStorage.CouncilProposalOfStorage['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageStorage.CouncilProposalOfStorage['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageStorage.CouncilProposalOfStorage['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageStorage.CouncilProposalOfStorage['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageStorage.CouncilProposalOfStorage['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageStorage.CouncilProposalOfStorage['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageStorage.CouncilProposalOfStorage['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageStorage.CouncilProposalOfStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.CouncilProposalOfStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.CouncilProposalOfStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.CouncilProposalOfStorage['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageStorage.CouncilProposalOfStorage['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageStorage.CouncilProposalOfStorage['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageStorage.CouncilProposalOfStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.CouncilProposalOfStorage['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageStorage.CouncilProposalOfStorage['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageStorage.CouncilProposalOfStorage['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageStorage.CouncilProposalOfStorage['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageStorage.CouncilProposalOfStorage['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageStorage.CouncilProposalOfStorage['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageStorage.CouncilProposalOfStorage['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageStorage.CouncilProposalOfStorage['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageStorage.CouncilProposalOfStorage['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageStorage.CouncilProposalOfStorage['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageStorage.CouncilProposalOfStorage['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testStorage.CouncilProposalOfStorage['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testStorage.CouncilProposalOfStorage['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testStorage.CouncilProposalOfStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.CouncilProposalOfStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.CouncilProposalOfStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.CouncilProposalOfStorage['asV64'] {
		return this.dev.asV64
	}
}

export class CouncilProposalsStorage {
	private readonly production: productionStorage.CouncilProposalsStorage
	private readonly stage: stageStorage.CouncilProposalsStorage
	private readonly test: testStorage.CouncilProposalsStorage
	private readonly dev: devStorage.CouncilProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilProposalsStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalsStorage(ctx, storage)
		this.test = new testStorage.CouncilProposalsStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilProposalsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalsStorage['asV42'] {
		return this.production.asV42
	}
}

export class CouncilVotingStorage {
	private readonly production: productionStorage.CouncilVotingStorage
	private readonly stage: stageStorage.CouncilVotingStorage
	private readonly test: testStorage.CouncilVotingStorage
	private readonly dev: devStorage.CouncilVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.CouncilVotingStorage(ctx, storage)
		this.stage = new stageStorage.CouncilVotingStorage(ctx, storage)
		this.test = new testStorage.CouncilVotingStorage(ctx, storage)
		this.dev = new devStorage.CouncilVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.CouncilVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilVotingStorage['asV42'] {
		return this.production.asV42
	}
}

export class DEXAPIEnabledSourceTypesStorage {
	private readonly production: productionStorage.DEXAPIEnabledSourceTypesStorage
	private readonly stage: stageStorage.DEXAPIEnabledSourceTypesStorage
	private readonly test: testStorage.DEXAPIEnabledSourceTypesStorage
	private readonly dev: devStorage.DEXAPIEnabledSourceTypesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
		this.stage = new stageStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
		this.test = new testStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
		this.dev = new devStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DEXAPIEnabledSourceTypesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DEXAPIEnabledSourceTypesStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.DEXAPIEnabledSourceTypesStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DEXAPIEnabledSourceTypesStorage['asV33'] {
		return this.production.asV33
	}
}

export class DEXManagerDEXInfosStorage {
	private readonly production: productionStorage.DEXManagerDEXInfosStorage
	private readonly stage: stageStorage.DEXManagerDEXInfosStorage
	private readonly test: testStorage.DEXManagerDEXInfosStorage
	private readonly dev: devStorage.DEXManagerDEXInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DEXManagerDEXInfosStorage(ctx, storage)
		this.stage = new stageStorage.DEXManagerDEXInfosStorage(ctx, storage)
		this.test = new testStorage.DEXManagerDEXInfosStorage(ctx, storage)
		this.dev = new devStorage.DEXManagerDEXInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DEXManagerDEXInfosStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DEXManagerDEXInfosStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DEXManagerDEXInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DEXManagerDEXInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.DEXManagerDEXInfosStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.DEXManagerDEXInfosStorage['asV45'] {
		return this.production.asV45
	}
}

export class DemeterFarmingPlatformAuthorityAccountStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformAuthorityAccountStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformAuthorityAccountStorage
	private readonly test: testStorage.DemeterFarmingPlatformAuthorityAccountStorage
	private readonly dev: devStorage.DemeterFarmingPlatformAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.DemeterFarmingPlatformAuthorityAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformAuthorityAccountStorage['asV33'] {
		return this.production.asV33
	}
}

export class DemeterFarmingPlatformFeeAccountStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformFeeAccountStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformFeeAccountStorage
	private readonly test: testStorage.DemeterFarmingPlatformFeeAccountStorage
	private readonly dev: devStorage.DemeterFarmingPlatformFeeAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.DemeterFarmingPlatformFeeAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformFeeAccountStorage['asV33'] {
		return this.production.asV33
	}
}

export class DemeterFarmingPlatformPalletStorageVersionStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage
	private readonly test: testStorage.DemeterFarmingPlatformPalletStorageVersionStorage
	private readonly dev: devStorage.DemeterFarmingPlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV43(): productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformPoolsStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformPoolsStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformPoolsStorage
	private readonly test: testStorage.DemeterFarmingPlatformPoolsStorage
	private readonly dev: devStorage.DemeterFarmingPlatformPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV43'] {
		return this.production.asV43
	}
}

export class DemeterFarmingPlatformTokenInfosStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformTokenInfosStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformTokenInfosStorage
	private readonly test: testStorage.DemeterFarmingPlatformTokenInfosStorage
	private readonly dev: devStorage.DemeterFarmingPlatformTokenInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['asV42'] {
		return this.production.asV42
	}
}

export class DemeterFarmingPlatformUserInfosStorage {
	private readonly production: productionStorage.DemeterFarmingPlatformUserInfosStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformUserInfosStorage
	private readonly test: testStorage.DemeterFarmingPlatformUserInfosStorage
	private readonly dev: devStorage.DemeterFarmingPlatformUserInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
		this.test = new testStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV43'] {
		return this.production.asV43
	}
}

export class DemocracyBlacklistStorage {
	private readonly production: productionStorage.DemocracyBlacklistStorage
	private readonly stage: stageStorage.DemocracyBlacklistStorage
	private readonly test: testStorage.DemocracyBlacklistStorage
	private readonly dev: devStorage.DemocracyBlacklistStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyBlacklistStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyBlacklistStorage(ctx, storage)
		this.test = new testStorage.DemocracyBlacklistStorage(ctx, storage)
		this.dev = new devStorage.DemocracyBlacklistStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyBlacklistStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyBlacklistStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyCancellationsStorage {
	private readonly production: productionStorage.DemocracyCancellationsStorage
	private readonly stage: stageStorage.DemocracyCancellationsStorage
	private readonly test: testStorage.DemocracyCancellationsStorage
	private readonly dev: devStorage.DemocracyCancellationsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyCancellationsStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyCancellationsStorage(ctx, storage)
		this.test = new testStorage.DemocracyCancellationsStorage(ctx, storage)
		this.dev = new devStorage.DemocracyCancellationsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyCancellationsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyCancellationsStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyDepositOfStorage {
	private readonly production: productionStorage.DemocracyDepositOfStorage
	private readonly stage: stageStorage.DemocracyDepositOfStorage
	private readonly test: testStorage.DemocracyDepositOfStorage
	private readonly dev: devStorage.DemocracyDepositOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyDepositOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyDepositOfStorage(ctx, storage)
		this.test = new testStorage.DemocracyDepositOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyDepositOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyDepositOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyDepositOfStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyLastTabledWasExternalStorage {
	private readonly production: productionStorage.DemocracyLastTabledWasExternalStorage
	private readonly stage: stageStorage.DemocracyLastTabledWasExternalStorage
	private readonly test: testStorage.DemocracyLastTabledWasExternalStorage
	private readonly dev: devStorage.DemocracyLastTabledWasExternalStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
		this.test = new testStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
		this.dev = new devStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyLastTabledWasExternalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLastTabledWasExternalStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyLocksStorage {
	private readonly production: productionStorage.DemocracyLocksStorage
	private readonly stage: stageStorage.DemocracyLocksStorage
	private readonly test: testStorage.DemocracyLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyLocksStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLocksStorage(ctx, storage)
		this.test = new testStorage.DemocracyLocksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.DemocracyLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLocksStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyLowestUnbakedStorage {
	private readonly production: productionStorage.DemocracyLowestUnbakedStorage
	private readonly stage: stageStorage.DemocracyLowestUnbakedStorage
	private readonly test: testStorage.DemocracyLowestUnbakedStorage
	private readonly dev: devStorage.DemocracyLowestUnbakedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyLowestUnbakedStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLowestUnbakedStorage(ctx, storage)
		this.test = new testStorage.DemocracyLowestUnbakedStorage(ctx, storage)
		this.dev = new devStorage.DemocracyLowestUnbakedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyLowestUnbakedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLowestUnbakedStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyNextExternalStorage {
	private readonly production: productionStorage.DemocracyNextExternalStorage
	private readonly stage: stageStorage.DemocracyNextExternalStorage
	private readonly test: testStorage.DemocracyNextExternalStorage
	private readonly dev: devStorage.DemocracyNextExternalStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyNextExternalStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyNextExternalStorage(ctx, storage)
		this.test = new testStorage.DemocracyNextExternalStorage(ctx, storage)
		this.dev = new devStorage.DemocracyNextExternalStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyNextExternalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyNextExternalStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.DemocracyNextExternalStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyNextExternalStorage['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyPreimagesStorage {
	private readonly production: productionStorage.DemocracyPreimagesStorage
	private readonly stage: stageStorage.DemocracyPreimagesStorage
	private readonly test: testStorage.DemocracyPreimagesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyPreimagesStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPreimagesStorage(ctx, storage)
		this.test = new testStorage.DemocracyPreimagesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.DemocracyPreimagesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPreimagesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyPreimagesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyPreimagesStorage['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyPublicPropCountStorage {
	private readonly production: productionStorage.DemocracyPublicPropCountStorage
	private readonly stage: stageStorage.DemocracyPublicPropCountStorage
	private readonly test: testStorage.DemocracyPublicPropCountStorage
	private readonly dev: devStorage.DemocracyPublicPropCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyPublicPropCountStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPublicPropCountStorage(ctx, storage)
		this.test = new testStorage.DemocracyPublicPropCountStorage(ctx, storage)
		this.dev = new devStorage.DemocracyPublicPropCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyPublicPropCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPublicPropCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyPublicPropsStorage {
	private readonly production: productionStorage.DemocracyPublicPropsStorage
	private readonly stage: stageStorage.DemocracyPublicPropsStorage
	private readonly test: testStorage.DemocracyPublicPropsStorage
	private readonly dev: devStorage.DemocracyPublicPropsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyPublicPropsStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPublicPropsStorage(ctx, storage)
		this.test = new testStorage.DemocracyPublicPropsStorage(ctx, storage)
		this.dev = new devStorage.DemocracyPublicPropsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyPublicPropsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPublicPropsStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.DemocracyPublicPropsStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyPublicPropsStorage['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyReferendumCountStorage {
	private readonly production: productionStorage.DemocracyReferendumCountStorage
	private readonly stage: stageStorage.DemocracyReferendumCountStorage
	private readonly test: testStorage.DemocracyReferendumCountStorage
	private readonly dev: devStorage.DemocracyReferendumCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyReferendumCountStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyReferendumCountStorage(ctx, storage)
		this.test = new testStorage.DemocracyReferendumCountStorage(ctx, storage)
		this.dev = new devStorage.DemocracyReferendumCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyReferendumCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyReferendumCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class DemocracyReferendumInfoOfStorage {
	private readonly production: productionStorage.DemocracyReferendumInfoOfStorage
	private readonly stage: stageStorage.DemocracyReferendumInfoOfStorage
	private readonly test: testStorage.DemocracyReferendumInfoOfStorage
	private readonly dev: devStorage.DemocracyReferendumInfoOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
		this.test = new testStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyReferendumInfoOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyReferendumInfoOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyReferendumInfoOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyReferendumInfoOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.DemocracyReferendumInfoOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyReferendumInfoOfStorage['asV53'] {
		return this.production.asV53
	}
}

export class DemocracyStorageVersionStorage {
	private readonly production: productionStorage.DemocracyStorageVersionStorage
	private readonly stage: stageStorage.DemocracyStorageVersionStorage
	private readonly test: testStorage.DemocracyStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyStorageVersionStorage(ctx, storage)
		this.test = new testStorage.DemocracyStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.DemocracyStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class DemocracyVotingOfStorage {
	private readonly production: productionStorage.DemocracyVotingOfStorage
	private readonly stage: stageStorage.DemocracyVotingOfStorage
	private readonly test: testStorage.DemocracyVotingOfStorage
	private readonly dev: devStorage.DemocracyVotingOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.DemocracyVotingOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyVotingOfStorage(ctx, storage)
		this.test = new testStorage.DemocracyVotingOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyVotingOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.DemocracyVotingOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyVotingOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyVotingOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyVotingOfStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseCurrentPhaseStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseDesiredTargetsStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseQueuedSolutionStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseRoundStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseRoundStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseRoundStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseRoundStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseRoundStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseRoundStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseRoundStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV53'] {
		return this.production.asV53
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSnapshotStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSnapshotStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSnapshotStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseSnapshotStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSnapshotStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSnapshotStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSnapshotStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage
	private readonly test: testStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
		this.test = new testStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenCandidatesStorage {
	private readonly production: productionStorage.ElectionsPhragmenCandidatesStorage
	private readonly stage: stageStorage.ElectionsPhragmenCandidatesStorage
	private readonly test: testStorage.ElectionsPhragmenCandidatesStorage
	private readonly dev: devStorage.ElectionsPhragmenCandidatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
		this.test = new testStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionsPhragmenCandidatesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenCandidatesStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenElectionRoundsStorage {
	private readonly production: productionStorage.ElectionsPhragmenElectionRoundsStorage
	private readonly stage: stageStorage.ElectionsPhragmenElectionRoundsStorage
	private readonly test: testStorage.ElectionsPhragmenElectionRoundsStorage
	private readonly dev: devStorage.ElectionsPhragmenElectionRoundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
		this.test = new testStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionsPhragmenElectionRoundsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenElectionRoundsStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenMembersStorage {
	private readonly production: productionStorage.ElectionsPhragmenMembersStorage
	private readonly stage: stageStorage.ElectionsPhragmenMembersStorage
	private readonly test: testStorage.ElectionsPhragmenMembersStorage
	private readonly dev: devStorage.ElectionsPhragmenMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionsPhragmenMembersStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenMembersStorage(ctx, storage)
		this.test = new testStorage.ElectionsPhragmenMembersStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionsPhragmenMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenMembersStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenRunnersUpStorage {
	private readonly production: productionStorage.ElectionsPhragmenRunnersUpStorage
	private readonly stage: stageStorage.ElectionsPhragmenRunnersUpStorage
	private readonly test: testStorage.ElectionsPhragmenRunnersUpStorage
	private readonly dev: devStorage.ElectionsPhragmenRunnersUpStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
		this.test = new testStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionsPhragmenRunnersUpStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenRunnersUpStorage['asV42'] {
		return this.production.asV42
	}
}

export class ElectionsPhragmenVotingStorage {
	private readonly production: productionStorage.ElectionsPhragmenVotingStorage
	private readonly stage: stageStorage.ElectionsPhragmenVotingStorage
	private readonly test: testStorage.ElectionsPhragmenVotingStorage
	private readonly dev: devStorage.ElectionsPhragmenVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ElectionsPhragmenVotingStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenVotingStorage(ctx, storage)
		this.test = new testStorage.ElectionsPhragmenVotingStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.ElectionsPhragmenVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenVotingStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeAccountRequestsStorage {
	private readonly production: productionStorage.EthBridgeAccountRequestsStorage
	private readonly stage: stageStorage.EthBridgeAccountRequestsStorage
	private readonly test: testStorage.EthBridgeAccountRequestsStorage
	private readonly dev: devStorage.EthBridgeAccountRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeAccountRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeAccountRequestsStorage(ctx, storage)
		this.test = new testStorage.EthBridgeAccountRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeAccountRequestsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeAccountRequestsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeAccountRequestsStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeAuthorityAccountStorage {
	private readonly production: productionStorage.EthBridgeAuthorityAccountStorage
	private readonly stage: stageStorage.EthBridgeAuthorityAccountStorage
	private readonly test: testStorage.EthBridgeAuthorityAccountStorage
	private readonly dev: devStorage.EthBridgeAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeAuthorityAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeAuthorityAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeAuthorityAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeAuthorityAccountStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeBridgeAccountStorage {
	private readonly production: productionStorage.EthBridgeBridgeAccountStorage
	private readonly stage: stageStorage.EthBridgeBridgeAccountStorage
	private readonly test: testStorage.EthBridgeBridgeAccountStorage
	private readonly dev: devStorage.EthBridgeBridgeAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeBridgeAccountStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeAccountStorage(ctx, storage)
		this.test = new testStorage.EthBridgeBridgeAccountStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeBridgeAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeAccountStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeBridgeContractAddressStorage {
	private readonly production: productionStorage.EthBridgeBridgeContractAddressStorage
	private readonly stage: stageStorage.EthBridgeBridgeContractAddressStorage
	private readonly test: testStorage.EthBridgeBridgeContractAddressStorage
	private readonly dev: devStorage.EthBridgeBridgeContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
		this.test = new testStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeBridgeContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeBridgeContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeBridgeContractAddressStorage['asV33'] {
		return this.production.asV33
	}
}

export class EthBridgeBridgeSignatureVersionsStorage {
	private readonly production: productionStorage.EthBridgeBridgeSignatureVersionsStorage
	private readonly stage: stageStorage.EthBridgeBridgeSignatureVersionsStorage
	private readonly test: testStorage.EthBridgeBridgeSignatureVersionsStorage
	private readonly dev: devStorage.EthBridgeBridgeSignatureVersionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
		this.test = new testStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV38(): productionStorage.EthBridgeBridgeSignatureVersionsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.EthBridgeBridgeSignatureVersionsStorage['asV38'] {
		return this.production.asV38
	}
}

export class EthBridgeBridgeStatusesStorage {
	private readonly production: productionStorage.EthBridgeBridgeStatusesStorage
	private readonly stage: stageStorage.EthBridgeBridgeStatusesStorage
	private readonly test: testStorage.EthBridgeBridgeStatusesStorage
	private readonly dev: devStorage.EthBridgeBridgeStatusesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
		this.test = new testStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeBridgeStatusesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeStatusesStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeLoadToIncomingRequestHashStorage {
	private readonly production: productionStorage.EthBridgeLoadToIncomingRequestHashStorage
	private readonly stage: stageStorage.EthBridgeLoadToIncomingRequestHashStorage
	private readonly test: testStorage.EthBridgeLoadToIncomingRequestHashStorage
	private readonly dev: devStorage.EthBridgeLoadToIncomingRequestHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
		this.test = new testStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeLoadToIncomingRequestHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeLoadToIncomingRequestHashStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeMigratingRequestsStorage {
	private readonly production: productionStorage.EthBridgeMigratingRequestsStorage
	private readonly stage: stageStorage.EthBridgeMigratingRequestsStorage
	private readonly test: testStorage.EthBridgeMigratingRequestsStorage
	private readonly dev: devStorage.EthBridgeMigratingRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
		this.test = new testStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.EthBridgeMigratingRequestsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.EthBridgeMigratingRequestsStorage['asV19'] {
		return this.production.asV19
	}
}

export class EthBridgeNextNetworkIdStorage {
	private readonly production: productionStorage.EthBridgeNextNetworkIdStorage
	private readonly stage: stageStorage.EthBridgeNextNetworkIdStorage
	private readonly test: testStorage.EthBridgeNextNetworkIdStorage
	private readonly dev: devStorage.EthBridgeNextNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
		this.test = new testStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeNextNetworkIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeNextNetworkIdStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgePalletStorageVersionStorage {
	private readonly production: productionStorage.EthBridgePalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV3(): productionStorage.EthBridgePalletStorageVersionStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.EthBridgePalletStorageVersionStorage['asV3'] {
		return this.production.asV3
	}
}

export class EthBridgePeerAccountIdStorage {
	private readonly production: productionStorage.EthBridgePeerAccountIdStorage
	private readonly stage: stageStorage.EthBridgePeerAccountIdStorage
	private readonly test: testStorage.EthBridgePeerAccountIdStorage
	private readonly dev: devStorage.EthBridgePeerAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePeerAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeerAccountIdStorage(ctx, storage)
		this.test = new testStorage.EthBridgePeerAccountIdStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeerAccountIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgePeerAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeerAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgePeerAccountIdStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgePeerAccountIdStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgePeerAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgePeerAccountIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgePeerAddressStorage {
	private readonly production: productionStorage.EthBridgePeerAddressStorage
	private readonly stage: stageStorage.EthBridgePeerAddressStorage
	private readonly test: testStorage.EthBridgePeerAddressStorage
	private readonly dev: devStorage.EthBridgePeerAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePeerAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeerAddressStorage(ctx, storage)
		this.test = new testStorage.EthBridgePeerAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeerAddressStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgePeerAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeerAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgePeerAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgePeerAddressStorage['asV33'] {
		return this.production.asV33
	}
}

export class EthBridgePeersStorage {
	private readonly production: productionStorage.EthBridgePeersStorage
	private readonly stage: stageStorage.EthBridgePeersStorage
	private readonly test: testStorage.EthBridgePeersStorage
	private readonly dev: devStorage.EthBridgePeersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePeersStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeersStorage(ctx, storage)
		this.test = new testStorage.EthBridgePeersStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgePeersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeersStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgePendingBridgeSignatureVersionsStorage {
	private readonly production: productionStorage.EthBridgePendingBridgeSignatureVersionsStorage
	private readonly stage: stageStorage.EthBridgePendingBridgeSignatureVersionsStorage
	private readonly test: testStorage.EthBridgePendingBridgeSignatureVersionsStorage
	private readonly dev: devStorage.EthBridgePendingBridgeSignatureVersionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
		this.test = new testStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV38(): productionStorage.EthBridgePendingBridgeSignatureVersionsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.EthBridgePendingBridgeSignatureVersionsStorage['asV38'] {
		return this.production.asV38
	}
}

export class EthBridgePendingEthPeersSyncStorage {
	private readonly production: productionStorage.EthBridgePendingEthPeersSyncStorage
	private readonly stage: stageStorage.EthBridgePendingEthPeersSyncStorage
	private readonly test: testStorage.EthBridgePendingEthPeersSyncStorage
	private readonly dev: devStorage.EthBridgePendingEthPeersSyncStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
		this.test = new testStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgePendingEthPeersSyncStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePendingEthPeersSyncStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgePendingPeerStorage {
	private readonly production: productionStorage.EthBridgePendingPeerStorage
	private readonly stage: stageStorage.EthBridgePendingPeerStorage
	private readonly test: testStorage.EthBridgePendingPeerStorage
	private readonly dev: devStorage.EthBridgePendingPeerStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgePendingPeerStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingPeerStorage(ctx, storage)
		this.test = new testStorage.EthBridgePendingPeerStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingPeerStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgePendingPeerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePendingPeerStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRegisteredAssetStorage {
	private readonly production: productionStorage.EthBridgeRegisteredAssetStorage
	private readonly stage: stageStorage.EthBridgeRegisteredAssetStorage
	private readonly test: testStorage.EthBridgeRegisteredAssetStorage
	private readonly dev: devStorage.EthBridgeRegisteredAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRegisteredAssetStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredAssetStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRegisteredAssetStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredAssetStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRegisteredSidechainAssetStorage {
	private readonly production: productionStorage.EthBridgeRegisteredSidechainAssetStorage
	private readonly stage: stageStorage.EthBridgeRegisteredSidechainAssetStorage
	private readonly test: testStorage.EthBridgeRegisteredSidechainAssetStorage
	private readonly dev: devStorage.EthBridgeRegisteredSidechainAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRegisteredSidechainTokenStorage {
	private readonly production: productionStorage.EthBridgeRegisteredSidechainTokenStorage
	private readonly stage: stageStorage.EthBridgeRegisteredSidechainTokenStorage
	private readonly test: testStorage.EthBridgeRegisteredSidechainTokenStorage
	private readonly dev: devStorage.EthBridgeRegisteredSidechainTokenStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRequestApprovalsStorage {
	private readonly production: productionStorage.EthBridgeRequestApprovalsStorage
	private readonly stage: stageStorage.EthBridgeRequestApprovalsStorage
	private readonly test: testStorage.EthBridgeRequestApprovalsStorage
	private readonly dev: devStorage.EthBridgeRequestApprovalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRequestApprovalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestApprovalsStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRequestStatusesStorage {
	private readonly production: productionStorage.EthBridgeRequestStatusesStorage
	private readonly stage: stageStorage.EthBridgeRequestStatusesStorage
	private readonly test: testStorage.EthBridgeRequestStatusesStorage
	private readonly dev: devStorage.EthBridgeRequestStatusesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRequestStatusesStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestStatusesStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRequestStatusesStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestStatusesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRequestStatusesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestStatusesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRequestStatusesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRequestStatusesStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.EthBridgeRequestStatusesStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.EthBridgeRequestStatusesStorage['asV53'] {
		return this.production.asV53
	}
}

export class EthBridgeRequestSubmissionHeightStorage {
	private readonly production: productionStorage.EthBridgeRequestSubmissionHeightStorage
	private readonly stage: stageStorage.EthBridgeRequestSubmissionHeightStorage
	private readonly test: testStorage.EthBridgeRequestSubmissionHeightStorage
	private readonly dev: devStorage.EthBridgeRequestSubmissionHeightStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRequestSubmissionHeightStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestSubmissionHeightStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeRequestsStorage {
	private readonly production: productionStorage.EthBridgeRequestsStorage
	private readonly stage: stageStorage.EthBridgeRequestsStorage
	private readonly test: testStorage.EthBridgeRequestsStorage
	private readonly dev: devStorage.EthBridgeRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestsStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRequestsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRequestsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRequestsStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeRequestsQueueStorage {
	private readonly production: productionStorage.EthBridgeRequestsQueueStorage
	private readonly stage: stageStorage.EthBridgeRequestsQueueStorage
	private readonly test: testStorage.EthBridgeRequestsQueueStorage
	private readonly dev: devStorage.EthBridgeRequestsQueueStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeRequestsQueueStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestsQueueStorage(ctx, storage)
		this.test = new testStorage.EthBridgeRequestsQueueStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestsQueueStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeRequestsQueueStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestsQueueStorage['asV1'] {
		return this.production.asV1
	}
}

export class EthBridgeSidechainAssetPrecisionStorage {
	private readonly production: productionStorage.EthBridgeSidechainAssetPrecisionStorage
	private readonly stage: stageStorage.EthBridgeSidechainAssetPrecisionStorage
	private readonly test: testStorage.EthBridgeSidechainAssetPrecisionStorage
	private readonly dev: devStorage.EthBridgeSidechainAssetPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
		this.test = new testStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['asV42'] {
		return this.production.asV42
	}
}

export class EthBridgeValMasterContractAddressStorage {
	private readonly production: productionStorage.EthBridgeValMasterContractAddressStorage
	private readonly stage: stageStorage.EthBridgeValMasterContractAddressStorage
	private readonly test: testStorage.EthBridgeValMasterContractAddressStorage
	private readonly dev: devStorage.EthBridgeValMasterContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
		this.test = new testStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeValMasterContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeValMasterContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeValMasterContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeValMasterContractAddressStorage['asV33'] {
		return this.production.asV33
	}
}

export class EthBridgeXorMasterContractAddressStorage {
	private readonly production: productionStorage.EthBridgeXorMasterContractAddressStorage
	private readonly stage: stageStorage.EthBridgeXorMasterContractAddressStorage
	private readonly test: testStorage.EthBridgeXorMasterContractAddressStorage
	private readonly dev: devStorage.EthBridgeXorMasterContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
		this.test = new testStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.EthBridgeXorMasterContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeXorMasterContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeXorMasterContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeXorMasterContractAddressStorage['asV33'] {
		return this.production.asV33
	}
}

export class FarmingPoolFarmersStorage {
	private readonly production: productionStorage.FarmingPoolFarmersStorage
	private readonly stage: stageStorage.FarmingPoolFarmersStorage
	private readonly test: testStorage.FarmingPoolFarmersStorage
	private readonly dev: devStorage.FarmingPoolFarmersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.FarmingPoolFarmersStorage(ctx, storage)
		this.stage = new stageStorage.FarmingPoolFarmersStorage(ctx, storage)
		this.test = new testStorage.FarmingPoolFarmersStorage(ctx, storage)
		this.dev = new devStorage.FarmingPoolFarmersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.FarmingPoolFarmersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingPoolFarmersStorage['asV7'] {
		return this.production.asV7
	}
}

export class FarmingPoolsStorage {
	private readonly production: productionStorage.FarmingPoolsStorage
	private readonly stage: stageStorage.FarmingPoolsStorage
	private readonly test: testStorage.FarmingPoolsStorage
	private readonly dev: devStorage.FarmingPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.FarmingPoolsStorage(ctx, storage)
		this.stage = new stageStorage.FarmingPoolsStorage(ctx, storage)
		this.test = new testStorage.FarmingPoolsStorage(ctx, storage)
		this.dev = new devStorage.FarmingPoolsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.FarmingPoolsStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingPoolsStorage['asV7'] {
		return this.production.asV7
	}
}

export class FarmingSavedValuesStorage {
	private readonly production: productionStorage.FarmingSavedValuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.FarmingSavedValuesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV7(): productionStorage.FarmingSavedValuesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingSavedValuesStorage['asV7'] {
		return this.production.asV7
	}
}

export class GrandpaCurrentSetIdStorage {
	private readonly production: productionStorage.GrandpaCurrentSetIdStorage
	private readonly stage: stageStorage.GrandpaCurrentSetIdStorage
	private readonly test: testStorage.GrandpaCurrentSetIdStorage
	private readonly dev: devStorage.GrandpaCurrentSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaCurrentSetIdStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaCurrentSetIdStorage(ctx, storage)
		this.test = new testStorage.GrandpaCurrentSetIdStorage(ctx, storage)
		this.dev = new devStorage.GrandpaCurrentSetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaCurrentSetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaCurrentSetIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaNextForcedStorage {
	private readonly production: productionStorage.GrandpaNextForcedStorage
	private readonly stage: stageStorage.GrandpaNextForcedStorage
	private readonly test: testStorage.GrandpaNextForcedStorage
	private readonly dev: devStorage.GrandpaNextForcedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaNextForcedStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaNextForcedStorage(ctx, storage)
		this.test = new testStorage.GrandpaNextForcedStorage(ctx, storage)
		this.dev = new devStorage.GrandpaNextForcedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaNextForcedStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaNextForcedStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaPendingChangeStorage {
	private readonly production: productionStorage.GrandpaPendingChangeStorage
	private readonly stage: stageStorage.GrandpaPendingChangeStorage
	private readonly test: testStorage.GrandpaPendingChangeStorage
	private readonly dev: devStorage.GrandpaPendingChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaPendingChangeStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaPendingChangeStorage(ctx, storage)
		this.test = new testStorage.GrandpaPendingChangeStorage(ctx, storage)
		this.dev = new devStorage.GrandpaPendingChangeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaPendingChangeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaPendingChangeStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaSetIdSessionStorage {
	private readonly production: productionStorage.GrandpaSetIdSessionStorage
	private readonly stage: stageStorage.GrandpaSetIdSessionStorage
	private readonly test: testStorage.GrandpaSetIdSessionStorage
	private readonly dev: devStorage.GrandpaSetIdSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaSetIdSessionStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaSetIdSessionStorage(ctx, storage)
		this.test = new testStorage.GrandpaSetIdSessionStorage(ctx, storage)
		this.dev = new devStorage.GrandpaSetIdSessionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaSetIdSessionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaSetIdSessionStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaStalledStorage {
	private readonly production: productionStorage.GrandpaStalledStorage
	private readonly stage: stageStorage.GrandpaStalledStorage
	private readonly test: testStorage.GrandpaStalledStorage
	private readonly dev: devStorage.GrandpaStalledStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaStalledStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaStalledStorage(ctx, storage)
		this.test = new testStorage.GrandpaStalledStorage(ctx, storage)
		this.dev = new devStorage.GrandpaStalledStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaStalledStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaStalledStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaStateStorage {
	private readonly production: productionStorage.GrandpaStateStorage
	private readonly stage: stageStorage.GrandpaStateStorage
	private readonly test: testStorage.GrandpaStateStorage
	private readonly dev: devStorage.GrandpaStateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaStateStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaStateStorage(ctx, storage)
		this.test = new testStorage.GrandpaStateStorage(ctx, storage)
		this.dev = new devStorage.GrandpaStateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.GrandpaStateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaStateStorage['asV42'] {
		return this.production.asV42
	}
}

export class GrandpaFinalityCurrentSetIdStorage {
	private readonly production: productionStorage.GrandpaFinalityCurrentSetIdStorage
	private readonly stage: stageStorage.GrandpaFinalityCurrentSetIdStorage
	private readonly test: testStorage.GrandpaFinalityCurrentSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalityCurrentSetIdStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityCurrentSetIdStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalityCurrentSetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalityCurrentSetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityCurrentSetIdStorage['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaFinalityNextForcedStorage {
	private readonly production: productionStorage.GrandpaFinalityNextForcedStorage
	private readonly stage: stageStorage.GrandpaFinalityNextForcedStorage
	private readonly test: testStorage.GrandpaFinalityNextForcedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalityNextForcedStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityNextForcedStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalityNextForcedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalityNextForcedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityNextForcedStorage['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaFinalityPendingChangeStorage {
	private readonly production: productionStorage.GrandpaFinalityPendingChangeStorage
	private readonly stage: stageStorage.GrandpaFinalityPendingChangeStorage
	private readonly test: testStorage.GrandpaFinalityPendingChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalityPendingChangeStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityPendingChangeStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalityPendingChangeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalityPendingChangeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityPendingChangeStorage['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaFinalitySetIdSessionStorage {
	private readonly production: productionStorage.GrandpaFinalitySetIdSessionStorage
	private readonly stage: stageStorage.GrandpaFinalitySetIdSessionStorage
	private readonly test: testStorage.GrandpaFinalitySetIdSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalitySetIdSessionStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalitySetIdSessionStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalitySetIdSessionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalitySetIdSessionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalitySetIdSessionStorage['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaFinalityStalledStorage {
	private readonly production: productionStorage.GrandpaFinalityStalledStorage
	private readonly stage: stageStorage.GrandpaFinalityStalledStorage
	private readonly test: testStorage.GrandpaFinalityStalledStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalityStalledStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityStalledStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalityStalledStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalityStalledStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityStalledStorage['asV1'] {
		return this.production.asV1
	}
}

export class GrandpaFinalityStateStorage {
	private readonly production: productionStorage.GrandpaFinalityStateStorage
	private readonly stage: stageStorage.GrandpaFinalityStateStorage
	private readonly test: testStorage.GrandpaFinalityStateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.GrandpaFinalityStateStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityStateStorage(ctx, storage)
		this.test = new testStorage.GrandpaFinalityStateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.GrandpaFinalityStateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityStateStorage['asV1'] {
		return this.production.asV1
	}
}

export class HermesGovernancePlatformAuthorityAccountStorage {
	private readonly production: productionStorage.HermesGovernancePlatformAuthorityAccountStorage
	private readonly stage: stageStorage.HermesGovernancePlatformAuthorityAccountStorage
	private readonly test: testStorage.HermesGovernancePlatformAuthorityAccountStorage
	private readonly dev: devStorage.HermesGovernancePlatformAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.HermesGovernancePlatformAuthorityAccountStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformAuthorityAccountStorage['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformHermesPollDataStorage {
	private readonly production: productionStorage.HermesGovernancePlatformHermesPollDataStorage
	private readonly stage: stageStorage.HermesGovernancePlatformHermesPollDataStorage
	private readonly test: testStorage.HermesGovernancePlatformHermesPollDataStorage
	private readonly dev: devStorage.HermesGovernancePlatformHermesPollDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformHermesVotingsStorage {
	private readonly production: productionStorage.HermesGovernancePlatformHermesVotingsStorage
	private readonly stage: stageStorage.HermesGovernancePlatformHermesVotingsStorage
	private readonly test: testStorage.HermesGovernancePlatformHermesVotingsStorage
	private readonly dev: devStorage.HermesGovernancePlatformHermesVotingsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['asV57'] {
		return this.production.asV57
	}
}

export class HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage {
	private readonly production: productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage
	private readonly stage: stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage
	private readonly test: testStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage
	private readonly dev: devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformMinimumHermesVotingAmountStorage {
	private readonly production: productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage
	private readonly stage: stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage
	private readonly test: testStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage
	private readonly dev: devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV47(): productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['asV47'] {
		return this.production.asV47
	}
}

export class HermesGovernancePlatformPalletStorageVersionStorage {
	private readonly production: productionStorage.HermesGovernancePlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.HermesGovernancePlatformPalletStorageVersionStorage
	private readonly test: testStorage.HermesGovernancePlatformPalletStorageVersionStorage
	private readonly dev: devStorage.HermesGovernancePlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.test = new testStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV57(): productionStorage.HermesGovernancePlatformPalletStorageVersionStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformPalletStorageVersionStorage['asV57'] {
		return this.production.asV57
	}
}

export class IdentityIdentityOfStorage {
	private readonly production: productionStorage.IdentityIdentityOfStorage
	private readonly stage: stageStorage.IdentityIdentityOfStorage
	private readonly test: testStorage.IdentityIdentityOfStorage
	private readonly dev: devStorage.IdentityIdentityOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IdentityIdentityOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentityIdentityOfStorage(ctx, storage)
		this.test = new testStorage.IdentityIdentityOfStorage(ctx, storage)
		this.dev = new devStorage.IdentityIdentityOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV3(): productionStorage.IdentityIdentityOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentityIdentityOfStorage['asV3'] {
		return this.production.asV3
	}
}

export class IdentityRegistrarsStorage {
	private readonly production: productionStorage.IdentityRegistrarsStorage
	private readonly stage: stageStorage.IdentityRegistrarsStorage
	private readonly test: testStorage.IdentityRegistrarsStorage
	private readonly dev: devStorage.IdentityRegistrarsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IdentityRegistrarsStorage(ctx, storage)
		this.stage = new stageStorage.IdentityRegistrarsStorage(ctx, storage)
		this.test = new testStorage.IdentityRegistrarsStorage(ctx, storage)
		this.dev = new devStorage.IdentityRegistrarsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV3(): productionStorage.IdentityRegistrarsStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentityRegistrarsStorage['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySubsOfStorage {
	private readonly production: productionStorage.IdentitySubsOfStorage
	private readonly stage: stageStorage.IdentitySubsOfStorage
	private readonly test: testStorage.IdentitySubsOfStorage
	private readonly dev: devStorage.IdentitySubsOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IdentitySubsOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentitySubsOfStorage(ctx, storage)
		this.test = new testStorage.IdentitySubsOfStorage(ctx, storage)
		this.dev = new devStorage.IdentitySubsOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV3(): productionStorage.IdentitySubsOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentitySubsOfStorage['asV3'] {
		return this.production.asV3
	}
}

export class IdentitySuperOfStorage {
	private readonly production: productionStorage.IdentitySuperOfStorage
	private readonly stage: stageStorage.IdentitySuperOfStorage
	private readonly test: testStorage.IdentitySuperOfStorage
	private readonly dev: devStorage.IdentitySuperOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IdentitySuperOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentitySuperOfStorage(ctx, storage)
		this.test = new testStorage.IdentitySuperOfStorage(ctx, storage)
		this.dev = new devStorage.IdentitySuperOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV3(): productionStorage.IdentitySuperOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentitySuperOfStorage['asV3'] {
		return this.production.asV3
	}
}

export class ImOnlineAuthoredBlocksStorage {
	private readonly production: productionStorage.ImOnlineAuthoredBlocksStorage
	private readonly stage: stageStorage.ImOnlineAuthoredBlocksStorage
	private readonly test: testStorage.ImOnlineAuthoredBlocksStorage
	private readonly dev: devStorage.ImOnlineAuthoredBlocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
		this.test = new testStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.ImOnlineAuthoredBlocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineAuthoredBlocksStorage['asV1'] {
		return this.production.asV1
	}
}

export class ImOnlineHeartbeatAfterStorage {
	private readonly production: productionStorage.ImOnlineHeartbeatAfterStorage
	private readonly stage: stageStorage.ImOnlineHeartbeatAfterStorage
	private readonly test: testStorage.ImOnlineHeartbeatAfterStorage
	private readonly dev: devStorage.ImOnlineHeartbeatAfterStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
		this.test = new testStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.ImOnlineHeartbeatAfterStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineHeartbeatAfterStorage['asV1'] {
		return this.production.asV1
	}
}

export class ImOnlineKeysStorage {
	private readonly production: productionStorage.ImOnlineKeysStorage
	private readonly stage: stageStorage.ImOnlineKeysStorage
	private readonly test: testStorage.ImOnlineKeysStorage
	private readonly dev: devStorage.ImOnlineKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ImOnlineKeysStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineKeysStorage(ctx, storage)
		this.test = new testStorage.ImOnlineKeysStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineKeysStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.ImOnlineKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineKeysStorage['asV1'] {
		return this.production.asV1
	}
}

export class ImOnlineReceivedHeartbeatsStorage {
	private readonly production: productionStorage.ImOnlineReceivedHeartbeatsStorage
	private readonly stage: stageStorage.ImOnlineReceivedHeartbeatsStorage
	private readonly test: testStorage.ImOnlineReceivedHeartbeatsStorage
	private readonly dev: devStorage.ImOnlineReceivedHeartbeatsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
		this.test = new testStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.ImOnlineReceivedHeartbeatsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineReceivedHeartbeatsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.ImOnlineReceivedHeartbeatsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ImOnlineReceivedHeartbeatsStorage['asV42'] {
		return this.production.asV42
	}
}

export class Instance1CollectiveMembersStorage {
	private readonly production: productionStorage.Instance1CollectiveMembersStorage
	private readonly stage: stageStorage.Instance1CollectiveMembersStorage
	private readonly test: testStorage.Instance1CollectiveMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectiveMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveMembersStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectiveMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectiveMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveMembersStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1CollectivePrimeStorage {
	private readonly production: productionStorage.Instance1CollectivePrimeStorage
	private readonly stage: stageStorage.Instance1CollectivePrimeStorage
	private readonly test: testStorage.Instance1CollectivePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectivePrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectivePrimeStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectivePrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectivePrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectivePrimeStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1CollectiveProposalCountStorage {
	private readonly production: productionStorage.Instance1CollectiveProposalCountStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalCountStorage
	private readonly test: testStorage.Instance1CollectiveProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectiveProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalCountStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectiveProposalCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectiveProposalCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1CollectiveProposalOfStorage {
	private readonly production: productionStorage.Instance1CollectiveProposalOfStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalOfStorage
	private readonly test: testStorage.Instance1CollectiveProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectiveProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalOfStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectiveProposalOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectiveProposalOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.Instance1CollectiveProposalOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.Instance1CollectiveProposalOfStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.Instance1CollectiveProposalOfStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.Instance1CollectiveProposalOfStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.Instance1CollectiveProposalOfStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.Instance1CollectiveProposalOfStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.Instance1CollectiveProposalOfStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.Instance1CollectiveProposalOfStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.Instance1CollectiveProposalOfStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.Instance1CollectiveProposalOfStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.Instance1CollectiveProposalOfStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.Instance1CollectiveProposalOfStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.Instance1CollectiveProposalOfStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.Instance1CollectiveProposalOfStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.Instance1CollectiveProposalOfStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.Instance1CollectiveProposalOfStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.Instance1CollectiveProposalOfStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.Instance1CollectiveProposalOfStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.Instance1CollectiveProposalOfStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.Instance1CollectiveProposalOfStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.Instance1CollectiveProposalOfStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.Instance1CollectiveProposalOfStorage['asV38'] {
		return this.production.asV38
	}
	get isV33Stage(): stageStorage.Instance1CollectiveProposalOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageStorage.Instance1CollectiveProposalOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageStorage.Instance1CollectiveProposalOfStorage['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageStorage.Instance1CollectiveProposalOfStorage['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageStorage.Instance1CollectiveProposalOfStorage['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageStorage.Instance1CollectiveProposalOfStorage['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageStorage.Instance1CollectiveProposalOfStorage['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageStorage.Instance1CollectiveProposalOfStorage['asV38'] {
		return this.stage.asV38
	}
}

export class Instance1CollectiveProposalsStorage {
	private readonly production: productionStorage.Instance1CollectiveProposalsStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalsStorage
	private readonly test: testStorage.Instance1CollectiveProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectiveProposalsStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalsStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectiveProposalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectiveProposalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalsStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1CollectiveVotingStorage {
	private readonly production: productionStorage.Instance1CollectiveVotingStorage
	private readonly stage: stageStorage.Instance1CollectiveVotingStorage
	private readonly test: testStorage.Instance1CollectiveVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1CollectiveVotingStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveVotingStorage(ctx, storage)
		this.test = new testStorage.Instance1CollectiveVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1CollectiveVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveVotingStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1MembershipMembersStorage {
	private readonly production: productionStorage.Instance1MembershipMembersStorage
	private readonly stage: stageStorage.Instance1MembershipMembersStorage
	private readonly test: testStorage.Instance1MembershipMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1MembershipMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance1MembershipMembersStorage(ctx, storage)
		this.test = new testStorage.Instance1MembershipMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1MembershipMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1MembershipMembersStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance1MembershipPrimeStorage {
	private readonly production: productionStorage.Instance1MembershipPrimeStorage
	private readonly stage: stageStorage.Instance1MembershipPrimeStorage
	private readonly test: testStorage.Instance1MembershipPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance1MembershipPrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance1MembershipPrimeStorage(ctx, storage)
		this.test = new testStorage.Instance1MembershipPrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance1MembershipPrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1MembershipPrimeStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance2CollectiveMembersStorage {
	private readonly production: productionStorage.Instance2CollectiveMembersStorage
	private readonly stage: stageStorage.Instance2CollectiveMembersStorage
	private readonly test: testStorage.Instance2CollectiveMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectiveMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveMembersStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectiveMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectiveMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveMembersStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance2CollectivePrimeStorage {
	private readonly production: productionStorage.Instance2CollectivePrimeStorage
	private readonly stage: stageStorage.Instance2CollectivePrimeStorage
	private readonly test: testStorage.Instance2CollectivePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectivePrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectivePrimeStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectivePrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectivePrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectivePrimeStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance2CollectiveProposalCountStorage {
	private readonly production: productionStorage.Instance2CollectiveProposalCountStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalCountStorage
	private readonly test: testStorage.Instance2CollectiveProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectiveProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalCountStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectiveProposalCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectiveProposalCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance2CollectiveProposalOfStorage {
	private readonly production: productionStorage.Instance2CollectiveProposalOfStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalOfStorage
	private readonly test: testStorage.Instance2CollectiveProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectiveProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalOfStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectiveProposalOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectiveProposalOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.Instance2CollectiveProposalOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.Instance2CollectiveProposalOfStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.Instance2CollectiveProposalOfStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.Instance2CollectiveProposalOfStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.Instance2CollectiveProposalOfStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.Instance2CollectiveProposalOfStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.Instance2CollectiveProposalOfStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.Instance2CollectiveProposalOfStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.Instance2CollectiveProposalOfStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.Instance2CollectiveProposalOfStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.Instance2CollectiveProposalOfStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.Instance2CollectiveProposalOfStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.Instance2CollectiveProposalOfStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.Instance2CollectiveProposalOfStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.Instance2CollectiveProposalOfStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.Instance2CollectiveProposalOfStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.Instance2CollectiveProposalOfStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.Instance2CollectiveProposalOfStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.Instance2CollectiveProposalOfStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.Instance2CollectiveProposalOfStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.Instance2CollectiveProposalOfStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.Instance2CollectiveProposalOfStorage['asV38'] {
		return this.production.asV38
	}
	get isV33Stage(): stageStorage.Instance2CollectiveProposalOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageStorage.Instance2CollectiveProposalOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageStorage.Instance2CollectiveProposalOfStorage['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageStorage.Instance2CollectiveProposalOfStorage['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageStorage.Instance2CollectiveProposalOfStorage['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageStorage.Instance2CollectiveProposalOfStorage['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageStorage.Instance2CollectiveProposalOfStorage['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageStorage.Instance2CollectiveProposalOfStorage['asV38'] {
		return this.stage.asV38
	}
}

export class Instance2CollectiveProposalsStorage {
	private readonly production: productionStorage.Instance2CollectiveProposalsStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalsStorage
	private readonly test: testStorage.Instance2CollectiveProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectiveProposalsStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalsStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectiveProposalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectiveProposalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalsStorage['asV1'] {
		return this.production.asV1
	}
}

export class Instance2CollectiveVotingStorage {
	private readonly production: productionStorage.Instance2CollectiveVotingStorage
	private readonly stage: stageStorage.Instance2CollectiveVotingStorage
	private readonly test: testStorage.Instance2CollectiveVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.Instance2CollectiveVotingStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveVotingStorage(ctx, storage)
		this.test = new testStorage.Instance2CollectiveVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.Instance2CollectiveVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveVotingStorage['asV1'] {
		return this.production.asV1
	}
}

export class IrohaMigrationAccountStorage {
	private readonly production: productionStorage.IrohaMigrationAccountStorage
	private readonly stage: stageStorage.IrohaMigrationAccountStorage
	private readonly test: testStorage.IrohaMigrationAccountStorage
	private readonly dev: devStorage.IrohaMigrationAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationAccountStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationAccountStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationAccountStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationAccountStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationBalancesStorage {
	private readonly production: productionStorage.IrohaMigrationBalancesStorage
	private readonly stage: stageStorage.IrohaMigrationBalancesStorage
	private readonly test: testStorage.IrohaMigrationBalancesStorage
	private readonly dev: devStorage.IrohaMigrationBalancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationBalancesStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationBalancesStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationBalancesStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationBalancesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationBalancesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationBalancesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationBalancesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationBalancesStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationMigratedAccountsStorage {
	private readonly production: productionStorage.IrohaMigrationMigratedAccountsStorage
	private readonly stage: stageStorage.IrohaMigrationMigratedAccountsStorage
	private readonly test: testStorage.IrohaMigrationMigratedAccountsStorage
	private readonly dev: devStorage.IrohaMigrationMigratedAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationMigratedAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationMigratedAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationMigratedAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationMigratedAccountsStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationPendingMultiSigAccountsStorage {
	private readonly production: productionStorage.IrohaMigrationPendingMultiSigAccountsStorage
	private readonly stage: stageStorage.IrohaMigrationPendingMultiSigAccountsStorage
	private readonly test: testStorage.IrohaMigrationPendingMultiSigAccountsStorage
	private readonly dev: devStorage.IrohaMigrationPendingMultiSigAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationPendingReferralsStorage {
	private readonly production: productionStorage.IrohaMigrationPendingReferralsStorage
	private readonly stage: stageStorage.IrohaMigrationPendingReferralsStorage
	private readonly test: testStorage.IrohaMigrationPendingReferralsStorage
	private readonly dev: devStorage.IrohaMigrationPendingReferralsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationPendingReferralsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPendingReferralsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPendingReferralsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPendingReferralsStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationPublicKeysStorage {
	private readonly production: productionStorage.IrohaMigrationPublicKeysStorage
	private readonly stage: stageStorage.IrohaMigrationPublicKeysStorage
	private readonly test: testStorage.IrohaMigrationPublicKeysStorage
	private readonly dev: devStorage.IrohaMigrationPublicKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationPublicKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPublicKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPublicKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPublicKeysStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationQuorumsStorage {
	private readonly production: productionStorage.IrohaMigrationQuorumsStorage
	private readonly stage: stageStorage.IrohaMigrationQuorumsStorage
	private readonly test: testStorage.IrohaMigrationQuorumsStorage
	private readonly dev: devStorage.IrohaMigrationQuorumsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationQuorumsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationQuorumsStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationQuorumsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationQuorumsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationQuorumsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationQuorumsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationQuorumsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationQuorumsStorage['asV42'] {
		return this.production.asV42
	}
}

export class IrohaMigrationReferrersStorage {
	private readonly production: productionStorage.IrohaMigrationReferrersStorage
	private readonly stage: stageStorage.IrohaMigrationReferrersStorage
	private readonly test: testStorage.IrohaMigrationReferrersStorage
	private readonly dev: devStorage.IrohaMigrationReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.IrohaMigrationReferrersStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationReferrersStorage(ctx, storage)
		this.test = new testStorage.IrohaMigrationReferrersStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationReferrersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.IrohaMigrationReferrersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationReferrersStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationReferrersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationReferrersStorage['asV42'] {
		return this.production.asV42
	}
}

export class LeafProviderLatestDigestStorage {
	private readonly production: productionStorage.LeafProviderLatestDigestStorage
	private readonly stage: stageStorage.LeafProviderLatestDigestStorage
	private readonly test: testStorage.LeafProviderLatestDigestStorage
	private readonly dev: devStorage.LeafProviderLatestDigestStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.LeafProviderLatestDigestStorage(ctx, storage)
		this.stage = new stageStorage.LeafProviderLatestDigestStorage(ctx, storage)
		this.test = new testStorage.LeafProviderLatestDigestStorage(ctx, storage)
		this.dev = new devStorage.LeafProviderLatestDigestStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.LeafProviderLatestDigestStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.LeafProviderLatestDigestStorage['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageStorage.LeafProviderLatestDigestStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.LeafProviderLatestDigestStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolBaseFeeStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolBaseFeeStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolBaseFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolCollateralReservesStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolCollateralReservesStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolDistributionAccountsEntryStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV46'] {
		return this.production.asV46
	}
	get isV53(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV57'] {
		return this.production.asV57
	}
}

export class MulticollateralBondingCurvePoolEnabledTargetsStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolFreeReservesAccountIdStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolIncentivesAccountIdStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['asV1'] {
		return this.production.asV1
	}
}

export class MulticollateralBondingCurvePoolInitialPriceStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolInitialPriceStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolInitialPriceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['asV1'] {
		return this.production.asV1
	}
}

export class MulticollateralBondingCurvePoolPendingFreeReservesStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolPriceChangeRateStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolPriceChangeStepStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolReferenceAssetIdStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolReservesAccStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolReservesAccStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolReservesAccStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolReservesAccStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolReservesAccStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV57'] {
		return this.production.asV57
	}
}

export class MulticollateralBondingCurvePoolRewardsStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolRewardsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolRewardsStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolRewardsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolRewardsStorage['asV1'] {
		return this.production.asV1
	}
}

export class MulticollateralBondingCurvePoolSellPriceCoefficientStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV42'] {
		return this.production.asV42
	}
}

export class MulticollateralBondingCurvePoolTotalRewardsStorage {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage
	private readonly test: testStorage.MulticollateralBondingCurvePoolTotalRewardsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
		this.test = new testStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['asV1'] {
		return this.production.asV1
	}
}

export class MultisigCallsStorage {
	private readonly production: productionStorage.MultisigCallsStorage
	private readonly stage: stageStorage.MultisigCallsStorage
	private readonly test: testStorage.MultisigCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MultisigCallsStorage(ctx, storage)
		this.stage = new stageStorage.MultisigCallsStorage(ctx, storage)
		this.test = new testStorage.MultisigCallsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.MultisigCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MultisigCallsStorage['asV1'] {
		return this.production.asV1
	}
}

export class MultisigMultisigsStorage {
	private readonly production: productionStorage.MultisigMultisigsStorage
	private readonly stage: stageStorage.MultisigMultisigsStorage
	private readonly test: testStorage.MultisigMultisigsStorage
	private readonly dev: devStorage.MultisigMultisigsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MultisigMultisigsStorage(ctx, storage)
		this.stage = new stageStorage.MultisigMultisigsStorage(ctx, storage)
		this.test = new testStorage.MultisigMultisigsStorage(ctx, storage)
		this.dev = new devStorage.MultisigMultisigsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.MultisigMultisigsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MultisigMultisigsStorage['asV1'] {
		return this.production.asV1
	}
}

export class MultisigVerifierPeerKeysStorage {
	private readonly production: productionStorage.MultisigVerifierPeerKeysStorage
	private readonly stage: stageStorage.MultisigVerifierPeerKeysStorage
	private readonly test: testStorage.MultisigVerifierPeerKeysStorage
	private readonly dev: devStorage.MultisigVerifierPeerKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
		this.stage = new stageStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
		this.test = new testStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
		this.dev = new devStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.MultisigVerifierPeerKeysStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.MultisigVerifierPeerKeysStorage['asV64'] {
		return this.production.asV64
	}
}

export class MultisigVerifierThisNetworkIdStorage {
	private readonly production: productionStorage.MultisigVerifierThisNetworkIdStorage
	private readonly stage: stageStorage.MultisigVerifierThisNetworkIdStorage
	private readonly test: testStorage.MultisigVerifierThisNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.MultisigVerifierThisNetworkIdStorage(ctx, storage)
		this.stage = new stageStorage.MultisigVerifierThisNetworkIdStorage(ctx, storage)
		this.test = new testStorage.MultisigVerifierThisNetworkIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV64(): productionStorage.MultisigVerifierThisNetworkIdStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.MultisigVerifierThisNetworkIdStorage['asV64'] {
		return this.production.asV64
	}
}

export class OffencesConcurrentReportsIndexStorage {
	private readonly production: productionStorage.OffencesConcurrentReportsIndexStorage
	private readonly stage: stageStorage.OffencesConcurrentReportsIndexStorage
	private readonly test: testStorage.OffencesConcurrentReportsIndexStorage
	private readonly dev: devStorage.OffencesConcurrentReportsIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
		this.stage = new stageStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
		this.test = new testStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
		this.dev = new devStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.OffencesConcurrentReportsIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesConcurrentReportsIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class OffencesDeferredOffencesStorage {
	private readonly production: productionStorage.OffencesDeferredOffencesStorage
	private readonly stage: stageStorage.OffencesDeferredOffencesStorage
	private readonly test: testStorage.OffencesDeferredOffencesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OffencesDeferredOffencesStorage(ctx, storage)
		this.stage = new stageStorage.OffencesDeferredOffencesStorage(ctx, storage)
		this.test = new testStorage.OffencesDeferredOffencesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.OffencesDeferredOffencesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesDeferredOffencesStorage['asV1'] {
		return this.production.asV1
	}
}

export class OffencesReportsStorage {
	private readonly production: productionStorage.OffencesReportsStorage
	private readonly stage: stageStorage.OffencesReportsStorage
	private readonly test: testStorage.OffencesReportsStorage
	private readonly dev: devStorage.OffencesReportsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OffencesReportsStorage(ctx, storage)
		this.stage = new stageStorage.OffencesReportsStorage(ctx, storage)
		this.test = new testStorage.OffencesReportsStorage(ctx, storage)
		this.dev = new devStorage.OffencesReportsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.OffencesReportsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesReportsStorage['asV1'] {
		return this.production.asV1
	}
}

export class OffencesReportsByKindIndexStorage {
	private readonly production: productionStorage.OffencesReportsByKindIndexStorage
	private readonly stage: stageStorage.OffencesReportsByKindIndexStorage
	private readonly test: testStorage.OffencesReportsByKindIndexStorage
	private readonly dev: devStorage.OffencesReportsByKindIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OffencesReportsByKindIndexStorage(ctx, storage)
		this.stage = new stageStorage.OffencesReportsByKindIndexStorage(ctx, storage)
		this.test = new testStorage.OffencesReportsByKindIndexStorage(ctx, storage)
		this.dev = new devStorage.OffencesReportsByKindIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.OffencesReportsByKindIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesReportsByKindIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class OracleProxyEnabledOraclesStorage {
	private readonly production: productionStorage.OracleProxyEnabledOraclesStorage
	private readonly stage: stageStorage.OracleProxyEnabledOraclesStorage
	private readonly test: testStorage.OracleProxyEnabledOraclesStorage
	private readonly dev: devStorage.OracleProxyEnabledOraclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
		this.stage = new stageStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
		this.test = new testStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
		this.dev = new devStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.OracleProxyEnabledOraclesStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.OracleProxyEnabledOraclesStorage['asV45'] {
		return this.production.asV45
	}
}

export class OracleProxySymbolProvidersStorage {
	private readonly production: productionStorage.OracleProxySymbolProvidersStorage
	private readonly stage: stageStorage.OracleProxySymbolProvidersStorage
	private readonly test: testStorage.OracleProxySymbolProvidersStorage
	private readonly dev: devStorage.OracleProxySymbolProvidersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.OracleProxySymbolProvidersStorage(ctx, storage)
		this.stage = new stageStorage.OracleProxySymbolProvidersStorage(ctx, storage)
		this.test = new testStorage.OracleProxySymbolProvidersStorage(ctx, storage)
		this.dev = new devStorage.OracleProxySymbolProvidersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.OracleProxySymbolProvidersStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.OracleProxySymbolProvidersStorage['asV45'] {
		return this.production.asV45
	}
}

export class ParachainBridgeAppAllowedParachainAssetsStorage {
	private readonly production: productionStorage.ParachainBridgeAppAllowedParachainAssetsStorage
	private readonly stage: stageStorage.ParachainBridgeAppAllowedParachainAssetsStorage
	private readonly test: testStorage.ParachainBridgeAppAllowedParachainAssetsStorage
	private readonly dev: devStorage.ParachainBridgeAppAllowedParachainAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ParachainBridgeAppAllowedParachainAssetsStorage(ctx, storage)
		this.stage = new stageStorage.ParachainBridgeAppAllowedParachainAssetsStorage(ctx, storage)
		this.test = new testStorage.ParachainBridgeAppAllowedParachainAssetsStorage(ctx, storage)
		this.dev = new devStorage.ParachainBridgeAppAllowedParachainAssetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.ParachainBridgeAppAllowedParachainAssetsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.ParachainBridgeAppAllowedParachainAssetsStorage['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppAssetKindsStorage {
	private readonly production: productionStorage.ParachainBridgeAppAssetKindsStorage
	private readonly stage: stageStorage.ParachainBridgeAppAssetKindsStorage
	private readonly test: testStorage.ParachainBridgeAppAssetKindsStorage
	private readonly dev: devStorage.ParachainBridgeAppAssetKindsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ParachainBridgeAppAssetKindsStorage(ctx, storage)
		this.stage = new stageStorage.ParachainBridgeAppAssetKindsStorage(ctx, storage)
		this.test = new testStorage.ParachainBridgeAppAssetKindsStorage(ctx, storage)
		this.dev = new devStorage.ParachainBridgeAppAssetKindsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.ParachainBridgeAppAssetKindsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.ParachainBridgeAppAssetKindsStorage['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppRelaychainAssetStorage {
	private readonly production: productionStorage.ParachainBridgeAppRelaychainAssetStorage
	private readonly stage: stageStorage.ParachainBridgeAppRelaychainAssetStorage
	private readonly test: testStorage.ParachainBridgeAppRelaychainAssetStorage
	private readonly dev: devStorage.ParachainBridgeAppRelaychainAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ParachainBridgeAppRelaychainAssetStorage(ctx, storage)
		this.stage = new stageStorage.ParachainBridgeAppRelaychainAssetStorage(ctx, storage)
		this.test = new testStorage.ParachainBridgeAppRelaychainAssetStorage(ctx, storage)
		this.dev = new devStorage.ParachainBridgeAppRelaychainAssetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.ParachainBridgeAppRelaychainAssetStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.ParachainBridgeAppRelaychainAssetStorage['asV64'] {
		return this.production.asV64
	}
}

export class ParachainBridgeAppSidechainPrecisionStorage {
	private readonly production: productionStorage.ParachainBridgeAppSidechainPrecisionStorage
	private readonly stage: stageStorage.ParachainBridgeAppSidechainPrecisionStorage
	private readonly test: testStorage.ParachainBridgeAppSidechainPrecisionStorage
	private readonly dev: devStorage.ParachainBridgeAppSidechainPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ParachainBridgeAppSidechainPrecisionStorage(ctx, storage)
		this.stage = new stageStorage.ParachainBridgeAppSidechainPrecisionStorage(ctx, storage)
		this.test = new testStorage.ParachainBridgeAppSidechainPrecisionStorage(ctx, storage)
		this.dev = new devStorage.ParachainBridgeAppSidechainPrecisionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.ParachainBridgeAppSidechainPrecisionStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.ParachainBridgeAppSidechainPrecisionStorage['asV64'] {
		return this.production.asV64
	}
}

export class PermissionsModesStorage {
	private readonly production: productionStorage.PermissionsModesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PermissionsModesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV1(): productionStorage.PermissionsModesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsModesStorage['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsOwnersStorage {
	private readonly production: productionStorage.PermissionsOwnersStorage
	private readonly stage: stageStorage.PermissionsOwnersStorage
	private readonly test: testStorage.PermissionsOwnersStorage
	private readonly dev: devStorage.PermissionsOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PermissionsOwnersStorage(ctx, storage)
		this.stage = new stageStorage.PermissionsOwnersStorage(ctx, storage)
		this.test = new testStorage.PermissionsOwnersStorage(ctx, storage)
		this.dev = new devStorage.PermissionsOwnersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PermissionsOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsOwnersStorage['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsPermissionsStorage {
	private readonly production: productionStorage.PermissionsPermissionsStorage
	private readonly stage: stageStorage.PermissionsPermissionsStorage
	private readonly test: testStorage.PermissionsPermissionsStorage
	private readonly dev: devStorage.PermissionsPermissionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PermissionsPermissionsStorage(ctx, storage)
		this.stage = new stageStorage.PermissionsPermissionsStorage(ctx, storage)
		this.test = new testStorage.PermissionsPermissionsStorage(ctx, storage)
		this.dev = new devStorage.PermissionsPermissionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PermissionsPermissionsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsPermissionsStorage['asV1'] {
		return this.production.asV1
	}
}

export class PhragmenElectionCandidatesStorage {
	private readonly production: productionStorage.PhragmenElectionCandidatesStorage
	private readonly stage: stageStorage.PhragmenElectionCandidatesStorage
	private readonly test: testStorage.PhragmenElectionCandidatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PhragmenElectionCandidatesStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionCandidatesStorage(ctx, storage)
		this.test = new testStorage.PhragmenElectionCandidatesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PhragmenElectionCandidatesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionCandidatesStorage['asV1'] {
		return this.production.asV1
	}
}

export class PhragmenElectionElectionRoundsStorage {
	private readonly production: productionStorage.PhragmenElectionElectionRoundsStorage
	private readonly stage: stageStorage.PhragmenElectionElectionRoundsStorage
	private readonly test: testStorage.PhragmenElectionElectionRoundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PhragmenElectionElectionRoundsStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionElectionRoundsStorage(ctx, storage)
		this.test = new testStorage.PhragmenElectionElectionRoundsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PhragmenElectionElectionRoundsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionElectionRoundsStorage['asV1'] {
		return this.production.asV1
	}
}

export class PhragmenElectionMembersStorage {
	private readonly production: productionStorage.PhragmenElectionMembersStorage
	private readonly stage: stageStorage.PhragmenElectionMembersStorage
	private readonly test: testStorage.PhragmenElectionMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PhragmenElectionMembersStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionMembersStorage(ctx, storage)
		this.test = new testStorage.PhragmenElectionMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PhragmenElectionMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionMembersStorage['asV1'] {
		return this.production.asV1
	}
}

export class PhragmenElectionRunnersUpStorage {
	private readonly production: productionStorage.PhragmenElectionRunnersUpStorage
	private readonly stage: stageStorage.PhragmenElectionRunnersUpStorage
	private readonly test: testStorage.PhragmenElectionRunnersUpStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PhragmenElectionRunnersUpStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionRunnersUpStorage(ctx, storage)
		this.test = new testStorage.PhragmenElectionRunnersUpStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PhragmenElectionRunnersUpStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionRunnersUpStorage['asV1'] {
		return this.production.asV1
	}
}

export class PhragmenElectionVotingStorage {
	private readonly production: productionStorage.PhragmenElectionVotingStorage
	private readonly stage: stageStorage.PhragmenElectionVotingStorage
	private readonly test: testStorage.PhragmenElectionVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PhragmenElectionVotingStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionVotingStorage(ctx, storage)
		this.test = new testStorage.PhragmenElectionVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PhragmenElectionVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionVotingStorage['asV1'] {
		return this.production.asV1
	}
}

export class PoolXYKAccountPoolsStorage {
	private readonly production: productionStorage.PoolXYKAccountPoolsStorage
	private readonly stage: stageStorage.PoolXYKAccountPoolsStorage
	private readonly test: testStorage.PoolXYKAccountPoolsStorage
	private readonly dev: devStorage.PoolXYKAccountPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKAccountPoolsStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKAccountPoolsStorage(ctx, storage)
		this.test = new testStorage.PoolXYKAccountPoolsStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKAccountPoolsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.PoolXYKAccountPoolsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.PoolXYKAccountPoolsStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.PoolXYKAccountPoolsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKAccountPoolsStorage['asV42'] {
		return this.production.asV42
	}
}

export class PoolXYKMarkerTokensIndexStorage {
	private readonly production: productionStorage.PoolXYKMarkerTokensIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKMarkerTokensIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV1(): productionStorage.PoolXYKMarkerTokensIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKMarkerTokensIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class PoolXYKPoolProvidersStorage {
	private readonly production: productionStorage.PoolXYKPoolProvidersStorage
	private readonly stage: stageStorage.PoolXYKPoolProvidersStorage
	private readonly test: testStorage.PoolXYKPoolProvidersStorage
	private readonly dev: devStorage.PoolXYKPoolProvidersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKPoolProvidersStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKPoolProvidersStorage(ctx, storage)
		this.test = new testStorage.PoolXYKPoolProvidersStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKPoolProvidersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.PoolXYKPoolProvidersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKPoolProvidersStorage['asV7'] {
		return this.production.asV7
	}
}

export class PoolXYKPropertiesStorage {
	private readonly production: productionStorage.PoolXYKPropertiesStorage
	private readonly stage: stageStorage.PoolXYKPropertiesStorage
	private readonly test: testStorage.PoolXYKPropertiesStorage
	private readonly dev: devStorage.PoolXYKPropertiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKPropertiesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKPropertiesStorage(ctx, storage)
		this.test = new testStorage.PoolXYKPropertiesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKPropertiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PoolXYKPropertiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKPropertiesStorage['asV1'] {
		return this.production.asV1
	}
	get isV7(): productionStorage.PoolXYKPropertiesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKPropertiesStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.PoolXYKPropertiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKPropertiesStorage['asV42'] {
		return this.production.asV42
	}
}

export class PoolXYKReservesStorage {
	private readonly production: productionStorage.PoolXYKReservesStorage
	private readonly stage: stageStorage.PoolXYKReservesStorage
	private readonly test: testStorage.PoolXYKReservesStorage
	private readonly dev: devStorage.PoolXYKReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKReservesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKReservesStorage(ctx, storage)
		this.test = new testStorage.PoolXYKReservesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PoolXYKReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PoolXYKReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class PoolXYKTotalIssuancesStorage {
	private readonly production: productionStorage.PoolXYKTotalIssuancesStorage
	private readonly stage: stageStorage.PoolXYKTotalIssuancesStorage
	private readonly test: testStorage.PoolXYKTotalIssuancesStorage
	private readonly dev: devStorage.PoolXYKTotalIssuancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
		this.test = new testStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.PoolXYKTotalIssuancesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKTotalIssuancesStorage['asV7'] {
		return this.production.asV7
	}
}

export class PreimagePreimageForStorage {
	private readonly production: productionStorage.PreimagePreimageForStorage
	private readonly stage: stageStorage.PreimagePreimageForStorage
	private readonly test: testStorage.PreimagePreimageForStorage
	private readonly dev: devStorage.PreimagePreimageForStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PreimagePreimageForStorage(ctx, storage)
		this.stage = new stageStorage.PreimagePreimageForStorage(ctx, storage)
		this.test = new testStorage.PreimagePreimageForStorage(ctx, storage)
		this.dev = new devStorage.PreimagePreimageForStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.PreimagePreimageForStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PreimagePreimageForStorage['asV53'] {
		return this.production.asV53
	}
}

export class PreimageStatusForStorage {
	private readonly production: productionStorage.PreimageStatusForStorage
	private readonly stage: stageStorage.PreimageStatusForStorage
	private readonly test: testStorage.PreimageStatusForStorage
	private readonly dev: devStorage.PreimageStatusForStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PreimageStatusForStorage(ctx, storage)
		this.stage = new stageStorage.PreimageStatusForStorage(ctx, storage)
		this.test = new testStorage.PreimageStatusForStorage(ctx, storage)
		this.dev = new devStorage.PreimageStatusForStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.PreimageStatusForStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PreimageStatusForStorage['asV53'] {
		return this.production.asV53
	}
}

export class PriceToolsPriceInfosStorage {
	private readonly production: productionStorage.PriceToolsPriceInfosStorage
	private readonly stage: stageStorage.PriceToolsPriceInfosStorage
	private readonly test: testStorage.PriceToolsPriceInfosStorage
	private readonly dev: devStorage.PriceToolsPriceInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PriceToolsPriceInfosStorage(ctx, storage)
		this.stage = new stageStorage.PriceToolsPriceInfosStorage(ctx, storage)
		this.test = new testStorage.PriceToolsPriceInfosStorage(ctx, storage)
		this.dev = new devStorage.PriceToolsPriceInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.PriceToolsPriceInfosStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PriceToolsPriceInfosStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.PriceToolsPriceInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PriceToolsPriceInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.PriceToolsPriceInfosStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.PriceToolsPriceInfosStorage['asV45'] {
		return this.production.asV45
	}
}

export class PswapDistributionBurnRateStorage {
	private readonly production: productionStorage.PswapDistributionBurnRateStorage
	private readonly stage: stageStorage.PswapDistributionBurnRateStorage
	private readonly test: testStorage.PswapDistributionBurnRateStorage
	private readonly dev: devStorage.PswapDistributionBurnRateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionBurnRateStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBurnRateStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionBurnRateStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBurnRateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PswapDistributionBurnRateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionBurnRateStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionBurnRateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionBurnRateStorage['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionBurnUpdateInfoStorage {
	private readonly production: productionStorage.PswapDistributionBurnUpdateInfoStorage
	private readonly stage: stageStorage.PswapDistributionBurnUpdateInfoStorage
	private readonly test: testStorage.PswapDistributionBurnUpdateInfoStorage
	private readonly dev: devStorage.PswapDistributionBurnUpdateInfoStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PswapDistributionBurnUpdateInfoStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionBurnUpdateInfoStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionBurnUpdateInfoStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionBurnUpdateInfoStorage['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionBuyBackXSTFractionStorage {
	private readonly production: productionStorage.PswapDistributionBuyBackXSTFractionStorage
	private readonly stage: stageStorage.PswapDistributionBuyBackXSTFractionStorage
	private readonly test: testStorage.PswapDistributionBuyBackXSTFractionStorage
	private readonly dev: devStorage.PswapDistributionBuyBackXSTFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.PswapDistributionBuyBackXSTFractionStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PswapDistributionBuyBackXSTFractionStorage['asV53'] {
		return this.production.asV53
	}
}

export class PswapDistributionClaimableSharesStorage {
	private readonly production: productionStorage.PswapDistributionClaimableSharesStorage
	private readonly stage: stageStorage.PswapDistributionClaimableSharesStorage
	private readonly test: testStorage.PswapDistributionClaimableSharesStorage
	private readonly dev: devStorage.PswapDistributionClaimableSharesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PswapDistributionClaimableSharesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionClaimableSharesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionClaimableSharesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionClaimableSharesStorage['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionParliamentPswapFractionStorage {
	private readonly production: productionStorage.PswapDistributionParliamentPswapFractionStorage
	private readonly stage: stageStorage.PswapDistributionParliamentPswapFractionStorage
	private readonly test: testStorage.PswapDistributionParliamentPswapFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionParliamentPswapFractionStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionParliamentPswapFractionStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionParliamentPswapFractionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.PswapDistributionParliamentPswapFractionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionParliamentPswapFractionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionParliamentPswapFractionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionParliamentPswapFractionStorage['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionShareholderAccountsStorage {
	private readonly production: productionStorage.PswapDistributionShareholderAccountsStorage
	private readonly stage: stageStorage.PswapDistributionShareholderAccountsStorage
	private readonly test: testStorage.PswapDistributionShareholderAccountsStorage
	private readonly dev: devStorage.PswapDistributionShareholderAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PswapDistributionShareholderAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionShareholderAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionShareholderAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionShareholderAccountsStorage['asV42'] {
		return this.production.asV42
	}
}

export class PswapDistributionSubscribedAccountsStorage {
	private readonly production: productionStorage.PswapDistributionSubscribedAccountsStorage
	private readonly stage: stageStorage.PswapDistributionSubscribedAccountsStorage
	private readonly test: testStorage.PswapDistributionSubscribedAccountsStorage
	private readonly dev: devStorage.PswapDistributionSubscribedAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
		this.test = new testStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.PswapDistributionSubscribedAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionSubscribedAccountsStorage['asV1'] {
		return this.production.asV1
	}
}

export class RandomnessCollectiveFlipRandomMaterialStorage {
	private readonly production: productionStorage.RandomnessCollectiveFlipRandomMaterialStorage
	private readonly stage: stageStorage.RandomnessCollectiveFlipRandomMaterialStorage
	private readonly test: testStorage.RandomnessCollectiveFlipRandomMaterialStorage
	private readonly dev: devStorage.RandomnessCollectiveFlipRandomMaterialStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
		this.stage = new stageStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
		this.test = new testStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
		this.dev = new devStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.RandomnessCollectiveFlipRandomMaterialStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RandomnessCollectiveFlipRandomMaterialStorage['asV1'] {
		return this.production.asV1
	}
}

export class ReferralSystemReferrersStorage {
	private readonly production: productionStorage.ReferralSystemReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ReferralSystemReferrersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists
	}

	get isV1(): productionStorage.ReferralSystemReferrersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ReferralSystemReferrersStorage['asV1'] {
		return this.production.asV1
	}
}

export class ReferralsReferralsStorage {
	private readonly production: productionStorage.ReferralsReferralsStorage
	private readonly stage: stageStorage.ReferralsReferralsStorage
	private readonly test: testStorage.ReferralsReferralsStorage
	private readonly dev: devStorage.ReferralsReferralsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ReferralsReferralsStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferralsStorage(ctx, storage)
		this.test = new testStorage.ReferralsReferralsStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferralsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.ReferralsReferralsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferralsStorage['asV22'] {
		return this.production.asV22
	}
}

export class ReferralsReferrerBalancesStorage {
	private readonly production: productionStorage.ReferralsReferrerBalancesStorage
	private readonly stage: stageStorage.ReferralsReferrerBalancesStorage
	private readonly test: testStorage.ReferralsReferrerBalancesStorage
	private readonly dev: devStorage.ReferralsReferrerBalancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ReferralsReferrerBalancesStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferrerBalancesStorage(ctx, storage)
		this.test = new testStorage.ReferralsReferrerBalancesStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferrerBalancesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.ReferralsReferrerBalancesStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferrerBalancesStorage['asV22'] {
		return this.production.asV22
	}
}

export class ReferralsReferrersStorage {
	private readonly production: productionStorage.ReferralsReferrersStorage
	private readonly stage: stageStorage.ReferralsReferrersStorage
	private readonly test: testStorage.ReferralsReferrersStorage
	private readonly dev: devStorage.ReferralsReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.ReferralsReferrersStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferrersStorage(ctx, storage)
		this.test = new testStorage.ReferralsReferrersStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferrersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.ReferralsReferrersStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferrersStorage['asV22'] {
		return this.production.asV22
	}
}

export class RewardsCurrentClaimableValStorage {
	private readonly production: productionStorage.RewardsCurrentClaimableValStorage
	private readonly stage: stageStorage.RewardsCurrentClaimableValStorage
	private readonly test: testStorage.RewardsCurrentClaimableValStorage
	private readonly dev: devStorage.RewardsCurrentClaimableValStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsCurrentClaimableValStorage(ctx, storage)
		this.stage = new stageStorage.RewardsCurrentClaimableValStorage(ctx, storage)
		this.test = new testStorage.RewardsCurrentClaimableValStorage(ctx, storage)
		this.dev = new devStorage.RewardsCurrentClaimableValStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsCurrentClaimableValStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsCurrentClaimableValStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsEthAddressesStorage {
	private readonly production: productionStorage.RewardsEthAddressesStorage
	private readonly stage: stageStorage.RewardsEthAddressesStorage
	private readonly test: testStorage.RewardsEthAddressesStorage
	private readonly dev: devStorage.RewardsEthAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsEthAddressesStorage(ctx, storage)
		this.stage = new stageStorage.RewardsEthAddressesStorage(ctx, storage)
		this.test = new testStorage.RewardsEthAddressesStorage(ctx, storage)
		this.dev = new devStorage.RewardsEthAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsEthAddressesStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsEthAddressesStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsMigrationPendingStorage {
	private readonly production: productionStorage.RewardsMigrationPendingStorage
	private readonly stage: stageStorage.RewardsMigrationPendingStorage
	private readonly test: testStorage.RewardsMigrationPendingStorage
	private readonly dev: devStorage.RewardsMigrationPendingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsMigrationPendingStorage(ctx, storage)
		this.stage = new stageStorage.RewardsMigrationPendingStorage(ctx, storage)
		this.test = new testStorage.RewardsMigrationPendingStorage(ctx, storage)
		this.dev = new devStorage.RewardsMigrationPendingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsMigrationPendingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsMigrationPendingStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsPswapFarmOwnersStorage {
	private readonly production: productionStorage.RewardsPswapFarmOwnersStorage
	private readonly stage: stageStorage.RewardsPswapFarmOwnersStorage
	private readonly test: testStorage.RewardsPswapFarmOwnersStorage
	private readonly dev: devStorage.RewardsPswapFarmOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
		this.test = new testStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.RewardsPswapFarmOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsPswapFarmOwnersStorage['asV1'] {
		return this.production.asV1
	}
}

export class RewardsPswapWaifuOwnersStorage {
	private readonly production: productionStorage.RewardsPswapWaifuOwnersStorage
	private readonly stage: stageStorage.RewardsPswapWaifuOwnersStorage
	private readonly test: testStorage.RewardsPswapWaifuOwnersStorage
	private readonly dev: devStorage.RewardsPswapWaifuOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
		this.test = new testStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.RewardsPswapWaifuOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsPswapWaifuOwnersStorage['asV1'] {
		return this.production.asV1
	}
}

export class RewardsReservesAccStorage {
	private readonly production: productionStorage.RewardsReservesAccStorage
	private readonly stage: stageStorage.RewardsReservesAccStorage
	private readonly test: testStorage.RewardsReservesAccStorage
	private readonly dev: devStorage.RewardsReservesAccStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsReservesAccStorage(ctx, storage)
		this.stage = new stageStorage.RewardsReservesAccStorage(ctx, storage)
		this.test = new testStorage.RewardsReservesAccStorage(ctx, storage)
		this.dev = new devStorage.RewardsReservesAccStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.RewardsReservesAccStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsReservesAccStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.RewardsReservesAccStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsReservesAccStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.RewardsReservesAccStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsReservesAccStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.RewardsReservesAccStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.RewardsReservesAccStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.RewardsReservesAccStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.RewardsReservesAccStorage['asV57'] {
		return this.production.asV57
	}
}

export class RewardsTotalClaimableValStorage {
	private readonly production: productionStorage.RewardsTotalClaimableValStorage
	private readonly stage: stageStorage.RewardsTotalClaimableValStorage
	private readonly test: testStorage.RewardsTotalClaimableValStorage
	private readonly dev: devStorage.RewardsTotalClaimableValStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsTotalClaimableValStorage(ctx, storage)
		this.stage = new stageStorage.RewardsTotalClaimableValStorage(ctx, storage)
		this.test = new testStorage.RewardsTotalClaimableValStorage(ctx, storage)
		this.dev = new devStorage.RewardsTotalClaimableValStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsTotalClaimableValStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsTotalClaimableValStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsTotalValRewardsStorage {
	private readonly production: productionStorage.RewardsTotalValRewardsStorage
	private readonly stage: stageStorage.RewardsTotalValRewardsStorage
	private readonly test: testStorage.RewardsTotalValRewardsStorage
	private readonly dev: devStorage.RewardsTotalValRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsTotalValRewardsStorage(ctx, storage)
		this.stage = new stageStorage.RewardsTotalValRewardsStorage(ctx, storage)
		this.test = new testStorage.RewardsTotalValRewardsStorage(ctx, storage)
		this.dev = new devStorage.RewardsTotalValRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsTotalValRewardsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsTotalValRewardsStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsUmiNftClaimedStorage {
	private readonly production: productionStorage.RewardsUmiNftClaimedStorage
	private readonly stage: stageStorage.RewardsUmiNftClaimedStorage
	private readonly test: testStorage.RewardsUmiNftClaimedStorage
	private readonly dev: devStorage.RewardsUmiNftClaimedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsUmiNftClaimedStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftClaimedStorage(ctx, storage)
		this.test = new testStorage.RewardsUmiNftClaimedStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftClaimedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.RewardsUmiNftClaimedStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftClaimedStorage['asV33'] {
		return this.production.asV33
	}
}

export class RewardsUmiNftReceiversStorage {
	private readonly production: productionStorage.RewardsUmiNftReceiversStorage
	private readonly stage: stageStorage.RewardsUmiNftReceiversStorage
	private readonly test: testStorage.RewardsUmiNftReceiversStorage
	private readonly dev: devStorage.RewardsUmiNftReceiversStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsUmiNftReceiversStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftReceiversStorage(ctx, storage)
		this.test = new testStorage.RewardsUmiNftReceiversStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftReceiversStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.RewardsUmiNftReceiversStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftReceiversStorage['asV33'] {
		return this.production.asV33
	}
}

export class RewardsUmiNftsStorage {
	private readonly production: productionStorage.RewardsUmiNftsStorage
	private readonly stage: stageStorage.RewardsUmiNftsStorage
	private readonly test: testStorage.RewardsUmiNftsStorage
	private readonly dev: devStorage.RewardsUmiNftsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsUmiNftsStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftsStorage(ctx, storage)
		this.test = new testStorage.RewardsUmiNftsStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV33(): productionStorage.RewardsUmiNftsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftsStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.RewardsUmiNftsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsUmiNftsStorage['asV42'] {
		return this.production.asV42
	}
}

export class RewardsValBurnedSinceLastVestingStorage {
	private readonly production: productionStorage.RewardsValBurnedSinceLastVestingStorage
	private readonly stage: stageStorage.RewardsValBurnedSinceLastVestingStorage
	private readonly test: testStorage.RewardsValBurnedSinceLastVestingStorage
	private readonly dev: devStorage.RewardsValBurnedSinceLastVestingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
		this.stage = new stageStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
		this.test = new testStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
		this.dev = new devStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.RewardsValBurnedSinceLastVestingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsValBurnedSinceLastVestingStorage['asV19'] {
		return this.production.asV19
	}
}

export class RewardsValOwnersStorage {
	private readonly production: productionStorage.RewardsValOwnersStorage
	private readonly stage: stageStorage.RewardsValOwnersStorage
	private readonly test: testStorage.RewardsValOwnersStorage
	private readonly dev: devStorage.RewardsValOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.RewardsValOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsValOwnersStorage(ctx, storage)
		this.test = new testStorage.RewardsValOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsValOwnersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.RewardsValOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsValOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isV19(): productionStorage.RewardsValOwnersStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsValOwnersStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.RewardsValOwnersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsValOwnersStorage['asV42'] {
		return this.production.asV42
	}
}

export class SchedulerAgendaStorage {
	private readonly production: productionStorage.SchedulerAgendaStorage
	private readonly stage: stageStorage.SchedulerAgendaStorage
	private readonly test: testStorage.SchedulerAgendaStorage
	private readonly dev: devStorage.SchedulerAgendaStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SchedulerAgendaStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerAgendaStorage(ctx, storage)
		this.test = new testStorage.SchedulerAgendaStorage(ctx, storage)
		this.dev = new devStorage.SchedulerAgendaStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SchedulerAgendaStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerAgendaStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.SchedulerAgendaStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.SchedulerAgendaStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.SchedulerAgendaStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.SchedulerAgendaStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.SchedulerAgendaStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.SchedulerAgendaStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.SchedulerAgendaStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SchedulerAgendaStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.SchedulerAgendaStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.SchedulerAgendaStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.SchedulerAgendaStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.SchedulerAgendaStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.SchedulerAgendaStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.SchedulerAgendaStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.SchedulerAgendaStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.SchedulerAgendaStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.SchedulerAgendaStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.SchedulerAgendaStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.SchedulerAgendaStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.SchedulerAgendaStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.SchedulerAgendaStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.SchedulerAgendaStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.SchedulerAgendaStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SchedulerAgendaStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.SchedulerAgendaStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.SchedulerAgendaStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.SchedulerAgendaStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.SchedulerAgendaStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.SchedulerAgendaStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.SchedulerAgendaStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.SchedulerAgendaStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.SchedulerAgendaStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.SchedulerAgendaStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.SchedulerAgendaStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.SchedulerAgendaStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerAgendaStorage['asV53'] {
		return this.production.asV53
	}
	get isV64(): productionStorage.SchedulerAgendaStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SchedulerAgendaStorage['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageStorage.SchedulerAgendaStorage['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageStorage.SchedulerAgendaStorage['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageStorage.SchedulerAgendaStorage['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageStorage.SchedulerAgendaStorage['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageStorage.SchedulerAgendaStorage['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageStorage.SchedulerAgendaStorage['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageStorage.SchedulerAgendaStorage['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageStorage.SchedulerAgendaStorage['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageStorage.SchedulerAgendaStorage['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageStorage.SchedulerAgendaStorage['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageStorage.SchedulerAgendaStorage['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageStorage.SchedulerAgendaStorage['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageStorage.SchedulerAgendaStorage['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageStorage.SchedulerAgendaStorage['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageStorage.SchedulerAgendaStorage['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageStorage.SchedulerAgendaStorage['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageStorage.SchedulerAgendaStorage['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageStorage.SchedulerAgendaStorage['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageStorage.SchedulerAgendaStorage['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageStorage.SchedulerAgendaStorage['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageStorage.SchedulerAgendaStorage['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageStorage.SchedulerAgendaStorage['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageStorage.SchedulerAgendaStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SchedulerAgendaStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.SchedulerAgendaStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.SchedulerAgendaStorage['asV54'] {
		return this.stage.asV54
	}
}

export class SchedulerIncompleteSinceStorage {
	private readonly production: productionStorage.SchedulerIncompleteSinceStorage
	private readonly stage: stageStorage.SchedulerIncompleteSinceStorage
	private readonly test: testStorage.SchedulerIncompleteSinceStorage
	private readonly dev: devStorage.SchedulerIncompleteSinceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SchedulerIncompleteSinceStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerIncompleteSinceStorage(ctx, storage)
		this.test = new testStorage.SchedulerIncompleteSinceStorage(ctx, storage)
		this.dev = new devStorage.SchedulerIncompleteSinceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.SchedulerIncompleteSinceStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerIncompleteSinceStorage['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerLookupStorage {
	private readonly production: productionStorage.SchedulerLookupStorage
	private readonly stage: stageStorage.SchedulerLookupStorage
	private readonly test: testStorage.SchedulerLookupStorage
	private readonly dev: devStorage.SchedulerLookupStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SchedulerLookupStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerLookupStorage(ctx, storage)
		this.test = new testStorage.SchedulerLookupStorage(ctx, storage)
		this.dev = new devStorage.SchedulerLookupStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SchedulerLookupStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerLookupStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.SchedulerLookupStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerLookupStorage['asV53'] {
		return this.production.asV53
	}
}

export class SchedulerStorageVersionStorage {
	private readonly production: productionStorage.SchedulerStorageVersionStorage
	private readonly stage: stageStorage.SchedulerStorageVersionStorage
	private readonly test: testStorage.SchedulerStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SchedulerStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerStorageVersionStorage(ctx, storage)
		this.test = new testStorage.SchedulerStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.SchedulerStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
}

export class SessionCurrentIndexStorage {
	private readonly production: productionStorage.SessionCurrentIndexStorage
	private readonly stage: stageStorage.SessionCurrentIndexStorage
	private readonly test: testStorage.SessionCurrentIndexStorage
	private readonly dev: devStorage.SessionCurrentIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionCurrentIndexStorage(ctx, storage)
		this.stage = new stageStorage.SessionCurrentIndexStorage(ctx, storage)
		this.test = new testStorage.SessionCurrentIndexStorage(ctx, storage)
		this.dev = new devStorage.SessionCurrentIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionCurrentIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionCurrentIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class SessionDisabledValidatorsStorage {
	private readonly production: productionStorage.SessionDisabledValidatorsStorage
	private readonly stage: stageStorage.SessionDisabledValidatorsStorage
	private readonly test: testStorage.SessionDisabledValidatorsStorage
	private readonly dev: devStorage.SessionDisabledValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionDisabledValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.SessionDisabledValidatorsStorage(ctx, storage)
		this.test = new testStorage.SessionDisabledValidatorsStorage(ctx, storage)
		this.dev = new devStorage.SessionDisabledValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionDisabledValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionDisabledValidatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class SessionKeyOwnerStorage {
	private readonly production: productionStorage.SessionKeyOwnerStorage
	private readonly stage: stageStorage.SessionKeyOwnerStorage
	private readonly test: testStorage.SessionKeyOwnerStorage
	private readonly dev: devStorage.SessionKeyOwnerStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionKeyOwnerStorage(ctx, storage)
		this.stage = new stageStorage.SessionKeyOwnerStorage(ctx, storage)
		this.test = new testStorage.SessionKeyOwnerStorage(ctx, storage)
		this.dev = new devStorage.SessionKeyOwnerStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionKeyOwnerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionKeyOwnerStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionKeyOwnerStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionKeyOwnerStorage['asV42'] {
		return this.production.asV42
	}
}

export class SessionNextKeysStorage {
	private readonly production: productionStorage.SessionNextKeysStorage
	private readonly stage: stageStorage.SessionNextKeysStorage
	private readonly test: testStorage.SessionNextKeysStorage
	private readonly dev: devStorage.SessionNextKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionNextKeysStorage(ctx, storage)
		this.stage = new stageStorage.SessionNextKeysStorage(ctx, storage)
		this.test = new testStorage.SessionNextKeysStorage(ctx, storage)
		this.dev = new devStorage.SessionNextKeysStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionNextKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionNextKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionNextKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionNextKeysStorage['asV42'] {
		return this.production.asV42
	}
}

export class SessionQueuedChangedStorage {
	private readonly production: productionStorage.SessionQueuedChangedStorage
	private readonly stage: stageStorage.SessionQueuedChangedStorage
	private readonly test: testStorage.SessionQueuedChangedStorage
	private readonly dev: devStorage.SessionQueuedChangedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionQueuedChangedStorage(ctx, storage)
		this.stage = new stageStorage.SessionQueuedChangedStorage(ctx, storage)
		this.test = new testStorage.SessionQueuedChangedStorage(ctx, storage)
		this.dev = new devStorage.SessionQueuedChangedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionQueuedChangedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionQueuedChangedStorage['asV1'] {
		return this.production.asV1
	}
}

export class SessionQueuedKeysStorage {
	private readonly production: productionStorage.SessionQueuedKeysStorage
	private readonly stage: stageStorage.SessionQueuedKeysStorage
	private readonly test: testStorage.SessionQueuedKeysStorage
	private readonly dev: devStorage.SessionQueuedKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionQueuedKeysStorage(ctx, storage)
		this.stage = new stageStorage.SessionQueuedKeysStorage(ctx, storage)
		this.test = new testStorage.SessionQueuedKeysStorage(ctx, storage)
		this.dev = new devStorage.SessionQueuedKeysStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionQueuedKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionQueuedKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionQueuedKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionQueuedKeysStorage['asV42'] {
		return this.production.asV42
	}
}

export class SessionValidatorsStorage {
	private readonly production: productionStorage.SessionValidatorsStorage
	private readonly stage: stageStorage.SessionValidatorsStorage
	private readonly test: testStorage.SessionValidatorsStorage
	private readonly dev: devStorage.SessionValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SessionValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.SessionValidatorsStorage(ctx, storage)
		this.test = new testStorage.SessionValidatorsStorage(ctx, storage)
		this.dev = new devStorage.SessionValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SessionValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionValidatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingActiveEraStorage {
	private readonly production: productionStorage.StakingActiveEraStorage
	private readonly stage: stageStorage.StakingActiveEraStorage
	private readonly test: testStorage.StakingActiveEraStorage
	private readonly dev: devStorage.StakingActiveEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingActiveEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingActiveEraStorage(ctx, storage)
		this.test = new testStorage.StakingActiveEraStorage(ctx, storage)
		this.dev = new devStorage.StakingActiveEraStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingActiveEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingActiveEraStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingBondedStorage {
	private readonly production: productionStorage.StakingBondedStorage
	private readonly stage: stageStorage.StakingBondedStorage
	private readonly test: testStorage.StakingBondedStorage
	private readonly dev: devStorage.StakingBondedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingBondedStorage(ctx, storage)
		this.stage = new stageStorage.StakingBondedStorage(ctx, storage)
		this.test = new testStorage.StakingBondedStorage(ctx, storage)
		this.dev = new devStorage.StakingBondedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingBondedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingBondedStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingBondedErasStorage {
	private readonly production: productionStorage.StakingBondedErasStorage
	private readonly stage: stageStorage.StakingBondedErasStorage
	private readonly test: testStorage.StakingBondedErasStorage
	private readonly dev: devStorage.StakingBondedErasStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingBondedErasStorage(ctx, storage)
		this.stage = new stageStorage.StakingBondedErasStorage(ctx, storage)
		this.test = new testStorage.StakingBondedErasStorage(ctx, storage)
		this.dev = new devStorage.StakingBondedErasStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingBondedErasStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingBondedErasStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingCanceledSlashPayoutStorage {
	private readonly production: productionStorage.StakingCanceledSlashPayoutStorage
	private readonly stage: stageStorage.StakingCanceledSlashPayoutStorage
	private readonly test: testStorage.StakingCanceledSlashPayoutStorage
	private readonly dev: devStorage.StakingCanceledSlashPayoutStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
		this.stage = new stageStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
		this.test = new testStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
		this.dev = new devStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingCanceledSlashPayoutStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingCanceledSlashPayoutStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingChillThresholdStorage {
	private readonly production: productionStorage.StakingChillThresholdStorage
	private readonly stage: stageStorage.StakingChillThresholdStorage
	private readonly test: testStorage.StakingChillThresholdStorage
	private readonly dev: devStorage.StakingChillThresholdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingChillThresholdStorage(ctx, storage)
		this.stage = new stageStorage.StakingChillThresholdStorage(ctx, storage)
		this.test = new testStorage.StakingChillThresholdStorage(ctx, storage)
		this.dev = new devStorage.StakingChillThresholdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingChillThresholdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingChillThresholdStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingCounterForNominatorsStorage {
	private readonly production: productionStorage.StakingCounterForNominatorsStorage
	private readonly stage: stageStorage.StakingCounterForNominatorsStorage
	private readonly test: testStorage.StakingCounterForNominatorsStorage
	private readonly dev: devStorage.StakingCounterForNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingCounterForNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingCounterForNominatorsStorage(ctx, storage)
		this.test = new testStorage.StakingCounterForNominatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingCounterForNominatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingCounterForNominatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCounterForNominatorsStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingCounterForValidatorsStorage {
	private readonly production: productionStorage.StakingCounterForValidatorsStorage
	private readonly stage: stageStorage.StakingCounterForValidatorsStorage
	private readonly test: testStorage.StakingCounterForValidatorsStorage
	private readonly dev: devStorage.StakingCounterForValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingCounterForValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingCounterForValidatorsStorage(ctx, storage)
		this.test = new testStorage.StakingCounterForValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingCounterForValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingCounterForValidatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCounterForValidatorsStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingCurrentEraStorage {
	private readonly production: productionStorage.StakingCurrentEraStorage
	private readonly stage: stageStorage.StakingCurrentEraStorage
	private readonly test: testStorage.StakingCurrentEraStorage
	private readonly dev: devStorage.StakingCurrentEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingCurrentEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingCurrentEraStorage(ctx, storage)
		this.test = new testStorage.StakingCurrentEraStorage(ctx, storage)
		this.dev = new devStorage.StakingCurrentEraStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingCurrentEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingCurrentEraStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingCurrentPlannedSessionStorage {
	private readonly production: productionStorage.StakingCurrentPlannedSessionStorage
	private readonly stage: stageStorage.StakingCurrentPlannedSessionStorage
	private readonly test: testStorage.StakingCurrentPlannedSessionStorage
	private readonly dev: devStorage.StakingCurrentPlannedSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
		this.stage = new stageStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
		this.test = new testStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
		this.dev = new devStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingCurrentPlannedSessionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCurrentPlannedSessionStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingEarliestUnappliedSlashStorage {
	private readonly production: productionStorage.StakingEarliestUnappliedSlashStorage
	private readonly stage: stageStorage.StakingEarliestUnappliedSlashStorage
	private readonly test: testStorage.StakingEarliestUnappliedSlashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingEarliestUnappliedSlashStorage(ctx, storage)
		this.stage = new stageStorage.StakingEarliestUnappliedSlashStorage(ctx, storage)
		this.test = new testStorage.StakingEarliestUnappliedSlashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingEarliestUnappliedSlashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEarliestUnappliedSlashStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingEraElectionStatusStorage {
	private readonly production: productionStorage.StakingEraElectionStatusStorage
	private readonly stage: stageStorage.StakingEraElectionStatusStorage
	private readonly test: testStorage.StakingEraElectionStatusStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingEraElectionStatusStorage(ctx, storage)
		this.stage = new stageStorage.StakingEraElectionStatusStorage(ctx, storage)
		this.test = new testStorage.StakingEraElectionStatusStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingEraElectionStatusStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEraElectionStatusStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingEraValBurnedStorage {
	private readonly production: productionStorage.StakingEraValBurnedStorage
	private readonly stage: stageStorage.StakingEraValBurnedStorage
	private readonly test: testStorage.StakingEraValBurnedStorage
	private readonly dev: devStorage.StakingEraValBurnedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingEraValBurnedStorage(ctx, storage)
		this.stage = new stageStorage.StakingEraValBurnedStorage(ctx, storage)
		this.test = new testStorage.StakingEraValBurnedStorage(ctx, storage)
		this.dev = new devStorage.StakingEraValBurnedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingEraValBurnedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEraValBurnedStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasRewardPointsStorage {
	private readonly production: productionStorage.StakingErasRewardPointsStorage
	private readonly stage: stageStorage.StakingErasRewardPointsStorage
	private readonly test: testStorage.StakingErasRewardPointsStorage
	private readonly dev: devStorage.StakingErasRewardPointsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasRewardPointsStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasRewardPointsStorage(ctx, storage)
		this.test = new testStorage.StakingErasRewardPointsStorage(ctx, storage)
		this.dev = new devStorage.StakingErasRewardPointsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasRewardPointsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasRewardPointsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasStakersStorage {
	private readonly production: productionStorage.StakingErasStakersStorage
	private readonly stage: stageStorage.StakingErasStakersStorage
	private readonly test: testStorage.StakingErasStakersStorage
	private readonly dev: devStorage.StakingErasStakersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasStakersStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStakersStorage(ctx, storage)
		this.test = new testStorage.StakingErasStakersStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStakersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasStakersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStakersStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasStakersClippedStorage {
	private readonly production: productionStorage.StakingErasStakersClippedStorage
	private readonly stage: stageStorage.StakingErasStakersClippedStorage
	private readonly test: testStorage.StakingErasStakersClippedStorage
	private readonly dev: devStorage.StakingErasStakersClippedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasStakersClippedStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStakersClippedStorage(ctx, storage)
		this.test = new testStorage.StakingErasStakersClippedStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStakersClippedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasStakersClippedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStakersClippedStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasStartSessionIndexStorage {
	private readonly production: productionStorage.StakingErasStartSessionIndexStorage
	private readonly stage: stageStorage.StakingErasStartSessionIndexStorage
	private readonly test: testStorage.StakingErasStartSessionIndexStorage
	private readonly dev: devStorage.StakingErasStartSessionIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasStartSessionIndexStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStartSessionIndexStorage(ctx, storage)
		this.test = new testStorage.StakingErasStartSessionIndexStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStartSessionIndexStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasStartSessionIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStartSessionIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasTotalStakeStorage {
	private readonly production: productionStorage.StakingErasTotalStakeStorage
	private readonly stage: stageStorage.StakingErasTotalStakeStorage
	private readonly test: testStorage.StakingErasTotalStakeStorage
	private readonly dev: devStorage.StakingErasTotalStakeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasTotalStakeStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasTotalStakeStorage(ctx, storage)
		this.test = new testStorage.StakingErasTotalStakeStorage(ctx, storage)
		this.dev = new devStorage.StakingErasTotalStakeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasTotalStakeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasTotalStakeStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasValidatorPrefsStorage {
	private readonly production: productionStorage.StakingErasValidatorPrefsStorage
	private readonly stage: stageStorage.StakingErasValidatorPrefsStorage
	private readonly test: testStorage.StakingErasValidatorPrefsStorage
	private readonly dev: devStorage.StakingErasValidatorPrefsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasValidatorPrefsStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasValidatorPrefsStorage(ctx, storage)
		this.test = new testStorage.StakingErasValidatorPrefsStorage(ctx, storage)
		this.dev = new devStorage.StakingErasValidatorPrefsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasValidatorPrefsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasValidatorPrefsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingErasValidatorRewardStorage {
	private readonly production: productionStorage.StakingErasValidatorRewardStorage
	private readonly stage: stageStorage.StakingErasValidatorRewardStorage
	private readonly test: testStorage.StakingErasValidatorRewardStorage
	private readonly dev: devStorage.StakingErasValidatorRewardStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingErasValidatorRewardStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasValidatorRewardStorage(ctx, storage)
		this.test = new testStorage.StakingErasValidatorRewardStorage(ctx, storage)
		this.dev = new devStorage.StakingErasValidatorRewardStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingErasValidatorRewardStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasValidatorRewardStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingForceEraStorage {
	private readonly production: productionStorage.StakingForceEraStorage
	private readonly stage: stageStorage.StakingForceEraStorage
	private readonly test: testStorage.StakingForceEraStorage
	private readonly dev: devStorage.StakingForceEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingForceEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingForceEraStorage(ctx, storage)
		this.test = new testStorage.StakingForceEraStorage(ctx, storage)
		this.dev = new devStorage.StakingForceEraStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingForceEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingForceEraStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingHistoryDepthStorage {
	private readonly production: productionStorage.StakingHistoryDepthStorage
	private readonly stage: stageStorage.StakingHistoryDepthStorage
	private readonly test: testStorage.StakingHistoryDepthStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingHistoryDepthStorage(ctx, storage)
		this.stage = new stageStorage.StakingHistoryDepthStorage(ctx, storage)
		this.test = new testStorage.StakingHistoryDepthStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingHistoryDepthStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingHistoryDepthStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingInvulnerablesStorage {
	private readonly production: productionStorage.StakingInvulnerablesStorage
	private readonly stage: stageStorage.StakingInvulnerablesStorage
	private readonly test: testStorage.StakingInvulnerablesStorage
	private readonly dev: devStorage.StakingInvulnerablesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingInvulnerablesStorage(ctx, storage)
		this.stage = new stageStorage.StakingInvulnerablesStorage(ctx, storage)
		this.test = new testStorage.StakingInvulnerablesStorage(ctx, storage)
		this.dev = new devStorage.StakingInvulnerablesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingInvulnerablesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingInvulnerablesStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingIsCurrentSessionFinalStorage {
	private readonly production: productionStorage.StakingIsCurrentSessionFinalStorage
	private readonly stage: stageStorage.StakingIsCurrentSessionFinalStorage
	private readonly test: testStorage.StakingIsCurrentSessionFinalStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingIsCurrentSessionFinalStorage(ctx, storage)
		this.stage = new stageStorage.StakingIsCurrentSessionFinalStorage(ctx, storage)
		this.test = new testStorage.StakingIsCurrentSessionFinalStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingIsCurrentSessionFinalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingIsCurrentSessionFinalStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingLedgerStorage {
	private readonly production: productionStorage.StakingLedgerStorage
	private readonly stage: stageStorage.StakingLedgerStorage
	private readonly test: testStorage.StakingLedgerStorage
	private readonly dev: devStorage.StakingLedgerStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingLedgerStorage(ctx, storage)
		this.stage = new stageStorage.StakingLedgerStorage(ctx, storage)
		this.test = new testStorage.StakingLedgerStorage(ctx, storage)
		this.dev = new devStorage.StakingLedgerStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingLedgerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingLedgerStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingMaxNominatorsCountStorage {
	private readonly production: productionStorage.StakingMaxNominatorsCountStorage
	private readonly stage: stageStorage.StakingMaxNominatorsCountStorage
	private readonly test: testStorage.StakingMaxNominatorsCountStorage
	private readonly dev: devStorage.StakingMaxNominatorsCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMaxNominatorsCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMaxNominatorsCountStorage(ctx, storage)
		this.test = new testStorage.StakingMaxNominatorsCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMaxNominatorsCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingMaxNominatorsCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMaxNominatorsCountStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingMaxValidatorsCountStorage {
	private readonly production: productionStorage.StakingMaxValidatorsCountStorage
	private readonly stage: stageStorage.StakingMaxValidatorsCountStorage
	private readonly test: testStorage.StakingMaxValidatorsCountStorage
	private readonly dev: devStorage.StakingMaxValidatorsCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMaxValidatorsCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMaxValidatorsCountStorage(ctx, storage)
		this.test = new testStorage.StakingMaxValidatorsCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMaxValidatorsCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingMaxValidatorsCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMaxValidatorsCountStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingMinCommissionStorage {
	private readonly production: productionStorage.StakingMinCommissionStorage
	private readonly stage: stageStorage.StakingMinCommissionStorage
	private readonly test: testStorage.StakingMinCommissionStorage
	private readonly dev: devStorage.StakingMinCommissionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMinCommissionStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinCommissionStorage(ctx, storage)
		this.test = new testStorage.StakingMinCommissionStorage(ctx, storage)
		this.dev = new devStorage.StakingMinCommissionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingMinCommissionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinCommissionStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingMinNominatorBondStorage {
	private readonly production: productionStorage.StakingMinNominatorBondStorage
	private readonly stage: stageStorage.StakingMinNominatorBondStorage
	private readonly test: testStorage.StakingMinNominatorBondStorage
	private readonly dev: devStorage.StakingMinNominatorBondStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMinNominatorBondStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinNominatorBondStorage(ctx, storage)
		this.test = new testStorage.StakingMinNominatorBondStorage(ctx, storage)
		this.dev = new devStorage.StakingMinNominatorBondStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingMinNominatorBondStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinNominatorBondStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingMinValidatorBondStorage {
	private readonly production: productionStorage.StakingMinValidatorBondStorage
	private readonly stage: stageStorage.StakingMinValidatorBondStorage
	private readonly test: testStorage.StakingMinValidatorBondStorage
	private readonly dev: devStorage.StakingMinValidatorBondStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMinValidatorBondStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinValidatorBondStorage(ctx, storage)
		this.test = new testStorage.StakingMinValidatorBondStorage(ctx, storage)
		this.dev = new devStorage.StakingMinValidatorBondStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingMinValidatorBondStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinValidatorBondStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingMinimumActiveStakeStorage {
	private readonly production: productionStorage.StakingMinimumActiveStakeStorage
	private readonly stage: stageStorage.StakingMinimumActiveStakeStorage
	private readonly test: testStorage.StakingMinimumActiveStakeStorage
	private readonly dev: devStorage.StakingMinimumActiveStakeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMinimumActiveStakeStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinimumActiveStakeStorage(ctx, storage)
		this.test = new testStorage.StakingMinimumActiveStakeStorage(ctx, storage)
		this.dev = new devStorage.StakingMinimumActiveStakeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.StakingMinimumActiveStakeStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.StakingMinimumActiveStakeStorage['asV53'] {
		return this.production.asV53
	}
}

export class StakingMinimumValidatorCountStorage {
	private readonly production: productionStorage.StakingMinimumValidatorCountStorage
	private readonly stage: stageStorage.StakingMinimumValidatorCountStorage
	private readonly test: testStorage.StakingMinimumValidatorCountStorage
	private readonly dev: devStorage.StakingMinimumValidatorCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingMinimumValidatorCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinimumValidatorCountStorage(ctx, storage)
		this.test = new testStorage.StakingMinimumValidatorCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMinimumValidatorCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingMinimumValidatorCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingMinimumValidatorCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingNominatorSlashInEraStorage {
	private readonly production: productionStorage.StakingNominatorSlashInEraStorage
	private readonly stage: stageStorage.StakingNominatorSlashInEraStorage
	private readonly test: testStorage.StakingNominatorSlashInEraStorage
	private readonly dev: devStorage.StakingNominatorSlashInEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingNominatorSlashInEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingNominatorSlashInEraStorage(ctx, storage)
		this.test = new testStorage.StakingNominatorSlashInEraStorage(ctx, storage)
		this.dev = new devStorage.StakingNominatorSlashInEraStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingNominatorSlashInEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingNominatorSlashInEraStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingNominatorsStorage {
	private readonly production: productionStorage.StakingNominatorsStorage
	private readonly stage: stageStorage.StakingNominatorsStorage
	private readonly test: testStorage.StakingNominatorsStorage
	private readonly dev: devStorage.StakingNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingNominatorsStorage(ctx, storage)
		this.test = new testStorage.StakingNominatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingNominatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingNominatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingNominatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingOffendingValidatorsStorage {
	private readonly production: productionStorage.StakingOffendingValidatorsStorage
	private readonly stage: stageStorage.StakingOffendingValidatorsStorage
	private readonly test: testStorage.StakingOffendingValidatorsStorage
	private readonly dev: devStorage.StakingOffendingValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingOffendingValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingOffendingValidatorsStorage(ctx, storage)
		this.test = new testStorage.StakingOffendingValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingOffendingValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.StakingOffendingValidatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingOffendingValidatorsStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingPayeeStorage {
	private readonly production: productionStorage.StakingPayeeStorage
	private readonly stage: stageStorage.StakingPayeeStorage
	private readonly test: testStorage.StakingPayeeStorage
	private readonly dev: devStorage.StakingPayeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingPayeeStorage(ctx, storage)
		this.stage = new stageStorage.StakingPayeeStorage(ctx, storage)
		this.test = new testStorage.StakingPayeeStorage(ctx, storage)
		this.dev = new devStorage.StakingPayeeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingPayeeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingPayeeStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingQueuedElectedStorage {
	private readonly production: productionStorage.StakingQueuedElectedStorage
	private readonly stage: stageStorage.StakingQueuedElectedStorage
	private readonly test: testStorage.StakingQueuedElectedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingQueuedElectedStorage(ctx, storage)
		this.stage = new stageStorage.StakingQueuedElectedStorage(ctx, storage)
		this.test = new testStorage.StakingQueuedElectedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingQueuedElectedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingQueuedElectedStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingQueuedScoreStorage {
	private readonly production: productionStorage.StakingQueuedScoreStorage
	private readonly stage: stageStorage.StakingQueuedScoreStorage
	private readonly test: testStorage.StakingQueuedScoreStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingQueuedScoreStorage(ctx, storage)
		this.stage = new stageStorage.StakingQueuedScoreStorage(ctx, storage)
		this.test = new testStorage.StakingQueuedScoreStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingQueuedScoreStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingQueuedScoreStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingSlashRewardFractionStorage {
	private readonly production: productionStorage.StakingSlashRewardFractionStorage
	private readonly stage: stageStorage.StakingSlashRewardFractionStorage
	private readonly test: testStorage.StakingSlashRewardFractionStorage
	private readonly dev: devStorage.StakingSlashRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingSlashRewardFractionStorage(ctx, storage)
		this.stage = new stageStorage.StakingSlashRewardFractionStorage(ctx, storage)
		this.test = new testStorage.StakingSlashRewardFractionStorage(ctx, storage)
		this.dev = new devStorage.StakingSlashRewardFractionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingSlashRewardFractionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSlashRewardFractionStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingSlashingSpansStorage {
	private readonly production: productionStorage.StakingSlashingSpansStorage
	private readonly stage: stageStorage.StakingSlashingSpansStorage
	private readonly test: testStorage.StakingSlashingSpansStorage
	private readonly dev: devStorage.StakingSlashingSpansStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingSlashingSpansStorage(ctx, storage)
		this.stage = new stageStorage.StakingSlashingSpansStorage(ctx, storage)
		this.test = new testStorage.StakingSlashingSpansStorage(ctx, storage)
		this.dev = new devStorage.StakingSlashingSpansStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingSlashingSpansStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSlashingSpansStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingSnapshotNominatorsStorage {
	private readonly production: productionStorage.StakingSnapshotNominatorsStorage
	private readonly stage: stageStorage.StakingSnapshotNominatorsStorage
	private readonly test: testStorage.StakingSnapshotNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingSnapshotNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingSnapshotNominatorsStorage(ctx, storage)
		this.test = new testStorage.StakingSnapshotNominatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingSnapshotNominatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSnapshotNominatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingSnapshotValidatorsStorage {
	private readonly production: productionStorage.StakingSnapshotValidatorsStorage
	private readonly stage: stageStorage.StakingSnapshotValidatorsStorage
	private readonly test: testStorage.StakingSnapshotValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingSnapshotValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingSnapshotValidatorsStorage(ctx, storage)
		this.test = new testStorage.StakingSnapshotValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingSnapshotValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSnapshotValidatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingSpanSlashStorage {
	private readonly production: productionStorage.StakingSpanSlashStorage
	private readonly stage: stageStorage.StakingSpanSlashStorage
	private readonly test: testStorage.StakingSpanSlashStorage
	private readonly dev: devStorage.StakingSpanSlashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingSpanSlashStorage(ctx, storage)
		this.stage = new stageStorage.StakingSpanSlashStorage(ctx, storage)
		this.test = new testStorage.StakingSpanSlashStorage(ctx, storage)
		this.dev = new devStorage.StakingSpanSlashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingSpanSlashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSpanSlashStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingStorageVersionStorage {
	private readonly production: productionStorage.StakingStorageVersionStorage
	private readonly stage: stageStorage.StakingStorageVersionStorage
	private readonly test: testStorage.StakingStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.StakingStorageVersionStorage(ctx, storage)
		this.test = new testStorage.StakingStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.StakingStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.StakingStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingTimeSinceGenesisStorage {
	private readonly production: productionStorage.StakingTimeSinceGenesisStorage
	private readonly stage: stageStorage.StakingTimeSinceGenesisStorage
	private readonly test: testStorage.StakingTimeSinceGenesisStorage
	private readonly dev: devStorage.StakingTimeSinceGenesisStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingTimeSinceGenesisStorage(ctx, storage)
		this.stage = new stageStorage.StakingTimeSinceGenesisStorage(ctx, storage)
		this.test = new testStorage.StakingTimeSinceGenesisStorage(ctx, storage)
		this.dev = new devStorage.StakingTimeSinceGenesisStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingTimeSinceGenesisStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingTimeSinceGenesisStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.StakingTimeSinceGenesisStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingTimeSinceGenesisStorage['asV42'] {
		return this.production.asV42
	}
}

export class StakingUnappliedSlashesStorage {
	private readonly production: productionStorage.StakingUnappliedSlashesStorage
	private readonly stage: stageStorage.StakingUnappliedSlashesStorage
	private readonly test: testStorage.StakingUnappliedSlashesStorage
	private readonly dev: devStorage.StakingUnappliedSlashesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingUnappliedSlashesStorage(ctx, storage)
		this.stage = new stageStorage.StakingUnappliedSlashesStorage(ctx, storage)
		this.test = new testStorage.StakingUnappliedSlashesStorage(ctx, storage)
		this.dev = new devStorage.StakingUnappliedSlashesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingUnappliedSlashesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingUnappliedSlashesStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingValidatorCountStorage {
	private readonly production: productionStorage.StakingValidatorCountStorage
	private readonly stage: stageStorage.StakingValidatorCountStorage
	private readonly test: testStorage.StakingValidatorCountStorage
	private readonly dev: devStorage.StakingValidatorCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingValidatorCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorCountStorage(ctx, storage)
		this.test = new testStorage.StakingValidatorCountStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingValidatorCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingValidatorSlashInEraStorage {
	private readonly production: productionStorage.StakingValidatorSlashInEraStorage
	private readonly stage: stageStorage.StakingValidatorSlashInEraStorage
	private readonly test: testStorage.StakingValidatorSlashInEraStorage
	private readonly dev: devStorage.StakingValidatorSlashInEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingValidatorSlashInEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorSlashInEraStorage(ctx, storage)
		this.test = new testStorage.StakingValidatorSlashInEraStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorSlashInEraStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingValidatorSlashInEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorSlashInEraStorage['asV1'] {
		return this.production.asV1
	}
}

export class StakingValidatorsStorage {
	private readonly production: productionStorage.StakingValidatorsStorage
	private readonly stage: stageStorage.StakingValidatorsStorage
	private readonly test: testStorage.StakingValidatorsStorage
	private readonly dev: devStorage.StakingValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.StakingValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorsStorage(ctx, storage)
		this.test = new testStorage.StakingValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.StakingValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorsStorage['asV1'] {
		return this.production.asV1
	}
}

export class SubstrateBridgeInboundChannelChannelNoncesStorage {
	private readonly production: productionStorage.SubstrateBridgeInboundChannelChannelNoncesStorage
	private readonly stage: stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage
	private readonly test: testStorage.SubstrateBridgeInboundChannelChannelNoncesStorage
	private readonly dev: devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['asV64'] {
		return this.production.asV64
	}
}

export class SubstrateBridgeOutboundChannelChannelNoncesStorage {
	private readonly production: productionStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage
	private readonly test: testStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['asV64'] {
		return this.production.asV64
	}
}

export class SubstrateBridgeOutboundChannelIntervalStorage {
	private readonly production: productionStorage.SubstrateBridgeOutboundChannelIntervalStorage
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelIntervalStorage
	private readonly test: testStorage.SubstrateBridgeOutboundChannelIntervalStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelIntervalStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.SubstrateBridgeOutboundChannelIntervalStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SubstrateBridgeOutboundChannelIntervalStorage['asV64'] {
		return this.production.asV64
	}
}

export class SubstrateBridgeOutboundChannelLatestCommitmentStorage {
	private readonly production: productionStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage
	private readonly test: testStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV65(): productionStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage['isV65'] {
		return this.production.isV65
	}
	get asV65(): productionStorage.SubstrateBridgeOutboundChannelLatestCommitmentStorage['asV65'] {
		return this.production.asV65
	}
}

export class SubstrateBridgeOutboundChannelMessageQueuesStorage {
	private readonly production: productionStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage
	private readonly test: testStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV64(): productionStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV64'] {
		return this.production.asV64
	}
	get isV52Stage(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV54'] {
		return this.stage.asV54
	}
}

export class SudoKeyStorage {
	private readonly production: productionStorage.SudoKeyStorage
	private readonly stage: stageStorage.SudoKeyStorage
	private readonly test: testStorage.SudoKeyStorage
	private readonly dev: devStorage.SudoKeyStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SudoKeyStorage(ctx, storage)
		this.stage = new stageStorage.SudoKeyStorage(ctx, storage)
		this.test = new testStorage.SudoKeyStorage(ctx, storage)
		this.dev = new devStorage.SudoKeyStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV22(): productionStorage.SudoKeyStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SudoKeyStorage['asV22'] {
		return this.production.asV22
	}
	get isV42Stage(): stageStorage.SudoKeyStorage['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageStorage.SudoKeyStorage['asV42'] {
		return this.stage.asV42
	}
}

export class SystemAccountStorage {
	private readonly production: productionStorage.SystemAccountStorage
	private readonly stage: stageStorage.SystemAccountStorage
	private readonly test: testStorage.SystemAccountStorage
	private readonly dev: devStorage.SystemAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemAccountStorage(ctx, storage)
		this.stage = new stageStorage.SystemAccountStorage(ctx, storage)
		this.test = new testStorage.SystemAccountStorage(ctx, storage)
		this.dev = new devStorage.SystemAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemAccountStorage['asV42'] {
		return this.production.asV42
	}
}

export class SystemAllExtrinsicsLenStorage {
	private readonly production: productionStorage.SystemAllExtrinsicsLenStorage
	private readonly stage: stageStorage.SystemAllExtrinsicsLenStorage
	private readonly test: testStorage.SystemAllExtrinsicsLenStorage
	private readonly dev: devStorage.SystemAllExtrinsicsLenStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
		this.stage = new stageStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
		this.test = new testStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
		this.dev = new devStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemAllExtrinsicsLenStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemAllExtrinsicsLenStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemBlockHashStorage {
	private readonly production: productionStorage.SystemBlockHashStorage
	private readonly stage: stageStorage.SystemBlockHashStorage
	private readonly test: testStorage.SystemBlockHashStorage
	private readonly dev: devStorage.SystemBlockHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemBlockHashStorage(ctx, storage)
		this.stage = new stageStorage.SystemBlockHashStorage(ctx, storage)
		this.test = new testStorage.SystemBlockHashStorage(ctx, storage)
		this.dev = new devStorage.SystemBlockHashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemBlockHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemBlockHashStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemBlockWeightStorage {
	private readonly production: productionStorage.SystemBlockWeightStorage
	private readonly stage: stageStorage.SystemBlockWeightStorage
	private readonly test: testStorage.SystemBlockWeightStorage
	private readonly dev: devStorage.SystemBlockWeightStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemBlockWeightStorage(ctx, storage)
		this.stage = new stageStorage.SystemBlockWeightStorage(ctx, storage)
		this.test = new testStorage.SystemBlockWeightStorage(ctx, storage)
		this.dev = new devStorage.SystemBlockWeightStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemBlockWeightStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemBlockWeightStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.SystemBlockWeightStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SystemBlockWeightStorage['asV53'] {
		return this.production.asV53
	}
}

export class SystemDigestStorage {
	private readonly production: productionStorage.SystemDigestStorage
	private readonly stage: stageStorage.SystemDigestStorage
	private readonly test: testStorage.SystemDigestStorage
	private readonly dev: devStorage.SystemDigestStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemDigestStorage(ctx, storage)
		this.stage = new stageStorage.SystemDigestStorage(ctx, storage)
		this.test = new testStorage.SystemDigestStorage(ctx, storage)
		this.dev = new devStorage.SystemDigestStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemDigestStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemDigestStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemDigestStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemDigestStorage['asV42'] {
		return this.production.asV42
	}
}

export class SystemEventCountStorage {
	private readonly production: productionStorage.SystemEventCountStorage
	private readonly stage: stageStorage.SystemEventCountStorage
	private readonly test: testStorage.SystemEventCountStorage
	private readonly dev: devStorage.SystemEventCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemEventCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventCountStorage(ctx, storage)
		this.test = new testStorage.SystemEventCountStorage(ctx, storage)
		this.dev = new devStorage.SystemEventCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemEventCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemEventTopicsStorage {
	private readonly production: productionStorage.SystemEventTopicsStorage
	private readonly stage: stageStorage.SystemEventTopicsStorage
	private readonly test: testStorage.SystemEventTopicsStorage
	private readonly dev: devStorage.SystemEventTopicsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemEventTopicsStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventTopicsStorage(ctx, storage)
		this.test = new testStorage.SystemEventTopicsStorage(ctx, storage)
		this.dev = new devStorage.SystemEventTopicsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemEventTopicsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventTopicsStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemEventsStorage {
	private readonly production: productionStorage.SystemEventsStorage
	private readonly stage: stageStorage.SystemEventsStorage
	private readonly test: testStorage.SystemEventsStorage
	private readonly dev: devStorage.SystemEventsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemEventsStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventsStorage(ctx, storage)
		this.test = new testStorage.SystemEventsStorage(ctx, storage)
		this.dev = new devStorage.SystemEventsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemEventsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventsStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.SystemEventsStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.SystemEventsStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.SystemEventsStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.SystemEventsStorage['asV7'] {
		return this.production.asV7
	}
	get isV8(): productionStorage.SystemEventsStorage['isV8'] {
		return this.production.isV8
	}
	get asV8(): productionStorage.SystemEventsStorage['asV8'] {
		return this.production.asV8
	}
	get isV19(): productionStorage.SystemEventsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.SystemEventsStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.SystemEventsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SystemEventsStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.SystemEventsStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.SystemEventsStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.SystemEventsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.SystemEventsStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.SystemEventsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.SystemEventsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.SystemEventsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.SystemEventsStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.SystemEventsStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.SystemEventsStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.SystemEventsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.SystemEventsStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.SystemEventsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemEventsStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.SystemEventsStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.SystemEventsStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.SystemEventsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.SystemEventsStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.SystemEventsStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.SystemEventsStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.SystemEventsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.SystemEventsStorage['asV47'] {
		return this.production.asV47
	}
	get isV53(): productionStorage.SystemEventsStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SystemEventsStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.SystemEventsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.SystemEventsStorage['asV57'] {
		return this.production.asV57
	}
	get isV60(): productionStorage.SystemEventsStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.SystemEventsStorage['asV60'] {
		return this.production.asV60
	}
	get isV64(): productionStorage.SystemEventsStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.SystemEventsStorage['asV64'] {
		return this.production.asV64
	}
	get isV33Stage(): stageStorage.SystemEventsStorage['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageStorage.SystemEventsStorage['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageStorage.SystemEventsStorage['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageStorage.SystemEventsStorage['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageStorage.SystemEventsStorage['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageStorage.SystemEventsStorage['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageStorage.SystemEventsStorage['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageStorage.SystemEventsStorage['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageStorage.SystemEventsStorage['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageStorage.SystemEventsStorage['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageStorage.SystemEventsStorage['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageStorage.SystemEventsStorage['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageStorage.SystemEventsStorage['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageStorage.SystemEventsStorage['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageStorage.SystemEventsStorage['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageStorage.SystemEventsStorage['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageStorage.SystemEventsStorage['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageStorage.SystemEventsStorage['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageStorage.SystemEventsStorage['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageStorage.SystemEventsStorage['asV47'] {
		return this.stage.asV47
	}
	get isV52Stage(): stageStorage.SystemEventsStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SystemEventsStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.SystemEventsStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.SystemEventsStorage['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageStorage.SystemEventsStorage['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageStorage.SystemEventsStorage['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageStorage.SystemEventsStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.SystemEventsStorage['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageStorage.SystemEventsStorage['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageStorage.SystemEventsStorage['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageStorage.SystemEventsStorage['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageStorage.SystemEventsStorage['asV60'] {
		return this.stage.asV60
	}
	get isV64Stage(): stageStorage.SystemEventsStorage['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageStorage.SystemEventsStorage['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageStorage.SystemEventsStorage['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageStorage.SystemEventsStorage['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testStorage.SystemEventsStorage['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testStorage.SystemEventsStorage['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testStorage.SystemEventsStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.SystemEventsStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.SystemEventsStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.SystemEventsStorage['asV64'] {
		return this.dev.asV64
	}
}

export class SystemExecutionPhaseStorage {
	private readonly production: productionStorage.SystemExecutionPhaseStorage
	private readonly stage: stageStorage.SystemExecutionPhaseStorage
	private readonly test: testStorage.SystemExecutionPhaseStorage
	private readonly dev: devStorage.SystemExecutionPhaseStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemExecutionPhaseStorage(ctx, storage)
		this.stage = new stageStorage.SystemExecutionPhaseStorage(ctx, storage)
		this.test = new testStorage.SystemExecutionPhaseStorage(ctx, storage)
		this.dev = new devStorage.SystemExecutionPhaseStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemExecutionPhaseStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExecutionPhaseStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemExtrinsicCountStorage {
	private readonly production: productionStorage.SystemExtrinsicCountStorage
	private readonly stage: stageStorage.SystemExtrinsicCountStorage
	private readonly test: testStorage.SystemExtrinsicCountStorage
	private readonly dev: devStorage.SystemExtrinsicCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemExtrinsicCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemExtrinsicCountStorage(ctx, storage)
		this.test = new testStorage.SystemExtrinsicCountStorage(ctx, storage)
		this.dev = new devStorage.SystemExtrinsicCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemExtrinsicCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExtrinsicCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemExtrinsicDataStorage {
	private readonly production: productionStorage.SystemExtrinsicDataStorage
	private readonly stage: stageStorage.SystemExtrinsicDataStorage
	private readonly test: testStorage.SystemExtrinsicDataStorage
	private readonly dev: devStorage.SystemExtrinsicDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemExtrinsicDataStorage(ctx, storage)
		this.stage = new stageStorage.SystemExtrinsicDataStorage(ctx, storage)
		this.test = new testStorage.SystemExtrinsicDataStorage(ctx, storage)
		this.dev = new devStorage.SystemExtrinsicDataStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemExtrinsicDataStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExtrinsicDataStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemLastRuntimeUpgradeStorage {
	private readonly production: productionStorage.SystemLastRuntimeUpgradeStorage
	private readonly stage: stageStorage.SystemLastRuntimeUpgradeStorage
	private readonly test: testStorage.SystemLastRuntimeUpgradeStorage
	private readonly dev: devStorage.SystemLastRuntimeUpgradeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
		this.stage = new stageStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
		this.test = new testStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
		this.dev = new devStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemLastRuntimeUpgradeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemLastRuntimeUpgradeStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemLastRuntimeUpgradeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemLastRuntimeUpgradeStorage['asV42'] {
		return this.production.asV42
	}
}

export class SystemNumberStorage {
	private readonly production: productionStorage.SystemNumberStorage
	private readonly stage: stageStorage.SystemNumberStorage
	private readonly test: testStorage.SystemNumberStorage
	private readonly dev: devStorage.SystemNumberStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemNumberStorage(ctx, storage)
		this.stage = new stageStorage.SystemNumberStorage(ctx, storage)
		this.test = new testStorage.SystemNumberStorage(ctx, storage)
		this.dev = new devStorage.SystemNumberStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemNumberStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemNumberStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemParentHashStorage {
	private readonly production: productionStorage.SystemParentHashStorage
	private readonly stage: stageStorage.SystemParentHashStorage
	private readonly test: testStorage.SystemParentHashStorage
	private readonly dev: devStorage.SystemParentHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemParentHashStorage(ctx, storage)
		this.stage = new stageStorage.SystemParentHashStorage(ctx, storage)
		this.test = new testStorage.SystemParentHashStorage(ctx, storage)
		this.dev = new devStorage.SystemParentHashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemParentHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemParentHashStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemUpgradedToDualRefCountStorage {
	private readonly production: productionStorage.SystemUpgradedToDualRefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToDualRefCountStorage
	private readonly test: testStorage.SystemUpgradedToDualRefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemUpgradedToDualRefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToDualRefCountStorage(ctx, storage)
		this.test = new testStorage.SystemUpgradedToDualRefCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.SystemUpgradedToDualRefCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemUpgradedToDualRefCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class SystemUpgradedToTripleRefCountStorage {
	private readonly production: productionStorage.SystemUpgradedToTripleRefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToTripleRefCountStorage
	private readonly test: testStorage.SystemUpgradedToTripleRefCountStorage
	private readonly dev: devStorage.SystemUpgradedToTripleRefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
		this.test = new testStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
		this.dev = new devStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.SystemUpgradedToTripleRefCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemUpgradedToTripleRefCountStorage['asV42'] {
		return this.production.asV42
	}
}

export class SystemUpgradedToU32RefCountStorage {
	private readonly production: productionStorage.SystemUpgradedToU32RefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToU32RefCountStorage
	private readonly test: testStorage.SystemUpgradedToU32RefCountStorage
	private readonly dev: devStorage.SystemUpgradedToU32RefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
		this.test = new testStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
		this.dev = new devStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.SystemUpgradedToU32RefCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemUpgradedToU32RefCountStorage['asV1'] {
		return this.production.asV1
	}
}

export class TechnicalTechAccountsStorage {
	private readonly production: productionStorage.TechnicalTechAccountsStorage
	private readonly stage: stageStorage.TechnicalTechAccountsStorage
	private readonly test: testStorage.TechnicalTechAccountsStorage
	private readonly dev: devStorage.TechnicalTechAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalTechAccountsStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalTechAccountsStorage(ctx, storage)
		this.test = new testStorage.TechnicalTechAccountsStorage(ctx, storage)
		this.dev = new devStorage.TechnicalTechAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.TechnicalTechAccountsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.TechnicalTechAccountsStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.TechnicalTechAccountsStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.TechnicalTechAccountsStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.TechnicalTechAccountsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.TechnicalTechAccountsStorage['asV57'] {
		return this.production.asV57
	}
}

export class TechnicalCommitteeMembersStorage {
	private readonly production: productionStorage.TechnicalCommitteeMembersStorage
	private readonly stage: stageStorage.TechnicalCommitteeMembersStorage
	private readonly test: testStorage.TechnicalCommitteeMembersStorage
	private readonly dev: devStorage.TechnicalCommitteeMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteeMembersStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeMembersStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteeMembersStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteeMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeMembersStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteePrimeStorage {
	private readonly production: productionStorage.TechnicalCommitteePrimeStorage
	private readonly stage: stageStorage.TechnicalCommitteePrimeStorage
	private readonly test: testStorage.TechnicalCommitteePrimeStorage
	private readonly dev: devStorage.TechnicalCommitteePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteePrimeStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteePrimeStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteePrimeStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteePrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteePrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteePrimeStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeProposalCountStorage {
	private readonly production: productionStorage.TechnicalCommitteeProposalCountStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalCountStorage
	private readonly test: testStorage.TechnicalCommitteeProposalCountStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalCountStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeProposalOfStorage {
	private readonly production: productionStorage.TechnicalCommitteeProposalOfStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalOfStorage
	private readonly test: testStorage.TechnicalCommitteeProposalOfStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.TechnicalCommitteeProposalOfStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.TechnicalCommitteeProposalOfStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.TechnicalCommitteeProposalOfStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.TechnicalCommitteeProposalOfStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.TechnicalCommitteeProposalOfStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.TechnicalCommitteeProposalOfStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.TechnicalCommitteeProposalOfStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.TechnicalCommitteeProposalOfStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.TechnicalCommitteeProposalOfStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.TechnicalCommitteeProposalOfStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.TechnicalCommitteeProposalOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.TechnicalCommitteeProposalOfStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.TechnicalCommitteeProposalOfStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.TechnicalCommitteeProposalOfStorage['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionStorage.TechnicalCommitteeProposalOfStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.TechnicalCommitteeProposalOfStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.TechnicalCommitteeProposalOfStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.TechnicalCommitteeProposalOfStorage['asV60'] {
		return this.production.asV60
	}
	get isV63(): productionStorage.TechnicalCommitteeProposalOfStorage['isV63'] {
		return this.production.isV63
	}
	get asV63(): productionStorage.TechnicalCommitteeProposalOfStorage['asV63'] {
		return this.production.asV63
	}
	get isV64(): productionStorage.TechnicalCommitteeProposalOfStorage['isV64'] {
		return this.production.isV64
	}
	get asV64(): productionStorage.TechnicalCommitteeProposalOfStorage['asV64'] {
		return this.production.asV64
	}
	get isV42Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV60'] {
		return this.stage.asV60
	}
	get isV62Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV62'] {
		return this.stage.isV62
	}
	get asV62Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV62'] {
		return this.stage.asV62
	}
	get isV64Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV64'] {
		return this.stage.isV64
	}
	get asV64Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV64'] {
		return this.stage.asV64
	}
	get isV66Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['isV66'] {
		return this.stage.isV66
	}
	get asV66Stage(): stageStorage.TechnicalCommitteeProposalOfStorage['asV66'] {
		return this.stage.asV66
	}
	get isV51Test(): testStorage.TechnicalCommitteeProposalOfStorage['isV51'] {
		return this.test.isV51
	}
	get asV51Test(): testStorage.TechnicalCommitteeProposalOfStorage['asV51'] {
		return this.test.asV51
	}
	get isV52Test(): testStorage.TechnicalCommitteeProposalOfStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.TechnicalCommitteeProposalOfStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.TechnicalCommitteeProposalOfStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.TechnicalCommitteeProposalOfStorage['asV64'] {
		return this.dev.asV64
	}
}

export class TechnicalCommitteeProposalsStorage {
	private readonly production: productionStorage.TechnicalCommitteeProposalsStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalsStorage
	private readonly test: testStorage.TechnicalCommitteeProposalsStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalsStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalCommitteeVotingStorage {
	private readonly production: productionStorage.TechnicalCommitteeVotingStorage
	private readonly stage: stageStorage.TechnicalCommitteeVotingStorage
	private readonly test: testStorage.TechnicalCommitteeVotingStorage
	private readonly dev: devStorage.TechnicalCommitteeVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalCommitteeVotingStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeVotingStorage(ctx, storage)
		this.test = new testStorage.TechnicalCommitteeVotingStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeVotingStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalCommitteeVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeVotingStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalMembershipMembersStorage {
	private readonly production: productionStorage.TechnicalMembershipMembersStorage
	private readonly stage: stageStorage.TechnicalMembershipMembersStorage
	private readonly test: testStorage.TechnicalMembershipMembersStorage
	private readonly dev: devStorage.TechnicalMembershipMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalMembershipMembersStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalMembershipMembersStorage(ctx, storage)
		this.test = new testStorage.TechnicalMembershipMembersStorage(ctx, storage)
		this.dev = new devStorage.TechnicalMembershipMembersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalMembershipMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalMembershipMembersStorage['asV42'] {
		return this.production.asV42
	}
}

export class TechnicalMembershipPrimeStorage {
	private readonly production: productionStorage.TechnicalMembershipPrimeStorage
	private readonly stage: stageStorage.TechnicalMembershipPrimeStorage
	private readonly test: testStorage.TechnicalMembershipPrimeStorage
	private readonly dev: devStorage.TechnicalMembershipPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TechnicalMembershipPrimeStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalMembershipPrimeStorage(ctx, storage)
		this.test = new testStorage.TechnicalMembershipPrimeStorage(ctx, storage)
		this.dev = new devStorage.TechnicalMembershipPrimeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TechnicalMembershipPrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalMembershipPrimeStorage['asV42'] {
		return this.production.asV42
	}
}

export class TimestampDidUpdateStorage {
	private readonly production: productionStorage.TimestampDidUpdateStorage
	private readonly stage: stageStorage.TimestampDidUpdateStorage
	private readonly test: testStorage.TimestampDidUpdateStorage
	private readonly dev: devStorage.TimestampDidUpdateStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TimestampDidUpdateStorage(ctx, storage)
		this.stage = new stageStorage.TimestampDidUpdateStorage(ctx, storage)
		this.test = new testStorage.TimestampDidUpdateStorage(ctx, storage)
		this.dev = new devStorage.TimestampDidUpdateStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TimestampDidUpdateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TimestampDidUpdateStorage['asV1'] {
		return this.production.asV1
	}
}

export class TimestampNowStorage {
	private readonly production: productionStorage.TimestampNowStorage
	private readonly stage: stageStorage.TimestampNowStorage
	private readonly test: testStorage.TimestampNowStorage
	private readonly dev: devStorage.TimestampNowStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TimestampNowStorage(ctx, storage)
		this.stage = new stageStorage.TimestampNowStorage(ctx, storage)
		this.test = new testStorage.TimestampNowStorage(ctx, storage)
		this.dev = new devStorage.TimestampNowStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TimestampNowStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TimestampNowStorage['asV1'] {
		return this.production.asV1
	}
}

export class TokensAccountsStorage {
	private readonly production: productionStorage.TokensAccountsStorage
	private readonly stage: stageStorage.TokensAccountsStorage
	private readonly test: testStorage.TokensAccountsStorage
	private readonly dev: devStorage.TokensAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TokensAccountsStorage(ctx, storage)
		this.stage = new stageStorage.TokensAccountsStorage(ctx, storage)
		this.test = new testStorage.TokensAccountsStorage(ctx, storage)
		this.dev = new devStorage.TokensAccountsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TokensAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensAccountsStorage['asV42'] {
		return this.production.asV42
	}
}

export class TokensLocksStorage {
	private readonly production: productionStorage.TokensLocksStorage
	private readonly stage: stageStorage.TokensLocksStorage
	private readonly test: testStorage.TokensLocksStorage
	private readonly dev: devStorage.TokensLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TokensLocksStorage(ctx, storage)
		this.stage = new stageStorage.TokensLocksStorage(ctx, storage)
		this.test = new testStorage.TokensLocksStorage(ctx, storage)
		this.dev = new devStorage.TokensLocksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TokensLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensLocksStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensLocksStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensLocksStorage['asV42'] {
		return this.production.asV42
	}
}

export class TokensReservesStorage {
	private readonly production: productionStorage.TokensReservesStorage
	private readonly stage: stageStorage.TokensReservesStorage
	private readonly test: testStorage.TokensReservesStorage
	private readonly dev: devStorage.TokensReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TokensReservesStorage(ctx, storage)
		this.stage = new stageStorage.TokensReservesStorage(ctx, storage)
		this.test = new testStorage.TokensReservesStorage(ctx, storage)
		this.dev = new devStorage.TokensReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV42(): productionStorage.TokensReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class TokensTotalIssuanceStorage {
	private readonly production: productionStorage.TokensTotalIssuanceStorage
	private readonly stage: stageStorage.TokensTotalIssuanceStorage
	private readonly test: testStorage.TokensTotalIssuanceStorage
	private readonly dev: devStorage.TokensTotalIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TokensTotalIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.TokensTotalIssuanceStorage(ctx, storage)
		this.test = new testStorage.TokensTotalIssuanceStorage(ctx, storage)
		this.dev = new devStorage.TokensTotalIssuanceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TokensTotalIssuanceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensTotalIssuanceStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensTotalIssuanceStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensTotalIssuanceStorage['asV42'] {
		return this.production.asV42
	}
}

export class TradingPairEnabledSourcesStorage {
	private readonly production: productionStorage.TradingPairEnabledSourcesStorage
	private readonly stage: stageStorage.TradingPairEnabledSourcesStorage
	private readonly test: testStorage.TradingPairEnabledSourcesStorage
	private readonly dev: devStorage.TradingPairEnabledSourcesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TradingPairEnabledSourcesStorage(ctx, storage)
		this.stage = new stageStorage.TradingPairEnabledSourcesStorage(ctx, storage)
		this.test = new testStorage.TradingPairEnabledSourcesStorage(ctx, storage)
		this.dev = new devStorage.TradingPairEnabledSourcesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TradingPairEnabledSourcesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TradingPairEnabledSourcesStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.TradingPairEnabledSourcesStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.TradingPairEnabledSourcesStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.TradingPairEnabledSourcesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TradingPairEnabledSourcesStorage['asV42'] {
		return this.production.asV42
	}
	get isV64Dev(): devStorage.TradingPairEnabledSourcesStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.TradingPairEnabledSourcesStorage['asV64'] {
		return this.dev.asV64
	}
}

export class TradingPairLockedLiquiditySourcesStorage {
	private readonly production: productionStorage.TradingPairLockedLiquiditySourcesStorage
	private readonly stage: stageStorage.TradingPairLockedLiquiditySourcesStorage
	private readonly test: testStorage.TradingPairLockedLiquiditySourcesStorage
	private readonly dev: devStorage.TradingPairLockedLiquiditySourcesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
		this.stage = new stageStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
		this.test = new testStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
		this.dev = new devStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV38(): productionStorage.TradingPairLockedLiquiditySourcesStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.TradingPairLockedLiquiditySourcesStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.TradingPairLockedLiquiditySourcesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TradingPairLockedLiquiditySourcesStorage['asV42'] {
		return this.production.asV42
	}
}

export class TransactionPaymentNextFeeMultiplierStorage {
	private readonly production: productionStorage.TransactionPaymentNextFeeMultiplierStorage
	private readonly stage: stageStorage.TransactionPaymentNextFeeMultiplierStorage
	private readonly test: testStorage.TransactionPaymentNextFeeMultiplierStorage
	private readonly dev: devStorage.TransactionPaymentNextFeeMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
		this.test = new testStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
		this.dev = new devStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['asV42'] {
		return this.production.asV42
	}
}

export class TransactionPaymentStorageVersionStorage {
	private readonly production: productionStorage.TransactionPaymentStorageVersionStorage
	private readonly stage: stageStorage.TransactionPaymentStorageVersionStorage
	private readonly test: testStorage.TransactionPaymentStorageVersionStorage
	private readonly dev: devStorage.TransactionPaymentStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
		this.test = new testStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.TransactionPaymentStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TransactionPaymentStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TransactionPaymentStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TransactionPaymentStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
}

export class VestedRewardsCrowdloanClaimHistoryStorage {
	private readonly production: productionStorage.VestedRewardsCrowdloanClaimHistoryStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanClaimHistoryStorage
	private readonly test: testStorage.VestedRewardsCrowdloanClaimHistoryStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsCrowdloanClaimHistoryStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanClaimHistoryStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsCrowdloanClaimHistoryStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV33(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV42'] {
		return this.production.asV42
	}
}

export class VestedRewardsCrowdloanInfosStorage {
	private readonly production: productionStorage.VestedRewardsCrowdloanInfosStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanInfosStorage
	private readonly test: testStorage.VestedRewardsCrowdloanInfosStorage
	private readonly dev: devStorage.VestedRewardsCrowdloanInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.VestedRewardsCrowdloanInfosStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.VestedRewardsCrowdloanInfosStorage['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsCrowdloanRewardsStorage {
	private readonly production: productionStorage.VestedRewardsCrowdloanRewardsStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanRewardsStorage
	private readonly test: testStorage.VestedRewardsCrowdloanRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsCrowdloanRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanRewardsStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsCrowdloanRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV33(): productionStorage.VestedRewardsCrowdloanRewardsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.VestedRewardsCrowdloanRewardsStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.VestedRewardsCrowdloanRewardsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsCrowdloanRewardsStorage['asV42'] {
		return this.production.asV42
	}
}

export class VestedRewardsCrowdloanUserInfosStorage {
	private readonly production: productionStorage.VestedRewardsCrowdloanUserInfosStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanUserInfosStorage
	private readonly test: testStorage.VestedRewardsCrowdloanUserInfosStorage
	private readonly dev: devStorage.VestedRewardsCrowdloanUserInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV53(): productionStorage.VestedRewardsCrowdloanUserInfosStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.VestedRewardsCrowdloanUserInfosStorage['asV53'] {
		return this.production.asV53
	}
}

export class VestedRewardsMarketMakersRegistryStorage {
	private readonly production: productionStorage.VestedRewardsMarketMakersRegistryStorage
	private readonly stage: stageStorage.VestedRewardsMarketMakersRegistryStorage
	private readonly test: testStorage.VestedRewardsMarketMakersRegistryStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsMarketMakersRegistryStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsMarketMakersRegistryStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsMarketMakersRegistryStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV1(): productionStorage.VestedRewardsMarketMakersRegistryStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsMarketMakersRegistryStorage['asV1'] {
		return this.production.asV1
	}
}

export class VestedRewardsMarketMakingPairsStorage {
	private readonly production: productionStorage.VestedRewardsMarketMakingPairsStorage
	private readonly stage: stageStorage.VestedRewardsMarketMakingPairsStorage
	private readonly test: testStorage.VestedRewardsMarketMakingPairsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsMarketMakingPairsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsMarketMakingPairsStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsMarketMakingPairsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV22(): productionStorage.VestedRewardsMarketMakingPairsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.VestedRewardsMarketMakingPairsStorage['asV22'] {
		return this.production.asV22
	}
	get isV42(): productionStorage.VestedRewardsMarketMakingPairsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsMarketMakingPairsStorage['asV42'] {
		return this.production.asV42
	}
}

export class VestedRewardsRewardsStorage {
	private readonly production: productionStorage.VestedRewardsRewardsStorage
	private readonly stage: stageStorage.VestedRewardsRewardsStorage
	private readonly test: testStorage.VestedRewardsRewardsStorage
	private readonly dev: devStorage.VestedRewardsRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsRewardsStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsRewardsStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.VestedRewardsRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsRewardsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.VestedRewardsRewardsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsRewardsStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.VestedRewardsRewardsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.VestedRewardsRewardsStorage['asV45'] {
		return this.production.asV45
	}
}

export class VestedRewardsTotalRewardsStorage {
	private readonly production: productionStorage.VestedRewardsTotalRewardsStorage
	private readonly stage: stageStorage.VestedRewardsTotalRewardsStorage
	private readonly test: testStorage.VestedRewardsTotalRewardsStorage
	private readonly dev: devStorage.VestedRewardsTotalRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
		this.test = new testStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV1(): productionStorage.VestedRewardsTotalRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsTotalRewardsStorage['asV1'] {
		return this.production.asV1
	}
}

export class XSTPoolBaseFeeStorage {
	private readonly production: productionStorage.XSTPoolBaseFeeStorage
	private readonly stage: stageStorage.XSTPoolBaseFeeStorage
	private readonly test: testStorage.XSTPoolBaseFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolBaseFeeStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolBaseFeeStorage(ctx, storage)
		this.test = new testStorage.XSTPoolBaseFeeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV19(): productionStorage.XSTPoolBaseFeeStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolBaseFeeStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolBaseFeeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolBaseFeeStorage['asV42'] {
		return this.production.asV42
	}
}

export class XSTPoolCollateralReservesStorage {
	private readonly production: productionStorage.XSTPoolCollateralReservesStorage
	private readonly stage: stageStorage.XSTPoolCollateralReservesStorage
	private readonly test: testStorage.XSTPoolCollateralReservesStorage
	private readonly dev: devStorage.XSTPoolCollateralReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolCollateralReservesStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolCollateralReservesStorage(ctx, storage)
		this.test = new testStorage.XSTPoolCollateralReservesStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolCollateralReservesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.XSTPoolCollateralReservesStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolCollateralReservesStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolCollateralReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolCollateralReservesStorage['asV42'] {
		return this.production.asV42
	}
}

export class XSTPoolEnabledSymbolsStorage {
	private readonly production: productionStorage.XSTPoolEnabledSymbolsStorage
	private readonly stage: stageStorage.XSTPoolEnabledSymbolsStorage
	private readonly test: testStorage.XSTPoolEnabledSymbolsStorage
	private readonly dev: devStorage.XSTPoolEnabledSymbolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
		this.test = new testStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV57(): productionStorage.XSTPoolEnabledSymbolsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.XSTPoolEnabledSymbolsStorage['asV57'] {
		return this.production.asV57
	}
}

export class XSTPoolEnabledSyntheticsStorage {
	private readonly production: productionStorage.XSTPoolEnabledSyntheticsStorage
	private readonly stage: stageStorage.XSTPoolEnabledSyntheticsStorage
	private readonly test: testStorage.XSTPoolEnabledSyntheticsStorage
	private readonly dev: devStorage.XSTPoolEnabledSyntheticsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
		this.test = new testStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV42'] {
		return this.production.asV42
	}
	get isV57(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV57'] {
		return this.production.asV57
	}
}

export class XSTPoolPermissionedTechAccountStorage {
	private readonly production: productionStorage.XSTPoolPermissionedTechAccountStorage
	private readonly stage: stageStorage.XSTPoolPermissionedTechAccountStorage
	private readonly test: testStorage.XSTPoolPermissionedTechAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolPermissionedTechAccountStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolPermissionedTechAccountStorage(ctx, storage)
		this.test = new testStorage.XSTPoolPermissionedTechAccountStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists
	}

	get isV19(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV19'] {
		return this.production.asV19
	}
	get isV33(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV46'] {
		return this.production.asV46
	}
}

export class XSTPoolReferenceAssetIdStorage {
	private readonly production: productionStorage.XSTPoolReferenceAssetIdStorage
	private readonly stage: stageStorage.XSTPoolReferenceAssetIdStorage
	private readonly test: testStorage.XSTPoolReferenceAssetIdStorage
	private readonly dev: devStorage.XSTPoolReferenceAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
		this.test = new testStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV19(): productionStorage.XSTPoolReferenceAssetIdStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolReferenceAssetIdStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolReferenceAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolReferenceAssetIdStorage['asV42'] {
		return this.production.asV42
	}
}

export class XSTPoolSyntheticBaseAssetFloorPriceStorage {
	private readonly production: productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage
	private readonly stage: stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage
	private readonly test: testStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage
	private readonly dev: devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
		this.test = new testStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV45(): productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['asV45'] {
		return this.production.asV45
	}
}

export class XorFeeMultiplierStorage {
	private readonly production: productionStorage.XorFeeMultiplierStorage
	private readonly stage: stageStorage.XorFeeMultiplierStorage
	private readonly test: testStorage.XorFeeMultiplierStorage
	private readonly dev: devStorage.XorFeeMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XorFeeMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.XorFeeMultiplierStorage(ctx, storage)
		this.test = new testStorage.XorFeeMultiplierStorage(ctx, storage)
		this.dev = new devStorage.XorFeeMultiplierStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV37(): productionStorage.XorFeeMultiplierStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.XorFeeMultiplierStorage['asV37'] {
		return this.production.asV37
	}
}

export class XorFeeXorToValStorage {
	private readonly production: productionStorage.XorFeeXorToValStorage
	private readonly stage: stageStorage.XorFeeXorToValStorage
	private readonly test: testStorage.XorFeeXorToValStorage
	private readonly dev: devStorage.XorFeeXorToValStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.production = new productionStorage.XorFeeXorToValStorage(ctx, storage)
		this.stage = new stageStorage.XorFeeXorToValStorage(ctx, storage)
		this.test = new testStorage.XorFeeXorToValStorage(ctx, storage)
		this.dev = new devStorage.XorFeeXorToValStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.production.isExists || this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV7(): productionStorage.XorFeeXorToValStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.XorFeeXorToValStorage['asV7'] {
		return this.production.asV7
	}
}

export class BeefyLightClientCurrentValidatorSetStorage {
	private readonly stage: stageStorage.BeefyLightClientCurrentValidatorSetStorage
	private readonly test: testStorage.BeefyLightClientCurrentValidatorSetStorage
	private readonly dev: devStorage.BeefyLightClientCurrentValidatorSetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientCurrentValidatorSetStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientCurrentValidatorSetStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientCurrentValidatorSetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientCurrentValidatorSetStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientCurrentValidatorSetStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientLatestBeefyBlockStorage {
	private readonly stage: stageStorage.BeefyLightClientLatestBeefyBlockStorage
	private readonly test: testStorage.BeefyLightClientLatestBeefyBlockStorage
	private readonly dev: devStorage.BeefyLightClientLatestBeefyBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientLatestBeefyBlockStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientLatestBeefyBlockStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestBeefyBlockStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientLatestBeefyBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientLatestBeefyBlockStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientLatestMMRRootsStorage {
	private readonly stage: stageStorage.BeefyLightClientLatestMMRRootsStorage
	private readonly test: testStorage.BeefyLightClientLatestMMRRootsStorage
	private readonly dev: devStorage.BeefyLightClientLatestMMRRootsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientLatestMMRRootsStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientLatestMMRRootsStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestMMRRootsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientLatestMMRRootsStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientLatestMMRRootsStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientLatestRandomSeedStorage {
	private readonly stage: stageStorage.BeefyLightClientLatestRandomSeedStorage
	private readonly test: testStorage.BeefyLightClientLatestRandomSeedStorage
	private readonly dev: devStorage.BeefyLightClientLatestRandomSeedStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientLatestRandomSeedStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientLatestRandomSeedStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestRandomSeedStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientLatestRandomSeedStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientLatestRandomSeedStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientNextValidatorSetStorage {
	private readonly stage: stageStorage.BeefyLightClientNextValidatorSetStorage
	private readonly test: testStorage.BeefyLightClientNextValidatorSetStorage
	private readonly dev: devStorage.BeefyLightClientNextValidatorSetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientNextValidatorSetStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientNextValidatorSetStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientNextValidatorSetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientNextValidatorSetStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientNextValidatorSetStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BeefyLightClientThisNetworkIdStorage {
	private readonly stage: stageStorage.BeefyLightClientThisNetworkIdStorage
	private readonly test: testStorage.BeefyLightClientThisNetworkIdStorage
	private readonly dev: devStorage.BeefyLightClientThisNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BeefyLightClientThisNetworkIdStorage(ctx, storage)
		this.test = new testStorage.BeefyLightClientThisNetworkIdStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientThisNetworkIdStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BeefyLightClientThisNetworkIdStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BeefyLightClientThisNetworkIdStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelChannelAddressesStorage {
	private readonly stage: stageStorage.BridgeInboundChannelChannelAddressesStorage
	private readonly test: testStorage.BridgeInboundChannelChannelAddressesStorage
	private readonly dev: devStorage.BridgeInboundChannelChannelAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeInboundChannelChannelAddressesStorage(ctx, storage)
		this.test = new testStorage.BridgeInboundChannelChannelAddressesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelChannelAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeInboundChannelChannelAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeInboundChannelChannelAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelChannelNoncesStorage {
	private readonly stage: stageStorage.BridgeInboundChannelChannelNoncesStorage
	private readonly test: testStorage.BridgeInboundChannelChannelNoncesStorage
	private readonly dev: devStorage.BridgeInboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.test = new testStorage.BridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeInboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeInboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelInboundChannelAddressesStorage {
	private readonly stage: stageStorage.BridgeInboundChannelInboundChannelAddressesStorage
	private readonly test: testStorage.BridgeInboundChannelInboundChannelAddressesStorage
	private readonly dev: devStorage.BridgeInboundChannelInboundChannelAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeInboundChannelInboundChannelAddressesStorage(ctx, storage)
		this.test = new testStorage.BridgeInboundChannelInboundChannelAddressesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelInboundChannelAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeInboundChannelInboundChannelAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeInboundChannelInboundChannelAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelInboundChannelNoncesStorage {
	private readonly stage: stageStorage.BridgeInboundChannelInboundChannelNoncesStorage
	private readonly test: testStorage.BridgeInboundChannelInboundChannelNoncesStorage
	private readonly dev: devStorage.BridgeInboundChannelInboundChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeInboundChannelInboundChannelNoncesStorage(ctx, storage)
		this.test = new testStorage.BridgeInboundChannelInboundChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelInboundChannelNoncesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeInboundChannelInboundChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeInboundChannelInboundChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeInboundChannelRewardFractionStorage {
	private readonly stage: stageStorage.BridgeInboundChannelRewardFractionStorage
	private readonly test: testStorage.BridgeInboundChannelRewardFractionStorage
	private readonly dev: devStorage.BridgeInboundChannelRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeInboundChannelRewardFractionStorage(ctx, storage)
		this.test = new testStorage.BridgeInboundChannelRewardFractionStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelRewardFractionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeInboundChannelRewardFractionStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeInboundChannelRewardFractionStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeOutboundChannelChannelNoncesStorage {
	private readonly stage: stageStorage.BridgeOutboundChannelChannelNoncesStorage
	private readonly test: testStorage.BridgeOutboundChannelChannelNoncesStorage
	private readonly dev: devStorage.BridgeOutboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.test = new testStorage.BridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeOutboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeOutboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeOutboundChannelFeeStorage {
	private readonly stage: stageStorage.BridgeOutboundChannelFeeStorage
	private readonly test: testStorage.BridgeOutboundChannelFeeStorage
	private readonly dev: devStorage.BridgeOutboundChannelFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeOutboundChannelFeeStorage(ctx, storage)
		this.test = new testStorage.BridgeOutboundChannelFeeStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelFeeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeOutboundChannelFeeStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeOutboundChannelFeeStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeOutboundChannelIntervalStorage {
	private readonly stage: stageStorage.BridgeOutboundChannelIntervalStorage
	private readonly test: testStorage.BridgeOutboundChannelIntervalStorage
	private readonly dev: devStorage.BridgeOutboundChannelIntervalStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeOutboundChannelIntervalStorage(ctx, storage)
		this.test = new testStorage.BridgeOutboundChannelIntervalStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelIntervalStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeOutboundChannelIntervalStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeOutboundChannelIntervalStorage['asV52'] {
		return this.stage.asV52
	}
}

export class BridgeOutboundChannelMessageQueuesStorage {
	private readonly stage: stageStorage.BridgeOutboundChannelMessageQueuesStorage
	private readonly test: testStorage.BridgeOutboundChannelMessageQueuesStorage
	private readonly dev: devStorage.BridgeOutboundChannelMessageQueuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.test = new testStorage.BridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelMessageQueuesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV52'] {
		return this.stage.asV52
	}
	get isV55Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV57'] {
		return this.stage.asV57
	}
}

export class BridgeOutboundChannelQueuesTotalGasStorage {
	private readonly stage: stageStorage.BridgeOutboundChannelQueuesTotalGasStorage
	private readonly test: testStorage.BridgeOutboundChannelQueuesTotalGasStorage
	private readonly dev: devStorage.BridgeOutboundChannelQueuesTotalGasStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.BridgeOutboundChannelQueuesTotalGasStorage(ctx, storage)
		this.test = new testStorage.BridgeOutboundChannelQueuesTotalGasStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelQueuesTotalGasStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.BridgeOutboundChannelQueuesTotalGasStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.BridgeOutboundChannelQueuesTotalGasStorage['asV52'] {
		return this.stage.asV52
	}
}

export class ERC20AppAppAddressesStorage {
	private readonly stage: stageStorage.ERC20AppAppAddressesStorage
	private readonly test: testStorage.ERC20AppAppAddressesStorage
	private readonly dev: devStorage.ERC20AppAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.ERC20AppAppAddressesStorage(ctx, storage)
		this.test = new testStorage.ERC20AppAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAppAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.ERC20AppAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.ERC20AppAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class ERC20AppAssetKindsStorage {
	private readonly stage: stageStorage.ERC20AppAssetKindsStorage
	private readonly test: testStorage.ERC20AppAssetKindsStorage
	private readonly dev: devStorage.ERC20AppAssetKindsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.ERC20AppAssetKindsStorage(ctx, storage)
		this.test = new testStorage.ERC20AppAssetKindsStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAssetKindsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.ERC20AppAssetKindsStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.ERC20AppAssetKindsStorage['asV52'] {
		return this.stage.asV52
	}
}

export class ERC20AppAssetsByAddressesStorage {
	private readonly stage: stageStorage.ERC20AppAssetsByAddressesStorage
	private readonly test: testStorage.ERC20AppAssetsByAddressesStorage
	private readonly dev: devStorage.ERC20AppAssetsByAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.ERC20AppAssetsByAddressesStorage(ctx, storage)
		this.test = new testStorage.ERC20AppAssetsByAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAssetsByAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.ERC20AppAssetsByAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.ERC20AppAssetsByAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class ERC20AppSidechainPrecisionStorage {
	private readonly stage: stageStorage.ERC20AppSidechainPrecisionStorage
	private readonly test: testStorage.ERC20AppSidechainPrecisionStorage
	private readonly dev: devStorage.ERC20AppSidechainPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.ERC20AppSidechainPrecisionStorage(ctx, storage)
		this.test = new testStorage.ERC20AppSidechainPrecisionStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppSidechainPrecisionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV54Stage(): stageStorage.ERC20AppSidechainPrecisionStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.ERC20AppSidechainPrecisionStorage['asV54'] {
		return this.stage.asV54
	}
}

export class ERC20AppTokenAddressesStorage {
	private readonly stage: stageStorage.ERC20AppTokenAddressesStorage
	private readonly test: testStorage.ERC20AppTokenAddressesStorage
	private readonly dev: devStorage.ERC20AppTokenAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.ERC20AppTokenAddressesStorage(ctx, storage)
		this.test = new testStorage.ERC20AppTokenAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppTokenAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.ERC20AppTokenAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.ERC20AppTokenAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthAppAddressesStorage {
	private readonly stage: stageStorage.EthAppAddressesStorage
	private readonly test: testStorage.EthAppAddressesStorage
	private readonly dev: devStorage.EthAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthAppAddressesStorage(ctx, storage)
		this.test = new testStorage.EthAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.EthAppAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageStorage.EthAppAddressesStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.EthAppAddressesStorage['asV54'] {
		return this.stage.asV54
	}
}

export class EthereumLightClientBestBlockStorage {
	private readonly stage: stageStorage.EthereumLightClientBestBlockStorage
	private readonly test: testStorage.EthereumLightClientBestBlockStorage
	private readonly dev: devStorage.EthereumLightClientBestBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientBestBlockStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientBestBlockStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientBestBlockStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientBestBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientBestBlockStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientBlocksToPruneStorage {
	private readonly stage: stageStorage.EthereumLightClientBlocksToPruneStorage
	private readonly test: testStorage.EthereumLightClientBlocksToPruneStorage
	private readonly dev: devStorage.EthereumLightClientBlocksToPruneStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientBlocksToPruneStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientBlocksToPruneStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientBlocksToPruneStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientBlocksToPruneStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientBlocksToPruneStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientFinalizedBlockStorage {
	private readonly stage: stageStorage.EthereumLightClientFinalizedBlockStorage
	private readonly test: testStorage.EthereumLightClientFinalizedBlockStorage
	private readonly dev: devStorage.EthereumLightClientFinalizedBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientFinalizedBlockStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientFinalizedBlockStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientFinalizedBlockStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientFinalizedBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientFinalizedBlockStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientHeadersStorage {
	private readonly stage: stageStorage.EthereumLightClientHeadersStorage
	private readonly test: testStorage.EthereumLightClientHeadersStorage
	private readonly dev: devStorage.EthereumLightClientHeadersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientHeadersStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientHeadersStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientHeadersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientHeadersStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientHeadersStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientHeadersByNumberStorage {
	private readonly stage: stageStorage.EthereumLightClientHeadersByNumberStorage
	private readonly test: testStorage.EthereumLightClientHeadersByNumberStorage
	private readonly dev: devStorage.EthereumLightClientHeadersByNumberStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientHeadersByNumberStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientHeadersByNumberStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientHeadersByNumberStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientHeadersByNumberStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientHeadersByNumberStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EthereumLightClientNetworkConfigStorage {
	private readonly stage: stageStorage.EthereumLightClientNetworkConfigStorage
	private readonly test: testStorage.EthereumLightClientNetworkConfigStorage
	private readonly dev: devStorage.EthereumLightClientNetworkConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EthereumLightClientNetworkConfigStorage(ctx, storage)
		this.test = new testStorage.EthereumLightClientNetworkConfigStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientNetworkConfigStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.EthereumLightClientNetworkConfigStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EthereumLightClientNetworkConfigStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxySendersStorage {
	private readonly stage: stageStorage.EvmBridgeProxySendersStorage
	private readonly test: testStorage.EvmBridgeProxySendersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EvmBridgeProxySendersStorage(ctx, storage)
		this.test = new testStorage.EvmBridgeProxySendersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV52Stage(): stageStorage.EvmBridgeProxySendersStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EvmBridgeProxySendersStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyTransactionsStorage {
	private readonly stage: stageStorage.EvmBridgeProxyTransactionsStorage
	private readonly test: testStorage.EvmBridgeProxyTransactionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.EvmBridgeProxyTransactionsStorage(ctx, storage)
		this.test = new testStorage.EvmBridgeProxyTransactionsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV52Stage(): stageStorage.EvmBridgeProxyTransactionsStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.EvmBridgeProxyTransactionsStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MigrationAppAddressesStorage {
	private readonly stage: stageStorage.MigrationAppAddressesStorage
	private readonly test: testStorage.MigrationAppAddressesStorage
	private readonly dev: devStorage.MigrationAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MigrationAppAddressesStorage(ctx, storage)
		this.test = new testStorage.MigrationAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.MigrationAppAddressesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MigrationAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MigrationAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MmrNodesStorage {
	private readonly stage: stageStorage.MmrNodesStorage
	private readonly test: testStorage.MmrNodesStorage
	private readonly dev: devStorage.MmrNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MmrNodesStorage(ctx, storage)
		this.test = new testStorage.MmrNodesStorage(ctx, storage)
		this.dev = new devStorage.MmrNodesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MmrNodesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MmrNodesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MmrNumberOfLeavesStorage {
	private readonly stage: stageStorage.MmrNumberOfLeavesStorage
	private readonly test: testStorage.MmrNumberOfLeavesStorage
	private readonly dev: devStorage.MmrNumberOfLeavesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MmrNumberOfLeavesStorage(ctx, storage)
		this.test = new testStorage.MmrNumberOfLeavesStorage(ctx, storage)
		this.dev = new devStorage.MmrNumberOfLeavesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MmrNumberOfLeavesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MmrNumberOfLeavesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MmrRootHashStorage {
	private readonly stage: stageStorage.MmrRootHashStorage
	private readonly test: testStorage.MmrRootHashStorage
	private readonly dev: devStorage.MmrRootHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MmrRootHashStorage(ctx, storage)
		this.test = new testStorage.MmrRootHashStorage(ctx, storage)
		this.dev = new devStorage.MmrRootHashStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MmrRootHashStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MmrRootHashStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MmrLeafBeefyAuthoritiesStorage {
	private readonly stage: stageStorage.MmrLeafBeefyAuthoritiesStorage
	private readonly test: testStorage.MmrLeafBeefyAuthoritiesStorage
	private readonly dev: devStorage.MmrLeafBeefyAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MmrLeafBeefyAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.MmrLeafBeefyAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.MmrLeafBeefyAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MmrLeafBeefyAuthoritiesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MmrLeafBeefyAuthoritiesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class MmrLeafBeefyNextAuthoritiesStorage {
	private readonly stage: stageStorage.MmrLeafBeefyNextAuthoritiesStorage
	private readonly test: testStorage.MmrLeafBeefyNextAuthoritiesStorage
	private readonly dev: devStorage.MmrLeafBeefyNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.MmrLeafBeefyNextAuthoritiesStorage(ctx, storage)
		this.test = new testStorage.MmrLeafBeefyNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.MmrLeafBeefyNextAuthoritiesStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists || this.dev.isExists
	}

	get isV52Stage(): stageStorage.MmrLeafBeefyNextAuthoritiesStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.MmrLeafBeefyNextAuthoritiesStorage['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppAllowedParachainAssetsStorage {
	private readonly stage: stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage
	private readonly test: testStorage.SubstrateBridgeAppAllowedParachainAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeAppAllowedParachainAssetsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV57Stage(): stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppAssetKindsStorage {
	private readonly stage: stageStorage.SubstrateBridgeAppAssetKindsStorage
	private readonly test: testStorage.SubstrateBridgeAppAssetKindsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeAppAssetKindsStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeAppAssetKindsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV52Stage(): stageStorage.SubstrateBridgeAppAssetKindsStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SubstrateBridgeAppAssetKindsStorage['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeAppBridgeTransferLimitStorage {
	private readonly stage: stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage
	private readonly test: testStorage.SubstrateBridgeAppBridgeTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeAppBridgeTransferLimitStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV57Stage(): stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppRelaychainAssetStorage {
	private readonly stage: stageStorage.SubstrateBridgeAppRelaychainAssetStorage
	private readonly test: testStorage.SubstrateBridgeAppRelaychainAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeAppRelaychainAssetStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeAppRelaychainAssetStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV57Stage(): stageStorage.SubstrateBridgeAppRelaychainAssetStorage['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageStorage.SubstrateBridgeAppRelaychainAssetStorage['asV57'] {
		return this.stage.asV57
	}
}

export class SubstrateBridgeAppSidechainPrecisionStorage {
	private readonly stage: stageStorage.SubstrateBridgeAppSidechainPrecisionStorage
	private readonly test: testStorage.SubstrateBridgeAppSidechainPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeAppSidechainPrecisionStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeAppSidechainPrecisionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV54Stage(): stageStorage.SubstrateBridgeAppSidechainPrecisionStorage['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageStorage.SubstrateBridgeAppSidechainPrecisionStorage['asV54'] {
		return this.stage.asV54
	}
}

export class SubstrateBridgeInboundChannelRewardFractionStorage {
	private readonly stage: stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage
	private readonly test: testStorage.SubstrateBridgeInboundChannelRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeInboundChannelRewardFractionStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV52Stage(): stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeOutboundChannelFeeStorage {
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelFeeStorage
	private readonly test: testStorage.SubstrateBridgeOutboundChannelFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelFeeStorage(ctx, storage)
		this.test = new testStorage.SubstrateBridgeOutboundChannelFeeStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.stage.isExists || this.test.isExists
	}

	get isV52Stage(): stageStorage.SubstrateBridgeOutboundChannelFeeStorage['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageStorage.SubstrateBridgeOutboundChannelFeeStorage['asV52'] {
		return this.stage.asV52
	}
}

export class OrderBookAggregatedAsksStorage {
	private readonly test: testStorage.OrderBookAggregatedAsksStorage
	private readonly dev: devStorage.OrderBookAggregatedAsksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookAggregatedAsksStorage(ctx, storage)
		this.dev = new devStorage.OrderBookAggregatedAsksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookAggregatedAsksStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookAggregatedAsksStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookAggregatedAsksStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookAggregatedAsksStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookAggregatedBidsStorage {
	private readonly test: testStorage.OrderBookAggregatedBidsStorage
	private readonly dev: devStorage.OrderBookAggregatedBidsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookAggregatedBidsStorage(ctx, storage)
		this.dev = new devStorage.OrderBookAggregatedBidsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookAggregatedBidsStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookAggregatedBidsStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookAggregatedBidsStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookAggregatedBidsStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookAsksStorage {
	private readonly test: testStorage.OrderBookAsksStorage
	private readonly dev: devStorage.OrderBookAsksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookAsksStorage(ctx, storage)
		this.dev = new devStorage.OrderBookAsksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookAsksStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookAsksStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookAsksStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookAsksStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookBidsStorage {
	private readonly test: testStorage.OrderBookBidsStorage
	private readonly dev: devStorage.OrderBookBidsStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookBidsStorage(ctx, storage)
		this.dev = new devStorage.OrderBookBidsStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookBidsStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookBidsStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookBidsStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookBidsStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookLimitOrdersStorage {
	private readonly test: testStorage.OrderBookLimitOrdersStorage
	private readonly dev: devStorage.OrderBookLimitOrdersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookLimitOrdersStorage(ctx, storage)
		this.dev = new devStorage.OrderBookLimitOrdersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookLimitOrdersStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookLimitOrdersStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookLimitOrdersStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookLimitOrdersStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookOrderBooksStorage {
	private readonly test: testStorage.OrderBookOrderBooksStorage
	private readonly dev: devStorage.OrderBookOrderBooksStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookOrderBooksStorage(ctx, storage)
		this.dev = new devStorage.OrderBookOrderBooksStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookOrderBooksStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookOrderBooksStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookOrderBooksStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookOrderBooksStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookUserLimitOrdersStorage {
	private readonly test: testStorage.OrderBookUserLimitOrdersStorage
	private readonly dev: devStorage.OrderBookUserLimitOrdersStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.test = new testStorage.OrderBookUserLimitOrdersStorage(ctx, storage)
		this.dev = new devStorage.OrderBookUserLimitOrdersStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.test.isExists || this.dev.isExists
	}

	get isV52Test(): testStorage.OrderBookUserLimitOrdersStorage['isV52'] {
		return this.test.isV52
	}
	get asV52Test(): testStorage.OrderBookUserLimitOrdersStorage['asV52'] {
		return this.test.asV52
	}
	get isV64Dev(): devStorage.OrderBookUserLimitOrdersStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookUserLimitOrdersStorage['asV64'] {
		return this.dev.asV64
	}
}

export class BridgeOutboundChannelLatestCommitmentStorage {
	private readonly dev: devStorage.BridgeOutboundChannelLatestCommitmentStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.dev = new devStorage.BridgeOutboundChannelLatestCommitmentStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.dev.isExists
	}

	get isV64Dev(): devStorage.BridgeOutboundChannelLatestCommitmentStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.BridgeOutboundChannelLatestCommitmentStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookExpirationsAgendaStorage {
	private readonly dev: devStorage.OrderBookExpirationsAgendaStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.dev = new devStorage.OrderBookExpirationsAgendaStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.dev.isExists
	}

	get isV64Dev(): devStorage.OrderBookExpirationsAgendaStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookExpirationsAgendaStorage['asV64'] {
		return this.dev.asV64
	}
}

export class OrderBookIncompleteExpirationsSinceStorage {
	private readonly dev: devStorage.OrderBookIncompleteExpirationsSinceStorage

	constructor(ctx: ChainContext, storage: Block) {
		this.dev = new devStorage.OrderBookIncompleteExpirationsSinceStorage(ctx, storage)
	}

	get isExists(): boolean {
		return this.dev.isExists
	}

	get isV64Dev(): devStorage.OrderBookIncompleteExpirationsSinceStorage['isV64'] {
		return this.dev.isV64
	}
	get asV64Dev(): devStorage.OrderBookIncompleteExpirationsSinceStorage['asV64'] {
		return this.dev.asV64
	}
}
