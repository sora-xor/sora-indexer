import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {StakingEraValidator} from "./stakingEraValidator.model"
import {StakingEraNominator} from "./stakingEraNominator.model"
import {PayeeType} from "./_payeeType"

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

    @Column_("varchar", {length: 10, nullable: false})
    payeeType!: PayeeType

    @Column_("text", {nullable: true})
    payee!: string | undefined | null

    @Column_("text", {nullable: true})
    controller!: string | undefined | null
}
