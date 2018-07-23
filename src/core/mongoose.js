const mongoose = require('mongoose');
const joinUrl = require('url-join');
const Promise = require('bluebird');

const { MONGO_DB_URL, MONGO_DATABASE } = process.env;

let connection = null;
mongoose.Promise = Promise;
const log = console.log;

const connect = () => {
  const url = joinUrl(MONGO_DB_URL, MONGO_DATABASE);
  return connection || (connection = mongoose.connect(url));
};

const closeConnection = () =>
  connection &&
  connection
    .close()
    .then(() => log('Mongo connection closed.'))
    .catch(() => log('Fail to close mongo connection.'));

module.exports = {
  connect,
  closeConnection
};
