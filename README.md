# Utility Library

![Node CI](https://github.com/devnetic/utils/workflows/Node%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/devnetic/utils/badge.svg?branch=master)](https://coveralls.io/github/devnetic/utils?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

This library tries to have efficient functions for almost any need when you are writing software in JavaScript or Node.js.

The library is written in TypeScript, so you have full type support when you use it.

If you need a function or feature that is not present in this library, please send me a message or open a Pull Request requesting the feature and I will do my best to include it.

# Installation

```shell
$ npm i -S @devnetic/utils
```

# Usage

```js
// commonjs
const { dateFormat } = require('@devnetic/utils)

const date = new Date('2020-04-24T18:12:02.432')

dateFormat(date, 'HH:mm:ss') // 18:12:02
dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

```js
// ES Module
import { dateFormat } from '@devnetic/utils'

const date = new Date('2020-04-24T18:12:02.432')

dateFormat(date, 'HH:mm:ss') // 18:12:02
dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

# Documentation

1. [Array](https://github.com/devnetic/utils/blob/master/docs/array.md)
2. [Date](https://github.com/devnetic/utils/blob/master/docs/date.md)
3. [Function](https://github.com/devnetic/utils/blob/master/docs/function.md)
4. [Math](https://github.com/devnetic/utils/blob/master/docs/math.md)
5. [Misc](https://github.com/devnetic/utils/blob/master/docs/misc.md)
6. [Number](https://github.com/devnetic/utils/blob/master/docs/number.md)
7. [Object](https://github.com/devnetic/utils/blob/master/docs/object.md)
8. [Random](https://github.com/devnetic/utils/blob/master/docs/random.md)
9. [String](https://github.com/devnetic/utils/blob/master/docs/string.md)
10. [Validator](https://github.com/devnetic/utils/blob/master/docs/validator.md)

# [Array Functions](https://github.com/devnetic/utils/blob/master/docs/array.md)

- **accumulate:** Create an array of cumulative sum.
- **alphabet:** Generate an array of alphabet characters.
- **average:** Get the average of an array.
- **cartesianProduct:** Create cartesian product.
- **castArray:** Casts value as an array if it's not one.
- **chunk:** Split an array into chunks.
- **closest:** Find the closest number from an array
- **countBy:** Count by the properties of an array of objects.
- **countOccurrences:** Count the occurrences of array elements.
- **countOccurrencesBy:** Count the occurrences of a given value in an array.
- **division:** Calculate the division of arguments.
- **flatten:** Flatten an array.
- **getConsecutiveArrays:** Get all arrays of consecutive elements.
- **getIndicesOf:** Get indices of a value in an array.
- **getIntersection:** Get the intersection of arrays.
- **getMaxIndex:** Find the index of the maximum item of an array
- **getMinIndex:** Find the index of the minimum item of an array
- **getNthElements:** Get all n-th items of an array.
- **getSubsets:** Get all subsets of an array.
- **groupBy:** Group an array of objects by a key.
- **lastIndex:** Find the index of the last matching item of an array.
- **longestStringIndex:** Find the index of the longest string in an array.
- **maxBy:** Find the maximum item of an array by given key.
- **minBy:** Find the minimum item of an array by given key.
- **partition:** Partition an array based on a condition.
- **range:** Create an array of numbers in the given range.
- **ranking:** Get the rank of an array of numbers
- **repeat:** Repeat an array.
- **shuffle:** Shuffle an array.
- **sortBy:** Sort an array of items by given key.
- **swapItems:** Swap two array items.
- **transpose:** Swap the rows and columns of a matrix.
- **union:** Get union of arrays.
- **unique:** Get the unique values of an array.
- **unzip:** Unzip an array of arrays
- **zip:** Zip multiple arrays.


# [Date Functions](https://github.com/devnetic/utils/blob/master/docs/date.md)

- **dateExtract:** Extract year, month, day, hour, minute, second and millisecond from a date.
- **dateFormat:** Returns a date formatted according to given format.
- **daysInMonth:** Get the number of days in given month.
- **daysInYear:** Get the total number of days in a year
- **daysDiff:** Calculate the number of difference days between two dates.
- **firstDateOfMonth:** Get the first date in the month of a date
- **formatSeconds:** Convert seconds to hh:mm:ss format
- **getQuarter:** Get the current quarter of a date.
- **getTimezone:** Get the timezone string.
- **getWeekday:** Get the weekday of a date.
- **lastDateOfMonth:** Get the last date in the month of a date.
- **monthDiff:** Calculate the number of difference days between two dates.
- **msToTime:** Transform a duration in milliseconds to human readable 'HH:mm:ss.m' format
- **suffixDate:** Add AM PM suffix to an hour.
- **tomorrow:** Get the tomorrow date.
- **yesterday:** Get the yesterday date.


## About

This project is developed by _Álvaro José Agámez Licha_. I love building products and sharing knowledge.

Be my friend on:

- **[T**witter](https://twitter.com/aagamezl)
- **[d**ev.to](https://dev.to/aagamezl)
- **[G**ithub](https://github.com/aagamezl)
