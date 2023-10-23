import { ApiPromise } from '@polkadot/api'
import { ApiDecoration } from '@polkadot/api/types'
type ApiAt = ApiDecoration<'promise'> & {
	rpc: ApiPromise['rpc']
}
declare global {
	const api: ApiAt
}
export {}
