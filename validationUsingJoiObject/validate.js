const Hapi = require('hapi');
const Joi = require('joi');

const port = 8080;// Number(process.argv[2] || 8080);
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port,
});

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, reply) => reply('login successful'),
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      })
        .options({ allowUnknown: true })
        .without('password', 'accessToken'),
    },
  },
});
// server.start(() => {
//   console.log('Server started');
// });
module.exports = server;
