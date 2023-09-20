import { struct, type u8 } from 'thyseus'

import { loader } from '../../lib/loader'
import { warehouse } from '../../lib/warehouse'

@struct
export class Image {
  #source: string
  #warehouseId: u8 = 0

  constructor(source: string = '') {
    this.#source = source
  }

  async load() {
    this.#warehouseId = warehouse.store(await loader.image(this.#source))
  }

  get image() {
    return warehouse.get<HTMLImageElement>(this.#warehouseId)
  }

  get loaded() {
    return this.#warehouseId > 0
  }

  protected update(source: string) {
    this.#source = source
  }
}
