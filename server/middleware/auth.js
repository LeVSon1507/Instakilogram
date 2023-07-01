<<<<<<< HEAD
import jwt from 'jsonwebtoken';
=======
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
>>>>>>> origin/update-source-v2

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header('Authorization');

    if (!token) {
<<<<<<< HEAD
      return res.status(403).send('Access Denied');
=======
      return res.status(401).send("Invalid access token");
>>>>>>> origin/update-source-v2
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();
    }
    
    const decoded = jwt.verify(token, "secret_key");
    if (!decoded) return res.status(400).json({ msg: 'Invalid Authentication.' });

    const user = await User.findOne({ _id: decoded.id });
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
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
module.exports = {
  verifyToken,
  getUserFromToken,
};
