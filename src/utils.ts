import crypto from 'crypto'

import { bytesToUuid } from './bytes-to-uuid'

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
