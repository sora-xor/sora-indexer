import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const peers =  {
    /**
     *  Peers
     */
    v64: new StorageType('BridgeDataSigner.Peers', 'Optional', [v64.GenericNetworkId], sts.array(() => sts.bytes())) as PeersV64,
    /**
     *  Peers
     */
    v70: new StorageType('BridgeDataSigner.Peers', 'Optional', [v70.GenericNetworkId], sts.array(() => sts.bytes())) as PeersV70,
}

/**
 *  Peers
 */
export interface PeersV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v64.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v64.GenericNetworkId[]>
    getKeys(block: Block, key: v64.GenericNetworkId): Promise<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<v64.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v64.GenericNetworkId): Promise<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

/**
 *  Peers
 */
export interface PeersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export const pendingPeerUpdate =  {
    /**
     *  Pending peers
     */
    v64: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v64.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV64,
    /**
     *  Pending peers
     */
    v70: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v70.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV70,
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v64.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v64.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v64.GenericNetworkId[]>
    getKeys(block: Block, key: v64.GenericNetworkId): Promise<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<v64.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v64.GenericNetworkId): Promise<[k: v64.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<[k: v64.GenericNetworkId, v: (boolean | undefined)][]>
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
}

export const approvals =  {
    /**
     *  Approvals
     */
    v64: new StorageType('BridgeDataSigner.Approvals', 'Default', [v64.GenericNetworkId, v64.H256], sts.array(() => sts.tuple(() => [sts.bytes(), v64.Signature]))) as ApprovalsV64,
    /**
     *  Approvals
     */
    v70: new StorageType('BridgeDataSigner.Approvals', 'Default', [v70.GenericNetworkId, v70.H256], sts.array(() => sts.tuple(() => [sts.bytes(), v70.Signature]))) as ApprovalsV70,
}

/**
 *  Approvals
 */
export interface ApprovalsV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, v64.Signature][]
    get(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<([Bytes, v64.Signature][] | undefined)>
    getMany(block: Block, keys: [v64.GenericNetworkId, v64.H256][]): Promise<([Bytes, v64.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeys(block: Block, key1: v64.GenericNetworkId): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeys(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H256): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getPairs(block: Block): Promise<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId): Promise<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H256): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: ([Bytes, v64.Signature][] | undefined)][]>
}

/**
 *  Approvals
 */
export interface ApprovalsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, v70.Signature][]
    get(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<([Bytes, v70.Signature][] | undefined)>
    getMany(block: Block, keys: [v70.GenericNetworkId, v70.H256][]): Promise<([Bytes, v70.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getPairs(block: Block): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
}
