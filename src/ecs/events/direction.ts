import { struct } from 'thyseus'

import type { DirectionName } from '../../lib/types'
import { Direction } from '../components/direction'

@struct
export class DirectionEvent {
  #direction: Direction = Direction.from('')

  static from(direction: DirectionName) {
    const event = new this()

    event.#direction = Direction.from(direction)

    return event
  }

  get value() {
    return this.#direction.value
  }

  set value(direction) {
    this.#direction.value = direction
  }
}
