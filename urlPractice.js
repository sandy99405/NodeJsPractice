var http = require('http')
var url = require('url')


http.createServer(function (req,res){
       res.writeHead(200,{'Content-type':'text/html'});
       const q = url.parse(req.url,true).query
       var text = q.month + " " + q.year
       res.write(text);
       res.end();
}).listen(3000)
