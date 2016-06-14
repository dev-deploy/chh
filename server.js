'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: '127.0.0.1'
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
