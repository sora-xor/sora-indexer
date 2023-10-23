import assert from "assert"
import * as marshal from "./marshal"
import {ExecutionError} from "./_executionError"

export class ExecutionResult {
    private _success!: boolean
    private _error!: ExecutionError | undefined | null

    constructor(props?: Partial<Omit<ExecutionResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._success = marshal.boolean.fromJSON(json.success)
            this._error = json.error == null ? undefined : new ExecutionError(undefined, json.error)
        }
    }

    get success(): boolean {
        assert(this._success != null, 'uninitialized access')
        return this._success
    }

    set success(value: boolean) {
        this._success = value
    }

    get error(): ExecutionError | undefined | null {
        return this._error
    }

    set error(value: ExecutionError | undefined | null) {
        this._error = value
    }

    toJSON(): object {
        return {
            success: this.success,
            error: this.error == null ? undefined : this.error.toJSON(),
        }
    }
}
