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

export const walls = [
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [0, 8],
  [0, 9],
  [1, 3],
  [1, 10],
  [2, 3],
  [2, 10],
  [3, 3],
  [3, 10],
  [4, 3],
  [4, 10],
  [5, 3],
  [5, 11],
  [6, 4],
  [6, 10],
  [7, 3],
  [7, 6],
  [7, 7],
  [7, 10],
  [8, 4],
  [8, 6],
  [8, 7],
  [8, 10],
  [9, 3],
  [9, 10],
  [10, 3],
  [10, 10],
  [11, 4],
  [11, 5],
  [11, 6],
  [11, 7],
  [11, 8],
  [11, 9],
] as Array<[number, number]>
