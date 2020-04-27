# utils

Common utils for every single day tasks.

![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

# Usage

## dateFormat(time: Date, format: string, monthNames: string[] = [], dayNames: string[] = []): string

#### Year, month, and day tokens

*Tokens are case-sensitive.*

| Input       | Example          | Description |
| ----------- | ---------------- | ----------- |
| `YYYY`      | `2014`           | 4 or 2 digit year |
| `YY`        | `14`             | 2 digit year |
| `M MM`      | `1..12`          | Month number |
| `MMM MMMM`  | `Jan..December`  | Month name in default English locale or set by function parameter |
| `DD`        | `01..31`         | Day of month |

#### Hour, minute, second, millisecond, and offset tokens

*Tokens are case-sensitive.*

| Input          | Example  | Description |
| -------------- | -------- | ----------- |
| `H HH`         | `0..23`  | Hours (24 hour time) |
| `h hh`         | `1..12`  | Hours (12 hour time used with `a A`.) |
| `a A`          | `am PM`  | Post or ante meridiem |
| `m mm`         | `0..59`  | Minutes |
| `s ss`         | `0..59`  | Seconds |
| `u`            | `436`    | Fractional seconds |

```javascript
const date = new Date('2020-04-24T18:12:02.432')

utils.dateFormat(date, 'HH:mm:ss') // 18:12:02
utils.dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

## msToTime(milliseconds: number, format = 'HH:mm:ss'): string

This function receive a milliseconds parameter and an optional format parameter; format parameter is any valid `dateFormat()` function format string.

```javascript
const date = new Date('2020-04-24T18:12:02.432')

utils.msToTime(1587871603551) // 22:26:43
utils.msToTime(1587871603551, 'hh:mm:ss A') // 10:26:43 PM
```

---

## camelCase(value: string): string

```javascript
utils.camelCase('someValue')  // someValue
utils.camelCase('some value')  // someValue
utils.camelCase('some  value')  // someValue
utils.camelCase('SOME VALUE')  // someValue
```

## kebabCase(value: string): string

```javascript
utils.kebabCase('someValue')  // some-value
utils.kebabCase('some value')  // some-value
utils.kebabCase('some  value')  // some-value
utils.kebabCase('SOME VALUE')  // some-value
```

## pascalCase(value: string): string

```javascript
utils.pascalCase('someValue')  // SomeValue
utils.pascalCase('some value')  // SomeValue
utils.pascalCase('some  value')  // SomeValue
utils.pascalCase('SOME VALUE')  // SomeValue
```

## snakeCase(value: string): string 

```javascript
utils.snakeCase('someValue')  // some_value
utils.snakeCase('some value')  // some_value
utils.snakeCase('some  value')  // some_value
utils.snakeCase('SOME VALUE')  // some_value
```

## titleCase(value: string): string

```javascript
utils.titleCase('someValue')  // Somevalue
utils.titleCase('some value') // Some Value
utils.titleCase('some  value')  // Some_value
utils.titleCase('SOME VALUE')  // Some Value
```

---

## getType(value: any): string

This function returns the value type, but this function is not just a typeof wrapper, because actually can determinate a more detailed data type. The data type is always a string starting with capital letter.

```javascript
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

## isEqual(value: any, other: any): boolean

This function evaluate equality between two values, the values could by any data type, including nested object.

```javascript
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

## isJSON(value: any): boolean

This function check is a value is a valid JSON value.

```javascript
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

## isFloat(va: any): boolean

This function check is a value is a valid float value.

```javascript
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

## isNumeric(value: any): boolean

This function check is a string value is a valid numeric value.

```javascript
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

## matchAll(value: string, regex: RegExp): RegExpMatchArray[]

This function returns all matches for the given RegEx.

```javascript
utils.matchAll('Lorem', /[aeiou]/g)  // [... two matches objects]
utils.matchAll('Lorem', /[abcd]/g)  // []
```

## uuid(): string

This function returns all matches for the given RegEx.

```javascript
utils.uuid()  // Version 4 UUID Example: // 056e34a3-f88e-4d48-a001-bf70c9aefa40
```
