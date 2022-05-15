import { getArenaSize, m2pcoords } from "./map"
import { tickRate } from "../game"
import { p5 } from '../index'

const drawClock = () => {
  p5.push()
  // p5.translate(25, 25)
  // p5.rotate(((p5.millis() % 1000) / 1000) * 360)
  // p5.circle(0, 0, 30)
  // p5.rect(0, 0, 0, -10)
  const progress = (p5.millis() % tickRate) / tickRate
  const qtrProgress = (p5.millis() % (tickRate / 4)) / (tickRate / 4)
  const dist = p5.lerp(0, getArenaSize(), qtrProgress)
  p5.strokeJoin(p5.MITER)
  p5.noFill()
  p5.stroke(100, 206, 255)
  p5.beginShape()
  
  p5.vertex(...m2pcoords(0, 0))
  if (progress < 0.25) {
    p5.vertex(...m2pcoords(dist, 0))
  } else p5.vertex(...m2pcoords(getArenaSize(), 0))

  if (progress < 0.5 && progress > 0.25) {
    p5.vertex(...m2pcoords(getArenaSize(), dist))
  } else if (progress > 0.25) p5.vertex(...m2pcoords(getArenaSize(), getArenaSize()))
  
  if (progress < 0.75 && progress > 0.5) {
    p5.vertex(...m2pcoords(getArenaSize() - dist, getArenaSize()))
  } else if (progress > 0.5) p5.vertex(...m2pcoords(0, getArenaSize()))
  
  if (progress < 1 && progress > 0.75) {
    p5.vertex(...m2pcoords(0, getArenaSize() - dist))
  }
  p5.endShape()
  p5.pop()
}

export { drawClock }