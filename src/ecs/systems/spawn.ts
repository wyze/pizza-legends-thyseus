import type { Commands, Res } from 'thyseus'

import hero from '../../images/characters/people/hero.png'
import npc1 from '../../images/characters/people/npc1.png'
import shadowImage from '../../images/characters/shadow.png'
import demoLower from '../../images/maps/DemoLower.png'
import demoUpper from '../../images/maps/DemoUpper.png'
import { animations } from '../../lib/constants'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { IsPerson } from '../components/is-person'
import { Map } from '../components/map'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { UsesGrid } from '../components/uses-grid'
import { UsesKeyboard } from '../components/uses-keyboard'
import { Shadow } from '../resources/shadow'

export async function spawnSystem(commands: Commands, shadow: Res<Shadow>) {
  // Shadow resource
  await shadow.update(shadowImage).load()

  // Lower Map
  commands
    .spawn()
    .addType(Position)
    .add(Map.lower())
    .add(await new Image(demoLower).load())

  // Upper Map
  commands
    .spawn()
    .addType(Position)
    .add(Map.upper())
    .add(await new Image(demoUpper).load())

  // Hero
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsPerson)
    .addType(UsesGrid)
    .addType(UsesKeyboard)
    .add(await new Image(hero).load())
    .add(new Offset(-8, -18))
    .add(new Position(5, 6))
    .add(Sprite.withMatrix(animations.down.idle))

  // Npc1
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsPerson)
    .addType(UsesGrid)
    .add(await new Image(npc1).load())
    .add(new Offset(-8, -18))
    .add(new Position(7, 9))
    .add(Sprite.withMatrix(animations.down.idle))
}
