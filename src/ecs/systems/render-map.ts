import type { Query, Res } from 'thyseus'

import { context } from '../../lib/canvas'
import { Image } from '../components/image'
import { Map } from '../components/map'
import { Position } from '../components/position'
import { Camera } from '../resources/camera'

export function renderLowerMapSystem(
  query: Query<[Map, Image, Position]>,
  camera: Res<Camera>,
) {
  for (const [map, image, position] of query) {
    if (map.order === 'lower') {
      context.drawImage(
        image.value,
        position.x + camera.x,
        position.y + camera.y,
      )
    }
  }
}

export function renderUpperMapSystem(
  query: Query<[Map, Image, Position]>,
  camera: Res<Camera>,
) {
  for (const [map, image, position] of query) {
    if (map.order === 'upper') {
      context.drawImage(
        image.value,
        position.x + camera.x,
        position.y + camera.y,
      )
    }
  }
}
