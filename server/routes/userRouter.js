const express = require("express");
const router = express.Router();

const {
  getAllUser,
  checkUserLogin,
  addFriends,
  getUserById,
  updateUser,
} = require("../controllers/user");

router.get("/", getAllUser);

router.get("/:userId", getUserById);


router.post("/check", checkUserLogin);

//updateUser
router.put("/:userId", updateUser);

router.put("/:userId/friend/:friendId", addFriends);

module.exports = router;
