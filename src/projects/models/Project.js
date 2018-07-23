const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  deathLine: { type: Number }
});

module.exports = mongoose.model('Project', ProjectSchema);
