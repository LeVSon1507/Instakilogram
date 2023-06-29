import { Dialog, DialogContent, DialogContentText, Slide } from '@mui/material';
import React from 'react';
import './DialogSetting.scss';
import axios from 'axios';
import postItemStore from '../../../store/postItemStore';
import accountStore from '../../../store/accountStore';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="down"
      ref={ref}
      {...props}
    />
  );
});

const DialogSetting = observer(({ open, handleClose, postItem, userId }) => {
  const navigate = useNavigate();
  const deletePost = (id) => {
    axios
      .delete(`http://localhost:8080/posts/${userId}/${id}`)
      .then(() => {
        if (userId !== undefined) {
          const index = postItemStore?.postItem?.findIndex(
            (post) => post?._id === postItem?._id
          );
          if (index >= 0) {
            postItemStore.deletePost(index);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  const addFriends = async (id) => {
    await axios
      .put(`http://localhost:8080/users/${userId}/friend/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((res) => {
        accountStore.setAccount(res.data);
        console.log('res.data', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="dialog-setting"
    >
      <DialogContent>
        <DialogContentText>Báo Cáo</DialogContentText>

        {postItem?.userId?._id === userId ? (
          <>
            <DialogContentText>Chỉnh Sửa Bài Viết</DialogContentText>
            <DialogContentText onClick={() => deletePost(postItem?._id)}>
              Xóa Bài Viết
            </DialogContentText>
          </>
        ) : (
          <>
            <DialogContentText
              onClick={() => addFriends(postItem?.userId?._id)}
            >
              {accountStore.account?.friends.some(
                (friend) => friend.friendId === postItem?.userId?._id
              )
                ? `Bỏ theo dõi`
                : `Theo dõi`}
            </DialogContentText>
            <DialogContentText>
              <Link
                to={`/groupchat/${postItem?.userId?._id}`}
                state={postItem}
              >
                Nhắn Tin
              </Link>
            </DialogContentText>
          </>
        )}

        <DialogContentText>Xem Trang Cá Nhân</DialogContentText>
        <DialogContentText onClick={handleClose}>Hủy</DialogContentText>
      </DialogContent>
    </Dialog>
  );
});

export default DialogSetting;
