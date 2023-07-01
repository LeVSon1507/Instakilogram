import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { BsSendCheck } from 'react-icons/bs';
import { RiEmotionLine } from 'react-icons/ri';
import { CiMicrophoneOn, CiVideoOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { formatAccount } from '../utils/utils';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

function Chat({
  socket,
  room,
  chat,
  userId,
  setMessageList,
  messageList,
  chatName,
}) {
  const [currentContent, setCurrentContent] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = async () => {
    if (currentContent !== '') {
      axios
        .post(`http://localhost:8080/messages/${userId}`, {
          content: currentContent,
          chatId: chat._id,
        })
        .then(async (res) => {
          await socket.emit('send_message', res.data);
          setMessageList((list) => [...list, res.data]);
          setCurrentContent(' ');
        });
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      if (chat?._id === data.chat?._id) {
        setMessageList((list) => [...list, data]);
      }
    });
    return () => {
      socket.off('receive_message');
    };
  });

  const addEmoji = (emoji) => {
    setCurrentContent(currentContent + emoji.native);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>{chatName}</p>
        <div>
          <IoCallOutline />
          <CiVideoOn />
          <AiOutlineDelete />
          <BiDotsVerticalRounded />
        </div>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                key={messageContent._id}
                className="message"
                id={userId === messageContent.sender?._id ? 'you' : 'other'}
              >
                {userId !== messageContent.sender?._id && (
                  <>
                    {messageContent.sender.avatar !== '' ? (
                      <img
                        src={messageContent.sender.avatar}
                        alt="avatar"
                        className="avatar"
                      />
                    ) : (
                      <span>
                        {formatAccount(messageContent.sender.userName)}
                      </span>
                    )}
                  </>
                )}
                <div>
                  <div className="message-content">
                    <p>{messageContent.content}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">
                      {new Date(messageContent.createdAt).toLocaleTimeString(
                        'en-US',
                        { hour12: false, hour: '2-digit', minute: '2-digit' }
                      )}
                    </p>
                  </div>
                </div>
                {userId === messageContent.sender?._id && (
                  <>
                    {messageContent.sender.avatar !== '' ? (
                      <img
                        src={messageContent.sender.avatar}
                        alt="avatar"
                        className="avatar"
                      />
                    ) : (
                      <span>
                        {formatAccount(messageContent.sender.userName)}
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      {showEmojiPicker && (
        <span>
          <Picker
            data={data}
            onEmojiSelect={addEmoji}
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              maxWidth: '250px',
              with: '100%',
              outline: 'none',
            }}
          />
        </span>
      )}
      <div className="chat-footer">
        <RiEmotionLine onClick={toggleEmojiPicker} />
        <CiMicrophoneOn />
        <textarea
          value={currentContent}
          placeholder="Type your message"
          onChange={(event) => {
            setCurrentContent(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13 && !event.shiftKey) {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>
          <BsSendCheck /> Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
