# Function utility functions

## boxHandler<T>(value: T): BoxHandler<T>

Defines a box handler function using a functional programming technique called the `"iterator pattern."`

The `boxHandler` function takes a single parameter `value`, which represents a box or a set of boxes. The function returns an object that has two methods:

`next`: This method takes a function `f` as input and returns a new box handler object that applies `f` to `value` and passes the result to the next method of the new object. In other words, the `next` method creates a chain of box handler objects that can be used to apply a sequence of operations to `value`.

`done`: This method takes a function `f` as input and directly applies `f` to `value`. This method is used to terminate the chain of box handler objects and obtain the final result of the operations applied to `value`.

To use the `boxHandler` function, you can chain the `next` method to apply a series of operations to a box or a set of boxes:

```ts
const getPercentNumber = (value: string) =>
  utils.boxHandler(value)
    .next((value: string) => value.replace(/\%/, ''))
    .next((value: string) => parseFloat(value))
    .done((res: number) => res * 0.01)

getPercentNumber('10%')  // 0.1
getPercentNumber('50%')  // 0.5

const getMoney = (price: string) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent: string) => Number.parseFloat(percent.replace(/\%/, '')) * 0.01;

const getDiscountPrice = (price: string, discount: string): number => {
  return utils.boxHandler(getMoney(price))
    .done((cents: number) => {
      return utils.boxHandler(getPercent(discount))
        .next((save: number) => cents - cents * save)
    })
    .done((res: number): number => res)

getDiscountPrice('$6.00', '20%')  // 4.8
```

---

## compose<T>(...fns: Array<(arg: T) => T>)

Compose functions from right to left.

```ts
const lowercase = (str: string) => str.toLowerCase();
const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str: string) => str.split('').reverse().join('');

const fn = utils.compose(reverse, capitalize, lowercase);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World')  // 'dlrow olleH'
```

---

## curry<A extends any[], R>(fn: Callback<A, R>, ...args: any[]): any

Is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

```ts
const sumThreeNumbers = (a: number, b: number, c: number): number => a + b + c
const sumFourNumbers = (a: number, b: number, c: number, d: number): number => a + b + c + d

utils.curry(sumThreeNumbers)(1)(2)(3)    // 6
utils.curry(sumThreeNumbers)(1, 2, 3)    // 6
utils.curry(sumThreeNumbers, 1)(2, 3)    // 6
utils.curry(sumThreeNumbers, 1)(2)(3)    // 6
utils.curry(sumThreeNumbers, 1, 2)(3)    // 6
utils.curry(sumThreeNumbers, 1, 2, 3)    // 6
utils.curry(sumFourNumbers, 1, 2, 3, 4)  // 10
utils.curry(sumFourNumbers)(1)(2)(3)(4)  // 10
```

---

## memoize<A extends any[], R>(fn: Callback<A, R>): Callback<A, R>

Returns the memoized (cached) function.

```ts
const fibonacci = (n: number): number => {
  return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

const memoizedFibonacci = utils.memoize(fibonacci)

memoizedFibonacci(1)  // 1
memoizedFibonacci(2)  // 1
memoizedFibonacci(3)  // 2
memoizedFibonacci(4)  // 3
memoizedFibonacci(5)  // 5
memoizedFibonacci(6)  // 8
memoizedFibonacci(6)  // 8
```

---

## noop(): void

Create an empty function.

```ts
utils.isFunction(utils.noop)  // true
utils.noop()  // undefined
```

---

## once<A extends any[], R>(fn: (...arg: A) => R): Callback<A, R>

Ensures a function is called only once.

```ts
let counter = 0
const incOnce = utils.once((): number => ++counter)

incOnce() // counter = 1
incOnce() // counter = 1
incOnce() // counter = 1

counter === 1
```

---

## partial(fn: Function, ...args: any[])

Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.

```ts
const add = (a: number, b: number): number => a + b

const inc = utils.partial(add, 1)

inc(2)  // 3
```

---

## pipe<T>(...fns: Array<(arg: T) => T>)

Compose functions from left to right.

```ts
const lowercase = (str: string) => str.toLowerCase()
const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
const reverse = (str: string) => str.split('').reverse().join('')

const fn = utils.pipe(lowercase, capitalize, reverse)

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World')  // 'dlrow olleH'
```

--- 

## unary<Input, Result>(fn: UnaryFn<Input, Result>): UnaryFn<Input, Result>

Create a function that accepts a single argument.

```ts
['1', '2', '3', '4', '5'].map(utils.unary(Number))  // [1, 2, 3, 4, 5]
```

---

## uncurry(fn: Function, n = 1): Function

Converts a curried function to a function with a optional depth parameter.

```ts
const sum = (a: number) => (b: number) => (c: number) => a + b + c

utils.uncurry(sum)(1)(2)(3)     // 6
utils.uncurry(sum, 1)(1)(2)(3)  // 6
utils.uncurry(sum, 2)(1, 2)(3)  // 6
utils.uncurry(sum, 3)(1, 2, 3)  // 6
```

---

## xor(a: boolean, b: boolean): boolean

Logical xor operator.

```ts
utils.xor(true, true)    // false
utils.xor(true, false)   // true
utils.xor(false, true)   // true
utils.xor(false, false)  // false
```
