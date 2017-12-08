const assert = require("assert");
const User = require("../src/user");

describe("Create records", () => {
  it("saves a user", done => {
    const joe = new User({ name: "Joe" });

    joe.save(() => {
      //Has joe been saves successfully?
      //Mongoose isNew Property
      //if the record has not been saved to our db isNew will be set to true
      assert(!joe.isNew);
      done();
    });
  });
});
