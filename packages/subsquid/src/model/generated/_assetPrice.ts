import assert from "assert"
import * as marshal from "./marshal"

export class AssetPrice {
    private _open!: string
    private _close!: string
    private _high!: string
    private _low!: string

    constructor(props?: Partial<Omit<AssetPrice, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._open = marshal.string.fromJSON(json.open)
            this._close = marshal.string.fromJSON(json.close)
            this._high = marshal.string.fromJSON(json.high)
            this._low = marshal.string.fromJSON(json.low)
        }
    }

    get open(): string {
        assert(this._open != null, 'uninitialized access')
        return this._open
    }

    set open(value: string) {
        this._open = value
    }

    get close(): string {
        assert(this._close != null, 'uninitialized access')
        return this._close
    }

    set close(value: string) {
        this._close = value
    }

    get high(): string {
        assert(this._high != null, 'uninitialized access')
        return this._high
    }

    set high(value: string) {
        this._high = value
    }

    get low(): string {
        assert(this._low != null, 'uninitialized access')
        return this._low
    }

    set low(value: string) {
        this._low = value
    }

    toJSON(): object {
        return {
            open: this.open,
            close: this.close,
            high: this.high,
            low: this.low,
        }
    }
}
