const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')


describe('App',()=>{

    var db = {
        saveUser:expect.createSpy()
    }
    app.__set__('db',db)

    it('should call the spy correctly',()=>{
        var spy = expect.createSpy()
        // spy()
        // //passes if spy is called failed if it wasn't
        // expect(spy).toHaveBeenCalled()
        spy('Bharath',22)
        //passes if spy is called failed if it wasn't
        expect(spy).toHaveBeenCalledWith('Bharath',22)
    })

    it('should call saveuser with user object',()=>{
        var email = 'bob@gmail.com'
        var password = '123qa'

        app.handleSignup(email,password)
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
})