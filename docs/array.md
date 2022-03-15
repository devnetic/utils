# Array Functions

## accumulate(array: number[]): number[]

Create an array of cumulative sum

```ts
utils.accumulate([1, 2, 3])  // [1, 3, 6])
utils.accumulate([1, 2, 3, 4])  // [1, 3, 6, 10])
```

---

## alphabet(length: number = 26): string[]

Generate an array of alphabet characters.

```ts
utils.alphabet()  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
utils.alphabet(10)  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
```

---

## average(array: number[]): number

Get the average of an array.

```ts
utils.average([1, 2, 3]),  // 2
utils.average([1, 2, 3, 4])  // 2.5
```

---

## cartesianProduct(...sets: Array<Array<string | number>>): Array<Array<string | number>>

Create cartesian product

```ts
utils.cartesianProduct([1, 2], ['a', 'b'])  // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
utils.cartesianProduct([1, 2], [3, 4])  // [[1, 3], [1, 4], [2, 3], [2, 4]]
```

---

## closest(array: number[], target: number): number

Find the closest number from an array

```ts
utils.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50)  // 33
utils.closest([1, 2, 3], 2)  // 2
utils.closest([1, 2, 3], -1)  // 1
```

---

## chunk<T,>(arr: T[], size: number): T[][]

Split an array into chunks.

```ts
utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)  // [[1, 2, 3], [4, 5, 6], [7, 8]]
utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 4)  // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

---

## countBy<T extends Record<string, unknown>, K extends keyof T>(array: T[], prop: K): Record<string, number>

Count by the properties of an array of objects.

```ts
const branches = [
  { branch: 'audi', model: 'q8', year: '2019' },
  { branch: 'audi', model: 'rs7', year: '2020' },
  { branch: 'ford', model: 'mustang', year: '2019' },
  { branch: 'ford', model: 'explorer', year: '2020' },
  { branch: 'bmw', model: 'x7', year: '2020' },
]

utils.countBy(branches, 'branch')  // { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

---

## countOccurrences<T extends string | number>(array: T[]): Record<T, number>

Count the occurrences of array elements.

```ts
utils.countOccurrences([2, 1, 3, 3, 2, 3])  // { '1': 1, '2': 2, '3': 3 }
utils.countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'])  // { 'a': 3, 'b': 2, 'c': 1 }
```

---

## countOccurrencesBy<T, K extends T>(array: T[], value: K): number

Count the occurrences of a value in an array.

```ts
utils.countOccurrencesBy([2, 1, 3, 3, 2, 3], 2)  // 2
utils.countOccurrencesBy(['a', 'b', 'a', 'c', 'a', 'b'], 'a')  // 3
```

---

## division(numbers: number[]): number

Calculate the division of arguments.

```ts
utils.division([1, 2, 3, 4]),     // 0.041666666666666664
utils.division([1, 2, 3, 4, 5]),  // 0.008333333333333333
```

---

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

---

## getConsecutiveArrays<T,>(array: T[], size: number): T[][]

Get all arrays of consecutive elements.

```ts
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 2)  // [[1, 2], [2, 3], [3, 4], [4, 5]])
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 3)  // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
utils.getConsecutiveArrays([1, 2, 3, 4, 5], 6)  // []
```

---

## getIndicesOf<T>(array: T[], value: T): number[]

Get indices of a value in an array.

```ts
utils.getIndicesOf([1, 2, 3, 4, 5], 2)  // [1]
utils.getIndicesOf([1, 2, 3, 4, 2], 2)  // [1, 4]
utils.getIndicesOf([1, 2, 3, 4, 5], 6)  // []
utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'l')  // [2, 3]
utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'w')  // []
```

---

## getIntersection<T>(array: T[], ...arr: T[][]): T[]

Get the intersection of arrays.

```ts
utils.getIntersection([1, 2, 3], [2, 3, 4])  // [2, 3]
utils.getIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5])  // [3]
utils.getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5])  // [3]
utils.getIntersection([1, 2, 3, 4], [2, 3, 4], [3, 4, 5], [4, 5, 6])  // [4]
```

---

## getMaxIndex(array: number[]): number 

Find the index of the maximum item of an array

```ts
utils.getMaxIndex([1, 2, 3, 4, 5])  // 4
utils.getMaxIndex([1, 3, 9, 7, 5])  // 2
utils.getMaxIndex([1, 3, 7, 7, 5])  // 2
```

---

## getMinIndex(array: number[]): number 

Find the index of the minimum item of an array

```ts
utils.getMinIndex([6, 4, 8, 2, 10])  // 3
utils.getMinIndex([6, 4, 2, 2, 10])  // 2
utils.getMinIndex([1, 3, 7, 7, 5])  // 0
```

---

## getNthElements<T,>(array: T[], nth: number): T[]

Get all n-th items of an array.

```ts
utils.getNthElements([1, 2, 3, 4, 5], 2)  // [2, 4]
utils.getNthElements([1, 2, 3, 4, 5], 3)  // [3]
utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)  // [2, 4, 6, 8]
utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)  // [3, 6, 9]
utils.getNthElements([1, 2, 3, 4, 5], 6)  // []
```

---

## getSubsets<T>(array: T[]): T[][]

 Get all subsets of an array.

```ts
utils.getSubsets([1, 2])  // [[]  // [1], [2], [1, 2]]
utils.getSubsets([1, 2, 3])  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
```

---

## groupBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): Record<string, T[]>

Group an array of objects by a key.

```ts
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

---

## lastIndex<T,>(arr: T[], predicate: (a: T) => boolean): number

Find the index of the last matching item of an array.

```ts
utils.lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1)  // 4
utils.lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6)  // 5
utils.lastIndex([1, 2, 3, 1, 2, 3], (i) => i > 6)  // -1
```

---

## longestStringIndex(words: string[]): number

Find the index of the longest string in an array

```ts
utils.longestStringIndex(['foo', 'bar', 'baz'])  // 2
utils.longestStringIndex(['foo', 'bar', 'baz', 'qux'])  // 3
utils.longestStringIndex(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life'])  // 4
```

---

## maxBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T

Find the maximum item of an array by given key.

```ts
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]

utils.maxBy(people, 'age') // { name: 'Foo', age: 42 }
```
---

## merge<T,>(a: T[], b: T[]): T[]

Merge two arrays.

```ts
utils.merge([1, 2, 3, 4], [4, 5, 6])  // [1, 2, 3, 4, 5, 6]
utils.merge([1, 2, 3], [4, 5, 6])  // [1, 2, 3, 4, 5, 6]
```

---

## minBy<T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T

Find the minimum item of an array by given key.

```ts
const people = [
  { name: 'Bar', age: 24 },
  { name: 'Baz', age: 32 },
  { name: 'Foo', age: 42 },
  { name: 'Fuzz', age: 36 },
]

utils.minBy(people, 'age') // { name: 'Bar', age: 24 }
```

---

## partition<T,>(arr: T[], criteria: (a: T) => boolean): T[][]

Partition an array based on a condition.

```ts
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

---

## range(min: number, max: number): number[]

Create an array of numbers in the given range.

```ts
utils.range(0, 5)  // [0, 1, 2, 3, 4, 5]
utils.range(5, 10)  // [5, 6, 7, 8, 9, 10]
```

---

## ranking(array: number[]): number[]

Get the rank of an array of numbers

```ts
utils.ranking([1, 2, 3, 4, 5])  // [5, 4, 3, 2, 1]
utils.ranking([5, 4, 3, 2, 1])  // [1, 2, 3, 4, 5]
utils.ranking([80, 65, 90, 50])  // [2, 3, 1, 4]
utils.ranking([80, 80, 70, 50])  // [1, 1, 3, 4]
utils.ranking([80, 80, 80, 50])  // [1, 1, 1, 4]
```

---

## repeat<T,>(arr: T[], n: number): T[]

Repeat an array.

```ts
utils.repeat([1, 2, 3], 2)  // [1, 2, 3, 1, 2, 3]
utils.repeat([1, 2, 3], 0)  // []
utils.repeat([1, 2, 3], -1)  // []
```

---

## shuffle<T,>(input: T[]): T[]

Shuffle an array.

```ts
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
utils.shuffle(input)  // // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

---

## sortBy<T extends Record<string, any>, K extends keyof T>(input: T[], k: K): T[]

Sort an array of items by given key.

```ts
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

---

## swapItems<T,>(a: T[], i: number, j: number): T[]

Swap two array items.

```ts
utils.swapItems([1, 2, 3, 4, 5], 0, 4)  // [5, 2, 3, 4, 1]
utils.swapItems([1, 2, 3, 4, 5], 5, 6)  // [1, 2, 3, 4, 5]
```

---

## transpose<T,>(matrix: T[][]): T[][]

Swap the rows and columns of a matrix.

```ts
utils.transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])

// [1, 4, 7],
// [2, 5, 8],
// [3, 6, 9],
```

---

## union<T,>(...arrays: T[][]): T[]

Get union of arrays.

```ts
utils.union([1, 2, 3], [2, 3, 4, 5])  // [1, 2, 3, 4, 5]
utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5])  // [1, 2, 3, 4, 5]
utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5], [1, 2, 3, 4, 5])  // [1, 2, 3, 4, 5]
```

---

## unique<T>(array: T[]): T[]

Get the unique values of an array.

```ts
utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5])  // 1, 2, 3, 4, 5]
utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])  // 1, 2, 3, 4, 5])
utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e'])  // 'a', 'b', 'c', 'd', 'e'])
utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e', 'e'])  // 'a', 'b', 'c', 'd', 'e'])
```

---

## unzip<T>(arr: T[]): T[]

Unzip an array of arrays

```ts
const zipped = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
]

utils.unzip(zipped)  // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]])
```

---

## zip<T extends any[]>(...arrays: T[]): T[]

Zip multiple arrays.

```ts
utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9])  // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3])  // [[1, 4, 7, 1], [2, 5, 8, 2], [3, 6, 9, 3]]
utils.zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])  // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
utils.zip(['a', 'b'], [1, 2], [true, false])  // [['a', 1, true], ['b', 2, false]]
utils.zip(['a'], [1, 2], [true, false])  // [['a', 1, true], [undefined, 2, false]]
```
