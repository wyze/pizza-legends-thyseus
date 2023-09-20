import { type f64, struct } from 'thyseus'

@struct
export class Vector2 {
  x: f64
  y: f64

  constructor(x: f64 = 0, y: f64 = 0) {
    this.x = x
    this.y = y
  }
}
