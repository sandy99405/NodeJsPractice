var express = require('express')

var app = expres()

app.use("DemoFile.html",function(req,res){
               const contentData = {
                     message : "Hello from Node js",
                     data : [1,2,3,4,5]
               }
                res.json(contentData)
}).listen(3000)