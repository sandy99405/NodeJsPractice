var express = require('express')

var app = expres()

app.use("app/data",function(req,res){
                  const contentData = {
                         message : "Hello from Node js",
                         data : [1,2,3,4,6]
                  }
                  res.json(contentData)
}).listen(3000)