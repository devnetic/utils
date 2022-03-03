import test from 'ava'

import * as utils from './../src'

test('should execute the box handler function', t => {
  const getPercentNumber = (value: string) => {
    return utils.boxHandler(value)
      .next((value: string) => value.replace(/\%/, ''))
      .next((value: string) => parseFloat(value))
      .done((res: number) => res * 0.01)
    }

  t.is(getPercentNumber('10%'), 0.1)
  t.is(getPercentNumber('50%'), 0.5)

  parseFloat
  const getMoney = (price: string) => Number.parseFloat(price.replace(/\$/, ''))
  const getPercent = (percent: string) => Number.parseFloat(percent.replace(/\%/, '')) * 0.01

  const getDiscountPrice = (price: string, discount: string): number => {
    return utils.boxHandler(getMoney(price))
      .done((cents: number) => {
        return utils.boxHandler(getPercent(discount))
          .next((save: number) => cents - cents * save)
      })
      .done((res: number) => res)
  }

  t.is(getDiscountPrice('$6.00', '20%'), 4.8)
})

test('should execute compose functions from right to left', t => {
  const lowercase = (str: string) => str.toLowerCase();
  const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  const reverse = (str: string) => str.split('').reverse().join('');

  const fn = utils.compose(reverse, capitalize, lowercase);

  // We will execute `lowercase`, `capitalize` and `reverse` in order
  t.is(fn('Hello World'), 'dlrow olleH')
})

test('should curry a function', t => {
  const sum = (a: number, b: number, c: number): number => a + b + c

  t.is(utils.curry(sum)(1)(2)(3), 6)
  t.is(utils.curry(sum)(1, 2, 3), 6)
  // t.is(utils.curry(sum, 1)(2, 3), 6)
  // t.is(utils.curry(sum, 1)(2)(3), 6)
  // t.is(utils.curry(sum, 1, 2)(3), 6)
  // t.is(utils.curry(sum, 1, 2, 3), 6)
})

test('should create an empty function', t => {
  const noop = utils.noop()

  t.true(utils.isFunction(noop))
  t.is(noop(), undefined)
})

test('should compose functions from left to right', t => {
  const lowercase = (str: string) => str.toLowerCase()
  const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  const reverse = (str: string) => str.split('').reverse().join('')

  const fn = utils.pipe(lowercase, capitalize, reverse)

  // We will execute `lowercase`, `capitalize` and `reverse` in order
  t.is(fn('Hello World'), 'dlrow olleH')
})

test('should create a function that accepts a single argument', t => {
  const result = [1, 2, 3, 4, 5]

  t.deepEqual(['1', '2', '3', '4', '5'].map(utils.unary(parseFloat)), result)
})
