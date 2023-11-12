var express = require('express')

var app = express()

app.use("app/data",function(req,res){
        const contentData = {
                message : "Hello from Node js",
                data : [1,2,3,4,5]
        }
        res.json(contentData)
}).listen(300)

var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{"Content-type":'text/html'})
        res.write("Hello world")
        res.end()
}).listen(3000)