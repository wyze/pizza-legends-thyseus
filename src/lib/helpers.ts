import type { Position } from '../ecs/components/position'
import { Grid } from '../ecs/resources/grid'

export function nextPosition({ x, y }: Position) {
  return {
    down: `${x},${y + Grid.size}`,
    left: `${x - Grid.size},${y}`,
    right: `${x + Grid.size},${y}`,
    up: `${x},${y - Grid.size}`,
  }
}
