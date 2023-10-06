import type { Commands } from 'thyseus'

import hero from '../../images/characters/people/hero.png'
import npc1 from '../../images/characters/people/npc1.png'
import demoLower from '../../images/maps/DemoLower.png'
import demoUpper from '../../images/maps/DemoUpper.png'
import { animations } from '../../lib/constants'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { IsCamera } from '../components/is-camera'
import { IsPerson } from '../components/is-person'
import { Map } from '../components/map'
import { Offset } from '../components/offset'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { UsesGrid } from '../components/uses-grid'
import { UsesKeyboard } from '../components/uses-keyboard'

export async function spawnSystem(commands: Commands) {
  // Lower Map
  commands
    .spawn()
    .addType(Position)
    .add(Map.from('lower'))
    .add(await Image.from(demoLower))

  // Upper Map
  commands
    .spawn()
    .addType(Position)
    .add(Map.from('upper'))
    .add(await Image.from(demoUpper))

  // Hero
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsCamera)
    .addType(IsPerson)
    .addType(UsesGrid)
    .addType(UsesKeyboard)
    .add(await Image.from(hero))
    .add(Offset.from(-8, -18))
    .add(Position.from(5, 6))
    .add(Sprite.from(animations.down.idle))

  // Npc1
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsPerson)
    .addType(UsesGrid)
    .add(await Image.from(npc1))
    .add(Offset.from(-8, -18))
    .add(Position.from(7, 9))
    .add(Sprite.from(animations.down.idle))
}
