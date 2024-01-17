import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Asset} from "./asset.model"
import {SnapshotType} from "./_snapshotType"
import {AssetPrice} from "./_assetPrice"
import {AssetVolume} from "./_assetVolume"

@Entity_()
export class AssetSnapshot {
    constructor(props?: Partial<AssetSnapshot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    assetId!: string

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    asset!: Asset

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("varchar", {length: 7, nullable: false})
    type!: SnapshotType

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new AssetPrice(undefined, obj)}, nullable: true})
    priceUSD!: AssetPrice | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new AssetVolume(undefined, obj)}, nullable: true})
    volume!: AssetVolume | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supply!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    mint!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    burn!: bigint

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
