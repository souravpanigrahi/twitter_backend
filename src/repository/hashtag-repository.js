const Hashtag = require("../models/hashtag");

const crudRepository = require("./crud-repository");

class HashtagRepository extends crudRepository {
  constructor() {
    super(Hashtag);
  }

  async create(data) {
    try {
      let hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  //get all hashtags by id
  async getHashtag(id) {
    try {
      let hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //get all hashtags by text
  async getHashtagByText(text) {
    try {
      let hashtag = await Hashtag.find({ text: text });
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deletHashtagByUd(id) {
    try {
      let hashtag = await Tweet.findByIdAndDelete(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = HashtagRepository;
