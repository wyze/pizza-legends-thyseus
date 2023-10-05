import { type f64, struct } from 'thyseus'

@struct
export class Vector2 {
  x: f64 = 0
  y: f64 = 0

  static from(x: f64, y: f64): Vector2 {
    return Object.assign(new this(), { x, y })
  }

  get values() {
    return [this.x, this.y] as const
  }
}
