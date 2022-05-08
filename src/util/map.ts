import P5, { Vector } from "p5";

const arenaPadding = 50
let arenaSize: number;

const getArenaSize = () => {
  return arenaSize;
}

const updateArenaSize = (p: P5) => arenaSize = p.min(p.windowWidth - arenaPadding * 2, p.windowHeight - arenaPadding * 2)

const p2mcoords = (x: number, y: number): [number, number] => {
  return [x - arenaPadding, y - arenaPadding]
}

const m2pcoords = (x: number, y: number): [number, number] => {
  return [x + arenaPadding, y + arenaPadding]
}

const drawMap = (p: P5) => {
  p.stroke(20)
  p.strokeWeight(5)
  p.rect(...m2pcoords(0, 0), arenaSize, arenaSize)
}

export { getArenaSize, updateArenaSize, m2pcoords, p2mcoords, drawMap }