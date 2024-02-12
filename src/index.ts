import http from 'http';
import url from 'url';

const PORT = process.env.PORT || 4000;

const user = {
  id: 'userId1',
  name: 'User',
  age: 42,
  hobbies: ['eat', 'sleep', 'play', 'laugh'],
};

const server = http.createServer((request, response) => {
  try {
    if (request.url) {
      const urlObject = url.parse(request.url, true);
      switch (urlObject.path) {
        case '/user':
          response.writeHead(200, { 'Content-Type': 'application/json' });
          response.write(JSON.stringify(user, null, 2));
          break;
        case '/':
          response.writeHead(200, { 'Content-Type': 'application/json' });
          response.write('Enter Request');
          break;
        default:
          response.statusCode = 404;
          response.write('404 Not Found');
      }
      response.end();
    }
  } catch (error) {
    response.statusCode = 500;
    response.end('500 Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(
    '\x1b[34m%s\x1b[0m',
    `Your server is started at http://localhost:${PORT}/`
  );
});
