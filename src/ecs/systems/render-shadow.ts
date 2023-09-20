import type { Mut, Query, Res, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { HasShadow } from '../components/has-shadow'
import { IsLoaded } from '../components/is-loaded'
import { Sprite } from '../components/sprite'
import { Shadow } from '../resources/shadow'

export async function renderShadowSystem(
  query: Query<Sprite, With<IsLoaded, HasShadow>>,
  shadow: Res<Mut<Shadow>>,
) {
  for (const sprite of query) {
    context.drawImage(shadow.image, sprite.x, sprite.y)
  }
}
