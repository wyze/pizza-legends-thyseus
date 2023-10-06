import type { Query, Res, With } from 'thyseus'

import { context } from '../../lib/canvas'
import { Image } from '../components/image'
import { IsPerson } from '../components/is-person'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { Camera } from '../resources/camera'

export function renderPersonSystem(
  query: Query<[Image, Offset, Position, Sprite], With<IsPerson>>,
  camera: Res<Camera>,
) {
  for (const [image, offset, position, sprite] of query) {
    const x = position.x + offset.x + camera.x
    const y = position.y + offset.y + camera.y
    const [frameX, frameY] = sprite.frame

    context.drawImage(
      image.value,
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
