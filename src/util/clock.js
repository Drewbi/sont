const drawClock = () => {
  p.push()
  p.translate(25, 25)
  p.rotate(((p.millis() % 1000) / 1000) * 360)
  p.circle(0, 0, 30)
  p.rect(0, 0, 0, -10)
  p.pop()
}

export { drawClock }