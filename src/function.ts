// type ReturnType<T> = T extends infer R ? R : any

// export interface BoxHandler {
//   next: (handler: (value: any) => any) => BoxHandler
//   done: (handler: (value: any) => any) => any
// }

// export const boxHandler = (value: any): BoxHandler => {
//   return {
//     next: (handler: (value: any) => any): BoxHandler => {
//       return boxHandler(handler(value))
//     },
//     done: (handler: (value: any) => any): ReturnType<BoxHandler> => {
//       return handler(value)
//     }
//   }
// }

export interface BoxHandler<T> {
  next: <U>(f: (value: T) => U) => BoxHandler<U>
  done: <U>(f: (value: T) => U) => U
}

type UnaryFn<Input, Result> = (input: Input) => Result

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

// export const curry = <T extends unknown[], U extends unknown[], R>(fn: (...args: [...T, ...U]) => R, ...front: T) => {
//   return (...tailArgs: U) => fn(...front, ...tailArgs)
// }

type Curried<A extends any[], R> =
  <P extends Partial<A>>(...args: P) => P extends A ? R :
    A extends [...SameLength<P>, ...infer S] ? S extends any[]
      ? Curried<S, R>
      : never : never

type SameLength<T extends any[]> = Extract<{ [K in keyof T]: any }, any[]>

// export function curry<A extends any[], R>(fn: (...args: A) => R): Curried<A, R> {
export const curry = <A extends any[], R>(fn: (...args: A) => R): Curried<A, R> => {
  return (...args: any[]): any =>
    args.length >= fn.length ? fn(...args as any) : curry((fn as any).bind(undefined, ...args));
}

// type aggregateFn<T> = (...args: T[]) => T

// interface curryFn<T> extends aggregateFn<T> {
//   (...args: T[]): curryFn<T>
// }

// export const curry = (fn: Function, ...args: any[]): any => {
//   return fn.length <= args.length
//     ? fn(...args)
//     : curry.bind(null, fn, ...args)
// }

// export const curry = <T>(fn: Function, ...args: T[]): T => {
//   return fn.length <= args.length
//     ? fn(...args)
//     : curry.bind(null, fn, ...args)
// }

export const noop = (): Function => {
  return () => {}
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
