import crypto from 'crypto'

export const generateString = (length: number, chars: string): string => {
  return Array(length)
    .fill('')
    .map((v) => chars[Math.floor(Math.random() * chars.length)])
    .join('')
}

export const randomArrayInRange = (min: number, max: number, length: number): number[] => {
  return Array(length)
    .fill('')
    .map(() => Math.floor(Math.random() * (max - min + 1)) + min)
}

export const randomBoolean = (): boolean => {
  return Math.random() >= 0.5
}

export const randomFloat = (): number => {
  return Math.random()
}

export const randomHexColor = (): string => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
}

export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomIpAddress = (): string => {
  return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
}

export const randomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

export const randomItems = <T,>(array: T[], length: number): T[] => {
  return Array(length)
    .fill('')
    .map(() => randomItem(array))
}

export const randomProperty = <T,>(object: { [key: string]: T }): string => {
  const keys = Object.keys(object)

  return keys[randomInteger(0, keys.length - 1)]
}

export const randomSign = (): number => {
  return Math.random() >= 0.5 ? 1 : -1
}

export const randomString = (): string => {
  return crypto.randomBytes(32).toString('hex')
}
