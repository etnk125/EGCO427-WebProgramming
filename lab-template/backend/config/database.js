const mongoose = require("mongoose");

// db access depend on mongo atlas config
const USERNAME = "admin";
const PASSWORD = "1234";
const DBNAME = "DatabaseName";

// copy from mongo atlas
const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.5vyqm.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

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
