# Utility Library

![Node CI](https://github.com/devnetic/utils/workflows/Node%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/devnetic/utils/badge.svg?branch=master)](https://coveralls.io/github/devnetic/utils?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

This library try to have efficien functions for almost any need when you are writing a software in JavaScript or Node.js.

The library is written in TypeScript, so you have full type support when using it.

# Instalation

```shell
$ npm i -S @devnetic/utils
```

# Usage

```js
const utils = require('@devnetic/utils)

const date = new Date('2020-04-24T18:12:02.432')

utils.dateFormat(date, 'HH:mm:ss') // 18:12:02
utils.dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

# Documentation

1. [Array](https://github.com/devnetic/utils/docs/array.md)
2. [Date](https://github.com/devnetic/utils/docs/date.md)
3. [Language](https://github.com/devnetic/utils/docs/language.md)
4. [String](https://github.com/devnetic/utils/docs/string.md)
5. [Utils](https://github.com/devnetic/utils/docs/utils.md)

## About

This project is developed by _Álvaro José Agámez Licha_. I love building products and sharing knowledge.

Be my friend on:

- [Twitter](https://twitter.com/aagamezl)
- [dev.to](https://dev.to/aagamezl)
- [Github](https://github.com/aagamezl)
