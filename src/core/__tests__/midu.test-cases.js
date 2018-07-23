const CREATE_PROJECT = 'CREATE_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';

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

const mutations = {
  [CREATE_PROJECT]: (params, ctx, service) => {
    return '[CREATE]' + JSON.stringify(params);
  },
  [UPDATE_PROJECT]: (params, ctx, service) => {
    return '[UPDATE]' + JSON.stringify(params);
  }
};

module.exports = {
  service,
  actions,
  mutations
};
