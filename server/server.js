const express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.status(404).send({
        error : "page not found",
        name : "todo app"
    })
})

app.listen(3001,()=>{
    console.log(3001)
})

module.exports.app = app