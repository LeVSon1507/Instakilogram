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
<<<<<<< HEAD
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import accountStore from "../../../store/accountStore";
import axios from "axios";
import { toast } from "react-toastify";
import postItemStore from "../../../store/postItemStore";
import "./PostDialog.scss";
import { handleImageUpload } from "../../utils/utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
=======
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
>>>>>>> origin/update-source-v2
});

const PostDialog = ({ open, handleClose }) => {
  const [imageUrl, setImageUrl] = useState([]);
<<<<<<< HEAD
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
=======
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
>>>>>>> origin/update-source-v2

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
<<<<<<< HEAD
        toast.success("Đăng ảnh thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while registering user.");
=======
        toast.success('Đăng ảnh thành công');
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error occurred while registering user.');
>>>>>>> origin/update-source-v2
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
<<<<<<< HEAD
    handleClose();
  };

=======
    setDescription('');
    setImageUrl('');
    setStatus('');
    handleClose();
  };

  const isDisabel = [description, imageUrl].includes('');

>>>>>>> origin/update-source-v2
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
<<<<<<< HEAD
        <DialogContentText>Tạo Bài Viết</DialogContentText>
=======
        <DialogContentText>Create Post</DialogContentText>
>>>>>>> origin/update-source-v2
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
<<<<<<< HEAD
            position: "absolute",
            right: 10,
            top: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IoCloseCircleOutline sx={{ fontSize: "30px" }} />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <TextField
          placeholder="Enter description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          placeholder="Enter status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          fullWidth
        />
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleImageUpload(e.target.files, setImageUrl);
          }}
        />
=======
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
>>>>>>> origin/update-source-v2
        <p>Vui lòng chờ ảnh được tải...</p>
        {imageUrl.length > 0 ? (
          <img
            src={imageUrl[0]?.url}
            alt="Product"
<<<<<<< HEAD
            style={{ maxWidth: "50%" }}
=======
            style={{ maxWidth: '50%' }}
>>>>>>> origin/update-source-v2
          />
        ) : (
          <p></p>
        )}
      </DialogContent>
      <DialogActions className="dialog-action">
        <div>
          <Button onClick={handleClose}>Cancel</Button>
<<<<<<< HEAD
          <Button onClick={handleSubmit}>Post</Button>
=======
          <Button
            disabled={isDisabel}
            onClick={handleSubmit}
          >
            Post
          </Button>
>>>>>>> origin/update-source-v2
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default PostDialog;
