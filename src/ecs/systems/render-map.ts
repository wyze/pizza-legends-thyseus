import type { Query } from 'thyseus'

import { context } from '../../lib/canvas'
import { Image } from '../components/image'
import { Map } from '../components/map'
import { Position } from '../components/position'

export function renderLowerMapSystem(query: Query<[Map, Image, Position]>) {
  for (const [map, image, position] of query) {
    if (map.order === 'lower') {
      context.drawImage(image.value, ...position.values)
    }
  }
}

export function renderUpperMapSystem(query: Query<[Map, Image, Position]>) {
  for (const [map, image, position] of query) {
    if (map.order === 'upper') {
      context.drawImage(image.value, ...position.values)
    }
  }
}
