import { struct, type u8 } from 'thyseus'

import { Direction } from '../../lib/types'
import { warehouse } from '../../lib/warehouse'

type Item =
  | { action: 'walk'; direction: Direction }
  | { action: 'stand'; direction: Direction; time: number }

@struct
export class BehaviorLoop {
  // Use max index to be reset on first loop
  index: u8 = 254

  // Private to store loop
  #warehouseId: u8 = 0

  static from(items: Item[]) {
    const behavior = new this()

    behavior.#warehouseId = warehouse.store(items)

    return behavior
  }

  get current() {
    const behaviors = warehouse.get<Item[]>(this.#warehouseId)
    const behavior = behaviors[this.index]

    return behavior
  }
}
