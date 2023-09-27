import { type Commands, Entity, type Mut, type Query } from 'thyseus'

import { Moving } from '../components/moving'
import { Position } from '../components/position'

export function movementSystem(
  query: Query<[Entity, Mut<Moving>, Mut<Position>]>,
  commands: Commands,
) {
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
