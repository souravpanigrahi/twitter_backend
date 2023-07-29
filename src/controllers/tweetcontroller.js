const TweetService = require("../services/tweet-services");
const upload = require("../config/file-upload-s3");

const tweetService = new TweetService();
const createTweet = async (req, res) => {
  const singleUploader = upload.single("image");
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(req.file);
      const payload = { ...req.body };
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a tweet",
        data: response,
        err: {},
      });
      // console.log(req.file.location);
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
