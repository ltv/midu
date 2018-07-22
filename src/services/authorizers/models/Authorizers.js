const mongoose = require('mongoose');

const AuthorizerSchema = mongoose.Schema({
  email: { type: String },
  passwordHash: { type: String }
});

module.exports = mongoose.model('Authorizers', AuthorizerSchema);
