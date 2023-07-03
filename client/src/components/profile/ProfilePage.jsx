import React, { useState } from "react";
import { Avatar, Box, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import SideBar from "../sidebar/SideBar";
import "./Profile.scss";
import { EditProfile } from "./EditProfile";
import { SearchFriend } from "./SearchFriend";
import { UserPoster } from "./UserPoster"

const Profile = () => {
  const friends = [
    { id: 1, name: "Friend 1", avatarUrl: "https://example.com/avatar1.jpg" },
    { id: 2, name: "Friend 2", avatarUrl: "https://example.com/avatar2.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    // Add more friends...
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [isShowingPost, setIsShowingPost] = useState(false);
  const [isShowingFriends, setIsShowingFriends] = useState(false);
  const friendCount = friends.length;

  const handleEditClick = () => {
    setIsEditing(true);
    setIsShowingPost(false);
    setIsShowingFriends(false);
  };

  const handlePostClick = () => {
    setIsEditing(false);
    setIsShowingPost(true);
    setIsShowingFriends(false);
  };

  const handleFriendsClick = () => {
    setIsEditing(false);
    setIsShowingPost(false);
    setIsShowingFriends(true);
  }; 

  return (
    <div className="pageProfile">
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <div className="flex-col">
            <div className="user-profile">
              <Avatar
                alt="User Avatar"
                src="https://example.com/user-avatar.jpg"
                className="user-avatar"
                sx={{
                  height: 200,
                  width: 200
                }}
              />
              <h3 className="user-name">User Name</h3>
            </div>
            <div className="user-bio">Your Bio:</div>
            <ButtonGroup variant="text" className="profile-buttons">
              <Button onClick={handleEditClick}>Edit</Button>
              <Button onClick={handlePostClick}>Post</Button>
              <Button onClick={handleFriendsClick}>Friends
                {friendCount > 0 && <span className="friend-count">({friendCount})</span>}</Button>
            </ButtonGroup>
            {isEditing && <EditProfile />}
            {isShowingPost && <UserPoster/>}
            {isShowingFriends && <SearchFriend />}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
