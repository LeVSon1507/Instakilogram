const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const postItemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    images: [imageSchema],
    status: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const PostItem = mongoose.model("PostItem", postItemSchema);

module.exports = PostItem;
