import type { Commands, Entity, Query, Without } from 'thyseus'

import { Image } from '../components/image'
import { IsLoaded } from '../components/is-loaded'

export async function loadImageSystem(
  query: Query<[Entity, Image], Without<IsLoaded>>,
  commands: Commands,
) {
  for await (const [entity, image] of query) {
    await image.load()

    commands.getById(entity.id).addType(IsLoaded)
  }
}
