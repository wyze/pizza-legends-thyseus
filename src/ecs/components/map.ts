import { struct } from 'thyseus'

type Order = 'lower' | 'upper'

@struct
export class Map {
  #order: string = ''

  static from(order: Order) {
    const map = new this()

    map.#order = order

    return map
  }

  get order() {
    return this.#order as Order
  }
}
