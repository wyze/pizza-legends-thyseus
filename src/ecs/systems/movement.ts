import { type Commands, Entity, type Mut, type Query } from 'thyseus'

import { animations } from '../../lib/constants'
import { Moving } from '../components/moving'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'

export function movementSystem(
  query: Query<[Entity, Mut<Moving>, Mut<Position>]>,
  spriteQuery: Query<[Moving, Mut<Sprite>]>,
  commands: Commands,
) {
  for (const [moving, sprite] of spriteQuery) {
    if (moving.remaining === 0) {
      sprite.matrix = animations[moving.direction].idle
    }
  }

  for (const [entity, moving, position] of query) {
    if (moving.remaining === 0) {
      commands.get(entity).remove(Moving)

      continue
    }

    switch (moving.direction) {
      case 'down':
        position.y++

        break
      case 'left':
        position.x--

        break
      case 'right':
        position.x++

        break
      case 'up':
        position.y--

        break
    }

    moving.remaining--
  }
}
