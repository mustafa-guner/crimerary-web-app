const mongoose = require("mongoose");

const crimeSchema = mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  criminals: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Criminal",
    },
  ],

  photo: {
    type: String,
  },

  location: {
    type: String,
  },

  commitedAt: {
    type: Date,
    default: Date.now(),
  },

  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
});

module.exports = mongoose.model("Crime", crimeSchema);
