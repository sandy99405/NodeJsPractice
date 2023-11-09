var exepress = require('express')

var app = exepress()

app.use(function(req,res){
        const contentData = {
                message : "Hello from Node Js",
                data : [1,2,3,4,5]
        }
        res.json(contentData)
}).listen(3000)

