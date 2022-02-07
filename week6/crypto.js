var crypto = require("crypto");
var fs = require("fs");

// var shasum = crypto.createHash("sha1");
// var s = fs.ReadStream("file.txt");
// s.on("data", function (d) {
//   shasum.update(d);
// });
// s.on("end", function () {
//   var d = shasum.digest("hex");
//   console.log(d + " -- file.txt");
// });
const hash = crypto.createHash("sha1").update("hello world").digest("hex");
console.log(hash + " -- file.txt");
