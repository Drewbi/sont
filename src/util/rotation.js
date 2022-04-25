const getRotationDirection = (currRot, destRot) => {
  const precision = 0.5
  if (currRot >= destRot - precision && currRot <= destRot + precision) return 0
  if (currRot + 360 > destRot - precision && currRot + 360 < destRot + precision) return 0
  if (currRot < destRot) {
    return (currRot + 360) - destRot < p.abs(currRot - destRot) ? -1 : 1
  }
  return (destRot + 360) - currRot < p.abs(destRot - currRot) ? 1 : -1
}

function getDegreeDistance(currRot, destRot) {
  const normCurr = normalise(currRot)
  const normDest = normalise(destRot)
  if (normCurr > normDest) {
    return p.min(normCurr - normDest, p.abs(normCurr - (normDest + 360)))
  } else {
    return p.min(normDest - normCurr, p.abs(normDest - (normCurr + 360)))
  }
}

function normalise(r) {
  if (r < 0) return p.abs(r + 360) % 360
  else return r % 360
}

export {getRotationDirection, getDegreeDistance, normalise}