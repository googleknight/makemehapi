const routes = require('./routes');
const request = require('request');

describe('The hapi server started should return a message with name on get request', () => {
  beforeAll((done) => {
    routes.server.start(() => {
      console.log('Server started');
      done();
    });
  });
  afterAll((done) => {
    routes.server.stop(() => {
      done();
    });
  });
  it('Checking the string returned from a get request to /{name} path to server', (done) => {
    request(`http://localhost:${routes.port}/Shubham`, (error, response, body) => {
      expect(body).toBe('Hello Shubham');
      done();
    });
  });
  it('Checking the string length returned from a get request to /{name} path to server', (done) => {
    request(`http://localhost:${routes.port}/Shubham`, (error, response, body) => {
      expect(body.length).toBe(13);
      done();
    });
  });
  it('Checking the response code of the response', (done) => {
    request(`http://localhost:${routes.port}/Shubhams`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
