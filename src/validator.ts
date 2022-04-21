import { getType } from './misc'

export const areEqual = <T>(array: T[]): boolean => {
  return new Set(array).size === 1
}

export const contains = <T>(array: T[], criteria: (a: T) => boolean): boolean => {
  return array.some(criteria)
}

export const containsLowerCase = (value: string): boolean => {
  return /[a-z]/g.test(value)
}

export const containsUpperCase = (value: string): boolean => {
  return /[A-Z]/g.test(value)
}

export const containsWhitespace = (value: string): boolean => {
  return /\s/g.test(value)
}

export const hasDuplicateValues = <T>(arr: T[]): boolean => {
  return new Set(arr).size !== arr.length
}

export const isAlpha = (value: string): boolean => {
  return /^[a-z]+$/i.test(value)
}

export const isAlphanumeric = (value: string): boolean => {
  return /^[a-z0-9]+$/i.test(value)
}

export const isAscii = (value: string): boolean => {
  // eslint-disable-next-line no-control-regex
  return /^[\x00-\x7F]*$/.test(value)
}

export const isAsyncFunction = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object AsyncFunction]'
}

export const isBase32 = (value: string): boolean => {
  return value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value)
}

export const isBase58 = (value: string): boolean => {
  return /^[A-HJ-NP-Za-km-z1-9]*$/.test(value)
}

export const isBase64 = (value: string): boolean => {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)
}

export const isBetween = (value: Date, start: Date, end: Date): boolean => {
  return value.getTime() >= start.getTime() && value.getTime() <= end.getTime()
}

export const isBic = (value: string): boolean => {
  return /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(value)
}

export const isCurrentYear = (value: Date): boolean => {
  return value.getFullYear() === new Date().getFullYear()
}

export const isEmptyObject = (value: object): boolean => {
  return Object.keys(value).length === 0
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

export const isEven = (value: number): boolean => {
  return value % 2 === 0
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

export const isGeneratorFunction = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object GeneratorFunction]'
}

export const isHexadecimal = (value: string): boolean => {
  return /^(0x)?[0-9a-f]+$/i.test(value)
}

export const isHexColor = (color: string): boolean => {
  return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)
}

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max
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

export const isLeapYear = (value: number): boolean => {
  return (value % 4 === 0 && value % 100 !== 0) || value % 400 === 0
}

export const isLowerCase = (value: string): boolean => {
  return value === value.toLowerCase()
}

export const isMongoId = (value: string): boolean => {
  return /^[a-f\d]{24}$/i.test(value)
}

export const isNegative = (value: number): boolean => {
  return value < 0
}

export const isNil = <T>(value: T): boolean => {
  return value === null || value === undefined
}

export const isNotEmpty = <T>(value: T[]): boolean => {
  return value.length > 0
}

export const isNumber = (value: any): boolean => {
  return typeof value === 'number' || value instanceof Number
}

export const isNumeric = (value: any): boolean => {
  return !Array.isArray(value) && (value - parseFloat(value) + 1) >= 0
}

export const isObject = <T>(value: T): boolean => {
  return getType(value) === 'Object'
}

export const isOctal = (value: string): boolean => {
  return /^-?(0o)?[0-7]+$/i.test(value)
}

export const isOdd = (value: number): boolean => {
  return value % 2 !== 0
}

export const isPlainObject = <T>(value: T): boolean => {
  if (getType(value) !== 'Object') {
    return false
  }

  if (Object.getPrototypeOf(value) === null) {
    return true
  }

  let proto = value

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(value) === proto
}

export const isPositive = (value: number): boolean => {
  return value > 0
}

export const isPrime = (value: number): boolean => {
  if (value < 2) {
    return false
  }

  for (let index = 2; index < value; index++) {
    if (value % index === 0) {
      return false
    }
  }

  return true
}

export const isPromise = <T>(value: T): boolean => {
  return getType(value) === 'Promise'
}

export const isRegExp = <T>(value: T): boolean => {
  return getType(value) === 'RegExp'
}

export const isString = <T>(value: T): boolean => {
  return typeof value === 'string' || value instanceof String
}

export const isSubsetOf = <T>(set: T[], subset: T[]): boolean => {
  if (set.length === 0 && subset.length > 0) {
    return false
  }

  return set.every((element) => subset.includes(element))
}

export const isToday = (date: Date): boolean => {
  return date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
}

export const isUpperCase = (value: string): boolean => {
  return value === value.toUpperCase()
}

export const isValidDate = (year: number, month: number, day: number): boolean => {
  return year >= 1 && year <= 9999 && month >= 0 && month <= 11 && day >= 1 && day <= 31
}

export const isWeekday = (date: Date): boolean => {
  return date.getDay() % 6 !== 0
}

export const isWeekend = (date: Date): boolean => {
  return date.getDay() % 6 === 0
}
