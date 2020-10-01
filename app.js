const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('public', express.static(__dirname + '/index.js'));


app.post("/", function(req, res){

  const email = req.body.email;
  const pass = req.body.password;
  const rePass = req.body.rePassword;
  console.log(email, pass, rePass);

  // const data = {
  //   members:[
  //   {
  //     email_address: email,
  //     status: "subscribed",
  //     merge_fields:
  //   }
  //
  //   ]
  // };

});


app.listen(3000, function(){
  console.log("Samplr server started");
});
