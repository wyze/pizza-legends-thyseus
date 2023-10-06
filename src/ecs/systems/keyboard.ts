import {
  type Commands,
  Entity,
  EventReader,
  type Mut,
  type Query,
  type Res,
  type With,
} from 'thyseus'

import { animations } from '../../lib/constants'
import { Moving } from '../components/moving'
import { Sprite } from '../components/sprite'
import { UsesKeyboard } from '../components/uses-keyboard'
import { DirectionEvent } from '../events/direction'
import { Grid } from '../resources/grid'
import { Keyboard } from '../resources/keyboard'

export function keyboardSystem(
  query: Query<[Entity, Mut<Sprite>], With<UsesKeyboard>>,
  movingQuery: Query<[Entity, Mut<Moving>, Mut<Sprite>], With<UsesKeyboard>>,
  commands: Commands,
  grid: Res<Grid>,
  keyboard: Res<Mut<Keyboard>>,
  directionEvents: EventReader<DirectionEvent>,
) {
  const movers: Record<number, Moving> = {}

  for (const event of directionEvents) {
    keyboard.direction = event.value
  }

  directionEvents.clear()

  for (const [mover, moving, sprite] of movingQuery) {
    movers[mover.index] = moving

    if (moving.remaining === 0 && keyboard.direction) {
      moving.remaining = grid.size

      if (keyboard.direction !== moving.direction) {
        moving.direction = keyboard.direction
        sprite.matrix = animations[keyboard.direction].walk
      }
    }
  }

  for (const [entity, sprite] of query) {
    if (movers[entity.index]) {
      continue
    }

    if (keyboard.direction) {
      commands.get(entity).add(Moving.from(keyboard.direction))

      sprite.matrix = animations[keyboard.direction].walk
    }
  }
}
