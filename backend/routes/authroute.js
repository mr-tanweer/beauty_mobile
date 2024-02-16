const bcrypt = require("bcrypt");
const express = require("express");
const passport = require("passport");
const User = require("../modal/User"); // Make sure the path to the User model is correct

const router = express.Router();

router.post('/register',async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Username already taken." });
    }
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
    console.log(req.body);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
);

router.get("/", (req, res) => {
  res.send("hello");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Login successful!",
  })
);

module.exports = router;
