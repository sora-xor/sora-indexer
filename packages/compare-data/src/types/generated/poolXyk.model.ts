import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Asset} from "./asset.model"

@Entity_()
export class PoolXYK {
    constructor(props?: Partial<PoolXYK>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    baseAsset!: Asset

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    targetAsset!: Asset

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    baseAssetReserves!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    targetAssetReserves!: bigint

    @Column_("int4", {nullable: false})
    multiplier!: number

    @Column_("text", {nullable: true})
    priceUSD!: string | undefined | null

    @Column_("text", {nullable: true})
    strategicBonusApy!: string | undefined | null

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
