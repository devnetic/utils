# Object Functions

## clone<T>(target: T): T

Recursively clones an object.  An empty object is returned for uncloneable values such as error WeakMaps.

```ts
  const map = new Map();
  map.set('key', 'value');

  const set = new Set();
  set.add('value1');
  set.add('value2');

  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child'
    },
    field4: [2, 3, 4, { foo: { a: 'a', b: { c: 'c' } } }],
    field5: true,
    empty: null,
    map,
    set,
    bool: new Boolean(false),
    num: new Number(5),
    str: new String('str'),
    symbol: Object(Symbol(6)),
    date: new Date('2022-04-18T00:00:00.000Z'),
    reg: /\d+/,
    error: new Error('Clone function error'),
    greet: (): string => {
      return 'hello friend!'
    },
    sum: function (a: number, b: number): number {
      return a + b
    }
  }

  const clonedObject = utils.clone(target)
```

---

## createObject(): object

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
  },
  foo: [
    2,
    { bar: 'baz' }
  ]
}

utils.getValue(obj, 'a.b.c')               // 42
utils.getValue(obj, 'a.b.c.d')             // undefined
utils.getValue(obj, 'a.b.c.d', 'default')  // 'default'
utils.getValue(obj, 'foo[1]["bar"]')       // 'baz'
utils.getValue(obj, 'foo[0]')              // 2
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

## merge<T,>(a: T[], b: T[]): T[]

Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.

```ts
utils.merge([1, 2, 3, 4], [4, 5, 6])                                   // [4, 5, 6, 4])
utils.merge([1, 2, 3], [4, 5, 6])                                      // [4, 5, 6])
utils.merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] })  // { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] })
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

## setValue<T>(target: T, path: string, value: unknown): unknown

Sets the value to the path of the object. If a part of the route doesn't exist, it is created. Arrays are created for missing index properties, while objects are created for all other missing properties. This function does not modify the original object, returning a new object with the changes applied.

```ts
const target = {
  a: {
    b: {
      c: 42
    }
  },
  foo: [
    2,
    { bar: 'baz' }
  ]
}

utils.setValue(target, 'a.b.c', 'foo')             // { a: { b: { c: 'foo' } }, foo: [2, { bar: 'baz' }] })
utils.setValue(target, 'a.b.c.d', 'bar')           // { a: { b: { c: { d: 'bar' }  } }, foo: [2, { bar: 'baz' }] })
utils.setValue(target, 'foo[1]["bar"]', 'bazbar')  // { a: { b: { c: 42 } }, foo: [2, { bar: 'bazbar' }] })
utils.setValue(target, 'foo[0]', 'bar')            // { a: { b: { c: 42 } }, foo: ['bar', { bar: 'baz' }] })
utils.setValue(target, 'foo[]', 'bar')             // { a: { b: { c: 42 } }, foo: [2, { bar: 'baz' }, 'bar'] })
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
