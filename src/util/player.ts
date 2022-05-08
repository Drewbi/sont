import P5, { Vector } from 'p5';
import { m2pcoords } from './map'
import { getDegreeDistance, getRotationDirection, normalise } from './rotation';

export class Player {
  pos: Vector;
  nextPos: Vector;
  r: number;
  nextR: number;

  speed: number;
  maxDist: number;
  moveProgress: number;

  input: Vector;
  inputStrength: number;
  inputDirection: number;

  killPoint: Vector;
  it: Boolean;

  constructor(initPos: Vector, initR: number, speed: number, maxDist: number) {
    this.pos = initPos.copy()
    this.nextPos = initPos.copy()
    this.r = initR
    this.nextR = initR

    this.speed = speed
    this.maxDist = maxDist
    this.moveProgress = 0

    this.it = false

    this.input = null
    this.inputStrength = null
    this.inputDirection = null
  }

  setIt(isIt: Boolean) {
    this.it = isIt
  }

  setInput(p: P5) {
    if (this.input !== null) { 
      const diffx = this.input.x - this.pos.x
      const diffy = this.input.y - this.pos.y
      this.input = null
      this.inputDirection = normalise(p, p.atan2(diffy, diffx) - 90)
      this.inputStrength = p.min(p.sqrt(p.sq(diffx) + p.sq(diffy)), this.maxDist)
    }
  }

  setDestination(p: P5) {
    this.nextPos.x = (this.inputStrength * p.sin(-1 * this.inputDirection)) + this.pos.x
    this.nextPos.y = (this.inputStrength * p.cos(this.inputDirection)) + this.pos.y
    if(this.inputDirection !== null) this.nextR = this.inputDirection
    this.inputDirection = null
    this.inputStrength = null
  }

  move(p: P5) {
    if(getRotationDirection(p, this.r, this.nextR) !== 0) {
      this.r = normalise(p,
        this.r +
        getRotationDirection(p, this.r, this.nextR) *
        getDegreeDistance(p, this.r, this.nextR) *
        this.speed
      )
    } else {
      this.pos.x += (this.nextPos.x - this.pos.x) * this.speed
      this.pos.y += (this.nextPos.y - this.pos.y) * this.speed
    }
  }

  drawCharacter(p: P5) {
    p.push()
    p.strokeWeight(3)
    p.strokeJoin(p.ROUND)
    p.translate(...m2pcoords(this.pos.x, this.pos.y))
    p.rotate(this.r)
    const playerColour = this.it ? p.color(255, 100, 100) : p.color(0, 0, 0)
    p.color(playerColour)
    p.quad(0, 20, 5, 0, 0, -5, -5, 0) // Shape only
    p.pop()
    if(this.input) {
      p.push()
      p.stroke(100, 206, 255)
      p.circle(...m2pcoords(this.input.x, this.input.y), 30)
      p.circle(...m2pcoords(this.input.x, this.input.y), 5)
      p.pop()
    }
  }

  touches() {

  }
}
