// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const getAllController = require("./controller/getAll.controller");
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

// get all contact
app.get("/cities/", getAllController);

module.exports = app;
