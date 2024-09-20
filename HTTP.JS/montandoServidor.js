var http = require('http');

http.createServer(function(req, res){
    res.end('HELLO WORD')
}).listen(8081);
console.log('O Servidor Rodando')