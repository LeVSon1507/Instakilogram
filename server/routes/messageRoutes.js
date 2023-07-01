const express = require("express");
const router = express.Router();
const { sendMessage, allMessages } = require("../controllers/message");

router.post("/:userId", sendMessage);
router.get("/:chatId", allMessages);

module.exports = router;
