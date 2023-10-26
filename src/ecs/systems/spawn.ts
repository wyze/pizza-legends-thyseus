import type { Commands } from 'thyseus'

import hero from '../../images/characters/people/hero.png'
import npc1 from '../../images/characters/people/npc1.png'
import npc2 from '../../images/characters/people/npc2.png'
import demoLower from '../../images/maps/DemoLower.png'
import demoUpper from '../../images/maps/DemoUpper.png'
import { animations, walls } from '../../lib/constants'
import { BehaviorLoop } from '../components/behavior-loop'
import { HasShadow } from '../components/has-shadow'
import { Image } from '../components/image'
import { IsCamera } from '../components/is-camera'
import { IsPerson } from '../components/is-person'
import { IsWall } from '../components/is-wall'
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

  // Add walls
  walls.forEach(([x, y]) => {
    commands.spawn().addType(IsWall).addType(UsesGrid).add(Position.from(x, y))
  })

  // Hero
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsCamera)
    .addType(IsPerson)
    .addType(IsWall)
    .addType(UsesGrid)
    .addType(UsesKeyboard)
    .add(await Image.from(hero))
    .add(Offset.from(-8, -18))
    .add(Position.from(5, 6))
    .add(Sprite.from(animations.down.idle))

  // NpcA
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsPerson)
    .addType(IsWall)
    .addType(UsesGrid)
    .add(await Image.from(npc1))
    .add(Offset.from(-8, -18))
    .add(Position.from(7, 9))
    .add(Sprite.from(animations.down.idle))
    .add(
      BehaviorLoop.from([
        { action: 'stand', direction: 'left', time: 800 },
        { action: 'stand', direction: 'up', time: 800 },
        { action: 'stand', direction: 'right', time: 1200 },
        { action: 'stand', direction: 'up', time: 300 },
      ]),
    )

  // NpcB
  commands
    .spawn()
    .addType(HasShadow)
    .addType(IsPerson)
    .addType(IsWall)
    .addType(UsesGrid)
    .add(await Image.from(npc2))
    .add(Offset.from(-8, -18))
    .add(Position.from(3, 7))
    .add(Sprite.from(animations.down.idle))
    .add(
      BehaviorLoop.from([
        { action: 'walk', direction: 'left' },
        { action: 'stand', direction: 'up', time: 800 },
        { action: 'walk', direction: 'up' },
        { action: 'walk', direction: 'right' },
        { action: 'walk', direction: 'down' },
      ]),
    )
}
