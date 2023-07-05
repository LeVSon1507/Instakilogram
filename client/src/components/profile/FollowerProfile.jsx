import { Button, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import BadgeAvatars from "./FriendsCard";

export const FollowerProfile = () => {
  return (
    <div><div className="search">
            <TextField
              label="Search input"
              InputProps={{
              type: 'search',
              }}
              />
            <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
              Tìm kiếm
            </Button>
            <Button variant="contained" color="secondary" startIcon={<ClearIcon />}>
              Xóa
            </Button>    
          </div>
          <h3 className="follower">Your Follower</h3>
          <div className="list-friends">
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Lơn Văn Xê</h4>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Trân Quang Tương</h4>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Vãn Thành O</h4>
              </div>
          </div></div>
  )
}
