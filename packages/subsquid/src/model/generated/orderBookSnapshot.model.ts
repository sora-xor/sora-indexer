import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {OrderBook} from "./orderBook.model"
import {SnapshotType} from "./_snapshotType"
import {AssetPrice} from "./_assetPrice"

@Entity_()
export class OrderBookSnapshot {
    constructor(props?: Partial<OrderBookSnapshot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => OrderBook, {nullable: true})
    orderBook!: OrderBook

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("varchar", {length: 7, nullable: false})
    type!: SnapshotType

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new AssetPrice(undefined, obj)}, nullable: false})
    price!: AssetPrice

    @Column_("text", {nullable: false})
    baseAssetVolume!: string

    @Column_("text", {nullable: false})
    quoteAssetVolume!: string

    @Column_("text", {nullable: false})
    volumeUSD!: string

    @Column_("text", {nullable: false})
    liquidityUSD!: string
}
