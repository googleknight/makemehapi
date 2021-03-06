const Hapi = require('hapi');
const vision = require('vision');
const handlebars = require('handlebars');
const Path = require('path');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port,
});

server.register(vision, (err) => {
  if (err) throw err;
});
server.route({
  path: '/',
  method: 'GET',
  handler: { view: 'index.html' },
});
server.views({
  engines: {
    html: handlebars,
  },
  helpersPath: './helping/helpers',
  path: './helping/templates',
});
// server.start(() => {
//   console.log('Server started');
// });
module.exports = server;
