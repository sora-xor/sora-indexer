import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {StakingStaker} from "./stakingStaker.model"
import {StakingEra} from "./stakingEra.model"

@Entity_()
export class StakingReward {
    constructor(props?: Partial<StakingReward>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    account!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Index_()
    @ManyToOne_(() => StakingStaker, {nullable: true})
    staker!: StakingStaker

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Column_("int4", {nullable: false})
    timestamp!: number
}
