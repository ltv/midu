const actions = require('./actions');
const mutations = require('./mutations');
const midu = require('core/midu');

const service = {
  name: 'projects'
};

module.exports = midu({
  service,
  actions,
  mutations
});
