const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // use number insted of intreger 
  // nk there is no 
  test1: Number,

  test2:Number,

  test3:Number,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
