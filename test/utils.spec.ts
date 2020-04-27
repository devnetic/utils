import test from 'ava'

import * as utils from './../src'

test('should returns the correct type', t => {
  t.is(utils.getType({}), 'Object')
  t.is(utils.getType(new Date()), 'Date')
  t.is(utils.getType(String()), 'String')
  t.is(utils.getType(''), 'String')
  t.is(utils.getType('123'), 'String')
  t.is(utils.getType(123), 'Number')
  t.is(utils.getType(123.4), 'Number')
  t.is(utils.getType(true), 'Boolean')
  t.is(utils.getType(false), 'Boolean')
  t.is(utils.getType(BigInt(1)), 'BigInt')
})

test('should verify equality', t => {
  t.true(utils.isEqual(1, 1))
  t.true(utils.isEqual(1.23, 1.23))
  t.true(utils.isEqual('1', '1'))
  t.true(utils.isEqual(true, true))
  t.true(utils.isEqual(undefined, undefined))
  t.true(utils.isEqual(null, null))
  t.true(utils.isEqual({}, {}))
  t.true(utils.isEqual({ foo: 'bar' }, { foo: 'bar' }))
  t.true(utils.isEqual([], []))
  t.true(utils.isEqual(['foo'], ['foo']))
  t.true(utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'bar' }, 1, 'a']))
  t.false(utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'baz' }, 1, 'a']))
  t.false(utils.isEqual(true, 1))
  t.false(utils.isEqual({ foo: 'bar' }, {}))
})

test('should validate if an object is json', t => {
  t.true(utils.isJSON({}))
  t.true(utils.isJSON({ foo: 'bar' }))
  t.false(utils.isJSON(true))
  t.false(utils.isJSON(false))
  t.false(utils.isJSON(new Date()))
  t.false(utils.isJSON(''))
  t.false(utils.isJSON(1))
  t.false(utils.isJSON(1.23))
  t.false(utils.isJSON({ foo: BigInt(9007199254740991) }))
})

test('should validate if a value is float', t => {
  t.true(utils.isFloat(123.4))
  t.true(utils.isFloat(-123.4))
  t.true(utils.isFloat(Math.PI))
  t.false(utils.isFloat('123'))
  t.false(utils.isFloat(123))
  t.false(utils.isFloat(-123))
  t.false(utils.isFloat('-123'))
  t.false(utils.isFloat('a'))
  t.false(utils.isFloat({}))
  t.false(utils.isFloat(''))
  t.false(utils.isFloat([]))
})

test('should validate if a value is numeric', t => {
  t.true(utils.isNumeric('123'))
  t.true(utils.isNumeric(123))
  t.true(utils.isNumeric(123.4))
  t.true(utils.isNumeric('-123.4'))
  t.true(utils.isNumeric(-123))
  t.true(utils.isNumeric('-123'))
  t.true(utils.isNumeric(Math.PI))
  t.false(utils.isNumeric('a'))
  t.false(utils.isNumeric({}))
  t.false(utils.isNumeric(''))
  t.false(utils.isNumeric([]))
})

test('should returns all matches', t => {
  const first: RegExpMatchArray = []
  first[0] = 'o',
    first.index = 1,
    first.input = 'Lorem',
    first.groups = undefined

  const second: RegExpMatchArray = []
  second[0] = 'e',
    second.index = 3,
    second.input = 'Lorem',
    second.groups = undefined

  const expected: RegExpMatchArray[] = [first, second]

  t.deepEqual(utils.matchAll('Lorem', /[aeiou]/g), expected)
  t.deepEqual(utils.matchAll('Lorem', /[abcd]/g), [])
})

test('should returns a zero-with match result', t => {
  const match: RegExpMatchArray = []
  match.index = 0,
    match.input = 'Lorem',
    match.groups = undefined
  match[0] = ''

  t.deepEqual(utils.matchAll('Lorem', /^/g), [match])
})

test('should returns a valid UUID', t => {
  // Version 4 UUID Example: // 056e34a3-f88e-4d48-a001-bf70c9aefa40
  const uuid = utils.uuid()

  t.is(typeof uuid, 'string')
  t.is(uuid.length, 36)
  t.is(uuid.split('-').length, 5)
  t.is(uuid.split('-')[2][0], '4')
})
