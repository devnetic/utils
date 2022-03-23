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

    if (result === undefined || result === null) {
      return defaultValue
    }

    result = result[key]
  }

  return result ?? defaultValue
}

export const invert = <T>(object: Record<string, T>): Record<T, string> => {
  return Object.entries(object).reduce((result: Record<T, string>, [key, value]: [string, T]) => {
    return { ...result, [value]: key }
  }, {})
}

export const pluck = <T, K extends keyof T>(array: ArrayLike<T>, property: K): Array<T[K]> => {
  return Array.from(array).map((item: T) => {
    return item[property]
  })
}

export const renameKeys = <T extends object, K extends keyof T>(object: T, map: { [key in K]: string }): object => {
  return Object.entries(map).reduce((result: object, [key, value]: any) => {
    return { ...result, [value]: Reflect.get(object, key) }
  }, {})
}
