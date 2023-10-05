import { struct, type u8 } from 'thyseus'

@struct
export class Grid {
  static size: u8 = 16

  size: u8 = Grid.size
}
