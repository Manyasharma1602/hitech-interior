const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// @route   POST api/contact
// @desc    Submit a new contact message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ msg: 'Contact message sent successfully!', contact: newContact });
  } catch (err) {
    console.error(err.message);
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      let errors = {};
      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });
      return res.status(400).json({ msg: 'Validation error', errors: errors });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;