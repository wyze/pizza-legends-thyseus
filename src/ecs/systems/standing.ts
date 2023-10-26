import { type Commands, Entity, type Mut, type Query, type Res } from 'thyseus'

import { Standing } from '../components/standing'
import { FixedTime } from '../resources/fixed-time'

export async function standingSystem(
  query: Query<[Entity, Mut<Standing>]>,
  commands: Commands,
  time: Res<FixedTime>,
) {
  for (const [entity, standing] of query) {
    standing.remaining -= time.delta

    if (standing.remaining <= 0) {
      commands.get(entity).remove(Standing)
    }
  }
}
