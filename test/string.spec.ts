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
