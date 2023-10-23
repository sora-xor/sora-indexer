import { Account } from '../model'
import { BlockContext } from '../types'
import { getUtilsLog } from './logs'

import { networkSnapshotsStorage } from './network'

export const getAccountEntity = async (ctx: BlockContext, accountAddress: string) => {
	let account = await ctx.store.get(Account, accountAddress)

	if (!account) {
		account = new Account()
		account.id = accountAddress
		account.updatedAtBlock = ctx.block.header.height
		await ctx.store.save(account)
		getUtilsLog(ctx).debug({ address: accountAddress }, 'Account created')
		await networkSnapshotsStorage.updateAccountsStats(ctx)
	}

	return account
}
