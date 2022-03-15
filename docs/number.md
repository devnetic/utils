# Number Functions

## addOrdinalSuffix(number: number): string

Add an ordinal suffix to a number.

```ts
utils.addOrdinalSuffix(1)  // '1st'
utils.addOrdinalSuffix(2)  // '2nd'
utils.addOrdinalSuffix(3)  // '3rd'
utils.addOrdinalSuffix(4)  // '4th'
```

---

## clamp(value: number, min: number, max: number): number

Clamp a number between two values.

```ts
utils.clamp(0, 1, 2)      // 1
utils.clamp(1, 1, 2)      // 1
utils.clamp(2, 1, 2)      // 2
utils.clamp(3, 1, 2)      // 2
utils.clamp(199, 10, 25)  // 25
```

---

## decimalToBinary(number: number): string

Convert decimal to binary.

```ts
utils.decimalToBinary(0)    //  '0'
utils.decimalToBinary(1)    //  '1'
utils.decimalToBinary(2)    //  '10'
utils.decimalToBinary(3)    //  '11'
utils.decimalToBinary(4)    //  '100'
utils.decimalToBinary(24)   //  '11000'
utils.decimalToBinary(543)  //  '1000011111'
```

---

## digits(number: number): number[]

Get the arrays of digits from a number

```ts
utils.digits(0)     // [0]
utils.digits(1)     // [1]
utils.digits(12)    // [1, 2]
utils.digits(1234)  // [1, 2, 3, 4]
```

---

## factorial(number: number): number

Calculate the factorial of a number.

```ts
utils.factorial(0)  // 1
utils.factorial(1)  // 1
utils.factorial(2)  // 2
utils.factorial(3)  // 6
utils.factorial(4)  // 24
utils.factorial(5)  // 120
```

---

## fibonacci = (number: number, memo: Record<string, number> = {}): number

Calculate Fibonacci numbers.

```ts
utils.fibonacci(0)   // 0
utils.fibonacci(1)   // 1
utils.fibonacci(2)   // 1
utils.fibonacci(3)   // 2
utils.fibonacci(4)   // 3
utils.fibonacci(5)   // 5
utils.fibonacci(6)   // 8
utils.fibonacci(7)   // 13
utils.fibonacci(12)  // 144
utils.fibonacci(13)  // 233
```

---

## gcd(a: number, b: number): number

Compute the greatest common divisor between two numbers.

```ts
utils.gcd(0, 0)    // 0
utils.gcd(0, 1)    // 1
utils.gcd(1, 0)    // 1
utils.gcd(1, 1)    // 1
utils.gcd(8, 9)    // 1
utils.gcd(9, 9)    // 9
utils.gcd(10, 9)   // 1
utils.gcd(10, 15)  // 5
```

---

## multiply(...numbers: number[]): number

```ts
utils.multiply(0, 0)            // 0
utils.multiply(0, 1)            // 0
utils.multiply(1, 0)            // 0
utils.multiply(3, 3)            // 9
utils.multiply(1, 2, 3, 4)      // 24
utils.multiply(1, 2, 3, 4, 5)   // 120
```

---

## prefixWithZeros(number: number, length: number): string

Prefix an integer with zeros.

```ts
utils.prefixWithZeros(0, 0)  // '0'
utils.prefixWithZeros(0, 1)  // '0'
utils.prefixWithZeros(1, 0)  // '1'
utils.prefixWithZeros(1, 1)  // '1'
utils.prefixWithZeros(2, 0)  // '2'
utils.prefixWithZeros(2, 1)  // '2'
utils.prefixWithZeros(2, 2)  // '02'
utils.prefixWithZeros(2, 3)  // '002'
utils.prefixWithZeros(2, 4)  // '0002'
```

---

## remainder(...numbers: number[]): number

Calculate the remainder of division of arguments.

```ts
utils.remainder(10, 3)       // 1
utils.remainder(10, 2)       // 0
utils.remainder(10, 1)       // 0
utils.remainder(1, 2, 3, 4)  // 1
utils.remainder(10, -1)      // 0
utils.remainder(10, -2)      // 0
utils.remainder(10, -3)      // 1
```

---

## round(number: number, precision: number = 0): number

Round a number to a given number of digits.

```ts
utils.round(1.234567)     // 1
utils.round(1.234567, 0)  // 1
utils.round(1.234567, 1)  // 1.2
utils.round(1.234567, 2)  // 1.23
utils.round(1.234567, 3)  // 1.235
utils.round(1.234567, 4)  // 1.2346
```

---

## subtract(...numbers: number[]): number

Subtract arguments.

```ts
utils.subtract(0, 0)           //  0
utils.subtract(0, 1)           //  -1
utils.subtract(1, 0)           //  1
utils.subtract(2, 2)           //  0
utils.subtract(2, 3)           //  -1
utils.subtract(3, 2)           //  1
utils.subtract(1, 2, 3, 4)     //  -8
utils.subtract(1, 2, 3, 4, 5)  //  -13
```

---

## sum(...numbers: number[]): number

Calculate the sum of arguments.

```ts
utils.sum(10, 3)        // 13
utils.sum(10, 2)        // 12
utils.sum(10, 1)        // 11
utils.sum(1, 2, 3, 4)   // 10
utils.sum(10, -1)       // 9
utils.sum(10, -2)       // 8
utils.sum(10, -3)       // 7
```

---

## truncate(number: number, precision: number = 0): number

Truncate a number to a given number of decimal places without rounding.

```ts
utils.truncate(1.234567)         // 1
utils.truncate(25.198726354)     // 25
utils.truncate(25.198726354, 1)  // 25.1
utils.truncate(25.98726354, 2)   // 25.98
utils.truncate(25.98726354, 3)   // 25.987
utils.truncate(-25.198726354)    // -25
```

---
