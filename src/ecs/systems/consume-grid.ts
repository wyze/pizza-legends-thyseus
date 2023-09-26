import { Commands, Entity, type Mut, type Query } from 'thyseus'

import { Grid } from '../components/grid'
import { Position } from '../components/position'

export function consumeGridSystem(
  query: Query<[Entity, Grid, Mut<Position>]>,
  commands: Commands,
) {
  for (const [entity, grid, position] of query) {
    position.x *= grid.size
    position.y *= grid.size

    commands.get(entity).remove(Grid)
  }
}
