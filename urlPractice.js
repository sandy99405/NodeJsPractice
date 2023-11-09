var exepress = require('express')

var app = exepress()

app.use(function(req,res){
        const contentData = {
                message : "Hello from Node Js",
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

var url = require('url')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        var q = url.parse(req.url,true).query
        var text  = q.month + " " + q.year 
        res.write(text)
        res.write()
}).listen(3000)