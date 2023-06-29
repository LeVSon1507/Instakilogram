const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const regiterUser = async (req, res) => {
    const { instaName, userName, email, password, avatar } = req.body;
  
    try {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const user = new User({
        instaName,
        userName,
        email,
        password: passwordHash,
        avatar,
      });
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: "User does not exist." });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const accessToken = jwt.sign({ userId: user._id }, "secret_key", { expiresIn: "1h" });;
      req.session.userId = user._id;
      res.json({ accessToken,user });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  module.exports = {
    regiterUser,
    loginUser,
  };
  