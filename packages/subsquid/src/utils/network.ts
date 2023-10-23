import BigNumber from 'bignumber.js'

import { SnapshotType, NetworkSnapshot, NetworkStats } from '../model'
import { AssetAmount, BlockContext } from '../types'
import { getSnapshotIndex } from './index'
import { formatDateTimestamp } from '.'
import { getNetworkSnapshotsStorageLog } from './logs'

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH]

const NetworkStatsId = '0'

class NetworkStatsStorage {
	private storage!: NetworkStats | null
	private id!: string

	constructor(id: string) {
		this.id = id
		this.storage = null
	}

	async sync(ctx: BlockContext): Promise<void> {
		if (this.storage) {
			getNetworkSnapshotsStorageLog(ctx).debug('Network stats sync')
			ctx.store.save(this.storage)
		}
	}

	async getStats(ctx: BlockContext): Promise<NetworkStats> {
		if (this.storage) return this.storage

		let entity = await ctx.store.get(NetworkStats, this.id)

		if (!entity) {
			entity = new NetworkStats()
			entity.id = this.id
			entity.totalFees = 0n
			entity.totalAccounts = 0
			entity.totalTransactions = 0
			entity.totalBridgeIncomingTransactions = 0
			entity.totalBridgeOutgoingTransactions = 0
		}

		this.storage = entity

		return entity
	}
}

class NetworkSnapshotsStorage {
	private storage!: Map<string, NetworkSnapshot>
	private networkStatsStorage!: NetworkStatsStorage

	constructor() {
		this.storage = new Map()
		this.networkStatsStorage = new NetworkStatsStorage(NetworkStatsId)
	}

	async sync(ctx: BlockContext): Promise<void> {
		await this.syncSnapshots(ctx)
		await this.syncStats(ctx)
	}

	private async syncStats(ctx: BlockContext): Promise<void> {
		this.networkStatsStorage.sync(ctx)
	}

	private async syncSnapshots(ctx: BlockContext): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug(`Sync ${this.storage.size} snapshots`)

		await ctx.store.save([...this.storage.values()])

		for (const snapshot of this.storage.values()) {
			const { type, timestamp } = snapshot
			const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
			const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type)

			if (currentTimestamp > timestamp) {
				this.storage.delete(snapshot.id)
			}
		}

		getNetworkSnapshotsStorageLog(ctx).debug(`${this.storage.size} snapshots in storage after sync`)
	}

	public static getId(type: SnapshotType, index: number): string {
		return [type, index].join('-')
	}

	async getSnapshot(ctx: BlockContext, type: SnapshotType): Promise<NetworkSnapshot> {
		const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
		const { index, timestamp } = getSnapshotIndex(blockTimestamp, type)
		const id = NetworkSnapshotsStorage.getId(type, index)

		let snapshot = this.storage.get(id)
		if (snapshot) {
			return snapshot
		}

		snapshot = await ctx.store.get(NetworkSnapshot, id)

		if (!snapshot) {
			snapshot = new NetworkSnapshot()
			snapshot.id = id
			snapshot.type = type
			snapshot.timestamp = timestamp
			snapshot.accounts = 0
			snapshot.transactions = 0
			snapshot.fees = 0n
			snapshot.liquidityUSD = '0'
			snapshot.volumeUSD = '0'
			snapshot.bridgeIncomingTransactions = 0
			snapshot.bridgeOutgoingTransactions = 0
		}

		this.storage.set(snapshot.id, snapshot)

		return snapshot
	}

	async updateAccountsStats(ctx: BlockContext): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug('Update accounts stats in network snapshots')
		const stats = await this.networkStatsStorage.getStats(ctx)

		stats.totalAccounts = stats.totalAccounts + 1
		stats.updatedAtBlock = ctx.block.header.height

		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.accounts = snapshot.accounts + 1
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateTransactionsStats(ctx: BlockContext): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug('Update transactions stats in network snapshots')
		const stats = await this.networkStatsStorage.getStats(ctx)

		stats.totalTransactions = stats.totalTransactions + 1
		stats.updatedAtBlock = ctx.block.header.height

		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.transactions = snapshot.transactions + 1
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateBridgeIncomingTransactionsStats(ctx: BlockContext): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug('Update bridge incoming transactions stats in network snapshots')
		const stats = await this.networkStatsStorage.getStats(ctx)

		stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1
		stats.updatedAtBlock = ctx.block.header.height

		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateBridgeOutgoingTransactionsStats(ctx: BlockContext): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug('Update bridge outgoing transactions stats in network snapshots')
		const stats = await this.networkStatsStorage.getStats(ctx)

		stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1
		stats.updatedAtBlock = ctx.block.header.height

		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateFeesStats(ctx: BlockContext, fee: AssetAmount): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug({ fee }, 'Update fee stats in network snapshots')
		const stats = await this.networkStatsStorage.getStats(ctx)

		stats.totalFees = stats.totalFees + fee
		stats.updatedAtBlock = ctx.block.header.height

		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.fees = snapshot.fees + fee
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateLiquidityStats(ctx: BlockContext, liquiditiesUSD: BigNumber): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug({ liquiditiesUSD }, 'Update liquidity stats in network snapshots')
		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.liquidityUSD = liquiditiesUSD.toFixed(2)
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}

	async updateVolumeStats(ctx: BlockContext, volumeUSD: BigNumber): Promise<void> {
		getNetworkSnapshotsStorageLog(ctx).debug({ volumeUSD }, 'Update volume stats in network snapshot')
		for (const type of NetworkSnapshots) {
			const snapshot = await this.getSnapshot(ctx, type)

			snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2)
			snapshot.updatedAtBlock = ctx.block.header.height
		}
	}
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage()
