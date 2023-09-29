import {
  type Commands,
  Entity,
  type Mut,
  type Query,
  type Res,
  type With,
} from 'thyseus'

import { Moving } from '../components/moving'
import { UsesKeyboard } from '../components/uses-keyboard'
import { Grid } from '../resources/grid'
import { Keyboard } from '../resources/keyboard'

export function keyboardSystem(
  query: Query<Entity, With<UsesKeyboard>>,
  movingQuery: Query<[Entity, Mut<Moving>], With<UsesKeyboard>>,
  commands: Commands,
  grid: Res<Grid>,
  keyboard: Res<Keyboard>,
) {
  const movers: Record<number, Moving> = {}

  for (const [mover, moving] of movingQuery) {
    movers[mover.index] = moving

    if (moving.remaining === 0 && keyboard.direction) {
      moving.remaining = grid.size

      if (keyboard.direction !== moving.direction) {
        moving.direction = keyboard.direction
      }
    }
  }

  for (const entity of query) {
    if (movers[entity.index]) {
      continue
    }

    if (keyboard.direction) {
      commands.get(entity).add(new Moving(keyboard.direction, grid.size))
    }
  }
}

export function updateKeyboardSystem(keyboard: Res<Mut<Keyboard>>) {
  keyboard.update()
}
