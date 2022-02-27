# String Functions

## camelCase(value: string): string

Convert a string to camel case. Each word is separated by a single uppercase letter and the first word begins with a lowercase.

```js
utils.camelCase('someValue')  // someValue
utils.camelCase('some value')  // someValue
utils.camelCase('some  value')  // someValue
utils.camelCase('SOME VALUE')  // someValue
```

---

## kebabCase(value: string): string

Converts string to kebab case. Kebab case is a programming variable naming convention where a developer replaces the spaces between words with a dash.

```js
utils.kebabCase('someValue')  // some-value
utils.kebabCase('some value')  // some-value
utils.kebabCase('some  value')  // some-value
utils.kebabCase('SOME VALUE')  // some-value
```

---

## lcfirst(value: string): string 

Convert the first character of a string to lowercase; the rest of the value characters are not converted and are returned the same.

```js
utils.lcfirst('someValue')  // someValue
utils.lcfirst('somevalue')  // somevalue
utils.lcfirst('SOME VALUE')  // sOME VALUE
utils.lcfirst('SOMEVALUE')  // sOMEVALUE
```

---

## pascalCase(value: string): string

Convert a string to pascal case (upper camelcase). First letter of each word in a compound word is capitalized

```js
utils.pascalCase('someValue')  // SomeValue
utils.pascalCase('some value')  // SomeValue
utils.pascalCase('some  value')  // SomeValue
utils.pascalCase('SOME VALUE')  // SomeValue
```

---

## plural(value: string): string

Pluralize any word.

```js
utils.plural('')  // Somevalue
utils.plural('') // Some Value
utils.plural('')  // Some_value
utils.plural('')  // Some Value
```

---

## snakeCase(value: string): string

Converts string to snake case. Snake case (stylized as snake_case) refers to the style of writing in which each space is replaced by an underscore (_) character, and the first letter of each word written in lowercase.

```js
utils.snakeCase('someValue')  // some_value
utils.snakeCase('some value')  // some_value
utils.snakeCase('some  value')  // some_value
utils.snakeCase('SOME VALUE')  // some_value
```

---

## titleCase(value: string): string

Transform a string into title case following English rules

```js
utils.titleCase('someValue')  // Somevalue
utils.titleCase('some value') // Some Value
utils.titleCase('some  value')  // Some_value
utils.titleCase('SOME VALUE')  // Some Value
```

---

## ucwords(value: string, separators?: string): string

Uppercase the first character of each word in a string.

```js
  utils.ucwords('apple cider')  // Apple Cider
  utils.ucwords('HELLO WORLD!')  // HELLO WORLD!
  utils.ucwords('HELLO WORLD!'.toLowerCase())  // HelloWorld!
  utils.ucwords('hello|world!')  // Hello|world!
  utils.ucwords('hello|world!'  // '|')  // Hello|World!
  utils.ucwords(`mike o'hara`)  // Mike O'hara
  utils.ucwords(`mike o'hara`, ` \t\r\n\f\v'`)  // MikeO'Hara
  utils.ucwords('')  // ''
```
