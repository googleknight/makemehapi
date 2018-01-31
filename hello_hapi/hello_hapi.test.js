const helloHapi = require('./hello_hapi');
const axios = require('axios');

describe('The hapi server started should return a message on get request', () => {
  it('Checking the string returned from a get request to / path to server', () => {
    const port = 8080;
    helloHapi(port);
    axios.get('/')
      .then((response) => {
        expect(response).toBe('Hello hapi');
      });
  });
});
