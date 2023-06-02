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
});

const PostDialog = ({ open, handleClose }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

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
        toast.success("Đăng ảnh thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while registering user.");
      });

    await axios
      .get(`http://localhost:8080/posts`)
      .then((res) => {
        const sortedPosts = res.data.sort((a, b) => {
          const dateA = new Date(a.userPostItems[0].createdAt);
          const dateB = new Date(b.userPostItems[0].createdAt);
          return dateB - dateA;
        });
        postItemStore.setPostItem(sortedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

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
        <DialogContentText>Tạo Bài Viết</DialogContentText>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
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
        <p>Vui lòng chờ ảnh được tải...</p>
        {imageUrl.length > 0 ? (
          <img
            src={imageUrl[0]?.url}
            alt="Product"
            style={{ maxWidth: "50%" }}
          />
        ) : (
          <p></p>
        )}
      </DialogContent>
      <DialogActions className="dialog-action">
        <div>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default PostDialog;
