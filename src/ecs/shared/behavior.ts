import { struct, type u16 } from 'thyseus'

import { Direction } from '../../lib/types'
import { Grid } from '../resources/grid'

@struct
export class Behavior {
  #direction: string = ''

  remaining: u16 = 0

  static from(direction: Direction, remaining = Grid.pixels) {
    return Object.assign(new this(), { direction, remaining })
  }

  get direction() {
    return this.#direction as Direction
  }

  set direction(value) {
    this.#direction = value
  }
}
