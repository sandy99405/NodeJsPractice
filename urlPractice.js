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

/* 
var http = require('http')

var url = require('url')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'});
     var q = url.parse(req.url,true).query;
     var text = q.month() + " " + q.year();
     res.write(text)
     res.end()
}).listen(3000) */


var http = require('http')

var fs = require('fs')

http.createServer(function(req,res){
      fs.readFile("DemoFile.html",function(err,data){
           res.writeHead(200,{'Content-type':'text/html'})
           res.write(data)
           return res.end()
      })
}).listen(3001)