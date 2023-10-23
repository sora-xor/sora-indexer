import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { CallItem as SubsquidCallItem, EventItem as SubsquidEventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { Opaque } from 'type-fest'
import { calls, events } from '../consts'

type EventItemUnion<U> = U extends string ? SubsquidEventItem<U, true> : never
type CallItemUnion<U> = U extends string ? SubsquidCallItem<U, true> : never

type EventObject = EventItemUnion<(typeof events)[number]>
export type EventItemName = Exclude<EventObject['name'], '*'>
export type EventItem<T extends EventItemName> = SubsquidEventItem<T, true>
export type AnyEventItem = EventItem<EventItemName>

type CallObject = CallItemUnion<(typeof calls)[number]>
export type CallItemName = Exclude<CallObject['name'], '*'>
export type CallItem<T extends CallItemName> = SubsquidCallItem<T, true>
export type AnyCallItem = CallItem<CallItemName>

export type EntityItemName = EventItemName | CallItemName
export type EntityItem<T extends EntityItemName> = T extends EventItemName ? EventItem<T> : T extends CallItemName ? CallItem<T> : never
export type AnyEntityItem = AnyEventItem | AnyCallItem

export type Context = BatchContext<Store, EventObject | CallObject>
export type BlockHeader = SubstrateBlock
export type Block = { header: BlockHeader; items: (EventObject | CallObject)[] }
export type BlockContext = Context & { block: Block }

export type AssetId = Opaque<string, 'AssetId'>
export type AssetAmount = Opaque<bigint, 'AssetAmount'>

export type ReferenceSymbol = Opaque<string, 'ReferenceSymbol'>

export type Address = Opaque<string, 'Address'>
export type AddressEthereum = Opaque<string, 'AddressEthereum'>

// export type UtilityBatchAllCallVersions = [1, 3, 7, 19, 22, 23, 26, 32, 33, 35, 37, 38, 42, 43, 45, 46, 47, 50, 53]
export type UtilityBatchAllCallVersions = [33]
