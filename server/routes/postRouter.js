const express = require("express");
const router = express.Router();
const {
  getAllPost,
  deletePost,
  updatePost,
  createPost,
  getPostByUser,
  likePost,
  addCommentToPost,
} = require("../controllers/post");
<<<<<<< HEAD
=======
const { verifyToken } = require("../middleware/auth");
>>>>>>> origin/update-source-v2

//get post by each user
router.get("/:userId", getPostByUser);

router.post("/:userId", createPost);

router.put("/:userId/:postId", updatePost);

router.delete("/:userId/:postId", deletePost);

//get all post all user
router.get("/", getAllPost);

//like
router.put("/:userId/like/:postId", likePost);

//comments
router.put("/:userId/comment/:postId", addCommentToPost);

module.exports = router;
