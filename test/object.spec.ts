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

test('should inverted the keys and values of an object', t => {
  const obj = {
    foo: 'bar',
    baz: 'fuzz',
    ergo: 'lorem'
  }

  t.deepEqual(utils.invert(obj), { bar: 'foo', fuzz: 'baz', lorem: 'ergo' })
})

test('should omit a subset of properties from an object', t => {
  const obj = {
    foo: 'bar',
    baz: 'fuzz',
    ergo: 'lorem'
  }

  t.deepEqual(utils.omit(obj, ['foo', 'ergo']), { baz: 'fuzz' })
})

test('should pick a subset of properties from an object', t => {
  const obj = {
    foo: 'bar',
    baz: 'fuzz',
    ergo: 'lorem'
  }

  t.deepEqual(utils.pick(obj, ['foo', 'ergo']), { foo: 'bar', ergo: 'lorem' })
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

test('should remove null and undefined values from an object', t => {
  const obj = {
    foo: null,
    baz: undefined,
    ergo: 'lorem'
  }

  t.deepEqual(utils.removeNullish(obj), { ergo: 'lorem' })
})

test('should rename keys of an object', t => {
  const obj = {
    foo: 'bar',
    baz: 42
  }

  t.deepEqual(utils.renameKeys(obj, { foo: 'bar', baz: 'fuz' }), { bar: 'bar', fuz: 42 })
})
