# Object Functions

## const createObject(): object

Create an empty map that does not have properties.

```ts
  utils.createObject()        // {}
  Object.keys(object).length  // 0
```

---

## fromEntries(entries: IterableIterator<[string, string]>): Object

This function transforms a list of key-value pairs into an object.

```ts
utils.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']])  // { 0: 'a', 1: 'b', 2: 'c' }

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])
utils.fromEntries(entries)  // { foo: 'bar', baz: 42 }
```

---

## getValue(object: object, path: string, defaultValue?: unknown): unknown

Get the value at given path of an object.

```ts
const obj = {
  a: {
    b: {
      c: 42
    }
  }
}

utils.getValue(obj, 'a.b.c')               // 42
utils.getValue(obj, 'a.b.c.d')             // undefined
utils.getValue(obj, 'a.b.c.d', 'default')  // 'default'
```

---

## invert(object: object): object

Invert keys and values of an object.

```ts
const obj = {
  foo: 'bar',
  baz: 'fuzz',
  ergo: 'lorem'
}

utils.invert(obj)  // { bar: 'foo', fuzz: 'baz', lorem: 'ergo' }
```

---

## omit<T, K extends keyof T>(object: T, keys: K[]): Omit<T, K>

Omit a subset of properties from an object

```ts
const obj = {
  foo: 'bar',
  baz: 'fuzz',
  ergo: 'lorem'
}

utils.omit(obj, ['foo', 'ergo'])  // { baz: 'fuzz' }
```

---

## pick<T, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[K] }

Pick a subset of properties of an object.

```ts
const obj = {
  foo: 'bar',
  baz: 'fuzz',
  ergo: 'lorem'
}

utils.pick(obj, ['foo', 'ergo'])  // { foo: 'bar', ergo: 'lorem' }
```

---

## pluck<T, K extends keyof T>(array: ArrayLike<T>, property: K): Array<T[K]> 

Extract values of a property from an array of objects.

```ts
utils.pluck([{ a: 1 }, { a: 2 }, { a: 3 }], 'a')  // [1, 2, 3]
utils.pluck(
  [
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
  ],
  'name'
)                                                 // ['John', 'Smith', 'Peter']
```

---

## removeNullish<T>(value: T): object

Remove all null and undefined properties from an object.

```ts
const obj = {
  foo: null,
  baz: undefined,
  ergo: 'lorem'
}

utils.removeNullish(obj),  // { ergo: 'lorem' }
```

---

## renameKeys<T extends object, K extends keyof T>(object: T, map: { [key in K]: string }): object

Immutably rename object keys.

```ts
const obj = {
  foo: 'bar',
  baz: 42
}

utils.renameKeys(obj, { foo: 'bar', baz: 'fuz' })  // { bar: 'bar', fuz: 42 }
```

---

## sortKeys<T extends object>(object: T): object

Sort an object by its properties,

```ts
const obj = {
  foo: 'bar',
  baz: 42,
  ergo: 'lorem'
}

utils.sortKeys(obj)  // { baz: 42, ergo: 'lorem', foo: 'bar' }
```

---
