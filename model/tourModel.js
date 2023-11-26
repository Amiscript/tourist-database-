

const mongoose = require('mongoose');

// Define the Tour Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },

    phone: {
      type: Number,
      required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  


});

// Create the Tour model
const Tour = mongoose.model('Tour', tourSchema);

// Export the Tour model
module.exports = Tour;