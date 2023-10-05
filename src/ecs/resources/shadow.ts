import { struct } from 'thyseus'

import shadowImage from '../../images/characters/shadow.png'
import { Image } from '../components/image'

@struct
export class Shadow extends Image {
  static fromWorld() {
    return super.from(shadowImage)
  }

  get image() {
    return super.value
  }
}
