import { struct, u8 } from 'thyseus'

enum Direction {
  Down,
  Left,
  Right,
  Up,
}

const FROM_ENUM = {
  [Direction.Down]: 'down',
  [Direction.Left]: 'left',
  [Direction.Right]: 'right',
  [Direction.Up]: 'up',
} as const

const TO_ENUM = {
  down: Direction.Down,
  left: Direction.Left,
  right: Direction.Right,
  up: Direction.Up,
}

@struct
export class Moving {
  #direction: Direction = Direction.Down
  tiles: u8 = 0

  constructor(direction: 'down' | 'left' | 'right' | 'up' = 'down', tiles = 0) {
    this.#direction = TO_ENUM[direction]
    this.tiles = tiles
  }

  get direction() {
    return FROM_ENUM[this.#direction]
  }
}
