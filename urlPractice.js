var express = require('express')

var app = express()

app.use('/app/data',function(req,res){
      const contentData ={
            message : "Helloo from Node js",
            data : [1,2,3,4,5]
      }
      res.json(contentData)
}).listen(3000)