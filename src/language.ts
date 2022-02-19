/**
 * Returns the type of the given parameter
 *
 * @param {*} value
 * @returns {string}
 */
export const getType = (value: unknown = undefined): string => {
  const typeRegex = /\[object (.*)\]/

  return (Object.prototype.toString.call(value).match(typeRegex) as string[])[1]
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
  if (Object.keys(value as object).length !== Object.keys(other).length) {
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

export const isNumber = (value: any): boolean => {
  return typeof value === 'number' || value instanceof Number
}

export const isNumeric = (value: any): boolean => {
  return !Array.isArray(value) && (value - parseFloat(value) + 1) >= 0
}
