import { DefaultSchedule, type World } from 'thyseus'

export function gameLoopSystem(world: World) {
  async function loop() {
    await world.runSchedule(DefaultSchedule)

    requestAnimationFrame(loop)
  }

  loop()
}
