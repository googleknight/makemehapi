const Hapi = require('hapi');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port,
});
server.route({ path: '/{name}', method: 'GET', handler: (request, reply) => reply(`Hello ${request.params.name}`) });
server.start(() => {
  console.log('Server started');
});
module.exports = { server, port };
