const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  email: { type: String },
  passwordHash: { type: String }
});

module.exports = mongoose.model('Post', PostSchema);
