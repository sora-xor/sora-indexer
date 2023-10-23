import assert from "assert"
import * as marshal from "./marshal"

export class AssetVolume {
    private _amount!: string
    private _amountUSD!: string

    constructor(props?: Partial<Omit<AssetVolume, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.string.fromJSON(json.amount)
            this._amountUSD = marshal.string.fromJSON(json.amountUSD)
        }
    }

    get amount(): string {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: string) {
        this._amount = value
    }

    get amountUSD(): string {
        assert(this._amountUSD != null, 'uninitialized access')
        return this._amountUSD
    }

    set amountUSD(value: string) {
        this._amountUSD = value
    }

    toJSON(): object {
        return {
            amount: this.amount,
            amountUSD: this.amountUSD,
        }
    }
}
