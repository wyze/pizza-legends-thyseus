import { struct } from 'thyseus'

import type { Direction } from '../../lib/types'

@struct
export class Keyboard {
  #direction: string = ''

  get direction() {
    return this.#direction as Direction
  }

  set direction(value) {
    this.#direction = value
  }
}
