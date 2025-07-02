const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // Convert email to lowercase
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] // Basic email regex validation
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);