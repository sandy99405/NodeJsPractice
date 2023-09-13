var express = require('express')

var app = express();

app.get('/get/data',function(req,res){
        const reqData = {
              message : "New mesage",
              data : [1,2,3,4,5]
        };
        res.json(responseData)  
}).listen(2001)

