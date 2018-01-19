//entrypoint:
"use strict";
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
 // res.write(fs.readFileSync("index.html"));
 res.write("Hello world!");
  res.end();
}).listen(80);
console.log("Server kjører!");
