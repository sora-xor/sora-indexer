import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEra} from "./stakingEra.model"
import {StakingStaker} from "./stakingStaker.model"
import {StakingEraNomination} from "./stakingEraNomination.model"

@Entity_()
export class StakingEraNominator {
    constructor(props?: Partial<StakingEraNominator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bond!: bigint

    @Index_()
    @ManyToOne_(() => StakingStaker, {nullable: true})
    staker!: StakingStaker

    @OneToMany_(() => StakingEraNomination, e => e.nominator)
    nominations!: StakingEraNomination[]
}
