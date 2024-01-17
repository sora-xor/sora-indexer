export * from './generated'

export type OrderBookDeal = {
	orderId: number
	timestamp: number
	isBuy: boolean
	amount: string
	price: string
}
