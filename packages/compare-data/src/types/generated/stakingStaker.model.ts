import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {StakingEraValidator} from "./stakingEraValidator.model"
import {StakingEraNominator} from "./stakingEraNominator.model"

@Entity_()
export class StakingStaker {
    constructor(props?: Partial<StakingStaker>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => StakingEraValidator, e => e.staker)
    eraValidators!: StakingEraValidator[]

    @OneToMany_(() => StakingEraNominator, e => e.staker)
    eraNominators!: StakingEraNominator[]
}
