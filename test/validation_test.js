const assert = require("assert");
const User = require("../src/user");

describe("Validating Records", () => {
  it("Requires a username", done => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name is required.");
    done();
  });

  it("requires a username of more than 2 characters", done => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name must be longer than 2 characters.");
    done();
  });
  /*
  it("disallows invalid records from being savied", done => {
    const user = new User({ name: "Al" });
    user.save().catch(validationResult => {
      const { message } = validationResult.errors;
      assert(message === "Name must be longer than 2 characters.");
      done();
    });
  });
  */
});
