import test from 'ava'

import * as utils from './../src'

test('should accumulate values', t => {
  t.deepEqual(utils.accumulate([1, 2, 3]), [1, 3, 6])
  t.deepEqual(utils.accumulate([1, 2, 3, 4]), [1, 3, 6, 10])
})

test('should generate an array of alphabetical characters', t => {
  t.deepEqual(utils.alphabet(), 'abcdefghijklmnopqrstuvwxyz'.split(''))
  t.deepEqual(utils.alphabet(10), 'abcdefghij'.split(''))
})

test('should returns the average of an array', t => {
  t.is(utils.average([1, 2, 3]), 2)
  t.is(utils.average([1, 2, 3, 4]), 2.5)
})

test('should create the cartesian product of two arrays', t => {
  t.deepEqual(utils.cartesianProduct([1, 2], ['a', 'b']), [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']])
  t.deepEqual(utils.cartesianProduct([1, 2], [3, 4]), [[1, 3], [1, 4], [2, 3], [2, 4]])
})

test('should returns an array split into chunks', t => {
  t.deepEqual(utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), [[1, 2, 3], [4, 5, 6], [7, 8]])
  t.deepEqual(utils.chunk([1, 2, 3, 4, 5, 6, 7, 8], 4), [[1, 2, 3, 4], [5, 6, 7, 8]])
  t.deepEqual(utils.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
  t.deepEqual(utils.chunk([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]])
})

test('should find the closest number in an array', t => {
  t.is(utils.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50), 33)
  t.is(utils.closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 30), 29)
  t.is(utils.closest([1, 2, 3], 2), 2)
  t.is(utils.closest([1, 2, 3], 0), 1)
  t.is(utils.closest([1, 2, 3], 4), 3)
  t.is(utils.closest([1, 2, 3], -1), 1)
})

test('should count by property', t => {
  let users = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3, name: 'foo' }
  ]

  t.deepEqual(utils.countBy(users, 'name'), { foo: 2, bar: 1 })

  const branches = [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' },
  ]

  t.deepEqual(utils.countBy(branches, 'branch'), { 'audi': 2, 'ford': 2, 'bmw': 1 })
})

test('should count occurrences', t => {
  t.deepEqual(utils.countOccurrences([2, 1, 3, 3, 2, 3]), { '1': 1, '2': 2, '3': 3 })
  t.deepEqual(utils.countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']), { 'a': 3, 'b': 2, 'c': 1 })
})

test('should count occurrences by property', t => {
  t.is(utils.countOccurrencesBy([2, 1, 3, 3, 2, 3], 2), 2)
  t.is(utils.countOccurrencesBy(['a', 'b', 'a', 'c', 'a', 'b'], 'a'), 3)
})

test('should calculate the division of an array', t => {
  t.is(utils.division([1, 2, 3, 4]), 0.041666666666666664)
  t.is(utils.division([1, 2, 3, 4, 5]), 0.008333333333333333)
})

test('should returns a flattened array', t => {
  t.deepEqual(utils.flatten([1, [2, [3, [4, [5]]]]], Infinity), [1, 2, 3, 4, 5])
  t.deepEqual(utils.flatten(['cat', ['lion', 'tiger']]), ['cat', 'lion', 'tiger'])
  t.deepEqual(utils.flatten([0, 1, 2, [[[3, 4]]]], 2), [0, 1, 2, [3, 4]])
})

test('should returns all arrays of consecutive elements', t => {
  t.deepEqual(utils.getConsecutiveArrays([1, 2, 3, 4, 5], 2), [[1, 2], [2, 3], [3, 4], [4, 5]])
  t.deepEqual(utils.getConsecutiveArrays([1, 2, 3, 4, 5], 3), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  t.deepEqual(utils.getConsecutiveArrays([1, 2, 3, 4, 5], 6), [])
})

test('should returns the intersection of arrays', t => {
  t.deepEqual(utils.getIntersection([1, 2, 3], [2, 3, 4]), [2, 3])
  t.deepEqual(utils.getIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3])
  t.deepEqual(utils.getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]), [3])
  t.deepEqual(utils.getIntersection([1, 2, 3, 4], [2, 3, 4], [3, 4, 5], [4, 5, 6]), [4])
})

test('should returns the maximum value index of an array', t => {
  t.is(utils.getMaxIndex([1, 2, 3, 4, 5]), 4)
  t.is(utils.getMaxIndex([1, 3, 9, 7, 5]), 2)
  t.is(utils.getMaxIndex([1, 3, 7, 7, 5]), 2)
})

test('should returns the minimum value index of an array', t => {
  t.is(utils.getMinIndex([6, 4, 8, 2, 10]), 3)
  t.is(utils.getMinIndex([6, 4, 2, 2, 10]), 2)
  t.is(utils.getMinIndex([1, 3, 7, 7, 5]), 0)
})

test('should returns all n-th elements of an array', t => {
  t.deepEqual(utils.getNthElements([1, 2, 3, 4, 5], 2), [2, 4])
  t.deepEqual(utils.getNthElements([1, 2, 3, 4, 5], 3), [3])
  t.deepEqual(utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2), [2, 4, 6, 8])
  t.deepEqual(utils.getNthElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [3, 6, 9])
  t.deepEqual(utils.getNthElements([1, 2, 3, 4, 5], 6), [])
})

test('should returns all subsets of an array', t => {
  t.deepEqual(utils.getSubsets([1, 2]), [[], [1], [2], [1, 2]])
  t.deepEqual(utils.getSubsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
})

test('should returns indices of all occurrences of a value in an array', t => {
  t.deepEqual(utils.getIndicesOf([1, 2, 3, 4, 5], 2), [1])
  t.deepEqual(utils.getIndicesOf([1, 2, 3, 4, 2], 2), [1, 4])
  t.deepEqual(utils.getIndicesOf([1, 2, 3, 4, 5], 6), [])
  t.deepEqual(utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'l'), [2, 3])
  t.deepEqual(utils.getIndicesOf(['h', 'e', 'l', 'l', 'o'], 'w'), [])
})

test('should group and array of objects by a property', t => {
  const people = [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' },
  ]

  const result = {
    audi: [
      { branch: 'audi', model: 'q8', year: '2019' },
      { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
      { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
      { branch: 'ford', model: 'mustang', year: '2019' },
      { branch: 'ford', model: 'explorer', year: '2020' }
    ]
  }

  t.deepEqual(utils.groupBy(people, 'branch'), result)
})

test('should returns the last matching element index', t => {
  t.is(utils.lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1), 4)
  t.is(utils.lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6), 5)
  t.is(utils.lastIndex([1, 2, 3, 1, 2, 3], (i) => i > 6), -1)
})

test('should returns the longest string index in an array', t => {
  t.is(utils.longestStringIndex(['foo', 'bar', 'baz']), 2)
  t.is(utils.longestStringIndex(['foo', 'bar', 'baz', 'qux']), 3)
  t.is(utils.longestStringIndex(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']), 4)
})

test('should returns the the maximun item of and array by key', t => {
  const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
  ]

  t.is(utils.maxBy(people, 'age'), people[2])
})

test('should returns the the minimun item of and array by key', t => {
  const people = [
    { name: 'Baz', age: 32 },
    { name: 'Bar', age: 24 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
  ]

  t.is(utils.minBy(people, 'age'), people[1])
})

test('should returns the partion of an array based on a predicate', t => {
  const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
  ]

  t.deepEqual(utils.partition(people, (person) => person.age > 30), [
    [
      { name: 'Baz', age: 32 },
      { name: 'Foo', age: 42 },
      { name: 'Fuzz', age: 36 }
    ], [
      { name: 'Bar', age: 24 }
    ]
  ])

  t.deepEqual(utils.partition([1, 2, 3, 4, 5], (n) => Boolean(n % 2)), [[1, 3, 5], [2, 4]])
})

test('should create the given range', t => {
  t.deepEqual(utils.range(0, 5), [0, 1, 2, 3, 4, 5])
  t.deepEqual(utils.range(5, 10), [5, 6, 7, 8, 9, 10])
  t.deepEqual(utils.range(5, 0), [])
  t.deepEqual(utils.range(5, 5), [5])
  t.deepEqual(utils.range(5, -5), [])
  t.deepEqual(utils.range(0, -5), [])
})

test('should returns the rank of an array of numbers', t => {
  t.deepEqual(utils.ranking([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  t.deepEqual(utils.ranking([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
  t.deepEqual(utils.ranking([80, 65, 90, 50]), [2, 3, 1, 4])
  t.deepEqual(utils.ranking([80, 80, 70, 50]), [1, 1, 3, 4])
  t.deepEqual(utils.ranking([80, 80, 80, 50]), [1, 1, 1, 4])
})

test('should repeat an array', t => {
  t.deepEqual(utils.repeat([1, 2, 3], 2), [1, 2, 3, 1, 2, 3])
  t.deepEqual(utils.repeat([1, 2, 3], 0), [])
  t.deepEqual(utils.repeat([1, 2, 3], -1), [])
})

test('should returns the shuffled array', t => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const shuffled = utils.shuffle(input)

  t.false(utils.isEqual(input, shuffled))
})

test('should sort an array of objects by a property', t => {
  const people = [
    { name: 'Foo', age: 42 },
    { name: 'Bar', age: 24 },
    { name: 'Fuzz', age: 36 },
    { name: 'Baz', age: 32 },
    { name: 'FooBar', age: 42 }
  ]

  const sorted = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Fuzz', age: 36 },
    { name: 'Foo', age: 42 },
    { name: 'FooBar', age: 42 }
  ]

  t.deepEqual(utils.sortBy(people, 'age'), sorted)
})

test('should swap the rows and columns of a matrix', t => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual(utils.transpose(matrix), [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
})

test('should swap two array items', t => {
  t.deepEqual(utils.swapItems([1, 2, 3, 4, 5], 0, 4), [5, 2, 3, 4, 1])
  t.deepEqual(utils.swapItems([1, 2, 3, 4, 5], 5, 6), [1, 2, 3, 4, 5])
})

test('should returns the union of arrays', t => {
  t.deepEqual(utils.union([1, 2, 3], ['a', 'b']), [1, 2, 3, 'a', 'b'])
  t.deepEqual(utils.union([1, 2, 3], [2, 3, 4, 5]), [1, 2, 3, 4, 5])
  t.deepEqual(utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]), [1, 2, 3, 4, 5])
  t.deepEqual(utils.union([1, 2, 3], [2, 3, 4, 5], [1, 3, 5], [1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
})

test('should returns the unique elements of an array', t => {
  t.deepEqual(utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5]), [1, 2, 3, 4, 5])
  t.deepEqual(utils.unique([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]), [1, 2, 3, 4, 5])
  t.deepEqual(utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e']), ['a', 'b', 'c', 'd', 'e'])
  t.deepEqual(utils.unique(['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e', 'e']), ['a', 'b', 'c', 'd', 'e'])
})

test('should unzip an array of arrays', t => {
  t.deepEqual(utils.unzip([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
  t.deepEqual(utils.unzip([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]])

  const zipped = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
  ]

  t.deepEqual(utils.unzip(zipped), [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]])
})

test('should return the zip of multiple arrays', t => {
  t.deepEqual(utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  t.deepEqual(utils.zip([1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3]), [[1, 4, 7, 1], [2, 5, 8, 2], [3, 6, 9, 3]])
  t.deepEqual(utils.zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])
  t.deepEqual(utils.zip(['a', 'b'], [1, 2], [true, false]), [['a', 1, true], ['b', 2, false]])
  t.deepEqual(utils.zip(['a'], [1, 2], [true, false]), [['a', 1, true], [undefined, 2, false]])
})
