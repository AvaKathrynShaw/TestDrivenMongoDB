const mongoose = require("mongoose");

//Set mongoose to use es6 implemention of of promises
mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect("mongodb://localhost/users_test");
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Warning", error);
    });
});

//Add Hook to run isolated tests
//Done parameter is a cb that returns true when this is completed running
beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
