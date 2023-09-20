import { StartSchedule, World, applyCommands } from 'thyseus'

import { clearCanvasSystem } from './systems/clear-canvas'
import { gameLoopSystem } from './systems/game-loop'
import { loadImageSystem } from './systems/load-image'
import { loadSpriteSystem } from './systems/load-sprite'
import { renderImageSystem } from './systems/render-image'
import { renderShadowSystem } from './systems/render-shadow'
import { renderSpriteSystem } from './systems/render-sprite'
import { spawnSystem } from './systems/spawn'

export const world = await World.new()
  .addSystemsToSchedule(StartSchedule, gameLoopSystem, spawnSystem)
  .addSystems(
    loadImageSystem,
    loadSpriteSystem,
    clearCanvasSystem,
    renderImageSystem,
    renderShadowSystem,
    renderSpriteSystem,
    applyCommands,
  )
  .build()

world.start()
