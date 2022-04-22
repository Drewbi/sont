const arenaPadding = 50
let arenaSize;

const getArenaSize = () => {
  return arenaSize;
}

const updateArenaSize = () => arenaSize = p.min(p.windowWidth - arenaPadding * 2, p.windowHeight - arenaPadding * 2)

const p2mcoords = (x, y) => {
  return [ x - arenaPadding, y - arenaPadding ]
}

const m2pcoords = (x, y) => {
  return [ x + arenaPadding, y + arenaPadding ]
}

const drawMap = () => {
  p.stroke(20)
  p.strokeWeight(5)
  p.rect(...m2pcoords(0, 0), arenaSize, arenaSize);
}

export { getArenaSize, updateArenaSize, m2pcoords, p2mcoords, drawMap }