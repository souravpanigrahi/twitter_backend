const TweetRepository = require("../repository/tweet-repository.js");
const HashtagRepository = require("../repository/hashtag-repository.js");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    //console.log("services");
    const content = data.content;
    // console.log(content);
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());

    console.log(tags);
    //storing the tweet
    const tweet = await this.tweetRepository.create(data);

    //storing the hashtags

    let alreadyStoredTags = await this.hashtagRepository.getHashtagByText(tags);
    let textOfPresentTags = alreadyStoredTags.map((tags) => tags.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });
    
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyStoredTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async getTweet(tweetId) {
    const tweet = await this.tweetRepository.getTweetById(tweetId);
    return tweet;
  }
}

module.exports = TweetService;
