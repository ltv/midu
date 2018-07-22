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

// const password = 'Abcd1234';
// genHash(password).then(console.log);
// compareHash(password, '$2a$10$/lfxC07vWTS5dZqcVvKOxeT9bP0Jzj1oORo32XXCgRyt6r0iFPoZG').then(console.log);
