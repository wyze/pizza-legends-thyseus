import { struct, type u8 } from 'thyseus'

import type { Matrix } from '../../lib/types'

@struct
export class Sprite {
  // Higher speed makes the animation slower
  static speed: u8 = 8
  static pixels: u8 = 32

  current: u8 = 0
  frames: u8 = 0
  mx: u8[] = []
  my: u8[] = []
  progress: u8 = Sprite.speed

  static withMatrix(matrix: Matrix) {
    const sprite = new this()

    sprite.frames = matrix.length
    sprite.mx = matrix.map(([x]) => x)
    sprite.my = matrix.map(([, y]) => y)

    return sprite
  }

  get frame() {
    const x = this.mx[this.current]
    const y = this.my[this.current]

    return [x * Sprite.pixels, y * Sprite.pixels]
  }

  set matrix(matrix: Matrix) {
    this.frames = matrix.length
    this.mx = matrix.map(([x]) => x)
    this.my = matrix.map(([, y]) => y)

    // Reset since animation switched
    this.current = 0
    this.progress = Sprite.speed
  }
}
