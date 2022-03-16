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
