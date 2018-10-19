const utils = require('./utils')


it('should add two numbers',()=> {
  //code that tests add function
  //import util.js
  var res = utils.add(33,11)  
  if(res != 44) {
      throw new Error(`expected 44,but got ${res}`)
  }
})

it('should return square of a number',()=> {
    var res = utils.square(6)
    if(res != 36) {
        throw new Error(`expected 36,but got ${res}`)
    }
})