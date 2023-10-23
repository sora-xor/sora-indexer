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

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    liquidity!: bigint

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
