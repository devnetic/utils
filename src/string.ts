import { createHash } from 'crypto'

const caseRegex: RegExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g

export const areAnagram = (value1: string, value2: string): boolean => {
  return value1.toLowerCase().split('').sort().join('') === value2.toLowerCase().split('').sort().join('')
}

export const base64ToUint8Array = (value: string): Uint8Array => {
  return Buffer.from(value, 'base64')
}

export const baseUrl = (value: string): string => {
  const url = new URL(value)

  return `${url.origin}${url.pathname}`
}

export const byteLength = (value: string, encoding?: BufferEncoding): number => {
  return Buffer.byteLength(value, encoding)
}

/**
 * Transforms a value to camel case
 *
 * @param {string} value
 */
export const camelCase = (value: string): string => {
  return (value.match(caseRegex) ?? [])
    .map((segment, index) => {
      if (index === 0) {
        return segment.toLowerCase()
      }

      return segment[0].toUpperCase() + segment.slice(1).toLowerCase()
    })
    .join('')
}

export const capitalize = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const countWordOccurrences = (value: string, word: string): number => {
  return value.split(word).length - 1
}

export const countWords = (value: string): number => {
  return value.trim().split(' ').length
}

export const decapitalize = (value: string): string => {
  return `${value.charAt(0).toLowerCase()}${value.slice(1)}`
}

export const escapeHtml = (value: string): string => {
  const matches: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }

  return value.replace(/[&<>"']/g, (m: string): string => {
    return matches[m]
  })
}

export const fileExtension = (value: string): string => {
  const regex = /\w+(\.\w*)$/
  const match = value.match(regex)

  if (match !== null) {
    return match[1] === '.' ? '.' : match[1].slice(1)
  }

  return ''
}

export const fileName = (value: string): string => {
  const segments = value.split('/')

  return segments[segments.length - 1]
}

export const hash = (value: string, algorithm: string = 'sha256', outputLength?: number): string => {
  return createHash(algorithm, { outputLength }).update(value).digest('hex')
}

export const isPalindrome = (value: string): boolean => {
  return value === value.split('').reverse().join('')
}

export const isRepeatedSequence = (value: string): boolean => {
  return `${value}${value}`.indexOf(value, 1) !== value.length
}

/**
 * Transforms a value to kebab case
 *
 * @param {string} value
 */
export const kebabCase = (value: string): string => {
  return (value.match(caseRegex) ?? [])
    .map(segment => segment.toLowerCase())
    .join('-')
}

export const lcfirst = (value: string): string => {
  return `${value.charAt(0).toLowerCase()}${value.slice(1)}`
}

export const mask = (value: string, count: number, mask: string): string => {
  return `${mask.repeat(count)}${value.slice(count)}`
}

export const normalizePath = (value: string): string => {
  return value.replace(/\\/g, '/')
}

/**
 * Transforms a string to pascal case
 *
 * @param {string} value
 * @returns {string}
 */
export const pascalCase = (value: string): string => {
  return (value.match(caseRegex) ?? [])
    .map(segment => segment[0].toUpperCase() + segment.slice(1).toLowerCase())
    .join('')
}

export const plural = (word: string): string => {
  const plural: Record<string, string> = {
    '(quiz)$': '$1zes',
    '^(ox)$': '$1en',
    '([m|l])ouse$': '$1ice',
    '(matr|vert|ind)ix|ex$': '$1ices',
    '(x|ch|ss|sh)$': '$1es',
    '([^aeiouy]|qu)y$': '$1ies',
    '(hive)$': '$1s',
    '(?:([^f])fe|([lr])f)$': '$1$2ves',
    '(shea|lea|loa|thie)f$': '$1ves',
    sis$: 'ses',
    '([ti])um$': '$1a',
    '(tomat|potat|ech|her|vet)o$': '$1oes',
    '(bu)s$': '$1ses',
    '(alias)$': '$1es',
    '(octop)us$': '$1i',
    '(ax|test)is$': '$1es',
    '(us)$': '$1es',
    '([^s]+)$': '$1s'
  }

  const irregular: Record<string, string> = {
    move: 'moves',
    foot: 'feet',
    goose: 'geese',
    sex: 'sexes',
    child: 'children',
    man: 'men',
    tooth: 'teeth',
    person: 'people'
  }

  const uncountable = [
    'aircraft',
    'audio',
    'bison',
    'cattle',
    'chassis',
    'cod',
    'compensation',
    'coreopsis',
    'data',
    'deer',
    'education',
    'emoji',
    'equipment',
    'evidence',
    'feedback',
    'firmware',
    'fish',
    'furniture',
    'gold',
    'hardware',
    'hovercraft',
    'information',
    'jedi',
    'kin',
    'knowledge',
    'love',
    'metadata',
    'money',
    'moose',
    'news',
    'nutrition',
    'offspring',
    'pike',
    'plankton',
    'pokemon',
    'police',
    'rain',
    'recommended',
    'related',
    'rice',
    'rice',
    'salmon',
    'series',
    'sheep',
    'shrimp',
    'software',
    'spacecraft',
    'species',
    'species',
    'sugar',
    'swine',
    'traffic',
    'trout',
    'tuna',
    'wheat',
    'wood',
    'you'
  ]

  // save some time in the case that singular and plural are the same
  if (uncountable.includes(word.toLowerCase())) {
    return word
  }

  // check for irregular forms
  for (const w in irregular) {
    const pattern = new RegExp(`${w}$`, 'i')
    const replace = irregular[w]

    if (pattern.test(word)) {
      return word.replace(pattern, replace)
    }
  }

  // check for matches using regular expressions
  for (const reg in plural) {
    const pattern = new RegExp(reg, 'i')

    if (pattern.test(word)) {
      return word.replace(pattern, plural[reg])
    }
  }

  return word
}

export const prependLineNumbers = (value: string, format: string = '{1}'): string => {
  return value.split(/\r?\n/)
    .map((line, index) => {
      return `${template(format, index + 1)} ${line}`
    })
    .join('\n')
}

export const removeDuplicateLines = (value: string): string => {
  return value.split(/\r?\n/).filter((line, index, lines) => {
    return lines.indexOf(line) === index
  }).join('\n')
}

export const removeEmptyLines = (value: string): string => {
  return value.split(/\r?\n/).filter(line => {
    return line.trim() !== ''
  }).join('\n')
}

export const removeSpaces = (value: string, replace: string = ''): string => {
  return value.replace(/\s+/g, replace)
}

export const repeatString = (value: string, count: number): string => {
  return count > 0 ? Array(count).fill(value).join('') : ''
}

export const reverseLines = (value: string): string => {
  return value.split(/\r?\n/).reverse().join('\n')
}

export const reverseString = (value: string): string => {
  return value.split('').reverse().join('')
}

export const romanToArabic = (roman: string): number => {
  const romanToArabic: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const romanDigits = roman.split('')

  return romanDigits.reduce((acc: number, curr: string, index: number) => {
    return romanToArabic[curr] < romanToArabic[romanDigits[index + 1]]
      ? acc - romanToArabic[curr]
      : acc + romanToArabic[curr]
  }, 0)
}

export const singular = (word: string): string => {
  const singular: Record<string, string> = {
    '(quiz)zes$': '$1',
    '(matr)ices$': '$1ix',
    '(vert|ind)ices$': '$1ex',
    '^(ox)en$': '$1',
    '(alias)es$': '$1',
    '(octop|vir)i$': '$1us',
    '(cris|ax|test)es$': '$1is',
    '(shoe)s$': '$1',
    '(o)es$': '$1',
    '(bus)es$': '$1',
    '([m|l])ice$': '$1ouse',
    '(x|ch|ss|sh)es$': '$1',
    '(m)ovies$': '$1ovie',
    '(s)eries$': '$1eries',
    '([^aeiouy]|qu)ies$': '$1y',
    '([lr])ves$': '$1f',
    '(tive)s$': '$1',
    '(hive)s$': '$1',
    '(li|wi|kni)ves$': '$1fe',
    '(shea|loa|lea|thie)ves$': '$1f',
    '(^analy)ses$': '$1sis',
    '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': '$1$2sis',
    '([ti])a$': '$1um',
    '(n)ews$': '$1ews',
    '(h|bl)ouses$': '$1ouse',
    '(corpse)s$': '$1',
    '(us)es$': '$1',
    s$: ''
  }

  const irregular: Record<string, string> = {
    move: 'moves',
    foot: 'feet',
    goose: 'geese',
    sex: 'sexes',
    child: 'children',
    man: 'men',
    tooth: 'teeth',
    person: 'people'
  }

  // check for irregular forms
  for (const w in irregular) {
    const pattern = new RegExp(`${irregular[w]}$`, 'i')
    const replace = w

    if (pattern.test(word)) {
      return word.replace(pattern, replace)
    }
  }

  for (const reg in singular) {
    const pattern = new RegExp(reg, 'i')

    if (pattern.test(word)) {
      return word.replace(pattern, singular[reg])
    }
  }

  return word
}

/**
 * Transforms a string to snake case
 *
 * @param {string} value
 * @returns {string}
 */
export const snakeCase = (value: string): string => {
  return (value.match(caseRegex) ?? [])
    .map(segment => segment.toLowerCase())
    .join('_')
}

export const sortCharacters = (value: string, inverse: boolean = false): string => {
  if (inverse) {
    return value.split('').sort((a, b) => b.localeCompare(a)).join('')
  }

  return value.split('').sort((a, b) => a.localeCompare(b)).join('')
}

export const sortLines = (value: string, inverse: boolean = false): string => {
  if (inverse) {
    return value.split(/\r?\n/).sort((a, b) => b.trim().localeCompare(a.trim())).join('\n')
  }

  return value.split(/\r?\n/).sort((a, b) => a.trim().localeCompare(b.trim())).join('\n')
}

export const stripAnsiCodes = (value: string): string => {
  // eslint-disable-next-line no-control-regex
  const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

  return value.replace(ansiRegex, '')
}

export const swapCase = (value: string): string => {
  return value.split('')
    .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    .join('')
}

export const template = <T>(value: string, ...args: T[]): string => {
  return value.replace(/{(\d+)}/g, (match: string, index: number): string => {
    if (args.length === 0) {
      return match
    }

    return args[index - 1] as unknown as string
  })
}

/**
 * Transforms a string to title case
 *
 * @param {string} value
 * @returns {string}
 */
export const titleCase = (value: string): string => {
  if (value === '') {
    return ''
  }

  return value.replace(/\s{2,}/g, ' ').split(' ')
    .map(segment => segment[0].toUpperCase() + segment.slice(1).toLowerCase())
    .join(' ')
}

export const trim = (value: string, chars: string = ' '): string => {
  return value.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '')
}

export const truncateWords = (value: string, count: number, append: string = '...'): string => {
  return `${value.slice(0, count - append.length)}${append}`
}

export const ucwords = (value: string, separators?: string): string => {
  if (separators === '' || separators === undefined || separators === null) {
    separators = '\\s'
  } else if (!separators.includes('\\s')) {
    separators += '\\s'
  }

  // /^(.)|[\s/|-]+(.)/g
  // /^(.)|[\\s]+(.)$/g

  const pattern = new RegExp(`^(.)|[${separators}]+(.)`, 'g')

  return value.replace(pattern, ($1) => {
    return $1.toUpperCase()
  })
}

export const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
  return Buffer.from(uint8Array).toString('base64')
}

export const unescapeHtml = (value: string): string => {
  return value.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, '\'')
}
