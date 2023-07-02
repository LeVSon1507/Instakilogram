import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.scss';
import { observer } from 'mobx-react';
import axios from 'axios';
import accountStore from '../../store/accountStore';
import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { RiCompassDiscoverFill } from 'react-icons/ri';
import { MdOutlineOndemandVideo, MdOutlineAccountCircle } from 'react-icons/md';
import { SiMessenger } from 'react-icons/si';
import { IoAddCircleSharp } from 'react-icons/io5';
import PostDialog from '../layouts/dialog/PostDialog';
import { logo, logoInsta } from '../utils/constant';

const SideBar = observer(() => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const accessToken = sessionStorage.getItem('accessToken');
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    axios
      .post('http://localhost:8080/users/check', null, {
        headers: config.headers,
      })
      .then((res) => {
        accountStore.setAccount(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status === 401) {
          navigate('/');
        }
      });
  }, []);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-items">
          <div className="logo">  
            <img src={logoInsta} alt="logo" />
            <Link to="/home">Instakilogram</Link>
          </div>
          <div>
            <AiOutlineHome />
            <Typography>Trang chủ</Typography>
          </div>
          <div>
            <BsSearch />
            <Typography>Tìm Kiếm</Typography>
          </div>
          <div>
            <RiCompassDiscoverFill />
            <Typography>Khám Phá</Typography>
          </div>
          <div>
            <MdOutlineOndemandVideo />
            <Typography>Reels</Typography>
          </div>
          <div>
            <SiMessenger />
            <Typography>
              <Link to="/groupchat">Tin Nhắn</Link>
            </Typography>
          </div>
          <div>
            <AiOutlineHeart />
            <Typography>Thông Báo</Typography>
          </div>
          <div
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <IoAddCircleSharp />
            <Typography>Tạo</Typography>
          </div>
          <div>
            <MdOutlineAccountCircle />
            <Typography>Trang cá nhân</Typography>
          </div>
        </div>
      </div>
      <PostDialog
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      />
    </>
  );
});

export default SideBar;
