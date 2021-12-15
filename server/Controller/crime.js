const Crime = require("../Model/Crime");

module.exports = {
  crimes: async (req, res, next) => {
    try {
      const crimePosts = await Crime.find({});

      return res.status(200).json({
        success: true,
        crimes: crimePosts,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  crime: async (req, res, next) => {
    try {
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
