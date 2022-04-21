import { getType } from './misc'
import { isNil, isObject } from './validator'

export type IsNullable<T, K> = T extends null | undefined ? K : never
export type NullableKeys<T> = { [K in keyof T]-?: IsNullable<T[K], K> }[keyof T]

export const clone = <T>(target: T): T => {
  if (isNil(target) || !isObject(target)) {
    return target
  }

  const cloned: any = {}

  for (const attr in target) {
    const value: any = target[attr]
    const type: string = getType(value)

    switch (type) {
      case 'Array':
        cloned[attr] = Object.values(value).map(clone)
        break

      case 'Function':
        cloned[attr] = value.valueOf()
        break

      case 'Error':
        cloned[attr] = Object.getOwnPropertyNames(value).reduce((acc: any, prop) => {
          acc[prop] = value[prop]

          return acc
        }, new Error())

        break

      case 'Object':
        cloned[attr] = Object.keys(value).reduce((cloned: any, key: string) => {
          cloned[key] = clone(value[key])

          return cloned
        }, {})

        break

      case 'Symbol':
        cloned[attr] = Object(value.valueOf())

        break

      case 'WeakMap':
        cloned[attr] = {}

        break

      case 'Date':
      case 'Boolean':
      case 'Map':
      case 'Number':
      case 'RegExp':
      case 'Set':
      case 'String':
        cloned[attr] = new value.constructor(value.valueOf())

        break

      default:
        cloned[attr] = value
    }
  }

  return cloned
}

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

export const getValue = (target: object, path: string, defaultValue?: unknown): unknown => {
  return path.replace(/(?:\["?(\w+)"?])/g, '.$1')
    .replace(/^\./, '')
    .split('.')
    .reduce((result: any, property: string) => {
      return result[property] ?? defaultValue
    }, target)
}

export const invert = (object: object): object => {
  return Object.entries(object).reduce((result: object, [key, value]: [string, any]) => {
    return { ...result, [value]: key }
  }, {})
}

export const merge = <T>(...sources: T[]): T => {
  return sources.reduce((prev: any, obj: any) => {
    (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if ((Array.isArray(pVal) && Array.isArray(oVal)) || (isObject(pVal) && isObject(oVal))) {
        prev[key] = merge(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, Array.isArray(sources[0]) ? [] : {})
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

export const setValue = <T, >(target: T, path: string, value: unknown): unknown => {
  const segments: string[] = path.replace(/(?:\[["']?(\w*)["']?])/g, '.$1')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .split('.')

  const limit = segments.length - 1
  let clonedTarget: any = clone(target)

  // Store the reference to the result object
  const resultReference = clonedTarget

  for (let i = 0; i < limit; ++i) {
    const key = segments[i]

    if (typeof clonedTarget[key] !== 'object') {
      clonedTarget[key] = {}
    }

    clonedTarget = clonedTarget[key]
  }

  const key = segments[limit]

  if (Array.isArray(clonedTarget[key])) {
    clonedTarget[key].push(value)
  } else {
    clonedTarget[key] = value
  }

  return resultReference
}

export const sortKeys = <T extends object>(object: T): object => {
  return Object.entries(object).sort(([keyA, valueA], [keyB, valueB]): number => {
    return keyA.localeCompare(keyB)
  }).reduce((result: object, [key, value]: any) => {
    return { ...result, [key]: value }
  }, {})
}
