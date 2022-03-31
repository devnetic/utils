import test from 'ava'

import * as utils from './../src'

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
