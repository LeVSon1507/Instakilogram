const express = require("express");
const router = express.Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chat");

router.post("/:userId", accessChat);
router.get("/:userId", fetchChats);
router.post("/group", createGroupChat);
router.put("/rename", renameGroup);
router.put("/groupremove", removeFromGroup);
router.post("/groupadd", addToGroup);

module.exports = router;
