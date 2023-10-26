import { struct } from 'thyseus'

import type * as Types from '../../lib/types'

@struct
export class Direction {
  #direction: string = ''

  static from(direction: Types.Direction) {
    const event = new this()

    event.#direction = direction

    return event
  }

  get direction() {
    return this.#direction as Types.Direction
  }

  set direction(direction) {
    this.#direction = direction
  }
}
