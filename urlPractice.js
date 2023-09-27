var express = require('express')

var app = express()

app.use('/app/data',function(req,res){
        const contentData = {
              message : "Hello from Node js",
              data : [1,2,3,5,4]
        }
        res.json(contentData)
}).listen(2000)