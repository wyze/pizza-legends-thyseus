import { type World, struct } from 'thyseus'

type Direction = '' | 'down' | 'left' | 'right' | 'up'

const directions: Direction[] = []

@struct
export class Keyboard {
  #direction: string = ''

  static fromWorld(world: World) {
    if (!world.isMainThread) {
      return
    }

    function handler({ code, type }: KeyboardEvent) {
      const isHeld = type === 'keydown'
      const direction = getDirection(code)

      if (!direction) {
        return
      }

      if (isHeld) {
        if (!directions.includes(direction)) {
          directions.unshift(direction)
        }
      } else {
        const index = directions.indexOf(direction)

        if (index > -1) {
          directions.splice(index, 1)
        }
      }
    }

    document.addEventListener('keydown', handler)
    document.addEventListener('keyup', handler)

    return new this()
  }

  get direction() {
    return this.#direction as Direction
  }

  update() {
    this.#direction = directions[0] ?? ''
  }
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
