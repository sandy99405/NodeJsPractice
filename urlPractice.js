var express = require('expres')

var ap = express()

app.use(function(req,res){
      res.writeHead(200,{'Content-type':'text/html'})
      res.write("Hello world")
      res.end()
}).listen(3000)