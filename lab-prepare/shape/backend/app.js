// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const readAObject = require("./controller/readAObject.controller");
const calAObject = require("./controller/calAObject.controller");
const listAllObject = require("./controller/listAllObject.controller");

const app = express();

// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// get all object
app.get("/objects/", listAllObject);
// get one object
app.get("/objects/:id", readAObject);
// cal
app.get("/calculate/:height/:width/:depth", calAObject);

module.exports = app;
