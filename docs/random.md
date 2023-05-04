# Random Functions

## generateString(length: number, chars: string): string

Generate a random string from given characters.

```ts
const value = utils.generateString(10, 'abc')

typeof value === 'string'       // true
value.length === 10             // true
value.match(/[a-z]/i) !== null  // true
```

---

## randomArrayInRange(min: number, max: number, length: number): number[]

Generate an array of random integers in a given range.

```ts
const result = utils.randomArrayInRange(1, 100, 10)

result.length === 10  // true
result.every((value) => {
  return utils.isInteger(value) && value >= 1 && value <= 100
})                    // true
```

---

## randomBoolean(): boolean

Generate a random boolean.

```ts
const value = utils.randomBoolean()

typeof value === 'boolean'  // true
```

---

## randomFloat(): number

Generate a random floating point number in given range.

```ts
const value = utils.randomFloat()

typeof value === 'number'  // true
utils.isFloat(value)       // true
```

---

## randomHexColor(): string

Generate a random hex color.

```ts
const value = utils.randomHexColor()

typeof value === 'string'  // true
value.length === 7         // true
value.startsWith('#')      // true
```

---

## randomInteger(min: number, max: number): number 

Generate a random integer in given range.

```ts
const value = utils.randomInteger()

typeof value === 'number'  // true
utils.isInteger(value)     // true
```

---

## randomIpAddress(): string

Generate a random IP address.

```ts
const value = utils.randomIpAddress()

typeof value === 'string'      // true
value.split('.').length === 4  // true
```

---

## randomItem<T,>(array: T[]): T

Get a random item from an array.

```ts
const array = [1, 2, 3, 4, 5]
const value = utils.randomItem(array)

array.includes(value)  // true
```

---

## randomItems<T,>(array: T[], length: number): T[]

Get random items of an array.

```ts
const array = [1, 2, 3, 4, 5]
const values = utils.randomItems(array, 3)

values.length === 3                         // true
values.every(item => array.includes(item))  // true
```

---

## randomProperty<T,>(object: { [key: string]: T }): string

Pick a random property of an object.

```ts
const object = {
  aqua: '#00ffff',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  black: '#000000',
  blue: '#0000ff',
  brown: '#a52a2a',
  cyan: '#00ffff'
}
const value = utils.randomProperty(object)

Object.keys(object).includes(value)  // true
```

---

## randomString(): string

Generate a random string using Node crypto module.

```ts
const value = utils.randomString()

typeof value === 'string'          // true
value.length === 64                // true
value.match(/[a-z0-9]/i) !== null  // true
```

---
