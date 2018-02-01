const views = require('./views');
const request = require('request');

describe('The hapi server started should responds with a file and a specified query name inside it', () => {
  beforeAll((done) => {
    views.server.start(() => {
      console.log('Server started');
      done();
    });
  });
  afterAll((done) => {
    views.server.stop(() => {
      done();
    });
  });
  it('Checking the response returned from the server contains "Hello Handling"', (done) => {
    request(`http://localhost:${views.port}/?name=Handling`, (error, response, body) => {
      expect(body).toContain('Hello Handling');
      done();
    });
  });
});
