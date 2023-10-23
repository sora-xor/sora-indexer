import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEraValidator} from "./stakingEraValidator.model"
import {StakingEraNominator} from "./stakingEraNominator.model"
import {StakingEraNomination} from "./stakingEraNomination.model"

@Entity_()
export class StakingEra {
    constructor(props?: Partial<StakingEra>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    index!: number

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    start!: bigint

    @OneToMany_(() => StakingEraValidator, e => e.era)
    validators!: StakingEraValidator[]

    @OneToMany_(() => StakingEraNominator, e => e.era)
    nominators!: StakingEraNominator[]

    @OneToMany_(() => StakingEraNomination, e => e.era)
    nominations!: StakingEraNomination[]
}
