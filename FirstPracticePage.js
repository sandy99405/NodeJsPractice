var http = require('http')

http.createServer(function (req,res){
        res.writeHead(200,{'set-type':'test/type'})
        res.end('Hello World')
}).listen(8080)


///Practce - 2


var http = require('http')



http.createServer(function (req, res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("Hello World");
}).listen(8080);



///Practice - 3

var http = require('http')


http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('Hello world');
}).listen(8080);