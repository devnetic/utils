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

export const pipe = <T>(...fns: Array<(arg: T) => T>) => {
  return (value: T) => fns.reduce((acc, fn) => {
    return fn(acc)
  }, value)
}

type UnaryFn<Input, Result> = (input: Input) => Result

export const unary = <Input, Result>(fn: UnaryFn<Input, Result>): UnaryFn<Input, Result> => {
  return (input: Input): Result => {
    return fn(input)
  }
}
