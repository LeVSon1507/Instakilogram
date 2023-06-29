const express = require("express");
const router = express.Router();

const { regiterUser, loginUser } = require("../controllers/auth");

router.post("/register", regiterUser);

router.post("/login", loginUser);

module.exports = router;
