type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${'' extends P ? '' : '.'}${P}`
    : never : never

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: K extends string | number ?
    `${K}` | Join<K, Paths<T[K], Prev[D]>>
      : never
    }[keyof T] : ''

type Idx<T, K> = K extends keyof T ? T[K] :
  number extends keyof T ? K extends `${number}` ? T[number] : never : never

type PathValue<T, P extends Paths<T, 4>> = P extends `${infer Key}.${infer Rest}`
  ? Rest extends Paths<Idx<T, Key>, 4>
    ? PathValue<Idx<T, Key>, Rest>
    : never
  : Idx<T, P>

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

export const getValue = <T extends object, K extends Paths<T, 4>>(object: T, path: string, defaultValue?: any): PathValue<T, K> | undefined | any => {
  const keys = path.split('.')
  let result: any = object

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (result === undefined || result === null) {
      return defaultValue
    }

    result = result[key]
  }

  return result ?? defaultValue
}

export const pluck = <T, K extends keyof T>(array: ArrayLike<T>, property: K): Array<T[K]> => {
  return Array.from(array).map((item: T) => {
    return item[property]
  })
}
