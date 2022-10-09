const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){
  try {
    console.log(url.parse(req.url, true));
  } catch(e){
    console.log(e);
  }
  res.writeHead(200, {'content-Type': 'text/html'});
  res.write(`<h1>Hello world</h1>`);
  res.end();
});

server.listen(8080);