const handling = require('./handling');
const request = require('request');
const fs = require('fs');

describe('The hapi server started should return a message with name on get request', () => {
  beforeAll((done) => {
    handling.server.start(() => {
      console.log('Server started');
      done();
    });
  });
  afterAll((done) => {
    handling.server.stop(() => {
      done();
    });
  });
  it('Checking the contents of file returned from the server', (done) => {
    request(`http://localhost:${handling.port}/`, (error, response, body) => {
      const expectedData = fs.readFileSync('./handling/index.html').toString();
      expect(body).toBe(expectedData);
      done();
    });
  });
});
