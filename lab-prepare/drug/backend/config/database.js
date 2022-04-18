const mongoose = require("mongoose");

// db access depend on mongo atlas config
// using process.env for better code
const USERNAME = "admin";
const PASSWORD = "1234";
const DBNAME = "Labquiz";

// copy from mongo atlas
const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.i4tri.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

// if err occur
function errHandle(err) {
  console.log("Error to connect to ${DBNAME}");
  console.error(err);
  process.exit(1);
}

// if connect success
function connected() {
  console.log(`connect to ${DBNAME} success`);
}

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(connected)
    .catch(errHandle);
};

// something deplicate then using newUrlParser
/*
  if mongo --version >= 3.2.0
    useUnifiedTopology: true
  
    https://github.com/mongodb/node-mongodb-native/releases/tag/v3.2.1
 */
