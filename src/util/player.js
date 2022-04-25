import { m2pcoords } from './map'
import { getDegreeDistance, getRotationDirection, normalise } from './rotation';
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

  inputX;
  inputY;
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

    this.inputX = null
    this.inputY = null
    this.inputStrength = null
    this.inputDirection = null
  }

  setIt(isIt) {
    this.it = isIt
  }

  setInput() {
    if (this.inputX === null && this.inputY === null) return
    const diffx = this.inputX - this.x
    const diffy = this.inputY - this.y
    this.inputX = null
    this.inputY = null
    this.inputDirection = normalise(p.atan2(diffy, diffx) - 90)
    this.inputStrength = p.min(p.sqrt(p.sq(diffx) + p.sq(diffy)), this.maxDist)
  }

  setDestination() {
    this.nextX = (this.inputStrength * p.sin(-1 * this.inputDirection)) + this.x
    this.nextY = (this.inputStrength * p.cos(this.inputDirection)) + this.y
    if(this.inputDirection !== null) this.nextR = this.inputDirection
    this.inputDirection = null
    this.inputStrength = null
  }

  move() {
    if(getRotationDirection(this.r, this.nextR) !== 0) {
      this.r = normalise(
        this.r +
        getRotationDirection(this.r, this.nextR) *
        getDegreeDistance(this.r, this.nextR) *
        this.speed
      )
    } else {
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
    p.color(this.it ? (255, 100, 100) : (0, 0, 0))
    p.quad(0, 20, 5, 0, 0, -5, -5, 0) // Shape only
    p.pop()
    if(this.inputX && this.inputY) {
      p.push()
      p.stroke(100, 206, 255)
      p.circle(...m2pcoords(this.inputX, this.inputY), 30)
      p.circle(...m2pcoords(this.inputX, this.inputY), 5)
      p.pop()
    }
  }

  touches() {

  }
}

export { Player }