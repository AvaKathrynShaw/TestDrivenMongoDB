const mongoose = require("mongoose");

const User = require("../src/user");
const Comment = require("../src/comment");
const BlogPost = require("../src/blogPost");

describe("Assocations", () => {
    let joe, blogPost, comment;

    beforeEach((done)=> {
        joe = new User({name: 'Joe'})
    })
});
