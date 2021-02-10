// server.js
"use strict";
const http = require("http");
const port = 3000;
const quotes = require("./quotes.js");

http
  .createServer((req, res) => {
  const index = Math.floor(Math.random() * quotes.length); // random number as the array index
  const randomQuote = quotes[index]; // quote in index 
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(randomQuote);
    res.end();
  })
  .listen(port);
console.log("Listening on port http://localhost:" + port);


