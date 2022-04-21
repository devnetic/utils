import test from 'ava'

import * as utils from '../src'

test('should convert celsius to fahrenheit', t => {
  t.is(utils.celsiusToFahrenheit(-20), -4)
  t.is(utils.celsiusToFahrenheit(0), 32)
  t.is(utils.celsiusToFahrenheit(1), 33.8)
  t.is(utils.celsiusToFahrenheit(1.3), 34.34)
  t.is(utils.celsiusToFahrenheit(100), 212)
})

test('should get the first defined and non-null value', t => {
  t.is(utils.coalesce(null, undefined, 1, 2, 3), 1)
  t.is(utils.coalesce(undefined, null, 'helloworld', NaN), 'helloworld')
  t.is(utils.coalesce(undefined, null, NaN, 'helloworld'), NaN)
  t.is(utils.coalesce(), undefined)
})

test('should returns the correct type', t => {
  t.is(utils.getType({}), 'Object')
  t.is(utils.getType(new Object()), 'Object')
  t.is(utils.getType(Object.create(null)), 'Object')
  t.is(utils.getType([]), 'Array')
  t.is(utils.getType(new Array()), 'Array')
  t.is(utils.getType(new Date()), 'Date')
  t.is(utils.getType(String()), 'string')
  t.is(utils.getType(''), 'string')
  t.is(utils.getType('123'), 'string')
  t.is(utils.getType(new String('123')), 'String')
  t.is(utils.getType(123), 'number')
  t.is(utils.getType(123.4), 'number')
  t.is(utils.getType(Number(123)), 'number')
  t.is(utils.getType(Number(123.4)), 'number')
  t.is(utils.getType(new Number(123)), 'Number')
  t.is(utils.getType(new Number(123.4)), 'Number')
  t.is(utils.getType(true), 'boolean')
  t.is(utils.getType(false), 'boolean')
  t.is(utils.getType(new Boolean(true)), 'Boolean')
  t.is(utils.getType(new Boolean(false)), 'Boolean')
  t.is(utils.getType(BigInt(1)), 'BigInt')
  t.is(utils.getType(() => { }), 'Function')
  t.is(utils.getType(BigInt), 'Function')
  t.is(utils.getType(undefined), 'undefined')
  t.is(utils.getType(), 'undefined')
  t.is(utils.getType(null), 'Null')
  t.is(utils.getType(/\d/), 'RegExp')
})

test('should generate a counter', t => {
  const counter = utils.counter()
  const initializedCounter = utils.counter(10)

  t.is(counter(), 1)
  t.is(counter(), 2)
  t.is(counter(), 3)
  t.is(initializedCounter(), 10)
  t.is(initializedCounter(), 11)
  t.is(initializedCounter(), 12)
})

test('should simulate a dice roll', t => {
  const value = utils.diceRoll()

  t.true(typeof value === 'number')
  t.true(value >= 1)
  t.true(value <= 6)
})

test('should convert fahrenheit to celsius', t => {
  t.is(utils.fahrenheitToCelsius(-4), -20)
  t.is(utils.fahrenheitToCelsius(32), 0)
  t.is(utils.fahrenheitToCelsius(33.8), 1)
  t.is(utils.fahrenheitToCelsius(33.9), 1.0555555820465088)
  t.is(utils.fahrenheitToCelsius(212), 100)
})

test('should get the value from a URL query string', t => {
  t.is(utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'foo'), 'bar')
  t.is(utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'baz'), 'qux')
  t.is(utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'quux'), undefined)
})

test('should convert hex to rgb', t => {
  t.deepEqual(utils.hexToRgb('#000000'), [0, 0, 0])
  t.deepEqual(utils.hexToRgb('#ffffff'), [255, 255, 255])
  t.deepEqual(utils.hexToRgb('#ff0000'), [255, 0, 0])
  t.deepEqual(utils.hexToRgb('#00ff00'), [0, 255, 0])
  t.deepEqual(utils.hexToRgb('#0000ff'), [0, 0, 255])
  t.deepEqual(utils.hexToRgb('#ffff00'), [255, 255, 0])
  t.deepEqual(utils.hexToRgb('#00ffff'), [0, 255, 255])
  t.deepEqual(utils.hexToRgb('#ff00ff'), [255, 0, 255])
  t.deepEqual(utils.hexToRgb(''), [])
})

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

test('should convert rgb to hex', t => {
  t.is(utils.rgbToHex(0, 255, 255), '#00ffff')
  t.is(utils.rgbToHex(255, 0, 255), '#ff00ff')
  t.is(utils.rgbToHex(255, 255, 0), '#ffff00')
  t.is(utils.rgbToHex(0, 0, 255), '#0000ff')
  t.is(utils.rgbToHex(255, 0, 0), '#ff0000')
  t.is(utils.rgbToHex(0, 255, 0), '#00ff00')
  t.is(utils.rgbToHex(0, 0, 0), '#000000')
  t.is(utils.rgbToHex(255, 255, 255), '#ffffff')
  t.is(utils.rgbToHex(20, 10, 200), '#140ac8')
})

test('should run promises in sequence', async t => {
  try {
    const result = await utils.runPromisesInSequence([
      new Promise<number>(resolve => setTimeout(() => resolve(1), 100)),
      new Promise(resolve => setTimeout(() => resolve(2), 50)),
      new Promise(resolve => setTimeout(() => resolve(3), 0)),
    ])

    t.deepEqual(result, [1, 2, 3])
  } catch (error) {
    t.fail(error as string)
  }
})

test('should convert 3 digits color to 6 digits color', t => {
  t.is(utils.toFullHexColor('#f00'), '#ff0000')
  t.is(utils.toFullHexColor('#0f0'), '#00ff00')
  t.is(utils.toFullHexColor('#00f'), '#0000ff')
  t.is(utils.toFullHexColor('#f0f'), '#ff00ff')
  t.is(utils.toFullHexColor('#0ff'), '#00ffff')
  t.is(utils.toFullHexColor('#fff'), '#ffffff')
  t.is(utils.toFullHexColor('#000'), '#000000')
  t.is(utils.toFullHexColor('000'), '#000000')
  t.is(utils.toFullHexColor('#fff0'), '#fff0')
})

test('should returns a valid UUID', t => {
  // Version 4 UUID Example: // 056e34a3-f88e-4d48-a001-bf70c9aefa40
  const uuid = utils.uuid()

  t.is(typeof uuid, 'string')
  t.is(uuid.length, 36)
  t.is(uuid.split('-').length, 5)
  t.is(uuid.split('-')[2][0], '4')
})
