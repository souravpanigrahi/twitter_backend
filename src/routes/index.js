const express = require("express");

const router = express.Router();

const { createTweet, getTweet } = require("../controllers/tweetcontroller");
const {
  createUser,
  getUser,
  SignInUser,
} = require("../controllers/userController");

const togglelike = require("../controllers/toggleLikecontroller");

const authenticate = require("../middlewares/authenticate");

router.post("/tweets", createTweet);

router.get("/tweet/:id", getTweet);

router.post("/user/signup", createUser);

router.get("/user/getuser/:id", getUser);

router.post("/user/signIn", SignInUser);

router.post("/likes/toggle", authenticate, togglelike);

module.exports = router;
