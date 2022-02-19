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
