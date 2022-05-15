import { Vector } from 'p5';
import { p5 } from '../index'
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

  setInput() {
    if (this.input !== null) { 
      const diffx = this.input.x - this.pos.x
      const diffy = this.input.y - this.pos.y
      this.input = null
      this.inputDirection = normalise(p5.atan2(diffy, diffx) - 90)
      this.inputStrength = p5.min(p5.sqrt(p5.sq(diffx) + p5.sq(diffy)), this.maxDist)
    }
  }

  setDestination() {
    this.nextPos.x = (this.inputStrength * p5.sin(-1 * this.inputDirection)) + this.pos.x
    this.nextPos.y = (this.inputStrength * p5.cos(this.inputDirection)) + this.pos.y
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
      this.pos.x += (this.nextPos.x - this.pos.x) * this.speed
      this.pos.y += (this.nextPos.y - this.pos.y) * this.speed
    }
  }

  drawCharacter() {
    p5.push()
    p5.strokeWeight(3)
    p5.strokeJoin(p5.ROUND)
    p5.translate(...m2pcoords(this.pos.x, this.pos.y))
    p5.rotate(this.r)
    const playerColour = this.it ? p5.color(255, 100, 100) : p5.color(0, 0, 0)
    p5.color(playerColour)
    p5.quad(0, 20, 5, 0, 0, -5, -5, 0) // Shape only
    p5.pop()
    if(this.input) {
      p5.push()
      p5.stroke(100, 206, 255)
      p5.circle(...m2pcoords(this.input.x, this.input.y), 30)
      p5.circle(...m2pcoords(this.input.x, this.input.y), 5)
      p5.pop()
    }
  }

  touches() {

  }
}
