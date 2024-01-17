import { Block, Call as CallType, Event as EventType, DataHandlerContext, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { Opaque } from 'type-fest'
import { callNames, eventNames } from '../consts'
import { processor } from '../processor';


type ExtractSubstrateBatchProcessorType<T> = T extends SubstrateBatchProcessor<infer U> ? U : never;

type Fields = ExtractSubstrateBatchProcessorType<typeof processor>;

export type CallName = typeof callNames[number]
export type EventName = typeof eventNames[number]

export type Call<T extends CallName> = CallType<Fields>
export type Event<T extends EventName> = EventType<Fields>
export type Entity<T extends CallName | EventName> = T extends CallName ? Call<T> : T extends EventName ? Event<T> : never

export type EntityKind = 'call' | 'event' | 'storage'

export type Context = DataHandlerContext<Store, {}>
export type BlockContext = Context & { block: Block<Fields>; now: number }

export type AssetId = Opaque<string, 'AssetId'>
export type AssetAmount = Opaque<bigint, 'AssetAmount'>

export type ReferenceSymbol = Opaque<string, 'ReferenceSymbol'>

export type Address = Opaque<string, 'Address'>
export type AddressEthereum = Opaque<string, 'AddressEthereum'>

// export type UtilityBatchAllCallVersions = [1, 3, 7, 19, 22, 23, 26, 32, 33, 35, 37, 38, 42, 43, 45, 46, 47, 50, 53]
export type UtilityBatchAllCallVersions = [33]