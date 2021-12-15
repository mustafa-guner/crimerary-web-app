const { sendJWTokensToClient } = require("../Helper/Auth/auth");
const User = require("../Model/User");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password, username } = req.body;
      const user = await User.findOne({ username: username }).select(
        "+password"
      );
      if (!user)
        return res.status(404).json({
          success: false,
          message: "Account is not found. Please contact with the admin.",
        });

      if (!user.comparePasswords(password)) {
        return res.status(404).json({
          success: false,
          message: "Incorrect password entered.",
        });
      }

      return sendJWTokensToClient(user, res);
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
