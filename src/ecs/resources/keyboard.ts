import { struct } from 'thyseus'

import { Direction } from '../components/direction'

@struct
export class Keyboard {
  #direction: Direction = Direction.from('')

  get direction() {
    return this.#direction.value
  }

  set direction(value) {
    this.#direction.value = value
  }
}
