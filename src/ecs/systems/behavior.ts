import {
  type Commands,
  Entity,
  type Mut,
  type Query,
  type Without,
} from 'thyseus'

import { FIXED_STEP_MS, animations } from '../../lib/constants'
import { BehaviorLoop } from '../components/behavior-loop'
import { Moving } from '../components/moving'
import { Sprite } from '../components/sprite'
import { Standing } from '../components/standing'

export async function behaviorSystem(
  idlers: Query<
    [Entity, Mut<BehaviorLoop>, Mut<Sprite>],
    Without<Moving, Standing>
  >,
  commands: Commands,
) {
  for (const [entity, behavior, sprite] of idlers) {
    behavior.index++

    if (!behavior.current) {
      behavior.index = 0
    }

    const { action } = behavior.current

    switch (action) {
      case 'stand': {
        const { direction, time } = behavior.current

        sprite.matrix = animations[direction].idle

        commands.get(entity).add(Standing.from(direction, time / FIXED_STEP_MS))

        break
      }
      case 'walk': {
        const { direction } = behavior.current

        sprite.matrix = animations[direction].walk

        commands.get(entity).add(Moving.from(direction))

        break
      }
    }
  }
}
