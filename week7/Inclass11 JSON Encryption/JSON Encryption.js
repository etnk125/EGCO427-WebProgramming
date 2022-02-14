var express = require("express");
var crypto = require("crypto");
var fs = require("fs");
var app = express();

var data = JSON.parse(fs.readFileSync("./users.json", "utf8"));
data.users.map(hashedData);

app.get("/profile/:id", function (req, res) {
  res.end(
    JSON.stringify(
      data.users.filter((user) => user.id === req.params.id)[0],
      null,
      2
    )
  );
});

app.get("/", function (req, res) {
  res.end(JSON.stringify(data, null, 2));
});

app.listen(8081);

function hashedData(data) {
  data.password = crypto.createHash("sha1").update(data.password).digest("hex");
  return data;
}
