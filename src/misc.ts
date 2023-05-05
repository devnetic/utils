import crypto from 'crypto'

import { bytesToUuid } from './bytes-to-uuid'

let globalCrcTable: number[]

export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9 / 5) + 32
}

export const coalesce = (...args: unknown[]): unknown => {
  for (const arg of args) {
    if (arg !== undefined && arg !== null) {
      return arg
    }
  }

  return undefined
}

export const counter = (initialValue = 1): Function => {
  let count = initialValue

  return (): number => {
    return count++
  }
}

export const crc32 = (value: string): number => {
  const crcTable = globalCrcTable !== undefined ? globalCrcTable : (globalCrcTable = makeCRCTable())
  let crc = 0 ^ (-1)

  for (let i = 0, length = value.length; i < length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ value.charCodeAt(i)) & 0xFF]
  }

  return (crc ^ (-1)) >>> 0
}

export const decimalToHex = (value: number): string => {
  return value.toString(16)
}

export const diceRoll = (): number => {
  return Math.floor(Math.random() * 6) + 1
}

export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return Math.fround(((fahrenheit - 32) * 5) / 9)
}

export const getQueryStringValue = (url: string, key: string): string | undefined => {
  const queryString = url.split('?')[1]
  const queryStringPairs = queryString.split('&')

  for (const queryStringPair of queryStringPairs) {
    const [queryStringKey, queryStringValue] = queryStringPair.split('=')

    if (queryStringKey === key) {
      return queryStringValue
    }
  }

  return undefined
}

export const getType = (value: unknown = undefined): string => {
  const type = typeof value

  if (type !== 'object') {
    if (type === 'function') {
      return 'Function'
    }

    if (type === 'bigint') {
      return 'BigInt'
    }

    return type
  }

  const typeRegex = /\[object (.*)\]/

  return (Object.prototype.toString.call(value).match(typeRegex) as string[])[1]
}

export const hexToRgb = (hex: string): number[] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return (result !== null)
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : []
}

const makeCRCTable = (): number[] => {
  let char
  const crcTable = []

  for (let n = 0; n < 256; n++) {
    char = n

    for (let k = 0; k < 8; k++) {
      char = (1 & char) !== 0 ? 3988292384 ^ char >>> 1 : char >>> 1
    }

    crcTable[n] = char
  }

  return crcTable
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

export const rgbToHex = (red: number, green: number, blue: number): string => {
  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`
}

export const runPromisesInSequence = async (promises: Array<Promise<unknown>>): Promise<unknown> => {
  return await promises.reduce(async (promiseChain, currentTask) => {
    return await promiseChain.then(async (chainResult) => {
      return await currentTask.then(async (currentResult) => {
        return [...chainResult as any, currentResult]
      })
    })
  }, Promise.resolve([]))
}

export const toFullHexColor = (color: string): string => {
  if (color.length > 4 && color.startsWith('#')) {
    return color
  }

  return `#${(color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map((c) => `${c}${c}`)
    .join('')}`
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
}
