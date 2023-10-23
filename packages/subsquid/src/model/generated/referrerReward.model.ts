import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ReferrerReward {
    constructor(props?: Partial<ReferrerReward>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    referral!: string

    @Column_("text", {nullable: false})
    referrer!: string

    @Column_("int4", {nullable: false})
    updated!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
