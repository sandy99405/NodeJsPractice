var express = require('express')

var app = express()

app.use('app/data',function(req,res){
        const contentData = {
             message : "Hai from Node js",
             data : [1,2,3,4]
        }
        res.json(contentData)
}).listen(3000)

var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write()
        res.end()
}).listen(3000)