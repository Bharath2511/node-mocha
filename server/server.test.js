const request = require('supertest')
const expect = require('expect')

describe('Utils',()=>{
    
})

var app = require('./server.js').app

it('should return hello world',(done)=>{
    request(app)
     .get('/')
     .expect(404)
     .expect((res)=>{
       expect(res.body).toInclude({
           error :"page not found"
       })
     })
     .end(done)
})

it('should return status code of 200',(done)=>{
    //requesting express application
    request(app)
     .get('/users')
     .expect(200)
     //res comes from supertest we can pass in headers,body
     .expect((res)=>{
         expect(res.body).toInclude({
             name : 'bob',age : 5
         })
     })
     .end(done)
})