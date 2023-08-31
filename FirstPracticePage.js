var http = require('http')

http.createServer(function (req,res){
        res.writeHead(200,{'set-type':'test/type'})
        res.end('Hello World')
}).listen(8080)


///Practce - 2


var http = require('http')



http.createServer(function (req, res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("Hello World");
}).listen(8080);



///Practice - 3

var http = require('https')


http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('Hello world')
}).listen(8080)



/// Practice - 4

var http = require('http')

http.createServer(function(req,res){

         res.writeHead(200,{'Content-type':'text/html'});
         res.end('Hello world')
}).listen(3000)


/// Points to be noted :

///  Node js is an open source, Java Script runtime 
///  which is asynchronous and singlethreaded platform
///  now , in a PHP : 
///  1) It will take the request
///  2) It will send the request to the computer
///  3) It will wait for the computer to read the file
///  4) recieves the response 
///  5) sends back to the UI
///  6) Gets ready to take another requesst


///  But Node JS doesn't wait for the computer to respond. 
///  While the computer is reading the file, it will be ready for the next request
///  That is the advantage of Node JS.


 /// file --------

/// module.js

exports.myDate = function(){
        return Date();
};


///  mainModule.js

var http = require('http')
var dt = require('./module')

http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('This is the time and date : '+ dt.myDate())
        res.end();
}).listen(3000);


/// Practice - 2

//// file module.js

exports.myTime = function(){
        return Date();
}


var http = require('http')
var dt = require('./module')

http.createServer(function (req,res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("This is today's date"+dt.myTime)
        res.end("Hello world")
}).listen(3000)





















