import { assetRegistrationStream, priceUpdatesStream, poolXykApyUpdatesStream } from '../../utils/stream'
import { getStreamLog } from '../../utils/logs'
import { BlockContext } from '../../types'

const streams = [assetRegistrationStream, priceUpdatesStream, poolXykApyUpdatesStream]

export async function syncStreams(ctx: BlockContext) {
  for (const stream of streams) {
    if (stream.hasUpdate) {
      await stream.sync(ctx)
      getStreamLog(ctx).debug(`"${stream.id}" stream updated`)
    }
  }
}