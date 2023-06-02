const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/SocialMedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

const usersRouter = require("./routes/userRouter");
const postsRouter = require("./routes/postRouter");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
