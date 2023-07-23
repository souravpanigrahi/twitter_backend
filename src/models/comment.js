const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.type.ObjectId,
  },
  comment: {
    type: String,
  },
  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", "Comment"],
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
});

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;
