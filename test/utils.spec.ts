import test from 'ava'

import * as utils from './../src'

test('should returns all matches', t => {
  const first: RegExpMatchArray = []
  first[0] = 'o'
  first.index = 1
  first.input = 'Lorem'
  first.groups = undefined

  const second: RegExpMatchArray = []
  second[0] = 'e',
  second.index = 3,
  second.input = 'Lorem',
  second.groups = undefined

  const expected = [first, second]

  t.deepEqual(utils.matchAll('Lorem', /[aeiou]/g), expected)
  t.deepEqual(utils.matchAll('Lorem', /[abcd]/g), [])
})

test('should returns a zero-with match result', t => {
  const match: RegExpMatchArray = []
  match.index = 0
  match.input = 'Lorem'
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
