export type RecursiveArray<T> = Array<(T | Array<(T | T[] | RecursiveArray<T>)>)>

export const accumulate = (array: number[]): number[] => {
  return array.reduce((acc, curr, index) => {
    return index === 0 ? [curr] : [...acc, curr + acc[index - 1]]
  }, [0])
}

export const alphabet = (length: number = 26): string[] => {
  return Array.from({ length }, (_, i) => String.fromCharCode(97 + i))
}

export const average = (array: number[]): number => {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length
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

export const flatten = <T>(input: RecursiveArray<T>, depth = 1): T[] => {
  return depth > 0
    ? input.reduce<T[]>((acc, val: any) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), [])
    : input.slice() as T[]
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

export const getConsecutiveArrays = <T,>(array: T[], size: number): T[][] => {
  return size > array.length
    ? []
    : array.slice(size - 1).map((_, index) => array.slice(index, size + index))
}

export const getIntersection = <T>(array: T[], ...arr: T[][]): T[] => {
  return array.filter((x) => arr.every((y) => y.includes(x)))
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

export const getNthElements = <T,>(array: T[], nth: number): T[] => {
  return array.filter((_, i) => i % nth === nth - 1)
}

export const getSubsets = <T>(array: T[]): T[][] => {
  return array.reduce((acc: any, curr: any) => {
    return [...acc, ...acc.map((x: any) => [...x, curr])]
  }, [[]])
}

export const getIndicesOf = <T>(array: T[], value: T): number[] => {
  return array.reduce<number[]>((acc, curr, i) => {
    return curr === value ? [...acc, i] : acc
  }, [])
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

export const ranking = (array: number[]): number[] => {
  return array.map((x, y, z) => z.filter((w) => w > x).length + 1)
}

export const union = <T,>(...arrays: T[][]): T[] => {
  return [...new Set(flatten(arrays))]
}

export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array))
}
