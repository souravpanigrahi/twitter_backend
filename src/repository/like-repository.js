const Like = require("../models/like");
const crudRepository = require("./crud-repository");

class LikeRepository extends crudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeRepository;
