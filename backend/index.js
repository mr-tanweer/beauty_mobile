// app.js
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authroute");
const connectdb = require("./connectDb");
const passport2 = require("./passport/passport");
require("dotenv").config();
const flash = require("connect-flash");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const cors = require('cors');

const PORT = process.env.PORT || 4000;

connectdb();

app.use(express.urlencoded({ extended: true }));


const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];

app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("", authRoutes);

// Your other routes and middleware go here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
