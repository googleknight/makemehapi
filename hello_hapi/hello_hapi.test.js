const server = require('./hello_hapi');
const request = require('request');

describe('The hapi server started should return a message on get request', () => {
  beforeAll((done) => {
    server.start(() => {
      console.log('Server started');
      done();
    });
  });
  afterAll((done) => {
    server.stop(() => {
      done();
    });
  });
  it('Checking the string returned from a get request to / path to server', (done) => {
    request('http://localhost:8080', (error, response, body) => {
      expect(body).toBe('Hello hapi');
      done();
    });
  });
  it('Checking the response code of the response', (done) => {
    request('http://localhost:8080', (error, response, body) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
