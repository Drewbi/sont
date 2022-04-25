import { getArenaSize, m2pcoords } from "./map"
import { tickRate } from "../game"

const drawClock = () => {
  p.push()
  // p.translate(25, 25)
  // p.rotate(((p.millis() % 1000) / 1000) * 360)
  // p.circle(0, 0, 30)
  // p.rect(0, 0, 0, -10)
  const progress = (p.millis() % tickRate) / tickRate
  const qtrProgress = (p.millis() % (tickRate / 4)) / (tickRate / 4)
  const dist = p.lerp(0, getArenaSize(), qtrProgress)
  p.strokeJoin(p.SQUARE)
  p.noFill()
  p.stroke(100, 206, 255)
  p.beginShape()
  
  p.vertex(...m2pcoords(0, 0))
  if (progress < 0.25) {
    p.vertex(...m2pcoords(dist, 0))
  } else p.vertex(...m2pcoords(getArenaSize(), 0))

  if (progress < 0.5 && progress > 0.25) {
    p.vertex(...m2pcoords(getArenaSize(), dist))
  } else if (progress > 0.25) p.vertex(...m2pcoords(getArenaSize(), getArenaSize()))
  
  if (progress < 0.75 && progress > 0.5) {
    p.vertex(...m2pcoords(getArenaSize() - dist, getArenaSize()))
  } else if (progress > 0.5) p.vertex(...m2pcoords(0, getArenaSize()))
  
  if (progress < 1 && progress > 0.75) {
    p.vertex(...m2pcoords(0, getArenaSize() - dist))
  }
  p.endShape()
  p.pop()
}

export { drawClock }