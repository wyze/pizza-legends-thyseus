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
import { nextPosition } from '../../lib/helpers'
import { IsWall } from '../components/is-wall'
import { Moving } from '../components/moving'
import { Position } from '../components/position'
import { Sprite } from '../components/sprite'
import { UsesKeyboard } from '../components/uses-keyboard'
import { DirectionEvent } from '../events/direction-event'
import { Grid } from '../resources/grid'
import { Keyboard } from '../resources/keyboard'

export function keyboardSystem(
  query: Query<[Entity, Mut<Sprite>], With<UsesKeyboard>>,
  movingQuery: Query<[Entity, Mut<Moving>, Mut<Sprite>], With<UsesKeyboard>>,
  wallsQuery: Query<Position, With<IsWall>>,
  keyboardQuery: Query<[Entity, Position], With<UsesKeyboard>>,
  commands: Commands,
  grid: Res<Grid>,
  keyboard: Res<Mut<Keyboard>>,
  directionEvents: EventReader<DirectionEvent>,
) {
  const handled: Record<number, 'idle' | 'walk'> = {}
  const walls: Record<string, true> = {}

  for (const event of directionEvents) {
    keyboard.direction = event.direction
  }

  directionEvents.clear()

  for (const position of wallsQuery) {
    walls[`${position.x},${position.y}`] = true
  }

  for (const [entity, position] of keyboardQuery) {
    const next = nextPosition(position)

    if (keyboard.direction && walls[next[keyboard.direction]]) {
      handled[entity.index] = 'idle'
    }
  }

  for (const [mover, moving, sprite] of movingQuery) {
    if (handled[mover.index]) {
      continue
    }

    handled[mover.index] = 'walk'

    if (moving.remaining === 0 && keyboard.direction) {
      moving.remaining = grid.pixels

      if (keyboard.direction !== moving.direction) {
        moving.direction = keyboard.direction
        sprite.matrix = animations[keyboard.direction].walk
      }
    }
  }

  for (const [entity, sprite] of query) {
    if (handled[entity.index] === 'walk') {
      continue
    }

    if (keyboard.direction) {
      const action = handled[entity.index] ?? 'walk'

      if (action === 'walk') {
        commands.get(entity).add(Moving.from(keyboard.direction))
      }

      sprite.matrix = animations[keyboard.direction][action]
    }
  }
}
