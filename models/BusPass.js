const mongoose = require('mongoose');

const busPassSchema = new mongoose.Schema({
  name: String,
  email: String,
  studentId: String,
  college: String,
  passType: String, // e.g., 'Monthly', 'Semester'
  validFrom: Date,
  validTo: Date,
  photoURL: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BusPass', busPassSchema);
