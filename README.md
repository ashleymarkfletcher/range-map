# range-map
inspired by the **[Map](https://processing.org/reference/map_.html)** function in **[Processing](https://processing.org/)**. This module scales a number from one range to another

[![Build Status](https://travis-ci.org/ashleymarkfletcher/range-map.svg?branch=master)](https://travis-ci.org/ashleymarkfletcher/range-map)

## Installation

```bash
$ npm install range-map
```

## Example Usage

```js
var rangeMap = require('range-map')

var mapped = rangeMap(50, 0, 100, 0, 1000)

//mapped == 500
```
## API
`mapped(input, inputLowest, inputHighest, outputLowest, outputHighest)`

returns a number that has been rounded with `Math.round()`
The ranges will also work with negative numbers.   
