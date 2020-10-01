const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use('public', express.static(__dirname + '/index.js'));





app.listen(3000, function(){
  console.log("Samplr server started");
});
