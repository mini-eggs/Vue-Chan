var express = require("express");
var path = require("path");
var http = require("http");
var fetch = require("node-fetch");
var request = require("request");
var bodyParser = require("body-parser");

var server = express();
var port = process.env.PORT || 8080;

function determineURL(URL, params) {
  switch (URL) {
    case "/posts": {
      return `https://a.4cdn.org/${params.board}/thread/${params.thread}.json`;
    }
    case "/threads": {
      return `https://a.4cdn.org/${params.board}/${params.page}.json`;
    }
    case "/boards":
    default: {
      return "https://a.4cdn.org/boards.json";
    }
  }
}

function handle(req, res) {
  fetch(determineURL(req.url, req.body))
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

function handleImage(req, res) {
  const { board, filename } = req.params;
  const url = `https://i.4cdn.org/${board}/${filename}`;
  request.get(url).pipe(res);
}

server.get("/image/:board/:filename", handleImage);
server.use(bodyParser.json());
server.use("/", express.static(path.join(__dirname, "../build")));
server.use("/static", express.static(path.join(__dirname, "../build/static")));
server.all("*", handle);
server.listen(port);
