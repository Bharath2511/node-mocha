const express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.status(404).send({
        error : "page not found",
        name : "todo app"
    })
})

app.get('/users',(req,res)=>{
    res.status(200).send([
        {name : "bob",age : 5},
        {name:"kevin",age : 7}
    ]) 
})

app.listen(3001,()=>{
    console.log(3001)
})

module.exports.app = app