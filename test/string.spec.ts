import test from 'ava'

import * as utils from './../src'

test('should check if two string are anagram', t => {
  t.true(utils.areAnagram('listen', 'silent')) // true
  t.true(utils.areAnagram('they see', 'the eyes')) // true
  t.true(utils.areAnagram('node', 'deno')) // true
})

test('should convert a string from base64 to uint8 array', t => {
  t.deepEqual(utils.base64ToUint8Array('aGVsbG8='), Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]))
})

test('should get the base URL without any parameters', t => {
  t.is(utils.baseUrl('https://example.com/path?query=string'), 'https://example.com/path')
  t.is(utils.baseUrl('https://example.com/path?query=string#hash'), 'https://example.com/path')
  t.is(utils.baseUrl('https://example.com/path?query=string&query2=string2#hash'), 'https://example.com/path')
  t.is(utils.baseUrl('https://example.com/path#hash'), 'https://example.com/path')
  t.is(utils.baseUrl('https://example.org/abc/xyz?123'), 'https://example.org/abc/xyz')
})

test('should return the length of a string in bytes', t => {
  t.is(utils.byteLength('hello'), 5)
  t.is(utils.byteLength('hello world'), 11)
  t.is(utils.byteLength('hello world', 'utf8'), 11)
  t.is(utils.byteLength('hello world', 'utf16le'), 22)
  t.is(utils.byteLength('hello world', 'latin1'), 11)
  t.is(utils.byteLength('hello world', 'binary'), 11)
  t.is(utils.byteLength('aGVsbG8gd29ybGQ=', 'base64'), 11)
  t.is(utils.byteLength('68656c6c6f20776f726c64', 'hex'), 11)
  t.is(utils.byteLength('🎉'), 4)
})

test('should convert the value to came case', t => {
  const expected = 'someValue'

  t.is(utils.camelCase('someValue'), expected)
  t.is(utils.camelCase('some value'), expected)
  t.is(utils.camelCase('some  value'), expected)
  t.is(utils.camelCase('some_value'), expected)
  t.is(utils.camelCase('some__value'), expected)
  t.is(utils.camelCase('SomeValue'), expected)
  t.is(utils.camelCase('SOME VALUE'), expected)
  t.is(utils.camelCase(''), '')
})

test('should capitalize the first letter of the value', t => {
  const expected = 'SomeValue'

  t.is(utils.capitalize('hello world'), 'Hello world')
  t.is(utils.capitalize(''), '')
})

test('should count ocurrences of words in a string', t => {
  t.is(utils.countWordOccurrences('hello world', 'hello'), 1)
  t.is(utils.countWordOccurrences('hello world hello', 'hello'), 2)
  t.is(utils.countWordOccurrences('hello world helo world', 'hello'), 1)
  t.is(utils.countWordOccurrences('a.b.c.d.e', '.'), 4)
})

test('should count the number of words in a string', t => {
  t.is(utils.countWords('hello world'), 2)
  t.is(utils.countWords(' hello world '), 2)
  t.is(utils.countWords('welcome a board'), 3)
})

test('should decapitalize the first letter of the value', t => {
  t.is(utils.decapitalize('SomeValue'), 'someValue')
  t.is(utils.decapitalize('Hello world'), 'hello world')
})

test('should escape HTML special characters', t => {
  t.is(utils.escapeHtml('<script>alert("hello world")</script>'), '&lt;script&gt;alert(&quot;hello world&quot;)&lt;/script&gt;')
})

test('should return the file extension', t => {
  t.is(utils.fileExtension('hello'), '')
  t.is(utils.fileExtension('.index'), '')
  t.is(utils.fileExtension('hello.'), '.')
  t.is(utils.fileExtension('hello.txt'), 'txt')
  t.is(utils.fileExtension('hello.txt.js'), 'js')
  t.is(utils.fileExtension('hello.txt.js.ts'), 'ts')
  t.is(utils.fileExtension('hello.txt.js.ts.json'), 'json')
})

test('should return the file name', t => {
  t.is(utils.fileName('hello'), 'hello')
  t.is(utils.fileName('.index'), '.index')
  t.is(utils.fileName('hello.'), 'hello.')
  t.is(utils.fileName('hello.txt'), 'hello.txt')
  t.is(utils.fileName('hello.txt.js'), 'hello.txt.js')
  t.is(utils.fileName('http://domain.com/path/to/document.pdf'), 'document.pdf')
})

test('should create a hash from a string', t => {
  t.is(utils.hash('hello world'), 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9')
  t.is(utils.hash('hello world', 'md5'), '5eb63bbbe01eeed093cb22bb8f5acdc3')
  t.is(utils.hash('hello world', 'sha1'), '2aae6c35c94fcfb415dbe95f408b9ce91ee846ed')
  t.is(utils.hash('hello world', 'sha256'), 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9')
  t.is(utils.hash('hello world', 'sha512'), '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f')
  t.is(utils.hash('hello world', 'shake128'), '3a9159f071e4dd1c8c4f968607c30942')
  t.is(utils.hash('hello world', 'shake256'), '369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527')
  t.is(utils.hash('hello world', 'shake256', 64), '369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df27853a8735271f5cc2d9e889544357116')
})

test('should check if a string is a palindrome', t => {
  t.false(utils.isPalindrome('abc'))
  t.true(utils.isPalindrome('abcba'))
})

test('should check if a string consists of a repeated characters sequence', t => {
  t.true(utils.isRepeatedSequence('aa'))
  t.true(utils.isRepeatedSequence('aaa'))
  t.true(utils.isRepeatedSequence('ababab'))
  t.false(utils.isRepeatedSequence('abc'))
})

test('should convert the value to kebab case', t => {
  const expected = 'some-value'

  t.is(utils.kebabCase('someValue'), expected)
  t.is(utils.kebabCase('some value'), expected)
  t.is(utils.kebabCase('some  value'), expected)
  t.is(utils.kebabCase('some_value'), expected)
  t.is(utils.kebabCase('some__value'), expected)
  t.is(utils.kebabCase('SomeValue'), expected)
  t.is(utils.kebabCase('SOME VALUE'), expected)
  t.is(utils.kebabCase(''), '')
})

test('should convert the first letter lower case', t => {
  t.is(utils.lcfirst('HelloWorld'), 'helloWorld')
  t.is(utils.lcfirst('HELLO WORLD!'), 'hELLO WORLD!')
  t.is(utils.lcfirst('hello  world'), 'hello  world')
  t.is(utils.lcfirst('SOME__VALUE'), 'sOME__VALUE')
  t.is(utils.lcfirst(''), '')
})

test('should Replace the first given number of characters of a string with another character', t => {
  t.is(utils.mask('1234567890', 3, '*'), '***4567890')
  t.is(utils.mask('1234567890', 7, '*'), '*******890')
})

test('should normalize file path slashes', t => {
  t.is(utils.normalizePath('/some/path/to/file.txt'), '/some/path/to/file.txt')
  t.is(utils.normalizePath('some/path/to/file.txt'), 'some/path/to/file.txt')
  t.is(utils.normalizePath('some\\path\\to\\file.txt'), 'some/path/to/file.txt')
  t.is(utils.normalizePath('some\\path\\to\\file.txt\\'), 'some/path/to/file.txt/')
})

test('should convert the value to pascal case', t => {
  const expected = 'SomeValue'

  t.is(utils.pascalCase('someValue'), expected)
  t.is(utils.pascalCase('some value'), expected)
  t.is(utils.pascalCase('some  value'), expected)
  t.is(utils.pascalCase('some_value'), expected)
  t.is(utils.pascalCase('some__value'), expected)
  t.is(utils.pascalCase('SomeValue'), expected)
  t.is(utils.pascalCase('SOME VALUE'), expected)
  t.is(utils.pascalCase(''), '')
})

test('should convert the value to plural', t => {
  t.is(utils.plural('apple'), 'apples')
  t.is(utils.plural('child'), 'children')
  t.is(utils.plural('move'.toLowerCase()), 'moves')
  t.is(utils.plural('tooth'), 'teeth')
  t.is(utils.plural('person'), 'people')
  t.is(utils.plural('audio'), 'audio')
  t.is(utils.plural('apples'), 'apples')
})

test('should prepend line numbers to a text document', t => {
  t.is(utils.prependLineNumbers('Hello\nWorld'), '1 Hello\n2 World')
  t.is(utils.prependLineNumbers('Hello\nWorld', '{1}.'), '1. Hello\n2. World')
})

test('should remove duplicate lines from a text document', t => {
  t.is(utils.removeDuplicateLines('Hello\nWorld\nHello\nWorld'), 'Hello\nWorld')
})

test('should remove empty lines from a text document', t => {
  t.is(utils.removeEmptyLines('Hello\n\nWorld'), 'Hello\nWorld')
})

test('should remove spaces from a string', t => {
  t.is(utils.removeSpaces('Hello World'), 'HelloWorld')
  t.is(utils.removeSpaces('Hello World', '-'), 'Hello-World')
})

test('should repeat a string', t => {
  t.is(utils.repeatString('a', 3), 'aaa')
  t.is(utils.repeatString('a', 0), '')
  t.is(utils.repeatString('a', -1), '')
})

test('should reverse the order of lines of a text document', t => {
  t.is(utils.reverseLines('Hello\nWorld'), 'World\nHello')
})

test('should reverse a string', t => {
  t.is(utils.reverseString('Hello World'), 'dlroW olleH')
})

test('should convert the value from roman to arabic', t => {
  t.is(utils.romanToArabic('I'), 1)
  t.is(utils.romanToArabic('V'), 5)
  t.is(utils.romanToArabic('X'), 10)
  t.is(utils.romanToArabic('L'), 50)
  t.is(utils.romanToArabic('C'), 100)
  t.is(utils.romanToArabic('D'), 500)
  t.is(utils.romanToArabic('M'), 1000)
  t.is(utils.romanToArabic('II'), 2)
  t.is(utils.romanToArabic('III'), 3)
  t.is(utils.romanToArabic('IV'), 4)
  t.is(utils.romanToArabic('VIII'), 8)
  t.is(utils.romanToArabic('IX'), 9)
  t.is(utils.romanToArabic('XI'), 11)
  t.is(utils.romanToArabic('XIV'), 14)
  t.is(utils.romanToArabic('XV'), 15)
  t.is(utils.romanToArabic('XVI'), 16)
  t.is(utils.romanToArabic('XIX'), 19)
  t.is(utils.romanToArabic('XX'), 20)
  t.is(utils.romanToArabic('XXI'), 21)
  t.is(utils.romanToArabic('XXIV'), 24)
  t.is(utils.romanToArabic('XXXIX'), 39)
  t.is(utils.romanToArabic('MMXXI'), 2021)
  t.is(utils.romanToArabic('CLX'), 160)
  t.is(utils.romanToArabic('DCCLXXXIX'), 789)
  t.is(utils.romanToArabic('MCMXVIII'), 1918)
  t.is(utils.romanToArabic('MMMCMXCIX'), 3999)

})

test('should convert the value to singular', t => {
  t.is(utils.singular('apples'), 'apple')
  t.is(utils.singular('children'), 'child')
  t.is(utils.singular('moves'.toLowerCase()), 'move')
  t.is(utils.singular('teeth'), 'tooth')
  t.is(utils.singular('people'), 'person')
  t.is(utils.singular('audio'), 'audio')
})

test('should convert the value to snake case', t => {
  const expected = 'some_value'

  t.is(utils.snakeCase('someValue'), expected)
  t.is(utils.snakeCase('some value'), expected)
  t.is(utils.snakeCase('some  value'), expected)
  t.is(utils.snakeCase('some_value'), expected)
  t.is(utils.snakeCase('some__value'), expected)
  t.is(utils.snakeCase('SomeValue'), expected)
  t.is(utils.snakeCase('SOME VALUE'), expected)
  t.is(utils.snakeCase(''), '')
})

test('should sort characters in a string', t => {
  t.is(utils.sortCharacters('Hello World'), ' deHllloorW')
  t.is(utils.sortCharacters('abcdefg', true), 'gfedcba')
})

test('should sort lines of a text document in the alphabetical order', t => {
  const text = [
    'Thaddeus Mullen',
    'Kareem Marshall',
    'Ferdinand Valentine',
    'Hasad Lindsay',
    'Mufutau Berg',
    'Knox Tyson',
    'Kasimir Fletcher',
    'Colton Sharp',
    'Adrian Rosales',
    'Theodore Rogers'
  ]

  const expected = [
    'Adrian Rosales',
    'Colton Sharp',
    'Ferdinand Valentine',
    'Hasad Lindsay',
    'Kareem Marshall',
    'Kasimir Fletcher',
    'Knox Tyson',
    'Mufutau Berg',
    'Thaddeus Mullen',
    'Theodore Rogers'
  ]

  t.is(utils.sortLines(text.join('\n')), expected.join('\n'))
  t.is(utils.sortLines(text.join('\n'), true), expected.reverse().join('\n'))
})

test('should strip ANSI codes from a string', t => {
  t.is(utils.stripAnsiCodes('\u001b[31mHello\u001b[0m'), 'Hello')
  t.is(utils.stripAnsiCodes('\u001b[31mHello\u001b[0m\u001b[31mWorld\u001b[0m'), 'HelloWorld')
  t.is(utils.stripAnsiCodes('\u001B[4mcake\u001B[0m'), 'cake')
  t.is(utils.stripAnsiCodes('\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m'), 'foofoo')
})

test('should swap the case of a string', t => {
  t.is(utils.swapCase('Hello World'), 'hELLO wORLD')
  t.is(utils.swapCase('hELLO wORLD'), 'Hello World')
})

test('should format a string using a template', t => {
  t.is(utils.template('{1}', 'hello'), 'hello')
  t.is(utils.template('hello world', 'world'), 'hello world')
  t.is(utils.template('hello {1}'), 'hello {1}')
  t.is(utils.template('hello {1}', 'world'), 'hello world')
  t.is(utils.template('hello {1} {2}', 'world', 'again'), 'hello world again')
  t.is(utils.template('hello {1} {2} {3}', 'world', 'again', 'and again'), 'hello world again and again')
})

test('should convert the value to title case', t => {
  t.is(utils.titleCase('someValue'), 'Somevalue')
  t.is(utils.titleCase('some value'), 'Some Value')
  t.is(utils.titleCase('some  value'), 'Some Value')
  t.is(utils.titleCase('some_value'), 'Some_value')
  t.is(utils.titleCase('some__value'), 'Some__value')
  t.is(utils.titleCase('SomeValue'), 'Somevalue')
  t.is(utils.titleCase('SOME VALUE'), 'Some Value')
  t.is(utils.titleCase(''), '')
})

test('should trim some character', t => {
  t.is(utils.trim('hello world   '), 'hello world')
  t.is(utils.trim('/hello world//', '/'), 'hello world')
  t.is(utils.trim('"hello world"', '"'), 'hello world')
  t.is(utils.trim('   hello world ', ' '), 'hello world')
  t.is(utils.trim('   hello world', ' '), 'hello world')
  t.is(utils.trim('hello world   ', ' '), 'hello world')
})

test('should truncate a string at full words', t => {
  t.is(utils.truncateWords('hello world', 5), 'he...')
  t.is(utils.truncateWords('hello world', 8), 'hello...')
  t.is(utils.truncateWords('This is a long me', 20, '...'), 'This is a long me...')
})

test('should convert the value to ucwords case', t => {
  t.is(utils.ucwords('apple cider'), 'Apple Cider')
  t.is(utils.ucwords('HELLO WORLD!'), 'HELLO WORLD!')
  t.is(utils.ucwords('HELLO WORLD!'.toLowerCase()), 'Hello World!')
  t.is(utils.ucwords('hello|world!'), 'Hello|world!')
  t.is(utils.ucwords('hello|world!', '|'), 'Hello|World!')
  t.is(utils.ucwords(`mike o'hara`), `Mike O'hara`)
  t.is(utils.ucwords(`mike o'hara`, ` \t\r\n\f\v'`), `Mike O'Hara`)
  t.is(utils.ucwords(`mike o'hara`, ` \t\r\n\f\v\\s'`), `Mike O'Hara`)
  t.is(utils.ucwords(''), '')
})

test('should convert an uint8 array to a base64 encoded string', t => {
  const uint8Array = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f])
  const expected = 'SGVsbG8='

  t.is(utils.uint8ArrayToBase64(uint8Array), expected)
})

test('should unescape HTML special characters', t => {
  t.is(utils.unescapeHtml('&lt;'), '<')
  t.is(utils.unescapeHtml('&gt;'), '>')
  t.is(utils.unescapeHtml('&amp;'), '&')
  t.is(utils.unescapeHtml('&quot;'), '"')
  t.is(utils.unescapeHtml('&#039;'), "'")
  t.is(utils.unescapeHtml('&lt;script&gt;alert(&quot;hello world&quot;)&lt;/script&gt;'), '<script>alert("hello world")</script>')
})
