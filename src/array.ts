export type NestedArray<T> = Array<NestedArray<T> | T>

export type ArrayElementType<T> = T extends Array<(infer E)> ? (E | undefined) : T

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

export const cartesianProduct = <T>(...sets: T[]): Array<Array<ArrayElementType<T>>> => {
  return sets.reduce((acc: any, set: any) => {
    return acc.flatMap((x: any) => set.map((y: any) => [...x, y]))
  }, [[]]) as Array<Array<ArrayElementType<T>>>
}

export const chunk = <T,>(arr: T[], size: number): T[][] => {
  return arr.reduce<T[][]>((acc, e, index) => {
    index % size !== 0 ? acc[acc.length - 1].push(e) : acc.push([e])

    return acc
  }, [])
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

export const flatten = <T>(input: NestedArray<T>, depth = 1): NestedArray<T> => {
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

export const groupBy = <T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => {
  return arr.reduce<Record<string, T[]>>((acc: any, item) => {
    acc[item[key]] = [...(acc[item[key]] ?? []), item]

    return acc
  }, {})
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

export const merge = <T,>(a: T[], b: T[]): T[] => {
  return [...new Set([...a, ...b])]
}

export const minBy = <T extends Record<string, unknown>, K extends keyof T>(arr: T[], key: K): T => {
  return arr.reduce((prev, curr) => {
    return curr[key] < prev[key] ? curr : prev
  })
}

export const partition = <T,>(arr: T[], criteria: (a: T) => boolean): T[][] => {
  return arr.reduce<T[][]>((acc, curr) => {
    acc[criteria(curr) ? 0 : 1].push(curr)

    return acc
  }, [[], []])
}

export const range = (min: number, max: number): number[] => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
}

export const ranking = (array: number[]): number[] => {
  return array.map((x, y, z) => z.filter((w) => w > x).length + 1)
}

export const repeat = <T,>(arr: T[], n: number): T[] => {
  return Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length])
}

export const swapItems = <T,>(a: T[], i: number, j: number): T[] => {
  return (a[i] !== undefined && a[j] !== undefined && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a
}

export const shuffle = <T,>(input: T[]): T[] => {
  return input
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

export const sortBy = <T extends Record<string, any>, K extends keyof T>(input: T[], k: K): T[] => {
  return input.concat().sort((a, b) => {
    return a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0
  })
}

export const transpose = <T,>(matrix: T[][]): T[][] => {
  return matrix.reduce<T[][]>((prev, next) => {
    return next.map((_, i) => (prev[i] ?? []).concat(next[i]))
  }, [])
}

export const union = <T>(...arrays: T[]): Array<ArrayElementType<T>> => {
  return [...new Set(flatten(arrays))] as Array<ArrayElementType<T>>
}

export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array))
}

export const unzip = <T>(arr: T[]): T[] => {
  return arr.reduce((acc: any, curr: any) => {
    curr.forEach((value: any, index: number) => acc[index].push(value))

    return acc
  },
  Array.from({ length: Math.max(...arr.map((a: any) => a.length)) }, () => []))
}

export const zip = <T>(...arrays: T[]): Array<Array<ArrayElementType<T>>> => {
  const maxLength = Math.max(...arrays.map((x: any) => x.length))

  return arrays.reduce((acc: any, curr: any) => {
    return acc.map((x: any, i: number) => [...x, curr[i]])
  }, Array.from({ length: maxLength }, () => []))
}
