type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export const boxHandler = <T>(value: T): BoxHandler<T> => {
  return {
    done: (handler: (value: T) => T): T extends infer U ? U : BoxHandler<T> => {
      return handler(value) as any
    },
    next: (handler: (value: T) => T): T => {
      return handler(value)
    }
  }
}

// export interface BoxHandler<T> {
//   done: (handler: (value: T) => T) => T extends infer U ? U : BoxHandler<T>
//   next: (handler: (value: T) => T) => T extends infer U ? U : BoxHandler<T>
// }

export interface BoxHandler<T> {
  done: (handler: (value: T) => T) => T
  next: (handler: (value: T) => T) => T
}
