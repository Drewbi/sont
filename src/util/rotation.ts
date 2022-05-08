import P5 from 'p5'

const getRotationDirection = (p: P5, currRot: number, destRot: number) => {
  const precision = 0.5
  if (currRot >= destRot - precision && currRot <= destRot + precision) return 0
  if (currRot + 360 > destRot - precision && currRot + 360 < destRot + precision) return 0
  if (currRot < destRot) {
    return (currRot + 360) - destRot < p.abs(currRot - destRot) ? -1 : 1
  }
  return (destRot + 360) - currRot < p.abs(destRot - currRot) ? 1 : -1
}

function getDegreeDistance(p: P5, currRot: number, destRot: number) {
  const normCurr = normalise(p, currRot)
  const normDest = normalise(p, destRot)
  if (normCurr > normDest) {
    return p.min(normCurr - normDest, p.abs(normCurr - (normDest + 360)))
  } else {
    return p.min(normDest - normCurr, p.abs(normDest - (normCurr + 360)))
  }
}

function normalise(p: P5, r: number) {
  if (r < 0) return p.abs(r + 360) % 360
  else return r % 360
}

export {getRotationDirection, getDegreeDistance, normalise}