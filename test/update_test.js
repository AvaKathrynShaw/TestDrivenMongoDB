const assert = require("assert");
const User = require("../src/user");

describe("Updating Records", () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: "Joe", postCount: 0 });
    joe.save().then(() => done());
  });

  function assertName(operation, done) {
    operation.then(() => User.find({})).then(users => {
      assert(users.length === 1);
      assert(users[0].name === "Alex");
      done();
    });
  }

  it("instance set n save", done => {
    joe.set("name", "Alex");
    assertName(joe.save(), done);
  });

  it("A model instance can update", done => {
    assertName(joe.update({ name: "Alex" }), done);
  });

  it("A model class an update", done => {
    assertName(User.update({ name: "Joe" }, { name: "Alex" }), done);
  });

  it("A model class can update one record", done => {
    assertName(User.findOneAndUpdate({ name: "Joe" }, { name: "Alex" }), done);
  });

  it("A model class can find a record with an id and update", done => {
    assertName(User.findByIdAndUpdate(joe._id, { name: "Alex" }), done);

    it("A user can have their postcount incremented by 1", () => {
      joe.set("postCount", 1);
    });
  });
});
