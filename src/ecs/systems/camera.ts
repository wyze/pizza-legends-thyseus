import type { Mut, Query, Res, With } from 'thyseus'

import { IsCamera } from '../components/is-camera'
import { Position } from '../components/position'
import { Camera } from '../resources/camera'

export function cameraSystem(
  query: Query<Position, With<IsCamera>>,
  camera: Res<Mut<Camera>>,
) {
  for (const position of query) {
    camera.x = position.x
    camera.y = position.y
  }
}
