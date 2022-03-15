export const addOrdinalSuffix = (number: number): string => {
  const suffixes = ['st', 'nd', 'rd']
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return `${number}th`
  }

  return `${number}${suffixes[lastDigit - 1] ?? 'th'}`
}

export const factorial = (number: number): number => {
  if (number === 0) {
    return 1
  }

  return number * factorial(number - 1)
}

export const fibonacci = (number: number): number => {
  if (number === 0) {
    return 0
  }

  if (number === 1) {
    return 1
  }

  return fibonacci(number - 1) + fibonacci(number - 2)
}
