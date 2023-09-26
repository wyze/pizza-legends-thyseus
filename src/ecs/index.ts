import { StartSchedule, World, applyCommands } from 'thyseus'

import { clearCanvasSystem } from './systems/clear-canvas'
import { consumeGridSystem } from './systems/consume-grid'
import { gameLoopSystem } from './systems/game-loop'
import { movementSystem } from './systems/movement'
import {
  renderLowerMapSystem,
  renderUpperMapSystem,
} from './systems/render-map'
import { renderPersonSystem } from './systems/render-person'
import { spawnSystem } from './systems/spawn'

export const world = await World.new()
  .addSystemsToSchedule(StartSchedule, spawnSystem, gameLoopSystem)
  .addSystems(
    consumeGridSystem,
    movementSystem,
    clearCanvasSystem,
    renderLowerMapSystem,
    renderPersonSystem,
    renderUpperMapSystem,
    applyCommands,
  )
  .build()

world.start()
