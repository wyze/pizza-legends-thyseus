import type { Commands, Entity, Query, Without } from 'thyseus'

import { IsLoaded } from '../components/is-loaded'
import { Sprite } from '../components/sprite'

export async function loadSpriteSystem(
  query: Query<[Entity, Sprite], Without<IsLoaded>>,
  commands: Commands,
) {
  for await (const [entity, sprite] of query) {
    await sprite.image.load()

    commands.getById(entity.id).addType(IsLoaded)
  }
}
