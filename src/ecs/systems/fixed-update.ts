import {
  type Mut,
  type Res,
  type SystemRes,
  type World,
  type f32,
  struct,
} from 'thyseus'

import { FIXED_STEP_MS, schedules } from '../../lib/constants'
import { FixedTime } from '../resources/fixed-time'

@struct
class Data {
  loop: f32 = 0
  update: f32 = 0
}

export async function fixedUpdateSystem(
  data: SystemRes<Data>,
  time: Res<Mut<FixedTime>>,
  world: World,
) {
  const now = performance.now()
  const delta = now - data.loop

  data.loop = now
  data.update += delta

  time.delta = FIXED_STEP_MS / 1000

  while (data.update >= FIXED_STEP_MS) {
    time.value = now - data.update

    // @ts-expect-error
    time.serialize()

    await world.runSchedule(schedules.FixedUpdate)

    data.update -= FIXED_STEP_MS
  }
}
