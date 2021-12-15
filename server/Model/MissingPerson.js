const mongoose = require("mongoose");

const missingPersonSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  lastSeenLocation: {
    type: String,
  },

  information: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },

  fromDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

module.exports = mongoose.model("MissingPerson", missingPersonSchema);
