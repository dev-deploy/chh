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
    reply('Aloha.');
  }
});

// catch-all route - need to test
server.route({
  method: 'GET',
  path '/{p*}',
  handler: function (request, reply) {

    return reply('The page was not found.').code(404);
  }
});

// start hapi server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
