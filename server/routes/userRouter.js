const express = require("express");
const router = express.Router();

const {
  getAllUser,
<<<<<<< HEAD
  regiterUser,
  loginUser,
=======
>>>>>>> origin/update-source-v2
  checkUserLogin,
  addFriends,
  getUserById,
  updateUser,
} = require("../controllers/user");

router.get("/", getAllUser);

router.get("/:userId", getUserById);

<<<<<<< HEAD
router.post("/register", regiterUser);

router.post("/login", loginUser);
=======
>>>>>>> origin/update-source-v2

router.post("/check", checkUserLogin);

//updateUser
router.put("/:userId", updateUser);

router.put("/:userId/friend/:friendId", addFriends);

module.exports = router;
