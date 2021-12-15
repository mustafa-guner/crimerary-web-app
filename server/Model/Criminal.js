const mongoose = require("mongoose");

const criminalSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photo: { type: String },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

module.exports = mongoose.model("Crime", criminalSchema);
