import { Entity, type Query, type Res, type With } from 'thyseus'

import { context } from '../../lib/canvas'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { IsPerson } from '../components/is-person'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Shadow } from '../resources/shadow'

export function renderPersonSystem(
  personQuery: Query<[Entity, Image, Offset, Position], With<IsPerson>>,
  shadowQuery: Query<Entity, With<HasShadow>>,
  shadow: Res<Shadow>,
) {
  for (const [entity, image, offset, position] of personQuery) {
    const x = position.x + offset.x
    const y = position.y + offset.y

    for (const shadowEntity of shadowQuery) {
      if (entity.id !== shadowEntity.id) {
        continue
      }

      context.drawImage(shadow.image, x, y)
    }

    context.drawImage(
      image.image,
      0, // Left Cut
      0, // Top Cut
      32, // Cut width
      32, // Cut Height
      x,
      y,
      32, // Draw Width
      32, // Draw Height
    )
  }
}
