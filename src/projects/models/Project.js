const m = require('mongoose');

const ProjectSchema = m.Schema(
  {
    name: { type: String },
    description: { type: String },
    deathLine: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
  },
  { timestamps: true }
);

module.exports = m.model('Project', ProjectSchema);
