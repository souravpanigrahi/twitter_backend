const TweetService = require("../services/tweet-services");

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const response = await tweetService.create(data);

    return res.status(201).json({
      success: true,
      message: "Succesfully created",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered ",
      data: {},
      error: error,
    });
  }
};
const getTweet = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await tweetService.getTweet(id);
    return res.status(201).json({
      success: true,
      message: "Succesfully fetched a tweet",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered ",
      data: {},
      error: error,
    });
  }
};

module.exports = { createTweet, getTweet };
