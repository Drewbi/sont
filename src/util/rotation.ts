import { p5 } from '../index'

const getRotationDirection = (currRot: number, destRot: number) => {
  const precision = 0.5
  if (currRot >= destRot - precision && currRot <= destRot + precision) return 0
  if (currRot + 360 > destRot - precision && currRot + 360 < destRot + precision) return 0
  if (currRot < destRot) {
    return (currRot + 360) - destRot < p5.abs(currRot - destRot) ? -1 : 1
  }
  return (destRot + 360) - currRot < p5.abs(destRot - currRot) ? 1 : -1
}

function getDegreeDistance(currRot: number, destRot: number) {
  const normCurr = normalise(currRot)
  const normDest = normalise(destRot)
  if (normCurr > normDest) {
    return p5.min(normCurr - normDest, p5.abs(normCurr - (normDest + 360)))
  } else {
    return p5.min(normDest - normCurr, p5.abs(normDest - (normCurr + 360)))
  }
}

function normalise(r: number) {
  if (r < 0) return p5.abs(r + 360) % 360
  else return r % 360
}

export {getRotationDirection, getDegreeDistance, normalise}