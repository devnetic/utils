type ReturnType<T> = T extends infer R ? R : any

export interface BoxHandler {
  next: (handler: (value: any) => any) => BoxHandler
  done: (handler: (value: any) => any) => any
}

export const boxHandler = (value: any): BoxHandler => {
  return {
    next: (handler: (value: any) => any): BoxHandler => {
      return boxHandler(handler(value))
    },
    done: (handler: (value: any) => any): ReturnType<BoxHandler> => {
      return handler(value)
    }
  }
}

export const pipe = <T>(...fns: T[]): T => {
  return (value: any) => {
    return fns.reduce((y: any, func: Function) => {
      return func(y)
    }, value)
  }
}

// type ReturnType<T> = T extends (...args: T[]) => infer R ? R : T

// export interface BoxHandler<T> {
//   next: <U>(handler: (value: T) => ReturnType<U>) => ReturnType<BoxHandler<T>>
//   done: <K>(handler: (value: K) => K) => K
// }

// export const boxHandler = <T>(value: T): BoxHandler<T> => {
//   return {
//     next: <U>(handler: (value: T) => ReturnType<U>): ReturnType<BoxHandler<T>> => {
//       return boxHandler(handler(value)) as ReturnType<BoxHandler<T>>
//     },
//     done: <K>(handler: (value: K) => K): K => {
//       return handler(value as unknown as K)
//     }
//   }
// }

// export class Box<T> {
//   private readonly value: T
//   private doneProp: boolean = false
//   private nextProp: (value: T) => void = () => {}

//   constructor (value: T) {
//     this.value = value
//   }

//   public doneHandler (handler: (value: T) => void): Box<T> {
//     this.doneProp = true
//     this.nextProp = handler
//     return this
//   }

//   public nextHandler (handler: (value: T) => void): Box<T> {
//     this.nextProp = handler
//     return this
//   }

//   public next (value: T): Box<T> {
//     if (this.doneProp) {
//       this.next(value)
//     } else {
//       this.nextHandler(value as unknown as (value: T) => void)
//     }
//     return this
//   }

//   // public done (handler: (value: T) => void): Box<T> {
//   public done (handler: (value: T) => T): ReturnType<Box<T>> {
//     if (this.doneProp) {
//       handler(this.value)
//     } else {
//       this.doneHandler(handler)
//     }
//     return this
//   }
// }

// type ReturnType<T> = T extends (...args: T[]) => infer R ? R : T

// export const boxHandler = <T>(value: T): BoxHandler<T> => {
//   return {
//     done: (handler: (value: T) => ReturnType<T>): ReturnType<T> => {
//       return handler(value) as any
//     },
//     next: (handler: (value: T) => ReturnType<T>): ReturnType<T> => {
//       return handler(value)
//     }
//   }
// }

// // export interface BoxHandler<T> {
// //   done: (handler: (value: T) => T) => T extends infer U ? U : BoxHandler<T>
// //   next: (handler: (value: T) => T) => T extends infer U ? U : BoxHandler<T>
// // }

// export interface BoxHandler<T> {
//   done: (handler: (value: T) => ReturnType<T>) => ReturnType<T>
//   next: (handler: (value: T) => ReturnType<T>) => ReturnType<T>
// }
