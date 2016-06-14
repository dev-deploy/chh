'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

// set to localhost and port 8000
server.connection({
  port: 8000,
  host: '127.0.0.1'
});

// default route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply('Aloha, Friends.');
  }
});

// about route
server.route({
  method: 'GET',
  path: '/about',
  handler: function (request, reply) {
    return reply('We are Awesome!');
  }
});

// contact route
server.route({
  method: 'GET',
  path: '/contact',
  handler: function (request, reply) {
    return reply('Contact us on Twitter! @cloudhostinghawaii.com ');
  }
});

// start hapi server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
