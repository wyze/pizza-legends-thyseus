import type { Mut, Query } from 'thyseus'

import { Sprite } from '../components/sprite'

export function spriteSystem(query: Query<Mut<Sprite>>) {
  for (const sprite of query) {
    if (sprite.progress > 0) {
      sprite.progress--
    } else {
      sprite.progress = Sprite.speed
      sprite.current++

      if (sprite.current === sprite.length) {
        sprite.current = 0
      }
    }
  }
}
