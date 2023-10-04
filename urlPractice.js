var express = require('express')

var app = express()

app.use('/app/data',function(req,res){
         const contentData = {
                message : "Hello from Node js",
                data : [1,2,3,4,5,6]
         }
         res.json(contentData)
}).listen(3000)

var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write("Hello world")
        res.end()
}).listen(3000)

var url = require('url')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        var q = url.parse(req.url,true).query 
        var text = q.month + " " + q.year
        res.write(text)
}).listen(3000)

var fs = require('fs')

fs.writeFile("NewFile.txt",function(err,data){
       http.createServer(function(req,res){
             res.writeHead(200,{'Content-type':'text'})
             res.write(data)
             return res.end()
       }).listen(3000)
})