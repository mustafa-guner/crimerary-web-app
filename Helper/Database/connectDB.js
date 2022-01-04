const mongoose = require("mongoose");

module.exports = {
  connectDB: async () => {
    try {
      const { DB_CONNECTION_URL } = process.env;
      await mongoose.connect(DB_CONNECTION_URL);
      console.log("Connected to database (MongoDB) succesfully.");
    } catch (error) {
      console.log(error);
    }
  },
};
