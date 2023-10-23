import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NetworkStats {
    constructor(props?: Partial<NetworkStats>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalFees!: bigint

    @Column_("int4", {nullable: false})
    totalAccounts!: number

    @Column_("int4", {nullable: false})
    totalTransactions!: number

    @Column_("int4", {nullable: false})
    totalBridgeIncomingTransactions!: number

    @Column_("int4", {nullable: false})
    totalBridgeOutgoingTransactions!: number

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
