# String Functions

## areAnagram(value1: string, value2: string): boolean

Check if two strings are anagram.

```ts
utils.areAnagram('listen', 'silent')      // true
utils.areAnagram('they see', 'the eyes')  // true
utils.areAnagram('node', 'deno')          // true
```

---

## base64ToUint8Array(data: string): Uint8Array

Convert a base64 encoded string to an uint8 array.

```ts
utils.base64ToUint8('aGVsbG8=')  // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
```

---

## baseUrl(value: string): string

```ts
utils.baseUrl('https://example.com/path?query=string')                 // 'https://example.com/path')
utils.baseUrl('https://example.com/path?query=string#hash')            // 'https://example.com/path')
utils.baseUrl('https://example.com/path?query=string&query2=string2')  // 'https://example.com/path')
utils.baseUrl('https://example.com/path#hash')                         // 'https://example.com/path')
utils.baseUrl('https://example.org/abc/xyz?123')                       // 'https://example.org/abc/xyz'
```

---

## byteLength(value: string, encoding?: BufferEncoding): number

```ts
utils.byteLength('hello world')                    // 11
utils.byteLength('hello world', 'utf8')            // 11
utils.byteLength('hello world', 'utf16le')         // 22
utils.byteLength('hello world', 'latin1')          // 11
utils.byteLength('hello world', 'binary')          // 11
utils.byteLength('aGVsbG8gd29ybGQ=', 'base64')     // 11
utils.byteLength('68656c6c6f20776f726c64', 'hex')  // 11
utils.byteLength('🎉')                             // 4
```

---

## camelCase(value: string): string

Convert a string to camel case. Each word is separated by a single uppercase letter and the first word begins with a lowercase.

```ts
utils.camelCase('someValue')  // someValue
utils.camelCase('some value')  // someValue
utils.camelCase('some  value')  // someValue
utils.camelCase('SOME VALUE')  // someValue
```

---

## capitalize(value: string): string

Capitalize a string.

```ts
utils.capitalize('hello world') // 'Hello world'
utils.capitalize('')            // ''
```

---

## countWordOccurrences(value: string, word: string): number

Count the occurrences of a character in a string.

```ts
utils.countWordOccurrences('hello world', 'hello')             // 1
utils.countWordOccurrences('hello world hello', 'hello')       // 2
utils.countWordOccurrences('hello world helo world', 'hello')  // 1
utils.countWordOccurrences('a.b.c.d.e', '.')                   // 4
```

---

## countWords(value: string): number

Count the number of words in a string.

```ts
utils.countWords('hello world')      // 2
utils.countWords(' hello world ')    // 2
utils.countWords('welcome a board')  // 3
```

---

## decapitalize(value: string): string

```ts
utils.decapitalize('SomeValue')    // 'someValue'
utils.decapitalize('Hello world')  // 'hello world'
```

---

## escapeHtml = (value: string): string

Escape HTML special characters.

```ts
utils.escapeHtml('<script>alert("hello world")</script>')  // '&lt;script&gt;alert(&quot;hello world&quot;)&lt;/script&gt;'
```

---

## fileExtension(value: string): string 

Get the file extension from a file name.

```ts
utils.fileExtension('hello')            // ''
utils.fileExtension('.index')           // ''
utils.fileExtension('hello.')           // '.'
utils.fileExtension('hello.txt')        // 'txt'
utils.fileExtension('hello.txt.js')     // 'js'
utils.fileExtension('hello.txt.js.ts')  // 'ts'
```

---

## fileName(value: string): string

Get the file name from a path.

```ts
utils.fileName('hello')                               // 'hello'
utils.fileName('.index')                              // '.index'
utils.fileName('hello.')                              // 'hello.'
utils.fileName('hello.txt')                           // 'hello.txt'
utils.fileName('hello.txt.js')                        // 'hello.txt.js'
utils.fileName('http://domain.com/path/to/file.pdf')  // 'file.pdf'
```

---

## hash(value: string, algorithm: string = 'sha256', outputLength?: number): string

Generate a hash of a string. For `XOF` hash functions such as `shake256`, the `outputLength` option can be used to specify the desired output length in bytes.

```ts
utils.hash('hello world')
utils.hash('hello world', 'md5')
utils.hash('hello world', 'sha1')
utils.hash('hello world', 'sha256')
utils.hash('hello world', 'sha512')
utils.hash('hello world', 'shake128')
utils.hash('hello world', 'shake256')
utils.hash('hello world', 'shake256', 64)
```

---

## isPalindrome(value: string): boolean

Check if a string is a palindrome.

```ts
utils.isPalindrome('abc')    // false
utils.isPalindrome('abcba')  // true
```

---

## isRepeatedSequence = (value: string): boolean

Check if a string consists of a repeated character sequence.

```ts
utils.isRepeatedSequence('aa')      // true
utils.isRepeatedSequence('aaa')     // true
utils.isRepeatedSequence('ababab')  // true
utils.isRepeatedSequence('abc')     // false
```

---

## kebabCase(value: string): string

Converts string to kebab case. Kebab case is a programming variable naming convention where a developer replaces the spaces between words with a dash.

```ts
utils.kebabCase('someValue')  // some-value
utils.kebabCase('some value')  // some-value
utils.kebabCase('some  value')  // some-value
utils.kebabCase('SOME VALUE')  // some-value
```

---

## lcfirst(value: string): string 

Convert the first character of a string to lowercase; the rest of the value characters are not converted and are returned the same.

```ts
utils.lcfirst('someValue')  // someValue
utils.lcfirst('somevalue')  // somevalue
utils.lcfirst('SOME VALUE')  // sOME VALUE
utils.lcfirst('SOMEVALUE')  // sOMEVALUE
```

---

## mask(value: string, count: number, mask: string): string

Replace the first given number of characters of a string with another character.

```ts
utils.mask('1234567890', 3, '*')  // '***4567890'
utils.mask('1234567890', 7, '*')  // '*******890'
```

---

## normalizePath(value: string): string

Normalize file path slashes.

```ts
utils.normalizePath('/some/path/to/file.txt')      // '/some/path/to/file.txt'
utils.normalizePath('some/path/to/file.txt')       // 'some/path/to/file.txt'
utils.normalizePath('some\\path\\to\\file.txt')    // 'some/path/to/file.txt'
utils.normalizePath('some\\path\\to\\file.txt\\')  // 'some/path/to/file.txt'
```

---

## pascalCase(value: string): string

Convert a string to pascal case (upper camelcase). First letter of each word in a compound word is capitalized.

```ts
utils.pascalCase('someValue')  // SomeValue
utils.pascalCase('some value')  // SomeValue
utils.pascalCase('some  value')  // SomeValue
utils.pascalCase('SOME VALUE')  // SomeValue
```

---

## plural(value: string): string

Pluralize any word.

```ts
utils.plural('')  // Somevalue
utils.plural('') // Some Value
utils.plural('')  // Some_value
utils.plural('')  // Some Value
```

---

## prependLineNumbers(value: string, format: string = '{0}'): string

Prepend a line number to each line of a text document. The second parameter use the same format like the `template` function.

```ts
utils.prependLineNumbers('Hello\nWorld')          // '1 Hello\n2 World')
utils.prependLineNumbers('Hello\nWorld', '{0}.')  // '1. Hello\n2. World')
```

---

## removeDuplicateLines(value: string): string

Remove duplicate lines of a text document.

```ts
utils.removeDuplicateLines('Hello\nWorld\nHello\nWorld') // 'Hello\nWorld'
```

---

## removeEmptyLines(value: string): string

Remove empty lines of a text document.

```ts
utils.removeEmptyLines('Hello\n\nWorld')  // 'Hello\nWorld'
```

---

## removeSpaces(value: string, replace: string = ''): string

Remove spaces from a string.

```ts
utils.removeSpaces('Hello World')       // 'HelloWorld'
utils.removeSpaces('Hello World', '-')  // 'Hello-World'
```

---

## repeatString(value: string, count: number): string

Repeat a string.

```ts
utils.repeatString('a', 3)   // 'aaa'
utils.repeatString('a', 0)   // ''
utils.repeatString('a', -1)  // ''
```

---

## reverseLines(value: string): string

Reverse the order of lines of a text.

```ts
utils.reverseLines('Hello\nWorld')  // 'World\nHello'
```

---

## reverseString(value: string): string

Reverse a string.

```ts
utils.reverseString('Hello World')  // 'dlroW olleH'
```

---

## romanToArabic = (roman: string): number

Convert from Roman number to Arabic number.

```ts
utils.romanToArabic('I')          // 1
utils.romanToArabic('V')          // 5
utils.romanToArabic('VIII')       // 8
utils.romanToArabic('X')          // 10
utils.romanToArabic('DCCLXXXIX')  // 789
utils.romanToArabic('MCMXVIII')   // 1918
utils.romanToArabic('MMMCMXCIX')  // 3999

```

---

## singular(word: string): string

Return the singular value of a word.

```ts
utils.singular('apples')               // 'apple'
utils.singular('children')             // 'child'
utils.singular('moves'.toLowerCase())  // 'move'
utils.singular('teeth')   	           // 'tooth'
utils.singular('people')               // 'person'
utils.singular('audio')                // 'audio'
```

---

## snakeCase(value: string): string

Converts string to snake case. Snake case (stylized as snake_case) refers to the style of writing in which each space is replaced by an underscore (_) character, and the first letter of each word written in lowercase.

```ts
utils.snakeCase('someValue')  // some_value
utils.snakeCase('some value')  // some_value
utils.snakeCase('some  value')  // some_value
utils.snakeCase('SOME VALUE')  // some_value
```

---

## sortCharacters = (value: string, inverse: boolean = false): string

Sort the characters of a string in the alphabetical order.

```ts
utils.sortCharacters('Hello World')    // ' deHllloorW'
utils.sortCharacters('abcdefg', true)  // 'gfedcba'
```

---

## sortLines(value: string, inverse: boolean = false): string

Sort lines of a text document in the alphabetical order.

```ts
utils.sortLines(`Thaddeus Mullen
Kareem Marshall
Ferdinand Valentine
Hasad Lindsay
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Colton Sharp
Adrian Rosales
Theodore Rogers`)

// output
Adrian Rosales
Colton Sharp
Ferdinand Valentine
Hasad Lindsay
Kareem Marshall
Kasimir Fletcher
Knox Tyson
Mufutau Berg
Thaddeus Mullen
Theodore Rogers

utils.sortLines(`Thaddeus Mullen
Kareem Marshall
Ferdinand Valentine
Hasad Lindsay
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Colton Sharp
Adrian Rosales
Theodore Rogers`, true)

// output

Theodore Rogers
Thaddeus Mullen
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Kareem Marshall
Hasad Lindsay
Ferdinand Valentine
Colton Sharp
Adrian Rosales
```

## stripAnsiCodes(value: string): string

Strip ANSI codes from a string.

```ts
utils.stripAnsiCodes('\u001b[31mHello\u001b[0m')                          // 'Hello'
utils.stripAnsiCodes('\u001b[31mHello\u001b[0m\u001b[31mWorld\u001b[0m')  // 'HelloWorld'
utils.stripAnsiCodes('\u001B[4mcake\u001B[0m')                            //           'cake'
utils.stripAnsiCodes('\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m')                                    // 'foofoo'
```

---

## swapCase(value: string): string

Swap case of characters in a string.

```ts
utils.swapCase('Hello World')  // 'hELLO wORLD'
utils.swapCase('hELLO wORLD')  // 'Hello World'
```

---

## template<T>(value: string, ...args: T[]): string

Format a string using a template.

```ts
utils.template('hello world', 'world')                              // 'hello world'
utils.template('hello {0}')                                         // 'hello {0}'
utils.template('hello {0}', 'world')                                // 'hello world'
utils.template('hello {0} {1}', 'world', 'again')                   // 'hello world again'
utils.template('hello {0} {1} {2}', 'world', 'again', 'and again')  // 'hello world again and again'
```

---

## titleCase(value: string): string

Transform a string into title case following English rules

```ts
utils.titleCase('someValue')  // Somevalue
utils.titleCase('some value') // Some Value
utils.titleCase('some  value')  // Some_value
utils.titleCase('SOME VALUE')  // Some Value
```

---

## trim(value: string, chars: string = ' '): string

Trim some character.

```ts
utils.trim('/hello world//', '/')   //'hello world'
utils.trim('"hello world"', '"')    //'hello world'
utils.trim('   hello world ', ' ')  //'hello world'
utils.trim('   hello world', ' ')   //'hello world'
utils.trim('hello world   ', ' ')   //'hello world'
```

---

## truncateWords(value: string, count: number, append: string = '...'): string

Truncate a string at full words.

```ts
utils.truncateWords('hello world', 5)                // 'he...'
utils.truncateWords('hello world', 8)                // 'hello...'
utils.truncateWords('This is a long me', 20, '...')  // 'This is a long me...')
```

## ucwords(value: string, separators?: string): string

Uppercase the first character of each word in a string.

```ts
  utils.ucwords('apple cider')  // Apple Cider
  utils.ucwords('HELLO WORLD!')  // HELLO WORLD!
  utils.ucwords('HELLO WORLD!'.toLowerCase())  // HelloWorld!
  utils.ucwords('hello|world!')  // Hello|world!
  utils.ucwords('hello|world!'  // '|')  // Hello|World!
  utils.ucwords(`mike o'hara`)  // Mike O'hara
  utils.ucwords(`mike o'hara`, ` \t\r\n\f\v'`)  // MikeO'Hara
  utils.ucwords('')  // ''
```

---

## uint8ArrayToBase64(uint8Array: Uint8Array): string

Convert an uint8 array to a base64 encoded string.

```ts
const uint8Array = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f])

utils.uint8ArrayToBase64(uint8Array)  // 'SGVsbG8='
```

---

## unescapeHtml(value: string): string

Unescape HTML special characters.

```ts
utils.unescapeHtml('&lt;')                                                   // '<'
utils.unescapeHtml('&gt;')                                                   // '>'
utils.unescapeHtml('&amp;')                                                  // '&'
utils.unescapeHtml('&quot;')                                                 // '"'
utils.unescapeHtml('&#039;')                                                 // "'"
utils.unescapeHtml('&lt;script&gt;alert(&quot;hello&quot;)&lt;/script&gt;')  // '<script>alert("hello")</script>')
```

---
