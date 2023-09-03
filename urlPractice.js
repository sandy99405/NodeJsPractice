var http = require('http')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("Hello world")
     res.end()
}).listen(3000)

