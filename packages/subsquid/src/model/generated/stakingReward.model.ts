import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {StakingStaker} from "./stakingStaker.model"
import {PayeeType} from "./_payeeType"
import {StakingEra} from "./stakingEra.model"

@Entity_()
export class StakingReward {
    constructor(props?: Partial<StakingReward>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    amount!: string

    @Index_()
    @ManyToOne_(() => StakingStaker, {nullable: true})
    staker!: StakingStaker

    @Column_("varchar", {length: 10, nullable: false})
    payeeType!: PayeeType

    @Index_()
    @Column_("text", {nullable: true})
    payee!: string | undefined | null

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Column_("int4", {nullable: false})
    timestamp!: number
}
