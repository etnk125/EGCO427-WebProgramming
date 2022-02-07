var fs = require("fs");
var readMe = fs.readFileSync("./file.txt", "utf8");
console.log(readMe);
fs.mkdir("Project", function () {
  fs.writeFileSync("./Project/Output.txt", readMe);
});
