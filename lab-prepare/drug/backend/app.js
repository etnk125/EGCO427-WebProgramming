// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const getDrug = require("./controller/getDrug.controller");
const calDrug = require("./controller/calDrug.controller");
const getDrugList = require("./controller/getDrugList.controller");

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

// get all drug
app.get("/drugs/", getDrugList);
// get one drug
app.get("/drugs/:id", getDrug);
// cal
app.get("/calculate/:package/:unit", calDrug);

module.exports = app;
