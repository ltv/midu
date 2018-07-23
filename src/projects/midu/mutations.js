const { CREATE_PROJECT, UPDATE_PROJECT } = require('./constants');
const { Project } = require('projects/models');

const mutations = {
  [CREATE_PROJECT]: ctx => {
    const { params } = ctx;
    return Project.update({ name: params.name }, params, { upsert: true });
  },
  [UPDATE_PROJECT]: ctx => {
    const { params } = ctx;
    return Project.update({ name: params.name }, params, { upsert: true });
  }
};

module.exports = mutations;
