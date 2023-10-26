import { struct } from 'thyseus'

import type { Direction } from '../../lib/types'

@struct
export class DirectionEvent {
  #direction: string = ''

  static from(direction: Direction) {
    const event = new this()

    event.#direction = direction

    return event
  }

  get value() {
    return this.#direction as Direction
  }

  set value(direction) {
    this.#direction = direction
  }
}
