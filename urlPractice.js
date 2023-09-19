var express = require('express')

var app = express();

app.use('/app/data',function(req,res){
        const contentData = {
                message : "A message sent from Node",
                data : [1,2,3,4,5]
        }
        res.json(contentData)
}).listen(3000)