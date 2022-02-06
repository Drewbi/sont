const drawCharacter = (p, x, y, r) => {
  p.translate(x, y)
  p.rotate(r)
  p.quad(0, 0, 10, 20, 0, 15, -10, 20)
}

module.exports = { drawCharacter }