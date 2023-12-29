var express = require('express')

var app = express()

app.use("app/data",function(res,res){
              const contentData = {
                    message : "Hello fomr Node js",
                    data : [1,2,3,4,5]
              }
              res.json(contentData)
}).listen(3000)