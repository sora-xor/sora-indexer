import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { assetRegistrationCallHandler } from './handlers/calls/assetRegistration'
import { batchTransactionsCallHandler } from './handlers/calls/batchTransactions'
import { demeterDepositCallHandler } from './handlers/calls/demeterDeposit'
import { demeterGetRewardsCallHandler } from './handlers/calls/demeterGetRewards'
import { demeterWithdrawCallHandler } from './handlers/calls/demeterWithdraw'
import { irohaMigrationCallHandler } from './handlers/calls/irohaMigration'
import { liquidityDepositCallHandler } from './handlers/calls/liquidityDeposit'
import { liquidityRemovalCallHandler } from './handlers/calls/liquidityRemoval'
import { referralReserveCallHandler } from './handlers/calls/referralReserve'
import { referralUnreserveCallHandler } from './handlers/calls/referralUnreserve'
import { rewardsCallHandler } from './handlers/calls/rewards'
import { setReferralCallHandler } from './handlers/calls/setReferral'
import { soraEthTransferCallHandler } from './handlers/calls/soraEthTransfer'
import { swapsCallHandler } from './handlers/calls/swaps'
import { assetTransferCallHandler, xorlessTransferHandler } from './handlers/calls/transfers'
import { ethSoraTransferEventHandler } from './handlers/events/ethSoraTransfer'
import { tokenBurnEventHandler, tokenMintEventHandler, xorBurnEventHandler, xorMintEventHandler } from './handlers/events/mintAndBurn'
import { networkFeeEventHandler } from './handlers/events/networkFee'
import { referrerRewardEventHandler } from './handlers/events/referrerReward'
import { transferEventHandler } from './handlers/events/transfer'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'
import { syncModels, updateAssetsDailyStats, updateAssetsWeeklyStats } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/prices'
import { Context } from './types'
import { calls, events } from './consts'
import { assetRegistrationEventHandler, syntheticAssetEnabledEventHandler } from './handlers/events/assetsRegistration'
import { bandRateUpdateEventHandler } from './handlers/events/band'
import { chain, archive, startBlock } from './config'
import { stakingRewardedEventHandler } from './handlers/events/rewards'
import { swapTransferBatchHandler } from './handlers/calls/swapTransferBatch'
import {
	stakingBondCallHandler,
	stakingBondExtraCallHandler,
	stakingCancelDeferredSlashCallHandler,
	stakingChillCallHandler,
	stakingChillOtherCallHandler,
	stakingForceApplyMinCommissionCallHandler,
	stakingForceNewEraCallHandler,
	stakingForceNewEraAlwaysCallHandler,
	stakingForceNoErasCallHandler,
	stakingForceUnstakeCallHandler,
	stakingIncreaseValidatorCountCallHandler,
	stakingKickCallHandler,
	stakingNominateCallHandler,
	stakingPayoutStakersCallHandler,
	stakingReapStashCallHandler,
	stakingRebondCallHandler,
	stakingScaleValidatorCountCallHandler,
	stakingSetControllerCallHandler,
	stakingSetHistoryDepthCallHandler,
	stakingSetInvulnerablesCallHandler,
	stakingSetMinCommissionCallHandler,
	stakingSetPayeeCallHandler,
	stakingSetStakingConfigsCallHandler,
	stakingSetValidatorCountCallHandler,
	stakingSubmitElectionSolutionCallHandler,
	stakingSubmitElectionSolutionUnsignedCallHandler,
	stakingUnbondCallHandler,
	stakingValidateCallHandler,
	stakingWithdrawUnbondedCallHandler,
} from './handlers/calls/staking'
import { stakingStakersElectedEventHandler } from './handlers/events/staking'
import { getLog } from './utils/logs'

const processor = new SubstrateBatchProcessor()
	.setDataSource({
		chain,
		archive,
	})
	.setTypesBundle(typesBundle as any)
	.setBlockRange({ from: startBlock })

calls.forEach((callName) => {
	processor.addCall(callName)
})

events.forEach((eventName) => {
	processor.addEvent(eventName)
})

processor.run(new TypeormDatabase(), async (ctx) => {
	const context = ctx as Context

	for (let block of context.blocks) {
		const blockContext = {
			...context,
			block,
		}

		await initializeAssets(blockContext)
		await initializePools(blockContext)

		await syncPoolXykPrices(blockContext)
		// Once in 5 minutes
		if (block.header.height % 50 === 0) {
			await syncModels(blockContext)
		}
		// Once in 1 hour
		if (block.header.height % 600 === 0) {
			await updateAssetsDailyStats(blockContext)
		}
		// Once in 4 hours
		if (block.header.height % 2_400 === 0) {
			await updateAssetsWeeklyStats(blockContext)
		}

		type Items = typeof block.items
		type Item = Items[number]

		const sort = (items: Items): Items => {
			// Step 1: Split the array by groups with equal item.extrinsic.hash
			const groups: Item[][] = []

			items.forEach((item) => {
				const hash = item.kind === 'call' ? item.extrinsic.hash : item.event.extrinsic?.hash
				const lastGroup = groups[groups.length - 1]
				const lastGroupExtrinsicHash =
					lastGroup?.[0].kind === 'call' ? lastGroup[0].extrinsic.hash : lastGroup?.[0].event.extrinsic?.hash
				if (lastGroup && lastGroupExtrinsicHash === hash) {
					lastGroup.push(item)
				} else {
					groups.push([item])
				}
			})

			// Step 2: Sort items in each group
			groups.map((group) => {
				return group.sort((a, b) => {
					if (a.kind === 'call' && b.kind !== 'call') {
						return -1 // Prioritize 'call'
					} else if (a.kind !== 'call' && b.kind === 'call') {
						return 1 // Deprioritize other kinds
					} else {
						return 0 // Keep order for items with the same kind
					}
				})
			})

			// Step 3: Join the groups in their original order
			return groups.flat(1)
		}

		// Adjusting subsequent processing to use extendedItems instead of block.items
		for (let item of sort(block.items)) {
			if (item.name === '*') {
				throw new Error(`[${block.header.height}] Unknown item: ${JSON.stringify(item)}`)
			}

			if (item.kind === 'call' && item.name === item.extrinsic.call.name) {
				if (item.name === 'Assets.register') await assetRegistrationCallHandler(blockContext, item)
				if (item.name === 'Assets.transfer') await assetTransferCallHandler(blockContext, item)
				if (item.name === 'LiquidityProxy.xorless_transfer') await xorlessTransferHandler(blockContext, item)
				if (item.name === 'LiquidityProxy.swap' || item.name === 'LiquidityProxy.swap_transfer')
					await swapsCallHandler(blockContext, item)
				if (item.name === 'LiquidityProxy.swap_transfer_batch') await swapTransferBatchHandler(blockContext, item)
				if (item.name === 'PoolXYK.deposit_liquidity') await liquidityDepositCallHandler(blockContext, item)
				if (item.name === 'PoolXYK.withdraw_liquidity') await liquidityRemovalCallHandler(blockContext, item)
				if (item.name === 'IrohaMigration.migrate') await irohaMigrationCallHandler(blockContext, item)
				if (item.name === 'Utility.batch_all') await batchTransactionsCallHandler(blockContext, item)
				if (item.name === 'EthBridge.transfer_to_sidechain') await soraEthTransferCallHandler(blockContext, item)
				if (
					item.name === 'PswapDistribution.claim_incentive' ||
					item.name === 'Rewards.claim' ||
					item.name === 'VestedRewards.claim_rewards' ||
					item.name === 'VestedRewards.claim_crowdloan_rewards'
				)
					await rewardsCallHandler(blockContext, item)
				if (item.name === 'Referrals.set_referrer') await setReferralCallHandler(blockContext, item)
				if (item.name === 'Referrals.reserve') await referralReserveCallHandler(blockContext, item)
				if (item.name === 'Referrals.unreserve') await referralUnreserveCallHandler(blockContext, item)
				if (item.name === 'DemeterFarmingPlatform.deposit') await demeterDepositCallHandler(blockContext, item)
				if (item.name === 'DemeterFarmingPlatform.withdraw') await demeterWithdrawCallHandler(blockContext, item)
				if (item.name === 'DemeterFarmingPlatform.get_rewards') await demeterGetRewardsCallHandler(blockContext, item)

				if (item.name === 'Staking.bond') await stakingBondCallHandler(blockContext, item)
				if (item.name === 'Staking.bond_extra') await stakingBondExtraCallHandler(blockContext, item)
				if (item.name === 'Staking.cancel_deferred_slash') await stakingCancelDeferredSlashCallHandler(blockContext, item)
				if (item.name === 'Staking.chill') await stakingChillCallHandler(blockContext, item)
				if (item.name === 'Staking.chill_other') await stakingChillOtherCallHandler(blockContext, item)
				if (item.name === 'Staking.force_apply_min_commission') await stakingForceApplyMinCommissionCallHandler(blockContext, item)
				if (item.name === 'Staking.force_new_era') await stakingForceNewEraCallHandler(blockContext, item)
				if (item.name === 'Staking.force_new_era_always') await stakingForceNewEraAlwaysCallHandler(blockContext, item)
				if (item.name === 'Staking.force_no_eras') await stakingForceNoErasCallHandler(blockContext, item)
				if (item.name === 'Staking.force_unstake') await stakingForceUnstakeCallHandler(blockContext, item)
				if (item.name === 'Staking.increase_validator_count') await stakingIncreaseValidatorCountCallHandler(blockContext, item)
				if (item.name === 'Staking.kick') await stakingKickCallHandler(blockContext, item)
				if (item.name === 'Staking.nominate') await stakingNominateCallHandler(blockContext, item)
				if (item.name === 'Staking.payout_stakers') await stakingPayoutStakersCallHandler(blockContext, item)
				if (item.name === 'Staking.reap_stash') await stakingReapStashCallHandler(blockContext, item)
				if (item.name === 'Staking.rebond') await stakingRebondCallHandler(blockContext, item)
				if (item.name === 'Staking.scale_validator_count') await stakingScaleValidatorCountCallHandler(blockContext, item)
				if (item.name === 'Staking.set_controller') await stakingSetControllerCallHandler(blockContext, item)
				if (item.name === 'Staking.set_history_depth') await stakingSetHistoryDepthCallHandler(blockContext, item)
				if (item.name === 'Staking.set_invulnerables') await stakingSetInvulnerablesCallHandler(blockContext, item)
				if (item.name === 'Staking.set_min_commission') await stakingSetMinCommissionCallHandler(blockContext, item)
				if (item.name === 'Staking.set_payee') await stakingSetPayeeCallHandler(blockContext, item)
				if (item.name === 'Staking.set_staking_configs') await stakingSetStakingConfigsCallHandler(blockContext, item)
				if (item.name === 'Staking.set_validator_count') await stakingSetValidatorCountCallHandler(blockContext, item)
				if (item.name === 'Staking.submit_election_solution') await stakingSubmitElectionSolutionCallHandler(blockContext, item)
				if (item.name === 'Staking.submit_election_solution_unsigned')
					await stakingSubmitElectionSolutionUnsignedCallHandler(blockContext, item)
				if (item.name === 'Staking.unbond') await stakingUnbondCallHandler(blockContext, item)
				if (item.name === 'Staking.validate') await stakingValidateCallHandler(blockContext, item)
				if (item.name === 'Staking.withdraw_unbonded') await stakingWithdrawUnbondedCallHandler(blockContext, item)
			}

			if (item.kind === 'event') {
				if (item.name === 'EthBridge.IncomingRequestFinalized') await ethSoraTransferEventHandler(blockContext, item)
				if (item.name === 'Tokens.Withdrawn') await tokenBurnEventHandler(blockContext, item)
				if (item.name === 'Balances.Withdraw') await xorBurnEventHandler(blockContext, item)
				if (item.name === 'Tokens.Deposited') await tokenMintEventHandler(blockContext, item)
				if (item.name === 'Balances.Deposit') await xorMintEventHandler(blockContext, item)
				if (item.name === 'XorFee.FeeWithdrawn') await networkFeeEventHandler(blockContext, item)
				if (item.name === 'XorFee.ReferrerRewarded') await referrerRewardEventHandler(blockContext, item)
				if (item.name === 'Tokens.Transfer' || item.name === 'Balances.Transfer') await transferEventHandler(blockContext, item)
				if (item.name === 'Assets.AssetRegistered') await assetRegistrationEventHandler(blockContext, item)
				if (item.name === 'XSTPool.SyntheticAssetEnabled') await syntheticAssetEnabledEventHandler(blockContext, item)
				if (item.name === 'Band.SymbolsRelayed') await bandRateUpdateEventHandler(blockContext, item)
				if (item.name === 'Staking.Rewarded') await stakingRewardedEventHandler(blockContext, item)
				if (item.name === 'Staking.StakersElected') await stakingStakersElectedEventHandler(blockContext, item)
			}
		}
	}
})
