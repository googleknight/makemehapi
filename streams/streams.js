const Hapi = require('hapi');
const rot13 = require('rot13-transform');
const fs = require('fs');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port,
});

function crypter(request, reply) {
  const fileStream = fs.createReadStream('./streams/sample.txt');
  reply(fileStream.pipe(rot13()));
}
server.route({
  path: '/',
  method: 'GET',
  handler: crypter,
});
// server.start(() => {
//   console.log('Server started');
// });
module.exports = server;
