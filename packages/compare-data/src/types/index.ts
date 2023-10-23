import { AssetSnapshot, HistoryElement } from './generated'

export type NodeScheme = (string | [string, string[]])[]
export type Node = HistoryElement | AssetSnapshot