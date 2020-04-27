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
