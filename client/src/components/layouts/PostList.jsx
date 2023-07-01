import React, { useState } from 'react';
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
} from '@mui/material';
import './PostList.scss';
import { AiOutlineHeart, AiOutlineSend } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { GiHeartBeats } from 'react-icons/gi';
import { RiEmotionLine, RiEmotionLaughLine } from 'react-icons/ri';
import { HiDotsHorizontal } from 'react-icons/hi';
import { TbLivePhoto } from 'react-icons/tb';
import { FcAddImage } from 'react-icons/fc';
import DialogSetting from './dialog/DialogSetting';
import { observer } from 'mobx-react';
import accountStore from '../../store/accountStore';
import PostDialog from './dialog/PostDialog';
import { formatAccount } from '../utils/utils';

const PostList = observer(
  ({ postAlls, handleLike, userId, content, setContent, handleComment }) => {
    const [expandedComments, setExpandedComments] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [postItem, setPostItem] = useState();
    const [openCreatePost, setOpenCreatePost] = useState(false);

    const handleExpandComment = (commentId) => {
      setExpandedComments((prevExpanded) =>
        prevExpanded.includes(commentId)
          ? prevExpanded.filter((id) => id !== commentId)
          : [...prevExpanded, commentId]
      );
    };

    return (
      <div className="postlist-container">
        <Card className="create-post">
          <p>Create Post</p>
          <div>
            {accountStore.account?.avatar === '' ? (
              <span>{formatAccount(accountStore.account?.userName)}</span>
            ) : (
              <img
                src={accountStore.account?.avatar}
                alt="avatar"
              />
            )}

            <input
              placeholder="Write something here..."
              onClick={() => {
                setOpenCreatePost(true);
              }}
            />
          </div>
          <ul
            onClick={() => {
              setOpenCreatePost(true);
            }}
          >
            <li>
              <TbLivePhoto /> Live
            </li>
            <li>
              <FcAddImage /> Photo/Image
            </li>
            <li>
              <RiEmotionLaughLine /> Feeling/Activity
            </li>
          </ul>
        </Card>
        {postAlls?.map((post, index) => (
          <Card
            key={index}
            className="post-card"
          >
            <CardHeader
              avatar={
                post.userId.avatar === '' ? (
                  <Avatar className="avatar-text">
                    {formatAccount(post.userId?.userName)}
                  </Avatar>
                ) : (
                  <Avatar
                    alt={post.userId.instaName}
                    src={post.userId.avatar}
                  />
                )
              }
              title={post.userId.instaName}
              subheader={
                <Typography
                  variant="body2"
                  color="rgb(160, 154, 154)"
                >
                  {post?.status}
                </Typography>
              }
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
            </CardContent>
            <CardMedia
              component="img"
              height="480"
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
                <Typography>{post.likes?.length} likes</Typography>
                <FaRegComment
                  onClick={handleExpandComment.bind(null, post._id)}
                />
                <Typography onClick={handleExpandComment.bind(null, post._id)}>
                  {post.comments?.length} comments
                </Typography>
              </div>
            </CardContent>
            {/* <Typography
              className="setcomment"
              onClick={handleExpandComment.bind(null, post._id)}
            >
              {post.comments.length > 0 &&
                (expandedComments.includes(post._id)
                  ? 'Thu nhỏ bình luận'
                  : 'Xem tất cả bình luận')}
            </Typography> */}
            <Collapse
              in={expandedComments.includes(post._id)}
              timeout="auto"
              unmountOnExit
            >
              {post.comments?.map((comment) => (
                <div
                  className="comment"
                  key={comment?._id}
                >
                  {comment.userId?.avatar === '' ? (
                    <Avatar className="avatar-text">
                      {formatAccount(comment.userId?.userName)}
                    </Avatar>
                  ) : (
                    <Avatar
                      alt={comment.userId?.userName}
                      src={comment.userId?.avatar}
                    />
                  )}
                  <span>{comment.userId?.instaName}:</span>
                  <Typography>{comment?.content}</Typography>
                </div>
              ))}
            </Collapse>
            <div className="box-comment">
              <RiEmotionLine />
              <TextField
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleComment(post?._id);
                  }
                }}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="Thêm bình luận"
              />
              <Button
                onClick={() => handleComment(post?._id)}
                disabled={!content}
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
        <PostDialog
          open={openCreatePost}
          handleClose={() => {
            setOpenCreatePost(false);
          }}
        />
      </div>
    );
  }
);
export default PostList;
