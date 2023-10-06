import { EventWriter } from 'thyseus'

import { DirectionName } from '../../lib/types'
import { DirectionEvent } from '../events/direction'

const directions: DirectionName[] = ['']

export function documentListenersSystem(
  directionEvents: EventWriter<DirectionEvent>,
) {
  function handler({ code, type }: KeyboardEvent) {
    const isHeld = type === 'keydown'
    const direction = getDirection(code)

    if (!direction) {
      return
    }

    if (isHeld) {
      if (!directions.includes(direction)) {
        directions.unshift(direction)

        directionEvents.create(DirectionEvent.from(direction))
      }
    } else {
      const index = directions.indexOf(direction)

      if (index > -1) {
        directions.splice(index, 1)

        directionEvents.create(DirectionEvent.from(directions[0]))
      }
    }
  }

  document.addEventListener('keydown', handler)
  document.addEventListener('keyup', handler)
}

function getDirection(code: string) {
  switch (code) {
    case 'ArrowDown':
    case 'KeyS':
      return 'down'
    case 'ArrowLeft':
    case 'KeyA':
      return 'left'
    case 'ArrowRight':
    case 'KeyD':
      return 'right'
    case 'ArrowUp':
    case 'KeyW':
      return 'up'
    default:
      return ''
  }
}
