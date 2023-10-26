import { struct, type f32 } from 'thyseus'

@struct
export class Time {
  delta: f32 = 0
  value: f32 = 0
}
