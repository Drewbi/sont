import { Vector } from "p5";
import { p5 } from '../index'

const getVertices = (pos: Vector, r: number): Vector[] => {
  return [
    new Vector(20 * p5.sin(r) + pos.x, 20 * p5.cos(r) + pos.y),
    new Vector(5 * p5.cos(r) + pos.x, 5 * p5.sin(r) + pos.y),
    new Vector(-5 * p5.sin(r) + pos.x, -5 * p5.cos(r) + pos.y),
    new Vector(-5 * p5.cos(r) + pos.x, -5 * p5.sin(r) + pos.y)
  ]
}

const getPerpAxes = (pos: Vector, r: number) => {
  const vertices = getVertices(pos, r)
  return vertices.map((point: Vector, i): Vector => {
    const perpX = -(vertices[(i + 1) % vertices.length].y - point.y)
    const perpY = vertices[(i + 1) % vertices.length].x - point.x
    return new Vector(perpX, perpY).limit(1)
  })
}

const projectOntoAxis = (axis: Vector) => {
  
}

export { getPerpAxes }