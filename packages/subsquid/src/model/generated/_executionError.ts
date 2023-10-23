import assert from "assert"
import * as marshal from "./marshal"

export class ExecutionError {
    private _moduleErrorId!: number | undefined | null
    private _moduleErrorIndex!: number | undefined | null
    private _nonModuleErrorMessage!: string | undefined | null

    constructor(props?: Partial<Omit<ExecutionError, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._moduleErrorId = json.moduleErrorId == null ? undefined : marshal.int.fromJSON(json.moduleErrorId)
            this._moduleErrorIndex = json.moduleErrorIndex == null ? undefined : marshal.int.fromJSON(json.moduleErrorIndex)
            this._nonModuleErrorMessage = json.nonModuleErrorMessage == null ? undefined : marshal.string.fromJSON(json.nonModuleErrorMessage)
        }
    }

    get moduleErrorId(): number | undefined | null {
        return this._moduleErrorId
    }

    set moduleErrorId(value: number | undefined | null) {
        this._moduleErrorId = value
    }

    get moduleErrorIndex(): number | undefined | null {
        return this._moduleErrorIndex
    }

    set moduleErrorIndex(value: number | undefined | null) {
        this._moduleErrorIndex = value
    }

    get nonModuleErrorMessage(): string | undefined | null {
        return this._nonModuleErrorMessage
    }

    set nonModuleErrorMessage(value: string | undefined | null) {
        this._nonModuleErrorMessage = value
    }

    toJSON(): object {
        return {
            moduleErrorId: this.moduleErrorId,
            moduleErrorIndex: this.moduleErrorIndex,
            nonModuleErrorMessage: this.nonModuleErrorMessage,
        }
    }
}
