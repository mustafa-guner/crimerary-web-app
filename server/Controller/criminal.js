const Criminal = require("../Model/Criminal");

module.exports = {
  criminals: async (req, res, next) => {
    try {
      const criminals = await Criminal.find({});

      return res.status(200).json({
        success: true,
        criminals,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  //   crime: async (req, res, next) => {
  //     try {
  //     } catch (error) {
  //       return res.status(500).json({
  //         success: false,
  //         error: error.message,
  //       });
  //     }
  //   },
};
