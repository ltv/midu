const m = require('mongoose');
const joinUrl = require('url-join');
const Promise = require('bluebird');

const { MONGO_DB_URL, MONGO_DATABASE } = process.env;

m.Promise = Promise;
const log = console.log;

const connect = () =>
  m.connect(
    joinUrl(MONGO_DB_URL, MONGO_DATABASE),
    { useNewUrlParser: true }
  );

const closeConnection = () =>
  m.connection
    .close()
    .then(() => log('[close connection] Success'))
    .catch(() => log('[close connection] Fail'));

module.exports = {
  connect,
  closeConnection
};
