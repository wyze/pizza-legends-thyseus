import type { Matrix } from './types'

type Animations = Record<
  'down' | 'left' | 'right' | 'up',
  Record<'idle' | 'walk', Matrix>
>

export const animations: Animations = {
  down: {
    idle: [[0, 0]],
    walk: [
      [1, 0],
      [0, 0],
      [3, 0],
      [0, 0],
    ],
  },
  left: {
    idle: [[0, 3]],
    walk: [
      [1, 3],
      [0, 3],
      [3, 3],
      [0, 3],
    ],
  },
  right: {
    idle: [[0, 1]],
    walk: [
      [1, 1],
      [0, 1],
      [3, 1],
      [0, 1],
    ],
  },
  up: {
    idle: [[0, 2]],
    walk: [
      [1, 2],
      [0, 2],
      [3, 2],
      [0, 2],
    ],
  },
}
