const Hapi = require('hapi');
const Joi = require('joi');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port,
});

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: (request, reply) => reply(`${request.params.breed}`),
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
      },
    },
  },
});
// server.start(() => {
//   console.log('Server started');
// });
module.exports = server;
