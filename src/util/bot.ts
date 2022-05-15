import { p5 } from '../index'
import { getArenaSize } from './map'

const randomInput = () => {
  return p5.random(getArenaSize())
}

export { randomInput }