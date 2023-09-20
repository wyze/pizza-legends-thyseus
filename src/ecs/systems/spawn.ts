import type { Commands, Res } from 'thyseus'

import hero from '../../images/characters/people/hero.png'
import npc1 from '../../images/characters/people/npc1.png'
import shadowImage from '../../images/characters/shadow.png'
import demoLower from '../../images/maps/DemoLower.png'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { Vector2 } from '../components/vector-2'
import { Shadow } from '../resources/shadow'

export async function spawnSystem(commands: Commands, shadow: Res<Shadow>) {
  // Shadow resource
  await shadow.update(shadowImage).load()

  // Map
  commands.spawn().addType(Position).add(new Image(demoLower))

  // Hero
  commands
    .spawn()
    .addType(HasShadow)
    .add(
      new Sprite({
        grid: 16,
        image: new Image(hero),
        offset: new Vector2(8, 18),
        position: new Position(5, 6),
      }),
    )

  // Npc1
  commands
    .spawn()
    .addType(HasShadow)
    .add(
      new Sprite({
        grid: 16,
        image: new Image(npc1),
        offset: new Vector2(8, 18),
        position: new Position(7, 9),
      }),
    )
}
