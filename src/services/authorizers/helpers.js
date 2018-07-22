const bcrypt = require('bcrypt-nodejs');
const { promisify } = require('core/helpers');

const genSalt = promisify(bcrypt.genSalt.bind(bcrypt));
const hash = promisify(bcrypt.hash.bind(bcrypt));
const compareHash = promisify(bcrypt.compare.bind(this));

const genHash = async password => {
  const salt = await genSalt(10);
  return hash(password, salt, null);
};

module.exports = {
  compareHash,
  genHash
};
