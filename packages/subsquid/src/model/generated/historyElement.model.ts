import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {HistoryElementType} from "./_historyElementType"
import {ExecutionResult} from "./_executionResult"
import {HistoryElementCall} from "./historyElementCall.model"

@Entity_()
export class HistoryElement {
    constructor(props?: Partial<HistoryElement>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 5, nullable: false})
    type!: HistoryElementType

    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("text", {nullable: false})
    module!: string

    @Column_("text", {nullable: false})
    method!: string

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Column_("text", {nullable: true})
    networkFee!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new ExecutionResult(undefined, obj)}, nullable: false})
    execution!: ExecutionResult

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("jsonb", {nullable: true})
    data!: unknown | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    dataTo!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    dataFrom!: string | undefined | null

    @OneToMany_(() => HistoryElementCall, e => e.historyElement)
    calls!: HistoryElementCall[]

    @Column_("text", {array: true, nullable: false})
    callNames!: (string | undefined | null)[]

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
