const User = require("../models/user");
const crudRepository = require("./crud-repository");

class UserRepository extends crudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      //console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
