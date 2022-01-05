const MissingPeople = require("../Model/MissingPerson");

module.exports = {
  missingPeople: async (req, res, next) => {
    try {
      const missingPeople = await MissingPeople.find({});

      return res.status(200).json({
        success: true,
        missingPeople,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
