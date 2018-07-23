const actions = require('./actions');
const mutations = require('./mutations');
const midu = require('core/midu');
const { connect, closeConnection } = require('core/mongoose');

const service = {
  name: 'tasks',
  started() {
    return connect();
  },
  stopped() {
    return closeConnection();
  }
};

module.exports = midu({
  service,
  actions,
  mutations
});
