import test from 'ava'

import * as utils from './../src'

test('should deep clone an object', t => {
  const map = new Map()
  map.set('key', 'value')

  const weakMap = new WeakMap()
  weakMap.set({ key: 'value' }, 'WeakMap value')

  const set = new Set()
  set.add('value1')
  set.add('value2')

  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child'
    },
    field4: [2, 3, 4, { foo: { a: 'a', b: { c: 'c' } } }],
    field5: true,
    empty: null,
    map,
    weakMap,
    set,
    bool: new Boolean(false),
    num: new Number(5),
    str: new String('str'),
    symbol: Object(Symbol(6)),
    date: new Date('2022-04-18T00:00:00.000Z'),
    reg: /\d+/,
    error: new Error('Clone function error'),
    greet: (): string => {
      return 'hello friend!'
    },
    sum: function (a: number, b: number): number {
      return a + b
    }
  }

  const clonedObject = utils.clone(target)
  Reflect.set(target, 'weakMap', {})

  t.deepEqual(target, clonedObject)
  t.is(target.greet(), clonedObject.greet())
  t.is(target.sum(1, 2), clonedObject.sum(1, 2))
  t.not(target, clonedObject)

  clonedObject.greet = () => 'hello world!'

  t.is(target.greet(), 'hello friend!')
  t.is(clonedObject.greet(), 'hello world!')
})

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
    },
    foo: [
      2,
      { bar: 'baz' }
    ]
  }

  t.is(utils.getValue(obj, ''), undefined)
  t.is(utils.getValue(obj, 'a.b.c'), 42)
  t.is(utils.getValue(obj, 'a.b.c.d'), undefined)
  t.is(utils.getValue(obj, 'a.b.c.d', 'default'), 'default')
  t.is(utils.getValue(obj, 'foo[1]["bar"]'), 'baz')
  t.is(utils.getValue(obj, 'foo[0]'), 2)
})

test('should inverted the keys and values of an object', t => {
  const obj = {
    foo: 'bar',
    baz: 'fuzz',
    ergo: 'lorem'
  }

  t.deepEqual(utils.invert(obj), { bar: 'foo', fuzz: 'baz', lorem: 'ergo' })
})

test('should merge a set of objects', t => {
  t.deepEqual(utils.merge([1, 2, 3, 4], [4, 5, 6]), [4, 5, 6, 4])
  t.deepEqual(utils.merge([1, 2, 3], [4, 5, 6]), [4, 5, 6])
  t.deepEqual(utils.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] }), { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] })
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
    baz: 123,
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

test('should set the value at given path of an object', t => {
  const target = {
    a: {
      b: {
        c: 42
      }
    },
    foo: [
      2,
      { bar: 'baz' }
    ]
  }

  t.deepEqual(utils.setValue(target, 'a.b.c', 'foo'), { a: { b: { c: 'foo' } }, foo: [2, { bar: 'baz' }] })
  t.deepEqual(utils.setValue(target, 'a.b.c.d', 'bar'), { a: { b: { c: { d: 'bar' }  } }, foo: [2, { bar: 'baz' }] })
  t.deepEqual(utils.setValue(target, 'foo[1]["bar"]', 'bazbar'), { a: { b: { c: 42 } }, foo: [2, { bar: 'bazbar' }] })
  t.deepEqual(utils.setValue(target, 'foo[0]', 'bar'), { a: { b: { c: 42 } }, foo: ['bar', { bar: 'baz' }] })
  t.deepEqual(utils.setValue(target, 'foo[]', 'bar'), { a: { b: { c: 42 } }, foo: [2, { bar: 'baz' }, 'bar'] })
})

test('should sort keys of an object', t => {
  const obj = {
    foo: 'bar',
    baz: 42,
    ergo: 'lorem'
  }

  t.deepEqual(utils.sortKeys(obj), { baz: 42, ergo: 'lorem', foo: 'bar' })
})
