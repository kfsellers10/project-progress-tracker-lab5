const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  status: { type: String, required: true },
  teamMember: { type: String, required: true },
  progressNote: { type: String, default: '' }
});

// Create and export the model
module.exports = mongoose.model(
  'Project',
  projectSchema,
  'Projects'
);