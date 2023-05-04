export interface BoxHandler<T> {
  next: <U>(f: (value: T) => U) => BoxHandler<U>
  done: <U>(f: (value: T) => U) => U
}

type UnaryFn<Input, Result> = (input: Input) => Result

type Callback<A extends any[], R> = (...params: A) => R

export const boxHandler = <T>(value: T): BoxHandler<T> => {
  return {
    next: f => boxHandler(f(value)),
    done: f => f(value)
  }
}

export const compose = <T>(...fns: Array<(arg: T) => T>) => {
  return (value: T) => fns.reduceRight((acc, fn) => {
    return fn(acc)
  }, value)
}

export const curry = <A extends any[], R>(fn: Callback<A, R>, ...args: any[]): any => {
  return fn.length <= args.length
    ? fn(...args as any)
    : curry.bind(null, fn, ...args as any)
}

// type Func<T = any> = (...args: T[]) => any

// export const curry = <A extends any[], R>(fn: Callback<A, R>, ...args: R[]): any => {
//   return fn.length <= args.length
//     ? fn(...args as any)
//     : curry.bind(null, fn, ...args as any)
// }

// type Curry<T extends (...args: any[]) => any> =
//   Parameters<T> extends [first: infer F, second: infer S, ...rest: infer R] ?
//       ((input: F) => Curry<(input: S, ...rest: R) => ReturnType<T>>) :
//     T

// export const curry = <T extends (...args: any[]) => any, R>(fn: T, ...args: R[]): Curry<T> => {
//   return fn.length <= args.length
//     ? fn(...args as any)
//     : curry.bind(null, fn, ...args as any)
// }

// export const curry = <T extends (...args: any[]) => any>(fn: T, ...args: any[]): Curry<T> => {
//   const argCount = fn.length

//   if (args.length >= argCount) {
//     return fn(...args)
//   }

//   return curry(fn.bind(null, ...args), argCount - args.length) as Curry<T>
// }

export const memoize = <A extends any[], R>(fn: Callback<A, R>): Callback<A, R> => {
  const cache: { [key: string]: R } = {}

  return (...args: A) => {
    const key = args.join('-')

    return cache[key] ?? (cache[key] = fn(...args))
  }
}

export const noop = (): Function => {
  return () => { }
}

export const once = <A extends any[], R>(fn: (...arg: A) => R): Callback<A, R> => {
  let ran = false

  return (...args: A): R => {
    if (!ran) {
      ran = true
      fn = fn(...args) as any
    }

    return fn as unknown as R
  }
}

export const partial = (fn: Function, ...args: any[]) => {
  return (...params: any[]) => {
    return fn(...args, ...params)
  }
}

export const pipe = <T>(...fns: Array<(arg: T) => T>) => {
  return (value: T) => fns.reduce((acc, fn) => {
    return fn(acc)
  }, value)
}

export const unary = <Input, Result>(fn: UnaryFn<Input, Result>): UnaryFn<Input, Result> => {
  return (input: Input): Result => {
    return fn(input)
  }
}

export const uncurry = (fn: Function, n = 1): Function => {
  return (...args: any[]) => (
    (acc) => (args: any[]) => args.reduce((x, y) => x(y), acc)
  )(fn)(args.slice(0, n))
}

export const xor = (a: boolean, b: boolean): boolean => {
  return a !== b
}
