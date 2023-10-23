export function sortById<T extends { id: string }>(data: T[]): T[] {
	return data.sort((a: T, b: T) => {
	  	return a.id.localeCompare(b.id)
	})
}

export function sortByBlockHeight<T extends { blockHeight: bigint }>(data: T[]): T[] {
	return data.sort((a: T, b: T) => {
	  	return Number(a.blockHeight - b.blockHeight)
	})
}

export function sortByTimestamp<T extends { timestamp: number }>(data: T[]): T[] {
	return data.sort((a: T, b: T) => {
	  	return Number(a.timestamp - b.timestamp)
	})
}

export function sortByBlockHeightOrTimestamp<T extends { blockHeight: bigint } | { timestamp: number }>(data: T[]): T[] {
	return data.sort((a: T, b: T) => {
		if ('blockHeight' in a && 'blockHeight' in b) {
			return Number(a.blockHeight - b.blockHeight)
		} else if ('timestamp' in a && 'timestamp' in b) {
			return Number(a.timestamp - b.timestamp)
		}
		return 0
	})
}