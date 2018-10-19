const expect = require('expect')
const utils = require('./utils')



it('should add two numbers',()=> {
  //code that tests add function
  //import util.js
  var res = utils.add(33,11) 
  expect(res).toBe(44).toBeA('number')
//   if(res != 44) { 
//       throw new Error(`expected 44,but got ${res}`)
//   }
})

it('should return square of a number',()=> {
    var res = utils.square(6)
    expect(res).toBe(36).toBeA('number')
})