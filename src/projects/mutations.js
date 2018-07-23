const { CREATE_PROJECT, UPDATE_PROJECT } = require('./constants');
const { Project } = require('./models');

const mutations = {
  [CREATE_PROJECT]: (ctx, service) => {
    return '[CREATE]';
  },
  [UPDATE_PROJECT]: (ctx, service) => {
    return '[UPDATE]';
  }
};

module.exports = mutations;
