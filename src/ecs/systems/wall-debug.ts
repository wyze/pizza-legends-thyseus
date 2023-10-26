import { type Query, type Res, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { IsWall } from '../components/is-wall'
import { Position } from '../components/position'
import { Camera } from '../resources/camera'
import { Grid } from '../resources/grid'

export function wallDebugSystem(
  query: Query<Position, With<IsWall>>,
  camera: Res<Camera>,
) {
  if (document.location.search !== '?debug') {
    return
  }

  for (const position of query) {
    context.fillStyle = 'rgba(255, 0, 0, 0.3)'
    context.fillRect(
      position.x + camera.x,
      position.y + camera.y,
      Grid.pixels,
      Grid.pixels,
    )
  }
}
