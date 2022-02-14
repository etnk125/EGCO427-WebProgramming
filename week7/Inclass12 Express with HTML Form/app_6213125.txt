//--------------- app.js---------------//
var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/showForm", function (req, res) {
  res.sendFile(__dirname + "/" + "showForm.html");
});
var data = [];
app.post("/showData", function (req, res) {
  newData = {
    fname: req.body.fname,
    lname: req.body.lname,
    result: Number(req.body.num1) + Number(req.body.num2),
    id: Date.now().toString(),
  };
  data.push(newData);
  res.end(JSON.stringify(data, null, 2));
  fs.writeFileSync("output.json", JSON.stringify(data, null, 2));
});

app.listen(8081);
