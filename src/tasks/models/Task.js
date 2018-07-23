const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  deathLine: { type: Number }
});

module.exports = mongoose.model('Task', TaskSchema);
