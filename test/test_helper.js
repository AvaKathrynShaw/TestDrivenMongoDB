const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_test");
mongoose.connections
  .once("open", () => console.log("Good to go!"))
  .on("error", error => {
    console.warn("Warning", error);
  });
