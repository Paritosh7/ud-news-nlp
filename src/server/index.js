var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();
const KEY = process.env.API_KEY;
const app = express();
const fetch = require("node-fetch");

/* Middleware*/
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile("/client/views/index.html", { root: __dirname + "/.." });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

// using route parameters
app.get("/get/:text", async (req, res) => {
  const text = req.params.text;
  console.log(text);
  const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${KEY}&of=json&txt=${text}&lang=en`;
  const fetchResponse = await fetch(api_url);
  const json = await fetchResponse.json();
  res.json(json);
});
