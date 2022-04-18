const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need not to hash anymore bc. contact doesn't store password
// const bcrypt = require("bcryptjs");
// can implement later
// const unique = require("mongoose-unique-validator");

const contactSchema = new Schema({
  name: { type: String },
  dose: { type: String },
  package: { type: Number },
  unit: { type: String },
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

module.exports = mongoose.model("drugs", contactSchema);
