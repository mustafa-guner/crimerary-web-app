const limiter = require("express-rate-limit");

module.exports = {
  loginLimiter: limiter({
    windowMs: 15 * 60 * 1000, //15mins
    max: 10,
    handler: function (req, res, next) {
      return res.status(429).json({
        //429 -> Too many requests.
        message:
          "Too many wrong credentials entered from this IP, please try again after an hour.",
      });
    },
  }),
};
