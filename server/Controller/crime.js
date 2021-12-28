const Crime = require("../Model/Crime");

module.exports = {
  crimes: async (req, res, next) => {
    try {
      const { page = 1, limit = 2 } = req.query;

      const crimePosts = await Crime.find({})
        // .limit(limit * 1)
        // .skip((page - 1) * limit)
        .populate(["category", "criminals"]);

      console.log(crimePosts.length);

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
      const { crimeID } = req.params;
      const crime = await Crime.findById(crimeID).populate([
        "category",
        "criminals",
      ]);
      return res.status(200).json({
        success: true,
        crime: crime,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
