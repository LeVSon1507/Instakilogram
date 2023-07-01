const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
<<<<<<< HEAD
require('dotenv').config();

const app = express();

=======
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);

>>>>>>> origin/update-source-v2
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

<<<<<<< HEAD
const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.MONGO_URL, {
=======
// {socket.io

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`Connect Socket.io`);

  socket.on('setup', (chatData) => {
    if (chatData !== null) {
      socket.join(chatData._id);
      console.log(`Logged in user ${chatData._id} joined the created room`);
      socket.emit('connected');
    }
  });

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('typing', (room) => socket.in(room).emit('typing'));
  socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));

  socket.on('send_message', (message) => {
    var chat = message.chat;

    if (!chat.users) return console.log('chat.users not defined');

    chat.users.forEach((user) => {
      if (user._id == message.sender._id) return;
      if (chat?._id === message.chat?._id) {
        socket.to(chat._id).emit('receive_message', message);
        //.in-- inside user._id exclusive socket room joined-- emit this "message recieved" event ////mern-docs
      }
    });
  });

  socket.off('setup', () => {
    console.log('USER DISCONNECTED');
    socket.leave(userData._id);
  });
});
// socket.io }

const port = 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/SocialMedia', {
>>>>>>> origin/update-source-v2
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connected');
});

<<<<<<< HEAD
const usersRouter = require('./routes/userRouter');
const postsRouter = require('./routes/postRouter');

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
=======
const authRouter = require('./routes/authRoutes');
const usersRouter = require('./routes/userRouter');
const postsRouter = require('./routes/postRouter');
const chatRouter = require('./routes/chatRoutes');
const messageRouter = require('./routes/messageRoutes');

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/chats', chatRouter);
app.use('/messages', messageRouter);
>>>>>>> origin/update-source-v2
