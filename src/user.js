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
    //postCount: Number,
    posts: [PostSchema],
    likes: Number
  },
  {
    usePushEach: true
  }
);

//Add virtual properties outside of the user schema
UserSchema.virtual("postCount").get(function() {
  return this.posts.length;
  //console.log("Hi");
});

//Add Middleware
UserSchema.pre("remove", function(next) {
  const BlogPost = mongoose.model("blogPost");

  BlogPost.remove({ _id: { $in: this.blogPosts } })
  .then(() => next());
});

//Set the structure to the entire collection of users
const User = mongoose.model("user", UserSchema);

//If someone imports they get a reference of the model class
module.exports = User;
