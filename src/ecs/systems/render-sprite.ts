import { type Query, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { IsLoaded } from '../components/is-loaded'
import { Sprite } from '../components/sprite'

export function renderSpriteSystem(query: Query<Sprite, With<IsLoaded>>) {
  for (const sprite of query) {
    context.drawImage(
      sprite.image.image,
      0, // Left Cut
      0, // Top Cut
      32, // Cut width
      32, // Cut Height
      sprite.x,
      sprite.y,
      32, // Draw Width
      32, // Draw Height
    )
  }
}
