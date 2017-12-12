const mongoose = require("mongoose");
const PostSchema = require("./post");
const Schema = mongoose.Schema;

//Create User Structure
const UserSchema = new Schema(
  {
    name: {
      type: String,
      validate: {
        validator: name => name.length > 2,
        message: "Name must be longer than 2 characters."
      },
      required: [true, "Name is required."]
    },
    postCount: Number,
    posts: [PostSchema]
  },
  {
    usePushEach: true
  }
);

//Set the structure to the entire collection of users
const User = mongoose.model("user", UserSchema);

//If someone imports they get a reference of the model class
module.exports = User;
