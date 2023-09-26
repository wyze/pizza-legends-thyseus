import { struct, type u8 } from 'thyseus'

import { loader } from '../../lib/loader'
import { warehouse } from '../../lib/warehouse'

@struct
export class Image {
  #source: string = ''
  #warehouseId: u8 = 0

  constructor(source = '') {
    this.#source = source
  }

  async load() {
    this.#warehouseId = warehouse.store(await loader.image(this.#source))

    return this
  }

  get image() {
    return warehouse.get<HTMLImageElement>(this.#warehouseId)
  }

  update(source: string) {
    this.#source = source

    return this
  }
}
