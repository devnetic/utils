# Misc Functions

## celsiusToFahrenheit(celsius: number): number

Convert Celsius to Fahrenheit.

```ts
utils.celsiusToFahrenheit(-20)  // -4
utils.celsiusToFahrenheit(0)    // 32
utils.celsiusToFahrenheit(1)    // 33.8
utils.celsiusToFahrenheit(100)  // 212
```

---

## coalesce(...args: unknown[]): unknown

Get the first defined and non null argument.

```ts
utils.coalesce(null, undefined, 1, 2, 3)            // 1
utils.coalesce(undefined, null, 'helloworld', NaN)  // 'helloworld'
utils.coalesce(undefined, null, NaN, 'helloworld')  // NaN
```

---

## counter(initialValue = 1): Function

Generate an unique and increment id.

```ts
const counter = utils.counter()
const initializedCounter = utils.counter(10)

counter()  // 1
counter()  // 2
counter()  // 3
initializedCounter()  // 10
initializedCounter()  // 11
initializedCounter()  // 12
```

---

## diceRoll(): number

Emulate a dice throw.

```ts
utils.diceRoll()  // random value between 1 and 6
```

---

## fahrenheitToCelsius = (fahrenheit: number): number

```ts
utils.fahrenheitToCelsius(-4)    // -20
utils.fahrenheitToCelsius(32)    // 0
utils.fahrenheitToCelsius(33.8)  // 1
utils.fahrenheitToCelsius(33.9)  // 1.0555555820465088
utils.fahrenheitToCelsius(212)   // 100
```

---

<<<<<<< HEAD
## getQueryStringValue(url: string, key: string): string | undefined

Get the value of a param from a URL

```ts
utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'foo')   // 'bar'
utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'baz')   // 'qux'
utils.getQueryStringValue('http://localhost:8080/?foo=bar&baz=qux', 'quux')  // undefined
```

---

## getType(value: unknown): string

This function returns the value type, but this function is not just a typeof wrapper, because actually can determinate a more detailed data type. The data type is always a string starting with capital letter.

```ts
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

=======
>>>>>>> 62f2b7f... feat: new functions and docs, reorganization
## hexToRgb(hex: string): number[]

Convert hex to rgb.

```ts
utils.hexToRgb('#000000')  // [0, 0, 0]
utils.hexToRgb('#ffffff')  // [255, 255, 255]
utils.hexToRgb('#ff0000')  // [255, 0, 0]
utils.hexToRgb('#00ff00')  // [0, 255, 0]
utils.hexToRgb('#0000ff')  // [0, 0, 255]
utils.hexToRgb('#ffff00')  // [255, 255, 0]
utils.hexToRgb('#00ffff')  // [0, 255, 255]
utils.hexToRgb('#ff00ff')  // [255, 0, 255]
```


## matchAll(value: string, regex: RegExp): RegExpMatchArray[]

Perform a global regular expression match. Searches subject for all matches to 
the regular expression given in pattern and return them.

```ts
utils.matchAll('Lorem', /[aeiou]/g)  // [... two matches objects]
utils.matchAll('Lorem', /[abcd]/g)  // []
```

---

## rgbToHex(red: number, green: number, blue: number): string

Convert rgb color to hex.

```ts
utils.rgbToHex(0, 255, 255)    // '#00ffff'
utils.rgbToHex(255, 0, 255)    // '#ff00ff'
utils.rgbToHex(255, 255, 0)    // '#ffff00'
utils.rgbToHex(0, 0, 255)      // '#0000ff'
utils.rgbToHex(255, 0, 0)      // '#ff0000'
utils.rgbToHex(0, 255, 0)      // '#00ff00'
utils.rgbToHex(0, 0, 0)        // '#000000'
utils.rgbToHex(255, 255, 255)  // '#ffffff'
utils.rgbToHex(20, 10, 200)    // '#140ac8'
```

---

<<<<<<< HEAD
## async runPromisesInSequence(promises: Array<Promise<unknown>>): Promise<unknown>

Run Promises in sequence.

```ts
await utils.runPromisesInSequence([
  new Promise<number>(resolve => setTimeout(() => resolve(1), 100)),
  new Promise(resolve => setTimeout(() => resolve(2), 50)),
  new Promise(resolve => setTimeout(() => resolve(3), 0)),
]) // [1, 2, 3]
```

---

=======
>>>>>>> 62f2b7f... feat: new functions and docs, reorganization
## toFullHexColor = (color: string): string

Convert 3 digits color to 6 digits color

```ts
utils.toFullHexColor('#f00')    // '#ff0000'
utils.toFullHexColor('#0f0')    // '#00ff00'
utils.toFullHexColor('#00f')    // '#0000ff'
utils.toFullHexColor('#f0f')    // '#ff00ff'
utils.toFullHexColor('#0ff')    // '#00ffff'
utils.toFullHexColor('#fff')    // '#ffffff'
utils.toFullHexColor('#000')    // '#000000'
utils.toFullHexColor('000')     // '#000000'
utils.toFullHexColor('#fff0')   // '#fff0'
```

---

## uuid(): string

This function returns all matches for the given RegEx.

```ts
utils.uuid()  // Version 4 UUID Example: // 056e34a3-f88e-4d48-a001-bf70c9aefa40
```

---
