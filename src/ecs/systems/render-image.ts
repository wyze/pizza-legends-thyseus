import type { Query, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { Image } from '../components/image'
import { IsLoaded } from '../components/is-loaded'
import { Position } from '../components/position'

export function renderImageSystem(
  query: Query<[Position, Image], With<IsLoaded>>,
) {
  for (const [position, image] of query) {
    const { x, y } = position

    context.drawImage(image.image, x, y)
  }
}
