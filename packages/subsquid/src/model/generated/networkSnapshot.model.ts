import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {SnapshotType} from "./_snapshotType"

@Entity_()
export class NetworkSnapshot {
    constructor(props?: Partial<NetworkSnapshot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 7, nullable: false})
    type!: SnapshotType

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("int4", {nullable: false})
    accounts!: number

    @Column_("int4", {nullable: false})
    transactions!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fees!: bigint

    @Column_("text", {nullable: false})
    liquidityUSD!: string

    @Column_("text", {nullable: false})
    volumeUSD!: string

    @Column_("int4", {nullable: false})
    bridgeIncomingTransactions!: number

    @Column_("int4", {nullable: false})
    bridgeOutgoingTransactions!: number

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
