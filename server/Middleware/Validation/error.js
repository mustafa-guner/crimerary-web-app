const { validationResult } = require("express-validator");

module.exports = {
  errorValidation: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({
        success: false,
        // errors: errors.array()[0].msg, //for latest error we get to display to screen
        errors: errors.array()[0].msg,
      });

    return next();
  },
};
