import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./SideBar.scss";
import { observer } from "mobx-react";
import axios from "axios";
import accountStore from "../../store/accountStore";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdOutlineAccountCircle } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { IoAddCircleSharp } from "react-icons/io5";
import PostDialog from "../layouts/dialog/PostDialog";

const SideBar = observer(() => {
  const [openDialog, setOpenDialog] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    axios
      .post("http://localhost:8080/users/check", null, {
        headers: config.headers,
      })
      .then((res) => {
        accountStore.setAccount(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-items">
          <div>
            <Link to="/home">Instagram</Link>
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
            <Typography>Tin Nhắn</Typography>
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
