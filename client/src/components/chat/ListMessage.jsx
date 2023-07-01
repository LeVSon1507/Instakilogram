import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatAccount } from '../utils/utils';
import { CiSearch } from 'react-icons/ci';
import { MdGroupAdd } from 'react-icons/md';
import axios from 'axios';
import { BsGrid3X2 } from 'react-icons/bs';
import DialogCreateGroup from '../layouts/dialog/DialogCreateGroup';

const ListMessage = ({ listChat, userId, account }) => {
  const [search, setSearch] = useState('');
  const [userValues, setUserValues] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [display, setDisplay] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const users = listChat.reduce((acc, chat) => {
    const filteredUsers = chat.users.filter((user) => user._id !== userId);
    const usersWithLatestMessage = filteredUsers.map((user) => ({
      ...user,
      latestMessage: chat.latestMessage,
    }));
    return [...acc, ...usersWithLatestMessage];
  }, []);

  const formatTime = (timeString) => {
    if (!timeString) {
      return '';
    }

    const now = new Date();
    const time = new Date(timeString);

    const diffInMinutes = Math.floor((now - time) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInMinutes / 1440);
      return `${diffInDays}d ago`;
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8080/users').then((res) => {
      setUserValues(res.data);
    });
  }, []);

  useEffect(() => {
    if (search === '' || search === null) {
      setSearchValue(null);
    } else {
      const filteredUsers = userValues?.filter((user) => {
        if (user._id !== userId) {
          return user.userName.toLowerCase().includes(search.toLowerCase());
        }
      });
      setSearchValue(filteredUsers);
    }
  }, [search]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box className="list-message">
      <Grid className="account">
        {account?.avatar !== '' ? (
          <img src={account?.avatar} alt="avatar" />
        ) : (
          <span>{formatAccount(account?.userName)}</span>
        )}
        <div>
          <Typography>{account?.userName}</Typography>
        </div>
      </Grid>
      <Grid className="create-group">
        <Typography className="chats">Chats</Typography>
        <MdGroupAdd onClick={() => setOpenDialog(true)} />
      </Grid>

      <div className="search">
        <CiSearch />
        <input
          placeholder="Search Friends"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setDisplay(true);
          }}
        />
        <div className="search-value" onBlur={() => setDisplay(false)}>
          {display &&
            searchValue?.map((user) => (
              <Typography key={user?._id}>
                <Link to={`/groupchat/${user?._id}`} state={user} onClick={() => setDisplay(false)}>
                  {user.userName}
                </Link>
              </Typography>
            ))}
        </div>
      </div>

      <h3>Your messages</h3>
      {users?.map((user) => (
        <ListItem className="message-friends" key={user._id}>
          {user.avatar !== '' ? <img src={user?.avatar} alt="avatar" /> : <span>{formatAccount(user.userName)}</span>}
          <div>
            <Link to={`/groupchat/${user?._id}`} state={user}>
              {user.userName}
            </Link>
            <div>
              <Typography>{user.latestMessage?.content}</Typography>
              <Typography>{formatTime(user.latestMessage?.createdAt)}</Typography>
            </div>
          </div>
        </ListItem>
      ))}
      <DialogCreateGroup open={openDialog} handleClose={handleClose} userValues={userValues} userId={userId} />
    </Box>
  );
};

export default ListMessage;
