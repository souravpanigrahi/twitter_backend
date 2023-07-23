const LikeRepository = require("../repository/like-repository");
const TweetRepository = require("../repository/tweet-repository");
//const LikeRepository = LikeRepository();

class LikeService {
  constructor() {
    this.LikeRepository = new LikeRepository();
    this.TweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    let likeable;
    if (modelType === "Tweet") {
      likeable = await this.TweetRepository.getTweetById(modelId);
      console.log(likeable);
    } else if (modelType === "Comment") {
      // to-do
    } else {
      console.log("wrong model type");
    }
    const exists = await this.LikeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    //console.log(exists);
    //const value = Boolean(exists);

    //console.log(value);
    if (exists) {
      //to-d0
      likeable.likes.pull(exists.id);
      await likeable.save();
      this.LikeRepository.destroy(exists.id);
      console.log("Unliked");
      //console.log("hi");
    } else {
      const newLike = await this.LikeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      //console.log(newLike);
      likeable.likes.push(newLike);
      await likeable.save();
      console.log("Liked");
    }
  }
}

module.exports = LikeService;
