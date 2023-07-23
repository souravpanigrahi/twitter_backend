const Comment = require("../models/comment");
const crudRepository = require("./crud-repository");

class CommentRepository extends crudRepository {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentRepository;
