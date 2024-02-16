var express = require('express')

var app = express()

app.use("app/data",function(req,res){
                    const contentData = {
                                 message : "Hello from Node js",
                                 data : [1,2,3,4,5]
                    }
                     res.json(contentData)
}).listen(3000)


var http = require('http')

http.createServer(function(req,res){
          res.writeHead(200,{'Content-type':'tex/html'})
          res.write("Hello world")
          res.end()
}).listen(3000)


var url = require('url')

http.createServer(function(req,res){
              res.writeHead(200,{'Content-type':'text/html'})
              var text = url.parse(req.url,true).query
              var q = text.month + "" + text.year
              res.write(q)
              res.end()
}).listen(3000)


var fs = require('fs')

fs.writeFile("DemoFile.html",function(err,data){
            http.createServer(function(req,res){
                      res.writeHead(200,{'Content-type':'text.html'})
                      res.write(data)
                      return res.end()
            }).listen(3000)
})
