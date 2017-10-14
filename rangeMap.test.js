const rangeMap = require('./index');

test('scales 50 from range 0-100 to 500 in range 0-1000', () => {
  expect(rangeMap(50, 0, 100, 0, 1000)).toBe(500)
})
