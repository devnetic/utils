export type IsNullable<T, K> = T extends null | undefined ? K : never
export type NullableKeys<T> = { [K in keyof T]-?: IsNullable<T[K], K> }[keyof T]

export const createObject = (): object => {
  return Object.create(null)
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

export const getValue = (object: object, path: string, defaultValue?: unknown): unknown => {
  const keys = path.split('.')
  let result: any = object

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]

    result = result[key]
  }

  return result ?? defaultValue
}

export const invert = (object: object): object => {
  return Object.entries(object).reduce((result: object, [key, value]: [string, any]) => {
    return { ...result, [value]: key }
  }, {})
}

export const omit = <T, K extends keyof T>(object: T, keys: K[]): Omit<T, K> => {
  return Object.entries(object).reduce((result: object, [key, value]: [any, any]) => {
    if (keys.includes(key)) {
      return result
    }

    return { ...result, [key]: value }
  }, {}) as any
}

export const pick = <T, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[K] } => {
  return Object.entries(object).reduce((result: object, [key, value]: [any, any]) => {
    if (keys.includes(key)) {
      return { ...result, [key]: value }
    }

    return result
  }, {}) as { [P in K]: T[K] }
}

export const pluck = <T, K extends keyof T>(array: ArrayLike<T>, property: K): Array<T[K]> => {
  return Array.from(array).map((item: T) => {
    return item[property]
  })
}

export const removeNullish = <T>(value: T): Omit<T, NullableKeys<T>> => {
  return Object.entries(value).reduce((result: object, [key, value]: [any, any]) => {
    if (value === null || value === undefined) {
      return result
    }

    return { ...result, [key]: value }
  }, {}) as any
}

export const renameKeys = <T extends object, K extends keyof T>(object: T, map: { [key in K]: string }): object => {
  return Object.entries(map).reduce((result: object, [key, value]: any) => {
    return { ...result, [value]: Reflect.get(object, key) }
  }, {})
}

export const sortKeys = <T extends object>(object: T): object => {
  return Object.entries(object).sort(([keyA, valueA], [keyB, valueB]): number => {
    return keyA.localeCompare(keyB)
  }).reduce((result: object, [key, value]: any) => {
    return { ...result, [key]: value }
  }, {})
}
