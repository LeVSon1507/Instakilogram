const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  friendId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  avatarFriend: {
    type: String,
    default: "",
  },
  instaName: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    instaName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    friends: [friendSchema],
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
