import test from 'ava'

import * as utils from './../src'

test('should generate a random string from given characters', t => {
  const value = utils.generateString(10, 'abc')

  t.true(typeof value === 'string')
  t.true(value.length === 10)
  t.true(value.match(/[a-z]/i) !== null)
})

test('should return an array of random integer in a give range', (t) => {
  const result = utils.randomArrayInRange(1, 100, 10)

  t.true(result.length === 10)
  t.true(result.every((value) => {
    return utils.isInteger(value) && value >= 1 && value <= 100
  }))
})

test('should return a ramdom boolean', t => {
  const value = utils.randomBoolean()

  t.true(typeof value === 'boolean')
})

test('should return a random float', t => {
  const value = utils.randomFloat()

  t.true(typeof value === 'number')
  t.true(utils.isFloat(value))
})

test('should return a random hexadecimal color', t => {
  const value = utils.randomHexColor()

  t.true(typeof value === 'string')
  t.true(value.length === 7)
  t.true(value.startsWith('#'))
})

test('should return a random integer', t => {
  const min = 1
  const max = 100
  const value = utils.randomInteger(min, max)

  t.true(typeof value === 'number')
  t.true(value >= min && value <= max)
  t.true(utils.isInteger(value))
})

test('should return a random ip address', t => {
  const value = utils.randomIpAddress()

  t.true(typeof value === 'string')
  t.true(value.split('.').length === 4)
})

test('should return a random item from an array', t => {
  const array = [1, 2, 3, 4, 5]
  const value = utils.randomItem(array)

  t.true(array.includes(value))
})

test('should return random items from an array', t => {
  const array = [1, 2, 3, 4, 5]
  const values = utils.randomItems(array, 3)

  t.true(values.length === 3)
  t.true(values.every(item => array.includes(item)))
})

test('should return a random property of an object', t => {
  const object = {
    aqua: '#00ffff',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    black: '#000000',
    blue: '#0000ff',
    brown: '#a52a2a',
    cyan: '#00ffff'
  }
  const value = utils.randomProperty(object)

  t.true(Object.keys(object).includes(value))
})

test('should return a random string', t => {
  const value = utils.randomString()

  t.true(typeof value === 'string')
  t.true(value.length === 64)
  t.true(value.match(/[a-z0-9]/i) !== null)
})
