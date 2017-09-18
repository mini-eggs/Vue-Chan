import Vue from "vue/dist/vue.esm";
import { app, router } from "./app";

const express = require("express");
const { createRenderer } = require("vue-server-renderer");
const path = require("path");
const http = require("http");
const fetch = require("node-fetch");
const request = require("request");
const bodyParser = require("body-parser");

const server = express();
const port = process.env.PORT || 8080;
const { renderToString } = createRenderer();

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

// server.get("/", (req, res) => {
//   const vm = new Vue({ router, render: h => h(app) });
//   renderToString(vm, (err, html) => {
//     if (err) {
//       res.write("Error.");
//       res.end();
//     } else {
//       res.write(html);
//       res.end();
//     }
//   });
// });

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
