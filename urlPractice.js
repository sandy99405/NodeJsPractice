/* var http = require('http')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("Hello world")
     res.end()
}).listen(3000) */


/* var http  = require('http')

var url = require('url')

http.createServer(function(req,res){
      res.writeHead(200,{'Content-type':'text/html'})
      res.write(req.url)
      res.end()
}).listen(3000) */

/* 
var http = require('http')

var url = require('url')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'});
     var q = url.parse(req.url,true).query;
     var text = q.month() + " " + q.year();
     res.write(text)
     res.end()
}).listen(3000) */


/* var http = require('http')

var fs = require('fs')

http.createServer(function(req,res){
      fs.readFile("DemoFile.html",function(err,data){
           res.writeHead(200,{'Content-type':'text/html'})
           res.write(data)
           return res.end()
      })
}).listen(3001) */


// Creating files

// using appendFile
/* var fs = require('fs')

fs.appendFile('Newfile.txt','Hello Sandy',function(err){
     if(err) throw err;
     console.log('File saved!!')
}) */

// using Open method

/* var fs = require('fs')

fs.open('NewFile1.txt','w',function(err,file){
     if(err) throw err;
     console.log('File opened')
}) */


// using writeFile

/* var fs = require('fs')

fs.writeFile('NewFile2.txt','Hello Sandy',function(err){
     if(err) throw err
     console.log("Written to file")
}) */


// using append file to append data to an existing file
/* 
var fs = require('fs')

fs.appendFile('NewFile.txt','\n Added new sentence',function(err){
      if(err) throw err
      console.log('Appended to old file')
}) */


//using writeFile to replace the content
/* 
var fs = require('fs')

fs.writeFile('NewFile2.txt','Replaced it',function(err){
      if(err) throw err
      console.log('Replace the file')
}) */

/// Delete file

/* var fs = require('fs')

fs.unlink('NewFile1.txt',function(err){
     if(err) throw err
     console.log("Deleted file")
})


// Rename File

fs.rename("NewFile2.txt","NewFile1.txt",function(err){
     if(err) throw err
     console.log("Rename file!! ")
}) */

// Practice again
/* 
var http = require('http')


http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("hello")
     res.end()
}).listen(3000) */


// url practice
/* 
var http = require('http')

var url = require('url')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-type':'text/html'})
       var q =  url.parse(req.url,true).query
       var text = q.month + " "+ q.year
       res.write(text)
       res.end()
}).listen(3000) */

/* var http = require('http')

var fs = require('fs')

http.createServer(function(req,res){
     fs.readFile('DemoFile.html',function(err,data){
      res.writeHead(200,{'Content-type':'text/html'})
      res.write(data)
      return res.end()
     });
}).listen(3000) */


// Error

/* var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); */

// Practice today
/* 
var http = require('http')

http.createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     res.write("Hello Sandy")
     res.end()
}).listen(8080) */


/* var http = require('http')

var fs = require('fs')

http.createServer(function(req,res){
     fs.readFile("DemoFile.html",function(err,data){
          res.writeHead(200,{'Content-type':'text/html'})
          res.write("Hello Sandy"+data)
          return res.end()          
     })
}).listen(2000) */


// Practice on URL 

var http = require('http')

var url = require('url')

http.createServer(function(req,res){
       res.writeHead(200,{'Content-type':'text/html'})
       var q = url.parse(req.url,true).query
       var text =  q.year + " " + q.month
       res.end(text)
}).listen(2000)