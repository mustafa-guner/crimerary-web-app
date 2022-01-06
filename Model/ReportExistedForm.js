const mongoose = require("mongoose");

const reportExisted = mongoose.Schema({
  senderName: String,
  senderEmail: String,
  missingPerson: {
    type: mongoose.Schema.ObjectId,
    ref: "MissingPerson",
  },
  seenLocation: String,
  notes: String,
  //Sent date
  sendAt: {
    type: Date,
    default: Date.now(),
  },

  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ReportExisted", reportExisted);
