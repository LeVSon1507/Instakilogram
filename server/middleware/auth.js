const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getUserFromToken = (accessToken, secretKey) => {
  try {
    const decodedToken = jwt.verify(accessToken, secretKey);
    const userId = decodedToken.userId;
    return User.findById(userId);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, "secret_key", { expiresIn: "1h" });
};

module.exports = {
  getUserFromToken,
  generateAccessToken,
};
