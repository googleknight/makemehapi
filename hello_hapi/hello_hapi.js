const Hapi = require('hapi');

function helloHapi(port = process.argv[2] || 8080) {
  const server = new Hapi.Server({
    host: 'localhost',
    port: Number(port),
  });
  server.route({ path: '/', method: 'GET', handler: (request, h) => 'Hello hapi' });
  server.start();
}
// helloHapi();
module.exports = helloHapi;
