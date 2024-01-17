import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AssetSnapshot} from "./assetSnapshot.model"
import {PoolXYK} from "./poolXyk.model"

@Entity_()
export class Asset {
    constructor(props?: Partial<Asset>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => AssetSnapshot, e => e.asset)
    data!: AssetSnapshot[]

    @OneToMany_(() => PoolXYK, e => e.targetAsset)
    poolXYK!: PoolXYK[]

    @Column_("text", {nullable: false})
    priceUSD!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supply!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    liquidity!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    liquidityBooks!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    priceChangeDay!: number | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    priceChangeWeek!: number | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    volumeDayUSD!: number | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    volumeWeekUSD!: number | undefined | null

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: true})
    velocity!: number | undefined | null

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
