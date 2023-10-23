import type {Result, Option} from './support'

export type SubNetworkId = SubNetworkId_Mainnet | SubNetworkId_Kusama | SubNetworkId_Polkadot | SubNetworkId_Rococo | SubNetworkId_Custom

export interface SubNetworkId_Mainnet {
    __kind: 'Mainnet'
}

export interface SubNetworkId_Kusama {
    __kind: 'Kusama'
}

export interface SubNetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface SubNetworkId_Rococo {
    __kind: 'Rococo'
}

export interface SubNetworkId_Custom {
    __kind: 'Custom'
    value: number
}

export interface GenericCommitmentWithBlock {
    blockNumber: number
    commitment: GenericCommitment
}

export type GenericCommitment = GenericCommitment_Sub | GenericCommitment_EVM

export interface GenericCommitment_Sub {
    __kind: 'Sub'
    value: Commitment
}

export interface GenericCommitment_EVM {
    __kind: 'EVM'
    value: Type_533
}

export interface Commitment {
    messages: BridgeMessage[]
    nonce: bigint
}

export interface Type_533 {
    nonce: bigint
    totalMaxGas: bigint
    messages: Message[]
}

export interface BridgeMessage {
    payload: Uint8Array
    timepoint: GenericTimepoint
}

export interface Message {
    target: Uint8Array
    maxGas: bigint
    payload: Uint8Array
}

export type GenericTimepoint = GenericTimepoint_EVM | GenericTimepoint_Sora | GenericTimepoint_Parachain | GenericTimepoint_Pending | GenericTimepoint_Unknown

export interface GenericTimepoint_EVM {
    __kind: 'EVM'
    value: bigint
}

export interface GenericTimepoint_Sora {
    __kind: 'Sora'
    value: number
}

export interface GenericTimepoint_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface GenericTimepoint_Pending {
    __kind: 'Pending'
}

export interface GenericTimepoint_Unknown {
    __kind: 'Unknown'
}
