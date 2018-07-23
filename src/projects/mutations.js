const { CREATE_PROJECT, UPDATE_PROJECT } = require('./constants');

const mutations = {
  [CREATE_PROJECT]: (params, ctx, service) => {
    return '[CREATE]' + JSON.stringify(params);
  },
  [UPDATE_PROJECT]: (params, ctx, service) => {
    return '[UPDATE]' + JSON.stringify(params);
  }
};

module.exports = mutations;
