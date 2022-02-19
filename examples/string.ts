import * as utils from './../src'

// console.log(utils.plural('apple'))  // apples
// console.log(utils.plural('child')) // children
// console.log(utils.plural('move'))  // moves
// console.log(utils.plural('tooth'))  // teeth
// console.log(utils.plural('person'))  // people
// console.log(utils.plural('audio'))  // audio

console.log(utils.ucwords('apple cider'))  // Apple Cider
console.log(utils.ucwords('HELLO WORLD!'))  // HELLO WORLD!
console.log(utils.ucwords('HELLO WORLD!'.toLowerCase()))  // Apple Cider
console.log(utils.ucwords('hello|world!'))  // hello|world!
console.log(utils.ucwords('hello|world!', '|'))  // Hello|World!
console.log(utils.ucwords(`mike o'hara`))  // Mike O'hara
console.log(utils.ucwords(`mike o'hara`, ` \t\r\n\f\v'`))  // Mike O'Hara
