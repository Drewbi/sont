import { getArenaSize } from './map'

const randomInput = () => {
  return p.random(getArenaSize())
}

export { randomInput }