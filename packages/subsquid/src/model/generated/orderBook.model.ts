import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Asset} from "./asset.model"
import {OrderBookStatus} from "./_orderBookStatus"
import {OrderBookOrder} from "./orderBookOrder.model"
import {OrderBookSnapshot} from "./orderBookSnapshot.model"

@Entity_()
export class OrderBook {
    constructor(props?: Partial<OrderBook>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    dexId!: number

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    baseAsset!: Asset

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    quoteAsset!: Asset

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    baseAssetReserves!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    quoteAssetReserves!: bigint

    @Column_("varchar", {length: 14, nullable: false})
    status!: OrderBookStatus

    @Column_("text", {nullable: true})
    price!: string | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    priceChangeDay!: number | undefined | null

    @Column_("text", {nullable: true})
    volumeDayUSD!: string | undefined | null

    @OneToMany_(() => OrderBookOrder, e => e.orderBook)
    orders!: OrderBookOrder[]

    @OneToMany_(() => OrderBookSnapshot, e => e.orderBook)
    data!: OrderBookSnapshot[]

    @Column_("text", {nullable: true})
    lastDeals!: string | undefined | null

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
