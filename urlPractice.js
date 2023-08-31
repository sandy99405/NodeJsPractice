/* var http = require('http')
var url = require('url')


http.createServer(function (req,res){
       res.writeHead(200,{'Content-type':'text/html'});
       const q = url.parse(req.url,true).query
       var text = q.month + " " + q.year
       res.write(text);
       res.end();
}).listen(3000)







var http = require('http')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('Hello world')
}).listen(3000)



//// Module.js

var myDateTime = function(){
       return Date();
}


/// Main.js

var http = require('https')

var dt = require('./Module')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("Today's date is " + dt.myDateTime())
     res.end()
}).listen(3000)

 */

//// Third code practice
var http = require('http')

var url = require('url')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     const q = url.parse(req.url,true).query
     var text = q.month + " " + q.year
     res.write(text)
     res.end()
}).listen(3000)








