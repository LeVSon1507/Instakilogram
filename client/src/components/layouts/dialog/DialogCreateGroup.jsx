import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  Slide,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './DialogSetting.scss';
import axios from 'axios';
import { observer } from 'mobx-react';
import { CiSearch } from 'react-icons/ci';
import { formatAccount } from '../../utils/utils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogCreateGroup = observer(({ open, handleClose, userValues, userId }) => {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    if (search === '' || search === null) {
      setSearchValue(null);
    } else {
      const filteredUsers = userValues?.filter((user) => {
        if (user._id !== userId) {
          return user.userName.toLowerCase().includes(search.toLowerCase());
        }
      });
      setSearchValue(filteredUsers.length > 0 ? filteredUsers : []);
    }
  }, [search]);

  const createGroup = () => {
    axios.post(`http://localhost:8080/chats/group`);
  };

  const friends = userValues?.slice(0, 5).filter((user) => user?._id !== userId);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="dialog-create-group"
    >
      <DialogTitle>Create Group</DialogTitle>
      <DialogContent>
        <Box className="search">
          <CiSearch />
          <input
            placeholder="Search Friends"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Box>
        <DialogContentText className="list-addtogroup">
          {searchValue?.length === 0 ? (
            <Typography className="not-found">Not Found</Typography>
          ) : (
            (searchValue !== null ? searchValue : friends)?.map((user) => (
              <Box>
                {user.avatar !== '' ? (
                  <img src={user?.avatar} alt="avatar" />
                ) : (
                  <span>{formatAccount(user.userName)}</span>
                )}
                <Typography>{user.userName}</Typography>
              </Box>
            ))
          )}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Create</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
});

export default DialogCreateGroup;
