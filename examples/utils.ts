import * as utils from './../src'

// console.log(utils.camelCase('someValue'))
// console.log(utils.camelCase('some value'))
// console.log(utils.camelCase('some  value'))

const date = new Date('2020-04-24T18:12:02.432')

// console.log(utils.dateFormat(date, 'hh:mm:ss'))
// console.log(utils.dateFormat(date, 'HH:mm:ss'))
// console.log(utils.dateFormat(date, 'YYYY MMMM dd'))
// console.log(utils.dateFormat(date, 'YYYY MMMM dd u'))
console.log(utils.dateFormat(date, 'HH:mm:ss'))

// console.log(utils.matchAll('Lorem', /[aeiou]/g))
// console.log(utils.matchAll('Lorem', /^/g))

console.log(utils.msToTime(1587871603551))
console.log(utils.uuid())
