var express = require('express')

var app = express()

app.use('app/data',function(req,res){
        const contentData = {
               message : "Message from node js",
               data : [1,2,4,5,6]
        }
        res.json(contentData)
}).listen(3000)