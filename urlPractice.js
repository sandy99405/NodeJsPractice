var express = require('express')

var app = express()

app.use(function(req,res){
          const contentData = {
                 message : "Hello from Node js",
                 data : [1,2,3,4,5,6]
          }
          res.json(contentData)
}).listen(3000)


var http = require('http')

http.createServer(function(req,res){
         res.writeHead(200,{'COntent-type':'text/html'})
         res.write("Hello world")
         res.end()
}).listen(3000)

var url = require('url')

http.createServer(function(req,res){
            res.writeHead(200,{'Content-tyep':'text/html'})
            var q = q.parse(req.url,true).query
            var text = q.month + " " + q.year 
            res.write(text)
            res.end()
}).listen(3000)