# range-map

inspired by the **[Map](https://processing.org/reference/map_.html)** function in **[Processing](https://processing.org/)**. This module scales a number from one range to another

[![NPM](https://nodei.co/npm/range-map.png?downloads=true)](https://nodei.co/npm/range-map/)

[![Build Status](https://travis-ci.org/ashleymarkfletcher/range-map.svg?branch=master)](https://travis-ci.org/ashleymarkfletcher/range-map)
[![codecov](https://codecov.io/gh/ashleymarkfletcher/range-map/branch/master/graph/badge.svg)](https://codecov.io/gh/ashleymarkfletcher/range-map)

## Installation

```bash
$ npm install range-map
```

## Example Usage

```js
var rangeMap = require("range-map");

var mapped = rangeMap(50, 0, 100, 0, 1000);

//mapped == 500

var clampMapped = rangeMap(500, 0, 100, 0, 1000, true);

//clampMapped == 1000
```

## API

`mapped(input, inputLowest, inputHighest, outputLowest, outputHighest, [clamped=false])`

returns a number that has been rounded with `Math.round()`
The ranges will also work with negative numbers.

If `clamped` is truthy then output value will be clamped to the minimum and maximum output values.
