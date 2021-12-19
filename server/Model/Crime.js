const mongoose = require("mongoose");

const crimeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  criminals: [
    {
      type: [mongoose.Schema.ObjectId],
      ref: "Criminal",
      required: true,
    },
  ],

  photo: {
    type: String,
    // required: true,
    default: "crime.png",
  },

  location: {
    type: String,
    required: true,
  },

  commitedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Crime", crimeSchema);
