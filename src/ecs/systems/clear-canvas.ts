import { context } from '../../lib/canvas'

export function clearCanvasSystem() {
  const { height, width } = context.canvas

  context.clearRect(0, 0, width, height)
}
