import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import { Grid } from "@mui/material";
import InforPage from "./inforpage/InforPage";
import axios from "axios";
import { observer } from "mobx-react";
import accountStore from "../../store/accountStore";
import PostList from "./PostList";
import "./HomePage.scss";
import postItemStore from "../../store/postItemStore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const HomePage = observer(() => {
  const userId = accountStore?.account?._id;
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts`)
      .then((res) => {
        const sortedPosts = res.data.sort((a, b) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
          return dateB - dateA;
        });
        postItemStore.setPostItem(sortedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLike = (postId) => {
    if (userId !== undefined) {
      axios
        .put(`http://localhost:8080/posts/${userId}/like/${postId}`)
        .then(() => {
          const index = postItemStore?.postItem?.findIndex(
            (post) => post?._id === postId
          );
          if (index >= 0) {
            postItemStore.updateLike(index, userId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleComment = async (postId) => {
    if (userId !== undefined) {
      await axios
        .put(`http://localhost:8080/posts/${userId}/comment/${postId}`, {
          content,
        })
        .then(() => {
          const index = postItemStore?.postItem?.findIndex(
            (post) => post?._id === postId
          );
          if (index >= 0) {
            postItemStore.updateComment(
              index,
              userId,
              content,
              accountStore.account?.instaName,
              accountStore.account?.avatar
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setContent("");
    } else {
      toast.warning("Vui lòng đăng nhập");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Grid container spacing={2} className="home-container">
        <Grid item md={2} className="sidebar-grid">
          <SideBar />
        </Grid>
        <Grid item md={10} className="inforpost-layout">
          <Grid container spacing={2}>
            <Grid item md={7}>
              <Grid container spacing={2}>
                <PostList
                  postAlls={postItemStore.postItem}
                  handleLike={handleLike}
                  userId={userId}
                  content={content}
                  setContent={setContent}
                  handleComment={handleComment}
                />
              </Grid>
            </Grid>
            <Grid item md={5}>
              <InforPage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

export default HomePage;
