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

  criminal: async (req, res, next) => {
    try {
      const { criminalID } = req.params;
      const criminal = await Criminal.findById(criminalID);
      console.log(criminal);
      return res.status(200).json({
        success: true,
        criminal: criminal,
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
