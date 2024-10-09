// Create Web Server
// Create a web server that listens on port 3000. When a user visits the home page, the server should respond with a welcome message in plain text.
// When a user visits /comments, the server should respond with a list of comments in JSON format.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to our website');
    res.end();
  } else if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});