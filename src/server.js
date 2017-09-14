var express = require("express");
var path = require("path");
var fetch = require("node-fetch");

var server = express();
var port = process.env.PORT || 8080;

function determineURL(URL) {
  switch (URL) {
    case "/boards":
    default: {
      return "https://a.4cdn.org/boards.json";
    }
  }
}

function handle(req, res) {
  fetch(determineURL(req.url))
    .then(chanRes => chanRes.json())
    .then(data => {
      res.write(JSON.stringify(data));
      res.end();
    })
    .catch(err => {
      res.write("Error.");
      res.end();
    });
}

server.use("/", express.static(path.join(__dirname, "../build")));
server.use("/static", express.static(path.join(__dirname, "../build/static")));
server.all("*", handle);
server.listen(port);
