import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {HistoryElement} from "./historyElement.model"

@Entity_()
export class HistoryElementCall {
    constructor(props?: Partial<HistoryElementCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => HistoryElement, {nullable: true})
    historyElement!: HistoryElement

    @Column_("text", {nullable: false})
    module!: string

    @Column_("text", {nullable: false})
    method!: string

    @Column_("jsonb", {nullable: false})
    data!: unknown

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number
}
