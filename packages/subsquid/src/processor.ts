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
import { syncModels, updateDailyStats, updateAssetsWeeklyStats } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/prices'
import { callNames, eventNames } from './consts'
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
import { lookupArchive } from '@subsquid/archive-registry'
import { syncStreams } from './handlers/sync/streams'
import { initializeOrderBooks } from './handlers/models/initializeOrderBooks'
import {
	orderBookCreatedEventHandler,
	orderBookLimitOrderCanceledEventHandler,
	orderBookLimitOrderConvertedToMarketOrderEventHandler,
	orderBookLimitOrderExecutedEventHandler,
	orderBookLimitOrderFilledEventHandler,
	orderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEventHandler,
	orderBookLimitOrderPlacedEventHandler,
	orderBookLimitOrderUpdatedEventHandler,
	orderBookMarketOrderExecutedEventHandler,
	orderBookStatusChangedEventHandler
} from './handlers/events/orderBook'
import {
	orderBookCancelLimitOrderCallHandler,
	orderBookPlaceLimitOrderCallHandler
} from './handlers/calls/orderBook'
import { Call, Event } from './types'

export const processor = new SubstrateBatchProcessor()
	.setRpcEndpoint({
		url: chain,
		rateLimit: 10
	})
	.setTypesBundle(typesBundle as any)
	.setBlockRange({ from: startBlock })
	.setFields({
		extrinsic: {
			success: true,
			error: true,
			hash: true,
			signature: true,
		},
		block: {
			timestamp: true,
		}
	})

if (archive) {
	processor.setGateway(lookupArchive(archive, { type: 'Substrate', release: 'ArrowSquid' }))
}
 
callNames.forEach((callName) => {
	processor.addCall({ name: [callName], extrinsic: true })
})

eventNames.forEach((eventName) => {
	processor.addEvent({ name: [eventName], extrinsic: true })
})

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	ctx._chain
	const context = ctx
	
	for (let block of context.blocks) {
		let blockContext = {
			...context,
			block,
			now: performance.now(),
		}

		await initializeAssets(blockContext)
		await initializePools(blockContext)
		await initializeOrderBooks(blockContext)

		await syncPoolXykPrices(blockContext)
		await syncStreams(blockContext)
		// Once in 5 minutes
		if (block.header.height % 50 === 0) {
			await syncModels(blockContext)
		}
		// Once in 1 hour
		if (block.header.height % 600 === 0) {
			await updateDailyStats(blockContext)
		}
		// Once in 4 hours
		if (block.header.height % 2_400 === 0) {
			await updateAssetsWeeklyStats(blockContext)
		}

		type CallItem = { kind: 'call'; call: Call<any> }
		type EventItem = { kind: 'event'; event: Event<any> }
		type Item = CallItem | EventItem
		type Items = Item[]
		const sort = (items: Items): Items => {
			// Step 1: Split the array by groups with equal item.extrinsic.hash
			const groups: Item[][] = []

			items.forEach((item: Item) => {
				const hash = item.kind === 'call' ? item.call.extrinsic?.hash : item.event.extrinsic?.hash
				const lastGroup = groups[groups.length - 1]
				const lastGroupExtrinsicHash =
					lastGroup?.[0].kind === 'call' ? lastGroup[0].call.extrinsic?.hash : lastGroup?.[0].event.extrinsic?.hash
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

		// const calls = sort(block.calls.map(call => ({ kind: 'call', call }) as CallItem)) as CallItem[]
		// for (let call of calls.map(item => item.call)) {
		for (let call of block.calls) {
			if (call.name !== call.extrinsic?.call?.name) {
				continue
			}

			blockContext = {
				...context,
				block: {
					...block,
					header: call.block,
				},
				now: performance.now(),
			}

			if (call.name === 'Assets.register') await assetRegistrationCallHandler(blockContext, call)
			if (call.name === 'Assets.transfer') await assetTransferCallHandler(blockContext, call)
			if (call.name === 'LiquidityProxy.xorless_transfer') await xorlessTransferHandler(blockContext, call)
			if (call.name === 'LiquidityProxy.swap' || call.name === 'LiquidityProxy.swap_transfer')
				await swapsCallHandler(blockContext, call)
			if (call.name === 'LiquidityProxy.swap_transfer_batch') await swapTransferBatchHandler(blockContext, call)
			if (call.name === 'PoolXYK.deposit_liquidity') await liquidityDepositCallHandler(blockContext, call)
			if (call.name === 'PoolXYK.withdraw_liquidity') await liquidityRemovalCallHandler(blockContext, call)
			if (call.name === 'IrohaMigration.migrate') await irohaMigrationCallHandler(blockContext, call)
			if (call.name === 'Utility.batch_all') await batchTransactionsCallHandler(blockContext, call)
			if (call.name === 'EthBridge.transfer_to_sidechain') await soraEthTransferCallHandler(blockContext, call)
			if (
				call.name === 'PswapDistribution.claim_incentive' ||
				call.name === 'Rewards.claim' ||
				call.name === 'VestedRewards.claim_rewards' ||
				call.name === 'VestedRewards.claim_crowdloan_rewards'
			)
				await rewardsCallHandler(blockContext, call)
			if (call.name === 'Referrals.set_referrer') await setReferralCallHandler(blockContext, call)
			if (call.name === 'Referrals.reserve') await referralReserveCallHandler(blockContext, call)
			if (call.name === 'Referrals.unreserve') await referralUnreserveCallHandler(blockContext, call)
			if (call.name === 'DemeterFarmingPlatform.deposit') await demeterDepositCallHandler(blockContext, call)
			if (call.name === 'DemeterFarmingPlatform.withdraw') await demeterWithdrawCallHandler(blockContext, call)
			if (call.name === 'DemeterFarmingPlatform.get_rewards') await demeterGetRewardsCallHandler(blockContext, call)

			if (call.name === 'Staking.bond') await stakingBondCallHandler(blockContext, call)
			if (call.name === 'Staking.bond_extra') await stakingBondExtraCallHandler(blockContext, call)
			if (call.name === 'Staking.cancel_deferred_slash') await stakingCancelDeferredSlashCallHandler(blockContext, call)
			if (call.name === 'Staking.chill') await stakingChillCallHandler(blockContext, call)
			if (call.name === 'Staking.chill_other') await stakingChillOtherCallHandler(blockContext, call)
			if (call.name === 'Staking.force_apply_min_commission') await stakingForceApplyMinCommissionCallHandler(blockContext, call)
			if (call.name === 'Staking.force_new_era') await stakingForceNewEraCallHandler(blockContext, call)
			if (call.name === 'Staking.force_new_era_always') await stakingForceNewEraAlwaysCallHandler(blockContext, call)
			if (call.name === 'Staking.force_no_eras') await stakingForceNoErasCallHandler(blockContext, call)
			if (call.name === 'Staking.force_unstake') await stakingForceUnstakeCallHandler(blockContext, call)
			if (call.name === 'Staking.increase_validator_count') await stakingIncreaseValidatorCountCallHandler(blockContext, call)
			if (call.name === 'Staking.kick') await stakingKickCallHandler(blockContext, call)
			if (call.name === 'Staking.nominate') await stakingNominateCallHandler(blockContext, call)
			if (call.name === 'Staking.payout_stakers') await stakingPayoutStakersCallHandler(blockContext, call)
			if (call.name === 'Staking.reap_stash') await stakingReapStashCallHandler(blockContext, call)
			if (call.name === 'Staking.rebond') await stakingRebondCallHandler(blockContext, call)
			if (call.name === 'Staking.scale_validator_count') await stakingScaleValidatorCountCallHandler(blockContext, call)
			if (call.name === 'Staking.set_controller') await stakingSetControllerCallHandler(blockContext, call)
			if (call.name === 'Staking.set_history_depth') await stakingSetHistoryDepthCallHandler(blockContext, call)
			if (call.name === 'Staking.set_invulnerables') await stakingSetInvulnerablesCallHandler(blockContext, call)
			if (call.name === 'Staking.set_min_commission') await stakingSetMinCommissionCallHandler(blockContext, call)
			if (call.name === 'Staking.set_payee') await stakingSetPayeeCallHandler(blockContext, call)
			if (call.name === 'Staking.set_staking_configs') await stakingSetStakingConfigsCallHandler(blockContext, call)
			if (call.name === 'Staking.set_validator_count') await stakingSetValidatorCountCallHandler(blockContext, call)
			if (call.name === 'Staking.submit_election_solution') await stakingSubmitElectionSolutionCallHandler(blockContext, call)
			if (call.name === 'Staking.submit_election_solution_unsigned')
				await stakingSubmitElectionSolutionUnsignedCallHandler(blockContext, call)
			if (call.name === 'Staking.unbond') await stakingUnbondCallHandler(blockContext, call)
			if (call.name === 'Staking.validate') await stakingValidateCallHandler(blockContext, call)
			if (call.name === 'Staking.withdraw_unbonded') await stakingWithdrawUnbondedCallHandler(blockContext, call)
			if (call.name === 'OrderBook.place_limit_order') await orderBookPlaceLimitOrderCallHandler(blockContext, call)
			if (call.name === 'OrderBook.cancel_limit_order') await orderBookCancelLimitOrderCallHandler(blockContext, call)
			if (call.name === 'OrderBook.cancel_limit_orders_batch') await orderBookCancelLimitOrderCallHandler(blockContext, call)
		}

		// const events = sort(block.events.map(event => ({ kind: 'event', event }) as EventItem)) as EventItem[]
		// for (let event of events.map(item => item.event)) {
		for (let event of block.events) {
			blockContext = {
				...context,
				block: {
					...block,
					header: event.block,
				},
				now: performance.now(),
			}

			if (event.name === 'EthBridge.IncomingRequestFinalized') await ethSoraTransferEventHandler(blockContext, event)
			if (event.name === 'Tokens.Withdrawn') await tokenBurnEventHandler(blockContext, event)
			if (event.name === 'Balances.Withdraw') await xorBurnEventHandler(blockContext, event)
			if (event.name === 'Tokens.Deposited') await tokenMintEventHandler(blockContext, event)
			if (event.name === 'Balances.Deposit') await xorMintEventHandler(blockContext, event)
			if (event.name === 'XorFee.FeeWithdrawn') await networkFeeEventHandler(blockContext, event)
			if (event.name === 'XorFee.ReferrerRewarded') await referrerRewardEventHandler(blockContext, event)
			if (event.name === 'Tokens.Transfer' || event.name === 'Balances.Transfer') await transferEventHandler(blockContext, event)
			if (event.name === 'Assets.AssetRegistered') await assetRegistrationEventHandler(blockContext, event)
			if (event.name === 'XSTPool.SyntheticAssetEnabled') await syntheticAssetEnabledEventHandler(blockContext, event)
			if (event.name === 'Band.SymbolsRelayed') await bandRateUpdateEventHandler(blockContext, event)
			if (event.name === 'Staking.Rewarded') await stakingRewardedEventHandler(blockContext, event)
			if (event.name === 'Staking.StakersElected') await stakingStakersElectedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.OrderBookCreated') await orderBookCreatedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.OrderBookStatusChanged') await orderBookStatusChangedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderPlaced') await orderBookLimitOrderPlacedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderExecuted') await orderBookLimitOrderExecutedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderUpdated') await orderBookLimitOrderUpdatedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderFilled') await orderBookLimitOrderFilledEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderCanceled') await orderBookLimitOrderCanceledEventHandler(blockContext, event)
			if (event.name === 'OrderBook.MarketOrderExecuted') await orderBookMarketOrderExecutedEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderConvertedToMarketOrder') await orderBookLimitOrderConvertedToMarketOrderEventHandler(blockContext, event)
			if (event.name === 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder') await orderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEventHandler(blockContext, event)
		}
	}
})
