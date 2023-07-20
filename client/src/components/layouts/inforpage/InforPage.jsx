import React, { useEffect, useState } from 'react';
import { Grid, Tooltip, IconButton, Avatar, MenuItem, Menu, Divider, ListItemIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './InforPage.scss';
import { observer } from 'mobx-react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import accountStore from '../../../store/accountStore';
import { formatAccount } from '../../utils/utils';

const InforPage = observer(() => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [allFriends, setAllFriends] = useState([]);
  const [follow, setFollow] = useState([]);
  const userId = accountStore.account?._id;

  const handleFollow = (followId) => {
    setFollow((prevFollow) =>
      prevFollow.includes(followId) ? prevFollow.filter((id) => id !== followId) : [...prevFollow, followId],
    );
  };

  const addFriends = async (id) => {
    try {
      await axios.put(`http://localhost:8080/users/${userId}/friend/${id}`);
      handleFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMenuClick = (event) => {
    if (accountStore.account) {
      setAnchorEl(event.currentTarget);
    } else {
      const result = window.confirm('Bạn muốn chuyển sang trang đăng nhập chứ');
      result && navigate('/');
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    const result = window.confirm('Bạn có chắc là muốn đăng xuất chứ');
    if (result) {
      setAnchorEl(null);
      sessionStorage.removeItem('accessToken');
      accountStore.setAccount(null);
      navigate('/');
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users`)
      .then((res) => {
        setAllFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const friendNotFollows = allFriends?.filter(
    (friend) =>
      !accountStore.account?.friends?.some((friendId) => friendId?.friendId === friend._id) &&
      friend._id !== accountStore.account?._id,
  );

  return (
    <Grid container className="infor-container">
      <Grid item md={12} className="infor-items">
        <div className="avatar">
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleMenuClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={anchorEl ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl)}
            >
              {accountStore.account?.avatar ? (
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                  src={accountStore.account?.avatar}
                  alt="avatar"
                />
              ) : (
                <Avatar className="avatar-text">{formatAccount(accountStore.account?.userName)}</Avatar>
              )}
            </IconButton>
          </Tooltip>
          <div className="text-account">
            <Typography>{accountStore.account?.instaName}</Typography>
            <Typography>{accountStore.account?.userName}</Typography>
          </div>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Avatar /> Trang cá nhân
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <PersonAddIcon fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
        <div className="addfriend-container">
          <div className="tab-friends">
            <Typography>Suggested Friends</Typography>
          </div>
          {friendNotFollows?.map((item, index) => (
            <div className="addfriend-box" key={index}>
              <div className="avatar">
                {item.avatar ? <img src={item.avatar} alt="avatar" /> : <p>{formatAccount(item.userName)}</p>}
              </div>
              <div>
                <Typography>{item.instaName}</Typography>
              </div>
              <Typography onClick={() => addFriends(item._id)}>
                {follow.includes(item._id) ? 'Bỏ Theo dõi' : 'Theo dõi'}
              </Typography>
            </div>
          ))}
          <button>See all</button>
        </div>
      </Grid>
    </Grid>
  );
});

export default InforPage;
