import { struct, type u8 } from 'thyseus'

import { Grid } from '../resources/grid'

type Direction = 'down' | 'left' | 'right' | 'up'

@struct
export class Moving {
  #direction: string = 'down'
  remaining: u8 = 0

  static from(direction: Direction) {
    const moving = new this()

    moving.#direction = direction
    moving.remaining = Grid.size

    return moving
  }

  get direction() {
    return this.#direction as Direction
  }

  set direction(direction) {
    this.#direction = direction
  }
}
