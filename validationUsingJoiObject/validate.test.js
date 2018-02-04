const streams = require('./validate');
const supertest = require('supertest');

describe('Making POST request to login and checking the response code/', () => {
  test('Sending the valid data to url and checking for the success response', (done) => {
    supertest(streams.listener)
      .post('/login/')
      .send({ isGuest: false, username: 'Shubham Mathur', accessToken: 'anythin124' })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
