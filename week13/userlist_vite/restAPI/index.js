var express = require("express");
const app = express();

const port = process.env.PORT || 5001;
const mongoose = require("mongoose");
const User = require("./models/userListModel");
const bodyParser = require("body-parser");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.i4tri.mongodb.net/egco427?retryWrites=true&w=majority",
  function (error) {
    if (error) throw error;
    console.log("Successfully connected");
  }
);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes/userListRoutes");

routes(app);

app.listen(port);

console.log("User List started on : " + port);
