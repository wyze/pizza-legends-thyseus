import { struct, type u8 } from 'thyseus'

type Direction = 'down' | 'left' | 'right' | 'up'

@struct
export class Moving {
  #direction: string = 'down'
  remaining: u8 = 0

  constructor(direction: Direction = 'down', remaining = 0) {
    this.#direction = direction
    this.remaining = remaining
  }

  get direction() {
    return this.#direction as Direction
  }

  set direction(direction) {
    this.#direction = direction
  }
}
