# Language Functions

## getType(value: unknown): string

This function returns the value type, but this function is not just a typeof wrapper, because actually can determinate a more detailed data type. The data type is always a string starting with capital letter.

```js
utils.getType({})  // 'Object'
utils.getType(new Date())  // 'Date'
utils.getType(String())  // 'String'
utils.getType('')  // 'String'
utils.getType('123')  // 'String'
utils.getType(123)  // 'Number'
utils.getType(123.4)  // 'Number'
utils.getType(true)  // 'Boolean'
utils.getType(false)  // 'Boolean'
utils.getType(BigInt(1))  // 'BigInt'
utils.getType([])  // 'Array'
utils.getType(new Int16Array(3))  // 'Int16Array'
```

---

## isAsyncFunction(value: unknown): boolean

Check if a value is an async function.

```js
utils.isAsyncFunction(async () => {})  // true
utils.isAsyncFunction(function async () { })  // true
utils.isAsyncFunction(() => {})  // false
utils.isAsyncFunction(function* () { })  // false
```

---

## isEqual(value: any, other: any): boolean

This function evaluate equality between two values, the values could by any data type, including nested object.

```js
utils.isEqual(1, 1)  // true
utils.isEqual(1.23, 1.23)  // true
utils.isEqual('1', '1')  // true
utils.isEqual(true, true)  // true
utils.isEqual(undefined, undefined)  // true
utils.isEqual(null, null)  // true
utils.isEqual({}, {})  // true
utils.isEqual({ foo: 'bar' }, { foo: 'bar' })  // true
utils.isEqual([], [])  // true
utils.isEqual(['foo'], ['foo'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'bar' }, 1, 'a'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'baz' }, 1, 'a'])  // false
utils.isEqual(true, 1)  // false
utils.isEqual({ foo: 'bar' }, {})  // false
```

---

## isGeneratorFunction(value: unknown): boolean

Check if a value is a generator function.

```js
utils.isGeneratorFunction(function* () { })  // true
utils.isGeneratorFunction(() => { })  // false
```

---

## isFloat(value: any): boolean

This function check is a value is a valid float value.

```js
utils.isFloat(123.4)  // true
utils.isFloat(-123.4)  // true
utils.isFloat(Math.PI)  // true
utils.isFloat('123')  // false
utils.isFloat(123)  // false
utils.isFloat(-123)  // false
utils.isFloat('-123')  // false
utils.isFloat('a')  // false
utils.isFloat({})  // false
utils.isFloat('')  // false
utils.isFloat([])  // false
```

---

## isFunction(value: unknown): boolean

Check if a value is a function.

```js
utils.isFunction(function () {})  // true
utils.isFunction(function* () {})  // true
utils.isFunction(async function () {})  // true
```

---

## isInteger(value: any): boolean

This function check is a value is a valid float value.

```js
utils.isInteger(42) // true
utils.isInteger('42') // true
utils.isInteger(4e2)  // true
utils.isInteger('4e2')  // true
utils.isInteger(' 1 ')  // true
utils.isInteger(0.0)  // true
utils.isInteger(Math.PI)  // false
utils.isInteger('') // false
utils.isInteger(' ')  // false
utils.isInteger('a')  // false
utils.isInteger(42.1) // false
utils.isInteger('1a') // false
utils.isInteger('4e2a') // false
utils.isInteger({}) // false
utils.isInteger('') // false
utils.isInteger([]) // false
utils.isInteger(null) // false
utils.isInteger(undefined)  // false
utils.isInteger(NaN)  // false
```

---

## isJSON(value: any): boolean

This function check is a value is a valid JSON value.

```js
utils.isJSON({})  // true
utils.isJSON({ foo: 'bar' })  // true
utils.isJSON(true)  // false
utils.isJSON(false)  // false
utils.isJSON(new Date())  // false
utils.isJSON('')  // false
utils.isJSON(1)  // false
utils.isJSON(1.23)  // false
utils.isJSON({ foo: BigInt(9007199254740991) })  // false
```

---

## isNumber(value: any): boolean

This function checks if value is classified as a Number primitive or object.

```js
utils.isNumeric('123')  // true
utils.isNumeric(123)  // true
utils.isNumeric(123.4)  // true
utils.isNumeric('-123.4')  // true
utils.isNumeric(-123)  // true
utils.isNumeric('-123')  // true
utils.isNumeric(Math.PI)  // true
utils.isNumeric('a')  // false
utils.isNumeric({})  // false
utils.isNumeric('')  // false
utils.isNumeric([])  // false
```

---

## isNumeric(value: any): boolean

This function check is a string value is a valid numeric value.

```js
utils.isNumeric('123')  // true
utils.isNumeric(123)  // true
utils.isNumeric(123.4)  // true
utils.isNumeric('-123.4')  // true
utils.isNumeric(-123)  // true
utils.isNumeric('-123')  // true
utils.isNumeric(Math.PI)  // true
utils.isNumeric('a')  // false
utils.isNumeric({})  // false
utils.isNumeric('')  // false
utils.isNumeric([])  // false
```
