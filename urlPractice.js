var express = require('express')

var app = express()

app.get('api/data',function(req,res){
        const contentData = {
              message : "Hai from urlPractice",
              data : [1,2,3,4,5,6]
        }
        res.json(contentData);
}).listen(3000)


var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write();
        res.end();
}).listen(3000)

var url = require('url')

http.createServer(function(req,res){
         res.wtiteHead(200,{'Content-type':'text/html'});
         var q = url.parse(req.url,true).query
         var text = q.month + " " + q.year
         res.write(text)
         res.end()
}).listen(3000)

