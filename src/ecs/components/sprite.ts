import { struct, type u8 } from 'thyseus'

import type { Matrix } from '../../lib/types'

@struct
export class Sprite {
  // Higher speed makes the animation slower
  static speed: u8 = 8
  static pixels: u8 = 32

  // Private fields
  #length: u8 = 0
  #mx: u8[] = []
  #my: u8[] = []

  current: u8 = 0
  progress: u8 = Sprite.speed

  static from(matrix: Matrix) {
    const sprite = new this()

    sprite.#length = matrix.length
    sprite.#mx = matrix.map(([x]) => x)
    sprite.#my = matrix.map(([, y]) => y)

    return sprite
  }

  get frame() {
    const x = this.#mx[this.current]
    const y = this.#my[this.current]

    return [x * Sprite.pixels, y * Sprite.pixels]
  }

  get length() {
    return this.#length
  }

  set matrix(matrix: Matrix) {
    this.#length = matrix.length
    this.#mx = matrix.map(([x]) => x)
    this.#my = matrix.map(([, y]) => y)

    // Reset since animation switched
    this.current = 0
    this.progress = Sprite.speed
  }
}
