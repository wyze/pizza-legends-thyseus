import { StartSchedule, World, applyCommands } from 'thyseus'

import { applyGridSystem } from './systems/apply-grid'
import { clearCanvasSystem } from './systems/clear-canvas'
import { gameLoopSystem } from './systems/game-loop'
import { movementSystem } from './systems/movement'
import {
  renderLowerMapSystem,
  renderUpperMapSystem,
} from './systems/render-map'
import { renderPersonSystem } from './systems/render-person'
import { spawnSystem } from './systems/spawn'

export const world = await World.new()
  .addSystemsToSchedule(
    StartSchedule,
    spawnSystem,
    applyCommands,
    applyGridSystem,
    gameLoopSystem,
  )
  .addSystems(
    movementSystem,
    clearCanvasSystem,
    renderLowerMapSystem,
    renderPersonSystem,
    renderUpperMapSystem,
    applyCommands,
  )
  .build()

world.start()
