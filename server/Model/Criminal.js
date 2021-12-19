const mongoose = require("mongoose");

const criminalSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  photo: { type: String },
  dob: {
    type: Date,
  },
  caught: {
    //Is Criminal got away? (wanted) or already caught
    type: Boolean,
    default: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("Criminal", criminalSchema);
