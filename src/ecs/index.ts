import { StartSchedule, World, applyCommands } from 'thyseus'

import { applyGridSystem } from './systems/apply-grid'
import { clearCanvasSystem } from './systems/clear-canvas'
import { documentListenersSystem } from './systems/document-listeners'
import { gameLoopSystem } from './systems/game-loop'
import { keyboardSystem } from './systems/keyboard'
import { movementSystem } from './systems/movement'
import {
  renderLowerMapSystem,
  renderUpperMapSystem,
} from './systems/render-map'
import { renderPersonSystem } from './systems/render-person'
import { renderShadowSystem } from './systems/render-shadow'
import { spawnSystem } from './systems/spawn'
import { spriteSystem } from './systems/sprite'

export const world = await World.new()
  .addSystemsToSchedule(
    StartSchedule,
    spawnSystem,
    applyCommands,
    applyGridSystem,
    documentListenersSystem,
    gameLoopSystem,
  )
  .addSystems(
    keyboardSystem,
    spriteSystem,
    movementSystem,
    clearCanvasSystem,
    renderLowerMapSystem,
    renderShadowSystem,
    renderPersonSystem,
    renderUpperMapSystem,
    applyCommands,
  )
  .build()

world.start()
