const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Arson",
      "Assasination",
      "Blackmail",
      "Bribery",
      "Cybercrime",
      "Drunk Driving",
      "Fraud",
      "Homicide",
      "Murder",
      "Rape",
      "Shoplifting",
      "Theft",
      "Robbery",
      "Kidnapping",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
