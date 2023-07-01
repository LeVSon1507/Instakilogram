<<<<<<< HEAD
import React, { useEffect, useMemo } from "react";
=======
import React, { useEffect, useMemo } from 'react';
>>>>>>> origin/update-source-v2
import {
  Grid,
  Tooltip,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
  Divider,
  ListItemIcon,
  Typography,
<<<<<<< HEAD
} from "@mui/material";
import { Link } from "react-router-dom";
import "./InforPage.scss";
import { observer } from "mobx-react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import accountStore from "../../../store/accountStore";
=======
} from '@mui/material';
import { Link } from 'react-router-dom';
import './InforPage.scss';
import { observer } from 'mobx-react';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import accountStore from '../../../store/accountStore';
import { formatAccount } from '../../utils/utils';
>>>>>>> origin/update-source-v2

const InforPage = observer(() => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [allFriends, setAllFriends] = useState();
  const [follow, setFollow] = useState([]);
  const userId = accountStore.account?._id;

  const handleFollow = (followId) => {
    setFollow((prevFollow) =>
      prevFollow.includes(followId)
        ? prevFollow.filter((id) => id !== followId)
        : [...prevFollow, followId]
    );
  };

  const addFriends = async (id) => {
    await axios
      .put(`http://localhost:8080/users/${userId}/friend/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    handleFollow(id);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (accountStore.account) {
      setAnchorEl(event.currentTarget);
    } else {
<<<<<<< HEAD
      const result = window.confirm("Bạn muốn chuyển sang trang đăng nhập chứ");
      result && navigate("/");
=======
      const result = window.confirm('Bạn muốn chuyển sang trang đăng nhập chứ');
      result && navigate('/');
>>>>>>> origin/update-source-v2
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

<<<<<<< HEAD
  const accessToken = localStorage.getItem("accessToken");

  const handleLogOut = () => {
    const result = window.confirm("Bạn có chắc là muốn đăng xuất chứ");
    if (result) {
      setAnchorEl(null);
      localStorage.removeItem("accessToken");
      accountStore.setAccount(null);
      navigate("/");
=======
  const accessToken = sessionStorage.getItem('accessToken');

  const handleLogOut = () => {
    const result = window.confirm('Bạn có chắc là muốn đăng xuất chứ');
    if (result) {
      setAnchorEl(null);
      sessionStorage.removeItem('accessToken');
      accountStore.setAccount(null);
      navigate('/');
>>>>>>> origin/update-source-v2
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

  const friendNotFollows = allFriends?.filter((friend) => {
    return (
      !accountStore.account?.friends?.some(
        (friendId) => friendId?.friendId === friend._id
      ) && friend._id !== accountStore.account?._id
    );
  });

<<<<<<< HEAD
  return (
    <>
      <Grid container className="infor-container">
        <Grid item md={12} className="infor-items">
=======
  console.log(friendNotFollows);

  return (
    <>
      <Grid
        container
        className="infor-container"
      >
        <Grid
          item
          md={12}
          className="infor-items"
        >
>>>>>>> origin/update-source-v2
          <div className="avatar">
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
<<<<<<< HEAD
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {accessToken ? (
=======
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {accountStore.account?.avatar !== '' ? (
>>>>>>> origin/update-source-v2
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                    }}
                    src={accountStore.account?.avatar}
                    alt="avatar"
                  />
                ) : (
<<<<<<< HEAD
                  <Avatar />
=======
                  <Avatar className="avatar-text">
                    {formatAccount(accountStore.account?.userName)}
                  </Avatar>
>>>>>>> origin/update-source-v2
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
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
<<<<<<< HEAD
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
=======
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
>>>>>>> origin/update-source-v2
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
<<<<<<< HEAD
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
=======
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
>>>>>>> origin/update-source-v2
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
<<<<<<< HEAD
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
=======
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
>>>>>>> origin/update-source-v2
                    zIndex: 0,
                  },
                },
              }}
<<<<<<< HEAD
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
=======
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>>>>>>> origin/update-source-v2
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Trang cá nhân
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
          <div className="addfriend-container">
<<<<<<< HEAD
            <div>
              <Typography>Gợi ý cho bạn</Typography>
              <Typography> Xem tất cả</Typography>
            </div>
            {friendNotFollows?.map((item, index) => (
              <div className="addfriend-box" key={index}>
=======
            <div className="tab-friends">
              <Typography>Suggested Friends</Typography>
            </div>
            {friendNotFollows?.map((item, index) => (
              <div
                className="addfriend-box"
                key={index}
              >
                <div className="avatar">
                  {item.avatar === '' ? (
                    <p>{formatAccount(item.userName)}</p>
                  ) : (
                    <img
                      src={item.avatar}
                      alt="avatar"
                    />
                  )}
                </div>
>>>>>>> origin/update-source-v2
                <div>
                  <Typography>{item.instaName}</Typography>
                </div>
                <Typography onClick={() => addFriends(item._id)}>
<<<<<<< HEAD
                  {follow.includes(item._id) ? "Bỏ Theo dõi" : "Theo dõi"}
                </Typography>
              </div>
            ))}
=======
                  {follow.includes(item._id) ? 'Bỏ Theo dõi' : 'Theo dõi'}
                </Typography>
              </div>
            ))}
            <button>See all</button>
>>>>>>> origin/update-source-v2
          </div>
        </Grid>
      </Grid>
    </>
  );
});

export default InforPage;
