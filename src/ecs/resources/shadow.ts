import { struct } from 'thyseus'

import { Image } from '../components/image'

@struct
export class Shadow extends Image {
  update(source: string) {
    super.update(source)

    return this
  }
}
