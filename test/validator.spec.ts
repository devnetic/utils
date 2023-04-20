import test from 'ava'
import sinon from 'sinon'

import * as utils from '../src'

test('should check if all items in an array are equal', t => {
  t.true(utils.areEqual(['hello', 'hello', 'hello']))
  t.false(utils.areEqual([1, 2, 3, 4]))
})

test('should check if an array contains a value matching some criterias', t => {
  t.true(utils.contains(['hello', 'hello', 'hello'], (value) => value === 'hello'))
  t.false(utils.contains(['hello', 'hello', 'hello'], (value) => value === 'world'))
})

test('should check if a string contains lower case characters', t => {
  t.true(utils.containsLowerCase('abcDEF'))
  t.false(utils.containsLowerCase('ABC1'))
})

test('should check if a string contains upper case characters', t => {
  t.true(utils.containsUpperCase('Hello World'))
  t.true(utils.containsUpperCase('abcDEF'))
  t.false(utils.containsUpperCase('abcd'))
  t.false(utils.containsUpperCase('hello world'))
})

test('should check if a string contains whitespace', t => {
  t.true(utils.containsWhitespace('Hello World'))
  t.true(utils.containsWhitespace('hello  world'))
  t.false(utils.containsWhitespace('abcDEF'))
  t.false(utils.containsWhitespace('abcd'))
})

test('should check if a flat array has duplicate values', t => {
  t.true(utils.hasDuplicateValues([1, 2, 3, 4, 3]))
  t.false(utils.hasDuplicateValues([1, 2, 3, 4]))
})

test('should check if a string contains only letters', t => {
  t.true(utils.isAlpha('abcDEF'))
  t.false(utils.isAlpha('ABC1'))
})

test('should check if a string contains only letters and numbers', t => {
  t.true(utils.isAlphanumeric('helloworld'))
  t.true(utils.isAlphanumeric('HelloWorld'))
  t.true(utils.isAlphanumeric('ABC1'))
  t.false(utils.isAlphanumeric('hello 123'))
})

test('should check if a string contains only ASCII characters', t => {
  t.true(utils.isAscii('abcDEF'))
  t.true(utils.isAscii('ABC1'))
  t.false(utils.isAscii('acción'))
})

test('should validate if a value is an async function', t => {
  t.true(utils.isAsyncFunction(async () => {}))
  t.true(utils.isAsyncFunction(async function () { }))
  t.false(utils.isAsyncFunction(() => {}))
  t.false(utils.isAsyncFunction(function* () { }))
})

test('should check if a value is base32 encoded', t => {
  t.true(utils.isBase32('JBSWY3DPEHPK3PXP'))
  t.false(utils.isBase32('JBSWY3DPEHPK3PX'))
})

test('should check if a value is base58 encoded', t => {
  t.true(utils.isBase58('5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ'))
  t.true(utils.isBase58('5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLv'))
  t.true(utils.isBase58('16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS'))
  t.false(utils.isBase58('16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGSy*'))
})

test('should check if a value is base64 encoded', t => {
  t.true(utils.isBase64('aGVsbG8gd29ybGQ='))
  t.false(utils.isBase64('aGVsbG8gd29ybGQ'))
})

test('should check if a date is between two dates', t => {
  const date = new Date(2022, 3, 4)
  const startDate = new Date(2022, 3, 1)
  const endDate = new Date(2022, 3, 14)

  t.true(utils.isBetween(date, startDate, endDate))
  t.false(utils.isBetween(startDate, date, endDate))
})

test('should check if a value is a business identifier code', t => {
  t.true(utils.isBic('MIDLGB22XXX'))
  t.true(utils.isBic('NEDSZAJJ'))
  t.false(utils.isBic('AAAABBCCDD'))
  t.false(utils.isBic('12345678'))
})

test('should check if a value is a boolean', t => {
  t.true(utils.isBoolean(true))
  t.true(utils.isBoolean(false))
  t.true(utils.isBoolean(Boolean(true)))
  t.true(utils.isBoolean(Boolean(false)))
  t.false(utils.isBoolean(1))
  t.false(utils.isBoolean('true'))
  t.false(utils.isBoolean(null))
})

test('should check if a date occurs in the current year', t => {
  const date = new Date(2022, 3, 4)
  const previousYear = new Date(2021, 3, 4)
  const clock = sinon.useFakeTimers(new Date(date).getTime())

  t.true(utils.isCurrentYear(date))
  t.false(utils.isCurrentYear(previousYear))

  clock.restore()
})

test('should check if an object is empty', t => {
  t.true(utils.isEmptyObject({}))
  t.true(utils.isEmptyObject(new Object()))
  t.false(utils.isEmptyObject({ a: 1 }))
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

test('should check if a number is even', t => {
  t.true(utils.isEven(2))
  t.true(utils.isEven(0))
  t.false(utils.isEven(1))
  t.false(utils.isEven(3))
  t.false(utils.isEven(-1))
})

test('should validate if a value is falsy', t => {
  t.true(utils.isFalsy(false))
  t.true(utils.isFalsy(null))
  t.true(utils.isFalsy(undefined))
  t.true(utils.isFalsy(0))
  t.true(utils.isFalsy(-0))
  t.true(utils.isFalsy(0n))
  t.true(utils.isFalsy(NaN))
  t.true(utils.isFalsy(''))
  t.false(utils.isFalsy(true))
  t.false(utils.isFalsy(1))
  t.false(utils.isFalsy('1'))
  t.false(utils.isFalsy({}))
  t.false(utils.isFalsy([]))
})

test('should validate if a value is float', t => {
  t.true(utils.isFloat(123.4))
  t.true(utils.isFloat('123.4'))
  t.true(utils.isFloat(-123.4))
  t.true(utils.isFloat('-123.4'))
  t.true(utils.isFloat(Math.PI))
  t.false(utils.isFloat(0.0))
  t.false(utils.isFloat('123'))
  t.false(utils.isFloat(123))
  t.false(utils.isFloat(-123))
  t.false(utils.isFloat('-123'))
  t.false(utils.isFloat('4e2a'))
  t.false(utils.isFloat('a'))
  t.false(utils.isFloat({}))
  t.false(utils.isFloat(''))
  t.false(utils.isFloat([]))
  t.false(utils.isFloat(null))
  t.false(utils.isFloat(undefined))
  t.false(utils.isFloat(NaN))
})

test('should verify if a value is a function', t => {
  t.true(utils.isFunction(() => { }))
  t.true(utils.isFunction(function* () { }))
  t.true(utils.isFunction(async function () { }))
  t.false(utils.isFunction({}))
})

test('should validate if a values is a generator function', t => {
  t.true(utils.isGeneratorFunction(function* () { }))
  t.false(utils.isGeneratorFunction(() => { }))
})

test('should check if a string is a hexadecimal number', t => {
  t.true(utils.isHexadecimal('0xFF'))
  t.true(utils.isHexadecimal('0xFFF'))
  t.true(utils.isHexadecimal('0xFFF0'))
  t.true(utils.isHexadecimal('0xFFF00'))
  t.false(utils.isHexadecimal('0xFFGF00'))
  t.false(utils.isHexadecimal('#123'))
})

test('should check if a string is a hexadecimal color', t => {
  t.true(utils.isHexColor('#fff'))
  t.true(utils.isHexColor('#000'))
  t.true(utils.isHexColor('#abc'))
  t.true(utils.isHexColor('#ABC'))
  t.true(utils.isHexColor('#aBc'))
  t.true(utils.isHexColor('#aBcD'))
  t.true(utils.isHexColor('#aBcDfF'))
  t.false(utils.isHexColor('#aBcDfF1'))
  t.false(utils.isHexColor('#aBcDf'))
  t.false(utils.isHexColor('aBcDf'))
  t.false(utils.isHexColor('#GHIJKL'))
})

test('should check if a number is in a given range', t => {
  t.true(utils.isInRange(5, 1, 10))
  t.false(utils.isInRange(5, 1, 4))
})

test('should validate if a value is integer', t => {
  t.true(utils.isInteger(42))
  t.true(utils.isInteger('42'))
  t.true(utils.isInteger(4e2))
  t.true(utils.isInteger('4e2'))
  t.true(utils.isInteger(' 1 '))
  t.true(utils.isInteger(0.0))
  t.false(utils.isInteger(Math.PI))
  t.false(utils.isInteger(''))
  t.false(utils.isInteger(' '))
  t.false(utils.isInteger('a'))
  t.false(utils.isInteger(42.1))
  t.false(utils.isInteger('1a'))
  t.false(utils.isInteger('4e2a'))
  t.false(utils.isInteger({}))
  t.false(utils.isInteger(''))
  t.false(utils.isInteger([]))
  t.false(utils.isInteger(null))
  t.false(utils.isInteger(undefined))
  t.false(utils.isInteger(NaN))
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

test('should check if a year is leap year', t => {
  t.true(utils.isLeapYear(2000))
  t.true(utils.isLeapYear(2020))
  t.false(utils.isLeapYear(1900))
  t.false(utils.isLeapYear(2100))
  t.false(utils.isLeapYear(2101))
  t.false(utils.isLeapYear(1899))
  t.false(utils.isLeapYear(1898))
})

test('should check if a string is lower case', t => {
  t.true(utils.isLowerCase('foo'))
  t.true(utils.isLowerCase('foo bar'))
  t.false(utils.isLowerCase('Foo'))
  t.false(utils.isLowerCase('Foo Bar'))
})

test('should check if a string is a MongoDB ObjectId', t => {
  t.true(utils.isMongoId('507f1f77bcf86cd799439011'))
  t.false(utils.isMongoId('507f1f77bcf86cd7994390113'))
  t.false(utils.isMongoId('507f1f77bcf86cd799439011r'))
})

test('should check if a number is negative', t => {
  t.true(utils.isNegative(-1))
  t.true(utils.isNegative(-0.1))
  t.true(utils.isNegative(-Infinity))
  t.false(utils.isNegative(0))
  t.false(utils.isNegative(1))
  t.false(utils.isNegative(Infinity))
})

test('should check if a value is nil', t => {
  t.true(utils.isNil(null))
  t.true(utils.isNil(undefined))
  t.false(utils.isNil(0))
  t.false(utils.isNil(false))
  t.false(utils.isNil(''))
  t.false(utils.isNil(NaN))
})

test('should check if an array is not empty', t => {
  t.true(utils.isNotEmpty([1, 2, 3]))
  t.true(utils.isNotEmpty(['foo', 'bar']))
  t.true(utils.isNotEmpty([null]))
  t.true(utils.isNotEmpty([undefined]))
  t.false(utils.isNotEmpty([]))
})

test('should validate if a value is number', t => {
  t.true(utils.isNumber(123))
  t.true(utils.isNumber(123.4))
  t.true(utils.isNumber(-123))
  t.true(utils.isNumber(Math.PI))
  t.true(utils.isNumber(Number(123)))
  t.true(utils.isNumber(new Number(123)))
  t.true(utils.isNumber(Number.MIN_VALUE))
  t.true(utils.isNumber(Infinity))
  t.false(utils.isNumber('123'))
  t.false(utils.isNumber('-123.4'))
  t.false(utils.isNumber('-123'))
  t.false(utils.isNumber('a'))
  t.false(utils.isNumber({}))
  t.false(utils.isNumber(''))
  t.false(utils.isNumber([]))
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

test('should check if a value is an object', t => {
  t.true(utils.isObject({}))
  t.true(utils.isObject(new Object()))
  t.true(utils.isObject(Object.create(null)))
  t.false(utils.isObject(null))
  t.false(utils.isObject(undefined))
  t.false(utils.isObject(true))
  t.false(utils.isObject(false))
  t.false(utils.isObject(''))
  t.false(utils.isObject([]))
  t.false(utils.isObject(function () {}))
})

test('should check if a string is an octal number', t => {
  t.true(utils.isOctal('0o123'))
  t.true(utils.isOctal('-0o123'))
  t.false(utils.isOctal('0o123e4'))
})

test('should check if a number is odd', t => {
  t.true(utils.isOdd(1))
  t.true(utils.isOdd(3))
  t.true(utils.isOdd(-1))
  t.false(utils.isOdd(0))
  t.false(utils.isOdd(2))
})

test('should check if a value is a plain object', t => {
  t.true(utils.isPlainObject({}))
  t.true(utils.isPlainObject({ foo: 'bar' }))
  t.true(utils.isPlainObject(new Object()))
  t.true(utils.isPlainObject(Object.create(null)))
  t.false(utils.isPlainObject(new Date()))
  t.false(utils.isPlainObject(''))
  t.false(utils.isPlainObject(1))
  t.false(utils.isPlainObject(true))
  t.false(utils.isPlainObject(false))
  t.false(utils.isPlainObject(null))
  t.false(utils.isPlainObject(undefined))
  t.false(utils.isPlainObject(NaN))
})

test('should check if a number is positive', t => {
  t.true(utils.isPositive(1))
  t.true(utils.isPositive(0.1))
  t.true(utils.isPositive(Infinity))
  t.false(utils.isPositive(0))
  t.false(utils.isPositive(-1))
})

test('should check if a given integer is a prime number', t => {
  t.true(utils.isPrime(2))
  t.true(utils.isPrime(3))
  t.true(utils.isPrime(5))
  t.true(utils.isPrime(7))
  t.true(utils.isPrime(11))
  t.true(utils.isPrime(13))
  t.true(utils.isPrime(17))
  t.false(utils.isPrime(1))
  t.false(utils.isPrime(4))
  t.false(utils.isPrime(6))
  t.false(utils.isPrime(8))
  t.false(utils.isPrime(10))
})

test('should check if an object is a Promise', t => {
  t.true(utils.isPromise(Promise.resolve()))
  t.true(utils.isPromise(new Promise(() => { })))
  t.false(utils.isPromise(() => { }))
  t.false(utils.isPromise(null))
  t.false(utils.isPromise(undefined))
})

test('should check if a value is a regular expression', t => {
  t.true(utils.isRegExp(/foo/))
  t.true(utils.isRegExp(new RegExp('foo')))
  t.false(utils.isRegExp(''))
  t.false(utils.isRegExp(1))
  t.false(utils.isRegExp(true))
  t.false(utils.isRegExp(false))
  t.false(utils.isRegExp(null))
  t.false(utils.isRegExp(undefined))
  t.false(utils.isRegExp(NaN))
})

test('should check if a value is a string', t => {
  t.true(utils.isString(''))
  t.true(utils.isString('foo'))
  t.true(utils.isString(new String('foo')))
  t.false(utils.isString(1))
  t.false(utils.isString(true))
  t.false(utils.isString(false))
  t.false(utils.isString(null))
  t.false(utils.isString(undefined))
  t.false(utils.isString(NaN))
})

test('should check if an array is subset of other array', t => {
  t.true(utils.isSubsetOf([], []))
  t.true(utils.isSubsetOf([1, 2, 3], [1, 2, 3, 4, 5]))
  t.true(utils.isSubsetOf([1, 2, 3], [1, 2, 3]))
  t.true(utils.isSubsetOf([1, 2, 3], [1, 2, 3, 4, 5, 6]))
  t.false(utils.isSubsetOf([1, 2, 3], [4, 5, 6]))
  t.false(utils.isSubsetOf([1, 2, 3], [4, 5]))
  t.false(utils.isSubsetOf([1, 2, 3], [4]))
  t.false(utils.isSubsetOf([1, 2, 3], []))
  t.false(utils.isSubsetOf([], [1, 2, 3]))
})

test('should check if date is today', t => {
  const today = '2022-04-04T00:00:00.000Z'
  const clock = sinon.useFakeTimers(new Date(today).getTime())

  t.true(utils.isToday(new Date(today)))
  t.false(utils.isToday(new Date('2018-01-01')))

  clock.restore()
})

test('should validate if a value is truthy', t => {
  t.true(utils.isTruthy(true))
  t.true(utils.isTruthy(1))
  t.true(utils.isTruthy('foo'))
  t.true(utils.isTruthy('false'))
  t.true(utils.isTruthy(12n))
  t.true(utils.isTruthy(new String('foo')))
  t.true(utils.isTruthy(new Boolean(true)))
  t.true(utils.isTruthy(new Number(1)))
  t.true(utils.isTruthy(new Date()))
  t.true(utils.isTruthy(new RegExp('foo')))
  t.true(utils.isTruthy(new Error('foo')))
  t.true(utils.isTruthy(new Map()))
  t.true(utils.isTruthy(new Set()))
  t.true(utils.isTruthy(new WeakMap()))
  t.true(utils.isTruthy(new WeakSet()))
  t.true(utils.isTruthy(new Promise(() => { })))
  t.true(utils.isTruthy(new ArrayBuffer(1)))
  t.true(utils.isTruthy(new Int8Array(1)))
  t.true(utils.isTruthy(new Uint8Array(1)))
  t.true(utils.isTruthy(new Uint8ClampedArray(1)))
  t.true(utils.isTruthy(new Int16Array(1)))
  t.true(utils.isTruthy(new Uint16Array(1)))
  t.true(utils.isTruthy(new Int32Array(1)))
  t.true(utils.isTruthy(new Uint32Array(1)))
  t.true(utils.isTruthy(new Float32Array(1)))
  t.true(utils.isTruthy(new Float64Array(1)))
  t.true(utils.isTruthy(new BigInt64Array(1)))
  t.true(utils.isTruthy(new BigUint64Array(1)))
  t.true(utils.isTruthy(new Array(1)))
  t.true(utils.isTruthy(new Object()))
  t.true(utils.isTruthy(new Function()))
  t.true(utils.isTruthy(new RegExp('')))
  t.true(utils.isTruthy(new Error()))
  t.true(utils.isTruthy(Infinity))
  t.true(utils.isTruthy(-Infinity))
  t.false(utils.isTruthy(NaN))
  t.false(utils.isTruthy(false))
  t.false(utils.isTruthy(null))
  t.false(utils.isTruthy(undefined))
  t.false(utils.isTruthy(0))
  t.false(utils.isTruthy(-0))
  t.false(utils.isTruthy(0n))
  t.false(utils.isTruthy(NaN))
  t.false(utils.isTruthy(''))
})

test('should check if a date is a weekday', t => {
  t.true(utils.isWeekday(new Date(2022, 2, 1)))
  t.true(utils.isWeekday(new Date(2022, 2, 1)))
  t.true(utils.isWeekday(new Date(2022, 2, 2)))
  t.true(utils.isWeekday(new Date(2022, 2, 3)))
  t.true(utils.isWeekday(new Date(2022, 2, 4)))
  t.false(utils.isWeekday(new Date(2022, 2, 5)))
  t.false(utils.isWeekday(new Date(2022, 2, 6)))
  t.true(utils.isWeekday(new Date(2022, 2, 7)))
  t.true(utils.isWeekday(new Date(2022, 2, 8)))
  t.true(utils.isWeekday(new Date(2022, 2, 9)))
  t.true(utils.isWeekday(new Date(2022, 2, 10)))
  t.false(utils.isWeekday(new Date(2022, 2, 12)))
})

test('should check if a string is upper case', t => {
  t.true(utils.isUpperCase('FOO'))
  t.true(utils.isUpperCase('FOO BAR'))
  t.false(utils.isUpperCase('foo'))
  t.false(utils.isUpperCase('foo bar'))
  t.false(utils.isUpperCase('Foo Bar'))
})

test('should validate a Gregorian date', t => {
  t.true(utils.isValidDate(2022, 3, 3))
  t.true(utils.isValidDate(2022, 11, 31))
  t.false(utils.isValidDate(2022, 13, 3))
  t.false(utils.isValidDate(2022, 11, 33))
  t.false(utils.isValidDate(10000, 3, 3))
})

test('should check if a date is a weekend', t => {
  t.true(utils.isWeekend(new Date(2022, 2, 5)))
  t.true(utils.isWeekend(new Date(2022, 2, 6)))
  t.false(utils.isWeekend(new Date(2022, 2, 7)))
  t.false(utils.isWeekend(new Date(2022, 2, 8)))
  t.false(utils.isWeekend(new Date(2022, 2, 9)))
  t.false(utils.isWeekend(new Date(2022, 2, 10)))
  t.true(utils.isWeekend(new Date(2022, 2, 12)))
})
