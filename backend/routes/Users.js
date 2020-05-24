const Router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../config/keys");

/**
 * @path /api/users/register
 * @access Public
 * @method POST
 */
Router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return res.status(401).json({ error: "Please provide all details! 😮"});
    }

    let user = await User.findOne({ email });
    if (user)
      return res
        .status(500)
        .json({ error: `User with email ${email} already exist! 😮`});

    const hashedPassword = await bcryptjs.hash(password, 10);
    let newUser = new User({
      email,
      password: hashedPassword,
    });

    let createdUser = await newUser.save();

    return res.status(401).json({
      message: "You have signed up successfully. 😊",
      user: { ...createdUser._doc, password: null },
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * @path /api/users/login
 * @access Public
 * @method POST
 */
Router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return res.status(401).json({
        error: "Please provide all details! 😮"
      })
    }

    let user = await User.findOne({ email });

    if (!user)
      return res.status(500).json({error: `User with email ${email} doesn't exist! 😮`});

    const userMatched = await bcryptjs.compare(password, user.password);

    if (!userMatched) return res.status(500).json({error: `Invalid Password! 😮`});

    let payload = { email: user.email, userId: user.id };

    let token = await jwt.sign(payload, keys.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(401).json({
      message: "You have logged in successfully. 😊",
      userId: payload.userId,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
