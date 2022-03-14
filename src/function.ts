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

export const uncurry = (fn: Function, n = 1): Function => {
  return (...args: any[]) => (
    (acc) => (args: any[]) => args.reduce((x, y) => x(y), acc)
  )(fn)(args.slice(0, n))
}

export const xor = (a: boolean, b: boolean): boolean => {
  return a !== b
}
