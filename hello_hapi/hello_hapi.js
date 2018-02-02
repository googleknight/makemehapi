const Hapi = require('hapi');

const port = 8080;// process.argv[2] || 8080;
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(port),
});
server.route({ path: '/', method: 'GET', handler: (request, reply) => reply('Hello hapi') });
// server.start(() => {
//   console.log('Server started');
// });
module.exports = server;
