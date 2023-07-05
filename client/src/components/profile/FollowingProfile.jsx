import { Button, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import BadgeAvatars from "./FriendsCard";

export const FollowingProfile = () => {
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
          <h3 className="follower">Your Following</h3>
          <div className="list-friends">
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Tran Van C</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Võ Thành An </h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Lê Văn Sơn</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Trương Quang Tân</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Nguyễn Văn A</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">Bill Gate</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Lệ Quyên</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Kênh 18</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={true}/>
                <h4 className="friends-name">VTV TikIk</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              <div className="user-friends">
                <BadgeAvatars showDot={false}/>
                <h4 className="friends-name">Bà Hàng Xóm</h4>
                <button className='unfollow'>Unfollow</button>
              </div>
              
      </div>
    </div>
  )
}
