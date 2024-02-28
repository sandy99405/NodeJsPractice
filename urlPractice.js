var express = require('express')

var app = require('express')

app.use("app/data",function(req,res){
                  const contentData  = {
                        const : "Message from Node js",
                        data : [1,2,3,4,5]
                  }
                  res.json(contentData)
}).listen(3000)


var http = require('http')

http.createServer(function(req,res){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write("Hello world")
            res.end()
}).listen(3000)


var url  = require('url')

http.createServer(function(req,res){
           res.writeHead(200,{'Content-type':'text/html'})
           var q = url.parse(req.url,true).query
           var text = q.month + " " + q.year
           res.write(text)
           res.end()
}).listen(3000)