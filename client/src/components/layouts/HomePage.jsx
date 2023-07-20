import React, { useEffect, useState } from 'react';
import SideBar from '../sidebar/SideBar';
import { Grid } from '@mui/material';
import InforPage from './inforpage/InforPage';
import axios from 'axios';
import { observer } from 'mobx-react';
import accountStore from '../../store/accountStore';
import PostList from './PostList';
import './HomePage.scss';
import postItemStore from '../../store/postItemStore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const HomePage = observer(() => {
  const userId = accountStore?.account?._id;
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    axios
      .get(`http://localhost:8080/posts`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => postItemStore.setPostItem(res.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))))
      .catch((err) => console.log(err));
  }, []);

  const handleLike = (postId) => {
    if (userId !== undefined) {
      axios
        .put(`http://localhost:8080/posts/${userId}/like/${postId}`)
        .then(() => {
          const index = postItemStore?.postItem?.findIndex((post) => post?._id === postId);
          if (index >= 0) postItemStore.updateLike(index, userId);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleComment = async (postId) => {
    if (userId !== undefined) {
      try {
        await axios.put(`http://localhost:8080/posts/${userId}/comment/${postId}`, { content });
        const index = postItemStore?.postItem?.findIndex((post) => post?._id === postId);
        if (index >= 0)
          postItemStore.updateComment(
            index,
            userId,
            content,
            accountStore.account?.instaName,
            accountStore.account?.avatar,
            accountStore.account?.userName,
          );
        setContent('');
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warning('Vui lòng đăng nhập');
      setTimeout(() => navigate('/'), 2000);
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
            <Grid item md={8}>
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
            <Grid item md={4}>
              <InforPage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

export default HomePage;