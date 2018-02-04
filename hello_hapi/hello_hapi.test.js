const server = require('./hello_hapi');

describe('The hapi server started should return a message on get request', () => {
  it('Checking the string returned from a get request to / path to server', (done) => {
    const request = {
      method: 'GET',
      url: '/',
    };
    server.inject(request, (response) => {
      expect(response.result).toBe('Hello hapi');
      done();
    });
  });
  it('Checking the response code of the response', (done) => {
    const request = {
      method: 'GET',
      url: '/',
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
