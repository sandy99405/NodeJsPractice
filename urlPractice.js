var express = require('express')

var app = express()

app.use(function(req,res){
        const sandyData = {
              message : "Hello from Sandy",
              data : [1,9,9,9]
        }
        res.json(sandyData)
}).listen(3000)/


var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("Hello world")
        res.end()
}).listen(3000)


var url = require('url')

http.createSrever(function(req,res){
        res.writeHead(200,{'content-type':'text/html'})
        var q = url.parse(req.url,true).query
        var text = q.month + " " + q.year
        res.write(text)
        res.end()
}).listen(3000)
