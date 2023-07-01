import React, { useState, useEffect, useMemo } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';
import './GroupChat.scss';
import accountStore from '../../store/accountStore';
import { observer } from 'mobx-react';
import SideBar from '../sidebar/SideBar';
import { Grid } from '@mui/material';
import ListMessage from './ListMessage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const socket = io.connect('http://localhost:8080');

const GroupChat = observer(() => {
  const [chat, setChat] = useState(null);
  const [room, setRoom] = useState('');
  const [selected, setSelected] = useState();
  const { id } = useParams();
  const [messageList, setMessageList] = useState([]);
  const [listChat, setListChat] = useState([]);

  const userId = accountStore?.account?._id;
  const account = accountStore?.account;

  useEffect(() => {
    // socket.on("connected", () => setSocketConnected(true));
    if (userId !== undefined) {
      axios.get(`http://localhost:8080/chats/${userId}`).then((res) => {
      setListChat(res.data);
    });
      axios
        .post(`http://localhost:8080/chats/${userId}`, { friendId: id })
        .then((res) => {
          setChat(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId, id]);

  useEffect(() => {
    if (chat?._id !== undefined) {
      axios.get(`http://localhost:8080/messages/${chat?._id}`).then((res) => {
        setMessageList(res.data);
      });
    }
    socket.emit('setup', chat);
  }, [chat,userId]);


  // useEffect(() => {
  //   if (messageList !== undefined) {
  //     axios.get(`http://localhost:8080/chats/${userId}`).then((res) => {
  //       setListChat(res.data);
  //     });
  //   }
  // }, [messageList, userId]);

  const chatName = useMemo(() => {
    const user = chat?.users?.find((user) => user._id !== userId);
    return user ? user.userName : '';
  }, [chat, userId]);

  return (
    <>
      <Grid
        container
        className="group-chat"
      >
        <SideBar />
        <Grid
          item
          md={2.5}
          className="list-message-container"
        >
          <ListMessage
            userId={userId}
            setSelected={setSelected}
            listChat={listChat}
            account={account}
          />
        </Grid>
        <Grid
          item
          md={9.5}
        >
          <Chat
            socket={socket}
            userId={userId}
            room={room}
            chat={chat}
            messageList={messageList}
            setMessageList={setMessageList}
            chatName={chatName}
          />
        </Grid>
      </Grid>
    </>
  );
});

export default GroupChat;
