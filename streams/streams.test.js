const streams = require('./streams');
const supertest = require('supertest');

describe('The hapi server started should stream a file in response', () => {
  test('Checking the response returned from the server by matching with expected"', (done) => {
    const expected = 'Gur Chefhvg bs Uncv-arff';
    supertest(streams.listener)
      .get('/')
      .then((response) => {
        expect(response.text).toBe(expected);
        done();
      });
  });
});

