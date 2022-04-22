import { m2pcoords } from './map'
class Player {
  x;
  y;
  r;
  nextX;
  nextY;
  nextR;
  speed;
  maxDist;
  moveProgress;
  it;

  inputStrength;
  inputDirection;

  constructor(initX, initY, initR, speed, maxDist) {
    this.x = initX
    this.y = initY
    this.r = initR
    this.nextX = initX
    this.nextY = initY
    this.nextR = initR
    this.speed = speed
    this.maxDist = maxDist
    this.moveProgress = 0
    this.it = false
    this.inputStrength = null
    this.inputDirection = null
  }

  setInput(x, y) {
    const diffx = x - this.x
    const diffy = y - this.y
    const dir = p.atan2(diffy, diffx) - 90
    this.inputDirection = dir
    this.inputStrength = p.min(p.sqrt(p.sq(diffx) + p.sq(diffy)), this.maxDist)
  }

  setDestination() {
    if (this.inputDirection === null || this.inputStrength === null) return
    this.nextX = (this.inputStrength * p.sin(-1 * this.inputDirection)) + this.x
    this.nextY = (this.inputStrength * p.cos(this.inputDirection)) + this.y
    this.nextR = this.inputDirection
    this.inputDirection = null
    this.inputStrength = null
  }

  move() {
    this.r += (this.nextR - this.r) * this.speed
    if (this.r > this.nextR - 10 && this.r < this.nextR + 10) {
      this.x += (this.nextX - this.x) * this.speed
      this.y += (this.nextY - this.y) * this.speed
    }
  }

  drawCharacter() {
    p.push()
    p.strokeWeight(3)
    p.strokeJoin(p.ROUND)
    p.translate(...m2pcoords(this.x, this.y))
    p.rotate(this.r)
    p.quad(0, 20, 5, 0, 0, -5, -5, 0) // Shape only
    p.pop()
  }
}

export { Player }