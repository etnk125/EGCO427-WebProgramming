const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need not to hash anymore bc. contact doesn't store password
// const bcrypt = require("bcryptjs");
// can implement later
// const unique = require("mongoose-unique-validator");

const ObjectSchema = new Schema({
  objtype: {
    type: String,
    Required: "Please enter",
  },
  width: {
    type: Number,
    Required: "Please enter",
  },
  height: {
    type: Number,
    Required: "Please enter",
  },
  depth: {
    type: Number,
    Required: "Please enter",
  },
});

// for hashing password
/*
contactSchema.pre("save", (next) => {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hashedPassword) => {
    user.password = hashedPassword;
    next();
  });
});
*/

module.exports = mongoose.model("QObjects", ObjectSchema);
