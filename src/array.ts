export const accumulate = (array: number[]): number[] => {
  return array.reduce((acc, curr, index) => {
    return index === 0 ? [curr] : [...acc, curr + acc[index - 1]]
  }, [0])
}

export const cartesianProduct = (...sets: Array<Array<string | number>>): Array<Array<string | number>> => {
  return sets.reduce<Array<Array<string | number>>>((acc, set) => {
    return acc.flatMap((x: Array<string | number>) => set.map((y: string | number) => [...x, y]))
  }, [[]])
}

export const closest = (array: number[], target: number): number => {
  return array.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  })
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

// type MultiDimensionalArray = Array<Array<(T | (T | Array<T>))>

export const flatten = (array: any[], depth = 1): unknown[] => {
  // return array.reduce((a, b) => {
  //   return depth > 0 ? (Array.isArray(b) ? [...a, ...flatten(b, depth - 1)] : [...a, b]) : array.slice()
  // }, [])
  return depth > 0
    ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), [])
    : array.slice()
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

export const getMaxIndex = (array: number[]): number => {
  return array.reduce((prev, curr, i, a) => {
    return curr > a[prev] ? i : prev
  }, 0)
}

export const getMinIndex = (arr: number[]): number => {
  return arr.reduce((prev, curr, i, a) => {
    return curr < a[prev] ? i : prev
  }, 0)
}

export const longestStringIndex = (words: string[]): number => {
  return words.reduce((prev, curr, index, array) => {
    return curr.length >= array[prev].length ? index : prev
  }, 0)
}

export const lastIndex = <T,>(arr: T[], predicate: (a: T) => boolean): number => {
  return arr.reduce((prev, curr, index) => {
    return predicate(curr) ? index : prev
  }, -1)
}

export const maxBy = <T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T => {
  return arr.reduce((prev, curr) => {
    return curr[key] > prev[key] ? curr : prev
  })
}

export const minBy = <T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T => {
  return arr.reduce((prev, curr) => {
    return curr[key] < prev[key] ? curr : prev
  })
}

export const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i)
