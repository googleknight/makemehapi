const streams = require('./validation');
const supertest = require('supertest');

describe('The hapi server started should sends a response on /chickens/', () => {
  test('Checking the response code"', (done) => {
    supertest(streams.listener)
      .get('/chickens/somebreed')
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

