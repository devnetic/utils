import test from 'ava'

import * as utils from './../src'

test('should accumulate values', t => {
  t.deepEqual(utils.accumulate([1, 2, 3]), [1, 3, 6])
  t.deepEqual(utils.accumulate([1, 2, 3, 4]), [1, 3, 6, 10])
})

test('should create the cartesian product of two arrays', t => {
  t.deepEqual(utils.cartesianProduct([1, 2], ['a', 'b']), [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']])
  t.deepEqual(utils.cartesianProduct([1, 2], [3, 4]), [[1, 3], [1, 4], [2, 3], [2, 4]])
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

test('should returns a flattened array', t => {
  t.deepEqual(utils.flatten([1, [2, [3, [4, [5]]]]], Infinity), [1, 2, 3, 4, 5])
  t.deepEqual(utils.flatten(['cat', ['lion', 'tiger']]), ['cat', 'lion', 'tiger'])
  t.deepEqual(utils.flatten([0, 1, 2, [[[3, 4]]]], 2), [0, 1, 2, [3, 4]])
})

test('should returns the object created from entries', t => {
  const arrayEntries = [['0', 'a'], ['1', 'b'], ['2', 'c']]
  const mapEntries = new Map([
    ['foo', 'bar'],
    ['baz', '42']
  ])
  mapEntries.set('key', '123')

  t.deepEqual(utils.fromEntries(arrayEntries), { 0: 'a', 1: 'b', 2: 'c' })
  t.deepEqual(utils.fromEntries(mapEntries), { foo: 'bar', baz: '42', key: '123' })
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

test('should returns the last matching element index', t => {
  t.is(utils.lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1), 4)
  t.is(utils.lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6), 5)
  t.is(utils.lastIndex([1, 2, 3, 1, 2, 3], (i) => i > 6), -1)
})

test('should return the longest string index in an array', t => {
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
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
  ]

  t.is(utils.minBy(people, 'age'), people[0])
})

test('should create the given range', t => {
  t.deepEqual(utils.range(0, 5), [0, 1, 2, 3, 4, 5])
  t.deepEqual(utils.range(5, 10), [5, 6, 7, 8, 9, 10])
  t.deepEqual(utils.range(5, 0), [])
  t.deepEqual(utils.range(5, 5), [5])
  t.deepEqual(utils.range(5, -5), [])
  t.deepEqual(utils.range(0, -5), [])
})
