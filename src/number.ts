export const addOrdinalSuffix = (number: number): string => {
  const suffixes = ['st', 'nd', 'rd']
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return `${number}th`
  }

  return `${number}${suffixes[lastDigit - 1] ?? 'th'}`
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const decimalToBinary = (number: number): string => {
  return number.toString(2)
}

export const digits = (number: number): number[] => {
  return number.toString().split('').map(Number)
}

export const factorial = (number: number): number => {
  if (number === 0) {
    return 1
  }

  return number * factorial(number - 1)
}

export const fibonacci = (number: number, memo: Record<string, number> = {}): number => {
  if (memo[number] !== undefined) {
    return memo[number]
  }

  if (number === 0) {
    return 0
  }

  if (number === 1) {
    return 1
  }

  memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo)

  return memo[number]
}

export const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
}

export const multiply = (...numbers: number[]): number => {
  return numbers.reduce((acc, number) => acc * number, 1)
}

export const prefixWithZeros = (number: number, length: number): string => {
  return String(number).padStart(length, '0')
}

export const remainder = (...numbers: number[]): number => {
  return numbers.reduce((accumulator, currentValue) => accumulator % currentValue)
}

export const round = (number: number, precision: number = 0): number => {
  const factor = Math.pow(10, precision)

  return Math.round(number * factor) / factor
}

export const subtract = (...numbers: number[]): number => {
  return numbers.reduce((accumulator, currentValue) => accumulator - currentValue)
}

export const sum = (...numbers: number[]): number => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
}

export const truncate = (number: number, precision: number = 0): number => {
  const factor = Math.pow(10, precision)

  return Math.trunc(number * factor) / factor
}
