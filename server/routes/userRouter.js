const express = require("express");
const router = express.Router();

const {
  getAllUser,
  regiterUser,
  loginUser,
  checkUserLogin,
  addFriends,
  getUserById,
  updateUser,
} = require("../controllers/user");

router.get("/", getAllUser);

router.get("/:userId", getUserById);

router.post("/register", regiterUser);

router.post("/login", loginUser);

router.post("/check", checkUserLogin);

//updateUser
router.put("/:userId", updateUser);

router.put("/:userId/friend/:friendId", addFriends);

module.exports = router;
