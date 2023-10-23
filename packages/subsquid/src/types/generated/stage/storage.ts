import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v33 from './v33'
import * as v35 from './v35'
import * as v37 from './v37'
import * as v38 from './v38'
import * as v42 from './v42'
import * as v43 from './v43'
import * as v44 from './v44'
import * as v45 from './v45'
import * as v46 from './v46'
import * as v47 from './v47'
import * as v48 from './v48'
import * as v52 from './v52'
import * as v54 from './v54'
import * as v55 from './v55'
import * as v57 from './v57'
import * as v59 from './v59'
import * as v60 from './v60'
import * as v62 from './v62'
import * as v64 from './v64'
import * as v65 from './v65'
import * as v66 from './v66'

export class AssetsAssetInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetInfos'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3351f56286d2467a8c20c02286c8dc5d679846dc2634a93f84c9a2b5541219fa'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get asV33(): AssetsAssetInfosStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get isV42(): boolean {
        return this.getTypeHash() === '94bdb27ff45979d08e9c7a1caf2f5085757d4f09d9ea4b9195572af205168c2f'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get asV42(): AssetsAssetInfosStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetsAssetInfosStorageV33 {
    get(key: Uint8Array): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]>
    getAll(): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getMany(keys: Uint8Array[]): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetsAssetInfosStorageV42 {
    get(key: v42.AssetId32): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]>
    getAll(): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getMany(keys: v42.AssetId32[]): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
}

export class AssetsAssetOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetOwners'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get asV33(): AssetsAssetOwnersStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get isV42(): boolean {
        return this.getTypeHash() === '088c8720b3f53953e645cba72b2f87d61b305d7f52bfdddca4a631775822faf7'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get asV42(): AssetsAssetOwnersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetsAssetOwnersStorageV33 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetsAssetOwnersStorageV42 {
    get(key: v42.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: v42.AssetId32[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: Uint8Array][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: Uint8Array][]>
}

export class AssetsAssetRecordAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetRecordAssetId'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get isV33(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get asV33(): AssetsAssetRecordAssetIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a764d8e82361061f6e80c01f7f1a92a303067a70b39f8a4178fc965a838f4b4f'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get asV42(): AssetsAssetRecordAssetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetsAssetRecordAssetIdStorageV33 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetsAssetRecordAssetIdStorageV42 {
    get(key: v42.AssetId32): Promise<(v42.AssetRecord | undefined)>
    getAll(): Promise<v42.AssetRecord[]>
    getMany(keys: v42.AssetId32[]): Promise<(v42.AssetRecord | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: v42.AssetRecord][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: v42.AssetRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: v42.AssetRecord][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: v42.AssetRecord][]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV33(): AuthorshipAuthorStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV33 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV33(): AuthorshipDidSetUnclesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV33 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
    }

    /**
     *  Uncles
     */
    get asV33(): AuthorshipUnclesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Uncles
     */
    get isV42(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV42(): AuthorshipUnclesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV33 {
    get(): Promise<v33.UncleEntryItem[]>
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV42 {
    get(): Promise<v42.UncleEntryItem[]>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get isV33(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get asV33(): BabeAuthorVrfRandomnessStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface BabeAuthorVrfRandomnessStorageV33 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV33(): BabeAuthoritiesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV33 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV33(): BabeCurrentSlotStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV33 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get asV42(): BabeEpochConfigStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface BabeEpochConfigStorageV42 {
    get(): Promise<(v42.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV33(): BabeEpochIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV33 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV42(): BabeEpochStartStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV42 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV33(): BabeGenesisSlotStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV33 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'baa8b35cc3c4f9962c8e7906c4e027bf52bf107cfe165d1c64edc4d8707f6b83'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV33(): BabeInitializedStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV42(): BabeInitializedStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV33 {
    get(): Promise<((Uint8Array | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV42 {
    get(): Promise<((v42.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV33(): BabeLatenessStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV33 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV33(): BabeNextAuthoritiesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV33 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '007656ed996dcee130efb3a698c60ea276980e9b755810b4328f802b3398dbc6'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get asV33(): BabeNextEpochConfigStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV42(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV42(): BabeNextEpochConfigStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Next epoch configuration, if changed.
 */
export interface BabeNextEpochConfigStorageV33 {
    get(): Promise<(v33.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV42 {
    get(): Promise<(v42.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV33(): BabeNextRandomnessStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV33 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV42(): BabePendingEpochConfigChangeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV42 {
    get(): Promise<(v42.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get asV33(): BabeRandomnessStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface BabeRandomnessStorageV33 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get asV33(): BabeSegmentIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Randomness under construction.
 * 
 *  We make a tradeoff between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface BabeSegmentIndexStorageV33 {
    get(): Promise<number>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV33(): BabeUnderConstructionStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV33 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class BagsListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV42(): BagsListCounterForListNodesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface BagsListCounterForListNodesStorageV42 {
    get(): Promise<number>
}

export class BagsListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV42(): BagsListListBagsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface BagsListListBagsStorageV42 {
    get(key: bigint): Promise<(v42.Bag | undefined)>
    getAll(): Promise<v42.Bag[]>
    getMany(keys: bigint[]): Promise<(v42.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.Bag][]>
}

export class BagsListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV42(): BagsListListNodesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface BagsListListNodesStorageV42 {
    get(key: Uint8Array): Promise<(v42.Node | undefined)>
    getAll(): Promise<v42.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Node][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV33(): BalancesAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV33 {
    get(key: Uint8Array): Promise<v33.AccountData>
    getAll(): Promise<v33.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v33.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV52(): BalancesInactiveIssuanceStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV52 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV33(): BalancesLocksStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV33 {
    get(key: Uint8Array): Promise<v33.BalanceLock[]>
    getAll(): Promise<v33.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v33.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV42(): BalancesReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV42 {
    get(key: Uint8Array): Promise<v42.ReserveData[]>
    getAll(): Promise<v42.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v42.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV33(): BalancesStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV42(): BalancesStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV33 {
    get(): Promise<v33.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV42 {
    get(): Promise<v42.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV33(): BalancesTotalIssuanceStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV33 {
    get(): Promise<bigint>
}

export class BandDynamicFeeParametersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'DynamicFeeParameters'
    }

    get isV59(): boolean {
        return this.getTypeHash() === 'f2c645c74fe40b8672d790a8004247c4a6854632b56b65312583cb5baa894b59'
    }

    get asV59(): BandDynamicFeeParametersStorageV59 {
        assert(this.isV59)
        return this as any
    }
}

export interface BandDynamicFeeParametersStorageV59 {
    get(): Promise<v59.FeeCalculationParameters>
}

export class BandSymbolCheckBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'SymbolCheckBlock'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a8ff51b1d52588d671233c876f9a64b48aa4e693d1fea92dcbde4d663f72a959'
    }

    get asV60(): BandSymbolCheckBlockStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandSymbolCheckBlockStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [number, Uint8Array][]): Promise<boolean[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
}

export class BandSymbolRatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'SymbolRates'
    }

    get isV44(): boolean {
        return this.getTypeHash() === 'e40be0e44c29bc8729940459a4a4cc199fcfcd316d710eb07e05d8e3386ae65d'
    }

    get asV44(): BandSymbolRatesStorageV44 {
        assert(this.isV44)
        return this as any
    }

    get isV45(): boolean {
        return this.getTypeHash() === '2868670806b077361a748379da382a31bba9587a7096d240aaae3f7123024e18'
    }

    get asV45(): BandSymbolRatesStorageV45 {
        assert(this.isV45)
        return this as any
    }

    get isV59(): boolean {
        return this.getTypeHash() === '569c8d0c399c0dd805f6a3ab4bb74f85070b17a9d8a34342afd6dd034dad4bf9'
    }

    get asV59(): BandSymbolRatesStorageV59 {
        assert(this.isV59)
        return this as any
    }

    get isV60(): boolean {
        return this.getTypeHash() === '1463cb9392939423c1cd0fbfd71ec390f4dc66703aca420fdc0a53769675a3b3'
    }

    get asV60(): BandSymbolRatesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandSymbolRatesStorageV44 {
    get(key: string): Promise<(v44.Rate | undefined)>
    getAll(): Promise<(v44.Rate | undefined)[]>
    getMany(keys: string[]): Promise<(v44.Rate | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: (v44.Rate | undefined)][]>
    getPairs(key: string): Promise<[k: string, v: (v44.Rate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: (v44.Rate | undefined)][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: (v44.Rate | undefined)][]>
}

export interface BandSymbolRatesStorageV45 {
    get(key: Uint8Array): Promise<(v45.BandRate | undefined)>
    getAll(): Promise<(v45.BandRate | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<(v45.BandRate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (v45.BandRate | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (v45.BandRate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (v45.BandRate | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (v45.BandRate | undefined)][]>
}

export interface BandSymbolRatesStorageV59 {
    get(key: Uint8Array): Promise<(v59.BandRate | undefined)>
    getAll(): Promise<(v59.BandRate | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<(v59.BandRate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (v59.BandRate | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (v59.BandRate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (v59.BandRate | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (v59.BandRate | undefined)][]>
}

export interface BandSymbolRatesStorageV60 {
    get(key: Uint8Array): Promise<(v60.BandRate | undefined)>
    getAll(): Promise<(v60.BandRate | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<(v60.BandRate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
}

export class BandTrustedRelayersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'TrustedRelayers'
    }

    get isV44(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    get asV44(): BandTrustedRelayersStorageV44 {
        assert(this.isV44)
        return this as any
    }
}

export interface BandTrustedRelayersStorageV44 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class BeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authorities set
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  The current authorities set
     */
    get asV42(): BeefyAuthoritiesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current authorities set
 */
export interface BeefyAuthoritiesStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class BeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get asV42(): BeefyNextAuthoritiesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface BeefyNextAuthoritiesStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class BeefyValidatorSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'ValidatorSetId'
    }

    /**
     *  The current validator set id
     */
    get isV42(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current validator set id
     */
    get asV42(): BeefyValidatorSetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current validator set id
 */
export interface BeefyValidatorSetIdStorageV42 {
    get(): Promise<bigint>
}

export class BeefyLightClientCurrentValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'CurrentValidatorSet'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV52(): BeefyLightClientCurrentValidatorSetStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientCurrentValidatorSetStorageV52 {
    get(key: v52.SubNetworkId): Promise<(v52.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v52.BeefyAuthoritySet[]>
    getMany(keys: v52.SubNetworkId[]): Promise<(v52.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
}

export class BeefyLightClientLatestBeefyBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestBeefyBlock'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV52(): BeefyLightClientLatestBeefyBlockStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientLatestBeefyBlockStorageV52 {
    get(key: v52.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v52.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
}

export class BeefyLightClientLatestMMRRootsStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestMMRRoots'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '76aad9b2f69624cc0ac9edade0a395aae72489d2c38a9c8a53b515fa48d04b0b'
    }

    get asV52(): BeefyLightClientLatestMMRRootsStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientLatestMMRRootsStorageV52 {
    get(key: v52.SubNetworkId): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v52.SubNetworkId[]): Promise<Uint8Array[][]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: Uint8Array[]][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: Uint8Array[]][]>
}

export class BeefyLightClientLatestRandomSeedStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestRandomSeed'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '71e0decea676f8576efdb835fd40eaa20cee34c08589ca24818aa93fc545680e'
    }

    get asV52(): BeefyLightClientLatestRandomSeedStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientLatestRandomSeedStorageV52 {
    get(key: v52.SubNetworkId): Promise<[Uint8Array, number]>
    getAll(): Promise<[Uint8Array, number][]>
    getMany(keys: v52.SubNetworkId[]): Promise<[Uint8Array, number][]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: [Uint8Array, number]][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: [Uint8Array, number]][]>
}

export class BeefyLightClientNextValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'NextValidatorSet'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV52(): BeefyLightClientNextValidatorSetStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientNextValidatorSetStorageV52 {
    get(key: v52.SubNetworkId): Promise<(v52.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v52.BeefyAuthoritySet[]>
    getMany(keys: v52.SubNetworkId[]): Promise<(v52.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: v52.BeefyAuthoritySet][]>
}

export class BeefyLightClientThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'e98f7bd664e2ea3524489905648b217400e58d4063ec1a8e53bba73266a424b2'
    }

    get asV52(): BeefyLightClientThisNetworkIdStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BeefyLightClientThisNetworkIdStorageV52 {
    get(): Promise<v52.SubNetworkId>
}

export class BridgeDataSignerApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Approvals
     */
    get isV54(): boolean {
        return this.getTypeHash() === '0018725b380dd161f91c8218f80f948a5cdba579e99333e2bc5f8ae6d5334e72'
    }

    /**
     *  Approvals
     */
    get asV54(): BridgeDataSignerApprovalsStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Approvals
 */
export interface BridgeDataSignerApprovalsStorageV54 {
    get(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getAll(): Promise<[Uint8Array, Uint8Array][][]>
    getMany(keys: [v54.GenericNetworkId, Uint8Array][]): Promise<[Uint8Array, Uint8Array][][]>
    getKeys(): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v54.GenericNetworkId): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v54.GenericNetworkId): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v54.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v54.GenericNetworkId): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v54.GenericNetworkId): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v54.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
}

export class BridgeDataSignerPeersStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'Peers'
    }

    /**
     *  Peers
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    /**
     *  Peers
     */
    get asV54(): BridgeDataSignerPeersStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Peers
 */
export interface BridgeDataSignerPeersStorageV54 {
    get(key: v54.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v54.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v54.GenericNetworkId[]>
    getKeys(key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(): Promise<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
}

export class BridgeDataSignerPendingPeerUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'PendingPeerUpdate'
    }

    /**
     *  Pending peers
     */
    get isV54(): boolean {
        return this.getTypeHash() === '2259adffe846960292971baa4d957900e8c68078a50aff9ad4f50897d0102227'
    }

    /**
     *  Pending peers
     */
    get asV54(): BridgeDataSignerPendingPeerUpdateStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Pending peers
 */
export interface BridgeDataSignerPendingPeerUpdateStorageV54 {
    get(key: v54.GenericNetworkId): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v54.GenericNetworkId[]): Promise<boolean[]>
    getKeys(): Promise<v54.GenericNetworkId[]>
    getKeys(key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(): Promise<[k: v54.GenericNetworkId, v: boolean][]>
    getPairs(key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v54.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: boolean][]>
}

export class BridgeInboundChannelChannelAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelAddresses'
    }

    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    get isV52(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    get asV52(): BridgeInboundChannelChannelAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Source channel (OutboundChannel contract) on the ethereum side
 */
export interface BridgeInboundChannelChannelAddressesStorageV52 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class BridgeInboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV52(): BridgeInboundChannelChannelNoncesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BridgeInboundChannelChannelNoncesStorageV52 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeInboundChannelInboundChannelAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'InboundChannelAddresses'
    }

    /**
     *  InboundChannel contract address on the ethereum side
     */
    get isV52(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  InboundChannel contract address on the ethereum side
     */
    get asV52(): BridgeInboundChannelInboundChannelAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  InboundChannel contract address on the ethereum side
 */
export interface BridgeInboundChannelInboundChannelAddressesStorageV52 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class BridgeInboundChannelInboundChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'InboundChannelNonces'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV52(): BridgeInboundChannelInboundChannelNoncesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BridgeInboundChannelInboundChannelNoncesStorageV52 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeInboundChannelRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'RewardFraction'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV52(): BridgeInboundChannelRewardFractionStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BridgeInboundChannelRewardFractionStorageV52 {
    get(): Promise<number>
}

export class BridgeMultisigAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  Multisignature accounts.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'cd3338caa601a4e2cc7a00dec626fae008fcbe18f6658819525a09e67bf3e568'
    }

    /**
     *  Multisignature accounts.
     */
    get asV33(): BridgeMultisigAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Multisignature accounts.
 */
export interface BridgeMultisigAccountsStorageV33 {
    get(key: Uint8Array): Promise<(v33.MultisigAccount | undefined)>
    getAll(): Promise<v33.MultisigAccount[]>
    getMany(keys: Uint8Array[]): Promise<(v33.MultisigAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.MultisigAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.MultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.MultisigAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.MultisigAccount][]>
}

export class BridgeMultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV33(): BridgeMultisigCallsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface BridgeMultisigCallsStorageV33 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class BridgeMultisigDispatchedCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'DispatchedCalls'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'e2028db08037cfc67445208df734fa0d45be263177b39a42155e067199ca2c4c'
    }

    get asV33(): BridgeMultisigDispatchedCallsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface BridgeMultisigDispatchedCallsStorageV33 {
    get(key1: Uint8Array, key2: v33.BridgeTimepoint): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, v33.BridgeTimepoint][]): Promise<null[]>
    getKeys(): Promise<[Uint8Array, v33.BridgeTimepoint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v33.BridgeTimepoint][]>
    getKeys(key1: Uint8Array, key2: v33.BridgeTimepoint): Promise<[Uint8Array, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v33.BridgeTimepoint): AsyncIterable<[Uint8Array, v33.BridgeTimepoint][]>
    getPairs(): Promise<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array, key2: v33.BridgeTimepoint): Promise<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v33.BridgeTimepoint): AsyncIterable<[k: [Uint8Array, v33.BridgeTimepoint], v: null][]>
}

export class BridgeMultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV33(): BridgeMultisigMultisigsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The set of open multisig operations.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f276292c2ec28ca6923fb8d9f85c0ce563f7cb13e1b3b18598f5f354a6570f2b'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV42(): BridgeMultisigMultisigsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface BridgeMultisigMultisigsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v33.Multisig | undefined)>
    getAll(): Promise<v33.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v33.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
}

/**
 *  The set of open multisig operations.
 */
export interface BridgeMultisigMultisigsStorageV42 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v42.Multisig | undefined)>
    getAll(): Promise<v42.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v42.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v42.Multisig][]>
}

export class BridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV52(): BridgeOutboundChannelChannelNoncesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BridgeOutboundChannelChannelNoncesStorageV52 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeOutboundChannelFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'Fee'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV52(): BridgeOutboundChannelFeeStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface BridgeOutboundChannelFeeStorageV52 {
    get(): Promise<bigint>
}

export class BridgeOutboundChannelIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'Interval'
    }

    /**
     *  Interval between committing messages.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV52(): BridgeOutboundChannelIntervalStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface BridgeOutboundChannelIntervalStorageV52 {
    get(): Promise<number>
}

export class BridgeOutboundChannelMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'MessageQueues'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'a8cf0f0dcc1db463e820f4fc6368b6b0b2e42c337acc1fb05df9c2d54ede7953'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV52(): BridgeOutboundChannelMessageQueuesStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'e8ea6721473935d7f5f9bb6c49e2f10cd97eba1ae042ba553118fa8c077721c9'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV55(): BridgeOutboundChannelMessageQueuesStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV57(): boolean {
        return this.getTypeHash() === 'becbc7253dd748b1e180dc34a7ee1e2b33615439bf5e1213a0e496f21e134a4d'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV57(): BridgeOutboundChannelMessageQueuesStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface BridgeOutboundChannelMessageQueuesStorageV52 {
    get(key: bigint): Promise<v52.Type_802[]>
    getAll(): Promise<v52.Type_802[][]>
    getMany(keys: bigint[]): Promise<v52.Type_802[][]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.Type_802[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.Type_802[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.Type_802[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.Type_802[]][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface BridgeOutboundChannelMessageQueuesStorageV55 {
    get(key: bigint): Promise<v55.Message[]>
    getAll(): Promise<v55.Message[][]>
    getMany(keys: bigint[]): Promise<v55.Message[][]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v55.Message[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v55.Message[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v55.Message[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v55.Message[]][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface BridgeOutboundChannelMessageQueuesStorageV57 {
    get(key: bigint): Promise<v57.Message[]>
    getAll(): Promise<v57.Message[][]>
    getMany(keys: bigint[]): Promise<v57.Message[][]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v57.Message[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v57.Message[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v57.Message[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v57.Message[]][]>
}

export class BridgeOutboundChannelQueuesTotalGasStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'QueuesTotalGas'
    }

    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '562642e80114763badea02d1e1f1ca3ec06ced33d0cb004f035c6617dcb1cbfc'
    }

    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    get asV52(): BridgeOutboundChannelQueuesTotalGasStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
 */
export interface BridgeOutboundChannelQueuesTotalGasStorageV52 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeProxyConsumedTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'ConsumedTransferLimit'
    }

    /**
     *  Consumed transfer limit.
     */
    get isV62(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Consumed transfer limit.
     */
    get asV62(): BridgeProxyConsumedTransferLimitStorageV62 {
        assert(this.isV62)
        return this as any
    }
}

/**
 *  Consumed transfer limit.
 */
export interface BridgeProxyConsumedTransferLimitStorageV62 {
    get(): Promise<bigint>
}

export class BridgeProxyLimitedAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'LimitedAssets'
    }

    /**
     *  Assets with transfer limitation.
     */
    get isV62(): boolean {
        return this.getTypeHash() === 'c174344dfddcf1721ee1639e2dd3674a34e0feb5b0b7408e99c10363afb45d50'
    }

    /**
     *  Assets with transfer limitation.
     */
    get asV62(): BridgeProxyLimitedAssetsStorageV62 {
        assert(this.isV62)
        return this as any
    }
}

/**
 *  Assets with transfer limitation.
 */
export interface BridgeProxyLimitedAssetsStorageV62 {
    get(key: v62.AssetId32): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v62.AssetId32[]): Promise<boolean[]>
    getKeys(): Promise<v62.AssetId32[]>
    getKeys(key: v62.AssetId32): Promise<v62.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v62.AssetId32[]>
    getKeysPaged(pageSize: number, key: v62.AssetId32): AsyncIterable<v62.AssetId32[]>
    getPairs(): Promise<[k: v62.AssetId32, v: boolean][]>
    getPairs(key: v62.AssetId32): Promise<[k: v62.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v62.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number, key: v62.AssetId32): AsyncIterable<[k: v62.AssetId32, v: boolean][]>
}

export class BridgeProxyLockedAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'LockedAssets'
    }

    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    get isV57(): boolean {
        return this.getTypeHash() === '72028d2a273ff5bf4de7b2dc6214e6136859bf8e40d4fcf347ddccc0c260386f'
    }

    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    get asV57(): BridgeProxyLockedAssetsStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface BridgeProxyLockedAssetsStorageV57 {
    get(key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v57.GenericNetworkId, v57.AssetId32][]): Promise<bigint[]>
    getKeys(): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeys(key1: v57.GenericNetworkId): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeys(key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v57.GenericNetworkId): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v57.GenericNetworkId, key2: v57.AssetId32): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getPairs(): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
    getPairs(key1: v57.GenericNetworkId): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
    getPairs(key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v57.GenericNetworkId): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v57.GenericNetworkId, key2: v57.AssetId32): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: bigint][]>
}

export class BridgeProxySendersStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Senders'
    }

    get isV54(): boolean {
        return this.getTypeHash() === 'c009c4f18cbf05b12a1f843bbfda19189457fea80027cf7b19a8798618cbce2e'
    }

    get asV54(): BridgeProxySendersStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface BridgeProxySendersStorageV54 {
    get(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [v54.GenericNetworkId, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v54.GenericNetworkId): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v54.GenericNetworkId): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v54.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v54.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v54.GenericNetworkId): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v54.GenericNetworkId, key2: Uint8Array): Promise<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v54.GenericNetworkId): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v54.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v54.GenericNetworkId, Uint8Array], v: Uint8Array][]>
}

export class BridgeProxySidechainFeePaidStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'SidechainFeePaid'
    }

    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    get isV55(): boolean {
        return this.getTypeHash() === '18105a375da97c8d25485c70df3cd51a33320e2a6ba4fc63196540378cd0d239'
    }

    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    get asV55(): BridgeProxySidechainFeePaidStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface BridgeProxySidechainFeePaidStorageV55 {
    get(key1: v55.GenericNetworkId, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [v55.GenericNetworkId, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[v55.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v55.GenericNetworkId): Promise<[v55.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v55.GenericNetworkId, key2: Uint8Array): Promise<[v55.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v55.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v55.GenericNetworkId): AsyncIterable<[v55.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v55.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v55.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v55.GenericNetworkId): Promise<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v55.GenericNetworkId, key2: Uint8Array): Promise<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v55.GenericNetworkId): AsyncIterable<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v55.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v55.GenericNetworkId, Uint8Array], v: bigint][]>
}

export class BridgeProxyTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Transactions'
    }

    get isV54(): boolean {
        return this.getTypeHash() === '529c3a4707b15a768a1be2b7f8c99840e4aabfe3e516de73c085d8329a9ad46d'
    }

    get asV54(): BridgeProxyTransactionsStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface BridgeProxyTransactionsStorageV54 {
    get(key1: [v54.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<(v54.BridgeRequest | undefined)>
    getAll(): Promise<v54.BridgeRequest[]>
    getMany(keys: [[v54.GenericNetworkId, Uint8Array], Uint8Array][]): Promise<(v54.BridgeRequest | undefined)[]>
    getKeys(): Promise<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v54.GenericNetworkId, Uint8Array]): Promise<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v54.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v54.GenericNetworkId, Uint8Array]): AsyncIterable<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v54.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[[v54.GenericNetworkId, Uint8Array], Uint8Array][]>
    getPairs(): Promise<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
    getPairs(key1: [v54.GenericNetworkId, Uint8Array]): Promise<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
    getPairs(key1: [v54.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v54.GenericNetworkId, Uint8Array]): AsyncIterable<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v54.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[k: [[v54.GenericNetworkId, Uint8Array], Uint8Array], v: v54.BridgeRequest][]>
}

export class BridgeProxyTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'TransferLimit'
    }

    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    get isV62(): boolean {
        return this.getTypeHash() === '528249b1b19c80ce4829cb789f6272e9b2eac8a898ffda956ff359869f83a090'
    }

    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    get asV62(): BridgeProxyTransferLimitStorageV62 {
        assert(this.isV62)
        return this as any
    }
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface BridgeProxyTransferLimitStorageV62 {
    get(): Promise<v62.TransferLimitSettings>
}

export class BridgeProxyTransferLimitUnlockScheduleStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'TransferLimitUnlockSchedule'
    }

    /**
     *  Schedule for consumed transfer limit reduce.
     */
    get isV62(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  Schedule for consumed transfer limit reduce.
     */
    get asV62(): BridgeProxyTransferLimitUnlockScheduleStorageV62 {
        assert(this.isV62)
        return this as any
    }
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface BridgeProxyTransferLimitUnlockScheduleStorageV62 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class CeresGovernancePlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV37(): boolean {
        return this.getTypeHash() === 'e95fdc65ae7801d7a8189566f181530f616b49f89f9a0107ceed3ab9e830d20d'
    }

    /**
     *  Pallet storage version
     */
    get asV37(): CeresGovernancePlatformPalletStorageVersionStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Pallet storage version
     */
    get isV42(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV42(): CeresGovernancePlatformPalletStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresGovernancePlatformPalletStorageVersionStorageV37 {
    get(): Promise<null>
}

/**
 *  Pallet storage version
 */
export interface CeresGovernancePlatformPalletStorageVersionStorageV42 {
    get(): Promise<v42.StorageVersion>
}

export class CeresGovernancePlatformPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'PollData'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '15cbbd5cb0d096a2e62904eec97fa3683b36340edf341f8de1945437573d764b'
    }

    get asV33(): CeresGovernancePlatformPollDataStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface CeresGovernancePlatformPollDataStorageV33 {
    get(key: Uint8Array): Promise<v33.PollInfo>
    getAll(): Promise<v33.PollInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.PollInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.PollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.PollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.PollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.PollInfo][]>
}

export class CeresGovernancePlatformVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get isV33(): boolean {
        return this.getTypeHash() === '9173d95a25234ebe48baeb1a51daf8291918a9b434e54431b06b2cd1f6dbc4f2'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV33(): CeresGovernancePlatformVotingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface CeresGovernancePlatformVotingStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v33.VotingInfo>
    getAll(): Promise<v33.VotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v33.VotingInfo[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.VotingInfo][]>
}

export class CeresLaunchpadAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    get asV33(): CeresLaunchpadAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface CeresLaunchpadAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresLaunchpadCeresBurnFeeAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'CeresBurnFeeAmount'
    }

    /**
     *  Amount of CERES for burn fee
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for burn fee
     */
    get asV33(): CeresLaunchpadCeresBurnFeeAmountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresLaunchpadCeresBurnFeeAmountStorageV33 {
    get(): Promise<bigint>
}

export class CeresLaunchpadCeresForContributionInILOStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'CeresForContributionInILO'
    }

    /**
     *  Amount of CERES for contribution in ILO
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for contribution in ILO
     */
    get asV33(): CeresLaunchpadCeresForContributionInILOStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresLaunchpadCeresForContributionInILOStorageV33 {
    get(): Promise<bigint>
}

export class CeresLaunchpadContributionsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'Contributions'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'e596a04f0373c26f2569850fe6e26ea1add9b3dc38a95e91fc2015c3d3f2227f'
    }

    get asV33(): CeresLaunchpadContributionsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '237eb32bdfb9ba5649a5186003df98b3645d63740dfe6da2431e4ef225d6adb6'
    }

    get asV42(): CeresLaunchpadContributionsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface CeresLaunchpadContributionsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v33.ContributionInfo>
    getAll(): Promise<v33.ContributionInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v33.ContributionInfo[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.ContributionInfo][]>
}

export interface CeresLaunchpadContributionsStorageV42 {
    get(key1: v42.AssetId32, key2: Uint8Array): Promise<v42.ContributionInfo>
    getAll(): Promise<v42.ContributionInfo[]>
    getMany(keys: [v42.AssetId32, Uint8Array][]): Promise<v42.ContributionInfo[]>
    getKeys(): Promise<[v42.AssetId32, Uint8Array][]>
    getKeys(key1: v42.AssetId32): Promise<[v42.AssetId32, Uint8Array][]>
    getKeys(key1: v42.AssetId32, key2: Uint8Array): Promise<[v42.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32, key2: Uint8Array): AsyncIterable<[v42.AssetId32, Uint8Array][]>
    getPairs(): Promise<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
    getPairs(key1: v42.AssetId32): Promise<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
    getPairs(key1: v42.AssetId32, key2: Uint8Array): Promise<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32, key2: Uint8Array): AsyncIterable<[k: [v42.AssetId32, Uint8Array], v: v42.ContributionInfo][]>
}

export class CeresLaunchpadFeePercentOnRaisedFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'FeePercentOnRaisedFunds'
    }

    /**
     *  Fee percent on raised funds in successful ILO
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fee percent on raised funds in successful ILO
     */
    get asV47(): CeresLaunchpadFeePercentOnRaisedFundsStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface CeresLaunchpadFeePercentOnRaisedFundsStorageV47 {
    get(): Promise<bigint>
}

export class CeresLaunchpadILOsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'ILOs'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ed83fcdec0ef8b818205ef78f241411868ef190a8eb62ead73ecb8b791091a6d'
    }

    get asV33(): CeresLaunchpadILOsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV35(): boolean {
        return this.getTypeHash() === '928df8ea2b877cf55ca77bd1b922165317f163bb82509a1775e7c7fe2878c48c'
    }

    get asV35(): CeresLaunchpadILOsStorageV35 {
        assert(this.isV35)
        return this as any
    }

    get isV37(): boolean {
        return this.getTypeHash() === '7380f03663ce1efc03a9f8095b4d67eca5dcd7094ebe63d709fb93cfa0f11664'
    }

    get asV37(): CeresLaunchpadILOsStorageV37 {
        assert(this.isV37)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'a756a06402e0c69636ff72eb1aa1c603ffb6431e5e29f26d04974b7b2d384af7'
    }

    get asV42(): CeresLaunchpadILOsStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV47(): boolean {
        return this.getTypeHash() === 'ca84a1a09dc4d0e7482ffddea595231e8c4bcce744ba2b7a266be8396342b1cc'
    }

    get asV47(): CeresLaunchpadILOsStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

export interface CeresLaunchpadILOsStorageV33 {
    get(key: Uint8Array): Promise<v33.ILOInfo>
    getAll(): Promise<v33.ILOInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.ILOInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.ILOInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.ILOInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.ILOInfo][]>
}

export interface CeresLaunchpadILOsStorageV35 {
    get(key: Uint8Array): Promise<v35.ILOInfo>
    getAll(): Promise<v35.ILOInfo[]>
    getMany(keys: Uint8Array[]): Promise<v35.ILOInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v35.ILOInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v35.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v35.ILOInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v35.ILOInfo][]>
}

export interface CeresLaunchpadILOsStorageV37 {
    get(key: Uint8Array): Promise<v37.ILOInfo>
    getAll(): Promise<v37.ILOInfo[]>
    getMany(keys: Uint8Array[]): Promise<v37.ILOInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v37.ILOInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v37.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v37.ILOInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v37.ILOInfo][]>
}

export interface CeresLaunchpadILOsStorageV42 {
    get(key: v42.AssetId32): Promise<(v42.ILOInfo | undefined)>
    getAll(): Promise<v42.ILOInfo[]>
    getMany(keys: v42.AssetId32[]): Promise<(v42.ILOInfo | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: v42.ILOInfo][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: v42.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: v42.ILOInfo][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: v42.ILOInfo][]>
}

export interface CeresLaunchpadILOsStorageV47 {
    get(key: v47.AssetId32): Promise<(v47.ILOInfo | undefined)>
    getAll(): Promise<v47.ILOInfo[]>
    getMany(keys: v47.AssetId32[]): Promise<(v47.ILOInfo | undefined)[]>
    getKeys(): Promise<v47.AssetId32[]>
    getKeys(key: v47.AssetId32): Promise<v47.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v47.AssetId32[]>
    getKeysPaged(pageSize: number, key: v47.AssetId32): AsyncIterable<v47.AssetId32[]>
    getPairs(): Promise<[k: v47.AssetId32, v: v47.ILOInfo][]>
    getPairs(key: v47.AssetId32): Promise<[k: v47.AssetId32, v: v47.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v47.AssetId32, v: v47.ILOInfo][]>
    getPairsPaged(pageSize: number, key: v47.AssetId32): AsyncIterable<[k: v47.AssetId32, v: v47.ILOInfo][]>
}

export class CeresLaunchpadPenaltiesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'PenaltiesAccount'
    }

    /**
     *  Account for collecting penalties
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting penalties
     */
    get asV33(): CeresLaunchpadPenaltiesAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account for collecting penalties
 */
export interface CeresLaunchpadPenaltiesAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresLaunchpadWhitelistedContributorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedContributors'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV33(): CeresLaunchpadWhitelistedContributorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedContributorsStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class CeresLaunchpadWhitelistedIloOrganizersStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedIloOrganizers'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV33(): CeresLaunchpadWhitelistedIloOrganizersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedIloOrganizersStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class CeresLiquidityLockerAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing CERES amount fee
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES amount fee
     */
    get asV33(): CeresLiquidityLockerAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface CeresLiquidityLockerAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionOneAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionOneAccount'
    }

    /**
     *  Account for collecting fees from Option 1
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 1
     */
    get asV33(): CeresLiquidityLockerFeesOptionOneAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 1
 */
export interface CeresLiquidityLockerFeesOptionOneAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionTwoAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionTwoAccount'
    }

    /**
     *  Account for collecting fees from Option 2
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 2
     */
    get asV33(): CeresLiquidityLockerFeesOptionTwoAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 2
 */
export interface CeresLiquidityLockerFeesOptionTwoAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionTwoCeresAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionTwoCeresAmount'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV33(): CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV33 {
    get(): Promise<bigint>
}

export class CeresLiquidityLockerLockerDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'LockerData'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ad7bbbcbf1b5e59790bc7480320cccab4337295b12114c62e9268835706219bd'
    }

    get asV33(): CeresLiquidityLockerLockerDataStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Contains data about lockups for each account
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e923765799e65e5eeadcbc5d6159c57be4d7b0f66ce7fda6f358f2e98eb67079'
    }

    /**
     *  Contains data about lockups for each account
     */
    get asV42(): CeresLiquidityLockerLockerDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface CeresLiquidityLockerLockerDataStorageV33 {
    get(key: Uint8Array): Promise<v33.LockInfo[]>
    getAll(): Promise<v33.LockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v33.LockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.LockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.LockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.LockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.LockInfo[]][]>
}

/**
 *  Contains data about lockups for each account
 */
export interface CeresLiquidityLockerLockerDataStorageV42 {
    get(key: Uint8Array): Promise<v42.LockInfo[]>
    getAll(): Promise<v42.LockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v42.LockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.LockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.LockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.LockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.LockInfo[]][]>
}

export class CeresLiquidityLockerPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV37(): boolean {
        return this.getTypeHash() === 'e95fdc65ae7801d7a8189566f181530f616b49f89f9a0107ceed3ab9e830d20d'
    }

    /**
     *  Pallet storage version
     */
    get asV37(): CeresLiquidityLockerPalletStorageVersionStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Pallet storage version
     */
    get isV42(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV42(): CeresLiquidityLockerPalletStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresLiquidityLockerPalletStorageVersionStorageV37 {
    get(): Promise<null>
}

/**
 *  Pallet storage version
 */
export interface CeresLiquidityLockerPalletStorageVersionStorageV42 {
    get(): Promise<v42.StorageVersion>
}

export class CeresStakingAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing remaining rewards
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing remaining rewards
     */
    get asV33(): CeresStakingAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface CeresStakingAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresStakingRewardsRemainingStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'RewardsRemaining'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV33(): CeresStakingRewardsRemainingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface CeresStakingRewardsRemainingStorageV33 {
    get(): Promise<bigint>
}

export class CeresStakingStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'Stakers'
    }

    /**
     *  AccountId -> StakingInfo
     */
    get isV33(): boolean {
        return this.getTypeHash() === '50b5f6a0d0df44de77201073b82e298698ffffd86dc6cced006718dba7ffc8c0'
    }

    /**
     *  AccountId -> StakingInfo
     */
    get asV33(): CeresStakingStakersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  AccountId -> StakingInfo
 */
export interface CeresStakingStakersStorageV33 {
    get(key: Uint8Array): Promise<v33.StakingInfo>
    getAll(): Promise<v33.StakingInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.StakingInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.StakingInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.StakingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.StakingInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.StakingInfo][]>
}

export class CeresStakingTotalDepositedStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'TotalDeposited'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV33(): CeresStakingTotalDepositedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface CeresStakingTotalDepositedStorageV33 {
    get(): Promise<bigint>
}

export class CeresTokenLockerAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing fee
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing fee
     */
    get asV33(): CeresTokenLockerAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account which has permissions for changing fee
 */
export interface CeresTokenLockerAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresTokenLockerFeeAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'FeeAmount'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV33(): CeresTokenLockerFeeAmountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresTokenLockerFeeAmountStorageV33 {
    get(): Promise<bigint>
}

export class CeresTokenLockerFeesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'FeesAccount'
    }

    /**
     *  Account for collecting fees
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees
     */
    get asV33(): CeresTokenLockerFeesAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account for collecting fees
 */
export interface CeresTokenLockerFeesAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class CeresTokenLockerPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV37(): boolean {
        return this.getTypeHash() === 'e95fdc65ae7801d7a8189566f181530f616b49f89f9a0107ceed3ab9e830d20d'
    }

    /**
     *  Pallet storage version
     */
    get asV37(): CeresTokenLockerPalletStorageVersionStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Pallet storage version
     */
    get isV42(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV42(): CeresTokenLockerPalletStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresTokenLockerPalletStorageVersionStorageV37 {
    get(): Promise<null>
}

/**
 *  Pallet storage version
 */
export interface CeresTokenLockerPalletStorageVersionStorageV42 {
    get(): Promise<v42.StorageVersion>
}

export class CeresTokenLockerTokenLockerDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'TokenLockerData'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ab71cb9dfcd96110f1ea980eed0d03a9d074588de32020b99fcc3ff6c59dc0cb'
    }

    get asV33(): CeresTokenLockerTokenLockerDataStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'e4118245f8d3d415793878b8a96bd927121dc142963e1a87c7ca1d6f1f835087'
    }

    get asV42(): CeresTokenLockerTokenLockerDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface CeresTokenLockerTokenLockerDataStorageV33 {
    get(key: Uint8Array): Promise<v33.TokenLockInfo[]>
    getAll(): Promise<v33.TokenLockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v33.TokenLockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.TokenLockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.TokenLockInfo[]][]>
}

export interface CeresTokenLockerTokenLockerDataStorageV42 {
    get(key: Uint8Array): Promise<v42.TokenLockInfo[]>
    getAll(): Promise<v42.TokenLockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v42.TokenLockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.TokenLockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.TokenLockInfo[]][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV42(): CouncilMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV42(): CouncilPrimeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV42(): CouncilProposalCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV42 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8e85887e7df8e2636a08905a731cc89604fe967aee1c2bc92bf5d5ad4f8f8d9c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV42(): CouncilProposalOfStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'b146c5159b7aa27ad7cfe43c9b7444f667a6d7bdc868f8171059ef52099b8650'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): CouncilProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV44(): boolean {
        return this.getTypeHash() === '8e3c7ae77a7b44b275eeddd524283699e232484b53611eb637650ab8241e5783'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV44(): CouncilProposalOfStorageV44 {
        assert(this.isV44)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV45(): boolean {
        return this.getTypeHash() === '37e96fa34649a7c5cc03015b3d9fcb4baa840ef547be2374fef903769fcfc769'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV45(): CouncilProposalOfStorageV45 {
        assert(this.isV45)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV46(): boolean {
        return this.getTypeHash() === 'c0ad4c3a4bcadce1385bc9aec7caf26bfce55d1b935f9bf9fa5fb85b67caa2cc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV46(): CouncilProposalOfStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'd755c2be53ac873f09fff7485290812dbf4385db026c71cfc47f374e72764829'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV47(): CouncilProposalOfStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV48(): boolean {
        return this.getTypeHash() === 'fedd302420ac53b1117af61a831f8441d4bbc139216a0753639de782f3129252'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV48(): CouncilProposalOfStorageV48 {
        assert(this.isV48)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'e9fee133103f48e362be1673a1f1e6befcacdc21728be32bdb9f1056cf69a8c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV52(): CouncilProposalOfStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'e83fa34aee882b3a7a34aaf36d12956639d73687b11a52fc2d2df76269c72b34'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV54(): CouncilProposalOfStorageV54 {
        assert(this.isV54)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'ae76bb548bb8894c0b01933dc399eb347fb7037bcaea41abce58c945053e3e7a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): CouncilProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV57(): boolean {
        return this.getTypeHash() === 'c6c9c9c485bb5c023c6334c8835593788947093efd662b2389d8aae0911fec55'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV57(): CouncilProposalOfStorageV57 {
        assert(this.isV57)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV59(): boolean {
        return this.getTypeHash() === '064292047c328a72a074ffd63a1098280eb0d4101ded37a1f7d52aea2e259abd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV59(): CouncilProposalOfStorageV59 {
        assert(this.isV59)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '24ccc6bad5e9f5ee926b0bccf8d73b7ebf18a466e356c17d0a2ca03b53be627f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV60(): CouncilProposalOfStorageV60 {
        assert(this.isV60)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV62(): boolean {
        return this.getTypeHash() === 'df61816865d9330415d02528eee6a7e6fd3980a5d00993a32ff0e6fddaefe46e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV62(): CouncilProposalOfStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '0b3d12375d94e142b8c23992277dd04c261dba99c0b4abe8d0cacfc61734b8bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV64(): CouncilProposalOfStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV66(): boolean {
        return this.getTypeHash() === 'dc8d2d5e124dbbe365eb19ea702b3a9e632c13e8387cb9d38359410a847b1af7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV66(): CouncilProposalOfStorageV66 {
        assert(this.isV66)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV42 {
    get(key: Uint8Array): Promise<(v42.Call | undefined)>
    getAll(): Promise<v42.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV44 {
    get(key: Uint8Array): Promise<(v44.Call | undefined)>
    getAll(): Promise<v44.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v44.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v44.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v44.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v44.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v44.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV45 {
    get(key: Uint8Array): Promise<(v45.Call | undefined)>
    getAll(): Promise<v45.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v45.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v45.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v45.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v45.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v45.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV46 {
    get(key: Uint8Array): Promise<(v46.Call | undefined)>
    getAll(): Promise<v46.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v46.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v46.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v46.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v46.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v46.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV47 {
    get(key: Uint8Array): Promise<(v47.Call | undefined)>
    getAll(): Promise<v47.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v47.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV48 {
    get(key: Uint8Array): Promise<(v48.Call | undefined)>
    getAll(): Promise<v48.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v48.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v48.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v48.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v48.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v48.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV52 {
    get(key: Uint8Array): Promise<(v52.Call | undefined)>
    getAll(): Promise<v52.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v52.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v52.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v52.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v52.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v52.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV54 {
    get(key: Uint8Array): Promise<(v54.Call | undefined)>
    getAll(): Promise<v54.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v54.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v54.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v54.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v54.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v54.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV57 {
    get(key: Uint8Array): Promise<(v57.Call | undefined)>
    getAll(): Promise<v57.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v57.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v57.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v57.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v57.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v57.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV59 {
    get(key: Uint8Array): Promise<(v59.Call | undefined)>
    getAll(): Promise<v59.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v59.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v59.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v59.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v59.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v59.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV60 {
    get(key: Uint8Array): Promise<(v60.Call | undefined)>
    getAll(): Promise<v60.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV62 {
    get(key: Uint8Array): Promise<(v62.Call | undefined)>
    getAll(): Promise<v62.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v62.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV64 {
    get(key: Uint8Array): Promise<(v64.Call | undefined)>
    getAll(): Promise<v64.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v64.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV66 {
    get(key: Uint8Array): Promise<(v66.Call | undefined)>
    getAll(): Promise<v66.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v66.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v66.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v66.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v66.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v66.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV42(): CouncilProposalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV42(): CouncilVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV42 {
    get(key: Uint8Array): Promise<(v42.Votes | undefined)>
    getAll(): Promise<v42.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
}

export class DEXAPIEnabledSourceTypesStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXAPI'
    }

    protected getName() {
        return 'EnabledSourceTypes'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV33(): DEXAPIEnabledSourceTypesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'b3e2e66fd93d12bfc55510be49dfb54e3a3a08182855f144a1cb9068eaf711dd'
    }

    get asV42(): DEXAPIEnabledSourceTypesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface DEXAPIEnabledSourceTypesStorageV33 {
    get(): Promise<v33.LiquiditySourceType[]>
}

export interface DEXAPIEnabledSourceTypesStorageV42 {
    get(): Promise<v42.LiquiditySourceType[]>
}

export class DEXManagerDEXInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXManager'
    }

    protected getName() {
        return 'DEXInfos'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'cabd190dafdaab492e89c1daa874c4111fa262f11d882f51c3c21f3db853f27b'
    }

    get asV33(): DEXManagerDEXInfosStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'fc1ff12acc4535a5f57424f23b2893c984a0bb4f1ae22841f12a4790366da49a'
    }

    get asV42(): DEXManagerDEXInfosStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV44(): boolean {
        return this.getTypeHash() === '494dff123a3c227cdb05691512a6deb17a90a41b14b3c18babca089a87d64b6a'
    }

    get asV44(): DEXManagerDEXInfosStorageV44 {
        assert(this.isV44)
        return this as any
    }
}

export interface DEXManagerDEXInfosStorageV33 {
    get(key: number): Promise<(v33.DEXInfo | undefined)>
    getAll(): Promise<v33.DEXInfo[]>
    getMany(keys: number[]): Promise<(v33.DEXInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v33.DEXInfo][]>
    getPairs(key: number): Promise<[k: number, v: v33.DEXInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v33.DEXInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v33.DEXInfo][]>
}

export interface DEXManagerDEXInfosStorageV42 {
    get(key: number): Promise<(v42.DEXInfo | undefined)>
    getAll(): Promise<v42.DEXInfo[]>
    getMany(keys: number[]): Promise<(v42.DEXInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.DEXInfo][]>
    getPairs(key: number): Promise<[k: number, v: v42.DEXInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.DEXInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.DEXInfo][]>
}

export interface DEXManagerDEXInfosStorageV44 {
    get(key: number): Promise<(v44.DEXInfo | undefined)>
    getAll(): Promise<v44.DEXInfo[]>
    getMany(keys: number[]): Promise<(v44.DEXInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v44.DEXInfo][]>
    getPairs(key: number): Promise<[k: number, v: v44.DEXInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v44.DEXInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v44.DEXInfo][]>
}

export class DemeterFarmingPlatformAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV33(): DemeterFarmingPlatformAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface DemeterFarmingPlatformAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class DemeterFarmingPlatformFeeAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'FeeAccount'
    }

    /**
     *  Account for fees
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for fees
     */
    get asV33(): DemeterFarmingPlatformFeeAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Account for fees
 */
export interface DemeterFarmingPlatformFeeAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export class DemeterFarmingPlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV43(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV43(): DemeterFarmingPlatformPalletStorageVersionStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface DemeterFarmingPlatformPalletStorageVersionStorageV43 {
    get(): Promise<v43.StorageVersion>
}

export class DemeterFarmingPlatformPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'Pools'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '15274a7269c57cb8c2e8de16c067a083bf2f6d6ef17e1ce9b8b9b146183ff39b'
    }

    get asV33(): DemeterFarmingPlatformPoolsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV35(): boolean {
        return this.getTypeHash() === 'a31267b0b50908278c78a2da1550774fe78f18e98028aca09a9fa6d36ca5aebd'
    }

    get asV35(): DemeterFarmingPlatformPoolsStorageV35 {
        assert(this.isV35)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '59b75bc810fb41ba0a96a9ec5206a5a523b89ac6911f197f356c477428eabb5a'
    }

    get asV42(): DemeterFarmingPlatformPoolsStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV43(): boolean {
        return this.getTypeHash() === '3322eef7d20cbfd46bf81f181224e3f02fd1041ab3f29f9f60b3b7b9221f4038'
    }

    get asV43(): DemeterFarmingPlatformPoolsStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

export interface DemeterFarmingPlatformPoolsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v33.PoolData[]>
    getAll(): Promise<v33.PoolData[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v33.PoolData[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.PoolData[]][]>
}

export interface DemeterFarmingPlatformPoolsStorageV35 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v35.PoolData[]>
    getAll(): Promise<v35.PoolData[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v35.PoolData[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v35.PoolData[]][]>
}

export interface DemeterFarmingPlatformPoolsStorageV42 {
    get(key1: v42.AssetId32, key2: v42.AssetId32): Promise<v42.PoolData[]>
    getAll(): Promise<v42.PoolData[][]>
    getMany(keys: [v42.AssetId32, v42.AssetId32][]): Promise<v42.PoolData[][]>
    getKeys(): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(): Promise<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
    getPairs(key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
    getPairs(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: v42.PoolData[]][]>
}

export interface DemeterFarmingPlatformPoolsStorageV43 {
    get(key1: v43.AssetId32, key2: v43.AssetId32): Promise<v43.PoolData[]>
    getAll(): Promise<v43.PoolData[][]>
    getMany(keys: [v43.AssetId32, v43.AssetId32][]): Promise<v43.PoolData[][]>
    getKeys(): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeys(key1: v43.AssetId32): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeys(key1: v43.AssetId32, key2: v43.AssetId32): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v43.AssetId32): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v43.AssetId32, key2: v43.AssetId32): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getPairs(): Promise<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
    getPairs(key1: v43.AssetId32): Promise<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
    getPairs(key1: v43.AssetId32, key2: v43.AssetId32): Promise<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v43.AssetId32): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v43.AssetId32, key2: v43.AssetId32): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: v43.PoolData[]][]>
}

export class DemeterFarmingPlatformTokenInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'TokenInfos'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '917a8c8b09f4cb4ea919dab0f8bcaf2c54080124321175dd45b93b764f4c52b4'
    }

    get asV33(): DemeterFarmingPlatformTokenInfosStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'c293db5a1f986c2c9303f85d25385bf1dab66f7f0513d0a14acf885790e9a53d'
    }

    get asV42(): DemeterFarmingPlatformTokenInfosStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface DemeterFarmingPlatformTokenInfosStorageV33 {
    get(key: Uint8Array): Promise<(v33.TokenInfo | undefined)>
    getAll(): Promise<v33.TokenInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v33.TokenInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.TokenInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.TokenInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.TokenInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.TokenInfo][]>
}

export interface DemeterFarmingPlatformTokenInfosStorageV42 {
    get(key: v42.AssetId32): Promise<(v42.TokenInfo | undefined)>
    getAll(): Promise<v42.TokenInfo[]>
    getMany(keys: v42.AssetId32[]): Promise<(v42.TokenInfo | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: v42.TokenInfo][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: v42.TokenInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: v42.TokenInfo][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: v42.TokenInfo][]>
}

export class DemeterFarmingPlatformUserInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'UserInfos'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '76abb907e444827f28a32ab6e15b029b0fb1e40550502f9c40474e71948791c2'
    }

    get asV33(): DemeterFarmingPlatformUserInfosStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV35(): boolean {
        return this.getTypeHash() === 'b0a5e4ffe20c1a32fa3bdf84403edae67d0f81721a689f5915fc280d5e4f3c61'
    }

    get asV35(): DemeterFarmingPlatformUserInfosStorageV35 {
        assert(this.isV35)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'c8097f7676fbb7e4001109f9007ebf88cff163720a3dcf26d469f5b5a511387c'
    }

    get asV42(): DemeterFarmingPlatformUserInfosStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV43(): boolean {
        return this.getTypeHash() === '1e0a771d7fcd1d3fd082883b3342ec55cf08b83b3739a9de033c04d65f17bb65'
    }

    get asV43(): DemeterFarmingPlatformUserInfosStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

export interface DemeterFarmingPlatformUserInfosStorageV33 {
    get(key: Uint8Array): Promise<v33.UserInfo[]>
    getAll(): Promise<v33.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v33.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.UserInfo[]][]>
}

export interface DemeterFarmingPlatformUserInfosStorageV35 {
    get(key: Uint8Array): Promise<v35.UserInfo[]>
    getAll(): Promise<v35.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v35.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v35.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v35.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v35.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v35.UserInfo[]][]>
}

export interface DemeterFarmingPlatformUserInfosStorageV42 {
    get(key: Uint8Array): Promise<v42.UserInfo[]>
    getAll(): Promise<v42.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v42.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.UserInfo[]][]>
}

export interface DemeterFarmingPlatformUserInfosStorageV43 {
    get(key: Uint8Array): Promise<v43.UserInfo[]>
    getAll(): Promise<v43.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v43.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.UserInfo[]][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV33(): DemocracyBlacklistStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV33 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV33(): DemocracyCancellationsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV33 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV33(): DemocracyDepositOfStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV33 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV33(): DemocracyLastTabledWasExternalStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV33 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV33(): DemocracyLocksStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyLocksStorageV33 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV33(): DemocracyLowestUnbakedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV33 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV33(): DemocracyNextExternalStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV52(): DemocracyNextExternalStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV33 {
    get(): Promise<([Uint8Array, v33.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV52 {
    get(): Promise<([v52.Bounded, v52.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV33(): DemocracyPreimagesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV42(): DemocracyPreimagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV33 {
    get(key: Uint8Array): Promise<(v33.PreimageStatus | undefined)>
    getAll(): Promise<v33.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v33.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV42 {
    get(key: Uint8Array): Promise<(v42.PreimageStatus | undefined)>
    getAll(): Promise<v42.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v42.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV33(): DemocracyPublicPropCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV33 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV33(): DemocracyPublicPropsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV52(): DemocracyPublicPropsStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV33 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV52 {
    get(): Promise<[number, v52.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV33(): DemocracyReferendumCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV33 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV33(): DemocracyReferendumInfoOfStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV42(): DemocracyReferendumInfoOfStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV52(): DemocracyReferendumInfoOfStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV33 {
    get(key: number): Promise<(v33.ReferendumInfo | undefined)>
    getAll(): Promise<v33.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v33.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v33.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v33.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v33.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v33.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV42 {
    get(key: number): Promise<(v42.ReferendumInfo | undefined)>
    getAll(): Promise<v42.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v42.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v42.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV52 {
    get(key: number): Promise<(v52.ReferendumInfo | undefined)>
    getAll(): Promise<v52.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v52.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v52.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v52.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v52.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v52.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV33(): DemocracyStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV42(): DemocracyStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV33 {
    get(): Promise<(v33.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV42 {
    get(): Promise<(v42.Type_549 | undefined)>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV33(): DemocracyVotingOfStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV42(): DemocracyVotingOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV33 {
    get(key: Uint8Array): Promise<v33.Voting>
    getAll(): Promise<v33.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v33.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Voting][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV42 {
    get(key: Uint8Array): Promise<v42.Voting>
    getAll(): Promise<v42.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v42.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Voting][]>
}

export class ERC20AppAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AppAddresses'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '94b675ea41072b9359087e5adccacf527ed4a9ed9a99f11dba5e13ac035ddf1d'
    }

    get asV52(): ERC20AppAppAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface ERC20AppAppAddressesStorageV52 {
    get(key1: bigint, key2: v52.Type_568): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v52.Type_568][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v52.Type_568][]>
    getKeys(key1: bigint): Promise<[bigint, v52.Type_568][]>
    getKeys(key1: bigint, key2: v52.Type_568): Promise<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v52.Type_568][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v52.Type_568): AsyncIterable<[bigint, v52.Type_568][]>
    getPairs(): Promise<[k: [bigint, v52.Type_568], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v52.Type_568], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v52.Type_568): Promise<[k: [bigint, v52.Type_568], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v52.Type_568], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v52.Type_568], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v52.Type_568): AsyncIterable<[k: [bigint, v52.Type_568], v: Uint8Array][]>
}

export class ERC20AppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '4653381b9f9b80b4e96c703f717cbad4e2b31422802d799e5521d5229ef6b117'
    }

    get asV52(): ERC20AppAssetKindsStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface ERC20AppAssetKindsStorageV52 {
    get(key1: bigint, key2: v52.AssetId32): Promise<(v52.Type_568 | undefined)>
    getAll(): Promise<v52.Type_568[]>
    getMany(keys: [bigint, v52.AssetId32][]): Promise<(v52.Type_568 | undefined)[]>
    getKeys(): Promise<[bigint, v52.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v52.AssetId32][]>
    getKeys(key1: bigint, key2: v52.AssetId32): Promise<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v52.AssetId32): AsyncIterable<[bigint, v52.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
    getPairs(key1: bigint, key2: v52.AssetId32): Promise<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v52.AssetId32): AsyncIterable<[k: [bigint, v52.AssetId32], v: v52.Type_568][]>
}

export class ERC20AppAssetsByAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetsByAddresses'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'cabae4a11d1a8928d6ce6db2352af2e5e57d7d29bb64c87a7a383de8bcd7284e'
    }

    get asV52(): ERC20AppAssetsByAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface ERC20AppAssetsByAddressesStorageV52 {
    get(key1: bigint, key2: Uint8Array): Promise<(v52.AssetId32 | undefined)>
    getAll(): Promise<v52.AssetId32[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v52.AssetId32 | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v52.AssetId32][]>
}

export class ERC20AppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV54(): boolean {
        return this.getTypeHash() === '19021d933553128a4a3550a3cd26d6bfe7c74b0a22bc5ca6bc9099781e369dda'
    }

    get asV54(): ERC20AppSidechainPrecisionStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface ERC20AppSidechainPrecisionStorageV54 {
    get(key1: bigint, key2: v54.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [bigint, v54.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[bigint, v54.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v54.AssetId32][]>
    getKeys(key1: bigint, key2: v54.AssetId32): Promise<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v54.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v54.AssetId32): AsyncIterable<[bigint, v54.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v54.AssetId32], v: number][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v54.AssetId32], v: number][]>
    getPairs(key1: bigint, key2: v54.AssetId32): Promise<[k: [bigint, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v54.AssetId32): AsyncIterable<[k: [bigint, v54.AssetId32], v: number][]>
}

export class ERC20AppTokenAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'TokenAddresses'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '9fef01747a54dcdcec1535e02949fcb28b01f8388694c4fc22fdc9be19173bc8'
    }

    get asV52(): ERC20AppTokenAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface ERC20AppTokenAddressesStorageV52 {
    get(key1: bigint, key2: v52.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v52.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v52.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v52.AssetId32][]>
    getKeys(key1: bigint, key2: v52.AssetId32): Promise<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v52.AssetId32): AsyncIterable<[bigint, v52.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v52.AssetId32): Promise<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v52.AssetId32): AsyncIterable<[k: [bigint, v52.AssetId32], v: Uint8Array][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV42(): ElectionProviderMultiPhaseCurrentPhaseStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV42 {
    get(): Promise<v42.Type_642>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV42(): ElectionProviderMultiPhaseDesiredTargetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV42 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV42(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV42 {
    get(): Promise<(v42.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV42(): ElectionProviderMultiPhaseQueuedSolutionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV42 {
    get(): Promise<(v42.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV42(): ElectionProviderMultiPhaseRoundStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV42 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '3f17ed71261965bef8416121d1476aed24762a50bcf247a57343826d7a119a46'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV42(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV52(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV42 {
    get(): Promise<[v42.ElectionScore, number][]>
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV52 {
    get(): Promise<[v52.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get asV42(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV42 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '860f23403a5b9592ac7098f4a1420d32719bc8612e4102bb2e54d1fa53040870'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV42(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV42 {
    get(key: number): Promise<(v42.SignedSubmission | undefined)>
    getAll(): Promise<v42.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v42.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v42.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV42(): ElectionProviderMultiPhaseSnapshotStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV42 {
    get(): Promise<(v42.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV42(): ElectionProviderMultiPhaseSnapshotMetadataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV42 {
    get(): Promise<(v42.SolutionOrSnapshotSize | undefined)>
}

export class ElectionsPhragmenCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV42(): ElectionsPhragmenCandidatesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsPhragmenCandidatesStorageV42 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class ElectionsPhragmenElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV42(): ElectionsPhragmenElectionRoundsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsPhragmenElectionRoundsStorageV42 {
    get(): Promise<number>
}

export class ElectionsPhragmenMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV42(): ElectionsPhragmenMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsPhragmenMembersStorageV42 {
    get(): Promise<v42.SeatHolder[]>
}

export class ElectionsPhragmenRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV42(): ElectionsPhragmenRunnersUpStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsPhragmenRunnersUpStorageV42 {
    get(): Promise<v42.SeatHolder[]>
}

export class ElectionsPhragmenVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV42(): ElectionsPhragmenVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsPhragmenVotingStorageV42 {
    get(key: Uint8Array): Promise<v42.Voter>
    getAll(): Promise<v42.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v42.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Voter][]>
}

export class EthAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '63330d2834c125f81d8cec964f038879d62f4288c40e3c0470554f7c835da708'
    }

    get asV52(): EthAppAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }

    get isV54(): boolean {
        return this.getTypeHash() === 'f6e63f3fc6a0b70e43f7767d90e82b949b2eb97bf0c14069fb5b49d1210133e5'
    }

    get asV54(): EthAppAddressesStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface EthAppAddressesStorageV52 {
    get(key: bigint): Promise<([Uint8Array, v52.AssetId32] | undefined)>
    getAll(): Promise<[Uint8Array, v52.AssetId32][]>
    getMany(keys: bigint[]): Promise<([Uint8Array, v52.AssetId32] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [Uint8Array, v52.AssetId32]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [Uint8Array, v52.AssetId32]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [Uint8Array, v52.AssetId32]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [Uint8Array, v52.AssetId32]][]>
}

export interface EthAppAddressesStorageV54 {
    get(key: bigint): Promise<([Uint8Array, v54.AssetId32, number] | undefined)>
    getAll(): Promise<[Uint8Array, v54.AssetId32, number][]>
    getMany(keys: bigint[]): Promise<([Uint8Array, v54.AssetId32, number] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [Uint8Array, v54.AssetId32, number]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [Uint8Array, v54.AssetId32, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [Uint8Array, v54.AssetId32, number]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [Uint8Array, v54.AssetId32, number]][]>
}

export class EthBridgeAccountRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'AccountRequests'
    }

    /**
     *  Requests made by an account.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '80e7ebcfba4ea3d2339b3fa00a88c2be174158840f5c46a9fccaf24be1a46f4a'
    }

    /**
     *  Requests made by an account.
     */
    get asV33(): EthBridgeAccountRequestsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Requests made by an account.
 */
export interface EthBridgeAccountRequestsStorageV33 {
    get(key: Uint8Array): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: Uint8Array[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array][]][]>
}

export class EthBridgeAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Thischain authority account.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Thischain authority account.
     */
    get asV33(): EthBridgeAuthorityAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Thischain authority account.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Thischain authority account.
     */
    get asV42(): EthBridgeAuthorityAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Thischain authority account.
 */
export interface EthBridgeAuthorityAccountStorageV33 {
    get(): Promise<Uint8Array>
}

/**
 *  Thischain authority account.
 */
export interface EthBridgeAuthorityAccountStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class EthBridgeBridgeAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeAccount'
    }

    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    get asV33(): EthBridgeBridgeAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface EthBridgeBridgeAccountStorageV33 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeBridgeContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeContractAddress'
    }

    /**
     *  Smart-contract address on Sidechain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '355713e400144f415b9b61e2254a9efeb50395baba05604bf6adaa990a4d3b45'
    }

    /**
     *  Smart-contract address on Sidechain.
     */
    get asV33(): EthBridgeBridgeContractAddressStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface EthBridgeBridgeContractAddressStorageV33 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeBridgeSignatureVersionsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeSignatureVersions'
    }

    get isV38(): boolean {
        return this.getTypeHash() === '3031aeed3f8d041e6b91e771fbaeafea93f01e45f18aed4ffe6b3bf95a261f51'
    }

    get asV38(): EthBridgeBridgeSignatureVersionsStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

export interface EthBridgeBridgeSignatureVersionsStorageV38 {
    get(key: number): Promise<v38.BridgeSignatureVersion>
    getAll(): Promise<v38.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<v38.BridgeSignatureVersion[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v38.BridgeSignatureVersion][]>
}

export class EthBridgeBridgeStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeStatuses'
    }

    /**
     *  Bridge status.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2fe91d4188f8af4130b30883066f5e7b01f1913f81e8e71d1b7b49c61a3d5d5f'
    }

    /**
     *  Bridge status.
     */
    get asV33(): EthBridgeBridgeStatusesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Bridge status.
 */
export interface EthBridgeBridgeStatusesStorageV33 {
    get(key: number): Promise<(v33.BridgeStatus | undefined)>
    getAll(): Promise<v33.BridgeStatus[]>
    getMany(keys: number[]): Promise<(v33.BridgeStatus | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v33.BridgeStatus][]>
    getPairs(key: number): Promise<[k: number, v: v33.BridgeStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v33.BridgeStatus][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v33.BridgeStatus][]>
}

export class EthBridgeLoadToIncomingRequestHashStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'LoadToIncomingRequestHash'
    }

    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '12f7a945d4fbc0b952f64f333ece0fc731504f19e339f04cd8175df719be78f8'
    }

    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    get asV33(): EthBridgeLoadToIncomingRequestHashStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface EthBridgeLoadToIncomingRequestHashStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgeMigratingRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'MigratingRequests'
    }

    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    get asV33(): EthBridgeMigratingRequestsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface EthBridgeMigratingRequestsStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class EthBridgeNextNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'NextNetworkId'
    }

    /**
     *  Next Network ID counter.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next Network ID counter.
     */
    get asV33(): EthBridgeNextNetworkIdStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Next Network ID counter.
 */
export interface EthBridgeNextNetworkIdStorageV33 {
    get(): Promise<number>
}

export class EthBridgePeerAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PeerAccountId'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a0e045cd24a82b0cc8a7d77372f645216bac38156cbbe630e821f9ba42121583'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get asV33(): EthBridgePeerAccountIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Peer account ID on Thischain.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '2fa4eaf8f8f4c5fa25ec1f74077ec31c202b5623aa84fb7abc3db119eac5619d'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get asV42(): EthBridgePeerAccountIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Peer account ID on Thischain.
 */
export interface EthBridgePeerAccountIdStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  Peer account ID on Thischain.
 */
export interface EthBridgePeerAccountIdStorageV42 {
    get(key1: number, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgePeerAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PeerAddress'
    }

    /**
     *  Peer address on Sidechain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '9732e896cb0dbf7bf56d6dfde250c60ff9f4f69c74ea7ce7a9e834041f84f80c'
    }

    /**
     *  Peer address on Sidechain.
     */
    get asV33(): EthBridgePeerAddressStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Peer address on Sidechain.
 */
export interface EthBridgePeerAddressStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgePeersStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'Peers'
    }

    /**
     *  Network peers set.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Network peers set.
     */
    get asV33(): EthBridgePeersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Network peers set.
 */
export interface EthBridgePeersStorageV33 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class EthBridgePendingBridgeSignatureVersionsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingBridgeSignatureVersions'
    }

    get isV38(): boolean {
        return this.getTypeHash() === '4c3a59cc57b46b097da713499cb977af06a9d415a78675aeb9cc7a01064c091e'
    }

    get asV38(): EthBridgePendingBridgeSignatureVersionsStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

export interface EthBridgePendingBridgeSignatureVersionsStorageV38 {
    get(key: number): Promise<(v38.BridgeSignatureVersion | undefined)>
    getAll(): Promise<v38.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<(v38.BridgeSignatureVersion | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v38.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v38.BridgeSignatureVersion][]>
}

export class EthBridgePendingEthPeersSyncStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingEthPeersSync'
    }

    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8276423868ca2c9f75a371a21955637dc44064d5600123273f17ac3d301b6ce3'
    }

    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    get asV33(): EthBridgePendingEthPeersSyncStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface EthBridgePendingEthPeersSyncStorageV33 {
    get(): Promise<v33.EthPeersSync>
}

export class EthBridgePendingPeerStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingPeer'
    }

    /**
     *  Network pending (being added/removed) peer.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Network pending (being added/removed) peer.
     */
    get asV33(): EthBridgePendingPeerStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface EthBridgePendingPeerStorageV33 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeRegisteredAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredAsset'
    }

    /**
     *  Registered asset kind.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2961d63e897fde0617f6e30c7acd84df1e1fb8769aa05235417392b9ac0fa608'
    }

    /**
     *  Registered asset kind.
     */
    get asV33(): EthBridgeRegisteredAssetStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Registered asset kind.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'b3083eb0cf9af664a98c61f4d238f1459c0f39d74d6d6f09c8896e3be0a8ff80'
    }

    /**
     *  Registered asset kind.
     */
    get asV42(): EthBridgeRegisteredAssetStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Registered asset kind.
 */
export interface EthBridgeRegisteredAssetStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(v33.AssetKind | undefined)>
    getAll(): Promise<v33.AssetKind[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v33.AssetKind | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.AssetKind][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.AssetKind][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.AssetKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.AssetKind][]>
}

/**
 *  Registered asset kind.
 */
export interface EthBridgeRegisteredAssetStorageV42 {
    get(key1: number, key2: v42.AssetId32): Promise<(v42.AssetKind | undefined)>
    getAll(): Promise<v42.AssetKind[]>
    getMany(keys: [number, v42.AssetId32][]): Promise<(v42.AssetKind | undefined)[]>
    getKeys(): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(): Promise<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
    getPairs(key1: number): Promise<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
    getPairs(key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: v42.AssetKind][]>
}

export class EthBridgeRegisteredSidechainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredSidechainAsset'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2fa4eaf8f8f4c5fa25ec1f74077ec31c202b5623aa84fb7abc3db119eac5619d'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get asV33(): EthBridgeRegisteredSidechainAssetStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '31f3ab89a8056378ebff3e30eb6d9f7bb656e7335081ff3a2abc581a5c720828'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get asV42(): EthBridgeRegisteredSidechainAssetStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface EthBridgeRegisteredSidechainAssetStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface EthBridgeRegisteredSidechainAssetStorageV42 {
    get(key1: number, key2: Uint8Array): Promise<(v42.AssetId32 | undefined)>
    getAll(): Promise<v42.AssetId32[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v42.AssetId32 | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v42.AssetId32][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v42.AssetId32][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v42.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v42.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v42.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v42.AssetId32][]>
}

export class EthBridgeRegisteredSidechainTokenStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredSidechainToken'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ed5442e144d996e8c26b3701ec694f89f037cee45e31bdb91686f112f2bbd00d'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get asV33(): EthBridgeRegisteredSidechainTokenStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '91a1aa7ee9b00300cbd9b0251a207d8d62401c39f2871352e8c1dee325efa6eb'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get asV42(): EthBridgeRegisteredSidechainTokenStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Registered asset address on Sidechain.
 */
export interface EthBridgeRegisteredSidechainTokenStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  Registered asset address on Sidechain.
 */
export interface EthBridgeRegisteredSidechainTokenStorageV42 {
    get(key1: number, key2: v42.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, v42.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(): Promise<[k: [number, v42.AssetId32], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, v42.AssetId32], v: Uint8Array][]>
    getPairs(key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: Uint8Array][]>
}

export class EthBridgeRequestApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestApprovals'
    }

    /**
     *  Outgoing requests approvals.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f9a2dfdb9d8457b2d4c32bd51f878babe7e134c16a62fb8a76cbe59c06a71788'
    }

    /**
     *  Outgoing requests approvals.
     */
    get asV33(): EthBridgeRequestApprovalsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Outgoing requests approvals.
 */
export interface EthBridgeRequestApprovalsStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<v33.SignatureParams[]>
    getAll(): Promise<v33.SignatureParams[][]>
    getMany(keys: [number, Uint8Array][]): Promise<v33.SignatureParams[][]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.SignatureParams[]][]>
}

export class EthBridgeRequestStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestStatuses'
    }

    /**
     *  Requests statuses.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3ae29ce94913d19c6763650b3d13bc0afd22394816b6380c15fc93b6fef8cbfa'
    }

    /**
     *  Requests statuses.
     */
    get asV33(): EthBridgeRequestStatusesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Requests statuses.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '2118667cfd396b5ba25317955e438cf7e7da2f8ab9345c836b7e1fedb9a56dce'
    }

    /**
     *  Requests statuses.
     */
    get asV42(): EthBridgeRequestStatusesStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Requests statuses.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '783467a44eeb9862d3371681e516ce5dcf85669490ea9de558a35bb294de220d'
    }

    /**
     *  Requests statuses.
     */
    get asV52(): EthBridgeRequestStatusesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Requests statuses.
 */
export interface EthBridgeRequestStatusesStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(v33.RequestStatus | undefined)>
    getAll(): Promise<v33.RequestStatus[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v33.RequestStatus | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.RequestStatus][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.RequestStatus][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.RequestStatus][]>
}

/**
 *  Requests statuses.
 */
export interface EthBridgeRequestStatusesStorageV42 {
    get(key1: number, key2: Uint8Array): Promise<(v42.RequestStatus | undefined)>
    getAll(): Promise<v42.RequestStatus[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v42.RequestStatus | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v42.RequestStatus][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v42.RequestStatus][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v42.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v42.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v42.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v42.RequestStatus][]>
}

/**
 *  Requests statuses.
 */
export interface EthBridgeRequestStatusesStorageV52 {
    get(key1: number, key2: Uint8Array): Promise<(v52.RequestStatus | undefined)>
    getAll(): Promise<v52.RequestStatus[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v52.RequestStatus | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v52.RequestStatus][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v52.RequestStatus][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v52.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v52.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v52.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v52.RequestStatus][]>
}

export class EthBridgeRequestSubmissionHeightStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestSubmissionHeight'
    }

    /**
     *  Requests submission height map (on substrate).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  Requests submission height map (on substrate).
     */
    get asV33(): EthBridgeRequestSubmissionHeightStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Requests submission height map (on substrate).
 */
export interface EthBridgeRequestSubmissionHeightStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class EthBridgeRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'Requests'
    }

    /**
     *  Registered requests.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '753d5f1b088eef41790cfe88074da4f280301435081e33a0e3199e8a70ade1de'
    }

    /**
     *  Registered requests.
     */
    get asV33(): EthBridgeRequestsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Registered requests.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd8a5e8971bc06bf0f053bf5f14332d3db494ce23470afc8474c34b146e780e03'
    }

    /**
     *  Registered requests.
     */
    get asV42(): EthBridgeRequestsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Registered requests.
 */
export interface EthBridgeRequestsStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(v33.OffchainRequest | undefined)>
    getAll(): Promise<v33.OffchainRequest[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v33.OffchainRequest | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.OffchainRequest][]>
}

/**
 *  Registered requests.
 */
export interface EthBridgeRequestsStorageV42 {
    get(key1: number, key2: Uint8Array): Promise<(v42.OffchainRequest | undefined)>
    getAll(): Promise<v42.OffchainRequest[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v42.OffchainRequest | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v42.OffchainRequest][]>
}

export class EthBridgeRequestsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestsQueue'
    }

    /**
     *  Registered requests queue handled by off-chain workers.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Registered requests queue handled by off-chain workers.
     */
    get asV33(): EthBridgeRequestsQueueStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface EthBridgeRequestsQueueStorageV33 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class EthBridgeSidechainAssetPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'SidechainAssetPrecision'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '9b1313f114a6697e1755c75a70b67cabd1ad05aeae4e19baff00b5bf24ea6e0c'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get asV33(): EthBridgeSidechainAssetPrecisionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f908ea4fe7e24f099213f31b98f416392e225e6ec493179e3447d5a4809fbb34'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get asV42(): EthBridgeSidechainAssetPrecisionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface EthBridgeSidechainAssetPrecisionStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface EthBridgeSidechainAssetPrecisionStorageV42 {
    get(key1: number, key2: v42.AssetId32): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, v42.AssetId32][]): Promise<number[]>
    getKeys(): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number): Promise<[number, v42.AssetId32][]>
    getKeys(key1: number, key2: v42.AssetId32): Promise<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[number, v42.AssetId32][]>
    getPairs(): Promise<[k: [number, v42.AssetId32], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v42.AssetId32], v: number][]>
    getPairs(key1: number, key2: v42.AssetId32): Promise<[k: [number, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.AssetId32): AsyncIterable<[k: [number, v42.AssetId32], v: number][]>
}

export class EthBridgeValMasterContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'ValMasterContractAddress'
    }

    /**
     *  Sora VAL master contract address.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora VAL master contract address.
     */
    get asV33(): EthBridgeValMasterContractAddressStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Sora VAL master contract address.
 */
export interface EthBridgeValMasterContractAddressStorageV33 {
    get(): Promise<Uint8Array>
}

export class EthBridgeXorMasterContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'XorMasterContractAddress'
    }

    /**
     *  Sora XOR master contract address.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora XOR master contract address.
     */
    get asV33(): EthBridgeXorMasterContractAddressStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Sora XOR master contract address.
 */
export interface EthBridgeXorMasterContractAddressStorageV33 {
    get(): Promise<Uint8Array>
}

export class EthereumLightClientBestBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'BestBlock'
    }

    /**
     *  Best known block.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '71086e2f350a221b3d06b04566a2c978fda99a376c1ac5e6ac9daa10891c4856'
    }

    /**
     *  Best known block.
     */
    get asV52(): EthereumLightClientBestBlockStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Best known block.
 */
export interface EthereumLightClientBestBlockStorageV52 {
    get(key: bigint): Promise<([v52.HeaderId, bigint] | undefined)>
    getAll(): Promise<[v52.HeaderId, bigint][]>
    getMany(keys: bigint[]): Promise<([v52.HeaderId, bigint] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [v52.HeaderId, bigint]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [v52.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [v52.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [v52.HeaderId, bigint]][]>
}

export class EthereumLightClientBlocksToPruneStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'BlocksToPrune'
    }

    /**
     *  Range of blocks that we want to prune.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '4df06536a31d3a47e8cd804fe51684f73bf4009af886d2b85820fd39591caf09'
    }

    /**
     *  Range of blocks that we want to prune.
     */
    get asV52(): EthereumLightClientBlocksToPruneStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Range of blocks that we want to prune.
 */
export interface EthereumLightClientBlocksToPruneStorageV52 {
    get(key: bigint): Promise<(v52.PruningRange | undefined)>
    getAll(): Promise<v52.PruningRange[]>
    getMany(keys: bigint[]): Promise<(v52.PruningRange | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.PruningRange][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.PruningRange][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.PruningRange][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.PruningRange][]>
}

export class EthereumLightClientFinalizedBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'FinalizedBlock'
    }

    /**
     *  Best finalized block.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'bb0dddb9c476c5caf5bbcebd3d6a7b796b3121332bb0c1b59b2a2bcac1d59c15'
    }

    /**
     *  Best finalized block.
     */
    get asV52(): EthereumLightClientFinalizedBlockStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Best finalized block.
 */
export interface EthereumLightClientFinalizedBlockStorageV52 {
    get(key: bigint): Promise<(v52.HeaderId | undefined)>
    getAll(): Promise<v52.HeaderId[]>
    getMany(keys: bigint[]): Promise<(v52.HeaderId | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.HeaderId][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.HeaderId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.HeaderId][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.HeaderId][]>
}

export class EthereumLightClientHeadersStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'Headers'
    }

    /**
     *  Map of imported headers by hash.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '13f0432c3bffd9dc7139ddb892692a3b755984ec4ca08e01d457f4db48113f52'
    }

    /**
     *  Map of imported headers by hash.
     */
    get asV52(): EthereumLightClientHeadersStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Map of imported headers by hash.
 */
export interface EthereumLightClientHeadersStorageV52 {
    get(key1: bigint, key2: Uint8Array): Promise<(v52.StoredHeader | undefined)>
    getAll(): Promise<v52.StoredHeader[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v52.StoredHeader | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v52.StoredHeader][]>
}

export class EthereumLightClientHeadersByNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'HeadersByNumber'
    }

    /**
     *  Map of imported header hashes by number.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '06ae4db4936a5d4ab8dda2a1e8aa81de5b77c1f6148a0d99d2884ca621108b27'
    }

    /**
     *  Map of imported header hashes by number.
     */
    get asV52(): EthereumLightClientHeadersByNumberStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Map of imported header hashes by number.
 */
export interface EthereumLightClientHeadersByNumberStorageV52 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
}

export class EthereumLightClientNetworkConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'NetworkConfig'
    }

    /**
     *  Network config
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'de7f3bc1016bbc3db50e6e8f91c6d240565ef935a91fe5bcfa471d6c370fafec'
    }

    /**
     *  Network config
     */
    get asV52(): EthereumLightClientNetworkConfigStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Network config
 */
export interface EthereumLightClientNetworkConfigStorageV52 {
    get(key: bigint): Promise<(v52.NetworkConfig | undefined)>
    getAll(): Promise<v52.NetworkConfig[]>
    getMany(keys: bigint[]): Promise<(v52.NetworkConfig | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v52.NetworkConfig][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v52.NetworkConfig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v52.NetworkConfig][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v52.NetworkConfig][]>
}

export class EvmBridgeProxySendersStorage extends StorageBase {
    protected getPrefix() {
        return 'EvmBridgeProxy'
    }

    protected getName() {
        return 'Senders'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '30e39bce9d4f70086c4e4a34f283c6891a0ba35548c4fb2088199df3e23a13e8'
    }

    get asV52(): EvmBridgeProxySendersStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface EvmBridgeProxySendersStorageV52 {
    get(key1: v52.GenericNetworkId, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [v52.GenericNetworkId, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[v52.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v52.GenericNetworkId): Promise<[v52.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v52.GenericNetworkId, key2: Uint8Array): Promise<[v52.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v52.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v52.GenericNetworkId): AsyncIterable<[v52.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v52.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v52.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v52.GenericNetworkId): Promise<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v52.GenericNetworkId, key2: Uint8Array): Promise<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v52.GenericNetworkId): AsyncIterable<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v52.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v52.GenericNetworkId, Uint8Array], v: Uint8Array][]>
}

export class EvmBridgeProxyTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'EvmBridgeProxy'
    }

    protected getName() {
        return 'Transactions'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'fd6bfbf0361290939f6fd95b01d60358c7563901df9b5f01f7bdc573ee42c1c9'
    }

    get asV52(): EvmBridgeProxyTransactionsStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface EvmBridgeProxyTransactionsStorageV52 {
    get(key1: Uint8Array, key2: [v52.GenericNetworkId, Uint8Array]): Promise<(v52.BridgeRequest | undefined)>
    getAll(): Promise<v52.BridgeRequest[]>
    getMany(keys: [Uint8Array, [v52.GenericNetworkId, Uint8Array]][]): Promise<(v52.BridgeRequest | undefined)[]>
    getKeys(): Promise<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getKeys(key1: Uint8Array, key2: [v52.GenericNetworkId, Uint8Array]): Promise<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: [v52.GenericNetworkId, Uint8Array]): AsyncIterable<[Uint8Array, [v52.GenericNetworkId, Uint8Array]][]>
    getPairs(): Promise<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
    getPairs(key1: Uint8Array, key2: [v52.GenericNetworkId, Uint8Array]): Promise<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: [v52.GenericNetworkId, Uint8Array]): AsyncIterable<[k: [Uint8Array, [v52.GenericNetworkId, Uint8Array]], v: v52.BridgeRequest][]>
}

export class FarmingPoolFarmersStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'PoolFarmers'
    }

    /**
     *  Farmers of the pool. Pool => Farmers
     */
    get isV33(): boolean {
        return this.getTypeHash() === '249c9c4291c29f152c2de37c4b3fdd1ab1e61fd8e7c808fd84f54736f16ecc92'
    }

    /**
     *  Farmers of the pool. Pool => Farmers
     */
    get asV33(): FarmingPoolFarmersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface FarmingPoolFarmersStorageV33 {
    get(key: Uint8Array): Promise<v33.PoolFarmer[]>
    getAll(): Promise<v33.PoolFarmer[][]>
    getMany(keys: Uint8Array[]): Promise<v33.PoolFarmer[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.PoolFarmer[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.PoolFarmer[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.PoolFarmer[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.PoolFarmer[]][]>
}

export class FarmingPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    get asV33(): FarmingPoolsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface FarmingPoolsStorageV33 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV42(): GrandpaCurrentSetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV42 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV42(): GrandpaNextForcedStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV42 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV42(): GrandpaPendingChangeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV42 {
    get(): Promise<(v42.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV42(): GrandpaSetIdSessionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV42 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV42(): GrandpaStalledStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV42 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV42(): GrandpaStateStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV42 {
    get(): Promise<v42.StoredState>
}

export class GrandpaFinalityCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV33(): GrandpaFinalityCurrentSetIdStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaFinalityCurrentSetIdStorageV33 {
    get(): Promise<bigint>
}

export class GrandpaFinalityNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV33(): GrandpaFinalityNextForcedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaFinalityNextForcedStorageV33 {
    get(): Promise<(number | undefined)>
}

export class GrandpaFinalityPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV33(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV33(): GrandpaFinalityPendingChangeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaFinalityPendingChangeStorageV33 {
    get(): Promise<(v33.StoredPendingChange | undefined)>
}

export class GrandpaFinalitySetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV33(): GrandpaFinalitySetIdSessionStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaFinalitySetIdSessionStorageV33 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaFinalityStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV33(): GrandpaFinalityStalledStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaFinalityStalledStorageV33 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaFinalityStateStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV33(): GrandpaFinalityStateStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaFinalityStateStorageV33 {
    get(): Promise<v33.StoredState>
}

export class HermesGovernancePlatformAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    get isV47(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    get asV47(): HermesGovernancePlatformAuthorityAccountStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface HermesGovernancePlatformAuthorityAccountStorageV47 {
    get(): Promise<Uint8Array>
}

export class HermesGovernancePlatformHermesPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'HermesPollData'
    }

    get isV47(): boolean {
        return this.getTypeHash() === '70900c5a70fc6ec4845a7580a07cc9e8ca70495ebaaa6eb93fd60efe3b30972a'
    }

    get asV47(): HermesGovernancePlatformHermesPollDataStorageV47 {
        assert(this.isV47)
        return this as any
    }

    get isV55(): boolean {
        return this.getTypeHash() === '4a73927344032df6712a2911a1487647f31bc63f2577fc7d39388bfb0f0308ea'
    }

    get asV55(): HermesGovernancePlatformHermesPollDataStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

export interface HermesGovernancePlatformHermesPollDataStorageV47 {
    get(key: Uint8Array): Promise<(v47.HermesPollInfo | undefined)>
    getAll(): Promise<v47.HermesPollInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v47.HermesPollInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47.HermesPollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47.HermesPollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47.HermesPollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47.HermesPollInfo][]>
}

export interface HermesGovernancePlatformHermesPollDataStorageV55 {
    get(key: Uint8Array): Promise<(v55.HermesPollInfo | undefined)>
    getAll(): Promise<v55.HermesPollInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v55.HermesPollInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.HermesPollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.HermesPollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.HermesPollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.HermesPollInfo][]>
}

export class HermesGovernancePlatformHermesVotingsStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'HermesVotings'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'c0dcc97c5ee2455ac4cd07d8b036305a497ee773d248805439cda25a550b2100'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV47(): HermesGovernancePlatformHermesVotingsStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'e8c421f187831137f6701c59673332ca218f18607faf33b1a48848a34441556b'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV55(): HermesGovernancePlatformHermesVotingsStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesGovernancePlatformHermesVotingsStorageV47 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v47.HermesVotingInfo | undefined)>
    getAll(): Promise<v47.HermesVotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v47.HermesVotingInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v47.HermesVotingInfo][]>
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesGovernancePlatformHermesVotingsStorageV55 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v55.HermesVotingInfo | undefined)>
    getAll(): Promise<v55.HermesVotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v55.HermesVotingInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.HermesVotingInfo][]>
}

export class HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesAmountForCreatingPoll'
    }

    get isV47(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV47(): HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV47 {
    get(): Promise<bigint>
}

export class HermesGovernancePlatformMinimumHermesVotingAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesVotingAmount'
    }

    get isV47(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV47(): HermesGovernancePlatformMinimumHermesVotingAmountStorageV47 {
        assert(this.isV47)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesVotingAmountStorageV47 {
    get(): Promise<bigint>
}

export class HermesGovernancePlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV55(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV55(): HermesGovernancePlatformPalletStorageVersionStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface HermesGovernancePlatformPalletStorageVersionStorageV55 {
    get(): Promise<v55.StorageVersion>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV33(): IdentityIdentityOfStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV33 {
    get(key: Uint8Array): Promise<(v33.Registration | undefined)>
    getAll(): Promise<v33.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV33(): IdentityRegistrarsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV33 {
    get(): Promise<(v33.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV33(): IdentitySubsOfStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV33 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV33(): IdentitySuperOfStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV33 {
    get(key: Uint8Array): Promise<([Uint8Array, v33.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v33.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v33.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v33.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v33.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v33.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v33.Data]][]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get asV33(): ImOnlineAuthoredBlocksStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get asV33(): ImOnlineHeartbeatAfterStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface ImOnlineHeartbeatAfterStorageV33 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV33(): ImOnlineKeysStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '682157dad304389ac6525dcc32f225e326c71b23b36940fe6c6b0ba3c53ac61f'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    get asV33(): ImOnlineReceivedHeartbeatsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV42(): ImOnlineReceivedHeartbeatsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `AuthIndex` to
 *  `offchain::OpaqueNetworkState`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV33 {
    get(key1: number, key2: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV42 {
    get(key1: number, key2: number): Promise<([number, v42.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v42.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v42.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v42.BoundedOpaqueNetworkState]][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV33(): Instance1CollectiveMembersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV33(): Instance1CollectivePrimeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance1CollectivePrimeStorageV33 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV33(): Instance1CollectiveProposalCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV33 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8d0ab3928d7c786cb882140269399b7c3605b5653d291ae9e6837f5bf32f8b58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV33(): Instance1CollectiveProposalOfStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV35(): boolean {
        return this.getTypeHash() === 'b9208b962391020ab5def10c2c386026528af839723ba5b0913791a2df6d15bf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV35(): Instance1CollectiveProposalOfStorageV35 {
        assert(this.isV35)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV37(): boolean {
        return this.getTypeHash() === '56322866f1a867751475b11869779e052fb2391146b00baa8e188f6b858a58dc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV37(): Instance1CollectiveProposalOfStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'f1b61f3cbf1093fbc682b6a3861429de213948d0712f4174779fd21ca527e83e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): Instance1CollectiveProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV33 {
    get(key: Uint8Array): Promise<(v33.Proposal | undefined)>
    getAll(): Promise<v33.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV35 {
    get(key: Uint8Array): Promise<(v35.Proposal | undefined)>
    getAll(): Promise<v35.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v35.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v35.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v35.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v35.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v35.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV37 {
    get(key: Uint8Array): Promise<(v37.Proposal | undefined)>
    getAll(): Promise<v37.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v37.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v37.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v37.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v37.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v37.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Proposal | undefined)>
    getAll(): Promise<v38.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Proposal][]>
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV33(): Instance1CollectiveProposalsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance1CollectiveProposalsStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV33(): Instance1CollectiveVotingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV33 {
    get(key: Uint8Array): Promise<(v33.Votes | undefined)>
    getAll(): Promise<v33.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Votes][]>
}

export class Instance1MembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV33(): Instance1MembershipMembersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface Instance1MembershipMembersStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class Instance1MembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV33(): Instance1MembershipPrimeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface Instance1MembershipPrimeStorageV33 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV33(): Instance2CollectiveMembersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance2CollectiveMembersStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV33(): Instance2CollectivePrimeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance2CollectivePrimeStorageV33 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV33(): Instance2CollectiveProposalCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance2CollectiveProposalCountStorageV33 {
    get(): Promise<number>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8d0ab3928d7c786cb882140269399b7c3605b5653d291ae9e6837f5bf32f8b58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV33(): Instance2CollectiveProposalOfStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV35(): boolean {
        return this.getTypeHash() === 'b9208b962391020ab5def10c2c386026528af839723ba5b0913791a2df6d15bf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV35(): Instance2CollectiveProposalOfStorageV35 {
        assert(this.isV35)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV37(): boolean {
        return this.getTypeHash() === '56322866f1a867751475b11869779e052fb2391146b00baa8e188f6b858a58dc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV37(): Instance2CollectiveProposalOfStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'f1b61f3cbf1093fbc682b6a3861429de213948d0712f4174779fd21ca527e83e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): Instance2CollectiveProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV33 {
    get(key: Uint8Array): Promise<(v33.Proposal | undefined)>
    getAll(): Promise<v33.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV35 {
    get(key: Uint8Array): Promise<(v35.Proposal | undefined)>
    getAll(): Promise<v35.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v35.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v35.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v35.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v35.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v35.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV37 {
    get(key: Uint8Array): Promise<(v37.Proposal | undefined)>
    getAll(): Promise<v37.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v37.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v37.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v37.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v37.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v37.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Proposal | undefined)>
    getAll(): Promise<v38.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Proposal][]>
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV33(): Instance2CollectiveProposalsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance2CollectiveProposalsStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV33(): Instance2CollectiveVotingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV33 {
    get(key: Uint8Array): Promise<(v33.Votes | undefined)>
    getAll(): Promise<v33.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Votes][]>
}

export class IrohaMigrationAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Account'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV33(): IrohaMigrationAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV42(): IrohaMigrationAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationAccountStorageV33 {
    get(): Promise<Uint8Array>
}

export interface IrohaMigrationAccountStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class IrohaMigrationBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Balances'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '3b8d5c59fcaaf6c8a84dc7547784c7c18dc660f1d788ada25e3de1be51c7222e'
    }

    get asV33(): IrohaMigrationBalancesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '3348da89bdf5466014a306124750332c00db1e5604dcf237df0e249bc59342e3'
    }

    get asV42(): IrohaMigrationBalancesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationBalancesStorageV33 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export interface IrohaMigrationBalancesStorageV42 {
    get(key: string): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: string[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: bigint][]>
    getPairs(key: string): Promise<[k: string, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: bigint][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: bigint][]>
}

export class IrohaMigrationMigratedAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'MigratedAccounts'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '976c90b9f454941bc77c5b334d295eca49a11f76bd8a43cbec4fe717d42a3c08'
    }

    get asV33(): IrohaMigrationMigratedAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'dae54a6ba4e3c01cfb611244e5949762c53e2ea975eca1baeaa51c26f9896c26'
    }

    get asV42(): IrohaMigrationMigratedAccountsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationMigratedAccountsStorageV33 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface IrohaMigrationMigratedAccountsStorageV42 {
    get(key: string): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: string[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: Uint8Array][]>
    getPairs(key: string): Promise<[k: string, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: Uint8Array][]>
}

export class IrohaMigrationPendingMultiSigAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PendingMultiSigAccounts'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '03e63d3cd697fcc63a922fcb1871f3bdf3481818f90048b8b71b53970786bb6a'
    }

    get asV33(): IrohaMigrationPendingMultiSigAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '1fe0318a0c07b45c66ee761568acfca2a7719a33e793e4890223d636c6b39091'
    }

    get asV42(): IrohaMigrationPendingMultiSigAccountsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationPendingMultiSigAccountsStorageV33 {
    get(key: Uint8Array): Promise<v33.PendingMultisigAccount>
    getAll(): Promise<v33.PendingMultisigAccount[]>
    getMany(keys: Uint8Array[]): Promise<v33.PendingMultisigAccount[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.PendingMultisigAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.PendingMultisigAccount][]>
}

export interface IrohaMigrationPendingMultiSigAccountsStorageV42 {
    get(key: string): Promise<v42.PendingMultisigAccount>
    getAll(): Promise<v42.PendingMultisigAccount[]>
    getMany(keys: string[]): Promise<v42.PendingMultisigAccount[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: v42.PendingMultisigAccount][]>
    getPairs(key: string): Promise<[k: string, v: v42.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: v42.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: v42.PendingMultisigAccount][]>
}

export class IrohaMigrationPendingReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PendingReferrals'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '2970985c3a141a3f55f4ea4b72ac2f04ffe940e9e705b5360bb2b93e049ef09f'
    }

    get asV33(): IrohaMigrationPendingReferralsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '1ba0cc0c2ab7fc4d2b17eda5fa1c2aa9f42f7161e9cc639d47a225a03c36950e'
    }

    get asV42(): IrohaMigrationPendingReferralsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationPendingReferralsStorageV33 {
    get(key: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
}

export interface IrohaMigrationPendingReferralsStorageV42 {
    get(key: string): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: string[]): Promise<Uint8Array[][]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: Uint8Array[]][]>
    getPairs(key: string): Promise<[k: string, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: Uint8Array[]][]>
}

export class IrohaMigrationPublicKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PublicKeys'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '83d66ec8198e5518b7bdea426bcad51ad11dfd9e32cd8855623a3e17836c6c2a'
    }

    get asV33(): IrohaMigrationPublicKeysStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '850ce950d572c98c30b6b59de1ce3260e87a95f7de365f8b6a9453d7e4039fe7'
    }

    get asV42(): IrohaMigrationPublicKeysStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationPublicKeysStorageV33 {
    get(key: Uint8Array): Promise<[boolean, Uint8Array][]>
    getAll(): Promise<[boolean, Uint8Array][][]>
    getMany(keys: Uint8Array[]): Promise<[boolean, Uint8Array][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [boolean, Uint8Array][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [boolean, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [boolean, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [boolean, Uint8Array][]][]>
}

export interface IrohaMigrationPublicKeysStorageV42 {
    get(key: string): Promise<[boolean, string][]>
    getAll(): Promise<[boolean, string][][]>
    getMany(keys: string[]): Promise<[boolean, string][][]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: [boolean, string][]][]>
    getPairs(key: string): Promise<[k: string, v: [boolean, string][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: [boolean, string][]][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: [boolean, string][]][]>
}

export class IrohaMigrationQuorumsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Quorums'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '4e412e0e9e2216f521c2e95703c4b26e77d8d6b67181ed227ad382dc45f07426'
    }

    get asV33(): IrohaMigrationQuorumsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'a0c0387632acb412d8417fc42bc087b9f1fa6c1f2d2ac21a4d502cc571a90c54'
    }

    get asV42(): IrohaMigrationQuorumsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationQuorumsStorageV33 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export interface IrohaMigrationQuorumsStorageV42 {
    get(key: string): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: string[]): Promise<number[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: number][]>
    getPairs(key: string): Promise<[k: string, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: number][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: number][]>
}

export class IrohaMigrationReferrersStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Referrers'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'd615172814598e4b69e04469ab40a91ec9391bfa582f645f1c0e21d723c2b9be'
    }

    get asV33(): IrohaMigrationReferrersStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'd523afc93c9a0f4dbc152c5816d8fcb87607740fb04483263145fca5324c809d'
    }

    get asV42(): IrohaMigrationReferrersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface IrohaMigrationReferrersStorageV33 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface IrohaMigrationReferrersStorageV42 {
    get(key: string): Promise<(string | undefined)>
    getAll(): Promise<string[]>
    getMany(keys: string[]): Promise<(string | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: string][]>
    getPairs(key: string): Promise<[k: string, v: string][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: string][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: string][]>
}

export class LeafProviderLatestDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'LeafProvider'
    }

    protected getName() {
        return 'LatestDigest'
    }

    /**
     *  Latest digest
     */
    get isV52(): boolean {
        return this.getTypeHash() === '06f5f65cbbdf8c9ab6b676d2ed1feb83b6f31c0cc43e66ae6a99e9c9c457e56e'
    }

    /**
     *  Latest digest
     */
    get asV52(): LeafProviderLatestDigestStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Latest digest
     */
    get isV54(): boolean {
        return this.getTypeHash() === '8610f92d22951c30343ddf3b634b811adae7e0af568a2d6246b360799c08ac9d'
    }

    /**
     *  Latest digest
     */
    get asV54(): LeafProviderLatestDigestStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Latest digest
 */
export interface LeafProviderLatestDigestStorageV52 {
    get(): Promise<(v52.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LeafProviderLatestDigestStorageV54 {
    get(): Promise<(v54.AuxiliaryDigestItem[] | undefined)>
}

export class MigrationAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'MigrationApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    get asV52(): MigrationAppAddressesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface MigrationAppAddressesStorageV52 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'Nodes'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'ffc087e1323413e73a9729e444bf115bb89bc74cab9f4347c9dc890a14ae8d68'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get asV52(): MmrNodesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface MmrNodesStorageV52 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNumberOfLeavesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'NumberOfLeaves'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get isV52(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get asV52(): MmrNumberOfLeavesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface MmrNumberOfLeavesStorageV52 {
    get(): Promise<bigint>
}

export class MmrRootHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'RootHash'
    }

    /**
     *  Latest MMR Root hash.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Latest MMR Root hash.
     */
    get asV52(): MmrRootHashStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Latest MMR Root hash.
 */
export interface MmrRootHashStorageV52 {
    get(): Promise<Uint8Array>
}

export class MmrLeafBeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyAuthorities'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get asV52(): MmrLeafBeefyAuthoritiesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Details of current BEEFY authority set.
 */
export interface MmrLeafBeefyAuthoritiesStorageV52 {
    get(): Promise<v52.BeefyAuthoritySet>
}

export class MmrLeafBeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyNextAuthorities'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get asV52(): MmrLeafBeefyNextAuthoritiesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface MmrLeafBeefyNextAuthoritiesStorageV52 {
    get(): Promise<v52.BeefyAuthoritySet>
}

export class MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'AlwaysDistributeCoefficient'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get asV33(): MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get asV42(): MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'AssetsWithOptionalRewardMultiplier'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get isV33(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get asV33(): MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get isV42(): boolean {
        return this.getTypeHash() === '15b3436e33ecfd7e102d164ef537d53523cd1f78e59aacaa07319af29bf6a78b'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get asV42(): MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV33 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV42 {
    get(key: v42.AssetId32): Promise<(v42.FixedPoint | undefined)>
    getAll(): Promise<v42.FixedPoint[]>
    getMany(keys: v42.AssetId32[]): Promise<(v42.FixedPoint | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: v42.FixedPoint][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: v42.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: v42.FixedPoint][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: v42.FixedPoint][]>
}

export class MulticollateralBondingCurvePoolBaseFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'BaseFee'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get asV33(): MulticollateralBondingCurvePoolBaseFeeStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get asV42(): MulticollateralBondingCurvePoolBaseFeeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface MulticollateralBondingCurvePoolBaseFeeStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface MulticollateralBondingCurvePoolBaseFeeStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolCollateralReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'CollateralReserves'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV33(): MulticollateralBondingCurvePoolCollateralReservesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV42(): MulticollateralBondingCurvePoolCollateralReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface MulticollateralBondingCurvePoolCollateralReservesStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface MulticollateralBondingCurvePoolCollateralReservesStorageV42 {
    get(key: v42.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v42.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
}

export class MulticollateralBondingCurvePoolDistributionAccountsEntryStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'DistributionAccountsEntry'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'e95fdc65ae7801d7a8189566f181530f616b49f89f9a0107ceed3ab9e830d20d'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    get asV33(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '0d310c28283b5c55d745b242899f29b2dfbda27085663200a26787ab15213e04'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according predefined proportions.
     */
    get asV42(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get isV46(): boolean {
        return this.getTypeHash() === '3475cf6ed2ccf27ac07a80c148e19c9fd9b42c4a2aaddd7cd5f2909f41df39fe'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get asV46(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get isV52(): boolean {
        return this.getTypeHash() === '7f74ccff0e7458037935219ffc9964bcf264d537f22c20893cb10a6eb021a4e1'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get asV52(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get isV54(): boolean {
        return this.getTypeHash() === '40f955200298848e4a22bd095789113e3c02166a0644d704e07d60362a3804e3'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get asV54(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Accounts that receive 20% buy/sell margin according predefined proportions.
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV33 {
    get(): Promise<null>
}

/**
 *  Accounts that receive 20% buy/sell margin according predefined proportions.
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV42 {
    get(): Promise<v42.DistributionAccounts>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV46 {
    get(): Promise<v46.DistributionAccounts>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV52 {
    get(): Promise<v52.DistributionAccounts>
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV54 {
    get(): Promise<v54.DistributionAccounts>
}

export class MulticollateralBondingCurvePoolEnabledTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'EnabledTargets'
    }

    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    get asV33(): MulticollateralBondingCurvePoolEnabledTargetsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  Collateral Assets allowed to be sold on bonding curve.
     */
    get asV42(): MulticollateralBondingCurvePoolEnabledTargetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Collateral Assets allowed to be sold on bonding curve.
 */
export interface MulticollateralBondingCurvePoolEnabledTargetsStorageV33 {
    get(): Promise<Uint8Array[]>
}

/**
 *  Collateral Assets allowed to be sold on bonding curve.
 */
export interface MulticollateralBondingCurvePoolEnabledTargetsStorageV42 {
    get(): Promise<v42.AssetId32[]>
}

export class MulticollateralBondingCurvePoolFreeReservesAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'FreeReservesAccountId'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV33(): MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV42(): MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV33 {
    get(): Promise<Uint8Array>
}

export interface MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MulticollateralBondingCurvePoolIncentivesAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'IncentivesAccountId'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    get asV33(): MulticollateralBondingCurvePoolIncentivesAccountIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards.
     */
    get asV42(): MulticollateralBondingCurvePoolIncentivesAccountIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Account which stores actual PSWAP intended for rewards.
 */
export interface MulticollateralBondingCurvePoolIncentivesAccountIdStorageV33 {
    get(): Promise<Uint8Array>
}

/**
 *  Account which stores actual PSWAP intended for rewards.
 */
export interface MulticollateralBondingCurvePoolIncentivesAccountIdStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'IncentivisedCurrenciesNum'
    }

    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
     */
    get asV33(): MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
 */
export interface MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV33 {
    get(): Promise<number>
}

export class MulticollateralBondingCurvePoolInitialPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'InitialPrice'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get asV33(): MulticollateralBondingCurvePoolInitialPriceStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get asV42(): MulticollateralBondingCurvePoolInitialPriceStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface MulticollateralBondingCurvePoolInitialPriceStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface MulticollateralBondingCurvePoolInitialPriceStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'InitialPswapRewardsSupply'
    }

    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified.
     */
    get asV33(): MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified.
 */
export interface MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV33 {
    get(): Promise<bigint>
}

export class MulticollateralBondingCurvePoolPendingFreeReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PendingFreeReserves'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    get asV33(): MulticollateralBondingCurvePoolPendingFreeReservesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '41d56122ce80e93912ff89326630a7e78a3770743d4faaaf1a83763cf4ff80db'
    }

    get asV42(): MulticollateralBondingCurvePoolPendingFreeReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPendingFreeReservesStorageV33 {
    get(): Promise<[Uint8Array, bigint][]>
}

export interface MulticollateralBondingCurvePoolPendingFreeReservesStorageV42 {
    get(): Promise<[v42.AssetId32, bigint][]>
}

export class MulticollateralBondingCurvePoolPriceChangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PriceChangeRate'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV33(): MulticollateralBondingCurvePoolPriceChangeRateStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    get asV42(): MulticollateralBondingCurvePoolPriceChangeRateStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPriceChangeRateStorageV33 {
    get(): Promise<bigint>
}

export interface MulticollateralBondingCurvePoolPriceChangeRateStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolPriceChangeStepStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PriceChangeStep'
    }

    /**
     *  Cofficients in buy price function.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Cofficients in buy price function.
     */
    get asV33(): MulticollateralBondingCurvePoolPriceChangeStepStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Cofficients in buy price function.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Cofficients in buy price function.
     */
    get asV42(): MulticollateralBondingCurvePoolPriceChangeStepStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Cofficients in buy price function.
 */
export interface MulticollateralBondingCurvePoolPriceChangeStepStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Cofficients in buy price function.
 */
export interface MulticollateralBondingCurvePoolPriceChangeStepStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolReferenceAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'ReferenceAssetId'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV33(): MulticollateralBondingCurvePoolReferenceAssetIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV42(): MulticollateralBondingCurvePoolReferenceAssetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface MulticollateralBondingCurvePoolReferenceAssetIdStorageV33 {
    get(): Promise<Uint8Array>
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface MulticollateralBondingCurvePoolReferenceAssetIdStorageV42 {
    get(): Promise<v42.AssetId32>
}

export class MulticollateralBondingCurvePoolReservesAccStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'ReservesAcc'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ffd15fa32bbddeeed16200be9e53a64d3b7e23327345155c302e17d24d697b52'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV33(): MulticollateralBondingCurvePoolReservesAccStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd66b821a5a76231cf8f9b74a46a1fda7a17c171518b672e805932f38403d45e7'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV42(): MulticollateralBondingCurvePoolReservesAccStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV46(): boolean {
        return this.getTypeHash() === '3cbc8553bacd4bc7573e7f755c0bf9eb2dbc0093d473ecb7568212ea45b2ddf8'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV46(): MulticollateralBondingCurvePoolReservesAccStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV54(): MulticollateralBondingCurvePoolReservesAccStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV33 {
    get(): Promise<v33.TechAccountId>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV42 {
    get(): Promise<v42.TechAccountId>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV46 {
    get(): Promise<v46.TechAccountId>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV54 {
    get(): Promise<v54.TechAccountId>
}

export class MulticollateralBondingCurvePoolRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'Rewards'
    }

    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3c9c4caf05cc3fd846962b03aafca3eef49a71f81879b4d15b7c6e662da4b97e'
    }

    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    get asV33(): MulticollateralBondingCurvePoolRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface MulticollateralBondingCurvePoolRewardsStorageV33 {
    get(key: Uint8Array): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, bigint]][]>
}

export class MulticollateralBondingCurvePoolSellPriceCoefficientStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'SellPriceCoefficient'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get asV33(): MulticollateralBondingCurvePoolSellPriceCoefficientStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get asV42(): MulticollateralBondingCurvePoolSellPriceCoefficientStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface MulticollateralBondingCurvePoolSellPriceCoefficientStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface MulticollateralBondingCurvePoolSellPriceCoefficientStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class MulticollateralBondingCurvePoolTotalRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'TotalRewards'
    }

    /**
     *  Total amount of PSWAP owned by accounts.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of PSWAP owned by accounts.
     */
    get asV33(): MulticollateralBondingCurvePoolTotalRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total amount of PSWAP owned by accounts.
 */
export interface MulticollateralBondingCurvePoolTotalRewardsStorageV33 {
    get(): Promise<bigint>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV33(): MultisigCallsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface MultisigCallsStorageV33 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV33(): MultisigMultisigsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v33.Multisig | undefined)>
    getAll(): Promise<v33.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v33.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.Multisig][]>
}

export class MultisigVerifierPeerKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'PeerKeys'
    }

    get isV54(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    get asV54(): MultisigVerifierPeerKeysStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface MultisigVerifierPeerKeysStorageV54 {
    get(key: v54.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v54.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v54.GenericNetworkId[]>
    getKeys(key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(): Promise<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: Uint8Array[]][]>
}

export class MultisigVerifierThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV54(): boolean {
        return this.getTypeHash() === '023bf7911eb6719a61550d0ecbc989af2e92400d2a595c04afa1f92d4f6bdca6'
    }

    get asV54(): MultisigVerifierThisNetworkIdStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface MultisigVerifierThisNetworkIdStorageV54 {
    get(): Promise<v54.GenericNetworkId>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV33(): OffencesConcurrentReportsIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
}

export class OffencesDeferredOffencesStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'DeferredOffences'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '65c2bd7c83332ec30382595579905bc2abf22a9f87aa00c33bcc28ba95f3b845'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get asV33(): OffencesDeferredOffencesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface OffencesDeferredOffencesStorageV33 {
    get(): Promise<[v33.OffenceDetails[], number[], number][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV33(): OffencesReportsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV33 {
    get(key: Uint8Array): Promise<(v33.OffenceDetails | undefined)>
    getAll(): Promise<v33.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v33.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.OffenceDetails][]>
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ReportsByKindIndex'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get asV33(): OffencesReportsByKindIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface OffencesReportsByKindIndexStorageV33 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class OracleProxyEnabledOraclesStorage extends StorageBase {
    protected getPrefix() {
        return 'OracleProxy'
    }

    protected getName() {
        return 'EnabledOracles'
    }

    get isV45(): boolean {
        return this.getTypeHash() === 'a9a4634dbfaf89d5e8065d6f375312008207fb0df8a769802806756f030fa9f4'
    }

    get asV45(): OracleProxyEnabledOraclesStorageV45 {
        assert(this.isV45)
        return this as any
    }
}

export interface OracleProxyEnabledOraclesStorageV45 {
    get(): Promise<v45.Oracle[]>
}

export class OracleProxySymbolProvidersStorage extends StorageBase {
    protected getPrefix() {
        return 'OracleProxy'
    }

    protected getName() {
        return 'SymbolProviders'
    }

    get isV45(): boolean {
        return this.getTypeHash() === '59d555c6e6b4211dd00871be545b4b88c9b1437a76b92cc04bb994aa71fff20a'
    }

    get asV45(): OracleProxySymbolProvidersStorageV45 {
        assert(this.isV45)
        return this as any
    }
}

export interface OracleProxySymbolProvidersStorageV45 {
    get(key: Uint8Array): Promise<(v45.Oracle | undefined)>
    getAll(): Promise<v45.Oracle[]>
    getMany(keys: Uint8Array[]): Promise<(v45.Oracle | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v45.Oracle][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v45.Oracle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v45.Oracle][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v45.Oracle][]>
}

export class ParachainBridgeAppAllowedParachainAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'AllowedParachainAssets'
    }

    get isV64(): boolean {
        return this.getTypeHash() === '86cd54395d6bbf8f2f19c821851b7346628829ff06f16e6474c5999c0027ecd1'
    }

    get asV64(): ParachainBridgeAppAllowedParachainAssetsStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface ParachainBridgeAppAllowedParachainAssetsStorageV64 {
    get(key1: v64.SubNetworkId, key2: number): Promise<v64.AssetId32[]>
    getAll(): Promise<v64.AssetId32[][]>
    getMany(keys: [v64.SubNetworkId, number][]): Promise<v64.AssetId32[][]>
    getKeys(): Promise<[v64.SubNetworkId, number][]>
    getKeys(key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, number][]>
    getKeys(key1: v64.SubNetworkId, key2: number): Promise<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId, key2: number): AsyncIterable<[v64.SubNetworkId, number][]>
    getPairs(): Promise<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
    getPairs(key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
    getPairs(key1: v64.SubNetworkId, key2: number): Promise<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId, key2: number): AsyncIterable<[k: [v64.SubNetworkId, number], v: v64.AssetId32[]][]>
}

export class ParachainBridgeAppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV64(): boolean {
        return this.getTypeHash() === 'f3597faa3edb4e43a673224f23310dc97ef006d0ae47880b07e949cbdcc64152'
    }

    get asV64(): ParachainBridgeAppAssetKindsStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface ParachainBridgeAppAssetKindsStorageV64 {
    get(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<(v64.Type_543 | undefined)>
    getAll(): Promise<v64.Type_543[]>
    getMany(keys: [v64.SubNetworkId, v64.AssetId32][]): Promise<(v64.Type_543 | undefined)[]>
    getKeys(): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getPairs(): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
    getPairs(key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
    getPairs(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: v64.Type_543][]>
}

export class ParachainBridgeAppRelaychainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'RelaychainAsset'
    }

    get isV64(): boolean {
        return this.getTypeHash() === '8f3cb4f654360e0179a243ccda3d99112ea56080d54141a2c21a6bca1ea515ed'
    }

    get asV64(): ParachainBridgeAppRelaychainAssetStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface ParachainBridgeAppRelaychainAssetStorageV64 {
    get(key: v64.SubNetworkId): Promise<(v64.AssetId32 | undefined)>
    getAll(): Promise<v64.AssetId32[]>
    getMany(keys: v64.SubNetworkId[]): Promise<(v64.AssetId32 | undefined)[]>
    getKeys(): Promise<v64.SubNetworkId[]>
    getKeys(key: v64.SubNetworkId): Promise<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v64.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v64.SubNetworkId): AsyncIterable<v64.SubNetworkId[]>
    getPairs(): Promise<[k: v64.SubNetworkId, v: v64.AssetId32][]>
    getPairs(key: v64.SubNetworkId): Promise<[k: v64.SubNetworkId, v: v64.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v64.SubNetworkId, v: v64.AssetId32][]>
    getPairsPaged(pageSize: number, key: v64.SubNetworkId): AsyncIterable<[k: v64.SubNetworkId, v: v64.AssetId32][]>
}

export class ParachainBridgeAppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV64(): boolean {
        return this.getTypeHash() === '297ea364a7fc6eb3da3bc454ce86c79e1a7cfe088917276137b42e83b4137b72'
    }

    get asV64(): ParachainBridgeAppSidechainPrecisionStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

export interface ParachainBridgeAppSidechainPrecisionStorageV64 {
    get(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [v64.SubNetworkId, v64.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(key1: v64.SubNetworkId): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeys(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[v64.SubNetworkId, v64.AssetId32][]>
    getPairs(): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
    getPairs(key1: v64.SubNetworkId): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
    getPairs(key1: v64.SubNetworkId, key2: v64.AssetId32): Promise<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v64.SubNetworkId, key2: v64.AssetId32): AsyncIterable<[k: [v64.SubNetworkId, v64.AssetId32], v: number][]>
}

export class PermissionsOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Owners'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '29f954775d53c1667af2b6c5beebf9a0ec9235bc714491ffab7869f753b3ac4b'
    }

    get asV33(): PermissionsOwnersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface PermissionsOwnersStorageV33 {
    get(key1: number, key2: v33.Scope): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [number, v33.Scope][]): Promise<Uint8Array[][]>
}

export class PermissionsPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Permissions'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '2e24752437406132f411b5c0fb0ad3e24405640e2b9f66112b580c5fe6827d45'
    }

    get asV33(): PermissionsPermissionsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface PermissionsPermissionsStorageV33 {
    get(key1: Uint8Array, key2: v33.Scope): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: [Uint8Array, v33.Scope][]): Promise<number[][]>
}

export class PhragmenElectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV33(): PhragmenElectionCandidatesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionCandidatesStorageV33 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class PhragmenElectionElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV33(): PhragmenElectionElectionRoundsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface PhragmenElectionElectionRoundsStorageV33 {
    get(): Promise<number>
}

export class PhragmenElectionMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV33(): PhragmenElectionMembersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionMembersStorageV33 {
    get(): Promise<v33.SeatHolder[]>
}

export class PhragmenElectionRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV33(): PhragmenElectionRunnersUpStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface PhragmenElectionRunnersUpStorageV33 {
    get(): Promise<v33.SeatHolder[]>
}

export class PhragmenElectionVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV33(): PhragmenElectionVotingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface PhragmenElectionVotingStorageV33 {
    get(key: Uint8Array): Promise<v33.Voter>
    getAll(): Promise<v33.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v33.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Voter][]>
}

export class PoolXYKAccountPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'AccountPools'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get asV33(): PoolXYKAccountPoolsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get isV42(): boolean {
        return this.getTypeHash() === '86921a28c2bff25852fa80d825bb9d290cc81085c0c151b10b38de01e7a483e2'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get asV42(): PoolXYKAccountPoolsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface PoolXYKAccountPoolsStorageV33 {
    get(key: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface PoolXYKAccountPoolsStorageV42 {
    get(key1: Uint8Array, key2: v42.AssetId32): Promise<v42.AssetId32[]>
    getAll(): Promise<v42.AssetId32[][]>
    getMany(keys: [Uint8Array, v42.AssetId32][]): Promise<v42.AssetId32[][]>
    getKeys(): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v42.AssetId32): Promise<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
    getPairs(key1: Uint8Array, key2: v42.AssetId32): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.AssetId32[]][]>
}

export class PoolXYKPoolProvidersStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'PoolProviders'
    }

    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    get isV33(): boolean {
        return this.getTypeHash() === '25861e3eb8d593dcefaf31526d48572261838c6694d4aed7e9402b8cb074688d'
    }

    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    get asV33(): PoolXYKPoolProvidersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolXYKPoolProvidersStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
}

export class PoolXYKPropertiesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'Properties'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get isV33(): boolean {
        return this.getTypeHash() === '011894b265866074ecea53bd41afbe46a43135124d7f332a177d8345eb7d432a'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get asV33(): PoolXYKPropertiesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get isV42(): boolean {
        return this.getTypeHash() === '910a3bb1caf1e196a7ccf135050c070a21ea4dd14718d9a95f4eeea7cf648521'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get asV42(): PoolXYKPropertiesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PoolXYKPropertiesStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<([Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<([Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [Uint8Array, Uint8Array]][]>
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PoolXYKPropertiesStorageV42 {
    get(key1: v42.AssetId32, key2: v42.AssetId32): Promise<([Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array][]>
    getMany(keys: [v42.AssetId32, v42.AssetId32][]): Promise<([Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [Uint8Array, Uint8Array]][]>
}

export class PoolXYKReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8058dc5087a72fb8716fae058e00da4c490d0bf35ceafb2d9effb514f7f97b35'
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get asV33(): PoolXYKReservesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'fea274fa999d9252d3a54561d987771e16490ba753dc3852f2c8fc41b14327f4'
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get asV42(): PoolXYKReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface PoolXYKReservesStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<[bigint, bigint][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: [bigint, bigint]][]>
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface PoolXYKReservesStorageV42 {
    get(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: [v42.AssetId32, v42.AssetId32][]): Promise<[bigint, bigint][]>
    getKeys(): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: [bigint, bigint]][]>
}

export class PoolXYKTotalIssuancesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'TotalIssuances'
    }

    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    get isV33(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    get asV33(): PoolXYKTotalIssuancesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface PoolXYKTotalIssuancesStorageV33 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV52(): PreimagePreimageForStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface PreimagePreimageForStorageV52 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV52(): PreimageStatusForStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV52 {
    get(key: Uint8Array): Promise<(v52.Type_783 | undefined)>
    getAll(): Promise<v52.Type_783[]>
    getMany(keys: Uint8Array[]): Promise<(v52.Type_783 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v52.Type_783][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v52.Type_783][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v52.Type_783][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v52.Type_783][]>
}

export class PriceToolsPriceInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceTools'
    }

    protected getName() {
        return 'PriceInfos'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'dd876ba3d84ae1352d4530c82aff2b90c47bea6cfd6c0955a83cec998ff20a3f'
    }

    get asV33(): PriceToolsPriceInfosStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '1346286c31a47256a4f9eb905c2b7caaa85e602f1350daafdc30666c2ba57b4c'
    }

    get asV42(): PriceToolsPriceInfosStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV44(): boolean {
        return this.getTypeHash() === '96f6555f64c75ef0a7bb3fe51bc47315e7e8a8875eb6c54d9d729b68555db30e'
    }

    get asV44(): PriceToolsPriceInfosStorageV44 {
        assert(this.isV44)
        return this as any
    }
}

export interface PriceToolsPriceInfosStorageV33 {
    get(key: Uint8Array): Promise<(v33.PriceInfo | undefined)>
    getAll(): Promise<v33.PriceInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v33.PriceInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.PriceInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.PriceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.PriceInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.PriceInfo][]>
}

export interface PriceToolsPriceInfosStorageV42 {
    get(key: v42.AssetId32): Promise<(v42.PriceInfo | undefined)>
    getAll(): Promise<v42.PriceInfo[]>
    getMany(keys: v42.AssetId32[]): Promise<(v42.PriceInfo | undefined)[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: v42.PriceInfo][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: v42.PriceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: v42.PriceInfo][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: v42.PriceInfo][]>
}

export interface PriceToolsPriceInfosStorageV44 {
    get(key: v44.AssetId32): Promise<(v44.AggregatedPriceInfo | undefined)>
    getAll(): Promise<v44.AggregatedPriceInfo[]>
    getMany(keys: v44.AssetId32[]): Promise<(v44.AggregatedPriceInfo | undefined)[]>
    getKeys(): Promise<v44.AssetId32[]>
    getKeys(key: v44.AssetId32): Promise<v44.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v44.AssetId32[]>
    getKeysPaged(pageSize: number, key: v44.AssetId32): AsyncIterable<v44.AssetId32[]>
    getPairs(): Promise<[k: v44.AssetId32, v: v44.AggregatedPriceInfo][]>
    getPairs(key: v44.AssetId32): Promise<[k: v44.AssetId32, v: v44.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v44.AssetId32, v: v44.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number, key: v44.AssetId32): AsyncIterable<[k: v44.AssetId32, v: v44.AggregatedPriceInfo][]>
}

export class PswapDistributionBurnRateStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BurnRate'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get asV33(): PswapDistributionBurnRateStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get asV42(): PswapDistributionBurnRateStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface PswapDistributionBurnRateStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface PswapDistributionBurnRateStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class PswapDistributionBurnUpdateInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BurnUpdateInfo'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ea580e62014c032dbb4ef40db2fbb933358f01c2a813c52e4fc869145d17d687'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get asV33(): PswapDistributionBurnUpdateInfoStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get isV42(): boolean {
        return this.getTypeHash() === '55f990237a70f0c13e17944664b6d84f9e9dfa7399201c400580ad01364f5679'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get asV42(): PswapDistributionBurnUpdateInfoStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface PswapDistributionBurnUpdateInfoStorageV33 {
    get(): Promise<[bigint, bigint]>
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface PswapDistributionBurnUpdateInfoStorageV42 {
    get(): Promise<[v42.FixedPoint, v42.FixedPoint]>
}

export class PswapDistributionBuyBackXSTFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BuyBackXSTFraction'
    }

    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    get asV52(): PswapDistributionBuyBackXSTFractionStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Fraction of PSWAP that could be buy backed to XST
 */
export interface PswapDistributionBuyBackXSTFractionStorageV52 {
    get(): Promise<v52.FixedPoint>
}

export class PswapDistributionClaimableSharesStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'ClaimableShares'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get asV33(): PswapDistributionClaimableSharesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get asV42(): PswapDistributionClaimableSharesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface PswapDistributionClaimableSharesStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface PswapDistributionClaimableSharesStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class PswapDistributionParliamentPswapFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'ParliamentPswapFraction'
    }

    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    get asV33(): PswapDistributionParliamentPswapFractionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Fraction of PSWAP that could be reminted for parliament.
     */
    get asV42(): PswapDistributionParliamentPswapFractionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Fraction of PSWAP that could be reminted for parliament.
 */
export interface PswapDistributionParliamentPswapFractionStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Fraction of PSWAP that could be reminted for parliament.
 */
export interface PswapDistributionParliamentPswapFractionStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class PswapDistributionShareholderAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'ShareholderAccounts'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get asV33(): PswapDistributionShareholderAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f6e17663055000a8cbfc548a6af4ea3e45e641e00411282adcc669441724cb4d'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get asV42(): PswapDistributionShareholderAccountsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface PswapDistributionShareholderAccountsStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface PswapDistributionShareholderAccountsStorageV42 {
    get(key: Uint8Array): Promise<v42.FixedPoint>
    getAll(): Promise<v42.FixedPoint[]>
    getMany(keys: Uint8Array[]): Promise<v42.FixedPoint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.FixedPoint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.FixedPoint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.FixedPoint][]>
}

export class PswapDistributionSubscribedAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'SubscribedAccounts'
    }

    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '35ad191b773a1a6e1f8e386eed0f70149f4111fd86cd85b3ed027e57010babb1'
    }

    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    get asV33(): PswapDistributionSubscribedAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface PswapDistributionSubscribedAccountsStorageV33 {
    get(key: Uint8Array): Promise<([number, Uint8Array, number, number] | undefined)>
    getAll(): Promise<[number, Uint8Array, number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array, number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV33(): RandomnessCollectiveFlipRandomMaterialStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class ReferralsReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'Referrals'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
    }

    get asV33(): ReferralsReferralsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface ReferralsReferralsStorageV33 {
    get(key: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
}

export class ReferralsReferrerBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'ReferrerBalances'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    get asV33(): ReferralsReferrerBalancesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface ReferralsReferrerBalancesStorageV33 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class ReferralsReferrersStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'Referrers'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    get asV33(): ReferralsReferrersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface ReferralsReferrersStorageV33 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class RewardsCurrentClaimableValStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'CurrentClaimableVal'
    }

    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    get asV33(): RewardsCurrentClaimableValStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface RewardsCurrentClaimableValStorageV33 {
    get(): Promise<bigint>
}

export class RewardsEthAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'EthAddresses'
    }

    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    get isV33(): boolean {
        return this.getTypeHash() === '40dee5301d47440e1915385db120922ca14fcee4870cb58962d0faeca6e70604'
    }

    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    get asV33(): RewardsEthAddressesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface RewardsEthAddressesStorageV33 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class RewardsMigrationPendingStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'MigrationPending'
    }

    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    get asV33(): RewardsMigrationPendingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface RewardsMigrationPendingStorageV33 {
    get(): Promise<boolean>
}

export class RewardsPswapFarmOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'PswapFarmOwners'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV33(): RewardsPswapFarmOwnersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface RewardsPswapFarmOwnersStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class RewardsPswapWaifuOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'PswapWaifuOwners'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV33(): RewardsPswapWaifuOwnersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

export interface RewardsPswapWaifuOwnersStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class RewardsReservesAccStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ReservesAcc'
    }

    get isV33(): boolean {
        return this.getTypeHash() === 'ffd15fa32bbddeeed16200be9e53a64d3b7e23327345155c302e17d24d697b52'
    }

    get asV33(): RewardsReservesAccStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'd66b821a5a76231cf8f9b74a46a1fda7a17c171518b672e805932f38403d45e7'
    }

    get asV42(): RewardsReservesAccStorageV42 {
        assert(this.isV42)
        return this as any
    }

    get isV46(): boolean {
        return this.getTypeHash() === '3cbc8553bacd4bc7573e7f755c0bf9eb2dbc0093d473ecb7568212ea45b2ddf8'
    }

    get asV46(): RewardsReservesAccStorageV46 {
        assert(this.isV46)
        return this as any
    }

    get isV54(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    get asV54(): RewardsReservesAccStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface RewardsReservesAccStorageV33 {
    get(): Promise<v33.TechAccountId>
}

export interface RewardsReservesAccStorageV42 {
    get(): Promise<v42.TechAccountId>
}

export interface RewardsReservesAccStorageV46 {
    get(): Promise<v46.TechAccountId>
}

export interface RewardsReservesAccStorageV54 {
    get(): Promise<v54.TechAccountId>
}

export class RewardsTotalClaimableValStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'TotalClaimableVal'
    }

    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    get asV33(): RewardsTotalClaimableValStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface RewardsTotalClaimableValStorageV33 {
    get(): Promise<bigint>
}

export class RewardsTotalValRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'TotalValRewards'
    }

    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    get asV33(): RewardsTotalValRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface RewardsTotalValRewardsStorageV33 {
    get(): Promise<bigint>
}

export class RewardsUmiNftClaimedStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNftClaimed'
    }

    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ecc68acda02cc8f77850a99cfbd18a1d08c36d877d8b5986e0a1f0db4eaefd2c'
    }

    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    get asV33(): RewardsUmiNftClaimedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface RewardsUmiNftClaimedStorageV33 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class RewardsUmiNftReceiversStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNftReceivers'
    }

    /**
     *  UMI NFT receivers storage
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f811bbf14795bfbb2d48b655363943f543be46cea31a2ecbcf364a7b23386259'
    }

    /**
     *  UMI NFT receivers storage
     */
    get asV33(): RewardsUmiNftReceiversStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  UMI NFT receivers storage
 */
export interface RewardsUmiNftReceiversStorageV33 {
    get(key: Uint8Array): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: Uint8Array[]): Promise<bigint[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
}

export class RewardsUmiNftsStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNfts'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get asV33(): RewardsUmiNftsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get asV42(): RewardsUmiNftsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The storage of available UMI NFTs.
 */
export interface RewardsUmiNftsStorageV33 {
    get(): Promise<Uint8Array[]>
}

/**
 *  The storage of available UMI NFTs.
 */
export interface RewardsUmiNftsStorageV42 {
    get(): Promise<v42.AssetId32[]>
}

export class RewardsValBurnedSinceLastVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ValBurnedSinceLastVesting'
    }

    /**
     *  Amount of VAL burned since last vesting
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL burned since last vesting
     */
    get asV33(): RewardsValBurnedSinceLastVestingStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface RewardsValBurnedSinceLastVestingStorageV33 {
    get(): Promise<bigint>
}

export class RewardsValOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ValOwners'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get isV33(): boolean {
        return this.getTypeHash() === '78d86fbd0ca9d775590a428bef5695f9778e6ab835954d94cf333b7b1c73eff0'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get asV33(): RewardsValOwnersStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get isV42(): boolean {
        return this.getTypeHash() === '0536eb37be29c8b1e5dff115694b293ec3ecf2cbefa233afcb0ceaecf7840723'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get asV42(): RewardsValOwnersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface RewardsValOwnersStorageV33 {
    get(key: Uint8Array): Promise<v33.RewardInfo>
    getAll(): Promise<v33.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.RewardInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.RewardInfo][]>
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface RewardsValOwnersStorageV42 {
    get(key: Uint8Array): Promise<v42.RewardInfo>
    getAll(): Promise<v42.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<v42.RewardInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.RewardInfo][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '7a948e73d4284fa8de8c5c0caa64e885bc6e48afb2b00a7668816ba544e9a72a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV33(): SchedulerAgendaStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV35(): boolean {
        return this.getTypeHash() === '01ea419ca1329cc2db069cb1f4090d33fe965d4a0d77083be6e8d3b4ec90465b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV35(): SchedulerAgendaStorageV35 {
        assert(this.isV35)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV37(): boolean {
        return this.getTypeHash() === '5fecf321c31bec44914f9ab6bd1d624d2060b2b4a9be3516c65177b55943e5af'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV37(): SchedulerAgendaStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '31520be560a00412ca10099409ec9131f63ec51bcb82f49b3b73926e22a1f62e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV38(): SchedulerAgendaStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8afa1c080785a215d2df1ec05d9625d61e5896913e8fe00305d8cc11d9f88ce4'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV42(): SchedulerAgendaStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '22cd7b32e4041e11c1e7befb0011f21dc95b1a540c4de0a40bb64de84c4b3d9e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV43(): SchedulerAgendaStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV44(): boolean {
        return this.getTypeHash() === 'f44f5f70839e0fedfae4433316887fe5a1cdf95af9f7e362c0620beef3dac9f1'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV44(): SchedulerAgendaStorageV44 {
        assert(this.isV44)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV45(): boolean {
        return this.getTypeHash() === 'e2412bc9d17eb4b9eeeb9c1cec4a306dc493aff5d796fd35fcafbaa100b2bca7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV45(): SchedulerAgendaStorageV45 {
        assert(this.isV45)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV46(): boolean {
        return this.getTypeHash() === '9b8a9fe485f1078149a0091e99f11379ac86897a13dfc646f72b6220ea87802c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV46(): SchedulerAgendaStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'ca21fcfa9fb5b45374e07623c928f0e80a8789c2ee999ebdbe1a4e3bb52ffb70'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV47(): SchedulerAgendaStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV48(): boolean {
        return this.getTypeHash() === '2257d03174f930cc50f25fbafb5fd23482b307fd05b3c4e77dc8d83a21c35aaa'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV48(): SchedulerAgendaStorageV48 {
        assert(this.isV48)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '2ff1f90bd59c443bd3651782d6bdd59e22459e4eaab9fd215f47925f3ec4ea86'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV52(): SchedulerAgendaStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV54(): boolean {
        return this.getTypeHash() === '77c856184db4f799c9a20a12a5598ed25f97430da580aed6c66e0c02ba298685'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV54(): SchedulerAgendaStorageV54 {
        assert(this.isV54)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '951b60df395e6a72baec5656b81390ea1defc743459db101c5201319de8dcf9f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV64(): SchedulerAgendaStorageV64 {
        assert(this.isV64)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV33 {
    get(key: number): Promise<(v33.Scheduled | undefined)[]>
    getAll(): Promise<(v33.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v33.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v33.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v33.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v33.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v33.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV35 {
    get(key: number): Promise<(v35.Scheduled | undefined)[]>
    getAll(): Promise<(v35.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v35.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v35.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v35.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v35.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v35.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV37 {
    get(key: number): Promise<(v37.Scheduled | undefined)[]>
    getAll(): Promise<(v37.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v37.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v37.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v37.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v37.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v37.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV38 {
    get(key: number): Promise<(v38.Scheduled | undefined)[]>
    getAll(): Promise<(v38.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v38.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v38.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v38.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v38.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v38.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV42 {
    get(key: number): Promise<(v42.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v42.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v42.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV43 {
    get(key: number): Promise<(v43.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v43.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v43.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV44 {
    get(key: number): Promise<(v44.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v44.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v44.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v44.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v44.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v44.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v44.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV45 {
    get(key: number): Promise<(v45.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v45.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v45.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v45.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v45.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v45.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v45.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV46 {
    get(key: number): Promise<(v46.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v46.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v46.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v46.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v46.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v46.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v46.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV47 {
    get(key: number): Promise<(v47.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v47.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v47.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v47.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v47.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v47.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v47.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV48 {
    get(key: number): Promise<(v48.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v48.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v48.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v48.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v48.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v48.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v48.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV52 {
    get(key: number): Promise<(v52.Scheduled | undefined)[]>
    getAll(): Promise<(v52.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v52.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v52.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v52.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v52.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v52.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV54 {
    get(key: number): Promise<(v54.Scheduled | undefined)[]>
    getAll(): Promise<(v54.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v54.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v54.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v54.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v54.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v54.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV64 {
    get(key: number): Promise<(v64.Scheduled | undefined)[]>
    getAll(): Promise<(v64.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v64.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v64.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v64.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v64.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v64.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV52(): SchedulerIncompleteSinceStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV52 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV33(): SchedulerLookupStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV52(): SchedulerLookupStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV33 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV52 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV33(): SchedulerStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV33 {
    get(): Promise<v33.Releases>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV33(): SessionCurrentIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV33 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get asV33(): SessionDisabledValidatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV33 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV33(): SessionKeyOwnerStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV42(): SessionKeyOwnerStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV33 {
    get(key: [number, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key: [number, Uint8Array]): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key: [number, Uint8Array]): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV42 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '4d1c6fbae562bd32661ebbafd98424ea6ecb9385359b2fe89d60b3c28651181e'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV33(): SessionNextKeysStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '6108e83622ab26c07cbbe2e10fefc83d1d48217fa5e5c0e670c57839e349da52'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV42(): SessionNextKeysStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV33 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV42 {
    get(key: Uint8Array): Promise<(v42.SessionKeys | undefined)>
    getAll(): Promise<v42.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v42.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV33(): SessionQueuedChangedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV33 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b77302af5d9ee34e230c2750d855dcf1eb4cb56cc423496f486275d2cd97097a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV33(): SessionQueuedKeysStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'afa050130a79f0e712375751e7b359ca34764df069b74eaba6288cbdd4791e71'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV42(): SessionQueuedKeysStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV33 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV42 {
    get(): Promise<[Uint8Array, v42.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV33(): SessionValidatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get asV33(): StakingActiveEraStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface StakingActiveEraStorageV33 {
    get(): Promise<(v33.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get asV33(): StakingBondedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface StakingBondedStorageV33 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV33(): StakingBondedErasStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV33 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV33(): StakingCanceledSlashPayoutStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV33 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get asV42(): StakingChillThresholdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV42 {
    get(): Promise<(number | undefined)>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV42(): StakingCounterForNominatorsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForNominatorsStorageV42 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV42(): StakingCounterForValidatorsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForValidatorsStorageV42 {
    get(): Promise<number>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV33(): StakingCurrentEraStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV33 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get asV42(): StakingCurrentPlannedSessionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV42 {
    get(): Promise<number>
}

export class StakingEarliestUnappliedSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EarliestUnappliedSlash'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get asV33(): StakingEarliestUnappliedSlashStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface StakingEarliestUnappliedSlashStorageV33 {
    get(): Promise<(number | undefined)>
}

export class StakingEraElectionStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EraElectionStatus'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'bf44282bdbc037310265361b5f110910184ee499c1366addfdbeb65aef359e28'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get asV33(): StakingEraElectionStatusStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface StakingEraElectionStatusStorageV33 {
    get(): Promise<v33.ElectionStatus>
}

export class StakingEraValBurnedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EraValBurned'
    }

    /**
     *  The amount of VAL burned during this era.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of VAL burned during this era.
     */
    get asV33(): StakingEraValBurnedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The amount of VAL burned during this era.
 */
export interface StakingEraValBurnedStorageV33 {
    get(): Promise<bigint>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV33(): StakingErasRewardPointsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV33 {
    get(key: number): Promise<v33.EraRewardPoints>
    getAll(): Promise<v33.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v33.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v33.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v33.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v33.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v33.EraRewardPoints][]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV33(): StakingErasStakersStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<v33.Exposure>
    getAll(): Promise<v33.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v33.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV33(): StakingErasStakersClippedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<v33.Exposure>
    getAll(): Promise<v33.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v33.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.Exposure][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get asV33(): StakingErasStartSessionIndexStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface StakingErasStartSessionIndexStorageV33 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV33(): StakingErasTotalStakeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV33 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV33(): StakingErasValidatorPrefsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<v33.ValidatorPrefs>
    getAll(): Promise<v33.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v33.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v33.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV33(): StakingErasValidatorRewardStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV33 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV33(): StakingForceEraStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV33 {
    get(): Promise<v33.Forcing>
}

export class StakingHistoryDepthStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'HistoryDepth'
    }

    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise. I.e. active era must
     *  always be in history. I.e. `active_era > current_era - history_depth` must be
     *  guaranteed.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise. I.e. active era must
     *  always be in history. I.e. `active_era > current_era - history_depth` must be
     *  guaranteed.
     */
    get asV33(): StakingHistoryDepthStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Number of eras to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]`.
 * 
 *  Must be more than the number of eras delayed by session otherwise. I.e. active era must
 *  always be in history. I.e. `active_era > current_era - history_depth` must be
 *  guaranteed.
 */
export interface StakingHistoryDepthStorageV33 {
    get(): Promise<number>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV33(): StakingInvulnerablesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV33 {
    get(): Promise<Uint8Array[]>
}

export class StakingIsCurrentSessionFinalStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'IsCurrentSessionFinal'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get asV33(): StakingIsCurrentSessionFinalStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface StakingIsCurrentSessionFinalStorageV33 {
    get(): Promise<boolean>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV33(): StakingLedgerStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV33 {
    get(key: Uint8Array): Promise<(v33.StakingLedger | undefined)>
    getAll(): Promise<v33.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v33.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV42(): StakingMaxNominatorsCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV42 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV42(): StakingMaxValidatorsCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV42 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV42(): StakingMinCommissionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV42 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV42(): StakingMinNominatorBondStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV42 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV42(): StakingMinValidatorBondStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV42 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV52(): StakingMinimumActiveStakeStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV52 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV33(): StakingMinimumValidatorCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV33 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV33(): StakingNominatorSlashInEraStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    get asV33(): StakingNominatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 */
export interface StakingNominatorsStorageV33 {
    get(key: Uint8Array): Promise<(v33.Nominations | undefined)>
    getAll(): Promise<v33.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v33.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.Nominations][]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV42(): StakingOffendingValidatorsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV42 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get asV33(): StakingPayeeStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface StakingPayeeStorageV33 {
    get(key: Uint8Array): Promise<v33.RewardDestination>
    getAll(): Promise<v33.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v33.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.RewardDestination][]>
}

export class StakingQueuedElectedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedElected'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '4eb4938a9c4768286e5e98cd46cabfc8a8c98b113bbbe8616621e5fc6aa8e4d5'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get asV33(): StakingQueuedElectedStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface StakingQueuedElectedStorageV33 {
    get(): Promise<(v33.ElectionResult | undefined)>
}

export class StakingQueuedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedScore'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get asV33(): StakingQueuedScoreStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface StakingQueuedScoreStorageV33 {
    get(): Promise<(bigint[] | undefined)>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV33(): StakingSlashRewardFractionStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV33 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV33(): StakingSlashingSpansStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV33 {
    get(key: Uint8Array): Promise<(v33.SlashingSpans | undefined)>
    getAll(): Promise<v33.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v33.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.SlashingSpans][]>
}

export class StakingSnapshotNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotNominators'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV33(): StakingSnapshotNominatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotNominatorsStorageV33 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSnapshotValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotValidators'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV33(): StakingSnapshotValidatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotValidatorsStorageV33 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV33(): StakingSpanSlashStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV33 {
    get(key: [Uint8Array, number]): Promise<v33.SpanRecord>
    getAll(): Promise<v33.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v33.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v33.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v33.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v33.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v33.SpanRecord][]>
}

export class StakingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v5.0.0 for new networks.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v5.0.0 for new networks.
     */
    get asV33(): StakingStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '9d27f2caf6049b435f9ac14da3b267d0e65dfad3af06ab1bc4d6fe208abf3347'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV42(): StakingStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v5.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV33 {
    get(): Promise<v33.Releases>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV42 {
    get(): Promise<v42.Type_475>
}

export class StakingTimeSinceGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'TimeSinceGenesis'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'e95fdc65ae7801d7a8189566f181530f616b49f89f9a0107ceed3ab9e830d20d'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get asV33(): StakingTimeSinceGenesisStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e50373253e08a19a381d5580f2e767cdc52933ee85b8bb4727f9f66cac117cae'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get asV42(): StakingTimeSinceGenesisStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface StakingTimeSinceGenesisStorageV33 {
    get(): Promise<null>
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface StakingTimeSinceGenesisStorageV42 {
    get(): Promise<v42.DurationWrapper>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV33(): StakingUnappliedSlashesStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV33 {
    get(key: number): Promise<v33.UnappliedSlash[]>
    getAll(): Promise<v33.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v33.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v33.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v33.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v33.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v33.UnappliedSlash[]][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of staking participants.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of staking participants.
     */
    get asV33(): StakingValidatorCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The ideal number of staking participants.
 */
export interface StakingValidatorCountStorageV33 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV33(): StakingValidatorSlashInEraStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV33 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get asV33(): StakingValidatorsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface StakingValidatorsStorageV33 {
    get(key: Uint8Array): Promise<v33.ValidatorPrefs>
    getAll(): Promise<v33.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v33.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.ValidatorPrefs][]>
}

export class SubstrateBridgeAppAllowedParachainAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'AllowedParachainAssets'
    }

    get isV57(): boolean {
        return this.getTypeHash() === '86cd54395d6bbf8f2f19c821851b7346628829ff06f16e6474c5999c0027ecd1'
    }

    get asV57(): SubstrateBridgeAppAllowedParachainAssetsStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

export interface SubstrateBridgeAppAllowedParachainAssetsStorageV57 {
    get(key1: v57.SubNetworkId, key2: number): Promise<v57.AssetId32[]>
    getAll(): Promise<v57.AssetId32[][]>
    getMany(keys: [v57.SubNetworkId, number][]): Promise<v57.AssetId32[][]>
    getKeys(): Promise<[v57.SubNetworkId, number][]>
    getKeys(key1: v57.SubNetworkId): Promise<[v57.SubNetworkId, number][]>
    getKeys(key1: v57.SubNetworkId, key2: number): Promise<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v57.SubNetworkId): AsyncIterable<[v57.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v57.SubNetworkId, key2: number): AsyncIterable<[v57.SubNetworkId, number][]>
    getPairs(): Promise<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
    getPairs(key1: v57.SubNetworkId): Promise<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
    getPairs(key1: v57.SubNetworkId, key2: number): Promise<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v57.SubNetworkId): AsyncIterable<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v57.SubNetworkId, key2: number): AsyncIterable<[k: [v57.SubNetworkId, number], v: v57.AssetId32[]][]>
}

export class SubstrateBridgeAppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'f3597faa3edb4e43a673224f23310dc97ef006d0ae47880b07e949cbdcc64152'
    }

    get asV52(): SubstrateBridgeAppAssetKindsStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SubstrateBridgeAppAssetKindsStorageV52 {
    get(key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<(v52.Type_568 | undefined)>
    getAll(): Promise<v52.Type_568[]>
    getMany(keys: [v52.SubNetworkId, v52.AssetId32][]): Promise<(v52.Type_568 | undefined)[]>
    getKeys(): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeys(key1: v52.SubNetworkId): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeys(key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v52.SubNetworkId): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v52.SubNetworkId, key2: v52.AssetId32): AsyncIterable<[v52.SubNetworkId, v52.AssetId32][]>
    getPairs(): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
    getPairs(key1: v52.SubNetworkId): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
    getPairs(key1: v52.SubNetworkId, key2: v52.AssetId32): Promise<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number, key1: v52.SubNetworkId): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
    getPairsPaged(pageSize: number, key1: v52.SubNetworkId, key2: v52.AssetId32): AsyncIterable<[k: [v52.SubNetworkId, v52.AssetId32], v: v52.Type_568][]>
}

export class SubstrateBridgeAppBridgeTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'BridgeTransferLimit'
    }

    get isV57(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    get asV57(): SubstrateBridgeAppBridgeTransferLimitStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

export interface SubstrateBridgeAppBridgeTransferLimitStorageV57 {
    get(): Promise<(bigint | undefined)>
}

export class SubstrateBridgeAppRelaychainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'RelaychainAsset'
    }

    get isV57(): boolean {
        return this.getTypeHash() === '8f3cb4f654360e0179a243ccda3d99112ea56080d54141a2c21a6bca1ea515ed'
    }

    get asV57(): SubstrateBridgeAppRelaychainAssetStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

export interface SubstrateBridgeAppRelaychainAssetStorageV57 {
    get(key: v57.SubNetworkId): Promise<(v57.AssetId32 | undefined)>
    getAll(): Promise<v57.AssetId32[]>
    getMany(keys: v57.SubNetworkId[]): Promise<(v57.AssetId32 | undefined)[]>
    getKeys(): Promise<v57.SubNetworkId[]>
    getKeys(key: v57.SubNetworkId): Promise<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v57.SubNetworkId): AsyncIterable<v57.SubNetworkId[]>
    getPairs(): Promise<[k: v57.SubNetworkId, v: v57.AssetId32][]>
    getPairs(key: v57.SubNetworkId): Promise<[k: v57.SubNetworkId, v: v57.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v57.SubNetworkId, v: v57.AssetId32][]>
    getPairsPaged(pageSize: number, key: v57.SubNetworkId): AsyncIterable<[k: v57.SubNetworkId, v: v57.AssetId32][]>
}

export class SubstrateBridgeAppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV54(): boolean {
        return this.getTypeHash() === '297ea364a7fc6eb3da3bc454ce86c79e1a7cfe088917276137b42e83b4137b72'
    }

    get asV54(): SubstrateBridgeAppSidechainPrecisionStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

export interface SubstrateBridgeAppSidechainPrecisionStorageV54 {
    get(key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [v54.SubNetworkId, v54.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeys(key1: v54.SubNetworkId): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeys(key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v54.SubNetworkId): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v54.SubNetworkId, key2: v54.AssetId32): AsyncIterable<[v54.SubNetworkId, v54.AssetId32][]>
    getPairs(): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
    getPairs(key1: v54.SubNetworkId): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
    getPairs(key1: v54.SubNetworkId, key2: v54.AssetId32): Promise<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v54.SubNetworkId): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v54.SubNetworkId, key2: v54.AssetId32): AsyncIterable<[k: [v54.SubNetworkId, v54.AssetId32], v: number][]>
}

export class SubstrateBridgeInboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV52(): SubstrateBridgeInboundChannelChannelNoncesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SubstrateBridgeInboundChannelChannelNoncesStorageV52 {
    get(key: v52.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v52.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
}

export class SubstrateBridgeInboundChannelRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeInboundChannel'
    }

    protected getName() {
        return 'RewardFraction'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV52(): SubstrateBridgeInboundChannelRewardFractionStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SubstrateBridgeInboundChannelRewardFractionStorageV52 {
    get(): Promise<number>
}

export class SubstrateBridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV52(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV52(): SubstrateBridgeOutboundChannelChannelNoncesStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SubstrateBridgeOutboundChannelChannelNoncesStorageV52 {
    get(key: v52.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v52.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: bigint][]>
}

export class SubstrateBridgeOutboundChannelFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'Fee'
    }

    get isV52(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV52(): SubstrateBridgeOutboundChannelFeeStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

export interface SubstrateBridgeOutboundChannelFeeStorageV52 {
    get(): Promise<bigint>
}

export class SubstrateBridgeOutboundChannelIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'Interval'
    }

    /**
     *  Interval between committing messages.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV52(): SubstrateBridgeOutboundChannelIntervalStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface SubstrateBridgeOutboundChannelIntervalStorageV52 {
    get(): Promise<number>
}

export class SubstrateBridgeOutboundChannelLatestCommitmentStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'LatestCommitment'
    }

    get isV65(): boolean {
        return this.getTypeHash() === '5b90a7a83f29284a299c9341fb867ed1fe9bc68ff91df71cedfe46d2da30ed30'
    }

    get asV65(): SubstrateBridgeOutboundChannelLatestCommitmentStorageV65 {
        assert(this.isV65)
        return this as any
    }
}

export interface SubstrateBridgeOutboundChannelLatestCommitmentStorageV65 {
    get(key: v65.SubNetworkId): Promise<(v65.GenericCommitmentWithBlock | undefined)>
    getAll(): Promise<v65.GenericCommitmentWithBlock[]>
    getMany(keys: v65.SubNetworkId[]): Promise<(v65.GenericCommitmentWithBlock | undefined)[]>
    getKeys(): Promise<v65.SubNetworkId[]>
    getKeys(key: v65.SubNetworkId): Promise<v65.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v65.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v65.SubNetworkId): AsyncIterable<v65.SubNetworkId[]>
    getPairs(): Promise<[k: v65.SubNetworkId, v: v65.GenericCommitmentWithBlock][]>
    getPairs(key: v65.SubNetworkId): Promise<[k: v65.SubNetworkId, v: v65.GenericCommitmentWithBlock][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v65.SubNetworkId, v: v65.GenericCommitmentWithBlock][]>
    getPairsPaged(pageSize: number, key: v65.SubNetworkId): AsyncIterable<[k: v65.SubNetworkId, v: v65.GenericCommitmentWithBlock][]>
}

export class SubstrateBridgeOutboundChannelMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'MessageQueues'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV52(): boolean {
        return this.getTypeHash() === '77504812617d5f11786cf16b2763cc30ec3905bc9a8d3549b9c2bcbb9817b48d'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV52(): SubstrateBridgeOutboundChannelMessageQueuesStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV54(): boolean {
        return this.getTypeHash() === '627c242aac91c29946caa4aebc617d4333277f5396196802cec4c85ec3753cb6'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV54(): SubstrateBridgeOutboundChannelMessageQueuesStorageV54 {
        assert(this.isV54)
        return this as any
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV57(): boolean {
        return this.getTypeHash() === '12598e9ed710edd17fbbc1e4bbd7c9c8d7c1b44920a082933852de96bb889e9c'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV57(): SubstrateBridgeOutboundChannelMessageQueuesStorageV57 {
        assert(this.isV57)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface SubstrateBridgeOutboundChannelMessageQueuesStorageV52 {
    get(key: v52.SubNetworkId): Promise<v52.ParachainMessage[]>
    getAll(): Promise<v52.ParachainMessage[][]>
    getMany(keys: v52.SubNetworkId[]): Promise<v52.ParachainMessage[][]>
    getKeys(): Promise<v52.SubNetworkId[]>
    getKeys(key: v52.SubNetworkId): Promise<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v52.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<v52.SubNetworkId[]>
    getPairs(): Promise<[k: v52.SubNetworkId, v: v52.ParachainMessage[]][]>
    getPairs(key: v52.SubNetworkId): Promise<[k: v52.SubNetworkId, v: v52.ParachainMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v52.SubNetworkId, v: v52.ParachainMessage[]][]>
    getPairsPaged(pageSize: number, key: v52.SubNetworkId): AsyncIterable<[k: v52.SubNetworkId, v: v52.ParachainMessage[]][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface SubstrateBridgeOutboundChannelMessageQueuesStorageV54 {
    get(key: v54.SubNetworkId): Promise<v54.BridgeMessage[]>
    getAll(): Promise<v54.BridgeMessage[][]>
    getMany(keys: v54.SubNetworkId[]): Promise<v54.BridgeMessage[][]>
    getKeys(): Promise<v54.SubNetworkId[]>
    getKeys(key: v54.SubNetworkId): Promise<v54.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v54.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v54.SubNetworkId): AsyncIterable<v54.SubNetworkId[]>
    getPairs(): Promise<[k: v54.SubNetworkId, v: v54.BridgeMessage[]][]>
    getPairs(key: v54.SubNetworkId): Promise<[k: v54.SubNetworkId, v: v54.BridgeMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v54.SubNetworkId, v: v54.BridgeMessage[]][]>
    getPairsPaged(pageSize: number, key: v54.SubNetworkId): AsyncIterable<[k: v54.SubNetworkId, v: v54.BridgeMessage[]][]>
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface SubstrateBridgeOutboundChannelMessageQueuesStorageV57 {
    get(key: v57.SubNetworkId): Promise<v57.BridgeMessage[]>
    getAll(): Promise<v57.BridgeMessage[][]>
    getMany(keys: v57.SubNetworkId[]): Promise<v57.BridgeMessage[][]>
    getKeys(): Promise<v57.SubNetworkId[]>
    getKeys(key: v57.SubNetworkId): Promise<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v57.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v57.SubNetworkId): AsyncIterable<v57.SubNetworkId[]>
    getPairs(): Promise<[k: v57.SubNetworkId, v: v57.BridgeMessage[]][]>
    getPairs(key: v57.SubNetworkId): Promise<[k: v57.SubNetworkId, v: v57.BridgeMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v57.SubNetworkId, v: v57.BridgeMessage[]][]>
    getPairsPaged(pageSize: number, key: v57.SubNetworkId): AsyncIterable<[k: v57.SubNetworkId, v: v57.BridgeMessage[]][]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV33(): SudoKeyStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV42(): SudoKeyStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV33 {
    get(): Promise<Uint8Array>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV33(): SystemAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV42(): SystemAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV33 {
    get(key: Uint8Array): Promise<v33.AccountInfo>
    getAll(): Promise<v33.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV42 {
    get(key: Uint8Array): Promise<v42.AccountInfo>
    getAll(): Promise<v42.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v42.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV33(): SystemAllExtrinsicsLenStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV33 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV33(): SystemBlockHashStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV33 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV33(): SystemBlockWeightStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV52(): SystemBlockWeightStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV33 {
    get(): Promise<v33.ConsumedWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV52 {
    get(): Promise<v52.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1d49db8c467b8ce13c8d27dfc1293265e11d9e73050b590ac44aa31ca0eec876'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV33(): SystemDigestStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV42(): SystemDigestStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV33 {
    get(): Promise<v33.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV42 {
    get(): Promise<v42.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV33(): SystemEventCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV33 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV33(): SystemEventTopicsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV33 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0853bbe156c6f6dd6459a61389de3ccd6d833d07f56b2b2f367908be40469e3b'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV33(): SystemEventsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV35(): boolean {
        return this.getTypeHash() === 'ed904f3fedb3aecefaf8ac95e8b71eeb4a83c079cca8a7e7d34f76b666f871bb'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV35(): SystemEventsStorageV35 {
        assert(this.isV35)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV37(): boolean {
        return this.getTypeHash() === 'b4c9199dc1c1459463e3ab78af519b875d3f7a9c9e55345d2e690aa5e51cb24a'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV37(): SystemEventsStorageV37 {
        assert(this.isV37)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '9c0271f0b5a4392ee635acf6bb89df842b2958b49940ffb92d01282a98d2694e'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV38(): SystemEventsStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'af2e75e67d3e73eb2c00e784665101d51f6fd209f733ca7fdc82c8b11c4751ee'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV42(): SystemEventsStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '343049004b2ff8798da92f3d8cff54f9dd63ee357d12cae1be6be15cc013787a'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV43(): SystemEventsStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV44(): boolean {
        return this.getTypeHash() === '143eda0454bbbe1d1e0831bda11447e8296888ec693550e8457ecd8593216642'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV44(): SystemEventsStorageV44 {
        assert(this.isV44)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV45(): boolean {
        return this.getTypeHash() === '4aff3266e5f98f301944cc5b44f8ad13298fc9ea302bb20dbf273a4f99d605a2'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV45(): SystemEventsStorageV45 {
        assert(this.isV45)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV46(): boolean {
        return this.getTypeHash() === 'c47d8842d918ccb80d9f140c2d9233e9d7fde29d1e429464891c6bbfa60e8007'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV46(): SystemEventsStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'de40493e11b02c5810ffdea240ad2122f602ba9d2768880dd864112dc1ca1205'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV47(): SystemEventsStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV52(): boolean {
        return this.getTypeHash() === '44fb73c68a2c137046dcb0049e8b4f9dcae7fa0174ae993fdd58aa2ea67f6e41'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV52(): SystemEventsStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV54(): boolean {
        return this.getTypeHash() === '5d947763c616f72aef64395b46240ffc52ea10aacfb6828873f42c9b516c44f9'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV54(): SystemEventsStorageV54 {
        assert(this.isV54)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '1bdbd31295d1996f487dffed73a4488415524edc2e331337c612d0a6f580520e'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV55(): SystemEventsStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV57(): boolean {
        return this.getTypeHash() === '35acaae70faa1f2e1407fe358b92ac4cc70dd01a91ef395c4d8e6ca117044640'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV57(): SystemEventsStorageV57 {
        assert(this.isV57)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV59(): boolean {
        return this.getTypeHash() === '1ede6e3d699220d3977a587c1e87ac73a926d02aa71586015f5929bfd5ea0a07'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV59(): SystemEventsStorageV59 {
        assert(this.isV59)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3c38af8aff486fd0754c7361a495f55de3333266e818ce59a39017dc83a67c56'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV60(): SystemEventsStorageV60 {
        assert(this.isV60)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '0063cab6c511b5eb5ee0d1496e4a9242be46cf467fece7eb50298e5f0650d927'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV64(): SystemEventsStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV66(): boolean {
        return this.getTypeHash() === 'd7a7ed429c0d8e54482ad7fa985d9993e022ff93b1364baffcc6cc849e8a3f0f'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV66(): SystemEventsStorageV66 {
        assert(this.isV66)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV33 {
    get(): Promise<v33.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV35 {
    get(): Promise<v35.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV37 {
    get(): Promise<v37.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV38 {
    get(): Promise<v38.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV42 {
    get(): Promise<v42.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV43 {
    get(): Promise<v43.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV44 {
    get(): Promise<v44.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV45 {
    get(): Promise<v45.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV46 {
    get(): Promise<v46.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV47 {
    get(): Promise<v47.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV52 {
    get(): Promise<v52.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV54 {
    get(): Promise<v54.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV55 {
    get(): Promise<v55.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV57 {
    get(): Promise<v57.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV59 {
    get(): Promise<v59.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV60 {
    get(): Promise<v60.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV64 {
    get(): Promise<v64.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV66 {
    get(): Promise<v66.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV33(): SystemExecutionPhaseStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV33 {
    get(): Promise<(v33.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV33(): SystemExtrinsicCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV33 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV33(): SystemExtrinsicDataStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV33 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'd8271d0ce466f2c8ece1a9bca95e19c1166322f38e939254e2b7c4d0e0b75fc9'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV33(): SystemLastRuntimeUpgradeStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV42(): SystemLastRuntimeUpgradeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV33 {
    get(): Promise<(v33.LastRuntimeUpgradeInfo | undefined)>
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV42 {
    get(): Promise<(v42.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV33(): SystemNumberStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV33 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV33(): SystemParentHashStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV33 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToDualRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToDualRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get asV33(): SystemUpgradedToDualRefCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToDualRefCountStorageV33 {
    get(): Promise<boolean>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV42(): SystemUpgradedToTripleRefCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV42 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV33(): SystemUpgradedToU32RefCountStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV33 {
    get(): Promise<boolean>
}

export class TechnicalTechAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Technical'
    }

    protected getName() {
        return 'TechAccounts'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get isV44(): boolean {
        return this.getTypeHash() === 'bb204d285aa6e00cafe8057571dea59e866edb23833206db03a4b4a858115b4d'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get asV44(): TechnicalTechAccountsStorageV44 {
        assert(this.isV44)
        return this as any
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get isV46(): boolean {
        return this.getTypeHash() === 'e67e11535e404d637d0150249e1f023ad01474acfa22faa0d23dca2264265fef'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get asV46(): TechnicalTechAccountsStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'c878da98ba9c031d571b432ade6370b723cbbc8f237ef1939ac0c4c6ecfa87da'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get asV54(): TechnicalTechAccountsStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechnicalTechAccountsStorageV44 {
    get(key: Uint8Array): Promise<(v44.TechAccountId | undefined)>
    getAll(): Promise<v44.TechAccountId[]>
    getMany(keys: Uint8Array[]): Promise<(v44.TechAccountId | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v44.TechAccountId][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v44.TechAccountId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v44.TechAccountId][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v44.TechAccountId][]>
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechnicalTechAccountsStorageV46 {
    get(key: Uint8Array): Promise<(v46.TechAccountId | undefined)>
    getAll(): Promise<v46.TechAccountId[]>
    getMany(keys: Uint8Array[]): Promise<(v46.TechAccountId | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v46.TechAccountId][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v46.TechAccountId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v46.TechAccountId][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v46.TechAccountId][]>
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechnicalTechAccountsStorageV54 {
    get(key: Uint8Array): Promise<(v54.TechAccountId | undefined)>
    getAll(): Promise<v54.TechAccountId[]>
    getMany(keys: Uint8Array[]): Promise<(v54.TechAccountId | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v54.TechAccountId][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v54.TechAccountId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v54.TechAccountId][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v54.TechAccountId][]>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV42(): TechnicalCommitteeMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV42(): TechnicalCommitteePrimeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV42(): TechnicalCommitteeProposalCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV42 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8e85887e7df8e2636a08905a731cc89604fe967aee1c2bc92bf5d5ad4f8f8d9c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV42(): TechnicalCommitteeProposalOfStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'b146c5159b7aa27ad7cfe43c9b7444f667a6d7bdc868f8171059ef52099b8650'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): TechnicalCommitteeProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV44(): boolean {
        return this.getTypeHash() === '8e3c7ae77a7b44b275eeddd524283699e232484b53611eb637650ab8241e5783'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV44(): TechnicalCommitteeProposalOfStorageV44 {
        assert(this.isV44)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV45(): boolean {
        return this.getTypeHash() === '37e96fa34649a7c5cc03015b3d9fcb4baa840ef547be2374fef903769fcfc769'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV45(): TechnicalCommitteeProposalOfStorageV45 {
        assert(this.isV45)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV46(): boolean {
        return this.getTypeHash() === 'c0ad4c3a4bcadce1385bc9aec7caf26bfce55d1b935f9bf9fa5fb85b67caa2cc'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV46(): TechnicalCommitteeProposalOfStorageV46 {
        assert(this.isV46)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV47(): boolean {
        return this.getTypeHash() === 'd755c2be53ac873f09fff7485290812dbf4385db026c71cfc47f374e72764829'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV47(): TechnicalCommitteeProposalOfStorageV47 {
        assert(this.isV47)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV48(): boolean {
        return this.getTypeHash() === 'fedd302420ac53b1117af61a831f8441d4bbc139216a0753639de782f3129252'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV48(): TechnicalCommitteeProposalOfStorageV48 {
        assert(this.isV48)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV52(): boolean {
        return this.getTypeHash() === 'e9fee133103f48e362be1673a1f1e6befcacdc21728be32bdb9f1056cf69a8c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV52(): TechnicalCommitteeProposalOfStorageV52 {
        assert(this.isV52)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'e83fa34aee882b3a7a34aaf36d12956639d73687b11a52fc2d2df76269c72b34'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV54(): TechnicalCommitteeProposalOfStorageV54 {
        assert(this.isV54)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'ae76bb548bb8894c0b01933dc399eb347fb7037bcaea41abce58c945053e3e7a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): TechnicalCommitteeProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV57(): boolean {
        return this.getTypeHash() === 'c6c9c9c485bb5c023c6334c8835593788947093efd662b2389d8aae0911fec55'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV57(): TechnicalCommitteeProposalOfStorageV57 {
        assert(this.isV57)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV59(): boolean {
        return this.getTypeHash() === '064292047c328a72a074ffd63a1098280eb0d4101ded37a1f7d52aea2e259abd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV59(): TechnicalCommitteeProposalOfStorageV59 {
        assert(this.isV59)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '24ccc6bad5e9f5ee926b0bccf8d73b7ebf18a466e356c17d0a2ca03b53be627f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV60(): TechnicalCommitteeProposalOfStorageV60 {
        assert(this.isV60)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV62(): boolean {
        return this.getTypeHash() === 'df61816865d9330415d02528eee6a7e6fd3980a5d00993a32ff0e6fddaefe46e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV62(): TechnicalCommitteeProposalOfStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV64(): boolean {
        return this.getTypeHash() === '0b3d12375d94e142b8c23992277dd04c261dba99c0b4abe8d0cacfc61734b8bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV64(): TechnicalCommitteeProposalOfStorageV64 {
        assert(this.isV64)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV66(): boolean {
        return this.getTypeHash() === 'dc8d2d5e124dbbe365eb19ea702b3a9e632c13e8387cb9d38359410a847b1af7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV66(): TechnicalCommitteeProposalOfStorageV66 {
        assert(this.isV66)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV42 {
    get(key: Uint8Array): Promise<(v42.Call | undefined)>
    getAll(): Promise<v42.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV44 {
    get(key: Uint8Array): Promise<(v44.Call | undefined)>
    getAll(): Promise<v44.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v44.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v44.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v44.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v44.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v44.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV45 {
    get(key: Uint8Array): Promise<(v45.Call | undefined)>
    getAll(): Promise<v45.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v45.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v45.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v45.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v45.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v45.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV46 {
    get(key: Uint8Array): Promise<(v46.Call | undefined)>
    getAll(): Promise<v46.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v46.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v46.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v46.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v46.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v46.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV47 {
    get(key: Uint8Array): Promise<(v47.Call | undefined)>
    getAll(): Promise<v47.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v47.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v47.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v47.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v47.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v47.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV48 {
    get(key: Uint8Array): Promise<(v48.Call | undefined)>
    getAll(): Promise<v48.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v48.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v48.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v48.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v48.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v48.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV52 {
    get(key: Uint8Array): Promise<(v52.Call | undefined)>
    getAll(): Promise<v52.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v52.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v52.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v52.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v52.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v52.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV54 {
    get(key: Uint8Array): Promise<(v54.Call | undefined)>
    getAll(): Promise<v54.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v54.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v54.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v54.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v54.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v54.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV57 {
    get(key: Uint8Array): Promise<(v57.Call | undefined)>
    getAll(): Promise<v57.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v57.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v57.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v57.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v57.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v57.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV59 {
    get(key: Uint8Array): Promise<(v59.Call | undefined)>
    getAll(): Promise<v59.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v59.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v59.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v59.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v59.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v59.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV60 {
    get(key: Uint8Array): Promise<(v60.Call | undefined)>
    getAll(): Promise<v60.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV62 {
    get(key: Uint8Array): Promise<(v62.Call | undefined)>
    getAll(): Promise<v62.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v62.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV64 {
    get(key: Uint8Array): Promise<(v64.Call | undefined)>
    getAll(): Promise<v64.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v64.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v64.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v64.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v64.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v64.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV66 {
    get(key: Uint8Array): Promise<(v66.Call | undefined)>
    getAll(): Promise<v66.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v66.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v66.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v66.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v66.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v66.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV42(): TechnicalCommitteeProposalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV42(): TechnicalCommitteeVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV42 {
    get(key: Uint8Array): Promise<(v42.Votes | undefined)>
    getAll(): Promise<v42.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV42(): TechnicalMembershipMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageV42 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV42(): TechnicalMembershipPrimeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV33(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV33(): TimestampDidUpdateStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV33 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV33(): TimestampNowStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV33 {
    get(): Promise<bigint>
}

export class TokensAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '3cfeced18e25850685b83ab58ab5aff70bf4454d65208a33f932037a595c5458'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV33(): TokensAccountsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e5706f0fa378994768b50e389341994888eb6806896396f817b638a95c28fad2'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV42(): TokensAccountsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v33.AccountData>
    getAll(): Promise<v33.AccountData[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v33.AccountData[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.AccountData][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV42 {
    get(key1: Uint8Array, key2: v42.AssetId32): Promise<v42.Type_500>
    getAll(): Promise<v42.Type_500[]>
    getMany(keys: [Uint8Array, v42.AssetId32][]): Promise<v42.Type_500[]>
    getKeys(): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v42.AssetId32): Promise<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
    getPairs(key1: Uint8Array, key2: v42.AssetId32): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_500][]>
}

export class TokensLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'a4fca61c453cd35ebad40f2f738b949bff67a804ab49e496b90ea9fd09d00802'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV33(): TokensLocksStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'bfd7ec9023cb1f693975281c68fc1fc4cf366a9747bc836a3c98afc37b1c0388'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV42(): TokensLocksStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v33.BalanceLock[]>
    getAll(): Promise<v33.BalanceLock[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v33.BalanceLock[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v33.BalanceLock[]][]>
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV42 {
    get(key1: Uint8Array, key2: v42.AssetId32): Promise<v42.Type_498[]>
    getAll(): Promise<v42.Type_498[][]>
    getMany(keys: [Uint8Array, v42.AssetId32][]): Promise<v42.Type_498[][]>
    getKeys(): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v42.AssetId32): Promise<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
    getPairs(key1: Uint8Array, key2: v42.AssetId32): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.Type_498[]][]>
}

export class TokensReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '64fe379b73bd0117b4a793327bdb630f8582bc9c808e76187dff5f6b668b1576'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV42(): TokensReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface TokensReservesStorageV42 {
    get(key1: Uint8Array, key2: v42.AssetId32): Promise<v42.ReserveData[]>
    getAll(): Promise<v42.ReserveData[][]>
    getMany(keys: [Uint8Array, v42.AssetId32][]): Promise<v42.ReserveData[][]>
    getKeys(): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v42.AssetId32): Promise<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
    getPairs(key1: Uint8Array, key2: v42.AssetId32): Promise<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: v42.ReserveData[]][]>
}

export class TokensTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total issuance of a token type.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV33(): TokensTotalIssuanceStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  The total issuance of a token type.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV42(): TokensTotalIssuanceStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV42 {
    get(key: v42.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v42.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
}

export class TradingPairEnabledSourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'EnabledSources'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '51bc2bb73ac62b09c7b7818a15a05afd027b89e8107143ccc9f8ec397e3f1432'
    }

    get asV33(): TradingPairEnabledSourcesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '2400101ab12706538c3db8bb31d7441f00fd581bc095fdae423d558028e8a177'
    }

    get asV42(): TradingPairEnabledSourcesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TradingPairEnabledSourcesStorageV33 {
    get(key1: number, key2: v33.TradingPair): Promise<(v33.LiquiditySourceType[] | undefined)>
    getAll(): Promise<v33.LiquiditySourceType[][]>
    getMany(keys: [number, v33.TradingPair][]): Promise<(v33.LiquiditySourceType[] | undefined)[]>
    getKeys(): Promise<[number, v33.TradingPair][]>
    getKeys(key1: number): Promise<[number, v33.TradingPair][]>
    getKeys(key1: number, key2: v33.TradingPair): Promise<[number, v33.TradingPair][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v33.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v33.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number, key2: v33.TradingPair): AsyncIterable<[number, v33.TradingPair][]>
    getPairs(): Promise<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
    getPairs(key1: number): Promise<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
    getPairs(key1: number, key2: v33.TradingPair): Promise<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v33.TradingPair): AsyncIterable<[k: [number, v33.TradingPair], v: v33.LiquiditySourceType[]][]>
}

export interface TradingPairEnabledSourcesStorageV42 {
    get(key1: number, key2: v42.TradingPair): Promise<(v42.LiquiditySourceType[] | undefined)>
    getAll(): Promise<v42.LiquiditySourceType[][]>
    getMany(keys: [number, v42.TradingPair][]): Promise<(v42.LiquiditySourceType[] | undefined)[]>
    getKeys(): Promise<[number, v42.TradingPair][]>
    getKeys(key1: number): Promise<[number, v42.TradingPair][]>
    getKeys(key1: number, key2: v42.TradingPair): Promise<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.TradingPair): AsyncIterable<[number, v42.TradingPair][]>
    getPairs(): Promise<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
    getPairs(key1: number): Promise<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
    getPairs(key1: number, key2: v42.TradingPair): Promise<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.TradingPair): AsyncIterable<[k: [number, v42.TradingPair], v: v42.LiquiditySourceType[]][]>
}

export class TradingPairLockedLiquiditySourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'LockedLiquiditySources'
    }

    get isV38(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV38(): TradingPairLockedLiquiditySourcesStorageV38 {
        assert(this.isV38)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'b3e2e66fd93d12bfc55510be49dfb54e3a3a08182855f144a1cb9068eaf711dd'
    }

    get asV42(): TradingPairLockedLiquiditySourcesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TradingPairLockedLiquiditySourcesStorageV38 {
    get(): Promise<v38.LiquiditySourceType[]>
}

export interface TradingPairLockedLiquiditySourcesStorageV42 {
    get(): Promise<v42.LiquiditySourceType[]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV33(): TransactionPaymentNextFeeMultiplierStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV42(): TransactionPaymentNextFeeMultiplierStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV33 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV42 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV33(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV33(): TransactionPaymentStorageVersionStorageV33 {
        assert(this.isV33)
        return this as any
    }

    get isV42(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV42(): TransactionPaymentStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV33 {
    get(): Promise<v33.Releases>
}

export interface TransactionPaymentStorageVersionStorageV42 {
    get(): Promise<v42.Type_433>
}

export class VestedRewardsCrowdloanClaimHistoryStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanClaimHistory'
    }

    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '730629833bfba30add031dea8746fbffdaece5c8b02fbfc84eae568fc50c16ca'
    }

    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    get asV33(): VestedRewardsCrowdloanClaimHistoryStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f96a3660a89d1e70e2f82b5ce829fb1fb6b46c17b7779e5b091498dcd4622a12'
    }

    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    get asV42(): VestedRewardsCrowdloanClaimHistoryStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  This storage keeps the last block number, when the user (the first) claimed a reward for
 *  asset (the second key). The block is rounded to days.
 */
export interface VestedRewardsCrowdloanClaimHistoryStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: number][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: number][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: number][]>
}

/**
 *  This storage keeps the last block number, when the user (the first) claimed a reward for
 *  asset (the second key). The block is rounded to days.
 */
export interface VestedRewardsCrowdloanClaimHistoryStorageV42 {
    get(key1: Uint8Array, key2: v42.AssetId32): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [Uint8Array, v42.AssetId32][]): Promise<number[]>
    getKeys(): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v42.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v42.AssetId32): Promise<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[Uint8Array, v42.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v42.AssetId32], v: number][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v42.AssetId32], v: number][]>
    getPairs(key1: Uint8Array, key2: v42.AssetId32): Promise<[k: [Uint8Array, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v42.AssetId32): AsyncIterable<[k: [Uint8Array, v42.AssetId32], v: number][]>
}

export class VestedRewardsCrowdloanInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanInfos'
    }

    /**
     *  Information about crowdloan
     */
    get isV52(): boolean {
        return this.getTypeHash() === '4b5d49e82b760937552ae22f16177bfa396b3c8f32469fac40efaf42738bbf8e'
    }

    /**
     *  Information about crowdloan
     */
    get asV52(): VestedRewardsCrowdloanInfosStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Information about crowdloan
 */
export interface VestedRewardsCrowdloanInfosStorageV52 {
    get(key: Uint8Array): Promise<(v52.CrowdloanInfo | undefined)>
    getAll(): Promise<v52.CrowdloanInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v52.CrowdloanInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v52.CrowdloanInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v52.CrowdloanInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v52.CrowdloanInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v52.CrowdloanInfo][]>
}

export class VestedRewardsCrowdloanRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanRewards'
    }

    /**
     *  Crowdloan vested rewards storage.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'fe788b969ee775407bf0f164f832061cb27911d6a0f3d4e63cbcf1d4ad15a47d'
    }

    /**
     *  Crowdloan vested rewards storage.
     */
    get asV33(): VestedRewardsCrowdloanRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Crowdloan vested rewards storage.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '6b252dc2c2ca536b9956044c43c39f19fd606b0dc6e2b310675d4c45847d50b7'
    }

    /**
     *  Crowdloan vested rewards storage.
     */
    get asV42(): VestedRewardsCrowdloanRewardsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Crowdloan vested rewards storage.
 */
export interface VestedRewardsCrowdloanRewardsStorageV33 {
    get(key: Uint8Array): Promise<v33.CrowdloanReward>
    getAll(): Promise<v33.CrowdloanReward[]>
    getMany(keys: Uint8Array[]): Promise<v33.CrowdloanReward[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.CrowdloanReward][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.CrowdloanReward][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.CrowdloanReward][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.CrowdloanReward][]>
}

/**
 *  Crowdloan vested rewards storage.
 */
export interface VestedRewardsCrowdloanRewardsStorageV42 {
    get(key: Uint8Array): Promise<v42.CrowdloanReward>
    getAll(): Promise<v42.CrowdloanReward[]>
    getMany(keys: Uint8Array[]): Promise<v42.CrowdloanReward[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.CrowdloanReward][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.CrowdloanReward][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.CrowdloanReward][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.CrowdloanReward][]>
}

export class VestedRewardsCrowdloanUserInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanUserInfos'
    }

    /**
     *  Information about crowdloan rewards claimed by user
     */
    get isV52(): boolean {
        return this.getTypeHash() === '9ba63c4324aab6be9eb9243aeb76282adc876a75a16f7647d197b8f0a224d3bc'
    }

    /**
     *  Information about crowdloan rewards claimed by user
     */
    get asV52(): VestedRewardsCrowdloanUserInfosStorageV52 {
        assert(this.isV52)
        return this as any
    }
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface VestedRewardsCrowdloanUserInfosStorageV52 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v52.CrowdloanUserInfo | undefined)>
    getAll(): Promise<v52.CrowdloanUserInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v52.CrowdloanUserInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v52.CrowdloanUserInfo][]>
}

export class VestedRewardsMarketMakersRegistryStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'MarketMakersRegistry'
    }

    /**
     *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'bf6689ad838304d1064a8a91638c54b4570cfee4d374e281c2d458eb8ebe740a'
    }

    /**
     *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
     */
    get asV33(): VestedRewardsMarketMakersRegistryStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
 */
export interface VestedRewardsMarketMakersRegistryStorageV33 {
    get(key: Uint8Array): Promise<v33.MarketMakerInfo>
    getAll(): Promise<v33.MarketMakerInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.MarketMakerInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.MarketMakerInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.MarketMakerInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.MarketMakerInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.MarketMakerInfo][]>
}

export class VestedRewardsMarketMakingPairsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'MarketMakingPairs'
    }

    /**
     *  Market making pairs storage.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'c0b82e1a9f6cd44a2b18076d69f61a0ea225a0063d20436ff4808cfd2ca10911'
    }

    /**
     *  Market making pairs storage.
     */
    get asV33(): VestedRewardsMarketMakingPairsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Market making pairs storage.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '15600805c4418d57bbd95f237a953cff3bcccb0af8ae419be060d089a1c3be67'
    }

    /**
     *  Market making pairs storage.
     */
    get asV42(): VestedRewardsMarketMakingPairsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Market making pairs storage.
 */
export interface VestedRewardsMarketMakingPairsStorageV33 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<null[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
}

/**
 *  Market making pairs storage.
 */
export interface VestedRewardsMarketMakingPairsStorageV42 {
    get(key1: v42.AssetId32, key2: v42.AssetId32): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [v42.AssetId32, v42.AssetId32][]): Promise<null[]>
    getKeys(): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(): Promise<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
    getPairs(key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
    getPairs(key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
    getPairsPaged(pageSize: number, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: null][]>
}

export class VestedRewardsRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'Rewards'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '6e6904db481ab76cd3b31f5c517953cea1adda807d8e212a9565906581c2b5d9'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get asV33(): VestedRewardsRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'dfdc787a14ad38c2ac34bb33aa54477f67bd9de4136e848d78c5180c156f5eee'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get asV42(): VestedRewardsRewardsStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get isV44(): boolean {
        return this.getTypeHash() === 'a065205d3ebbb157b5b0e521a08365c0ad77257b3c4c8b3388dbabdcb82e3e24'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get asV44(): VestedRewardsRewardsStorageV44 {
        assert(this.isV44)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface VestedRewardsRewardsStorageV33 {
    get(key: Uint8Array): Promise<v33.RewardInfo>
    getAll(): Promise<v33.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<v33.RewardInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v33.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v33.RewardInfo][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface VestedRewardsRewardsStorageV42 {
    get(key: Uint8Array): Promise<v42.Type_586>
    getAll(): Promise<v42.Type_586[]>
    getMany(keys: Uint8Array[]): Promise<v42.Type_586[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Type_586][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Type_586][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Type_586][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Type_586][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface VestedRewardsRewardsStorageV44 {
    get(key: Uint8Array): Promise<v44.Type_593>
    getAll(): Promise<v44.Type_593[]>
    getMany(keys: Uint8Array[]): Promise<v44.Type_593[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v44.Type_593][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v44.Type_593][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v44.Type_593][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v44.Type_593][]>
}

export class VestedRewardsTotalRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'TotalRewards'
    }

    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    get asV33(): VestedRewardsTotalRewardsStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface VestedRewardsTotalRewardsStorageV33 {
    get(): Promise<bigint>
}

export class XSTPoolBaseFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'BaseFee'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get asV33(): XSTPoolBaseFeeStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
     */
    get asV42(): XSTPoolBaseFeeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface XSTPoolBaseFeeStorageV33 {
    get(): Promise<bigint>
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
 */
export interface XSTPoolBaseFeeStorageV42 {
    get(): Promise<v42.FixedPoint>
}

export class XSTPoolCollateralReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'CollateralReserves'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV33(): XSTPoolCollateralReservesStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV42(): XSTPoolCollateralReservesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface XSTPoolCollateralReservesStorageV33 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface XSTPoolCollateralReservesStorageV42 {
    get(key: v42.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v42.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v42.AssetId32[]>
    getKeys(key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairs(key: v42.AssetId32): Promise<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: bigint][]>
}

export class XSTPoolEnabledSymbolsStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'EnabledSymbols'
    }

    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    get isV54(): boolean {
        return this.getTypeHash() === 'ae88fbc2f24db5dbf123749f07478fa3632354ae3d71f37fc65cfa26fb149933'
    }

    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    get asV54(): XSTPoolEnabledSymbolsStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface XSTPoolEnabledSymbolsStorageV54 {
    get(key: Uint8Array): Promise<(v54.AssetId32 | undefined)>
    getAll(): Promise<v54.AssetId32[]>
    getMany(keys: Uint8Array[]): Promise<(v54.AssetId32 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v54.AssetId32][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v54.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v54.AssetId32][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v54.AssetId32][]>
}

export class XSTPoolEnabledSyntheticsStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'EnabledSynthetics'
    }

    /**
     *  XST Assets allowed to be traded using XST.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  XST Assets allowed to be traded using XST.
     */
    get asV33(): XSTPoolEnabledSyntheticsStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  XST Assets allowed to be traded using XST.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  XST Assets allowed to be traded using XST.
     */
    get asV42(): XSTPoolEnabledSyntheticsStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    get isV54(): boolean {
        return this.getTypeHash() === '11652b8a4e128438a7255df00af9e544ec8cbae4470f9218265bb68bb0777c99'
    }

    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    get asV54(): XSTPoolEnabledSyntheticsStorageV54 {
        assert(this.isV54)
        return this as any
    }
}

/**
 *  XST Assets allowed to be traded using XST.
 */
export interface XSTPoolEnabledSyntheticsStorageV33 {
    get(): Promise<Uint8Array[]>
}

/**
 *  XST Assets allowed to be traded using XST.
 */
export interface XSTPoolEnabledSyntheticsStorageV42 {
    get(): Promise<v42.AssetId32[]>
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface XSTPoolEnabledSyntheticsStorageV54 {
    get(key: v54.AssetId32): Promise<(v54.SyntheticInfo | undefined)>
    getAll(): Promise<v54.SyntheticInfo[]>
    getMany(keys: v54.AssetId32[]): Promise<(v54.SyntheticInfo | undefined)[]>
    getKeys(): Promise<v54.AssetId32[]>
    getKeys(key: v54.AssetId32): Promise<v54.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v54.AssetId32[]>
    getKeysPaged(pageSize: number, key: v54.AssetId32): AsyncIterable<v54.AssetId32[]>
    getPairs(): Promise<[k: v54.AssetId32, v: v54.SyntheticInfo][]>
    getPairs(key: v54.AssetId32): Promise<[k: v54.AssetId32, v: v54.SyntheticInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v54.AssetId32, v: v54.SyntheticInfo][]>
    getPairsPaged(pageSize: number, key: v54.AssetId32): AsyncIterable<[k: v54.AssetId32, v: v54.SyntheticInfo][]>
}

export class XSTPoolPermissionedTechAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'PermissionedTechAccount'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'ffd15fa32bbddeeed16200be9e53a64d3b7e23327345155c302e17d24d697b52'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV33(): XSTPoolPermissionedTechAccountStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd66b821a5a76231cf8f9b74a46a1fda7a17c171518b672e805932f38403d45e7'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV42(): XSTPoolPermissionedTechAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV46(): boolean {
        return this.getTypeHash() === '3cbc8553bacd4bc7573e7f755c0bf9eb2dbc0093d473ecb7568212ea45b2ddf8'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV46(): XSTPoolPermissionedTechAccountStorageV46 {
        assert(this.isV46)
        return this as any
    }
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface XSTPoolPermissionedTechAccountStorageV33 {
    get(): Promise<v33.TechAccountId>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface XSTPoolPermissionedTechAccountStorageV42 {
    get(): Promise<v42.TechAccountId>
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface XSTPoolPermissionedTechAccountStorageV46 {
    get(): Promise<v46.TechAccountId>
}

export class XSTPoolReferenceAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'ReferenceAssetId'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get isV33(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV33(): XSTPoolReferenceAssetIdStorageV33 {
        assert(this.isV33)
        return this as any
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV42(): XSTPoolReferenceAssetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface XSTPoolReferenceAssetIdStorageV33 {
    get(): Promise<Uint8Array>
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface XSTPoolReferenceAssetIdStorageV42 {
    get(): Promise<v42.AssetId32>
}

export class XSTPoolSyntheticBaseAssetFloorPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'SyntheticBaseAssetFloorPrice'
    }

    /**
     *  Floor price for the synthetic base asset.
     */
    get isV44(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Floor price for the synthetic base asset.
     */
    get asV44(): XSTPoolSyntheticBaseAssetFloorPriceStorageV44 {
        assert(this.isV44)
        return this as any
    }
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface XSTPoolSyntheticBaseAssetFloorPriceStorageV44 {
    get(): Promise<bigint>
}

export class XorFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'XorFee'
    }

    protected getName() {
        return 'Multiplier'
    }

    get isV37(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV37(): XorFeeMultiplierStorageV37 {
        assert(this.isV37)
        return this as any
    }
}

export interface XorFeeMultiplierStorageV37 {
    get(): Promise<bigint>
}

export class XorFeeXorToValStorage extends StorageBase {
    protected getPrefix() {
        return 'XorFee'
    }

    protected getName() {
        return 'XorToVal'
    }

    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    get isV33(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    get asV33(): XorFeeXorToValStorageV33 {
        assert(this.isV33)
        return this as any
    }
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorFeeXorToValStorageV33 {
    get(): Promise<bigint>
}
