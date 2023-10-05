import { Entity, type Query, type Res, type With } from 'thyseus'

import { context } from '../../lib/canvas'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { IsPerson } from '../components/is-person'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { Shadow } from '../resources/shadow'

export function renderPersonSystem(
  personQuery: Query<[Entity, Image, Offset, Position, Sprite], With<IsPerson>>,
  shadowQuery: Query<Entity, With<HasShadow>>,
  shadow: Res<Shadow>,
) {
  for (const [entity, image, offset, position, sprite] of personQuery) {
    const x = position.x + offset.x
    const y = position.y + offset.y

    for (const shadowEntity of shadowQuery) {
      if (entity.id !== shadowEntity.id) {
        continue
      }

      context.drawImage(shadow.image, x, y)
    }

    const [frameX, frameY] = sprite.frame

    context.drawImage(
      image.image,
      frameX, // Left Cut
      frameY, // Top Cut
      Sprite.pixels, // Cut width
      Sprite.pixels, // Cut Height
      x,
      y,
      Sprite.pixels, // Draw Width
      Sprite.pixels, // Draw Height
    )
  }
}
