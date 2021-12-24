const { check } = require("express-validator");
const Admin = require("../../Model/Admin");
module.exports = {
  registerValidation: [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username is required.")
      .isLowercase()
      .withMessage("Username should be all lowercase characters.")
      .custom(async (val) => {
        try {
          const admin = await Admin.findOne({ username: val });
          if (admin) return Promise.reject("Username should be unique");
        } catch (error) {
          console.log(error);
        }
      }),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 chars long."),
    check("email", "Email is required.")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Must be valid email address.")
      .custom(async (val) => {
        try {
          const admin = await Admin.findOne({ email: val });
          if (admin) return Promise.reject("Account does already exist");
        } catch (error) {
          console.log(error);
        }
      }),
  ],

  loginValidation: [
    check("username").not().isEmpty().withMessage("Username is required."),
    check("password").not().isEmpty().withMessage("Password is required."),
  ],

  crimeValidation: [
    check("title").not().isEmpty().withMessage("Title of crime is required."),
    check("description")
      .not()
      .isEmpty()
      .withMessage("Description of crime is required."),
    check("criminals")
      .not()
      .isEmpty()
      .withMessage("Criminal(s) of crime is required."),
    check("location")
      .not()
      .isEmpty()
      .withMessage("Location of crime is required."),
    check("commitedAt")
      .not()
      .isEmpty()
      .withMessage("Time of crime is required."),
  ],

  criminalValidation: [
    check("firstName").not().isEmpty().withMessage("First name is required."),
    check("lastName").not().isEmpty().withMessage("Last name is required."),
    check("gender").not().isEmpty().withMessage("Gender is required."),
  ],
};
