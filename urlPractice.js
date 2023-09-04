/* var http = require('http')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("Hello world")
     res.end()
}).listen(3000) */


/* var http  = require('http')

var url = require('url')

http.createServer(function(req,res){
      res.writeHead(200,{'Content-type':'text/html'})
      res.write(req.url)
      res.end()
}).listen(3000) */


var http = require('http')

var url = require('url')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'});
     var q = url.parse(req.url,true).query;
     var text = q.month() + " " + q.year();
     res.write(text)
     res.end()
}).listen(3000)