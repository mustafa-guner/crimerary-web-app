const mongoose = require("mongoose");

const reportNewSchema = mongoose.Schema({
  senderName: String,
  senderEmail: String,
  missingPersonName: String,
  missingPersonLastName: String,
  missingPersonDob: Date,
  missingPersonMissingFromDate: Date,
  missingPersonLastLocation: String,
  missingPersonBio: String,
  missingPersonGender: String,
  title: String,
  photo: String,
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

module.exports = mongoose.model("ReportNew", reportNewSchema);
