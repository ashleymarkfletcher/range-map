//takes in a value and scales from it's initial range to another

const clamp = (val, min, max) => {
  return Math.max(min, Math.min(max, val));
};

const rangeMap = (
  input,
  inLow,
  inHigh,
  outLow,
  outHigh,
  clampValue = false
) => {
  const value =
    ((input - inLow) / (inHigh - inLow)) * (outHigh - outLow) + outLow;

  return clampValue ? clamp(value, outLow, outHigh) : value;
};

module.exports = rangeMap;
