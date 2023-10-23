import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEra} from "./stakingEra.model"
import {StakingEraValidator} from "./stakingEraValidator.model"
import {StakingEraNominator} from "./stakingEraNominator.model"

@Entity_()
export class StakingEraNomination {
    constructor(props?: Partial<StakingEraNomination>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Index_()
    @ManyToOne_(() => StakingEraValidator, {nullable: true})
    validator!: StakingEraValidator

    @Index_()
    @ManyToOne_(() => StakingEraNominator, {nullable: true})
    nominator!: StakingEraNominator
}
