const mongoose = require("mongoose");
const Like = require("./like");

//const { Schema } = mongoose;

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  noOfRetweets: {
    type: Number,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  image: {
    type: String,
    default: "",
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
