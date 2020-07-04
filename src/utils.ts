import crypto from 'crypto'

import { bytesToUuid } from './bytes-to-uuid'

/**
 * Transforms a list of key-value pairs into an object.
 *
 * @param {*} iterable An iterable such as Array or Map or other objects
 * implementing the iterable protocol.
 * @returns A new object whose properties are given by the entries of the
 * iterable.
 */
export const fromEntries = (entries: IterableIterator<[string, string]>): Object => {
  return Array.from(entries).reduce((result: Object, [key, value]: [string, string]) => {
    return { ...result, [key]: value }
  }, {})
}

/**
 * Returns the type of the given parameter
 *
 * @param {*} value
 * @returns {string}
 */
export const getType = (value: any): string => {
  const typeRegex = /\[.*\s(\w*)\]/g

  return (typeRegex.exec(Object.prototype.toString.call(value)) ?? ['', 'Undefined'])[1]
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equal.
 *
 * @param {*} value First value to compare.
 * @param {*} other Second value to compare.
 */
export const isEqual = (value: any, other: any): boolean => {
  if (Object.is(value, other)) {
    return true
  }

  // Test the types
  if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) {
    return false
  }

  // Test object keys length
  if (Object.keys(value).length !== Object.keys(other).length) {
    return false
  }

  for (const key of Object.keys(value)) {
    if (typeof value[key] === 'object') {
      if (!isEqual(value[key], other[key])) {
        return false
      }
    } else if (value[key] !== other[key]) {
      return false
    }
  }

  return true
}

/**
 * Validate if a value is a JSON valid object
 *
 * @param {*} value
 * @returns {boolean}
 *
 * @memberOf utils
 */
export const isJSON = (value: any): boolean => {
  if (getType(value) !== 'Object') {
    return false
  }

  try {
    JSON.stringify(value)
  } catch (error) {
    return false
  }

  return true
}

/**
 * Check if a value is a float number
 *
 * @param {*} value
 * @returns {boolean}
 *
 * @memberOf utils
 */
export const isFloat = (value: any): boolean => {
  const parsedValue = parseFloat(value)

  return parsedValue === +parsedValue && parsedValue !== (parsedValue | 0)
}

/**
 * Check if a value is a float number
 *
 * @param {*} value
 * @returns {boolean}
 *
 * @memberOf utils
 */
export const isInteger = (value: any): boolean => {
  if (isNaN(value)) {
    return false
  }

  const parsedValue = parseFloat(value)

  return (parsedValue | 0) === parsedValue
}

export const isNumeric = (value: any): boolean => {
  return !Array.isArray(value) && (value - parseFloat(value) + 1) >= 0
}

/**
 * Perform a global regular expression match. Searches subject for all
 * matches to the regular expression given in pattern and return them.
 *
 * @param {Object} regex
 * @param {*} value
 * @returns {RegExpMatchArray[]}
 */
export const matchAll = (value: string, regex: RegExp): RegExpMatchArray[] => {
  let match: RegExpMatchArray | null
  const matches: RegExpMatchArray[] = []

  while ((match = regex.exec(value)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++
    }

    // The result can be accessed through the `m`-variable.
    matches.push(match)
  }

  return matches
}

/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f, and y
 * is replaced with a random hexadecimal digit from 8 to b.
 *
 * https://gist.github.com/LeverOne/1308368
 *
 * @returns {string}
 */
export const uuid = (): string => {
  const randomBytes: Buffer = crypto.randomBytes(16)

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80

  return bytesToUuid(randomBytes)

  // let a: number
  // let b: string
  // for (a = 0, b = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-'); return b
}
