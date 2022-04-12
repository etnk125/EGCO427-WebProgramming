// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const getOneController = require("./controller/getOne.controller");
const getAllController = require("./controller/getAll.controller");
const postController = require("./controller/post.controller");
const editController = require("./controller/edit.controller");
const deleteController = require("./controller/delete.controller");
const loginController = require("./controller/login.controller");

// incase using bcryptjs
// const bcrypt = require("bcryptjs");

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
app.get("/contacts/", getAllController);
// get one contact
app.get("/contacts/:id", getOneController);

// add one contact
app.post("/contacts", postController);
// edit one contact
app.post("/contacts/:id", editController);

// delete one contact
app.delete("/contacts/:id", deleteController);

// login
app.post("/login", loginController);
// app.get("/login", loginController);
// get request should not have body
// get work in postman but not work in browser

module.exports = app;
