var express = express()

var app = express()

app.use(function(req,res){
            const contentData = {
                    message : "Hello from Node js",
                    data : [1,2,3,4,5]
            }
            res.json(contentData)
}).listen(3000)

var http = require('http')

http.createServer(function(req,res){
             res.writeHead(200,{'Content-type':'text/html'})
             res.write("Text done")
             res.end()
}).listen(3000)


var url = require('url')

http.createServer(function(req,res){
              res.writeHead(200,{'Content-type':'text/html'})
              var q = url.parse(req.url,true).query
              var text = q.month + " " + q.year
              res.write(text)
              req.end()
}).listen(3000)


var fs = require('fs')

fs.writeFile(function(err,data){
        http.createServer(function(req,res){
                     res.writeHead(200,{'Content-type':'text/html'})
                     res.write(data)
                     return res.end()
        }).listen(3000)
})