import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {OrderType} from "./_orderType"
import {OrderBook} from "./orderBook.model"
import {Account} from "./account.model"
import {OrderStatus} from "./_orderStatus"

@Entity_()
export class OrderBookOrder {
    constructor(props?: Partial<OrderBookOrder>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 6, nullable: false})
    type!: OrderType

    @Column_("int4", {nullable: true})
    orderId!: number | undefined | null

    @Index_()
    @ManyToOne_(() => OrderBook, {nullable: true})
    orderBook!: OrderBook

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("bool", {nullable: false})
    isBuy!: boolean

    @Column_("text", {nullable: false})
    amount!: string

    @Column_("text", {nullable: false})
    price!: string

    @Column_("int4", {nullable: false})
    lifetime!: number

    @Column_("int4", {nullable: false})
    expiresAt!: number

    @Column_("text", {nullable: false})
    amountFilled!: string

    @Column_("varchar", {length: 8, nullable: false})
    status!: OrderStatus

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
