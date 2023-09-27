import type { Mut, Query, Res, With } from 'thyseus'

import { Position } from '../components/position'
import { UsesGrid } from '../components/uses-grid'
import { Grid } from '../resources/grid'

export function applyGridSystem(
  query: Query<Mut<Position>, With<UsesGrid>>,
  grid: Res<Grid>,
) {
  for (const position of query) {
    position.x *= grid.size
    position.y *= grid.size
  }
}
