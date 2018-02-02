const helper = require('./helpers');

test('Concatenate two strings', () => {
  const context = {
    data: {
      root: {
        query: {
          name: 'Helping',
          suffix: '!',
        },
      },
    },
  };
  expect(helper(context)).toBe('Helping!');
});
