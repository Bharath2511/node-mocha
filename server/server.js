const express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.send('Tests')
})

app.listen(3001,()=>{
    console.log(3001)
})