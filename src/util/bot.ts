import P5 from 'p5'
import { getArenaSize } from './map'

const randomInput = (p: P5) => {
  return p.random(getArenaSize())
}

export { randomInput }