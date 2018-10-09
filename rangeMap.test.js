const rangeMap = require("./index");

test("scales 50 from range 0-100 to 500 in range 0-1000", () => {
  expect(rangeMap(50, 0, 100, 0, 1000)).toBe(500);
});

test("scales 0 from range 0-100 to 0 in range 0-1000", () => {
  expect(rangeMap(0, 0, 100, 0, 1000)).toBe(0);
});

test("scales 8 from range 0-8 to 1100 in range 0-1000 when not clamped", () => {
  expect(rangeMap(8, 0, 8, 0, 1100)).toBe(1100);
});

test("scales 110 from range 0-100 to 1100 in range 0-1000 when not clamped", () => {
  expect(rangeMap(110, 0, 100, 0, 1000)).toBe(1100);
});

test("scales -15 from range 0-100 to -150 in range 0-1000 when not clamped", () => {
  expect(rangeMap(-15, 0, 100, 0, 1000)).toBe(-150);
});

test("scales -15 from range 0-100 to 0 in range 0-1000 when clamped", () => {
  expect(rangeMap(-15, 0, 100, 0, 1000, true)).toBe(0);
});

test("scales 800 from range 0-100 to 1000 in range 0-1000 when clamped", () => {
  expect(rangeMap(800, 0, 100, 0, 1000, true)).toBe(1000);
});
