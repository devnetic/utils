# Function utility functions

Box handler.

## boxHandler<T>(value: T): BoxHandler<T>

```js
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

```js
const lowercase = (str: string) => str.toLowerCase();
const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str: string) => str.split('').reverse().join('');

const fn = utils.compose(reverse, capitalize, lowercase);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World')  // 'dlrow olleH'
```

---

## pipe<T>(...fns: Array<(arg: T) => T>)

Compose functions from left to right.

```js
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

```js
['1', '2', '3', '4', '5'].map(utils.unary(Number))  // [1, 2, 3, 4, 5]
```

---
