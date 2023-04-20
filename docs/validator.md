# Validator Functions

## areEqual<T>(array: T[]): boolean

Check if all items in an array are equal.

```ts
utils.areEqual(['hello', 'hello', 'hello'])  // true
utils.areEqual([1, 2, 3, 4])                 // false
```

---

## contains<T>(array: T[], criteria: (a: T) => boolean): boolean

Check if an array contains a value matching some criterias.

```ts
utils.contains(['hello', 'hello', 'hello'], (value) => value === 'hello')  // true
utils.contains(['hello', 'hello', 'hello'], (value) => value === 'world')  // false
```

---

## containsLowerCase(value: string): boolean

Check if a string contains lower case characters.

```ts
utils.containsLowerCase('abcDEF')  // true
utils.containsLowerCase('ABC1')    // false
```

---

## containsUpperCase(value: string): boolean

Check if a string contains upper case characters.

```ts
utils.containsUpperCase('Hello World')  // true
utils.containsUpperCase('abcDEF')       // true
utils.containsUpperCase('abcd')         // false
utils.containsUpperCase('hello world')  // false
```

---

## containsWhitespace(value: string): boolean

Check if a string contains whitespace.

```ts
utils.containsWhitespace('Hello World')  // true
utils.containsWhitespace('hello  world')  // true
utils.containsWhitespace('abcDEF')       // false
utils.containsWhitespace('abcd')         // false
```

---

## hasDuplicateValues<T>(arr: T[]): boolean

Check if a flat array has duplicate values.

```ts
utils.hasDuplicateValues([1, 2, 3, 4, 3])  // true
utils.hasDuplicateValues([1, 2, 3, 4])     // false
```

---

## isAlpha(value: string): boolean

Check if a string contains only letters.

```ts
utils.isAlpha('abcDEF')  // true
utils.isAlpha('ABC1')    // false
```

---

## isAlphanumeric(value: string): boolean

Check if a string contains only letters and numbers.

```ts
utils.isAlphanumeric('helloworld')  // true
utils.isAlphanumeric('HelloWorld')  // true
utils.isAlphanumeric('ABC1')        // true
utils.isAlphanumeric('hello 123')   // false
```

---

## isAscii(value: string): boolean

Check if a string contains only ASCII characters.

```ts
utils.isAscii('abcDEF')  // true
utils.isAscii('ABC1')    // true
utils.isAscii('acción')  // false
```

---

## isAsyncFunction(value: unknown): boolean

Check if a value is an async function.

```ts
utils.isAsyncFunction(async () => {})  // true
utils.isAsyncFunction(function async () { })  // true
utils.isAsyncFunction(() => {})  // false
utils.isAsyncFunction(function* () { })  // false
```

---

## isBase32(value: string): boolean

Check if a value is base32 encoded.

```ts
utils.isBase32('JBSWY3DPEHPK3PXP')  // true
utils.isBase32('JBSWY3DPEHPK3PX')   // false
```

---

## isBase58(value: string): boolean

Check if a value is base58 encoded.

```ts
utils.isBase58('5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ')  // true
utils.isBase58('5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLv')     // true
utils.isBase58('16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS')                   // true
utils.isBase58('16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGSy*')                 // false
```

---

## isBase64(value: string): boolean

Check if a value is base64 encoded.

```ts
utils.isBase64('aGVsbG8gd29ybGQ=')  // true
utils.isBase64('aGVsbG8gd29ybGQ')   // false
```

---

## isBetween(value: Date, start: Date, end: Date): boolean

Check if a date is between two dates.

```ts
const dat = new Date(2022, 3, 4)
const startDat = new Date(2022, 3, 1)
const endDat = new Date(2022, 3, 14)

utils.isBetween(date, startDate, endDate)  // true
utils.isBetween(startDate, date, endDate)  // false
```

---

## isBic(value: string): boolean

Check if a value is a business identifier code.

```ts
utils.isBic('MIDLGB22XXX')  // true
utils.isBic('NEDSZAJJ')     // true
utils.isBic('AAAABBCCDD')   // false
utils.isBic('12345678')     // false
```

---

## isBoolean(value: unknown): boolean

Checks if value is classified as a boolean primitive or object.

```ts
utils.isBoolean(true)            // true
utils.isBoolean(false)           // true
utils.isBoolean(Boolean(true))   // true
utils.isBoolean(Boolean(false))  // true
utils.isBoolean(1)               // false
utils.isBoolean('true')          // false
utils.isBoolean(null)            // false
```

---

## isCurrentYear(value: Date): boolean

Check if a date occurs in the current year.

```ts
utils.isCurrentYear(new Date(2022, 3, 4))  // true
utils.isCurrentYear(new Date(2021, 3, 4))  // false
```

---

## isEmptyObject(value: object): boolean

Check if an object is empty.

```ts
utils.isEmptyObject({})            // true
utils.isEmptyObject(new Object())  // true
utils.isEmptyObject({ a: 1 })      // false
```

---

## isEqual(value: any, other: any): boolean

This function evaluate equality between two values, the values could by any data type, including nested object.

```ts
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

## isEven(value: number): boolean

Check if a number is even.

```ts
utils.isEven(2)   // true
utils.isEven(0)   // true
utils.isEven(1)   // false
utils.isEven(3)   // false
utils.isEven(-1)  // false
```

---

## isFalsy(value: unknown): boolean

Validate if a value is Falsy.

```ts
utils.isFalsy(false)      // true
utils.isFalsy(null)       // true
utils.isFalsy(undefined)  // true
utils.isFalsy(0)          // true
utils.isFalsy(-0)         // true
utils.isFalsy(0n)         // true
utils.isFalsy(NaN)        // true
utils.isFalsy('')         // true
utils.isFalsy(true)       // false
utils.isFalsy(1)          // false
utils.isFalsy('1')        // false
utils.isFalsy({})         // false
utils.isFalsy([])         // false
```

---

## isFloat(value: any): boolean

This function check is a value is a valid float value.

```ts
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

```ts
utils.isFunction(function () {})  // true
utils.isFunction(function* () {})  // true
utils.isFunction(async function () {})  // true
```

---

## isGeneratorFunction(value: unknown): boolean

Check if a value is a generator function.

```ts
utils.isGeneratorFunction(function* () { })  // true
utils.isGeneratorFunction(() => { })  // false
```

---

## isHexadecimal(value: string): boolean

Check if a string is a hexadecimal number.

```ts
utils.isHexadecimal('0xFF')      // true
utils.isHexadecimal('0xFFF')     // true
utils.isHexadecimal('0xFFF0')    // true
utils.isHexadecimal('0xFFF00')   // true
utils.isHexadecimal('0xFFGF00')  // false
utils.isHexadecimal('#123')      // false
```

---

## isHexColor(value: string): boolean

Check if a string is a hexadecimal color.

```ts
utils.isHexColor('#fff')      // true
utils.isHexColor('#000')      // true
utils.isHexColor('#abc')      // true
utils.isHexColor('#ABC')      // true
utils.isHexColor('#aBc')      // true
utils.isHexColor('#aBcD')     // true
utils.isHexColor('#aBcDfF')   // true
utils.isHexColor('#aBcDfF1')  // false
utils.isHexColor('#aBcDf')    // false
utils.isHexColor('aBcDf')     // false
utils.isHexColor('#GHIJKL')   // false
```

## isInRange(value: number, min: number, max: number): boolean

Check if a number is in a given range.

```ts
utils.isInRange(5, 1, 10)  // true
utils.isInRange(5, 1, 4)   // fase
```

---

## isInteger(value: any): boolean

This function check is a value is a valid float value.

```ts
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

```ts
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

## isLeapYear(value: number): boolean

Check if a year is leap year.

```ts
utils.isLeapYear(2000)  // true
utils.isLeapYear(2020)  // true
utils.isLeapYear(1900)  // false
utils.isLeapYear(2100)  // false
utils.isLeapYear(2101)  // false
utils.isLeapYear(1899)  // false
utils.isLeapYear(1898)  // false
```

---

## isLowerCase(value: string): boolean

Check if a string is lower case.

```ts
utils.isLowerCase('foo')      // true
utils.isLowerCase('foo bar')  // true
utils.isLowerCase('Foo')      // false
utils.isLowerCase('Foo Bar')  // false
```

---

## isMongoId(value: string): boolean

Check if a string is a MongoDB ObjectId.

```ts
utils.isMongoId('507f1f77bcf86cd799439011')   // true
utils.isMongoId('507f1f77bcf86cd7994390113')  // false
utils.isMongoId('507f1f77bcf86cd799439011r')  // false
```

---

## isNegative(value: number): boolean

Check if a number is negative.

```ts
utils.isNegative(-1)         // true
utils.isNegative(-0.1)       // true
utils.isNegative(-Infinity)  // true
utils.isNegative(0)          // false
utils.isNegative(1)          // false
utils.isNegative(Infinity)   // false
```

---

## isNil<T>(value: T): boolean

Check if a value is nil.

```ts
utils.isNil(null)       // true
utils.isNil(undefined)  // true
utils.isNil(0)          // false
utils.isNil(false)      // false
utils.isNil('')         // false
utils.isNil(NaN)        // false
```

---

## isNotEmpty<T>(value: T[]): boolean

Check if an array is not empty.

```ts
utils.isNotEmpty([1, 2, 3])         // true
utils.isNotEmpty(['foo', 'bar'])    // true
utils.isNotEmpty([null])            // true
utils.isNotEmpty([undefined])       // true
utils.isNotEmpty([])                // false
```

---

## isNumber(value: any): boolean

This function checks if value is classified as a Number primitive or object.

```ts
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

```ts
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

## isObject<T>(value: T): boolean

Check if a value is an object.

```ts
utils.isObject({})                   // true
utils.isObject(new Object())         // true
utils.isObject(Object.create(null))  // true
utils.isObject(null)                 // false
utils.isObject(undefined)            // false
utils.isObject(true)                 // false
utils.isObject(false)                // false
utils.isObject('')                   // false
utils.isObject([])                   // false
utils.isObject(function () {})       // false
```

---

## isOctal(value: string): boolean

Check if a string is an octal number.

```ts
utils.isOctal('0o123')    // true
utils.isOctal('-0o123')   // true
utils.isOctal('0o123e4')  // false
```

---

## isOdd(value: number): boolean

Check if a number is odd.

```ts
utils.isOdd(1)   // true
utils.isOdd(3)   // true
utils.isOdd(0)   // false
utils.isOdd(2)   // false
utils.isOdd(-1)  // false
```

---

## isPlainObject<T>(value: T): boolean

Check if a value is a plain object.

```ts
utils.isPlainObject({})                   // true
utils.isPlainObject({ foo: 'bar' })       // true
utils.isPlainObject(new Object())         // true
utils.isPlainObject(Object.create(null))  // true
utils.isPlainObject(new Date())           // false
utils.isPlainObject('')                   // false
utils.isPlainObject(1)                    // false
utils.isPlainObject(true)                 // false
utils.isPlainObject(false)                // false
utils.isPlainObject(null)                 // false
utils.isPlainObject(undefined)            // false
utils.isPlainObject(NaN)                  // false
```

---

## isPositive(value: number): boolean

Check if a number is positive.

```ts
utils.isPositive(1)         // true
utils.isPositive(0.1)       // true
utils.isPositive(Infinity)  // true
utils.isPositive(0)         // false
utils.isPositive(-1)        // false
```

---

## isPrime(value: number): boolean

Check if a given integer is a prime number.

```ts
utils.isPrime(2)   // true
utils.isPrime(3)   // true
utils.isPrime(5)   // true
utils.isPrime(7)   // true
utils.isPrime(11)  // true
utils.isPrime(13)  // true
utils.isPrime(17)  // true
utils.isPrime(4)   // false
utils.isPrime(6)   // false
utils.isPrime(8)   // false
utils.isPrime(10)  // false
```

---

## isPromise<T>(value: T): boolean

Check if an object is a Promise.

```ts
utils.isPromise(Promise.resolve())       // true
utils.isPromise(new Promise(() => { }))  // true
utils.isPromise(() => { })               // false
utils.isPromise(null)                    // false
utils.isPromise(undefined)               // false
```

---

## isRegExp<T>(value: T): boolean

Check if a value is a regular expression.

```ts
utils.isRegExp(/foo/)              // true
utils.isRegExp(new RegExp('foo'))  // true
utils.isRegExp('')                 // false
utils.isRegExp(1)                  // false
utils.isRegExp(true)               // false
utils.isRegExp(false)              // false
utils.isRegExp(null)               // false
utils.isRegExp(undefined)          // false
utils.isRegExp(NaN)                // false
```

---

## isString<T>(value: T): boolean

Check if a value is a string.

```ts
utils.isString('')                 // true
utils.isString('foo')              // true
utils.isString(new String('foo'))  // true
utils.isString(1)                  // false
utils.isString(true)               // false
utils.isString(false)              // false
utils.isString(null)               // false
utils.isString(undefined)          // false
utils.isString(NaN)                // false
```

---

## isSubsetOf<T>(set: T[], subset: T[]): boolean

Check if an array is subset of other array.

```ts
utils.isSubsetOf([], [])                         // true
utils.isSubsetOf([1, 2, 3], [1, 2, 3, 4, 5])     // true
utils.isSubsetOf([1, 2, 3], [1, 2, 3])           // true
utils.isSubsetOf([1, 2, 3], [1, 2, 3, 4, 5, 6])  // true
utils.isSubsetOf([1, 2, 3], [4, 5, 6])           // false
utils.isSubsetOf([1, 2, 3], [4, 5])              // false
utils.isSubsetOf([1, 2, 3], [4])                 // false
utils.isSubsetOf([1, 2, 3], [])                  // false
utils.isSubsetOf([], [1, 2, 3])                  // false
```

---

## isToday(date: Date): boolean

Check if a date is today.

```ts
utils.isToday(new Date(2022, 3, 4))  // true
```

---

## isTruthy(value: unknown): boolean

Validate if a value is truethy.

```ts
utils.isTruthy(true)       // true
utils.isTruthy(1)          // true
utils.isTruthy('foo')      // true
utils.isTruthy('false')    // true
utils.isTruthy(12n)        // true
utils.isTruthy(Infinity)   // true
utils.isTruthy(-Infinity)  // true
utils.isTruthy(NaN)        // false
utils.isTruthy(false)      // false
utils.isTruthy(null)       // false
utils.isTruthy(undefined)  // false
utils.isTruthy(0)          // false
utils.isTruthy(-0)         // false
utils.isTruthy(0n)         // false
utils.isTruthy(NaN)        // false
utils.isTruthy('')         // false
```

---

## 

## isUpperCase(value: string): boolean

Check if a string is upper case.

```ts
utils.isUpperCase('FOO')      // true
utils.isUpperCase('FOO BAR')  // true
utils.isUpperCase('foo')      // false
utils.isUpperCase('foo bar')  // false
utils.isUpperCase('Foo Bar')  // false
```

---

## isValidDate(year: number, month: number, day: number): boolean

Validate a Gregorian date.

```ts
utils.isValidDate(2022, 3, 3)    // true
utils.isValidDate(2022, 11, 31)  // true
utils.isValidDate(2022, 13, 3)   // false
utils.isValidDate(2022, 11, 33)  // false
utils.isValidDate(10000, 3, 3)   // false
```

---

## isWeekday(date: Date): boolean

Check if a date is a weekday.

```ts
utils.isWeekday(new Date(2022, 2, 1))   // true
utils.isWeekday(new Date(2022, 2, 2))   // true
utils.isWeekday(new Date(2022, 2, 3))   // true
utils.isWeekday(new Date(2022, 2, 4))   // true
utils.isWeekday(new Date(2022, 2, 5))   // false
utils.isWeekday(new Date(2022, 2, 6))   // false
utils.isWeekday(new Date(2022, 2, 7))   // true
utils.isWeekday(new Date(2022, 2, 8))   // true
utils.isWeekday(new Date(2022, 2, 9))   // true
utils.isWeekday(new Date(2022, 2, 10))  // true
utils.isWeekday(new Date(2022, 2, 12))  // false
```

---

## isWeekend(date: Date): boolean

Check if a date is a weekend.

```ts
utils.isWeekend(new Date(2022, 2, 5))   // true
utils.isWeekend(new Date(2022, 2, 6))   // true
utils.isWeekend(new Date(2022, 2, 7))   // false
utils.isWeekend(new Date(2022, 2, 8))   // false
utils.isWeekend(new Date(2022, 2, 9))   // false
utils.isWeekend(new Date(2022, 2, 10))  // false
utils.isWeekend(new Date(2022, 2, 12))  // true
```

---
