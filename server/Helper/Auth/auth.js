const res = require("express/lib/response");
const User = require("../../Model/User");

module.exports = {
  sendJWTokensToClient: (user, res) => {
    const token = user.generateJWT();
    console.log(token);
    return res.status(200).json({
      success: true,
      token: token,
    });
  },
};
