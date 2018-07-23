const { CREATE_PROJECT, UPDATE_PROJECT } = require('./constants');

const service = {
  name: 'TEST_MIDU'
};

const actions = {
  [CREATE_PROJECT]: {
    params: {
      name: 'string',
      description: 'string',
      deathLine: 'number'
    }
  },
  [UPDATE_PROJECT]: {
    params: {
      name: 'string',
      description: 'string',
      deathLine: 'number'
    }
  }
};

module.exports = actions;
