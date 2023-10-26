import type { Position } from '../ecs/components/position'
import { Grid } from '../ecs/resources/grid'

export function nextPosition({ x, y }: Position) {
  return {
    down: `${x},${y + Grid.pixels}`,
    left: `${x - Grid.pixels},${y}`,
    right: `${x + Grid.pixels},${y}`,
    up: `${x},${y - Grid.pixels}`,
  }
}
