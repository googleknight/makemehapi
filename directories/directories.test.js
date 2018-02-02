const directories = require('./directories');
const request = require('request');
const fs = require('fs');

describe('The hapi server started should serves a file in directory', () => {
  beforeAll((done) => {
    directories.server.start(() => {
      console.log('Server started');
      done();
    });
  });
  afterAll((done) => {
    directories.server.stop(() => {
      done();
    });
  });
  it('Checking the contents of file returned from the server', (done) => {
    request(`http://localhost:${directories.port}/foo/bar/baz/file.html`, (error, response, body) => {
      const expectedData = fs.readFileSync('./directories/public/file.html').toString();
      expect(body).toBe(expectedData);
      done();
    });
  });
  it('Checking the response code from the server', (done) => {
    request(`http://localhost:${directories.port}/foo/bar/baz/file.html`, (error, response, body) => {
      const expectedData = fs.readFileSync('./directories/public/file.html').toString();
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
