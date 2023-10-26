import type { Mut, Res } from 'thyseus'
import { FixedTime } from '../resources/fixed-time'

export function timeStartSystem(time: Res<Mut<FixedTime>>) {
  time.value = performance.now()
}
