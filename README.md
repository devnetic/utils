# Utility Library

![Node CI](https://github.com/devnetic/utils/workflows/Node%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/devnetic/utils/badge.svg?branch=master)](https://coveralls.io/github/devnetic/utils?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

This library tries to have efficient functions for almost any need when you are writing software in JavaScript, TypeScript and/or Node.js. The library is written in TypeScript, so you have full type support when you use it.

If you need a function or feature that is not present in this library, please send me a message or open a Pull Request requesting the feature and I will do my best to include it.

# Installation

```shell
$ npm i -S @devnetic/utils
```

# Usage

```js
// commonjs
const { dateFormat } = require('@devnetic/utils)

const date = new Date('2020-04-24T18:12:02.432')

dateFormat(date, 'HH:mm:ss') // 18:12:02
dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

```js
// ES Module
import { dateFormat } from '@devnetic/utils'

const date = new Date('2020-04-24T18:12:02.432')

dateFormat(date, 'HH:mm:ss') // 18:12:02
dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

# Documentation

1. [Array](https://github.com/devnetic/utils/blob/master/docs/array.md)
2. [Date](https://github.com/devnetic/utils/blob/master/docs/date.md)
3. [Function](https://github.com/devnetic/utils/blob/master/docs/function.md)
4. [Math](https://github.com/devnetic/utils/blob/master/docs/math.md)
5. [Misc](https://github.com/devnetic/utils/blob/master/docs/misc.md)
6. [Number](https://github.com/devnetic/utils/blob/master/docs/number.md)
7. [Object](https://github.com/devnetic/utils/blob/master/docs/object.md)
8. [Random](https://github.com/devnetic/utils/blob/master/docs/random.md)
9. [String](https://github.com/devnetic/utils/blob/master/docs/string.md)
10. [Validator](https://github.com/devnetic/utils/blob/master/docs/validator.md)

## [Array Functions](https://github.com/devnetic/utils/blob/master/docs/array.md)

- **accumulate:** Create an array of cumulative sum.
- **alphabet:** Generate an array of alphabet characters.
- **average:** Get the average of an array.
- **cartesianProduct:** Create cartesian product.
- **castArray:** Casts value as an array if it's not one.
- **chunk:** Split an array into chunks.
- **closest:** Find the closest number from an array
- **countBy:** Count by the properties of an array of objects.
- **countOccurrences:** Count the occurrences of array elements.
- **countOccurrencesBy:** Count the occurrences of a given value in an array.
- **division:** Calculate the division of arguments.
- **flatten:** Flatten an array.
- **getConsecutiveArrays:** Get all arrays of consecutive elements.
- **getIndicesOf:** Get indices of a value in an array.
- **getIntersection:** Get the intersection of arrays.
- **getMaxIndex:** Find the index of the maximum item of an array
- **getMinIndex:** Find the index of the minimum item of an array
- **getNthElements:** Get all n-th items of an array.
- **getSubsets:** Get all subsets of an array.
- **groupBy:** Group an array of objects by a key.
- **lastIndex:** Find the index of the last matching item of an array.
- **longestStringIndex:** Find the index of the longest string in an array.
- **maxBy:** Find the maximum item of an array by given key.
- **minBy:** Find the minimum item of an array by given key.
- **partition:** Partition an array based on a condition.
- **range:** Create an array of numbers in the given range.
- **ranking:** Get the rank of an array of numbers
- **repeat:** Repeat an array.
- **shuffle:** Shuffle an array.
- **sortBy:** Sort an array of items by given key.
- **swapItems:** Swap two array items.
- **transpose:** Swap the rows and columns of a matrix.
- **union:** Get union of arrays.
- **unique:** Get the unique values of an array.
- **unzip:** Unzip an array of arrays
- **zip:** Zip multiple arrays.


## [Date Functions](https://github.com/devnetic/utils/blob/master/docs/date.md)

- **dateExtract:** Extract year, month, day, hour, minute, second and millisecond from a date.
- **dateFormat:** Returns a date formatted according to given format.
- **daysInMonth:** Get the number of days in given month.
- **daysInYear:** Get the total number of days in a year
- **daysDiff:** Calculate the number of difference days between two dates.
- **firstDateOfMonth:** Get the first date in the month of a date
- **formatSeconds:** Convert seconds to hh:mm:ss format
- **getQuarter:** Get the current quarter of a date.
- **getTimezone:** Get the timezone string.
- **getWeekday:** Get the weekday of a date.
- **lastDateOfMonth:** Get the last date in the month of a date.
- **monthDiff:** Calculate the number of difference days between two dates.
- **msToTime:** Transform a duration in milliseconds to human readable 'HH:mm:ss.m' format
- **suffixDate:** Add AM PM suffix to an hour.
- **tomorrow:** Get the tomorrow date.
- **yesterday:** Get the yesterday date.

## [Function Utilities](https://github.com/devnetic/utils/blob/master/docs/function.md)

- **boxHandler:** Defines a box handler function using a functional programming technique called the `"iterator pattern."`
- **compose:** Compose functions from right to left.
- **curry:** Is a function that takes one argument at a time and returns a new function expecting the next argument.
- **memoize:** Returns the memoized (cached) function.
- **noop:** Create an empty function.
- **once:** Ensures a function is called only once.
- **partial:** Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.
- **pipe:** Compose functions from left to right.
- **unary:** Create a function that accepts a single argument.
- **uncurry:** Converts a curried function to a function with a optional depth parameter.
- **xor:** Logical xor operator.

## [Math Functions](https://github.com/devnetic/utils/blob/master/docs/math.md)

- **containsRect:** Check if a rectangle contains other one.
- **degreesAngle:** ## degreesToRadians(degrees: number): number
- **degreesToRadians:** Convert degrees to radians.
- **distance:** Calculate the distance between two points.
- **isPointInside:** Check if a point is inside a rectangle.
- **lerp:** Calculate the linear interpolation between two numbers.
- **midpoint:** Calculate the midpoint between two points.
- **normalizeRatio:** Normalize the ratio of a number in a range.
- **overlaps:** Check if a rectangle overlaps other one.
- **radiansAngle:** Calculate the angle in radians of a line defined by two points.
- **radiansToDegrees:** Convert radians to degrees.
- **roundToNearest:** Round a number to the nearest multiple of a given value.

## [Misc Functions](https://github.com/devnetic/utils/blob/master/docs/misc.md)

- **celsiusToFahrenheit:** Convert Celsius to Fahrenheit.
- **coalesce:** Get the first defined and non null argument.
- **counter:** Generate an unique and increment id.
- **crc32:** Returns the crc32 checksum of string as an integer.
- **decimalToHex:** Returns a string containing a hexadecimal representation of the given unsigned `value` 
- **diceRoll:** Emulate a dice throw.
- **fahrenheitToCelsius:** Convert Fahrenheit to Celsius
- **getQueryStringValue:** Get the value of a param from a URL.
- **getType:** This function returns the value type, but this function is not just a typeof wrapper.
- **hexToRgb:** Convert hex to rgb.
- **matchAll:** Perform a global regular expression match. Searches subject for all matches to 
- **rgbToHex:** Convert rgb color to hex.
- **async:** Run Promises in sequence.
- **toFullHexColor:** Convert 3 digits color to 6 digits color.
- **uuid:** This function returns all matches for the given RegEx.

## [Number Functions](https://github.com/devnetic/utils/blob/master/docs/number.md)

- **addOrdinalSuffix:** Add an ordinal suffix to a number.
- **clamp:** Clamp a number between two values.
- **decimalToBinary:** Convert decimal to binary.
- **digits:** Get the arrays of digits from a number
- **factorial:** Calculate the factorial of a number.
- **fibonacci:** Calculate Fibonacci numbers.
- **gcd:** Compute the greatest common divisor between two numbers.
- **multiply:** Multiply arguments.
- **prefixWithZeros:** Prefix an integer with zeros.
- **remainder:** Calculate the remainder of division of arguments.
- **round:** Round a number to a given number of digits.
- **subtract:** Subtract arguments.
- **sum:** Calculate the sum of arguments.
- **truncate:** Truncate a number to a given number of decimal places without rounding.

## [Object Functions](https://github.com/devnetic/utils/blob/master/docs/object.md)

- **clone:** Recursively clones an object.  An empty object is returned for uncloneable values such as error WeakMaps.
- **createObject:** Create an empty map that does not have properties.
- **fromEntries:** This function transforms a list of key-value pairs into an object.
- **getValue:** Get the value at given path of an object.
- **invert:** Invert keys and values of an object.
- **merge:** Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
- **omit:** Omit a subset of properties from an object
- **pick:** Pick a subset of properties of an object.
- **pluck:** Extract values of a property from an array of objects.
- **remove:** Remove keys from an object where the predicate return truthy.
- **removeNullish:** Remove all null and undefined properties from an object.
- **renameKeys:** Immutably rename object keys.
- **setValue:** Sets the value to the path of the object.
- **sortKeys:** Sort an object by its properties.

## [Random Functions](https://github.com/devnetic/utils/blob/master/docs/random.md)

- **generateString:** Generate a random string from given characters.
- **randomArrayInRange:** Generate an array of random integers in a given range.
- **randomBoolean:** Generate a random boolean.
- **randomFloat:** Generate a random floating point number in given range.
- **randomHexColor:** Generate a random hex color.
- **randomInteger:** Generate a random integer in given range.
- **randomIpAddress:** Generate a random IP address.
- **randomItem:** Get a random item from an array.
- **randomItems:** Get random items of an array.
- **randomProperty:** Pick a random property of an object.
- **randomString:** Generate a random string using Node crypto module.

## [String Functions](https://github.com/devnetic/utils/blob/master/docs/string.md)

- **areAnagram:** Check if two strings are anagram.
- **base64ToUint8Array:** Convert a base64 encoded string to an uint8 array.
- **baseUrl:** Get the base URL without any parameters.
- **byteLength:** Get the length of a string in bytes.
- **camelCase:** Convert a string to camel case.
- **capitalize:** Capitalize a string.
- **countWordOccurrences:** Count the occurrences of a character in a string.
- **countWords:** Count the number of words in a string.
- **decapitalize:** Decapitalize a string.
- **escapeHtml:** Escape HTML special characters.
- **fileExtension:** Get the file extension from a file name.
- **fileName:** Get the file name from a path.
- **hash:** Generate a hash of a string. For `XOF` hash functions such as `shake256`.
- **isPalindrome:** Check if a string is a palindrome.
- **isRepeatedSequence:** Check if a string consists of a repeated character sequence.
- **kebabCase:** Converts string to kebab case.
- **lcfirst:** Convert the first character of a string to lowercase.
- **mask:** Replace the first given number of characters of a string with another character.
- **normalizePath:** Normalize file path slashes.
- **pascalCase:** Convert a string to pascal case (upper camelcase).
- **plural:** Pluralize any word.
- **prependLineNumbers:** Prepend a line number to each line of a text document.
- **removeDuplicateLines:** Remove duplicate lines of a text document.
- **removeEmptyLines:** Remove empty lines of a text document.
- **removeSpaces:** Remove spaces from a string.
- **repeatString:** Repeat a string.
- **reverseLines:** Reverse the order of lines of a text.
- **reverseString:** Reverse a string.
- **romanToArabic:** Convert from Roman number to Arabic number.
- **singular:** Return the singular value of a word.
- **snakeCase:** Converts string to snake case.
- **sortCharacters:** Sort the characters of a string in the alphabetical order.
- **sortLines:** Sort lines of a text document in the alphabetical order.
- **stripAnsiCodes:** Strip ANSI codes from a string.
- **swapCase:** Swap case of characters in a string.
- **template:** Format a string using a template.
- **titleCase:** Transform a string into title case following English rules.
- **trim:** Trim some character.
- **truncateWords:** Truncate a string at full words.
- **ucwords:** Uppercase the first character of each word in a string.
- **uint8ArrayToBase64:** Convert an uint8 array to a base64 encoded string.
- **unescapeHtml:** Unescape HTML special characters.

## [Validator Functions](https://github.com/devnetic/utils/blob/master/docs/validator.md)

- **areEqual:** Check if all items in an array are equal.
- **contains:** Check if an array contains a value matching some criterias.
- **containsLowerCase:** Check if a string contains lower case characters.
- **containsUpperCase:** Check if a string contains upper case characters.
- **containsWhitespace:** Check if a string contains whitespace.
- **hasDuplicateValues:** Check if a flat array has duplicate values.
- **isAlpha:** Check if a string contains only letters.
- **isAlphanumeric:** Check if a string contains only letters and numbers.
- **isAscii:** Check if a string contains only ASCII characters.
- **isAsyncFunction:** Check if a value is an async function.
- **isBase32:** Check if a value is base32 encoded.
- **isBase58:** Check if a value is base58 encoded.
- **isBase64:** Check if a value is base64 encoded.
- **isBetween:** Check if a date is between two dates.
- **isBic:** Check if a value is a business identifier code.
- **isBoolean:** Checks if value is classified as a boolean primitive or object.
- **isCurrentYear:** Check if a date occurs in the current year.
- **isEmptyObject:** Check if an object is empty.
- **isEqual:** This function evaluate equality between two values.
- **isEven:** Check if a number is even.
- **isFalsy:** Validate if a value is Falsy.
- **isFloat:** This function check is a value is a valid float value.
- **isFunction:** Check if a value is a function.
- **isGeneratorFunction:** Check if a value is a generator function.
- **isHexadecimal:** Check if a string is a hexadecimal number.
- **isHexColor:** Check if a string is a hexadecimal color.
- **isInRange:** Check if a number is in a given range.
- **isInteger:** This function check is a value is a valid float value.
- **isJSON:** This function check is a value is a valid JSON value.
- **isLeapYear:** Check if a year is leap year.
- **isLowerCase:** Check if a string is lower case.
- **isMongoId:** Check if a string is a MongoDB ObjectId.
- **isNegative:** Check if a number is negative.
- **isNil:** Check if a value is nil.
- **isNotEmpty:** Check if an array is not empty.
- **isNumber:** This function checks if value is classified as a Number primitive or object.
- **isNumeric:** This function check is a string value is a valid numeric value.
- **isObject:** Check if a value is an object.
- **isOctal:** Check if a string is an octal number.
- **isOdd:** Check if a number is odd.
- **isPlainObject:** Check if a value is a plain object.
- **isPositive:** Check if a number is positive.
- **isPrime:** Check if a given integer is a prime number.
- **isPromise:** Check if an object is a Promise.
- **isRegExp:** Check if a value is a regular expression.
- **isString:** Check if a value is a string.
- **isSubsetOf:** Check if an array is subset of other array.
- **isToday:** Check if a date is today.
- **isTruthy:** Validate if a value is truethy.
- **isUpperCase:** Check if a string is upper case.
- **isValidDate:** Validate a Gregorian date.
- **isWeekday:** Check if a date is a weekday.
- **isWeekend:** Check if a date is a weekend.

## About

This project is developed by _Álvaro José Agámez Licha_. I love building products and sharing knowledge.

Be my friend on:

- [Twitter](https://twitter.com/aagamezl)
- [dev.to](https://dev.to/aagamezl)
- [Github](https://github.com/aagamezl)
