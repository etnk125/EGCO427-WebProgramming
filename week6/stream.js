var fs = require("fs");
var zlib = require("zlib");
var r = fs.createReadStream("file.txt");
var z = zlib.createGzip();
var w = fs.createWriteStream("file.txt.gz");
r.pipe(z).pipe(w);
