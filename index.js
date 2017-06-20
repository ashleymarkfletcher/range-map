//takes in a value and scales from it's initial range to another
module.exports = (input, inLow, inHigh, outLow, outHigh) => {
  return Math.round((input-inLow)/(inHigh-inLow) * (outHigh-outLow) + outLow)
}
