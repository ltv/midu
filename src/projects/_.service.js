const actions = require('./midu/actions');
const mutations = require('./midu/mutations');
const midu = require('core/midu');
const { connect, closeConnection } = require('core/mongoose');

const service = {
  name: 'projects',
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
