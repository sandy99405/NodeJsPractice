/* var http = require('http')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-type':'text/html'})
       var q = url.parse(req.url,true).queue()
       var text = q.month + " " + q.year
       res.write(text)
       res.end()
}).listen(3000) */


/* const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  const responseData = {
    message: 'Hello from Node.js!',
    data: [1, 2, 3, 4, 5],
  };
  res.json(responseData);
});

app.listen(3001, () => {
  console.log('Node.js server is running on port 3001');
}); */

const express = require('express')

const app = express()

app.get('/app/data',function(req,res){
       const responseData = {
              message: 'hello from Node.js!',
              data:[1,2,3,4,5],
       };
       res.json(responseData);
}).listen(3001)