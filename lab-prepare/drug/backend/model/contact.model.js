const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need not to hash anymore bc. contact doesn't store password
// const bcrypt = require("bcryptjs");
// can implement later
// const unique = require("mongoose-unique-validator");

const contactSchema = new Schema({
  cid: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  mobile: { type: String },
  email: { type: String },
  facebook: { type: String },
  imageUrl: { type: String },
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

module.exports = mongoose.model("Contacts", contactSchema);
