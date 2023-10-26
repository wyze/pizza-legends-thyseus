import { StartSchedule, World, applyCommands } from 'thyseus'

import { schedules } from '../lib/constants'
import { applyGridSystem } from './systems/apply-grid'
import { cameraSystem } from './systems/camera'
import { clearCanvasSystem } from './systems/clear-canvas'
import { documentListenersSystem } from './systems/document-listeners'
import { fixedUpdateSystem } from './systems/fixed-update'
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
import { timeStartSystem } from './systems/time'
import { wallDebugSystem } from './systems/wall-debug'

export const world = await World.new()
  .addSystemsToSchedule(
    StartSchedule,
    spawnSystem,
    applyCommands,
    applyGridSystem,
    documentListenersSystem,
    timeStartSystem,
    gameLoopSystem,
  )
  .addSystems(
    cameraSystem,
    keyboardSystem,
    spriteSystem,
    movementSystem,
    fixedUpdateSystem,
    clearCanvasSystem,
    renderLowerMapSystem,
    wallDebugSystem,
    renderShadowSystem,
    renderPersonSystem,
    renderUpperMapSystem,
    applyCommands,
  )
  .build()

world.start()
