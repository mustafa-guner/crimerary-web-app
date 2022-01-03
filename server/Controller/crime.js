const Crime = require("../Model/Crime");
const Category = require("../Model/Category");

module.exports = {
  crimes: async (req, res, next) => {
    try {
      //const { page = 1, limit = 2 } = req.query;

      const crimePosts = await Crime.find({}).populate([
        "category",
        "criminals",
      ]);

      if (req.query.category) {
        return res.status(200).json({
          success: true,
          crimes: crimePosts.filter(
            (crime) => crime.category.category === req.query.category
          ),
        });
      }

      if (req.query.k) {
        console.log(req.query.k);
        console.log(
          await Crime.find({
            title: { $regex: req.query.k, $options: "i" },
          })
        );
        return res.status(200).json({
          success: true,
          crimes: await Crime.find({
            title: { $regex: req.query.k, $options: "i" },
          }),
        });
      }

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

      // let getSimilarCategories = await Crime.find({
      //   category: crime.category,
      // }).populate(["category", "criminals"]);

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
