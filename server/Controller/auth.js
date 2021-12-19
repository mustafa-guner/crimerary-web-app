const { sendJWTokensToClient } = require("../Helper/Auth/auth");
const Admin = require("../Model/Admin");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password, username } = req.body;
      const admin = await Admin.findOne({ username: username }).select(
        "+password"
      );
      if (!admin)
        return res.status(404).json({
          success: false,
          message: "Account is not found. Please contact with the admin.",
        });

      if (!admin.comparePasswords(password)) {
        return res.status(404).json({
          success: false,
          message: "Incorrect password entered.",
        });
      }

      return sendJWTokensToClient(admin, res);
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  testAuth: async (req, res, next) => {
    try {
      const admin = await Admin.findById(req.auth._id);
      console.log(req.auth._id);
      return res.status(200).json(admin);
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  dashboard: (req, res, next) => {
    return res.json({
      user: req.user,
    });
  },
};
