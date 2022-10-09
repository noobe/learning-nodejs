const http = require('http');
const util = require('util')

const server = http.createServer(function(req, res){
  res.writeHead(200, {'content-Type': 'text/html'});
  res.write(`<h1>Hello world</h1>`);
  res.end();
});

server.listen(8080);