import { Query, Res, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { HasShadow } from '../components/has-shadow'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Shadow } from '../resources/shadow'

export function renderShadowSystem(
  query: Query<[Offset, Position], With<HasShadow>>,
  shadow: Res<Shadow>,
) {
  for (const [offset, position] of query) {
    const x = position.x + offset.x
    const y = position.y + offset.y

    context.drawImage(shadow.image, x, y)
  }
}
