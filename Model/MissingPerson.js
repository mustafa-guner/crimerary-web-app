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

  bio: {
    type: String,
    required: true,
  },

  photo: String,

  dob: {
    type: Date,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female"],
  },

  fromDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

module.exports = mongoose.model("MissingPerson", missingPersonSchema);
