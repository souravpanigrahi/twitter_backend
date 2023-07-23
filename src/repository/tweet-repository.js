const Tweet = require("../models/tweet");
const crudRepository = require("./crud-repository");

class TweetRepository extends crudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      //console.log("hi");
      let tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllTweets() {
    try {
      let tweets = await Tweet.find({});
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getTweetById(id) {
    try {
      let tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTweetById(id) {
    try {
      let tweet = await Tweet.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TweetRepository;
