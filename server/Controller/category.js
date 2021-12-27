const Category = require("../Model/Category");

module.exports = {
  categories: async (req, res, next) => {
    try {
      const categories = await Category.find();

      return res.json({ success: true, categories });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  category: async (req, res, next) => {
    try {
      const { category } = req.body;
      const newCategory = await Category.findOne({ category });
      if (newCategory) return res.json({ message: "Category exists!" });
      const newCat = new Category({ category });
      await newCat.save();
      return res.json(newCat);
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
