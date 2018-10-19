const expect = require('expect')
//rewire is used for swap out variables
const rewire = require('rewire')

var app = rewire('./app')
//rewire adds two methods to our app they are
//__set__ and __get__


describe('App',()=>{

    var db = {
        //creating a spy for db
        saveUser:expect.createSpy()
    }
    //1)thing we want to replace and name wit hwhich we want to replace
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
        //function we want to test
        app.handleSignup(email,password)
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
})