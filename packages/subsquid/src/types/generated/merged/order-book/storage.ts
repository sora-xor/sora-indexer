import * as stageStorage from '../../stage/order-book/storage'
import * as testStorage from '../../test/order-book/storage'
import * as devStorage from '../../dev/order-book/storage'


export const orderBooks = {
	name: '',
	v69Stage: stageStorage.orderBooks['v69'],
	v69Test: testStorage.orderBooks['v69'],
	v70Dev: devStorage.orderBooks['v70'],
}

export const limitOrders = {
	name: '',
	v69Stage: stageStorage.limitOrders['v69'],
	v69Test: testStorage.limitOrders['v69'],
	v70Dev: devStorage.limitOrders['v70'],
}

export const bids = {
	name: '',
	v69Stage: stageStorage.bids['v69'],
	v69Test: testStorage.bids['v69'],
	v70Dev: devStorage.bids['v70'],
}

export const asks = {
	name: '',
	v69Stage: stageStorage.asks['v69'],
	v69Test: testStorage.asks['v69'],
	v70Dev: devStorage.asks['v70'],
}

export const aggregatedBids = {
	name: '',
	v69Stage: stageStorage.aggregatedBids['v69'],
	v69Test: testStorage.aggregatedBids['v69'],
	v70Dev: devStorage.aggregatedBids['v70'],
}

export const aggregatedAsks = {
	name: '',
	v69Stage: stageStorage.aggregatedAsks['v69'],
	v69Test: testStorage.aggregatedAsks['v69'],
	v70Dev: devStorage.aggregatedAsks['v70'],
}

export const userLimitOrders = {
	name: '',
	v69Stage: stageStorage.userLimitOrders['v69'],
	v69Test: testStorage.userLimitOrders['v69'],
	v70Dev: devStorage.userLimitOrders['v70'],
}

export const expirationsAgenda = {
	name: '',
	v69Stage: stageStorage.expirationsAgenda['v69'],
	v69Test: testStorage.expirationsAgenda['v69'],
	v70Dev: devStorage.expirationsAgenda['v70'],
}

export const alignmentCursor = {
	name: '',
	v69Stage: stageStorage.alignmentCursor['v69'],
	v69Test: testStorage.alignmentCursor['v69'],
	v70Dev: devStorage.alignmentCursor['v70'],
}

export const incompleteExpirationsSince = {
	name: '',
	v69Stage: stageStorage.incompleteExpirationsSince['v69'],
	v69Test: testStorage.incompleteExpirationsSince['v69'],
	v70Dev: devStorage.incompleteExpirationsSince['v70'],
}
