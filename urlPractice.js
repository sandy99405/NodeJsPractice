// URL prcatice

var http = require('http')

var url = require('url')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-Type':'text/html'})
       res.write(url)
       res.end()
}).listen(3000)


