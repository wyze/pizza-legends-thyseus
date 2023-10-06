import { struct } from 'thyseus'

import type { DirectionName } from '../../lib/types'

@struct
export class Direction {
  #value: string = ''

  static from(value: DirectionName) {
    const direction = new this()

    direction.#value = value

    return direction
  }

  get value() {
    return this.#value as DirectionName
  }

  set value(direction) {
    this.#value = direction
  }
}
