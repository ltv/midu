const { service, actions, mutations } = require('./midu.test-cases');
const midu = require('../midu');

const serviceShape = midu({ service, actions, mutations });

console.log(serviceShape);

describe('Midu: create service\'s shape', () => {
  it('Should return service\'s shape', () => {
    expect(true).toBe(true);
  });
});
