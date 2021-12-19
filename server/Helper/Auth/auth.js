module.exports = {
  sendJWTokensToClient: (admin, res) => {
    const token = admin.generateJWT();
    console.log(token);
    return res.status(200).json({
      success: true,
      token: token,
    });
  },
};
