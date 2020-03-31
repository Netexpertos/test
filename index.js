/*const http = require("http");

const colors = require("colors");

const handleServer = function(req, res){
    res.writeHead(200, {'content-type':'text/html'})
    res.write("<h1>Hola mundo!</h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(30000, function(){
    console.log("Server on port 3000".green);
});*/

/*const fs = require('fs');

fs.writeFile("./texto.txt", "Linea 1", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("archivo creado!");
    }
    
});console.log(substract(1,2));
console.log(multiple(1,2));
console.log(divide(1,2));*/
const colors = require("colors");
const express = require("express");

const server = express();

server.get("/", function(req, res){
    res.send("<h1>Hola mundo desde express y nodejs git desde  cero</h1>");
});
server.listen(3000, function(){
    console.log("Server express 3000".red);
});