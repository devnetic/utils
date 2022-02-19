import test from 'ava'

import * as utils from './../src'

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
