import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEra} from "./stakingEra.model"
import {StakingValidator} from "./stakingValidator.model"
import {StakingEraNomination} from "./stakingEraNomination.model"
import {StakingStaker} from "./stakingStaker.model"

@Entity_()
export class StakingEraValidator {
    constructor(props?: Partial<StakingEraValidator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Index_()
    @ManyToOne_(() => StakingValidator, {nullable: true})
    validator!: StakingValidator

    @OneToMany_(() => StakingEraNomination, e => e.validator)
    nominations!: StakingEraNomination[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    ownBond!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalBond!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rewardAmount!: bigint

    @Index_()
    @ManyToOne_(() => StakingStaker, {nullable: true})
    staker!: StakingStaker
}
