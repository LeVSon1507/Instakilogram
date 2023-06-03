import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  TextField,
  Typography,
} from "@mui/material";
import "./PostList.scss";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { RiEmotionLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import DialogSetting from "./dialog/DialogSetting";

const PostList = ({
  postAlls,
  handleLike,
  userId,
  content,
  setContent,
  handleComment,
}) => {
  const [expandedComments, setExpandedComments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [postItem, setPostItem] = useState();

  const handleExpandComment = (commentId) => {
    setExpandedComments((prevExpanded) =>
      prevExpanded.includes(commentId)
        ? prevExpanded.filter((id) => id !== commentId)
        : [...prevExpanded, commentId]
    );
  };

  return (
    <div className="postlist-container">
      {postAlls?.map((post, index) => (
        <Card key={index} className="post-card">
          <CardHeader
            avatar={
              <Avatar alt={post.userId.instaName} src={post.userId.avatar} />
            }
            title={post.userId.instaName}
            action={
              <HiDotsHorizontal
                onClick={() => {
                  setOpenDialog(true);
                  setPostItem(post);
                }}
              />
            }
          />

          <CardContent>
            <Typography>{post.description}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.status}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="450"
            width="100"
            image={post?.images[0]?.url}
            title="Post"
          />
          <CardContent className="likecomment">
            <div>
              {post.likes?.includes(userId) ? (
                <GiHeartBeats
                  className="like-icon"
                  onClick={() => handleLike(post?._id)}
                />
              ) : (
                <AiOutlineHeart onClick={() => handleLike(post?._id)} />
              )}
              <FaRegComment />
            </div>
            <Typography>{post.likes?.length} lượt thích</Typography>
          </CardContent>
          <Typography
            className="setcomment"
            onClick={handleExpandComment.bind(null, post._id)}
          >
            {post.comments.length > 0 &&
              (expandedComments.includes(post._id)
                ? "Thu nhỏ bình luận"
                : "Xem tất cả bình luận")}
          </Typography>
          <Collapse
            in={expandedComments.includes(post._id)}
            timeout="auto"
            unmountOnExit
          >
            {post.comments.map((comment) => (
              <div className="comment" key={comment._id}>
                <Avatar src={comment.userId.avatar} alt={post.instaName} />
                <span>{comment.userId.instaName}:</span>
                <Typography>{comment.content}</Typography>
              </div>
            ))}
          </Collapse>
          <div className="box-comment">
            <RiEmotionLine />
            <TextField
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Thêm bình luận"
            />
            <Button
              onClick={() => handleComment(post?._id)}
              disabled={content === "" && true}
            >
              <AiOutlineSend />
            </Button>
          </div>
        </Card>
      ))}
      <DialogSetting
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
        postItem={postItem}
        userId={userId}
      />
    </div>
  );
};
export default PostList;
