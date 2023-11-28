var express = require('express')

var app = express()

app.use(function(req,res){
        const sandyData = {
              message : "Hello from Sandy",
              data : [1,9,9,9]
        }
        res.json(sandyData)
}).listen(3000)
