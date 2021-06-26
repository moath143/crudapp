const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  title: String,
  imageUrl: String,
  desc: String,
  postid: String,
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
