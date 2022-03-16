import test from 'ava'

import * as utils from './../src'

test('should create a empty object', t => {
  const object = utils.createObject()

  t.deepEqual(object, {})
  t.is(Object.keys(object).length, 0)
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

test('should extract values of a property from an array of object', t => {
  t.deepEqual(utils.pluck([{ a: 1 }, { a: 2 }, { a: 3 }], 'a'), [1, 2, 3])
  t.deepEqual(utils.pluck(
      [
        { name: 'John', age: 20 },
        { name: 'Smith', age: 25 },
        { name: 'Peter', age: 30 },
      ],
      'name'
    ),
    ['John', 'Smith', 'Peter']
  )
})


test('should get the value at given path of an object', t => {
  const obj = {
    a: {
      b: {
        c: 42
      }
    }
  }

  t.is(utils.getValue(obj, 'a.b.c'), 42)
  t.is(utils.getValue(obj, 'a.b.c.d'), undefined)
  t.is(utils.getValue(obj, 'a.b.c.d', 'default'), 'default')
})
