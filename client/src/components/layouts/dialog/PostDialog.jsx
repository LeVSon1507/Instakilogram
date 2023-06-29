import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import accountStore from '../../../store/accountStore';
import axios from 'axios';
import { toast } from 'react-toastify';
import postItemStore from '../../../store/postItemStore';
import './PostDialog.scss';
import { formatAccount, handleImageUpload } from '../../utils/utils';
import { TbLivePhoto } from 'react-icons/tb';
import { FcAddImage } from 'react-icons/fc';
import { RiEmotionLaughLine } from 'react-icons/ri';
import { statusOptions } from '../../utils/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="right"
      ref={ref}
      {...props}
    />
  );
});

const PostDialog = ({ open, handleClose }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const post = {
      description: description,
      images: imageUrl,
      status: status,
    };
    const userId = accountStore.account?._id;

    await axios
      .post(`http://localhost:8080/posts/${userId}`, post)
      .then(() => {
        toast.success('Đăng ảnh thành công');
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error occurred while registering user.');
      });

    await axios
      .get(`http://localhost:8080/posts`)
      .then((res) => {
        const sortedPosts = res.data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        postItemStore.setPostItem(sortedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
    setDescription('');
    setImageUrl('');
    setStatus('');
    handleClose();
  };

  const isDisabel = [description, imageUrl].includes('');

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="post-dialog"
    >
      <DialogTitle>
        <DialogContentText>Create Post</DialogContentText>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 5,
            color: '#50b5ff',
          }}
        >
          <IoCloseCircleOutline sx={{ fontSize: '30px' }} />
        </IconButton>
      </DialogTitle>

      <DialogContent className="create-post-content">
        <div className="description">
          {accountStore.account?.avatar !== '' ? (
            <img
              src={accountStore.account?.avatar}
              alt="avatar"
            />
          ) : (
            <span className="avatar-text">
              {formatAccount(accountStore.account?.userName)}
            </span>
          )}

          <input
            rows={3}
            value={description}
            placeholder="Write something here..."
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <ul className="status">
          <li>
            <TbLivePhoto /> Live
          </li>

          <li>
            <select
              id="demo-simple-select"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="select-sort"
            >
              {statusOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="image-input">
              <FcAddImage /> Photo/Image
            </label>
            <input
              id="image-input"
              type="file"
              multiple
              onChange={(e) => {
                handleImageUpload(e.target.files, setImageUrl);
              }}
            />
          </li>
        </ul>
        <p>Vui lòng chờ ảnh được tải...</p>
        {imageUrl.length > 0 ? (
          <img
            src={imageUrl[0]?.url}
            alt="Product"
            style={{ maxWidth: '50%' }}
          />
        ) : (
          <p></p>
        )}
      </DialogContent>
      <DialogActions className="dialog-action">
        <div>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={isDisabel}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default PostDialog;
