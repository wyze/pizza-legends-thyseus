import { type f64, struct } from 'thyseus'

import { Grid } from './grid'

const CENTER_X = Grid.pixels * 10.5
const CENTER_Y = Grid.pixels * 6

@struct
export class Camera {
  #x: f64 = CENTER_X
  #y: f64 = CENTER_Y

  get x() {
    return this.#x
  }

  set x(x) {
    this.#x = CENTER_X - x
  }

  get y() {
    return this.#y
  }

  set y(y) {
    this.#y = CENTER_Y - y
  }
}
