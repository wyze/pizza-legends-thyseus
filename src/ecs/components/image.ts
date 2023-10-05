import { struct, type u8 } from 'thyseus'

import { loader } from '../../lib/loader'
import { warehouse } from '../../lib/warehouse'

@struct
export class Image {
  #warehouseId: u8 = 0

  static async from(source: string) {
    const image = new this()

    image.#warehouseId = warehouse.store(await loader.image(source))

    return image
  }

  get value() {
    return warehouse.get<HTMLImageElement>(this.#warehouseId)
  }
}
