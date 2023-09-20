import { struct, type u8 } from 'thyseus'

import { Image } from './image'
import { Position } from './position'
import { Vector2 } from './vector-2'

@struct
export class Sprite {
  grid: u8
  image: Image = new Image()
  offset: Vector2 = new Vector2()
  position: Position = new Position()

  constructor({
    grid = 1,
    image = new Image(),
    offset = new Vector2(),
    position = new Position(),
  }: Partial<{
    grid: u8
    image: Image
    offset: Vector2
    position: Position
  }> = {}) {
    this.grid = grid
    this.image = image
    this.offset = offset
    this.position = position
  }

  get x() {
    return this.position.x * this.grid - this.offset.x
  }

  get y() {
    return this.position.y * this.grid - this.offset.y
  }
}
