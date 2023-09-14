var express = require('express')

var app = express()

app.get('/app/data',function(req,res){
      const contentData = {
           message : "This is a message from node js",
           data : [1,2,3,4,5]
      };
      res.json(contentData)
}).listen(2003)

var http = require('http')

http.createServer(function(req,res){
         res.writeHead(200,{'Content-type':'text/html'})
         res.write("This is the head");
         res.end()
}).listen(2003)

var url = require('url')

http.createServer(function(req,res){
      res.writeHead(200,{'Content-type':'text/html'})
      var q = url.parse(req.url,true).query
      var text = q.month +" " +q.year 
      res.write(text)
      res.end()
}).listen(2003)