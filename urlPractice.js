var http = require('http')

var url = require('url')

/* http.createServer(function(req,res){
       res.writeHead(200,{'Content-Type':'text/html'})
       res.write("Hello wrold")
       res.end()
}).listen(3000) */



http.createServer(function(req,res){
       res.writeHead(200,{'Content-type':'text/html'})
       res.write(req.url)
       res.end()
}).listen(3000)
