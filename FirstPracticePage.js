var http = require('http')

http.createServer(function (req,res){
        res.setHead(200,{'set-type':'test/type'})
        res.end('Hello World')
}).listen(8080)
