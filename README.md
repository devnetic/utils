# Utility Library

Common utils for every single day tasks.

![Node CI](https://github.com/devnetic/utils/workflows/Node%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/devnetic/utils/badge.svg?branch=master)](https://coveralls.io/github/devnetic/utils?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

# Array

## accumulate(array: number[]): number[]

Create an array of cumulative sum

```js
utils.accumulate([1, 2, 3])  // [1, 3, 6])
utils.accumulate([1, 2, 3, 4])  // [1, 3, 6, 10])
```

## alphabet(length: number = 26): string[]

Generate an array of alphabet characters.

```js
utils.alphabet()  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
utils.alphabet(10)  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
```

## average(array: number[]): number

Get the average of an array.

```js
utils.average([1, 2, 3]),  // 2
utils.average([1, 2, 3, 4])  // 2.5
```

## cartesianProduct(...sets: Array<Array<string | number>>): Array<Array<string | number>>

Create cartesian product

```js
utils.cartesianProduct([1, 2], ['a', 'b'])  // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
utils.cartesianProduct([1, 2], [3, 4])  // [[1, 3], [1, 4], [2, 3], [2, 4]]
```

## closest(array: number[], target: number): number

Find the closest number from an array

```js
utils.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50)  // 33
utils.closest([1, 2, 3], 2)  // 2
utils.closest([1, 2, 3], -1)  // 1
```

## chunk<T,>(arr: T[], size: number): T[][]

Split an array into chunks.

```js
utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)  // [[1, 2, 3], [4, 5, 6], [7, 8]]
utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 4)  // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

## countBy<T extends Record<string, unknown>, K extends keyof T>(array: T[], prop: K): Record<string, number>

Count by the properties of an array of objects.

```js
const branches = [
  { branch: 'audi', model: 'q8', year: '2019' },
  { branch: 'audi', model: 'rs7', year: '2020' },
  { branch: 'ford', model: 'mustang', year: '2019' },
  { branch: 'ford', model: 'explorer', year: '2020' },
  { branch: 'bmw', model: 'x7', year: '2020' },
]

utils.countBy(branches, 'branch')  // { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

## countOccurrences<T extends string | number>(array: T[]): Record<T, number>

Count the occurrences of array elements.

```js
utils.countOccurrences([2, 1, 3, 3, 2, 3])  // { '1': 1, '2': 2, '3': 3 }
utils.countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'])  // { 'a': 3, 'b': 2, 'c': 1 }
```

## countOccurrencesBy<T, K extends T>(array: T[], value: K): number

Count the occurrences of a value in an array.

```js
utils.countOccurrencesBy([2, 1, 3, 3, 2, 3], 2)  // 2
utils.countOccurrencesBy(['a', 'b', 'a', 'c', 'a', 'b'], 'a')  // 3
```

## fromEntries(entries: IterableIterator<[string, string]>): Object

This function transforms a list of key-value pairs into an object.

```javascript
utils.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']])  // { 0: 'a', 1: 'b', 2: 'c' }

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])
utils.fromEntries(entries)  // { foo: 'bar', baz: 42 }
```

## getConsecutiveArrays<T,>(array: T[], size: number): T[][]

Get all arrays of consecutive elements.

```js
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 2)  // [[1, 2], [2, 3], [3, 4], [4, 5]])
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 3)  // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 6)  // []
```

## getIndicesOf<T>(array: T[], value: T): number[]

Get indices of a value in an array.

```js
utils.getIndicesOf([1, 2, 3, 4, 5], 2)  // [1]
utils.getIndicesOf([1, 2, 3, 4, 2], 2)  // [1, 4]
utils.getIndicesOf([1, 2, 3, 4, 5], 6)  // []
utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'l')  // [2, 3]
utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'w')  // []
```

## getIntersection<T>(array: T[], ...arr: T[][]): T[]

Get the intersection of arrays.

```js
utils.getIntersection([1, 2, 3], [2, 3, 4])  // [2, 3]
utils.getIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5])  // [3]
utils.getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5])  // [3]
utils.getIntersection([1, 2, 3, 4], [2, 3, 4], [3, 4, 5], [4, 5, 6])  // [4]
```

## getMaxIndex(array: number[]): number 

Find the index of the maximum item of an array

```js
utils.getMaxIndex([1, 2, 3, 4, 5])  // 4
utils.getMaxIndex([1, 3, 9, 7, 5])  // 2
utils.getMaxIndex([1, 3, 7, 7, 5])  // 2
```

## getMinIndex(array: number[]): number 

Find the index of the minimum item of an array

```js
utils.getMinIndex([6, 4, 8, 2, 10])  // 3
utils.getMinIndex([6, 4, 2, 2, 10])  // 2
utils.getMinIndex([1, 3, 7, 7, 5])  // 0
```

## getNthElements<T,>(array: T[], nth: number): T[]

Get all n-th items of an array.

```js
utils.getNthElements([1, 2, 3, 4, 5], 2)  // [2, 4]
utils.getNthElements([1, 2, 3, 4, 5], 3)  // [3]
utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)  // [2, 4, 6, 8]
utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)  // [3, 6, 9]
utils.getNthElements([1, 2, 3, 4, 5], 6)  // []
```

## getSubsets<T>(array: T[]): T[][]

 Get all subsets of an array.

```js
utils.getSubsets([1, 2])  // [[]  // [1], [2], [1, 2]]
utils.getSubsets([1, 2, 3])  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
```

## groupBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): Record<string, T[]>

Group an array of objects by a key.

```js
const people = [
  { branch: 'audi', model: 'q8', year: '2019' },
  { branch: 'audi', model: 'rs7', year: '2020' },
  { branch: 'ford', model: 'mustang', year: '2019' },
  { branch: 'ford', model: 'explorer', year: '2020' },
  { branch: 'bmw', model: 'x7', year: '2020' },
]

utils.groupBy(people, 'branch')

// {
//   audi: [
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' }
//   ],
//   bmw: [
//     { branch: 'bmw', model: 'x7', year: '2020' }
//   ],
//   ford: [
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' }
//   ]
// }
```

## lastIndex<T,>(arr: T[], predicate: (a: T) => boolean): number

Find the index of the last matching item of an array.

```js
utils.lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1)  // 4
utils.lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6)  // 5
utils.lastIndex([1, 2, 3, 1, 2, 3], (i) => i > 6)  // -1
```

## longestStringIndex(words: string[]): number

Find the index of the longest string in an array

```js
utils.longestStringIndex(['foo', 'bar', 'baz'])  // 2
utils.longestStringIndex(['foo', 'bar', 'baz', 'qux'])  // 3
utils.longestStringIndex(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life'])  // 4
```

## maxBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T

Find the maximum item of an array by given key.

```js
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]

utils.maxBy(people, 'age') // { name: 'Foo', age: 42 }
```

## merge<T,>(a: T[], b: T[]): T[]

Merge two arrays.

```js
utils.merge([1, 2, 3, 4], [4, 5, 6])  // [1, 2, 3, 4, 5, 6]
utils.merge([1, 2, 3], [4, 5, 6])  // [1, 2, 3, 4, 5, 6]
```

## minBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T

Find the minimum item of an array by given key.

```js
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]

utils.minBy(people, 'age') // { name: 'Bar', age: 24 }
```

## partition<T,>(arr: T[], criteria: (a: T) => boolean): T[][]

Partition an array based on a condition.

```js
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]

utils.partition(people, (person) => person.age > 30)

// [
//   [
//     { name: 'Baz', age: 32 },
//     { name: 'Foo', age: 42 },
//     { name: 'Fuzz', age: 36 }
//   ], [
//     { name: 'Bar', age: 24 }
//   ]
// ]
```

## range(min: number, max: number): number[]

Create an array of numbers in the given range.

```js
utils.range(0, 5)  // [0, 1, 2, 3, 4, 5]
utils.range(5, 10)  // [5, 6, 7, 8, 9, 10]
```

## ranking(array: number[]): number[]

Get the rank of an array of numbers

```js
utils.ranking([1, 2, 3, 4, 5])  // [5, 4, 3, 2, 1]
utils.ranking([5, 4, 3, 2, 1])  // [1, 2, 3, 4, 5]
utils.ranking([80, 65, 90, 50])  // [2, 3, 1, 4]
utils.ranking([80, 80, 70, 50])  // [1, 1, 3, 4]
utils.ranking([80, 80, 80, 50])  // [1, 1, 1, 4]
```

## repeat<T,>(arr: T[], n: number): T[]

Repeat an array.

```js
utils.repeat([1, 2, 3], 2)  // [1, 2, 3, 1, 2, 3]
utils.repeat([1, 2, 3], 0)  // []
utils.repeat([1, 2, 3], -1)  // []
```

## shuffle<T,>(input: T[]): T[]

Shuffle an array.

```js
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
utils.shuffle(input)  // // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

## sortBy<T extends Record<string, any>, K extends keyof T>(input: T[], k: K): T[]

Sort an array of items by given key.

```js
const people = [
  { name: 'Foo', age: 42 },
  { name: 'Bar', age: 24 },
  { name: 'Fuzz', age: 36 },
  { name: 'Baz', age: 32 },
]

utils.sortBy(people, 'age')

// [
//   { name: 'Bar', age: 24 },
//   { name: 'Baz', age: 32 },
//   { name: 'Fuzz', age: 36 },
//   { name: 'Foo', age: 42 },
// ]
```

## swapItems<T,>(a: T[], i: number, j: number): T[]

Swap two array items.

```js
utils.swapItems([1, 2, 3, 4, 5], 0, 4)  // [5, 2, 3, 4, 1]
utils.swapItems([1, 2, 3, 4, 5], 5, 6)  // [1, 2, 3, 4, 5]
```

## transpose<T,>(matrix: T[][]): T[][]

Swap the rows and columns of a matrix.

```js
utils.transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])

// [1, 4, 7],
// [2, 5, 8],
// [3, 6, 9],
```

## union<T,>(...arrays: T[][]): T[]

Get union of arrays.

```js
utils.union([1, 2, 3], [2, 3, 4, 5])  // [1, 2, 3, 4, 5]
utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5])  // [1, 2, 3, 4, 5]
utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5], [1, 2, 3, 4, 5])  // [1, 2, 3, 4, 5]
```

## unique<T>(array: T[]): T[]

Get the unique values of an array.

```js
utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5])  // 1, 2, 3, 4, 5]
utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])  // 1, 2, 3, 4, 5])
utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e'])  // 'a', 'b', 'c', 'd', 'e'])
utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e', 'e'])  // 'a', 'b', 'c', 'd', 'e'])
```

## unzip<T>(arr: T[]): T[]

Unzip an array of arrays

```js
const zipped = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
]

utils.unzip(zipped)  // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]])
```

## zip<T extends any[]>(...arrays: T[]): T[]

Zip multiple arrays.

```js
utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9])  // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3])  // [[1, 4, 7, 1], [2, 5, 8, 2], [3, 6, 9, 3]]
utils.zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])  // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
utils.zip(['a', 'b'], [1, 2], [true, false])  // [['a', 1, true], ['b', 2, false]]
utils.zip(['a'], [1, 2], [true, false])  // [['a', 1, true], [undefined, 2, false]]
```

# Date

## dateFormat(time: Date, format: string, monthNames: string[] = [], dayNames: string[] = []): string

Returns a date formatted according to given format.

### Year, month, and day tokens (*Tokens are case-sensitive*).

| Input       | Example          | Description |
| ----------- | ---------------- | ----------- |
| `YYYY`      | `2014`           | 4 or 2 digit year |
| `YY`        | `14`             | 2 digit year |
| `M MM`      | `1..12`          | Month number |
| `MMM MMMM`  | `Jan..December`  | Month name in default English locale or set by function parameter |
| `DD`        | `01..31`         | Day of month |

### Hour, minute, second, millisecond, and offset tokens. (*Tokens are case-sensitive*).

| Input          | Example  | Description |
| -------------- | -------- | ----------- |
| `H HH`         | `0..23`  | Hours (24 hour time) |
| `h hh`         | `1..12`  | Hours (12 hour time used with `a A`.) |
| `a A`          | `am PM`  | Post or ante meridiem |
| `m mm`         | `0..59`  | Minutes |
| `s ss`         | `0..59`  | Seconds |
| `u`            | `436`    | Fractional seconds |

```javascript
const date = new Date('2020-04-24T18:12:02.432')

utils.dateFormat(date, 'HH:mm:ss') // 18:12:02
utils.dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

## msToTime(milliseconds: number): string

This function receive a milliseconds parameter and an optional format parameter; format parameter is any valid `dateFormat()` function format string.

```javascript
const date = new Date('2020-04-24T18:12:02.432')

const HOUR = 60 * 60 * 1000
const MINUTE = 60 * 1000
const SECOND = 1000

utils.msToTime((22 * HOUR) + (26 * MINUTE) + (43 * SECOND)) // 22:26:43.0
utils.msToTime((10 * HOUR) + (26 * MINUTE) + (43 * SECOND)) // 10:26:43.0
utils.msToTime(MINUTE + (25 * SECOND)) // 00:01:25.0
utils.msToTime(MINUTE + 500) // '00:01:00.5'
```

# Language

## getType(value: unknown): string

This function returns the value type, but this function is not just a typeof wrapper, because actually can determinate a more detailed data type. The data type is always a string starting with capital letter.

```javascript
utils.getType({})  // 'Object'
utils.getType(new Date())  // 'Date'
utils.getType(String())  // 'String'
utils.getType('')  // 'String'
utils.getType('123')  // 'String'
utils.getType(123)  // 'Number'
utils.getType(123.4)  // 'Number'
utils.getType(true)  // 'Boolean'
utils.getType(false)  // 'Boolean'
utils.getType(BigInt(1))  // 'BigInt'
utils.getType([])  // 'Array'
utils.getType(new Int16Array(3))  // 'Int16Array'
```

## isEqual(value: any, other: any): boolean

This function evaluate equality between two values, the values could by any data type, including nested object.

```javascript
utils.isEqual(1, 1)  // true
utils.isEqual(1.23, 1.23)  // true
utils.isEqual('1', '1')  // true
utils.isEqual(true, true)  // true
utils.isEqual(undefined, undefined)  // true
utils.isEqual(null, null)  // true
utils.isEqual({}, {})  // true
utils.isEqual({ foo: 'bar' }, { foo: 'bar' })  // true
utils.isEqual([], [])  // true
utils.isEqual(['foo'], ['foo'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'bar' }, 1, 'a'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'baz' }, 1, 'a'])  // false
utils.isEqual(true, 1)  // false
utils.isEqual({ foo: 'bar' }, {})  // false
```

## isFloat(value: any): boolean

This function check is a value is a valid float value.

```javascript
utils.isFloat(123.4)  // true
utils.isFloat(-123.4)  // true
utils.isFloat(Math.PI)  // true
utils.isFloat('123')  // false
utils.isFloat(123)  // false
utils.isFloat(-123)  // false
utils.isFloat('-123')  // false
utils.isFloat('a')  // false
utils.isFloat({})  // false
utils.isFloat('')  // false
utils.isFloat([])  // false
```

## isInteger(value: any): boolean

This function check is a value is a valid float value.

```javascript
utils.isInteger(42) // true
utils.isInteger('42') // true
utils.isInteger(4e2)  // true
utils.isInteger('4e2')  // true
utils.isInteger(' 1 ')  // true
utils.isInteger(0.0)  // true
utils.isInteger(Math.PI)  // false
utils.isInteger('') // false
utils.isInteger(' ')  // false
utils.isInteger('a')  // false
utils.isInteger(42.1) // false
utils.isInteger('1a') // false
utils.isInteger('4e2a') // false
utils.isInteger({}) // false
utils.isInteger('') // false
utils.isInteger([]) // false
utils.isInteger(null) // false
utils.isInteger(undefined)  // false
utils.isInteger(NaN)  // false
```

## isJSON(value: any): boolean

This function check is a value is a valid JSON value.

```javascript
utils.isJSON({})  // true
utils.isJSON({ foo: 'bar' })  // true
utils.isJSON(true)  // false
utils.isJSON(false)  // false
utils.isJSON(new Date())  // false
utils.isJSON('')  // false
utils.isJSON(1)  // false
utils.isJSON(1.23)  // false
utils.isJSON({ foo: BigInt(9007199254740991) })  // false
```

## isNumber(value: any): boolean

This function checks if value is classified as a Number primitive or object.

```javascript
utils.isNumeric('123')  // true
utils.isNumeric(123)  // true
utils.isNumeric(123.4)  // true
utils.isNumeric('-123.4')  // true
utils.isNumeric(-123)  // true
utils.isNumeric('-123')  // true
utils.isNumeric(Math.PI)  // true
utils.isNumeric('a')  // false
utils.isNumeric({})  // false
utils.isNumeric('')  // false
utils.isNumeric([])  // false
```

## isNumeric(value: any): boolean

This function check is a string value is a valid numeric value.

```javascript
utils.isNumeric('123')  // true
utils.isNumeric(123)  // true
utils.isNumeric(123.4)  // true
utils.isNumeric('-123.4')  // true
utils.isNumeric(-123)  // true
utils.isNumeric('-123')  // true
utils.isNumeric(Math.PI)  // true
utils.isNumeric('a')  // false
utils.isNumeric({})  // false
utils.isNumeric('')  // false
utils.isNumeric([])  // false
```

# String

## camelCase(value: string): string

Convert a string to camel case. Each word is separated by a single uppercase letter and the first word begins with a lowercase.

```javascript
utils.camelCase('someValue')  // someValue
utils.camelCase('some value')  // someValue
utils.camelCase('some  value')  // someValue
utils.camelCase('SOME VALUE')  // someValue
```

## kebabCase(value: string): string

Converts string to kebab case. Kebab case is a programming variable naming convention where a developer replaces the spaces between words with a dash.

```javascript
utils.kebabCase('someValue')  // some-value
utils.kebabCase('some value')  // some-value
utils.kebabCase('some  value')  // some-value
utils.kebabCase('SOME VALUE')  // some-value
```

## lcfirst(value: string): string 

Convert the first character of a string to lowercase; the rest of the value characters are not converted and are returned the same.

```javascript
utils.lcfirst('someValue')  // someValue
utils.lcfirst('somevalue')  // somevalue
utils.lcfirst('SOME VALUE')  // sOME VALUE
utils.lcfirst('SOMEVALUE')  // sOMEVALUE
```

## pascalCase(value: string): string

Convert a string to pascal case (upper camelcase). First letter of each word in a compound word is capitalized

```javascript
utils.pascalCase('someValue')  // SomeValue
utils.pascalCase('some value')  // SomeValue
utils.pascalCase('some  value')  // SomeValue
utils.pascalCase('SOME VALUE')  // SomeValue
```

## plural(value: string): string

Pluralize any word.

```javascript
utils.plural('')  // Somevalue
utils.plural('') // Some Value
utils.plural('')  // Some_value
utils.plural('')  // Some Value
```

## snakeCase(value: string): string

Converts string to snake case. Snake case (stylized as snake_case) refers to the style of writing in which each space is replaced by an underscore (_) character, and the first letter of each word written in lowercase.

```javascript
utils.snakeCase('someValue')  // some_value
utils.snakeCase('some value')  // some_value
utils.snakeCase('some  value')  // some_value
utils.snakeCase('SOME VALUE')  // some_value
```

## titleCase(value: string): string

Transform a string into title case following English rules

```javascript
utils.titleCase('someValue')  // Somevalue
utils.titleCase('some value') // Some Value
utils.titleCase('some  value')  // Some_value
utils.titleCase('SOME VALUE')  // Some Value
```

## ucwords(value: string, separators?: string): string

Uppercase the first character of each word in a string.

```javascript
  utils.ucwords('apple cider')  // Apple Cider
  utils.ucwords('HELLO WORLD!')  // HELLO WORLD!
  utils.ucwords('HELLO WORLD!'.toLowerCase())  // HelloWorld!
  utils.ucwords('hello|world!')  // Hello|world!
  utils.ucwords('hello|world!'  // '|')  // Hello|World!
  utils.ucwords(`mike o'hara`)  // Mike O'hara
  utils.ucwords(`mike o'hara`, ` \t\r\n\f\v'`)  // MikeO'Hara
  utils.ucwords('')  // ''
```

# Utils

## matchAll(value: string, regex: RegExp): RegExpMatchArray[]

This function returns all matches for the given RegEx.

```javascript
utils.matchAll('Lorem', /[aeiou]/g)  // [... two matches objects]
utils.matchAll('Lorem', /[abcd]/g)  // []
```

## uuid(): string

This function returns all matches for the given RegEx.

```javascript
utils.uuid()  // Version 4 UUID Example: // 056e34a3-f88e-4d48-a001-bf70c9aefa40
```
