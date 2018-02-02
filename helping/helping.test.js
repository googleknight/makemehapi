const helping = require('./helping');
const supertest = require('supertest');

describe('The hapi server started should responds with a file and a specified query name inside it', () => {
  test('Checking the response returned from the server contains "Hello Helping!"', (done) => {
    supertest(helping.listener)
      .get('/?name=Helping&suffix=!')
      .then((response) => {
        expect(response.text).toContain('Hello Helping!');
        done();
      });
  });
  test('Checking the response code"', (done) => {
    supertest(helping.listener)
      .get('/?name=Helping&suffix=!')
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

