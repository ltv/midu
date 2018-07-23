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
  [CREATE_PROJECT]: (ctx, service) => {
    return { ctx, service };
  },
  [UPDATE_PROJECT]: (ctx, service) => {
    return { ctx, service };
  }
};

module.exports = {
  service,
  actions,
  mutations
};
