// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded array of comments, much like your server from the
// previous exercise.
//
// Again, refer to the resources linked to from the course notes if you
// need a refresher on how to do this.
//
// -----------------------------------------------------------------------------

var http = require('http');

var comments = require('./data/comments.json');

http.createServer(function(req, res) {
  if (req.url === '/comments.json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
}).listen(8080);