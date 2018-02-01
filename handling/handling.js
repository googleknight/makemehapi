const Hapi = require('hapi');
const Inert = require('inert');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port,
});
server.register(Inert, (err) => {
  if (err) throw err;
  server.route({
    path: '/',
    method: 'GET',
    handler: (request, response) => response.file('./handling/index.html'),
  });
});

// server.start(() => {
//   console.log('Server started');
// });
module.exports = { server, port };
