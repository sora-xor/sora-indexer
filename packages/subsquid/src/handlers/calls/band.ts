import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets'
import { toReferenceSymbol } from '../../utils'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { BlockContext, Call } from '../../types'
import { getCallData } from '../../utils/entities'
import { calls } from '../../types/generated/merged'

export async function handleBandRateUpdate(ctx: BlockContext, call: Call<'Band.relay'>): Promise<void> {
  logStartProcessingCall(ctx, call)

  const { rates } = getCallData(ctx, calls.band.relay, call)

  for (const [ticker, rate] of rates) {
    const referenceSymbol = toReferenceSymbol(ticker)
    const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol)

    if (syntheticAssetId) {
      const u64 = rate.toString()
      const u128 = u64 + '0'.repeat(9)
      const price = formatU128ToBalance(BigInt(u128), syntheticAssetId)

      getCallHandlerLog(ctx, call).debug({ syntheticAssetId, price }, 'Synthetic asset price update')

      await assetSnapshotsStorage.updatePrice(ctx, syntheticAssetId, price)
    }
  }
}