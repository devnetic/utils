export const getType = (value: unknown = undefined): string => {
  const typeRegex = /\[object (.*)\]/

  return (Object.prototype.toString.call(value).match(typeRegex) as string[])[1]
}

export const isAsyncFunction = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object AsyncFunction]'
}

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

export const isGeneratorFunction = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object GeneratorFunction]'
}

export const isFloat = (value: any): boolean => {
  const parsedValue = parseFloat(value)

  return parsedValue === +parsedValue && parsedValue !== (parsedValue | 0)
}

export const isFunction = (value: unknown): boolean => {
  return [
    '[object Function]',
    '[object GeneratorFunction]',
    '[object AsyncFunction]',
    '[object Promise]'
  ].includes(Object.prototype.toString.call(value))
}

export const isInteger = (value: any): boolean => {
  if (isNaN(value)) {
    return false
  }

  const parsedValue = parseFloat(value)

  return (parsedValue | 0) === parsedValue
}

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

export const isNumber = (value: any): boolean => {
  return typeof value === 'number' || value instanceof Number
}

export const isNumeric = (value: any): boolean => {
  return !Array.isArray(value) && (value - parseFloat(value) + 1) >= 0
}
