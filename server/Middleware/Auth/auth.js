const expressJWT = require("express-jwt");
const User = require("../../Model/User");

module.exports = {
  checkAuthorization: expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
  }),

  adminAccess: async (req, res, next) => {
    try {
      const id = req.auth._id;
      const user = await User.findById(id);
      if (!user)
        return res.status(404).json({
          success: false,
          message: "Account is not found.",
        });

      if (user.role !== "admin") {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!",
        });
      }
      return next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
