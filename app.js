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
    return reply('<h1>Aloha.</h1>\n<p>Easy <em>living</em> and <em>cool</em> breezes...</p>\n');
  }
});

// about route
server.route({
  method: 'GET',
  path: '/about',
  handler: function (request, reply) {
    return reply('<h1>We are Awesome!</h1>');
  }
});

// contact route
server.route({
  method: 'GET',
  path: '/contact',
  handler: function (request, reply) {
    return reply('<h1>Contact us on Twitter! @cloudhostinghawaii.com</h1> ');
  }
});

// start hapi server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
