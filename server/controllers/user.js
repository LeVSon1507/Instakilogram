<<<<<<< HEAD
import User from '../models/User.js';

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(user.friends.map((id) => User.findById(id)));
    const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    });
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(user.friends.map((id) => User.findById(id)));
    const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    });

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
=======
const { getUserFromToken } = require("../middleware/auth");
const User = require("../models/userModel");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



const checkUserLogin = async (req, res) => {
  const userId = req.session.userId;
  const accessToken = req.headers.authorization.split(" ")[1];
  const secretKey = "secret_key";

  if (userId) {
    const user = await User.findById(userId);
    res.json(user);
  } else if (accessToken) {
    const user = await getUserFromToken(accessToken, secretKey);
    console.log("user", user);
    if (user) {
      req.session.userId = user._id;
      res.json(user);
    } else {
      res.status(401).json({ message: "Invalid access token" });
    }
  } else {
    res.status(401).json({ message: "You must be logged in" });
  }
};

//add friends
const addFriends = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!friend) {
      return res.status(404).json("Friend not found");
    }

    const isFriendAlreadyAdded = user.friends.some(
      (friendItem) => friendItem.friendId.toString() === friendId
    );

    if (isFriendAlreadyAdded) {
      await user.updateOne({
        $pull: {
          friends: {
            friendId: friendId,
            avatarFriend: friend.avatar,
            instaName: friend.instaName,
          },
        },
      });
      res.status(200).json("The friend has been removed");
    } else {
      const newFriend = {
        friendId: friendId,
        avatarFriend: friend.avatar,
        instaName: friend.instaName,
      };

      await user.updateOne({ $push: { friends: newFriend } });
      res.status(200).json("The friend has been added");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { avatar } = req.body;
    const user = await User.findOneAndUpdate({ userId, avatar });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getAllUser,
  checkUserLogin,
  addFriends,
  getUserById,
  updateUser,
};
>>>>>>> origin/update-source-v2
