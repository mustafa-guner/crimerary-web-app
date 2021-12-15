const { check } = require("express-validator");

module.exports = {
  registerValidation: [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username is required.")
      .isLowercase()
      .withMessage("Username should be all lowercase characters."),

    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 chars long."),
    check("email", "Email is required.")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Must be valid email address."),
  ],

  loginValidation: [
    check("username").not().isEmpty().withMessage("Username is required."),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required.")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 chars long"),
  ],
};
