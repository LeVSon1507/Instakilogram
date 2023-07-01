<<<<<<< HEAD
import Post from '../models/Post.js';
import User from '../models/User.js';

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes }, { new: true });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
=======
const PostItem = require("../models/postModel");
const User = require("../models/userModel");

const getPostByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await PostItem.find({ userId });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const createPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { description, images, status } = req.body;
    const post = new PostItem({ userId, description, images, status });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const updatePost = async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const { description, images } = req.body;
    const post = await PostItem.findOneAndUpdate(
      { _id: postId, userId },
      { description, images },
      { new: true }
    );
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const deletePost = async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const post = await PostItem.findOneAndDelete({ _id: postId, userId });
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
const getAllPost = async (req, res) => {
  try {
    const postItems = await PostItem.find().populate([
      {
        path: "userId",
        model: "User",
      },
      {
        path: "comments.userId",
        model: "User",
      },
    ]);
    res.json(postItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//like features
const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.params;
    const post = await PostItem.findById(postId);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("the post has been unliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("the post has been liked");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

//comment features
const addCommentToPost = async (req, res) => {
  try {
    const { postId, userId } = req.params;
    const { content } = req.body;

    const post = await PostItem.findById(postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }

    const newComment = {
      userId,
      content,
    };
    post.comments.push(newComment);
    await post.save();
    console.log("new", post);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getPostByUser,
  createPost,
  updatePost,
  deletePost,
  getAllPost,
  likePost,
  addCommentToPost,
};
>>>>>>> origin/update-source-v2
