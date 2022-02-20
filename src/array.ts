export const accumulate = (array: number[]): number[] => {
  return array.reduce((acc, curr, index) => {
    return index === 0 ? [curr] : [...acc, curr + acc[index - 1]]
  }, [0])
}

export const countBy = <T extends Record<string, unknown>, K extends keyof T>(array: T[], prop: K): Record<string, number> => {
  return array.reduce((acc: Record<string, number>, curr) => {
    const key = curr[prop] as keyof object

    acc[key] = acc[key] !== undefined ? ++acc[key] : 1

    return acc
  }, {})
}

export const countOccurrences = <T extends string | number>(array: T[]): Record<T, number> => {
  return array.reduce<Record<string | number, number>>((acc, curr) => {
    acc[curr] = acc[curr] !== undefined ? ++acc[curr] : 1

    return acc
  }, {})
}

export const countOccurrencesBy = <T, K extends T>(array: T[], value: K): number => {
  return array.reduce((acc, curr) => {
    return curr === value ? ++acc : acc
  }, 0)
}

/**
 * Transforms a list of key-value pairs into an object.
 *
 * @param {*} iterable An iterable such as Array or Map or other objects
 * implementing the iterable protocol.
 * @returns A new object whose properties are given by the entries of the
 * iterable.
 */
export const fromEntries = <T>(entries: Iterable<T> | ArrayLike<T>): object => {
  return Array.from(entries).reduce((result: object, [key, value]: any) => {
    return { ...result, [key]: value }
  }, {})
}

export const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i)
