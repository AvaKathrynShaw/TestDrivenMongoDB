const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Structure
const UserSchema = new Schema({
  name: String
});

//Set the structure to the entire collection of users
const User = mongoose.model("user", UserSchema);

//If someone imports they get a reference of the model class
module.exports = User;
