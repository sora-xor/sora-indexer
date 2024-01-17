import { UpdatesStream } from '../model'
import { BlockContext } from '../types'

const PriceUpdateStreamId = 'price'
const PoolXYKApyUpdateStreamId = 'apy'
const AssetRegistrationStreamId = 'assetRegistration'

class BlockUpdatesStream {
  public readonly id!: string
  private storage!: Map<string, string>

  constructor(id: string) {
    this.id = id
    this.storage = new Map()
  }

  get hasUpdate(): boolean {
    return this.storage.size !== 0
  }

  async update(id: string, value: string) {
    this.storage.set(id, value)
  }

  async sync(ctx: BlockContext) {
    await this.syncData(ctx)
    this.clear()
  }

  private async get(ctx: BlockContext): Promise<UpdatesStream> {

    let entity = await ctx.store.get(UpdatesStream, this.id)

    if (!entity) {
      entity = new UpdatesStream()
	  entity.id = this.id
      entity.block = 0
      entity.data = ''
    }

    return entity
  }

  private async syncData(ctx: BlockContext): Promise<void> {
    const entity = await this.get(ctx)
    const updates: Record<string, string> = {}

    for (const [id, value] of this.storage.entries()) {
      updates[id] = value
    }

    entity.data = JSON.stringify(updates)
    entity.block = ctx.block.header.height

	await ctx.store.save(entity)
  }

  private clear() {
    this.storage.clear()
  }
}

export const priceUpdatesStream = new BlockUpdatesStream(PriceUpdateStreamId)
export const poolXykApyUpdatesStream = new BlockUpdatesStream(PoolXYKApyUpdateStreamId)
export const assetRegistrationStream = new BlockUpdatesStream(AssetRegistrationStreamId)