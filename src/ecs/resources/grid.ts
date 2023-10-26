import { struct, type u8 } from 'thyseus'

@struct
export class Grid {
  static pixels: u8 = 16

  pixels: u8 = Grid.pixels
}
