const caseRegex: RegExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g

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

export const plural = (word: string/* , amount: number = 0 */): string => {
  // if (amount !== undefined && amount === 1) {
  //   return word
  // }

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
