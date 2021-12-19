const expressJWT = require("express-jwt");
const Admin = require("../../Model/Admin");

module.exports = {
  checkAuthorization: expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
  }),

  adminAccess: async (req, res, next) => {
    try {
      const id = req.auth._id;
      const admin = await Admin.findById(id);
      if (!admin)
        return res.status(404).json({
          success: false,
          message: "Account is not found.",
        });

      return next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
