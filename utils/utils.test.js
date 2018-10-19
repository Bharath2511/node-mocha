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

it('should add two numbers',(/*to tell async*/done )=> {
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number')
        //after assertions
        done()
    })
})


it('should return square of a number',()=> {
    var res = utils.square(6)
    expect(res).toBe(36).toBeA('number')
})

it('should expect err',() => {
  //expect(12).toNotBe(11)
 // expect({name : "Bharath"}).toEqual({name :"Bharath"})//toNotEqual
 //expect([2,3,4]).toInclude(4)//toExclude
expect({
    name : "Bharath",
    age : 22,
    place : "Hyderabad"
}).toInclude({
    age:22
})
})

it('should set firstName and lastName',()=>{
    var user = {location:"Hyderabad",age:22}
    var res = utils.setName(user,"Bharath Chandra")

    expect(res).toInclude({
        firstName : "Bharath",
        lastName : "Chandra"
    })
})