'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: '127.0.0.1'
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server starting at ${server.info.uri}`);
});
