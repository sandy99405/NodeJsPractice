// URL prcatice
/* 
var http = require('http')

var url = require('url')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-Type':'text/html'})
       res.write(url)
       res.end()
}).listen(3000) */


var http = require('http')

var url = require('url')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-Type':'text/html'})
       var q = url.parse(req.url,true).query
       var text = "Month is : "+q.month + " and year is : " + q.year
       res.write(text)
       res.end()
}).listen(3000)