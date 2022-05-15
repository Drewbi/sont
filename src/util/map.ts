import { p5 } from '../index'


const arenaPadding = 50
let arenaSize: number;

const getArenaSize = () => {
  return arenaSize;
}

const updateArenaSize = () => arenaSize = p5.min(p5.windowWidth - arenaPadding * 2, p5.windowHeight - arenaPadding * 2)

const p2mcoords = (x: number, y: number): [number, number] => {
  return [x - arenaPadding, y - arenaPadding]
}

const m2pcoords = (x: number, y: number): [number, number] => {
  return [x + arenaPadding, y + arenaPadding]
}

const drawMap = () => {
  p5.stroke(20)
  p5.strokeWeight(5)
  p5.rect(...m2pcoords(0, 0), arenaSize, arenaSize)
}

export { getArenaSize, updateArenaSize, m2pcoords, p2mcoords, drawMap }