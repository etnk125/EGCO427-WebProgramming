var express = require("express");
var app = express();
var fs = require("fs");

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`application run at http://${host}:${port}`);
});

app.get("/getuser", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.end(data);
  });
});

app.get("/getuser/:id", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf8", (err, data) => {
    if (err) throw err;
    const user = JSON.parse(data)["user" + req.params.id];

    res.end(JSON.stringify(user, null, 2));
  });
});

app.post("/adduser", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf8", (err, data) => {
    if (err) throw err;

    let users = JSON.parse(data);
    let user = {
      user4: {
        name: "betty",
        password: "4444",
        occupation: "engineer",
        id: 4,
      },
    };
    users["user4"] = user["user4"];
    res.end(JSON.stringify(users, null, 2));
  });
});
app.delete("/deleteuser/:id", (req, res) => {
  fs.readFile(__dirname + "/user.json", "utf8", (err, data) => {
    if (err) throw err;

    let users = JSON.parse(data);
    delete users["user" + req.params.id];

    res.end(JSON.stringify(users, null, 2));
  });
});
