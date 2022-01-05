const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  //Form sender person details
  senderFirstName: String,
  senderLastName: String,
  senderEmail: String,
  senderNotes: String,

  //Sent date
  sendAt: {
    type: Date,
    default: Date.now(),
  },

  //Form topic
  topic: {
    type: Number,
    enum: [1, 2],
    /*@desc
        1- ->Report new missing people
        2- ->Report existed missing people
    */
  },

  //Victim Informations (New Victim)
  victimFirstName: String,
  victimLastName: String,
  victimDob: Date,
  victimBio: String,
  victimLastseen: String,
  victimMissingFromDate: Date,

  //Reported Existed Person
  reportedVictim: {
    type: mongoose.Schema.ObjectId,
    ref: "MissingPerson",
  },

  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Form", formSchema);
