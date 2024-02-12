import http from 'http';
import url from 'url';
import { v4, validate } from 'uuid';

import { hobbiesChecker } from './helpers';
import { Storage } from './storage';

const storage = new Storage();
const PORT = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
  try {
    const pathSegments = url.parse(request.url!, true).pathname!.split('/').filter(Boolean) || [];
    if (pathSegments[0] !== 'api' || pathSegments[1] !== 'users') {
      response.end('404 Not Found');
    } else {
      switch (request.method) {
        case 'GET':
          if (!pathSegments[2]) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(storage.get(), null, 2));
          } else {
            if (!validate(pathSegments[2])) {
              response.statusCode = 400;
              response.end('Id not valid');
            } else {
              const user = storage.get().find(user => user.id === pathSegments[2]);
              if (user) {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(user, null, 2));
              } else {
                response.statusCode = 404;
                response.end('No such user');
              }
            }
          }
          break;
        case 'POST':
          let requestBody = '';
          request.on('data', chunk => requestBody += chunk);
          request.on('end', () => {
            try {
              const newUser = JSON.parse(requestBody);
              if (typeof newUser.name !== 'string' || typeof newUser.age !== 'number' || !hobbiesChecker(newUser.hobbies)) {
                response.statusCode = 400;
                response.end(`Request body doesn't contain required fields of mandatory types`);
              } else if (storage.get().find(user => user.id === newUser.id)) {
                response.statusCode = 400;
                response.end('User with such Id already exists');
              } else if (!validate(newUser.id)) {
                newUser.id = v4();
                storage.add(newUser);
                response.statusCode = 201;
                response.end('Mew User successfully added with uuid generated');
              } else {
                storage.add(newUser);
                response.statusCode = 201;
                response.end('Mew User successfully added');
              }
            } catch (error) {
              response.end(`Check request JSON-body`);
            }
          });
      }
    }
  } catch (error) {
    response.statusCode = 500;
    response.end('500 Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log('\x1b[34m%s\x1b[0m', `Your server is started at http://localhost:${PORT}/`);
});
