'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: '127.0.0.1'
});

// default route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

// name route via params
server.route({
  method: 'GET',
  path '/{name}',
  handler: function (request, reply) {

    reply('aloha, ' + encodeURLComponent(request.params.name) + '!');
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
