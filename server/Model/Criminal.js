const mongoose = require("mongoose");

const criminalSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
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
});

module.exports = mongoose.model("Criminal", criminalSchema);
