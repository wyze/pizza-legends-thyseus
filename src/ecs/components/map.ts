import { struct } from 'thyseus'

enum Order {
  Initial,
  Lower,
  Upper,
}

@struct
export class Map {
  #order: Order

  constructor(order = Order.Initial) {
    this.#order = order
  }

  static lower() {
    return new Map(Order.Lower)
  }

  static upper() {
    return new Map(Order.Upper)
  }

  isLower() {
    return this.#order === Order.Lower
  }

  isUpper() {
    return this.#order === Order.Upper
  }
}
