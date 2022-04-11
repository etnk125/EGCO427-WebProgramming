const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { collection: "city" }
);

module.exports = mongoose.model("city", citySchema);
