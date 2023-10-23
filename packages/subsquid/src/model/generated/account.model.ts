import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {HistoryElement} from "./historyElement.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => HistoryElement, {nullable: true})
    latestHistoryElement!: HistoryElement | undefined | null

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
